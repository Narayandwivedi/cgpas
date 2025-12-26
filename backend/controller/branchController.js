const Branch = require('../models/Branch');

// Get all active branches (public)
const getAllBranches = async (req, res) => {
  try {
    const { country, state, district, search } = req.query;

    // Build filter for active branches
    const filter = { status: 'active' };

    // Add search filters
    if (country) {
      filter.country = { $regex: country, $options: 'i' };
    }

    if (state) {
      filter.state = { $regex: state, $options: 'i' };
    }

    if (district) {
      filter.district = { $regex: district, $options: 'i' };
    }

    // General search across multiple fields
    if (search) {
      filter.$or = [
        { country: { $regex: search, $options: 'i' } },
        { state: { $regex: search, $options: 'i' } },
        { district: { $regex: search, $options: 'i' } },
        { fullAddress: { $regex: search, $options: 'i' } }
      ];
    }

    const branches = await Branch.find(filter).sort({ country: 1, state: 1, district: 1 });

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

// Get branch by ID (public)
const getBranchById = async (req, res) => {
  try {
    const branch = await Branch.findOne({
      _id: req.params.id,
      status: 'active'
    });

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

// Get unique countries (for filter dropdown)
const getCountries = async (req, res) => {
  try {
    const countries = await Branch.distinct('country', { status: 'active' });
    res.json({
      success: true,
      data: countries.filter(c => c).sort()
    });
  } catch (error) {
    console.error('Error fetching countries:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching countries',
      error: error.message
    });
  }
};

// Get unique states by country (for filter dropdown)
const getStatesByCountry = async (req, res) => {
  try {
    const { country } = req.query;
    const filter = { status: 'active' };

    if (country) {
      filter.country = country;
    }

    const states = await Branch.distinct('state', filter);
    res.json({
      success: true,
      data: states.filter(s => s).sort()
    });
  } catch (error) {
    console.error('Error fetching states:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching states',
      error: error.message
    });
  }
};

// Get unique districts by state (for filter dropdown)
const getDistrictsByState = async (req, res) => {
  try {
    const { state, country } = req.query;
    const filter = { status: 'active' };

    if (country) {
      filter.country = country;
    }

    if (state) {
      filter.state = state;
    }

    const districts = await Branch.distinct('district', filter);
    res.json({
      success: true,
      data: districts.filter(d => d).sort()
    });
  } catch (error) {
    console.error('Error fetching districts:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching districts',
      error: error.message
    });
  }
};

module.exports = {
  getAllBranches,
  getBranchById,
  getCountries,
  getStatesByCountry,
  getDistrictsByState
};
