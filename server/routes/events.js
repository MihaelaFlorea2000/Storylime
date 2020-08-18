const router = require('express').Router();
const Event = require('../models/Event');

// Lists all events of a specific timeline
router.get('/:timelineId', async (req, res, next) => {
  try {
    const foundEvents = await Event.find({
      timeline: req.params.timelineId
    });
    res.json(foundEvents);
  } catch (error) {
    res.status(400);
    next(error);
  }
});

// Add a new event to a specific timeline
router.post('/:timelineId/add', async (req, res, next) => {
  const timeline = req.params.timelineId;
  const title = req.body.title;
  const description = req.body.description;
  const location = req.body.location;
  const date = Date.parse(req.body.date);

  const newEvent = new Event({
    timeline: timeline,
    title: title,
    description: description,
    location: location,
    date: date
  })

  try {
    await newEvent.save();
    res.json('Event added!');
  } catch (error) {
    res.status(400);
    next(error);
  }
});

// Delete an event
router.delete('/:eventId', async (req, res, next) => {
  try {
    await Event.findByIdAndDelete(req.params.eventId);
    res.json('Event deleted!')
  } catch (error) {
    res.status(400);
    next(error);
  }
});

// Update an event
router.patch('/:eventId', async (req, res, next) => {
  try {
    await Event.updateOne({ _id: req.params.eventId}, { $set: req.body });
    res.json('Event updated!');
  } catch (error) {
    res.status(400);
    next(error);
  }
});


module.exports = router;