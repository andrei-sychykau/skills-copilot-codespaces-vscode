const express = require('express');
const app = express();
const port = 3000;

const comments = require('./comments.json');

app.get('/comments', (req, res) => {
  res.send(comments);
});

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
