require("dotenv").config();
const jwt = require('jsonwebtoken');

const tokenVerification = async (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(" ")[1];
  if (!token) return res.send("Missing Authorization header")
  try {
    const user = await jwt.verify(token, process.env.JWT_SECRET_TOKEN);
    req.auth = user;
    next();
  }
  catch (error) {
    res.status(401).json({ message: 'Invalid Token' })
  }
}

module.exports = tokenVerification;