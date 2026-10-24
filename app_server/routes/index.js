const express = require('express');
const router = express.Router();
const ctrlActivities = require('../controllers/activities');
const ctrlAuth = require('../controllers/auth');

/* Activities pages */
router.get('/', ctrlActivities.dashboard);

/* Auth pages */
router.get('/register', ctrlAuth.register);
router.post('/register', ctrlAuth.doRegister);
router.get('/login', ctrlAuth.login);
router.post('/login', ctrlAuth.doLogin);

module.exports = router;
