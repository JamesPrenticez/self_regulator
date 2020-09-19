const express = require('express')
const db = require('../db')
const router = express.Router()

module.exports = router

//Test
router.get('/hello', (req, res) => {
      res.send('hello world')
})

//Get user and display on main page
router.get('/api', (req, res) => {
  db.getUsers()
    .then(users => {
      res.json({users: users})
    })
})