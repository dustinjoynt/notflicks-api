const handleProfile = (req, res) => {
  const {id} = req.params;
  console.log(req)
  db.select('*').from('users').where({id: id})
    .then(user => {
      res.json(user)
      // if (user.length) {
      //   res.json(user[0])
      // } else {
      //   res.status(400).json('Not Found')
      // }
    }).catch(err => res.status(404).json("error getting user"))
}

module.exports = {
  handleProfile: handleProfile
}