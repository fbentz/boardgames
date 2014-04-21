var Parent = require('base').View;
var _ = require('lodash/dist/lodash.underscore');
//var ItemView = require('./BoardgameItemView');

module.exports = Parent.extend({
  template: require('../templates/boardgameTableList.hbs'),
  initialize: initialize,
  render: render
});

function initialize() {
  this.listenTo(this.collection, 'sync', this.render);
  this.listenTo(this.model, 'destroy', this.render);
  this.render();
}

function render() {
  var collection = [];
  _.each(this.collection.models, function(model) {
    collection.push(model.toJSON());
  });
  collection.shift();
  this.$el.html(this.template({collection:collection}));
  return this;
}
