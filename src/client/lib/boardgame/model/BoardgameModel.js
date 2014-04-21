var Backbone = require('backbone');

module.exports = Backbone.Model.extend({
  url: 'http://localhost:5984/boardgamesapp/',
  defaults: {
    'type': 'boardgame'
  }
});
