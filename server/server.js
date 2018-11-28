const path = require('path')
const express = require('express')

const auth = require('./routes/auth')
const fish = require('./routes/fish')

const server = express()

server.use(express.json())
server.use('/api/v1/auth', auth)
server.use('/api/v1/fish', fish)
server.use(express.static(path.join(__dirname, './public')))

server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'))
})

module.exports = server
