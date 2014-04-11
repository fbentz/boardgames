var Backbone = require('backbone');

module.exports = Backbone.Model.extend({
  initialize: initialize
});

function initialize() {
  console.log(this);
}
