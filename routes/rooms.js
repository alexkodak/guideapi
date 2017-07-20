var mongoose = require('mongoose');
var mongoDB = process.env.MONGODB_URI || 'mongodb://alexkodak:pcJ-z39nqLBg@ds111461.mlab.com:11461/guidebot';

mongoose.connect(mongoDB);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
});


var roomSchema = mongoose.Schema({
    roomNumber: String,
    roomName: String
  });


exports.find = function(req, res) {
	var Rooms = mongoose.model('roomlist', ToursSchema);
	     Rooms.find({ }, { roomNumber: 1, roomName: 1 }, function(err, item) {
            res.send(item);
        });

};



exports.findbyId = function(req, res) {
	var Rooms = mongoose.model('roomlist', ToursSchema);
        var id = req.params.room
        console.log("Looking for room: "+ id);
	Rooms.findOne({ room: id }, { roomNumber: 1, roomName: 1 }, function(err, item) {
            res.send(item);
        });

};