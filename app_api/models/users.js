const mongoose = require('mongoose');
const crypto = require('crypto');

/* One activity (Running / Gym / Cycling) - stored inside the user,
   the same way reviews are stored inside a location in Loc8r */
const activitySchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
    enum: ['Running', 'Gym', 'Cycling']
  },
  date: {
    type: Date,
    required: true
  },
  duration: {          // minutes
    type: Number,
    required: true,
    min: 1,
    max: 1440
  },
  notes: {
    type: String,
    maxlength: 500
  },
  createdOn: {
    type: Date,
    'default': Date.now
  }
});

/* User account - data sent by the Register and Login pages.
   The password itself is never stored: later Passport.js will save a hash + salt.
   confirmPassword is only checked in the form, it is not stored either. */
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true
  },
  hash: String,
  salt: String,
  createdOn: {
    type: Date,
    'default': Date.now
  },
  activities: [activitySchema]
});

/* Password helpers - the password itself is never saved, only salt + hash */
userSchema.methods.setPassword = function (password) {
  this.salt = crypto.randomBytes(16).toString('hex');
  this.hash = crypto
    .pbkdf2Sync(password, this.salt, 1000, 64, 'sha512')
    .toString('hex');
};

userSchema.methods.validPassword = function (password) {
  if (!this.salt || !this.hash) {
    return false;
  }
  const hash = crypto
    .pbkdf2Sync(password, this.salt, 1000, 64, 'sha512')
    .toString('hex');
  return this.hash === hash;
};

mongoose.model('User', userSchema);
