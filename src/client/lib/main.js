var Backbone = require('backbone');
var BoardgameRoute = require('./boardgame/Route');

new BoardgameRoute();

Backbone.history.start();
window.jQuery = require('jquery');
