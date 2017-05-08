var mongo = require('mongodb');

var Server = mongo.Server,
    Db = mongo.Db,
    BSON = mongo.BSONPure;

//var server = new Server('localhost', 27017, {auto_reconnect: true});
var server = new Server('mongodb://alexkodak:pcJ-z39nqLBg@ds111461.mlab.com:11461/guidebot');
db = new Db('tourdb', server);


db.open(function(err, db) {
    if(!err) {
        console.log("Connected to 'tourdb' database");
        db.collection('tours', {strict:true}, function(err, collection) {
            if (err) {
                console.log("The 'tours' collection doesn't exist. Creating it with sample data...");
                }
        });
    }
});


exports.findById = function(req, res) {
    var id = req.params.id;
    console.log('Retrieving tour: ' + id);
    db.collection('tours', function(err, collection) {
        collection.findOne({'_id':new mongo.ObjectID(id)}, function(err, item) {
            res.send(item);
        });
    });
};