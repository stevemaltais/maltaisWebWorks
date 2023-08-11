const express = require('express');
const { Sequelize, DataTypes } = require('sequelize');
const dbConfig = require('../../config/databaseConfig');
const router = express.Router();

// Utilisation de la configuration de la base de données
const sequelize = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, {
    host: dbConfig.host,
    dialect: dbConfig.dialect,
  });

// Modèle de Contact
const Contact = sequelize.define('Contact', {
  name: { type: DataTypes.STRING, allowNull: false },
  prenom: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, allowNull: false },
  phone: { type: DataTypes.STRING, allowNull: false },
});

// Synchronisation avec la base de données
sequelize.sync();

// Route POST pour le formulaire de contact
router.post('/', async (req, res) => {
  try {
    const { name, prenom, email, phone } = req.body;
    
    // Insertion sécurisée en utilisant Sequelize
    const contact = await Contact.create({ name, prenom, email, phone });
    
    console.log('Insertion réussie:', contact);
    res.status(200).send('Insertion réussie');
  } catch (err) {
    console.error('Erreur lors de l\'insertion des données:', err);
    res.status(500).send('Erreur lors de l\'insertion des données');
  }
});

module.exports = router;
