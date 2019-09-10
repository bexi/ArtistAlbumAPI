const axios = require('axios');
const config = require('../../config');

/**
* Get the description from wikipedia API
*/
const getDescription = async (artist) => {
  try{
    let wikipediaID = await getWikipediaID(artist);
    let wikipediaUrl = `${config.wikipedia_endpoint}${wikipediaID}`
    let data = await axios.get(wikipediaUrl);

    let pageNumber = Object.keys(data.data.query.pages)[0];
    let description = data.data.query.pages[pageNumber].extract;
    return description;

  }catch(e){
    // If something went wrong in the request(s) then the description property will be null
    return null;
  }
}

/**
* The wikipedia ID can be found in two ways
* 1) by using wikidataID and making a request
* 2) directly find it in the artist data
* If the ID is not found return null
*/
const getWikipediaID = async (artist) => {
  // find the wikidata-ID from the first api-response
  let wikiDataRelation = artist.data.relations.filter(obj => obj.type === 'wikidata');
  let wikipediaRelation = artist.data.relations.filter(obj => obj.type === 'wikipedia');

  // special case, if this relation exist we do not
  // need to make a request to the wikidata api
  if(wikipediaRelation.length > 0){
    let url = wikipediaRelation[0].url.resource;
    let wikipediaID = getLastPartOfUrl(url);
    return wikipediaID;
  }
  // normal case, make request to wikidata api
  else if(wikiDataRelation.length > 0){
    try{
      let url = wikiDataRelation[0].url.resource;
      let wikiDataID = getLastPartOfUrl(url);
      // make request to find wikipediaID
      let wikiDataApiUrl = `${config.wikidata_base}w/api.php?action=wbgetentities&ids=${wikiDataID}&format=json&props=sitelinks`;
      let wikiData = await axios.get(wikiDataApiUrl);
      // find the wikipedia-ID from second api-response
      let wikipediaID = wikiData.data.entities[wikiDataID].sitelinks.enwiki.title;
      return encodeURIComponent(wikipediaID);

    }catch(e){
      throw new Error({error: 'Error in wikidata request'});
    }
  }
  throw new Error({error: 'No wikipediaID was found'})
}

/**
* Returns the last segment from an url
* Example: www.example/hello/123 --> 123
*/
const getLastPartOfUrl = (url) => {
  let parts = url.split('/');
  let lastPart = parts[parts.length-1];

  return lastPart;
}

module.exports = getDescription;
