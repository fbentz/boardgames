var BoardgameView = require('./boardgame/views/BoardgameView');
var BoardgameModel = require('./boardgame/model/BoardgameModel');

new BoardgameView({
  model: new BoardgameModel()
});
