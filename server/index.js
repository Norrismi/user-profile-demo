require('dotenv').config()
const { json } = require('body-parser')
const massive = require('massive')
const express = require('express')
const userController = require('./controllers/userController')

const connectionString = process.env.CONNECTION_STRING

const port = 3005
const app = express()

app.use(json())

massive(connectionString)
    .then(db => {
        app.set("db", db);
    })
    .catch(err => err);

// THIS IS A POST REQUEST SO WE USE REQ.BODY
app.post('/user/create', userController.createUser)

// THIS IS A GET REQUEST SO WE USE REQ.PARAMS
// app.get('/user/create/:email/:password', userController.createUser)


app.listen(port, () => {
    console.log(`Listening on port: ${port}`)
})