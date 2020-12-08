const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const MongoClient = require('mongodb').MongoClient;

app.listen(port, function () {
    console.log('listening on ' + port)
})


MongoClient.connect('mongodb+srv://spm_bois:atk123@cluster0.7guuj.mongodb.net/Game-Reviewer?retryWrites=true&w=majority', { useUnifiedTopology: true })
    .then(client => {
        console.log('Connected to Database')

        // Connect to database and its collection
        const db = client.db('Game-Reviewer')
        
        app.set('view engine', 'ejs')

        // Body parser
        app.use(bodyParser.urlencoded({ extended: true }))
        app.use(express.static(__dirname + '/views'));
        
        
        // Handlers
        // Review Page 1
        app.get('/', function (req, res) {
            res.render('frontpage.ejs')  
        })

        // Game Review 1
        app.get('/review1', function (req, res) {
            db.collection('review1').find().toArray()
                .then(results => {
                    res.render('review1.ejs', { reviews: results })
                })
                .catch(error => console.error(error))
        })
        app.post('/review1', function (req, res) {
            db.collection('review1').insertOne(req.body)
                .then(result => {
                    res.redirect('/review1')
                })
                .catch(error => console.error(error))
        })

        // Game Review 2
        app.get('/review2', function (req, res) {
            db.collection('review2').find().toArray()
                .then(results => {
                    res.render('review2.ejs', { reviews: results })
                })
                .catch(error => console.error(error))
        })
        app.post('/review2', function (req, res) {
            db.collection('review2').insertOne(req.body)
                .then(result => {
                    res.redirect('/review2')
                })
                .catch(error => console.error(error))
        })

        // Game Review 3
        app.get('/review3', function (req, res) {
            db.collection('reviews').find().toArray()
                .then(results => {
                    res.render('review3.ejs', { reviews: results })
                })
                .catch(error => console.error(error))
        })
        app.post('/review3', function (req, res) {
            db.collection('reviews').insertOne(req.body)
                .then(result => {
                    res.redirect('/review3')
                })
                .catch(error => console.error(error))
        })
    })
    .catch(error => console.error(error))