Mashup challange, by: Rebecka Reitmaier.

1) Set up:
npm install

2) How to run the tests:
npm run test

3) How to start/stop the API with PM2 (load balancer etc):
npm run start
npm run stop

(4) How to start the API without PM2:
npm run startNode

Description of API:
* url: http://localhost:3000/<insert mbid>
* If some information about the artist is missing will the field contain null
* Albums include Albums, Compilations and Live Albums

Assumptions
* API can be open for all (confirmed on email)
* If information is missing then the user still want the information that is available
 (Errors from third party API:s will result in that field being null)

Future work:
* Cashing could be saved in a db instead of locally
  - like Redis
* Scaling - secure that the api have another setup if one goes down or have too many users

Motivations for choices
* Node
  - Fast
  - Simple setup
* Express:
  - Better performance than Hapi, less verbose and closer to pure node syntax
  - Eventhough Koa's performance is a bit better than Express I chose Express because it is a complete application framework with features such as routing. Koa does have options for this but they are seperate modules
* Axios with async/await
  - No nesting
  - Readable code, looks like sync
  - Easy parallelisation
* Memory-Cache
  - Seemed easy to work with
  - No db
* Mocha and supertest
  - Mocha: easy to work with
  - Supertest: for testing API parts
* Load balancing and reload
  - PM2 is a Production Process Manager with a built-in Load Balancer, it allows you to keep applications alive forever and to reload them without downtime
