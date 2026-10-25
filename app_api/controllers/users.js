const mongoose = require('mongoose');
const User = mongoose.model('User');

/* POST /api/register
   body: name, email, password, confirmPassword */
const register = function (req, res) {
  const { name, email, password, confirmPassword } = req.body;

  if (!name || !email || !password) {
    return res
      .status(400)
      .json({ message: "All fields required: name, email, password" });
  }
  if (confirmPassword !== undefined && password !== confirmPassword) {
    return res
      .status(400)
      .json({ message: "Passwords do not match" });
  }

  const user = new User({ name, email });
  user.setPassword(password);          // stores hash + salt, not the password

  user.save()
    .then(user => {
      res
        .status(201)
        .json({ _id: user._id, name: user.name, email: user.email });
    })
    .catch(err => {
      if (err.code === 11000) {          // duplicate key = email already used
        return res
          .status(409)
          .json({ message: "Email already registered" });
      }
      res
        .status(400)
        .json({ message: "Error creating user", error: err });
    });
};

/* POST /api/login
   body: email, password */
const login = function (req, res) {
  const { email, password } = req.body;

  if (!email || !password) {
    return res
      .status(400)
      .json({ message: "All fields required: email, password" });
  }

  User.findOne({ email: email.toLowerCase() })
    .then(user => {
      if (!user || !user.validPassword(password)) {
        return res
          .status(401)
          .json({ message: "Incorrect email or password" });
      }
      res
        .status(200)
        .json({ _id: user._id, name: user.name, email: user.email });
    })
    .catch(err => {
      res
        .status(500)
        .json({ message: "Error logging in", error: err });
    });
};

module.exports = {
  register,
  login
};
