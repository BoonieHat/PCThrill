// client.js
const sanityClient = require('@sanity/client')

module.exports = sanityClient({
  projectId: 'kqtik8iw', // you can find this in sanity.json
  dataset: 'pcthrill', // or the name you chose in step 1
  useCdn: true // `false` if you want to ensure fresh data
})