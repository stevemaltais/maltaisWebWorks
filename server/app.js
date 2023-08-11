require('dotenv').config();
const path = require('path');
const express = require('express');
const cors = require('cors');
const serverConfig = require('./config/serverConfig');
const sqlRoutes = require('./api/routes/contactRoutes');


// Création de l'application Express
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors(serverConfig.corsOptions));
app.use(express.static(path.join(__dirname, '../dist')));

// Utilisation des routes SQL
app.use('/api/contact', sqlRoutes);

// Démarrage du serveur
app.listen(serverConfig.port, () => {
  console.log(`Server started on http://localhost:${serverConfig.port}`);
});