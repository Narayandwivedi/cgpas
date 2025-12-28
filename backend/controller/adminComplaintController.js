const Complaint = require('../models/Complaint');

const getAllComplaints = async (req, res) => {
    try {
        const complaints = await Complaint.find().sort({ createdAt: -1 });
        res.status(200).json(complaints);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching complaints', error });
    }
};

module.exports = { getAllComplaints };
