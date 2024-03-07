const Router = require('express');
const router = Router();


const {handleNormalUserRegistration} =  require ('./../controllers/userController') ;

// create account route
router.post(
    "/register",
    handleNormalUserRegistration
  );

  module.exports = {router};