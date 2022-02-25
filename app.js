const express = require('express')
const app = express()
const port = 3000
const exphbs = require('express-handlebars')
const movieList = require('./movies.json')

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.use(express.static('public'))

app.get('/', (req, res) => {

  res.render('index', { movies: movieList.results })
})

app.get('/movies/:movie_id', (req, res) => {
  const movieOne = {
    id: 0,
    title: '',
    description: '',
    release_date: '',
    image: ''
  }

  movieList.results.forEach((item) => {
    if (item.id === Number(req.params.movie_id)) {
      movieOne.id = item.id
      movieOne.title = item.title
      movieOne.description = item.description
      movieOne.release_date = item.release_date
      movieOne.image = item.image
    }
  } )

  res.render('show', { movie: movieOne })
})

app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})