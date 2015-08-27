var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

mongoose.connect('mongodb://10.127.165.70/hackathonDB');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) {
  console.log("DB Connected");
});

module.exports = mongoose.model('Site', new Schema());