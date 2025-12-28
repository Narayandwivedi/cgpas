const Suggestion = require('../models/Suggestion');

const createSuggestion = async (req, res) => {
    try {
        const { fullName, mobile, message, email, image } = req.body;
        if (!fullName || !mobile || !message) {
            return res.status(400).json({ message: 'Full name, mobile, and message are required' });
        }
        const newSuggestion = new Suggestion({ fullName, mobile, message, email, image });
        await newSuggestion.save();
        res.status(201).json({ message: 'Suggestion sent successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error sending suggestion', error });
    }
};

module.exports = { createSuggestion };
