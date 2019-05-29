const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const knex = require('knex')
const bcrypt = require('bcrypt')

const signin = require('./controllers/signin')
const register = require('./controllers/register')
const movies = require('./controllers/movies')
const user = require('./controllers/user')
const remove = require('./controllers/remove')
//register page

//sign in page

//user profile movie page

// const db = require('knex')({
//   client: 'pg',
//   connection: process.env.PG_CONNECTION_STRING,
//   searchPath: ['knex', 'public'],
// });

const db = knex({
  client: 'pg',
  connection: {
    host: '127.0.0.1',
    user: 'forestp',
    password: '',
    database: 'notflicks'
  }
})

// db.select('*').from('users').then( data => {
//   console.log(data)
// })

const app = express()

app.use(bodyParser.json())
app.use(cors())

app.get('/', (req, res) => {
  res.send('It is working')
})
app.post('/signin', (req, res) => {
  signin.handleSignIn(req, res, db, bcrypt)
})
app.post('/register', (req, res) => {
  register.handleRegister(req, res, db, bcrypt)
})
app.post('/movies', (req, res) => {
  movies.handleMovies(req, res, db)
})
app.get('/user/:id', (req, res) => {
  user.handleUser(req, res, db)
})
app.post('/remove', (req, res) => {
  remove.handleRemove(req, res, db)
})

app.listen(4000, () => {
  console.log('App is running on port 4000')
})