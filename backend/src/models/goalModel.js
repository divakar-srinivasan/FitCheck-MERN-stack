const mongoose = require('mongoose');

const goalSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  goals: String,
  baselineActivity: String,
  sex: String,
  dob: Date,
  height: Number,
  currentWeight: Number,
  goalWeight: Number,
});

module.exports = mongoose.model('Goal', goalSchema);
