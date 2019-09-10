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
/*
app.get('/', (req, res) => {
  res.status(400).send({error: 'No mbid in the request'});
});

// If status=200: returns artist information (mbid, description and albums (title, id, coverImage))
app.get('/:mbid', cache.cacheMiddleware(30), getArtistInfo);

// All other requests are not handled by the API
app.use((req, res, next) => {
  res.status('404').send({error: 'The api does not handle this request'});
});*/

// used for testing
module.exports.app = app;
