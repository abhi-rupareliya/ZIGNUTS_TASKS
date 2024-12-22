const jwt = require("jsonwebtoken");
const User = require("../models/user");

const SECRET_KEY = process.env.SECRET_KEY;

const adminAuth = async (req, res, next) => {
  try {
    const token = req.cookies.authToken;
    if (!token) return res.redirect("/admin/login");
    const { email } = jwt.verify(token, SECRET_KEY);

    const admin = await User.findOne({ email });
    if (!admin) return res.redirect("/admin/login");
    next();
  } catch (err) {
    return res.redirect("/admin/login");
  }
};

module.exports = adminAuth;
