var express = require('express'),
    tour = require('./routes/tours');
	

var app = express();

app.configure(function () {
    app.use(express.logger('dev'));     /* 'default', 'short', 'tiny', 'dev' */
    app.use(express.bodyParser());
});

app.get('/tours', wine.findAll);
app.get('/tours/:id', tour.findById);

app.listen(process.env.PORT || 5000)
console.log('Listening on port 5000...');