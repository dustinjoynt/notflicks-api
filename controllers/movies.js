const handleMovies = (req, res, db) => {
  const {id, movie_id, movies_data} = req.body
  db.insert({
    id: id,
    movie_id: movie_id,
    movies_data: movies_data
  })
    .into('saved_movies')
    .returning('*')
    .then(movie => {
      console.log(movie[0])
      res.json(movie[0])
    })
    // .then(res => status(200).json('sucess mofo'))
    .catch(err => res.status(400).json('Unable to save movies'))
}

module.exports = {
  handleMovies: handleMovies
}