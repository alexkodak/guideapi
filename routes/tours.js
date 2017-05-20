var mongoose = require('mongoose');
var mongoDB = process.env.MONGODB_URI;

mongoose.connect(mongoDB);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
});


var ToursSchema = mongoose.Schema({
    tour: String,
	language: String,
	Description: String
});


exports.find = function(req, res) {
	var Tours = mongoose.model('Tours', ToursSchema);
	     Tours.find({ }, { tour: 1, language: 1, description: 1 }, function(err, item) {
            res.send(item);
        });

};



exports.findById = function(req, res) {
	var Tours = mongoose.model('Tours', ToursSchema);
	     Tours.findOne({ }, { tour: 2, language: 1, description: 1 }, function(err, item) {
            res.send(item);
        });

};
