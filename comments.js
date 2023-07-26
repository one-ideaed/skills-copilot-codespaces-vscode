// Create web server application
// 1. Create a web server application
// 2. Create a web route
// 3. Create a web route handler
// 4. Start the web server on port 3000

// Import express library
const express = require('express');
// Create a web server application
const app = express();

// Import the comments module
const comments = require('./comments');

// Import the body-parser library
const bodyParser = require('body-parser');

// Tell express to use the body-parser middleware
// to be able to parse body data in POST requests
app.use(bodyParser.urlencoded({extended: true}));

// Create a web route (HTTP GET) to /comments
app.get('/comments', (req, res) => {
    // Send a response to the client
    // res.send('Hello World');
    // res.send(comments);
    // res.send(comments.list());
    res.render('comments/index', {comments: comments.list()});
});

// Create a web route (HTTP GET) to /comments/new
app.get('/comments/new', (req, res) => {
    res.render('comments/new');
});

// Create a web route (HTTP POST) to /comments
app.post('/comments', (req, res) => {
    // res.send('POST request sent to /comments');
    // res.send(req.body);
    // res.send(req.body.comment);
    // res.send(comments.addComment(req.body.comment));
    comments.addComment(req.body.comment);
    res.redirect('/comments');
});

// Create a web route (HTTP GET) to /comments/:id
app.get('/comments/:id', (req, res) => {
    // res.send('GET request sent to /comments/:id');
    // res.send(req.params.id);
    // res.send(comments.getComment(req.params.id));
    res.render('comments/show', {comment: comments.getComment(req.params.id)});
});

// Create a web route (HTTP GET) to /comments/:id/edit
app.get('/comments/:id/edit', (req, res) => {
    // res.send('GET request sent to /comments/:id/edit');
    // res.send(req.params.id);
    // res.send(comments.getComment(req.params.id));
    res.render('comments/edit', {comment: comments.getComment(req.params.id)});
});

// Create a web route (HTTP PUT) to /comments/:id
app.put('/comments/:id', (