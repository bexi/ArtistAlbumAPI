const express = require('express');
const bodyParser = require('body-parser');

const routes = require('./routes');

var app = express();
app.use(bodyParser.json());

//  Connect all our routes to our application
app.use('/', routes);

app.listen(3000, () => {
  console.log('Listening on port 3000');
});

// used for testing
module.exports.app = app;
