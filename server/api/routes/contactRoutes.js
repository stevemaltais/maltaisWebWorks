// routes/contactRoutes.js
const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactController');

const validateContact = require('../middleware/contactValidate');


router.post('/', validateContact, contactController.createContact);

module.exports = router;
