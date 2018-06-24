var mongoose = require('mongoose')
var path = require('path')
var fs = require('fs')


console.log('SERVER > CONFIG > mongoose.js');


mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/PET_DB');

var models_path = path.join(__dirname, '../models');
fs.readdirSync(models_path).forEach(function(file) {
  if(file.indexOf('.js') >= 0) {
    require(models_path + '/' + file);
   }
})