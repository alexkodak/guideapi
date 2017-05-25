var mongoose = require('mongoose');
var mongoDB = process.env.MONGODB_URI;

mongoose.connect(mongoDB);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
});


var CaptionsSchema = mongoose.Schema({
    tour: Number,
    caption: Number,
    room: String,
    description: String
});


exports.find = function(req, res) {
	var Captions = mongoose.model('Captions', CaptionsSchema);
	     Captions.find({ }, { tour: 1, caption: 1, room: 1, description: 1 }, function(err, item) {
            res.send(item);
        });

};



exports.findbyId = function(req, res) {
	var Captions = mongoose.model('Captions', CaptionsSchema);
        var id = req.params.caption
        console.log("Looking for caption:"+ id);
	Captions.findOne({ tour: id }, { tour: 1, caption: 1, room: 1, description: 1 }, function(err, item) {
            res.send(item);
        });

};