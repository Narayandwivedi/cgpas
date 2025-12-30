const Blog = require('../models/Blog');
const Branch = require('../models/Branch');
const Complaint = require('../models/Complaint');
const Contact = require('../models/Contact');
const ExecutiveBody = require('../models/ExecutiveBody');
const Gallery = require('../models/Gallery');
const News = require('../models/News');
const Suggestion = require('../models/Suggestion');

const exportData = async (req, res) => {
  try {
    const blogs = await Blog.find({});
    const branches = await Branch.find({});
    const complaints = await Complaint.find({});
    const contacts = await Contact.find({});
    const executiveBodies = await ExecutiveBody.find({});
    const gallery = await Gallery.find({});
    const news = await News.find({});
    const suggestions = await Suggestion.find({});

    const allData = {
      blogs,
      branches,
      complaints,
      contacts,
      executiveBodies,
      gallery,
      news,
      suggestions,
    };

    res.json(allData);
  } catch (error) {
    res.status(500).json({ message: 'Error exporting data', error });
  }
};

module.exports = { exportData };
