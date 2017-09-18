var express = require('express');
var config = require('./config');

var app = express();

app.set('view engine', 'ejs');
app.use(express.static('node_modules/bootstrap/dist'));

require('./router')(app);

app.listen(config.runPort, function () {
    console.log("Web server started at port " + config.runPort);
});
