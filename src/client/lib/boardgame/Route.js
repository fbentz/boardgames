var Parent = require('backbone');
var BoardgameView = require('./views/BoardgameView');
var BoardgameModel = require('./model/BoardgameModel');

module.exports = Parent.Router.extend({
  routes: {
    '*all': 'defaultAction'
  },
  defaultAction: defaultAction
});

function defaultAction() {
  var boardgame = new BoardgameModel();
  new BoardgameView({
    el: 'body',
    model: boardgame
  });
}
