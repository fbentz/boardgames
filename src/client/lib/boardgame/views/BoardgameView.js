var Parent = require('base').View;

module.exports = Parent.extend({
  template: require('./boardgameList.hbs'),
  el: 'body',
  initialize: initialize,
  render: render
});

function initialize() {
  this.model.fetch();
  this.render();
}

function render() {
  console.log(this.model);
  var rendering = this.template({
    db: this.model.get('attributes')
  });
  this.$el.html(rendering);
}
