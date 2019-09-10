const request = require('supertest');
const expect = require('expect');

var app = require('../server').app;
var {invalid_mbid, mbid_not_artist, valid_mbid_nirvana, description_nirvana, albums_nirvana , mbid_hakan, mbid_cash, mbid_rammstein} = require('./test-data');
// valid_mbid_temptations, description_temptations, OLD - DATA NOT UPDATED

describe("Check correctness with faulty input", function () {
  this.timeout(10000);

  it('should return an error with invalid mbid', (done) => {
    request(app)
    .get(`/${invalid_mbid}`)
    .expect(400)
    .expect((res) => {
      expect(res.body).toInclude(
        {
          error: 'invalid mbid'
        });
    })
    .end(done);
  });

  it('should return an error with mbid which is not connected to an artist', (done) => {
    request(app)
    .get(`/${invalid_mbid}`)
    .expect(400)
    .expect((res) => {
      expect(res.body).toInclude(
        {
          error: 'invalid mbid'
        });
    })
    .end(done);
  });

  it('should return an error since no mbid was in the request', (done) => {
    request(app)
    .get(`/`)
    .expect(400)
    .expect((res) => {
      expect(res.body).toInclude(
        {
          error: 'No mbid in the request'
        });
    })
    .end(done);
  });

  it('should return an error since the api does not handle the route', (done) => {
    request(app)
    .get(`/faulty/route`)
    .expect(404)
    .expect((res) => {
      expect(res.body).toInclude(
        {
          error: 'The api does not handle this request'
        });
    })
    .end(done);
  });

});

describe("Check correctness from valid mbid (obs: will not work if data is updated at requested APIs)", function () {
  this.timeout(10000);

/*  it('should return a body with correct mbid #1', (done) => {
    request(app)
    .get(`/${valid_mbid_temptations}`)
    .expect(200)
    .expect((res) => {
      expect(res.body).toInclude(
        {
          mbid: valid_mbid_temptations
        });
    })
    .end(done);
  });

  it('should return a body with correct description #1', (done) => {
    request(app)
    .get(`/${valid_mbid_temptations}`)
    .expect(200)
    .expect((res) => {
      expect(res.body).toInclude(
        {
          description: description_temptations
        });
    })
    .end(done);
  }); */

  it('should return a body with correct mbid #2', (done) => {
    request(app)
    .get(`/${valid_mbid_nirvana}`)
    .expect(200)
    .expect((res) => {
      expect(res.body).toInclude(
        {
          mbid: valid_mbid_nirvana
        });
    })
    .end(done);
  });

  it('should return a body with correct description (through wikidata) #2', (done) => {
    request(app)
    .get(`/${valid_mbid_nirvana}`)
    .expect(200)
    .expect((res) => {
      expect(res.body).toInclude(
        {
          description: description_nirvana
        });
    })
    .end(done);
  });

  it('should return a body with correct albums', (done) => {
    request(app)
    .get(`/${valid_mbid_nirvana}`)
    .expect(200)
    .expect((res) => {
      expect(res.body).toInclude(
        {
          albums: albums_nirvana
        });
    })
    .end(done);
  });

});

describe("Check that more mbid get correct result", function () {
  this.timeout(10000);

  it('should return a correct mbid - håkan hellström', (done) => {
    request(app)
    .get(`/${mbid_hakan}`)
    .expect(200)
    .expect((res) => {
      expect(res.body).toInclude(
        {
          mbid: mbid_hakan
        });
    })
    .end(done);
  });

  it('should return a correct mbid - johnny cash', (done) => {
    request(app)
    .get(`/${mbid_cash}`)
    .expect(200)
    .expect((res) => {
      expect(res.body).toInclude(
        {
          mbid: mbid_cash
        });
    })
    .end(done);
  });

  it('should return a correct mbid - rammstein', (done) => {
    request(app)
    .get(`/${mbid_rammstein}`)
    .expect(200)
    .expect((res) => {
      expect(res.body).toInclude(
        {
          mbid: mbid_rammstein
        });
    })
    .end(done);
  });
});
