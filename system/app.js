// I was running this nodejs express server to handle mongodb, but will not be needed with sqlite3

const express = require('express');
const app = express();
let debug = require('debug')('app');
const path = require('path');

const env = app.get('env');

let port = '3000';
app.set('port', port);

const server = app.listen(port);

/* Environment specifications */
switch (env) {
	case 'development':
		let logger = require('morgan');
		app.use(logger('dev'));
		break;
	case 'production':
		break;
}

app.get('/', function (req, res) {
	res.send("neki");
});


/* Catch 404 and forward to error handler */
app.use(function(req, res, next) {
	let err = new Error('Not Found');
	err.status = 404;
	next(err);
});


/* Development error handler [show stacktrace = TRUE] */
if (app.get('env') === 'development') {
	app.use(function(err, req, res) {
		// This is REST api.js, no need for rendered errors, just send the error as response
		res.send(err);
	});
}


/* Production error handler [show stacktrace = FALSE] */
app.use(function(err, req, res) {
	// This is REST api.js, no need for rendered errors, just send the error as response
	res.send(err);
});

module.exports = app;