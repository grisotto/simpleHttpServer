// grab the packages we need
var express = require('express');
var app = express();
var port = process.env.PORT || 8080;

// routes will go here
app.post('/wms/compal/panasonic', function(req, res) {
    res.status(300);
    res.send('None shall pass');
});
// start the server
app.listen(port);
console.log('Server started! At http://localhost:' + port);
