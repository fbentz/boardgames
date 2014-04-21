var Parent = require('backbone');
var BoardgameView = require('./views/BoardgameView');
var BoardgameModel = require('./model/BoardgameModel');

module.exports = Parent.Router.extend({
  routes: {
    'boardgames': 'boardgameList',
    'boardgame/new': 'boardgameNew',
    'boardgame/edit/:id': 'boardgameNew',
    'boardgame/del/:id': 'boardgameDelete'
  },
  defaultAction: defaultAction,
  boardgameList: boardgameList,
  boardgameNew: boardgameNew,
  boardgameDelete: boardgameDelete
});

function defaultAction() {
  var boardgame = new BoardgameModel();
  new BoardgameView({
    el: 'section',
    model: boardgame
  });
}

function boardgameList() {
  var BoardgameListView = require('./views/BoardgameListView');
  var Boardgames = require('./model/BoardgameCollection');
  var list = new Boardgames();
  new BoardgameListView({
    el: 'section',
    collection: list
  });
}

function boardgameNew(id) {
  var Boardgame = new BoardgameModel();
  if(id) {
    Boardgame.set('_id', id);
  }
  var BoardgameNewView = require('./views/BoardgameEditView');
  new BoardgameNewView({
    el: 'section',
    model: Boardgame
  });
}

function boardgameDelete(id) {
  var Boardgame = new BoardgameModel({'_id': id});
  Boardgame.fetch();
  Boardgame.destroy();
}
