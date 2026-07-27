export interface WPArticle {
  id: number;
  title: string;
  category: string;
  readTime: string;
  date: string;
  desc: string;
  content: string;
  image: string;
}

// Resilient read-time calculation based on word count
function calculateReadTime(content: string, acfReadTime?: string): string {
  if (acfReadTime && acfReadTime.trim().length > 0) {
    return acfReadTime;
  }
  const wordsPerMinute = 200;
  const cleanContent = content ? content.replace(/<[^>]*>/g, '') : '';
  const wordCount = cleanContent.split(/\s+/).filter(w => w.length > 0).length;
  const minutes = Math.ceil(wordCount / wordsPerMinute);
  const calculated = minutes > 0 ? minutes : 5;
  return `${calculated} min read`;
}

// Clean HTML tags for short description text
function cleanExcerpt(excerpt: string, limit: number = 180): string {
  if (!excerpt) return '';
  const clean = excerpt.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim();
  if (clean.length <= limit) return clean;
  return clean.slice(0, limit) + '...';
}

// Category fallback image assignment matching design system
function getFallbackImage(category: string): string {
  switch (category.toLowerCase()) {
    case 'funding':
      return '/images/hero-elderly.jpg';
    case 'dementia support':
      return '/images/carer-portrait.jpg';
    case 'local resources':
      return '/images/companionship.jpg';
    case 'wellbeing':
    default:
      return '/images/care-support.jpg';
  }
}

// Helper to extract the first image URL from HTML content if featured image is missing
function extractFirstImage(content: string): string | null {
  if (!content) return null;
  const match = content.match(/<img[^>]+src="([^">]+)"/);
  return match ? match[1] : null;
}



async function fetchAPI(query: string, { variables }: any = {}) {
  const headers = { 'Content-Type': 'application/json' };
  const endpoint = process.env.WORDPRESS_GRAPHQL_ENDPOINT || 'http://thrivewell-care.local/graphql';
  
  const isDev = process.env.NODE_ENV === 'development';
  
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), 2000); // 2 second timeout

  try {
    const res = await fetch(endpoint, {
      method: 'POST',
      headers,
      body: JSON.stringify({ query, variables }),
      cache: isDev ? 'no-store' : 'default',
      next: isDev ? undefined : { revalidate: 10 }, // Cache results for 10 seconds in production
      signal: controller.signal
    });
    
    clearTimeout(id);
    
    const json = await res.json();
    if (json.errors) {
      console.error('WP GraphQL Errors:', json.errors);
      throw new Error('Failed to fetch from WordPress API');
    }
    return json.data;
  } catch (error) {
    clearTimeout(id);
    throw error;
  }
}

export async function getArticles(): Promise<WPArticle[]> {
  try {
    const data = await fetchAPI(`
      query GetArticles {
        posts(first: 100) {
          nodes {
            databaseId
            title
            excerpt
            date
            content
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
          }
        }
      }
    `);

    if (!data?.posts?.nodes) return [];

    return data.posts.nodes.map((node: any) => {
      const rawContent = node.content || '';
      const rawExcerpt = node.excerpt || '';
      const categoryName = node.categories?.nodes?.[0]?.name || 'Wellbeing';
      
      // Get featured image, first image in content body, or category fallback
      const imageUrl = node.featuredImage?.node?.sourceUrl || 
                       extractFirstImage(rawContent) || 
                       getFallbackImage(categoryName);

      // Format post date to match design standard
      const formattedDate = new Date(node.date).toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      });

      return {
        id: node.databaseId,
        title: node.title || '',
        category: categoryName,
        readTime: calculateReadTime(rawContent),
        date: formattedDate,
        desc: cleanExcerpt(rawExcerpt || rawContent),
        content: rawContent,
        image: imageUrl
      };
    });
  } catch (error) {
    console.error('Error fetching articles:', error);
    return [];
  }
}
