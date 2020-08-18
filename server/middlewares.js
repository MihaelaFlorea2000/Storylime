// 404 Handler
const notFound = (req, res, next) => {
  const error = new Error(`Not Found 🐉 - ${req.origialUrl}`)
  res.status(404);
  next(error);
}

// General Error Handler
const errorHandler = (error, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode);
  res.json({
    message: error.message,
    stack: process.env.NODE_ENV === 'production' ? '📚' : error.stack
  });
}

module.exports = {
  notFound,
  errorHandler
}