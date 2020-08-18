const router = require('express').Router();
const Timeline = require('../models/Timeline');

// Lists all timelines
router.get('/', async (req, res, next) => {
  try {
    const timelines = await Timeline.find();
    res.json(timelines);
  } catch (error) {
    res.status(400);
    next(error);
  }
});

// Add a new timeline
router.post('/add', async (req, res, next) => {
  const name = req.body.name;
  const imageURL = req.body.imageURL;

  const newTimeline = new Timeline({
    name: name,
    imageURL: imageURL
  })

  try {
    await newTimeline.save();
    res.json('Timeline added!');
  } catch (error) {
    res.status(400);
    next(error);
  }
});

// Update a specific timeline
router.patch('/:timelineId', async (req, res, next) => {
  try {
    await Timeline.updateOne({_id: req.params.timelineId}, {$set: req.body});
    res.json('Timeline updated!');
  } catch(error) {
    res.status(400);
    next(error);
  }
});

module.exports = router;