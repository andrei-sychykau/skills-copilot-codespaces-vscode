// Create web server
var express = require('express');
var app = express();

// Create a route for the home page
app.get('/', function(req, res) {
  res.send('Welcome to the home page!');
});

// Create a route for comments page
app.get('/comments', function(req, res) {
  res.send('Welcome to the comments page!');
});

// Start the server on port 8080
app.listen(8080, function() {
  console.log('Server running on http://localhost:8080');
});