const { validationResult } = require('express-validator');

//Validators pack to show errors

const validResult = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(403).json({ errors: errors.array() });
  };

  next();
};

module.exports = { validResult };