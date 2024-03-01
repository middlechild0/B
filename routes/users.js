const express = require('express');
const router = express.Router();

//Login Page
router.get('/login', (req,res) => res.send('loginform'));

//Register Page
router.get('/register', (req,res) => res.render('signupOptions'));


module.exports = router;