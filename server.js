var express = require('express'),
    tours = require('./routes/tours');
	
var app = express();

app.configure(function () {
    app.use(express.logger('dev'));     /* 'default', 'short', 'tiny', 'dev' */
    app.use(express.bodyParser());
});

app.get('/tours', tours.find);
app.get('/tours/:tour', tours.findbyId);

/*

app.post('/tours', tours.addTour);
app.put('/tours/:id', tours.updateTour);
app.delete('/tours/:id', tours.deleteTour);
*/
app.listen(process.env.PORT || 5000)
console.log('Listening on port 5000...');