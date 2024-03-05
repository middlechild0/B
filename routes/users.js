const express = require('express');
const router = express.Router();

//LoginOptions
router.get('/loginOptions', (req,res) => res.render('loginOptions'));

//LoginForm
router.get('/loginForm', (req,res) => res.render('loginform'));

//SignupForm
router.get('/signupForm', (req,res) => res.render('signupform'));

//SignupOption Page
router.get('/signupOptions', (req,res) => res.render('signupOptions'));

//CompanyRegForm Page
router.get('/CompanyRegForm', (req,res) => res.render('CompanyRegForm'));

//CompanyAdminLogin Page
router.get('/CompanyAdminLogin', (req,res) => res.render('CompanyAdminLogin'));

module.exports = router;