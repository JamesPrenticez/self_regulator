const express = require('express')
const db = require('../db')
const router = express.Router()

module.exports = router

//Get tasks and display on main page
router.get('/api/tasks', (req, res) => {
  db.getTasks()
    .then(task => {
      res.json({task: task})
    })
})