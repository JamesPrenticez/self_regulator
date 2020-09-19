const environment = process.env.NODE_ENV || 'development'
const config = require('../knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
    getUsers,
    getTasks
}

function getUsers (db = connection) {
  return db('users').select()
}

function getTasks (db = connection) {
  return db('tasks').select()
}
