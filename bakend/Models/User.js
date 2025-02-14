const mongoose = require('mongoose');
const { message } = require('prompt');

const userSchema = new mongoose.Schema({
   name:{
   type :String,
   required:true
   },

   email:{
      type :String,
      required:true,
      match: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
  },

  phone:{
   type :Number,
   required:true,
   match: [/^\d{10}$/, 'Numéro de téléphone invalide!']
},

message:{
   type :String,
   required:true,
}

});

module.exports = mongoose.model("user", userSchema);