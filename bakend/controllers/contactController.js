const User = require('../Models/User');

exports.createUser = async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    if (!name || !email || !phone || !message) {
      return res.status(400).json({ message: 'Tous les champs sont obligatoires.' });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: 'Format de l\'email invalide.' });
    }
    const newUser = new User({ name, email, phone, message });

    await newUser.save();

    res.status(201).json({ message: 'User enregistré avec succès.', User: newUser });
  } catch (error) {
    console.error('Erreur lors de l\'enregistrement du user :', error);
    res.status(500).json({ message: 'Erreur serveur.' });
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    const Users = await User.find();

    res.status(200).json(Users);
  } catch (error) {
    console.error('Erreur lors de la récupération des Users :', error);
    res.status(500).json({ message: 'Erreur serveur.' });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    const User = await User.findById(id);
    if (!User) {
      return res.status(404).json({ message: 'User non trouvé.' });
    }

    await User.findByIdAndDelete(id);

    res.status(200).json({ message: 'User supprimé avec succès.' });
  } catch (error) {
    console.error('Erreur lors de la suppression du User :', error);
    res.status(500).json({ message: 'Erreur serveur.' });
  }
};