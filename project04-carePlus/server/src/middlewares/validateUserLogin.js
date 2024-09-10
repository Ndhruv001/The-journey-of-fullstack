import { check, validationResult } from "express-validator";

function userLoginValidationRules() {
  return [
    check("email")
      .isString()
      .withMessage("Email should be a string.")
      .notEmpty()
      .withMessage("Email should be a non-empty string.")
      .isEmail()
      .withMessage("Invalid email address."),

    check("password")
      .isString()
      .withMessage("Password should be a string.")
      .notEmpty()
      .withMessage("Password should be a non-empty string."),
  ];
}

function validate(req, res, next) {
  const error = validationResult(req);
  if (!error.isEmpty) {
    return res
      .status(400)
      .json({ success: false, message: "Input is not valid." });
  }
  next();
}

export { userLoginValidationRules, validate};
