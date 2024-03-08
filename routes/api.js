const express = require('express');
const router = express.Router();


const {handleNormalUserRegistration} =  require ('./../controllers/userController') ;

// create account route
router.post(
    "/register",
    handleNormalUserRegistration
  );

  module.exports = router;