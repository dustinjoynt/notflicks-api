const handleMovies = (req, res, db) => {
  const { id, movie_id, movies_data} = req.body
  db.insert({
    id: id,
    movie_id: movie_id,
    movies_data: movies_data
  })
  .into('saved_movies')
  .returning('*')
  .then( movie => {
    res.json(movie[0])
  })
  .catch(err => status(400).json('Unable to save movies'))
}

module.exports = {
  handleMovies: handleMovies
}
