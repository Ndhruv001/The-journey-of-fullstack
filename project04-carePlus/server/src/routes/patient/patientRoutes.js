import express from 'express';
import { patientRegistrationValidationRules, validate } from '../../middlewares/patient/validatePatientRegistration.js';
import { registerPatient } from '../../controllers/patient/patientControllers.js';

const router = express.Router();

// AUTH 
router.post('/auth/register', patientRegistrationValidationRules(), validate, registerPatient);

export default router;