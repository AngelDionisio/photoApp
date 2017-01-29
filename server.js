const express = require('express');
const app = express();
const path = require('path');

// Basic Routing
// app.METHOD(PATH, HANDLER_FUNCTION)

app.get('/', (req, res) => {
  console.log('** HERE **',__dirname);
  res.sendFile(path.join(__dirname + '/index.html'));
});

// route for chainable route handlers
app.route('/user')
.get((req, res) => {
  res.send('Got GET request at /user');
})
.post((req, res) => {
  res.send('Got a POST request at /user');
})
.put((request, response) => {
  response.send('Got a PUT request at /user');
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
