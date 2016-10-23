var mongoose = require('mongoose');


var person = mongoose.Schema({
  name: {
        firstname: {
            type: String,
            require: true
        },
        lastname:{
            type: String,
            require: true
        }
    },
    age: {
        type: Number,
        require: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports  = mongoose.model('Person',person);
