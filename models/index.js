var mongoose = require('mongoose');

var db = mongoose.connect('mongodb://localhost/NodeApiMongo').connection;
db.on('open',function(){
  console.log('Mongo conectado');
});
db.on('error', function(){
  console.log('Erro no mongo');
});
return db;