const handleUser = (req, res, db) => {
  const { id } = req.params
  db.select('*').from('saved_movies').where({id})
  .then(user => {
    if (user.length) {
      res.json(user)
    } else {
      res.status(200).json([])
    }
  })
  .catch(err => res.status(400).json('Error getting user'))
}

module.exports = {
  handleUser: handleUser
}