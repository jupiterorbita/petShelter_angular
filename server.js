var express = require("express");
var app = express();
var bodyParser = require('body-parser');
var path = require("path");
app.use(bodyParser.json()); //JSON
app.use(bodyParser.urlencoded({extended: true}));

const server = app.listen(5000);



app.use(express.static( __dirname + '/public/dist/public' ));

require("./server/config/mongoose.js")

require('./server/config/routes.js')(app);
