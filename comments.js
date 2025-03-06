// create web server
const express = require('express');
const app = express();
// create a port
const port = 3000;
// create a route
app.get('/', (req, res) => {
  res.send('Hello World!');
});
// create a server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
// run server
// node comments.js

