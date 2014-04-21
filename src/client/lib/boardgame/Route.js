var Parent = require('backbone');
var BoardgameView = require('./views/BoardgameView');
var BoardgameModel = require('./model/BoardgameModel');

module.exports = Parent.Router.extend({
  routes: {
    'boardgames': 'boardgamesAction',
    'boardgames/new': 'boardgameNew',
  },
  boardgamesAction: boardgamesAction,
  boardgameNew: boardgameNew
});

function boardgamesAction() {
  var Boardgames = require('./model/BoardgameCollection');
  var list = new Boardgames();
  list.fetch();
}

function boardgameNew() {
  var boardgame = new BoardgameModel();
  var BoardgameNewView = require('./views/BoardgameEditView');
  new BoardgameNewView({
    el: 'section',
    model: boardgame
  });
}
