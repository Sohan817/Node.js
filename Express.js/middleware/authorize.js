const authorize = (req, res, next) => {
  console.log("Authorizing...");
  next();
};

module.exports = authorize;
