// middleware/validateContact.js
module.exports = (req, res, next) => {
    const { name, prenom, email, phone } = req.body;

    if (!name || !prenom || !email || !phone) {
        return res.status(400).send('Tous les champs sont obligatoires');
    }

    next();
};
