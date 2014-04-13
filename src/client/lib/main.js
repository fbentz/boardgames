var BoardgameView = require('./boardgame/views/BoardgameView');
var BoardgameModel = require('./boardgame/model/BoardgameModel');

var Boardgame = new BoardgameModel();
new BoardgameView({
  model: Boardgame
});
