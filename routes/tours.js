var mongo = require('mongodb');

var Server = mongo.Server,
    Db = mongo.Db,
    BSON = mongo.BSONPure;

	
//var server = new Server(process.env.MONGODB_URI, 27017, {auto_reconnect: true});
var server = process.env.MONGODB_URI;
db = new Db('guidebot', server);


db.open(function(err, db) {
    if(!err) {
        console.log("Connected to 'guidebot' database");
        db.collection('tours', {strict:true}, function(err, collection) {
            if (err) {
                console.log("The 'tours' collection doesn't exist.");
                }
        });
    }
});


exports.findById = function(req, res) {
    var id = req.params.id;
    console.log('Retrieving tour: ' + id);
    db.collection('tours', function(err, collection) {
       /* collection.findOne({'_id':new mongo.ObjectID(id)}, function(err, item) { */
	   collection.findOne({ }, { tour: 1, language: 1 }, function(err, item) {
            res.send(item);
        });
    });
};

exports.findAll = function(req, res) {
    db.collection('tours', function(err, collection) {
        collection.find().toArray(function(err, items) {
            res.send(items);
        });
    });
};