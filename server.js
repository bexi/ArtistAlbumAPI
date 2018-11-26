const express = require('express');
const bodyParser = require('body-parser');
const memoryCache = require('memory-cache');

const getArtistInfo = require('./musicbrainzConnection');

var app = express();
app.use(bodyParser.json());

// configure cache middleware
let cache = new memoryCache.Cache();
let cacheMiddleware = (duration) => {
    return (req, res, next) => {
        let key =  req.params.mbid;
        let cacheContent = cache.get(key);
        if(cacheContent){
            res.send( JSON.parse(cacheContent ));
            return
        }else{
            res.sendResponse = res.send;
            res.send = (body) => {
              let parsedBody = {error: undefined}
              try {
                  parsedBody = JSON.parse(body);
              } catch (e) {}
              // if there is an error don't cache, might be temporary
              if((body.error == undefined && parsedBody.error == undefined) ){
                cache.put(key,body,duration*1000);
              }
              res.sendResponse(body);
            }
            next()
        }
    }
}


app.listen(3000, () => {
  console.log('Listening on port 3000');
});

app.get('/', (req, res) => {
  res.status(400).send({error: 'No mbid in the request'});
});

// If status=200: returns artist information (mbid, description and albums (title, id, coverImage))
app.get('/:mbid', cacheMiddleware(30), getArtistInfo);

// All other requests are not handled by the API
app.use((req, res, next) => {
  res.status('404').send({error: 'The api does not handle this request'});
});

// used for testing
module.exports.app = app;
