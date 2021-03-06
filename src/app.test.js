const app = require('./app');
const http = require('http');
const request = require('request');

describe('Tests', () => {
  let server;
  beforeEach(() => {
    server = http.createServer(app);
    server.listen(5865);
  });
  afterEach(() => {
    if (server) {
      server.close();
      server = null;
    }
  });

  it('should pass', done => {
    request.get('http://localhost:5865/', (err, res, body) => {
      expect(body).toEqual('Hello!');
      done();
    });
  });
});
