const url = 'http://thrivewell-care.local/graphql';
console.log(`Connecting to: ${url}`);
fetch(url, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ query: '{ posts { nodes { title } } }' })
})
  .then(res => res.json())
  .then(data => {
    console.log('Success:', JSON.stringify(data, null, 2));
    process.exit(0);
  })
  .catch(err => {
    console.error('Connection failed:', err.message);
    process.exit(1);
  });
