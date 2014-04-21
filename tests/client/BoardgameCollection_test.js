var chai = require('chai');
var expect = chai.expect;
var BoardgameCollection = require('../../src/client/lib/boardgame/model/BoardgameCollection');

describe('Boargame Collection', function () {

  it('should instanciate a boardgame collection', function() {
    var boardgames = new BoardgameCollection();
    expect(boardgames).to.be.an.instanceof(BoardgameCollection);
    expect(boardgames.length).to.be.equal(0);
  });
});
