const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const app = express();
const port = 3000;
const { MongoClient } = require('mongodb');
var ObjectID = require('mongodb').ObjectID;

// Server
app.listen(port, function () {
    console.log('listening on ' + port)
})

// Body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Nodemailer
app.use("/mail", function (req, res) {
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'gamereviewer.atk@gmail.com',
            pass: 'GR_spmproject'
        }
    });
    console.log(req.body.username);
    console.log(req.body.request);
    var mainOptions = {
        from: 'GameReviewer',
        to: 'gamereviewer.atk@gmail.com',
        subject: 'GR-Suggestion',
        text: 'Sent by user: ' + req.body.username + '\nContent: ' + req.body.request,
    }
    transporter.sendMail(mainOptions, function (err, info) {
        if (err) {
            console.log(err);
            res.redirect('/');
        } else {
            console.log('Message sent: ' + info.response);
            res.redirect('/');
        }
    });
})

// Database connection and routing
MongoClient.connect('mongodb+srv://spm_bois:atk123@cluster0.7guuj.mongodb.net/Game-Reviewer?retryWrites=true&w=majority', { useUnifiedTopology: true })
    .then(client => {
        console.log('Connected to Database')

        // Connect to database and its collection
        const db = client.db('Game-Reviewer')

        // Set view engine to ejs
        app.set('view engine', 'ejs')

        // Body parser
        app.use(bodyParser.urlencoded({ extended: true }));
        app.use(bodyParser.json());
        app.use(express.static(__dirname + '/views'));


        // Handlers
        // Review Page 1
        app.get('/', function (req, res) {
            res.render('pages/common/frontpage.ejs')
        })
        app.get('/suggestion', function (req, res) {
            res.render('pages/common/suggestion.ejs')
        })

        // Game Review 1
        app.get('/review1', function (req, res) {
            db.collection('review1').find().toArray()
                .then(results => {
                    res.render('pages/reviews/review1.ejs', { reviews: results })
                })
                .catch(error => console.error(error))
        })
        app.post('/review1', function (req, res) {
            var review = {
                username: req.body.username,
                review: req.body.review,
                likes: parseInt(0),
                dislikes: parseInt(0),
                voted: false
            }
            db.collection('review1').insertOne(review)
                .then(result => {
                    res.redirect('/review1')
                })
                .catch(error => console.error(error))
        })
        app.get('/like1/:id', async function(req, res) {
            var requestID = ObjectID(req.params.id);
            const review = await db.collection('review1').findOneAndUpdate({"_id": requestID}, {$inc: {"likes":+1}}, {
                new: true,
                upsert: true
            })
            res.json(review.value);
        })
        app.get('/dislike1/:id', async function(req, res) {
            var requestID = ObjectID(req.params.id);
            const review = await db.collection('review1').findOneAndUpdate({"_id": requestID}, {$inc: {"dislikes":-1}}, {
                new: true,
                upsert: true
            })
            res.json(review.value);
        })
        
        // Game Review 2
        app.get('/review2', function (req, res) {
            db.collection('review2').find().toArray()
                .then(results => {
                    res.render('pages/reviews/review2.ejs', { reviews: results })
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
        app.get('/like2/:id', async function(req, res) {
            var requestID = ObjectID(req.params.id);
            const review = await db.collection('review2').findOneAndUpdate({"_id": requestID}, {$inc: {"likes":+1}}, {
                new: true,
                upsert: true
            })
            res.json(review.value);
        })
        app.get('/dislike2/:id', async function(req, res) {
            var requestID = ObjectID(req.params.id);
            const review = await db.collection('review2').findOneAndUpdate({"_id": requestID}, {$inc: {"dislikes":-1}}, {
                new: true,
                upsert: true
            })
            res.json(review.value);
        })

        // Game Review 3
        app.get('/review3', function (req, res) {
            db.collection('review3').find().toArray()
                .then(results => {
                    res.render('pages/reviews/review3.ejs', { reviews: results })
                })
                .catch(error => console.error(error))
        })
        app.post('/review3', function (req, res) {
            db.collection('review3').insertOne(req.body)
                .then(result => {
                    res.redirect('/review3')
                })
                .catch(error => console.error(error))
        })
        app.get('/like3/:id', async function(req, res) {
            var requestID = ObjectID(req.params.id);
            const review = await db.collection('review3').findOneAndUpdate({"_id": requestID}, {$inc: {"likes":+1}}, {
                new: true,
                upsert: true
            })
            res.json(review.value);
        })
        app.get('/dislike3/:id', async function(req, res) {
            var requestID = ObjectID(req.params.id);
            const review = await db.collection('review3').findOneAndUpdate({"_id": requestID}, {$inc: {"dislikes":-1}}, {
                new: true,
                upsert: true
            })
            res.json(review.value);
        })

        // Game Review 4
        app.get('/review4', function (req, res) {
            db.collection('review4').find().toArray()
                .then(results => {
                    res.render('pages/reviews/review4.ejs', { reviews: results })
                })
                .catch(error => console.error(error))
        })
        app.post('/review4', function (req, res) {
            db.collection('review4').insertOne(req.body)
                .then(result => {
                    res.redirect('pages/review4')
                })
                .catch(error => console.error(error))
        })
        app.get('/like4/:id', async function(req, res) {
            var requestID = ObjectID(req.params.id);
            const review = await db.collection('review4').findOneAndUpdate({"_id": requestID}, {$inc: {"likes":+1}}, {
                new: true,
                upsert: true
            })
            res.json(review.value);
        })
        app.get('/dislike4/:id', async function(req, res) {
            var requestID = ObjectID(req.params.id);
            const review = await db.collection('review4').findOneAndUpdate({"_id": requestID}, {$inc: {"dislikes":-1}}, {
                new: true,
                upsert: true
            })
            res.json(review.value);
        })

        // Game Review 5
        app.get('/review5', function (req, res) {
            db.collection('review5').find().toArray()
                .then(results => {
                    res.render('pages/reviews/review5.ejs', { reviews: results })
                })
                .catch(error => console.error(error))
        })
        app.post('/review5', function (req, res) {
            db.collection('review5').insertOne(req.body)
                .then(result => {
                    res.redirect('/review5')
                })
                .catch(error => console.error(error))
        })
        app.get('/like5/:id', async function(req, res) {
            var requestID = ObjectID(req.params.id);
            const review = await db.collection('review5').findOneAndUpdate({"_id": requestID}, {$inc: {"likes":+1}}, {
                new: true,
                upsert: true
            })
            res.json(review.value);
        })
        app.get('/dislike5/:id', async function(req, res) {
            var requestID = ObjectID(req.params.id);
            const review = await db.collection('review5').findOneAndUpdate({"_id": requestID}, {$inc: {"dislikes":-1}}, {
                new: true,
                upsert: true
            })
            res.json(review.value);
        })

        // Game Review 6
        app.get('/review6', function (req, res) {
            db.collection('review6').find().toArray()
                .then(results => {
                    res.render('pages/reviews/review6.ejs', { reviews: results })
                })
                .catch(error => console.error(error))
        })
        app.post('/review6', function (req, res) {
            db.collection('review6').insertOne(req.body)
                .then(result => {
                    res.redirect('/review6')
                })
                .catch(error => console.error(error))
        })
        app.get('/like6/:id', async function(req, res) {
            var requestID = ObjectID(req.params.id);
            const review = await db.collection('review6').findOneAndUpdate({"_id": requestID}, {$inc: {"likes":+1}}, {
                new: true,
                upsert: true
            })
            res.json(review.value);
        })
        app.get('/dislike6/:id', async function(req, res) {
            var requestID = ObjectID(req.params.id);
            const review = await db.collection('review6').findOneAndUpdate({"_id": requestID}, {$inc: {"dislikes":-1}}, {
                new: true,
                upsert: true
            })
            res.json(review.value);
        })
    })
    .catch(error => console.error(error))