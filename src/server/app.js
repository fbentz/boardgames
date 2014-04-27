var path = require('path');
var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var passport = require('passport');
var login = require('./lib/router/authenticate');
var app = express();


app.use(express.static(path.join(__dirname ,'static')));
app.use(bodyParser());
app.use(cookieParser());
app.use(session({
  secret: 'test',
  key:'sid',
  cookie: {
    secure: true
  }
}));
app.use(passport.initialize());
app.use(passport.session());

app.use('/login', login);

app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), function() {
  console.log('Server started on port ' + app.get('port'));
});
