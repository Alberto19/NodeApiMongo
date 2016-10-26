var mongoose = require('mongoose');


var usuario = mongoose.Schema({
  name: {
        type: String,
        require: true
        },
    login:{
        type: String,
        require: true 
    },
    password:{
        type: Number,
        require: true
    },
    adress:{
        type: Number, 
        coordinates: [] 
    },
    dateCreate:{
        type: Date,
        require:true,
        default: Date.now
    },
    dateLastLogin: {
      type: Date,
      default: Date.now
    },
    type: String,
    preferences:[{
        tipo: String
    }],
    favorite:[
        {
            name: String,
            location:{
                type: Number, 
                coordinates: [] 
            }
        }
    ],
    genre: String
});

module.exports  = mongoose.model('Usuario',usuario);
