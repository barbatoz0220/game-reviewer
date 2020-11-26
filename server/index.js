const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const MongoClient = require('mongodb');
const mongoose = require('mongoose')

const userController = require('./controllers/user')

app.listen(3001, function () {
    console.log('listening on 3001')
})

// middleware
app.use(bodyParser.json())

const uri = 'mongodb+srv://spm_bois:atk123@cluster0.7guuj.mongodb.net/Game-Reviewer?retryWrites=true&w=majority'

// mongoose.connect(uri, options, callback)
mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true})
const db = mongoose.connection 
db.on('error', console.error.bind(console, 'connection error'))
db.once('open', () => console.log('successfully connect to database'))

// api
app.post('/login', userController.postLogin)
app.post('/register', userController.postRegister)




