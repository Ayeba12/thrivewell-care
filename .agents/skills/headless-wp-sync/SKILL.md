---
name: headless-wp-sync
description: Sync a Next.js App Router frontend with a local Headless WordPress installation via GraphQL (WPGraphQL) and ACF.
---

# Headless WordPress Synchronization Skill

This skill provides the instructions and templates to dynamically sync a Next.js App Router project with a local Headless WordPress CMS.

## Context
The local WordPress files are located in `app/public/` and configured with:
- **WPGraphQL** (for API queries)
- **WPGraphQL for ACF** (to fetch custom fields)
- **Advanced Custom Fields Pro** (for page/card models)

---

## 1. Verifying Connection
To verify that WordPress is active and the GraphQL API is live:
1. Verify that the server is serving content at the local WordPress domain (e.g. `http://thrivewell-care.local/graphql`).
2. Run a query in the GraphiQL IDE inside WP Admin to confirm that posts can be retrieved.

---

## 2. API Helper Template (`frontend/lib/wordpress.ts`)
Create a core file `lib/wordpress.ts` in Next.js to fetch data from WordPress:

```typescript
async function fetchAPI(query: string, { variables }: any = {}) {
  const headers = { 'Content-Type': 'application/json' };
  const res = await fetch(process.env.WORDPRESS_GRAPHQL_ENDPOINT!, {
    method: 'POST',
    headers,
    body: JSON.stringify({ query, variables }),
    next: { revalidate: 3600 } // Default cache 1 hour
  });
  
  const json = await res.json();
  if (json.errors) {
    throw new Error('Failed to fetch WordPress API');
  }
  return json.data;
}

export async function getArticles() {
  const data = await fetchAPI(`
    query GetArticles {
      posts(first: 100) {
        nodes {
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

## 3. Dynamic Page Integration (`app/resources/[id]/page.tsx`)
Update the dynamic single guide page to fetch data on-demand and pre-render paths at build time:

```typescript
import { getArticles } from '@/lib/wordpress';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const articles = await getArticles();
  return articles.map((article: any) => ({
    id: String(article.id),
  }));
}

export async function generateMetadata({ params }: any) {
  const { id } = await params;
  const articles = await getArticles();
  const article = articles.find((a: any) => String(a.id) === id);
  return {
    title: article ? `${article.title} | Thrivewell Care` : 'Resource Guide',
    description: article ? article.desc : 'Eldercare resource guide',
  };
}

export default async function ResourcePost({ params }: any) {
  const { id } = await params;
  const articles = await getArticles();
  const article = articles.find((a: any) => String(a.id) === id);

  if (!article) {
    notFound();
  }
  
  // Render content in page layout...
}
```
