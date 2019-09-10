const memoryCache = require('memory-cache');

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

module.exports = {cacheMiddleware}
