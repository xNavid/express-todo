require('dotenv').config()

const express = require('express')
require('./src/db/mongoose')
const userRouter = require('./src/controllers/user')
const taskRouter = require('./src/controllers/task')
const dashboardRouter = require('./src/controllers/dashboard');
const app = express()

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)
app.use(dashboardRouter)

module.exports = app