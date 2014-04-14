var Backbone = require('backbone');
var Route = require('./boardgame/Route');

new Route();
Backbone.history.start({pushState: true});
