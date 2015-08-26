var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

mongoose.connect('mongodb://10.127.164.149/hackathonDB');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) {
  console.log("DB Connected");
});

var SiteSchema   = new Schema({}, {collection: 'sites'});

module.exports = mongoose.model('Site', SiteSchema);