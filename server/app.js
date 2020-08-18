// Require node modules
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const mongoose = require('mongoose');

// Require middlewares
const middlewares = require('./middlewares');
const timelinesRouter = require('./routes/timelines');
const eventsRouter = require('./routes/events');

// Create express app
const app = express();

// Connect to MongoDB Atlas
const url = process.env.DATABASE_URL;
mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// App middleware
app.use(cors({
  origin: process.env.CORS_ORIGIN
}));
app.use(helmet());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    message: 'Hello 🌎!'
  })
})

// Routers middleware
app.use('/timelines', timelinesRouter);
app.use('/events', eventsRouter);

// Error handling middleware
app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

// Listen on port
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
