const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const MongoClient = require('mongodb');

app.listen(3000, function () {
    console.log('listening on 3000')
})


MongoClient.connect('mongodb+srv://spm_bois:atk123@cluster0.7guuj.mongodb.net/Game-Reviewer?retryWrites=true&w=majority', { useUnifiedTopology: true })
    .then(client => {
        console.log('Connected to Database')

        // Connect to database and its collection
        const db = client.db('Game-Reviewer')
        const reviewsCollection = db.collection('reviews')
        app.set('view engine', 'ejs')

        // Body parser
        app.use(bodyParser.urlencoded({ extended: true }))

        // Handlers
        app.get('/', function (req, res) {
            const cursor = db.collection('reviews').find().toArray()
                .then(results => {
                    res.render('reviewpage.ejs', { reviews: results })
                })
                .catch(error => console.error(error))
        })

        // Posted reviews are inserted to collection
        app.post('/reviews', function (req, res) {
            reviewsCollection.insertOne(req.body)
                .then(result => {
                    res.redirect('/')
                })
                .catch(error => console.error(error))
        })
    })
    .catch(error => console.error(error))