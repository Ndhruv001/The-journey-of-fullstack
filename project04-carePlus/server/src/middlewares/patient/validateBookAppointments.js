import { check } from "express-validator";

function bookAppointmentValidationRules() {
  return [
    check("doctorId")
      .isInt({ min: 1 })
      .withMessage("Doctor ID must be a positive integer.")
      .notEmpty()
      .withMessage("Doctor ID is required."),

    check("date")
      .notEmpty()
      .withMessage("Appointment date is required.")
      .isISO8601({ strict: true, strictSeparator: true })
      .withMessage(
        "Appointment date must be a valid date in YYYY-MM-DD format."
      ),

    check("time")
      .notEmpty()
      .withMessage("Appointment time is required.")
      .matches(/^([01]\d|2[0-3]):([0-5]\d)$/)
      .withMessage("Appointment time must be in HH:MM format."),

    check("purpose")
      .isString()
      .withMessage("Purpose must be a string.")
      .isLength({ max: 255 })
      .withMessage("Purpose must be less than 255 characters.")
      .notEmpty()
      .withMessage("Purpose is required."),
  ];
}

export { bookAppointmentValidationRules };
