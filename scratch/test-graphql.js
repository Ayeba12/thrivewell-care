async function testFetch() {
  const query = `
    query GetArticles {
      posts(first: 100) {
        nodes {
          databaseId
          title
          featuredImage {
            node {
              sourceUrl
              mediaItemUrl
              altText
            }
          }
        }
      }
    }
  `;

  try {
    const res = await fetch('http://thrivewell-care.local/graphql', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query })
    });
    const json = await res.json();
    console.log("GraphQL Featured Image Response:", JSON.stringify(json.data.posts.nodes.filter(n => n.featuredImage !== null), null, 2));
  } catch (err) {
    console.error("Error:", err);
  }
}

testFetch();
