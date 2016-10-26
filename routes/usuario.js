var express = require('express');
var router = express.Router();
var Usuario = require('./../models/usuario')

//FindAll
router.get('/', function(req, res, next) {
  Usuario.find({}, function(err,Usuario){
      if(err){
          console.log(err);
          return;
      }
      res.send(Usuario);
  });
});

//FindByID
router.get('/:id', function(req, res, next) {
  Usuario.findById(req.params.id,
  function(err,Usuario){
          if(err){
          console.log(err);
          return;
      }
      res.send(Usuario);
  });
});

router.post('/', function(req, res, next) {

  var usuario = new Usuario({
    name: 'Junior',
    login:'Junior@gmail.com',
    password:'shaudhuhedq',
    dateLastLogin: Date.now,
    type:'Nao sei',
    preferences:[{
        tipo: 'Rock'
    }],
    favorite:[
        {
            name: 'Baladas'
        }
    ],
    genre: 'Masculino'
  });

  usuario.save(usuario, function(err,Usuario){
    if(err){
      console.log(err);
      return;
    }
    res.send(Usuario);
  });
});

router.put('/:id', function(req, res, next) {
    Usuario.findOneAndUpdate({
      _id: req.params.id
    }, 
    {
    name: {
      firstname: 'Junior',
      lastname: 'Farias'
      },
    age: 30
    }, 
    function(err,Usuario){
      if(err){
      console.log(err);
      return;
    }
    res.send(Usuario);
    });
});

router.delete('/:id', function(req, res, next) {
    Usuario.findOneAndRemove({
      _id: req.params.id
    }, 
    function(err,Usuario){
      if(err){
      console.log(err);
      return;
    }
    res.send(req.params.id);
    });
});

module.exports = router;
