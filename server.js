var express = require('express'),
    tour = require('./routes/tours');
	

var app = express();

app.configure(function () {
    app.use(express.logger('dev'));     /* 'default', 'short', 'tiny', 'dev' */
    app.use(express.bodyParser());
});

app.get('/tours', tour.findAll);
app.get('/tours/:id', tour.findById);

app.listen(11461)
console.log('Listening on port 11461...');