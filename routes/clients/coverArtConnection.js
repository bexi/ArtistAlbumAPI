const axios = require('axios');
const config = require('../../config');

/**
* Returns album information with covers
* Return Promise [{title, id, image}, ...]
*/
const getAlbumCovers = async (artist) => {
  // find release-groups from artist data
  let releaseGroups = artist.data['release-groups'];

  // albums is an array of objects which has properties: title and id
  // we only want to have the releasegroups which actually is released albums
  let albums = releaseGroups.filter(obj => obj['primary-type'] === 'Album').map(function(obj){
    return {'title': obj.title, 'id': obj.id, 'image': null};
  });

  // fetch all album covers
  let covers;
  try{
    let albumApiUrls = albums.map((obj) => `http://coverartarchive.org/release-group/${obj.id}`);
    // make parallel requests to cover art archive API
    covers = await axios.all(albumApiUrls.map(function (i) { return axios(i).catch(error => ({ error })) }));

    covers = covers.map(function(cover){
      try{
        image = cover.data.images[0].image;
        // albumID is not in the cover.data but can be found with cover.config.url (last part of url)
        return {id: getLastPartOfUrl(cover.config.url), image: image};
      }catch(e){
        return null;
      }
    });
  }catch(e){
    console.log(e);
  }

  if(covers !== undefined){
    albums = addCoversToAlbum(albums, covers)
  }

  return albums;
}

const addCoversToAlbum = (albums, covers) => {
  return albums.map(function(album){
    let foundCover = covers.find(cover => cover !== null && cover.id == album.id);

    if((foundCover !== undefined) && (foundCover !== null)){
      return  Object.assign(album, {image: foundCover.image});
    }
    return Object.assign(album, {image: null});
  });
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

module.exports = getAlbumCovers;
