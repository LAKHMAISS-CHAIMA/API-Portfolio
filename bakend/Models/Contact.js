const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
   name: {
      type: String,
      required: true
   },

   email: {
      type: String,
      required: true,
      match: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
   },

   phone: {
      type: String,
      required: true,
      match: [/^\d{10}$/, 'Numéro de téléphone invalide!'] 
   },

   message: {
      type: String,
      required: true,
   }
});

const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;
