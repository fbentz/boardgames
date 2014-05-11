var chai = require('chai');
var expect = chai.expect;
var Boardgame = require('../../src/client/lib/boardgame/model/BoardgameModel');

describe('Boardgame Model', function () {
  it('should instanciate a boardgame model', function() {
    var boardgame = new Boardgame();
    expect(boardgame).to.be.an.instanceof(Boardgame);
    expect(boardgame.get('type')).to.equal('boardgame');
  });
});
