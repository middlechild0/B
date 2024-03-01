const express = require('express');
const router = express.Router();

//Login Page
router.get('/login', (req,res) => res.send('loginform'));

//SignupOption Page
router.get('/signupOptions', (req,res) => res.render('signupOptions'));


module.exports = router;