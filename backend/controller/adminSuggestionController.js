const Suggestion = require('../models/Suggestion');

const getAllSuggestions = async (req, res) => {
    try {
        const suggestions = await Suggestion.find().sort({ createdAt: -1 });
        res.status(200).json(suggestions);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching suggestions', error });
    }
};

module.exports = { getAllSuggestions };
