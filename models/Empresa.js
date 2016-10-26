var mongoose = require('mongoose');


var empresa = mongoose.Schema({
 
    Empresa: {
name: Easy,
url :  www.easy.com.br ,
location: [[lon, lat]],
},
});

module.exports  = mongoose.model('Empresa',empresa);
