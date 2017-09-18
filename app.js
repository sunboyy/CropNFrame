var express = require('express');
var config = require('./config');

var app = express();

app.set('view engine', 'ejs');
app.use(express.static('node_modules/bootstrap/dist'));
app.use('/js', express.static('node_modules/jquery/dist'));
app.use('/js', express.static('node_modules/cropper/dist'));
app.use(express.static('public'));

require('./router')(app);

app.listen(config.runPort, function () {
    console.log("Web server started at port " + config.runPort);
});
