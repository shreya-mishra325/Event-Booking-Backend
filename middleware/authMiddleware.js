const jwt = require('jsonwebtoken');
const User = require('../models/User');

exports.auth = (role) => async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) return res.status(401).json({ message: "No token" });

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decoded.id).select('-password');
    if (!req.user) return res.status(401).json({ message: "User not found" });

    if (role && req.user.role !== role) {
      return res.status(403).json({ message: "Admins only" });
    }

    next();
  } catch (err) {
    res.status(401).json({ message: "Unauthorized" });
  }
};
