const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('This is My "movie list" web app')
})

app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})