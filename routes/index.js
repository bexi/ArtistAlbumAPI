const routes = require('express').Router();
const getArtistInfo = require('./clients/musicbrainzConnection');
const cache = require('./cache.js');

routes.get('/', (req, res) => {
  res.status(400).send({error: 'No mbid in the request'});
});

// Returns artist information (mbid, description and albums (title, id, coverImage))
// time in ms 
routes.get('/:mbid', cache.cacheMiddleware(30), getArtistInfo);

// All other requests are not handled by the API
routes.use((req, res, next) => {
  res.status('404').send({error: 'The api does not handle this request'});
});

module.exports = routes;
