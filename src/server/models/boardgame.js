var Datastore = require('../lib/db');

function Boardgame() {
  this.type = 'boardgame';
  this.db = Datastore.getInstance();
}

Boardgame.prototype.save = function(id) {
  if (id && typeof id === 'string') {
    this.db.insert(this, id);
  }
  this.db.insert(this);
};

Boardgame.prototype.get = function(id, cb) {
  if(!id) {
    throw Error('You must specified an id');
  }
  this.db.get(id, function(err, body) {
    if (err) {
      cb(err, null);
    }
    cb(null, body);
  });
};

module.exports = Boardgame;
