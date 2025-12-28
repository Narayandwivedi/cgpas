const Complaint = require('../models/Complaint');

const createComplaint = async (req, res) => {
    try {
        const { fullName, mobile, message, email, image } = req.body;
        if (!fullName || !mobile || !message) {
            return res.status(400).json({ message: 'Full name, mobile, and message are required' });
        }
        const newComplaint = new Complaint({ fullName, mobile, message, email, image });
        await newComplaint.save();
        res.status(201).json({ message: 'Complaint sent successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error sending complaint', error });
    }
};

module.exports = { createComplaint };
