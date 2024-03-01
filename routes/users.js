const express = require('express');
const router = express.Router();


//LoginForm
router.get('/loginForm', (req,res) => res.render('loginform'));

//SignupForm
router.get('/signupForm', (req,res) => res.render('signupform'));

//SignupOption Page
router.get('/signupOptions', (req,res) => res.render('signupOptions'));


module.exports = router;