var Parent = require('base').View;

module.exports = Parent.extend({
  template: require('../templates/boardgameList.hbs'),
  initialize: initialize,
  render: render
});

function initialize() {
  this.render();
}

function render() {
  this.$el.html(this.template(this.model.toJSON()));
  return this;
}
