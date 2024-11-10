const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  image:        { type: Buffer, required: true },
  workoutName:    { type: String, required: true },
  description:  { type: String, required: true },
  tool:   { type: String, required: true },
  venue:        { type: String, required: true },
  startDate:    { type: Date,   required: true },
  startTime:    { type: String, required: true },
  endTime:      { type: String, required: true },
  bmr:     { type: String, trim: true },
  diet: { type: String, trim: true }
})

module.exports = mongoose.model('Event', eventSchema);