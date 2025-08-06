const User = require('../models/User');
const jwt = require('jsonwebtoken');

const genToken = (id) => jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '1d' });

exports.register = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    if (await User.findOne({ email })) return res.status(400).json({ message: "Email in use" });

    const user = await User.create({ name, email, password, role });
    res.status(201).json({
      _id: user.id, name: user.name, email: user.email, role: user.role,
      token: genToken(user.id)
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user || !(await user.matchPassword(password)))
      return res.status(401).json({ message: "Invalid credentials" });

    res.json({
      _id: user.id, name: user.name, email: user.email, role: user.role,
      token: genToken(user.id)
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
