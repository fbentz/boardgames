var Backbone = require('backbone');
Backbone.emulateHTTP = false;

module.exports = Backbone.Model.extend({
  url: 'http://localhost:5984',
  initialize: initialize
});

function initialize() {

}
