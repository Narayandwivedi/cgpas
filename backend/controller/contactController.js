const Contact = require('../models/Contact');

const createContact = async (req, res) => {
    try {
        const { name, mobile, message, email, subject } = req.body;
        if (!name || !mobile || !message) {
            return res.status(400).json({ message: 'Name, mobile, and message are required' });
        }
        const newContact = new Contact({ name, mobile, message, email, subject });
        await newContact.save();
        res.status(201).json({ message: 'Contact message sent successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error sending contact message', error });
    }
};

module.exports = { createContact };
