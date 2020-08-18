const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const timelineSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  imageURL: String
});

const Timeline = mongoose.model('Timeline', timelineSchema);

module.exports = Timeline;