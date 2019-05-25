const handleRemove = (req, res, db) => {
  const { id, movie_id} = req.body
  db.select('*').from('saved_movies').where({id})
  .andWhere({movie_id})
  .del()
  .then(movie => {
    if (movie > 0) {
      res.json('Movie removed')
    } else{
      res.status(400).json('Movie not found')
    }
  })
  .catch(err => res.status(400).json('Error removing movie'))
}

module.exports = {
  handleRemove: handleRemove
}