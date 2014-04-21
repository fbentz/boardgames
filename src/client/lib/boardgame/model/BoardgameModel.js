var Backbone = require('backbone');

module.exports = Backbone.Model.extend({
  url: 'http://localhost:5984/boardgamesapp/',
  defaults: {
    'type': 'boardgame'
  },
  initialize: initialize
});

function initialize() {
  if(this.get('id')) {
    this.fetch();
  }
}
