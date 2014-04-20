var Backbone = require('backbone');

module.exports = Backbone.Model.extend({
  url: 'http://localhost:5984/',
  defaults: {
    'type': 'boardgame'
  }
});
