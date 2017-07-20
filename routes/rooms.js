var mongoose = require('mongoose');
var mongoDB = process.env.MONGODB_URI || 'mongodb://alexkodak:pcJ-z39nqLBg@ds111461.mlab.com:11461/guidebot';

mongoose.connect(mongoDB);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
});


var RoomSchema = mongoose.Schema({
    roomnumber: String,
    roomname: String
  });


exports.find = function(req, res) {
	var Rooms = mongoose.model('roomlist', RoomSchema);
	     Rooms.find({ }, { roomnumber: 1, roomname: 1 }, function(err, item) {
            res.send(item);
        });

};


exports.findbyId = function(req, res) {
	var Rooms = mongoose.model('roomlist', RoomSchema);
        var id = req.params.room
        console.log("Looking for room: "+ id);
	Rooms.findOne({ roomnumber: id }, { roomnumber: 1, roomname: 1 }, function(err, item) {
		res.send(item);
        });

};