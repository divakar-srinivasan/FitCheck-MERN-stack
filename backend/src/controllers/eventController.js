const Event = require('../models/eventModel');

exports.createEvent = async (req, res) => {
  const image = req.file.buffer;
  const workoutName = req.body.workoutName;
  const description = req.body.description;
  const tool = req.body.tool;
  const venue = req.body.venue;
  const startDate = new Date(req.body.startDate);
  const startTime = req.body.startTime;
  const endTime = req.body.endTime;
  const bmr = req.body.bmr;
  const diet = req.body.diet;

  try {
    const event = new Event({
      image: image,
      workoutName: workoutName,
      description: description,
      tool: tool,
      venue: venue,
      startDate: startDate,
      startTime: startTime,
      endTime: endTime,
      bmr: bmr,
      diet: diet,
    });
    await event.save();
    res.status(201).json({ message: 'Event created successfully', event: event });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};


exports.getAllEvents = async (req, res) => {
  try {
    const events = await Event.find({}); 
    res.status(200).json(events);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch events' });
  }
};