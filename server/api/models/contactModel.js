// models/Contact.js
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../../config/databaseConfig');

const Contact = sequelize.define('Contact', {
  name: { type: DataTypes.STRING, allowNull: false },
  prenom: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, allowNull: false },
  phone: { type: DataTypes.STRING, allowNull: false },
});

module.exports = Contact;
