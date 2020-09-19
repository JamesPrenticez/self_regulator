const path = require('path')
const express = require('express')

const userRoutes = require('./routes/users')
const taskRoutes = require('./routes/tasks')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

module.exports = server

// Routes
server.use('/', userRoutes)
server.use('/', taskRoutes)