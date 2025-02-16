const express = require('express');
const Contact = require('../Models/Contact');
const body_parser = require('body-parser');
const port = 3000;
const api = express();

api.use(body_parser.json());

api.post("/api/contacts", async (req, res) => {
    console.log(req.body);
    try {
        const data = new Contact(req.body);
        await data.save();
        res.status(201).json({ message: "Message reçu avec succès!" }); 
    } catch (error) {
        console.log("Erreur lors de la sauvegarde du message: " + error);
        res.status(500).json({ message: "Erreur interne du serveur!" }); 
    }
});

api.get("/api/contacts", async (req, res) => {
    try {
        const contacts = await Contact.find();
        res.status(200).json(contacts); 
    } catch (error) {
        console.log("Erreur lors de la récupération des contacts: " + error);
        res.status(500).json({ message: "Erreur lors de la récupération des messages!" });
    }
});

api.delete("/api/contacts/:id", async (req, res) => {
    const id = req.params.id;
    try {
        const deletedContact = await Contact.findByIdAndDelete(id);
        if (!deletedContact) {
            return res.status(404).json({ message: "Contact introuvable!" });
        }
        res.status(200).json({ message: "Message supprimé avec succès!" }); 
    } catch (error) {
        console.log("Erreur lors de la suppression du contact: " + error);
        res.status(500).json({ message: "Erreur lors de la suppression!" }); 
    }
});

api.listen(port, () => {
    console.log(`API active sur le port ${port}`);
});

module.exports = api;
