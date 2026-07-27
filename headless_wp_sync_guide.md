# Headless WordPress & Next.js Synchronization Guide

This guide is a technical checklist and architecture blueprint for connecting your completed Next.js frontend to the local WordPress installation located in the `app/public/` folder.

---

## 1. WordPress Backend Setup

The required plugins are already installed in `app/public/wp-content/plugins/`:
- **Advanced Custom Fields Pro (ACF)**
- **WPGraphQL**
- **WPGraphQL for ACF**

### Step-by-step Actions in WordPress Admin:
1. **Access the Admin Panel**: Navigate to your local WordPress URL (typically `http://thrivewell-care.local/wp-admin` or similar, depending on your Local settings).
2. **Activate Plugins**: Go to the Plugins menu and activate **WPGraphQL**, **Advanced Custom Fields Pro**, and **WPGraphQL for ACF**.
3. **Configure WPGraphQL Permalinks**: Ensure permalinks are configured as custom/post-name (`Settings > Permalinks > Post name`).
4. **Acquire GraphQL Endpoint**: Test that the endpoint is live by navigating to `http://your-local-domain/graphql` or using the **GraphiQL IDE** tab that appears in your WordPress dashboard.

---

## 2. Content Modeling (ACF & CPT)

We need to model the WordPress schemas to match our Next.js static structures:

### A. Resource Guides (Standard WP Posts)
No Custom Post Type needed. We will use standard WordPress **Posts** and **Categories**.
- **Categories to Create**: `Funding`, `Dementia Support`, `Wellbeing`, `Local Resources`.
- **Custom ACF Fields for Posts**:
  - Name: `readTime` (Type: Text) — e.g. "6 min read".
  - Name: `excerpt` (Use default WP Post Excerpt).
  - Name: `featuredImage` (Use default WP Post Featured Image).

### B. Team Members (Custom CPT or ACF Options)
Create a Custom Post Type `Team` or use ACF groups:
- **ACF Field Group**: `Team Member Fields` (Rules: Show if Post Type is equal to `team`).
- **Fields**:
  - `role` (Type: Text) — e.g., "Co-founder & Director".
  - `bio` (Type: Textarea).
  - Profile Image (Use default WP Featured Image).

### C. Careers (Custom CPT or ACF Options)
Create a Custom Post Type `Job` or use ACF groups:
- **ACF Field Group**: `Job Fields` (Rules: Show if Post Type is equal to `job`).
- **Fields**:
  - `role` (Type: Text) — e.g., "Care Worker".
  - `location` (Type: Text) — e.g., "West Lothian".
  - `salary` (Type: Text) — e.g., "£14.00 - £16.00 / hour".
  - `description` (Type: Textarea).

---

## 3. Next.js Frontend Configuration

### A. Environment Variables (`frontend/.env.local`)
Create or edit this file to contain your local API endpoints:
```env
WORDPRESS_GRAPHQL_ENDPOINT="http://thrivewell-care.local/graphql"
REVALIDATE_SECRET="thrivewell_sync_token_2026"
```

### B. API Helper (`frontend/lib/wordpress.ts`)
Create this file to execute server-side GraphQL fetches:
```typescript
async function fetchAPI(query: string, { variables }: any = {}) {
  const headers = { 'Content-Type': 'application/json' };
  const res = await fetch(process.env.WORDPRESS_GRAPHQL_ENDPOINT!, {
    method: 'POST',
    headers,
    body: JSON.stringify({ query, variables }),
    next: { revalidate: 3600 } // Cache pages; revalidate every hour or on-demand
  });
  
  const json = await res.json();
  if (json.errors) {
    console.error(json.errors);
    throw new Error('Failed to fetch WordPress API');
  }
  return json.data;
}

export async function getArticles() {
  const data = await fetchAPI(`
    query GetArticles {
      posts(first: 100) {
        nodes {
          id
          databaseId
          title
          excerpt
          date
          featuredImage {
            node {
              sourceUrl
            }
          }
          categories {
            nodes {
              name
            }
          }
          acfFields {
            readTime
          }
          content
        }
      }
    }
  `);
  
  // Map WordPress GraphQL schema back to local App Article structure
  return data?.posts?.nodes.map((node: any) => ({
    id: node.databaseId,
    title: node.title,
    category: node.categories?.nodes[0]?.name || 'Uncategorized',
    readTime: node.acfFields?.readTime || '5 min read',
    date: new Date(node.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' }),
    desc: node.excerpt?.replace(/<[^>]*>/g, '') || '',
    content: node.content || '',
    image: node.featuredImage?.node?.sourceUrl || '/images/care-support.jpg'
  }));
}
```

---

## 4. Revalidation & Sync Verification Checklist

- [ ] Activate all plugins in WP Admin panel.
- [ ] Model categories and Custom Fields exactly as specified.
- [ ] Connect Next.js via `.env.local` to the local WordPress URL.
- [ ] Replace local import from `@/lib/resources` in `app/resources/page.tsx` and `app/resources/[id]/page.tsx` with dynamic fetches using `getArticles()`.
- [ ] Set up a Webhook in WordPress using the **WP Webhooks** plugin to hit `http://localhost:3000/api/revalidate?secret=thrivewell_sync_token_2026` whenever a post is updated.
