var chai = require('chai');
var expect = chai.expect;

describe('Base model', function() {

  it.skip('should instanciate a base model', function() {
    var base = new Base();
    expect(base).to.be.an.instanceof(Base);
  });

});
