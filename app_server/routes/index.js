const express = require('express');
const router = express.Router();
const ctrlActivities = require('../controllers/activities');
const ctrlAuth = require('../controllers/auth');

/* Home page -> Registration */
router.get('/', (req, res) => res.redirect('/register'));

/* Activities pages */
router.get('/dashboard', ctrlActivities.dashboard);

/* Auth pages */
router.get('/register', ctrlAuth.register);
router.post('/register', ctrlAuth.doRegister);
router.get('/login', ctrlAuth.login);
router.post('/login', ctrlAuth.doLogin);

module.exports = router;
