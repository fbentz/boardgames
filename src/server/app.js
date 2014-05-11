var path = require('path');
var express = require('express');
var http = require('http');
var app = module.exports = express();
// middleware
var session = require('express-session');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var passport = require('passport');
var errorHandler = require('errorhandler');
// route
var login = require('./route/authenticate');
var boardgame = require('./route/boardgame');


app.use(express.static(path.join(__dirname, 'static')));
app.use(bodyParser());
app.use(cookieParser());
app.use(session({
  secret: 'test',
  key: 'sid',
  cookie: {
    secure: true
  }
}));
app.use(errorHandler());
app.use(passport.initialize());
app.use(passport.session());

app.use('/login', login);
app.use('/boardgames', boardgame);

app.set('port', process.env.PORT || 3000);

http.createServer(app).listen(app.get('port'), function() {
  console.log('Server started on port ' + app.get('port'));
});
