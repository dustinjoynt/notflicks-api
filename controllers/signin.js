const handleSignIn = (req, res) => {
  return res.status(400).json('Incorrect from submission')
}

module.exports = {
  handleSignIn: handleSignIn
}