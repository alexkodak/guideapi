var mongoose = require('mongoose');
var mongoDB = process.env.MONGODB_URI;

mongoose.connect(mongoDB);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
});


var ToursSchema = mongoose.Schema({
    tour: Number,
    language: String,
    Description: String
});


exports.find = function(req, res) {
	var Tours = mongoose.model('Tours', ToursSchema);
	     Tours.find({ }, { tour: 1, language: 1, description: 1 }, function(err, item) {
            res.send(item);
        });

};



exports.findbyId = function(req, res) {
	var Tours = mongoose.model('Tours', ToursSchema);
        var id = req.params.tour
        console.log("Looking for tour:"+ id);
	Tours.find({ _id: req.params.tour },{ tour: 1, language: 1, description: 1 }, function(err, item) {     
         if (err) {
                res.render('error', {
                    status: 500
                });
            } else {
                res.send(item);
            }
             });
};