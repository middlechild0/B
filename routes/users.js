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

//resetPassword Page
router.get('/resetPassword', (req,res) => res.render('resetPassword'));


//CompanyHome Page
router.get('/CompanyHome', (req,res) => res.render('CompanyHome'));

//MentorsHome Page
router.get('/MentorsHome', (req,res) => res.render('MentorsHome'));

//StudentHome Page
router.get('/StudentHome', (req,res) => res.render('StudentHome'));

//Submit
router.post('/submit'),(req.res) {
    console.log(req.body)
    res.console.log('Hello');
};

module.exports = router;