var Backbone = require('backbone');
var Boardgame = require('./BoardgameModel');

module.exports = Backbone.Collection.extend({
  url: 'http://localhost:5984/boardgamesapp/_design/type/_view/boardgame',
  model: Boardgame,
  parse: parse
});

function parse(response) {
  console.log(response.value);
  return response.value;
}
