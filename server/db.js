const environment = process.env.NODE_ENV || 'development'
const config = require('../knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
    getUsers,
    getTasks,
    getBoxes
}

function getUsers (db = connection) {
  return db('users').select()
}

function getTasks (db = connection) {
  return db('tasks').select()
}

function getBoxes (id, db = connection){
  return db('tasks')
    .select('boxes')
    .where('user_id', id)
    //.then(parse)
} 

// JSON.parse()

function parse(stuff) {
  stuff.boxes = JSON.parse(stuff.boxes)
  return stuff
}