const mongoose = require('mongoose');

const userProfileSchema = new mongoose.Schema({
  name: String,
  email: String,
  contact: String,
  location: String,
  description: String,
  profileImage: String,
});

module.exports = mongoose.model('UserProfile', userProfileSchema);