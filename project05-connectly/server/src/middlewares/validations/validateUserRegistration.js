import { check } from "express-validator";

function userRegistrationValidationRules() {
  return [
    // Name must be a non-empty string
    check("name")
      .isString()
      .withMessage("Name should be a string.")
      .notEmpty()
      .withMessage("Name should be a non-empty string.")
      .isLength({ max: 100 })
      .withMessage("Name must be less than 100 characters."),

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

    check("role")
      .isString()
      .withMessage("Role should be a string.")
      .notEmpty()
      .withMessage("Role is required.")
      .isIn(["Teacher", "Student", "Institute"])
      .withMessage("Invalid Role."),

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

export { userRegistrationValidationRules };
