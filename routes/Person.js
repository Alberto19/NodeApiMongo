var express = require('express');
var router = express.Router();
var Person = require('./../models/Person')

//FindAll
router.get('/', function(req, res, next) {
  Person.find({}, function(err,Person){
      if(err){
          console.log(err);
          return;
      }
      res.send(Person);
  });
});

//FindByID
router.get('/:id', function(req, res, next) {
  Person.findById(req.params.id,
  function(err,Person){
          if(err){
          console.log(err);
          return;
      }
      res.send(Person);
  });
});

router.post('/', function(req, res, next) {

  var person = new Person({
    name: {
        firstname: 'Mae',
        lastname: 'Farias'
        },
    age: 50
  });

  person.save(person, function(err,person){
    if(err){
      console.log(err);
      return;
    }
    res.send(person);
  });
});

router.put('/:id', function(req, res, next) {
    Person.findOneAndUpdate({
      _id: req.params.id
    }, 
    {
    name: {
      firstname: 'Junior',
      lastname: 'Farias'
      },
    age: 30
    }, 
    function(err,person){
      if(err){
      console.log(err);
      return;
    }
    res.send(person);
    });
});

router.delete('/:id', function(req, res, next) {
    Person.findOneAndRemove({
      _id: req.params.id
    }, 
    function(err,person){
      if(err){
      console.log(err);
      return;
    }
    res.send(req.params.id);
    });
});

module.exports = router;
