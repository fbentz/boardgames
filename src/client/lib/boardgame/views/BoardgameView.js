var Parent = require('base').View;

module.exports = Parent.extend({
  template: require('../templates/boardgameList.hbs'),
  initialize: initialize,
  render: render
});

function initialize() {
  this.listenTo(this.model, 'sync', this.render);
  this.model.fetch();
  this.render();
}

function render() {
  this.$el.html(this.template(this.model.toJSON()));
  return this;
}
