const axios = require('axios');

const getDescription = require('./wikiConnection');
const getAlbumCovers = require('./coverArtConnection');

/**
* Return Promise {mbid, description, albums}
*/
async function getArtistInfo (req, res) {
  let mbid = req.params.mbid;
  let artistInformation;
  let description = null;
  let albums = null;

  // try making the first API call - musicbrainz
  try{
    let apiUrl = `http://musicbrainz.org/ws/2/artist/${mbid}?inc=url-rels+release-groups&fmt=json`;
    // first api call - fetch artist information from musicbrainz
    artistInformation = await axios.get(apiUrl);

  }catch(e){
    // check all errors and send back the correct status and msg
    try{
      if(e.response.data.error == 'Not Found'){
        res.status(400).send({error: "mbid is not connected to an artist"});
      }else if(e.response.data.error == 'Invalid mbid.'){
        res.status(400).send({error: "invalid mbid"});
      }
    }catch(e){
      res.status(503).send({error: `Error with musicbrainz api`});
    }
    return;
  }
  // try making the second and third API calls (WikiData/Wikipedia and coverArtArchive)
  // start api calls (in parallel), await the slowest api call
  let description_promise = getDescription(artistInformation);
  let albumCovers_promise = getAlbumCovers(artistInformation);

  try{
    description = await description_promise;
  }catch(e){
    //console.log("Error with get description: ", e);
  }

  try{
    albums = await albumCovers_promise;
  }catch(e){
    //console.log("Error with get getAlbumCovers: ", e);
  }

  // send back the mashup data to user
  res.status(200).send({
    'mbid': mbid,
    'description': description,
    'albums': albums
  });
}

module.exports = getArtistInfo;
