import express from "express";
import { patientRegistrationValidationRules } from "../../middlewares/patient/validatePatientRegistration.js";
import { bookAppointmentValidationRules } from "../../middlewares/patient/validateBookAppointments.js";
import { registerPatient } from "../../controllers/patient/patientControllers.js";
import { bookAppointment } from "../../controllers/patient/appointmentControllers.js";
import { verifyJWT } from "../../middlewares/user/verifyJWT.js";
import validate from '../../utils/validationResult.js'

const router = express.Router();

// AUTH
router.post(
  "/auth/register",
  patientRegistrationValidationRules(),
  validate,
  registerPatient
);

// SECURE ROUTES
router.post(
  "/book-appointment",
  bookAppointmentValidationRules(),
  validate,
  verifyJWT("patient"),
  bookAppointment
);

export default router;
