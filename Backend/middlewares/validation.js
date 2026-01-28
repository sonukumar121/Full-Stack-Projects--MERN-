// middlewares/validation.js
const { body } = require("express-validator");

const signupValidation = [
  body("name").isAlpha(),         
  body("email").isEmail(),        
  body("password").isLength({ min: 6 })
  
];

const loginValidation = [
  body("email").isEmail(),
  body("password").notEmpty()
];


module.exports = {
  signupValidation,
  loginValidation
};
