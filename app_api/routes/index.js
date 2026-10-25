const express = require('express');
const router = express.Router();
const ctrlUsers = require('../controllers/users');
const ctrlActivities = require('../controllers/activities');

// users (Registration and Login pages)
router
  .route('/register')
  .post(ctrlUsers.register);

router
  .route('/login')
  .post(ctrlUsers.login);

// activities (Dashboard page)
router
  .route('/users/:userid/activities')
  .get(ctrlActivities.activitiesList);

module.exports = router;
