const express = require('express');
const router = express.Router();
const UserProfile = require('../models/UserProfile');

// Get user profile
router.get('/:id', async (req, res) => {
  try {
    const userProfile = await UserProfile.findById(req.params.id);
    if (!userProfile) return res.status(404).json({ message: 'User not found' });
    res.json(userProfile);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Update user profile
router.put('/:id', async (req, res) => {
  try {
    const updatedProfile = await UserProfile.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedProfile);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;