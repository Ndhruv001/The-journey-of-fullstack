import { check } from "express-validator";

function userLoginValidationRules() {
  return [
    // Email must be a valid email and a non-empty string
    check("email")
      .isString()
      .withMessage("Email should be a string.")
      .notEmpty()
      .withMessage("Email should be a non-empty string.")
      .isEmail()
      .withMessage("Invalid email address.")
      .isLength({ max: 100 })
      .withMessage("Email must be less than 100 characters."),

    // password must be a non empty string
    check("password")
      .isString()
      .withMessage("Password should be a string.")
      .notEmpty()
      .withMessage("Password should be a non-empty string.")
      .isLength({ max: 65 })
      .withMessage("Password must be less than 65 characters."),
  ];
}

export { userLoginValidationRules };
