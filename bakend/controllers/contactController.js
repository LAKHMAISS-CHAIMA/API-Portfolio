const Contact = require('../Models/Contact');

exports.createContact = async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    if (!name || !email || !phone || !message) {
      return res.status(400).json({ message: 'Tous les champs sont obligatoires.' });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: 'Format de l\'email invalide.' });
    }

    const newContact = new Contact({ name, email, phone, message });

    await newContact.save();

    res.status(201).json({ message: 'Message enregistré avec succès.', contact: newContact });
  } catch (error) {
    console.error('Erreur lors de l\'enregistrement du message :', error);
    res.status(500).json({ message: 'Erreur serveur.' });
  }
};

exports.getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find(); 

    res.status(200).json(contacts);
  } catch (error) {
    console.error('Erreur lors de la récupération des messages :', error);
    res.status(500).json({ message: 'Erreur serveur.' });
  }
};

// Supprimer un message/contact
exports.deleteContact = async (req, res) => {
  try {
    const { id } = req.params;

    const contact = await Contact.findById(id); // Utiliser 'Contact' au lieu de 'User'
    if (!contact) {
      return res.status(404).json({ message: 'Message non trouvé.' });
    }

    await Contact.findByIdAndDelete(id);

    res.status(200).json({ message: 'Message supprimé avec succès.' });
  } catch (error) {
    console.error('Erreur lors de la suppression du message :', error);
    res.status(500).json({ message: 'Erreur serveur.' });
  }
};
