var express = require('express');
var path = require('path');

var app = express();

// path setup
app.use(express.static(path.join(__dirname, 'main')));

var router = require('./routes/routes');

app.use('/', router);

// Start server
var serverPort = 4000;
app.listen(serverPort, function () {
    console.log("Server started on port " + serverPort);
});

// Expose app
module.exports = app;