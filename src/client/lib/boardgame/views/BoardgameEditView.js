var Parent = require('base');

module.exports = Parent.View.extend({
  template: require('../templates/boardgameNew.hbs'),
  events: {
    'click .save': 'save'
  },
  initialize: initialize,
  render: render,
  save: save
});

function initialize() {
  this.render();
}

function save() {
  this.model.set('title', this.$('input[name="title"]').val());
  this.model.set('min', this.$('input[name="min"]').val());
  this.model.set('max', this.$('input[name="max"]').val());
  this.model.save();
}

function render() {
  this.$el.html(this.template(this.model.toJSON));
  return this;
}
