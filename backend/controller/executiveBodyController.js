const ExecutiveBody = require('../models/ExecutiveBody');

// Get all published executive body members (for frontend)
const getAllExecutiveBody = async (req, res) => {
  try {
    const members = await ExecutiveBody.find({ status: 'published' })
      .sort({ priority: 1, createdAt: -1 })
      .select('-__v');

    res.status(200).json({
      success: true,
      count: members.length,
      members
    });
  } catch (error) {
    console.error('Error fetching executive body:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching executive body',
      error: error.message
    });
  }
};

// Get executive body member by ID
const getExecutiveBodyById = async (req, res) => {
  try {
    const { id } = req.params;

    const member = await ExecutiveBody.findById(id);

    if (!member) {
      return res.status(404).json({
        success: false,
        message: 'Executive body member not found'
      });
    }

    // Only return published members for frontend
    if (member.status !== 'published') {
      return res.status(404).json({
        success: false,
        message: 'Executive body member not found'
      });
    }

    res.status(200).json({
      success: true,
      member
    });
  } catch (error) {
    console.error('Error fetching executive body member:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching executive body member',
      error: error.message
    });
  }
};

module.exports = {
  getAllExecutiveBody,
  getExecutiveBodyById
};
