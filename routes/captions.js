var mongoose = require('mongoose');
var mongoDB = process.env.MONGODB_URI;

mongoose.connect(mongoDB);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
});


var CaptionsSchema = mongoose.Schema({
    tour_id: String,
    tour: String,
    caption: String,
    room: String,
    description: String
});


exports.find = function(req, res) {
	var Captions = mongoose.model('Captions', CaptionsSchema);
        var tour = req.params.tour
	     Captions.find({ tour: tour }, { tour: 1, caption: 1, room: 1, description: 1 }, function(err, item) {
            res.send(item);
        });

};


exports.findbyId = function(req, res) {
	var Captions = mongoose.model('Captions', CaptionsSchema);
        var tour = req.params.tour
        var id = req.params.caption
        console.log("Looking for tour: " + tour + " with caption: "+ id);
	Captions.findOne({ tour: tour, caption: id }, { tour: 1, caption: 1, room: 1, description: 1 }, function(err, item) {
            res.send(item);
        });

};