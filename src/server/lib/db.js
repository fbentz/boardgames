var config = require('../config');
var nano = require('nano')(config.host);

var instance;

function db() {
  nano.db.get(config.db, function(err) {
    if(err) {
      nano.db.create(config.db);
    }
  });
  return nano.use(config.db);
}

module.exports = {
  getInstance: function() {
    if (!instance) {
      instance = db();
    }
    return instance;
  }
};
