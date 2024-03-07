const Router = require('express');
const router = Router();

// create account route
router.post(
    "/register",
    userControlers.handleNormalUserRegistration
  );