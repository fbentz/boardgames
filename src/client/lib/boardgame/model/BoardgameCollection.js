var Backbone = require('backbone');
var Boardgame = require('./BoardgameModel');
var _ = require('lodash/dist/lodash.underscore');

module.exports = Backbone.Collection.extend({
  url: 'http://localhost:5984/boardgamesapp/_design/type/_view/boardgame',
  model: Boardgame,
  initialize: initialize,
  parse: parse
});

function initialize() {
  this.fetch();
}

function parse(response) {
  var fromServer = response;
  var toClient = [];
  _.each(fromServer.rows, function(data) {
    toClient.push(data.value);
  });
  return toClient;
}
