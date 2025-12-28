const Branch = require('../models/Branch');

// Get all branches (admin)
const getAllBranchesAdmin = async (req, res) => {
  try {
    const branches = await Branch.find().sort({ createdAt: -1 });
    res.json({
      success: true,
      data: branches
    });
  } catch (error) {
    console.error('Error fetching branches:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching branches',
      error: error.message
    });
  }
};

// Get branch by ID
const getBranchById = async (req, res) => {
  try {
    const branch = await Branch.findById(req.params.id);

    if (!branch) {
      return res.status(404).json({
        success: false,
        message: 'Branch not found'
      });
    }

    res.json({
      success: true,
      data: branch
    });
  } catch (error) {
    console.error('Error fetching branch:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching branch',
      error: error.message
    });
  }
};

// Create new branch
const createBranch = async (req, res) => {
  try {
    const { country, state, district, city, mobileNumber, email, fullAddress, status, head1Name, head1Designation, head1Mobile, head2Name, head2Designation, head2Mobile } = req.body;

    // Validation
    if (!country || !mobileNumber || !fullAddress) {
      return res.status(400).json({
        success: false,
        message: 'Country, mobile number, and full address are required'
      });
    }

    const branch = new Branch({
      country,
      state: state || null,
      district: district || null,
      city: city || null,
      mobileNumber,
      email: email || null,
      fullAddress,
      status: status || 'active',
      head1Name: head1Name || null,
      head1Designation: head1Designation || null,
      head1Mobile: head1Mobile || null,
      head2Name: head2Name || null,
      head2Designation: head2Designation || null,
      head2Mobile: head2Mobile || null
    });

    await branch.save();

    res.status(201).json({
      success: true,
      message: 'Branch created successfully',
      data: branch
    });
  } catch (error) {
    console.error('Error creating branch:', error);
    res.status(500).json({
      success: false,
      message: 'Error creating branch',
      error: error.message
    });
  }
};

// Update branch
const updateBranch = async (req, res) => {
  try {
    const { country, state, district, city, mobileNumber, email, fullAddress, status, head1Name, head1Designation, head1Mobile, head2Name, head2Designation, head2Mobile } = req.body;

    const branch = await Branch.findById(req.params.id);

    if (!branch) {
      return res.status(404).json({
        success: false,
        message: 'Branch not found'
      });
    }

    // Update fields
    if (country) branch.country = country;
    if (state !== undefined) branch.state = state || null;
    if (district !== undefined) branch.district = district || null;
    if (city !== undefined) branch.city = city || null;
    if (mobileNumber) branch.mobileNumber = mobileNumber;
    if (email !== undefined) branch.email = email || null;
    if (fullAddress) branch.fullAddress = fullAddress;
    if (status) branch.status = status;
    if (head1Name !== undefined) branch.head1Name = head1Name || null;
    if (head1Designation !== undefined) branch.head1Designation = head1Designation || null;
    if (head1Mobile !== undefined) branch.head1Mobile = head1Mobile || null;
    if (head2Name !== undefined) branch.head2Name = head2Name || null;
    if (head2Designation !== undefined) branch.head2Designation = head2Designation || null;
    if (head2Mobile !== undefined) branch.head2Mobile = head2Mobile || null;

    await branch.save();

    res.json({
      success: true,
      message: 'Branch updated successfully',
      data: branch
    });
  } catch (error) {
    console.error('Error updating branch:', error);
    res.status(500).json({
      success: false,
      message: 'Error updating branch',
      error: error.message
    });
  }
};

// Delete branch
const deleteBranch = async (req, res) => {
  try {
    const branch = await Branch.findByIdAndDelete(req.params.id);

    if (!branch) {
      return res.status(404).json({
        success: false,
        message: 'Branch not found'
      });
    }

    res.json({
      success: true,
      message: 'Branch deleted successfully'
    });
  } catch (error) {
    console.error('Error deleting branch:', error);
    res.status(500).json({
      success: false,
      message: 'Error deleting branch',
      error: error.message
    });
  }
};

module.exports = {
  getAllBranchesAdmin,
  getBranchById,
  createBranch,
  updateBranch,
  deleteBranch
};
