// controllers/contactController.js
const Contact = require('../models/contact');

exports.createContact = async (req, res) => {
    try {
        const { name, prenom, email, phone } = req.body;

        const contact = await Contact.create({ name, prenom, email, phone });

        console.log('Insertion réussie:', contact);
        res.status(200).send('Insertion réussie');
    } catch (err) {
        console.error('Erreur lors de l\'insertion des données:', err);
        res.status(500).send('Erreur lors de l\'insertion des données');
    }
};
