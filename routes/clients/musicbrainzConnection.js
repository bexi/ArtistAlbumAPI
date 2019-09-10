const axios = require('axios');

const getDescription = require('./wikiConnection');
const getAlbumCovers = require('./coverArtConnection');
const config = require('../../config');

/**
* Return Promise {mbid, description, albums}
*/
const getArtistInfo = async (req, res) => {
  let mbid = req.params.mbid;
  let artistInformation;
  let description = null;
  let albumCovers = null;

  // try making the first API call - musicbrainz
  try{
    let apiUrl = `${config.musicbrainz_base}ws/2/artist/${mbid}?inc=url-rels+release-groups&fmt=json`;
    // first api call - fetch artist information from musicbrainz
    artistInformation = await axios.get(apiUrl);
  }catch(e){
    res.status(400).send({error: "invalid mbid"});
    return;
  }

  // paralell requests
  let promises = [
    getDescription(artistInformation),
    getAlbumCovers(artistInformation)
  ];
  let promisesRes = await axios.all(promises);
  description = promisesRes[0];
  albumCovers = promisesRes[1];

  // send back the mashup data to user
  res.status(200).send({
    'mbid': mbid,
    'description': description,
    'albums': albumCovers
  });
}

module.exports = getArtistInfo;
