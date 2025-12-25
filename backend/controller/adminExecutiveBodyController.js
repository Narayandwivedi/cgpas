const ExecutiveBody = require('../models/ExecutiveBody');

// Admin: Get all executive body members (including drafts)
const getAllExecutiveBodyAdmin = async (req, res) => {
  try {
    const members = await ExecutiveBody.find()
      .sort({ priority: 1, createdAt: -1 })
      .select('-__v');

    res.status(200).json({
      success: true,
      count: members.length,
      members
    });
  } catch (error) {
    console.error('Error fetching all executive body members:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching executive body',
      error: error.message
    });
  }
};

// Admin: Get executive body member by ID
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

// Admin: Create new executive body member
const createExecutiveBody = async (req, res) => {
  try {
    const memberData = req.body;

    // Validate required fields
    if (!memberData.name || !memberData.position || !memberData.organization || !memberData.imageUrl) {
      return res.status(400).json({
        success: false,
        message: 'Name, position, organization, and image are required'
      });
    }

    const member = new ExecutiveBody(memberData);
    await member.save();

    res.status(201).json({
      success: true,
      message: 'Executive body member created successfully',
      member
    });
  } catch (error) {
    console.error('Error creating executive body member:', error);
    res.status(500).json({
      success: false,
      message: 'Error creating executive body member',
      error: error.message
    });
  }
};

// Admin: Update executive body member
const updateExecutiveBody = async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body;

    const member = await ExecutiveBody.findByIdAndUpdate(
      id,
      updateData,
      { new: true, runValidators: true }
    );

    if (!member) {
      return res.status(404).json({
        success: false,
        message: 'Executive body member not found'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Executive body member updated successfully',
      member
    });
  } catch (error) {
    console.error('Error updating executive body member:', error);
    res.status(500).json({
      success: false,
      message: 'Error updating executive body member',
      error: error.message
    });
  }
};

// Admin: Delete executive body member
const deleteExecutiveBody = async (req, res) => {
  try {
    const { id } = req.params;

    const member = await ExecutiveBody.findByIdAndDelete(id);

    if (!member) {
      return res.status(404).json({
        success: false,
        message: 'Executive body member not found'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Executive body member deleted successfully'
    });
  } catch (error) {
    console.error('Error deleting executive body member:', error);
    res.status(500).json({
      success: false,
      message: 'Error deleting executive body member',
      error: error.message
    });
  }
};

module.exports = {
  getAllExecutiveBodyAdmin,
  getExecutiveBodyById,
  createExecutiveBody,
  updateExecutiveBody,
  deleteExecutiveBody
};
