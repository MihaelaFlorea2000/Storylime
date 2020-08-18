const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const eventSchema = new Schema({
  timeline: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Timeline'
  },
  title: {
    type: String,
    required: true
  },
  description: String,
  location: String,
  date: {
    type: Date,
    required: true
  },
});

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;