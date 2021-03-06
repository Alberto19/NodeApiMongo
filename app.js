var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
<<<<<<< HEAD

var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();

//mongoose conect
var db = mongoose.connect('mongodb://localhost/NodeApiMongo').connection;
db.on('open',function(){
  console.log('Mongo conectado');
});
db.on('error', function(){
  console.log('Erro no mongo');
});

var company = mongoose.Schema({
  name: String,
  address: {
    name: String,
    number: Number,
    city: String
  },
  date: {
    type: Date,
    required: true,
    default: Date.now
  }
});

var person = mongoose.Schema({
  name: {
    firstname: String,
    lastname: String
  }
});

person.virtual('name.fullname').get(function(){
  return this.name.firstname.concat(' ').concat(this.name.lastname);
});

var Person = mongoose.model('Person', person);
Person.create({
  name: {
    firstname: 'Junior',
    lastname: 'Farias'
  }, function(err, person) {
    if(err){
      console.log('Erro person',err)
      return
    }
    console.log('Person created', person);
    console.log('Person FullName', person.name.fullname);
  }
});

/*var Company = mongoose.model('Company', company);

Company.create({
  name:'Junior ',
  address: {
    name: 'Rua 15',
    number: 37,
    city: 'Sao paulo'
  },
  date: new Date() 
}, function(err, company){
   if(err){
     console.log(err);
     return
   }
   console.log('Criado com sucesso');
});*/
=======
var connection = require('./models');

var routes = require('./routes/index');
var users = require('./routes/users');
var usuario = require('./routes/usuario');

var app = express();

>>>>>>> 95c68de2f809db55c9edea1add5316a575d8841d

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);
<<<<<<< HEAD
=======
app.use('/usuario',usuario);
>>>>>>> 95c68de2f809db55c9edea1add5316a575d8841d

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
