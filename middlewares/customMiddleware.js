const customMiddleware = (req, res, next) => {
  // Custom middleware logic
  next();
};

module.exports = customMiddleware;
