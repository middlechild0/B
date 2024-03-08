const Router = require("express");
const router = Router();

// const {handleNormalUserRegistration} =  require ('./../controllers/Usercontroller.js') ;
const {
  handleNormalUserRegistration,
} = require("./../controllers/Usercontroller.js");

// create account route
router.post("/register", handleNormalUserRegistration);

router.post("/login", handleNormalUserRegistration);

router.post("/companyRegitration", );

module.exports = router;
