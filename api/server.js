const express = require('express')
const cors = require('cors')
const morgan = require('morgan')

const userRouter = require('./users/user-router')

const server = express()

server.use(express.json())
server.use(cors())
server.use(morgan('tiny'))

server.use('/api/users', userRouter)

server.get('/', (req,res) => {
    res.send(`<h2>Server is working let's deploy!</h2>`)
})

module.exports = server;