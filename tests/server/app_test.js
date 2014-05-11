var request = require('supertest');
var app = require('../../src/server/app');

describe('App', function() {
  it('should respond on /login', function(done) {
    request(app)
      .get('/login')
      .expect(200)
      .end(function(err, res) {
        if (err) throw err;
        done();
      });
  });

  it('should respond on /boardgames', function(done) {
    request(app)
      .get('/boardgames')
      .set('Accept', 'application/json')
      .expect(200, done);
  });
});
