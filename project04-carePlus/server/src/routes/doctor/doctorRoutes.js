import express from "express";
import { doctorRegistrationValidationRules } from "../../middlewares/doctor/validateDoctorRegistration.js";
import { registerDoctor, getDoctorsList } from "../../controllers/doctor/doctorControllers.js";
import { getAppointmentsList, acceptAppointment, cancelAppointment } from "../../controllers/doctor/appointmentControllers.js";
import { getPatientsList } from "../../controllers/doctor/patientControllers.js";
import { getMedicalRecordsList, getMedicalRecordsListByPatientId } from "../../controllers/doctor/medicalRecordControllers.js";
import { getPrescriptionsList, markPrescriptionAsComplete, addPrescription } from "../../controllers/doctor/prescriptionControllers.js";
import { getNotificationsList, markNotificationAsRead } from "../../controllers/doctor/notificationControllers.js";
import upload from "../../middlewares/user/multerMiddleware.js";
import validate from "../../utils/validationResult.js";
import { verifyJWT } from "../../middlewares/user/verifyJWT.js";

const router = express.Router();

// AUTH
router.post(
  "/auth/register",
  upload.fields([
    { name: "profile_picture", maxCount: 1 },
    { name: "identity_document", maxCount: 1 },
    { name: "certification", maxCount: 1 },
  ]),
  doctorRegistrationValidationRules(),
  validate,
  registerDoctor
);

//      ---------------SECURE ROUTES----------------
router.get('/list', verifyJWT("patient"), getDoctorsList)

// APPOINTMENT ROUTES
router.get('/appointments/list', verifyJWT("doctor"), getAppointmentsList);
router.post('/appointments/accept', verifyJWT("doctor"), acceptAppointment);
router.post('/appointments/cancel', verifyJWT("doctor"), cancelAppointment);

// PATIENT ROUTES
router.get('/patients/list', verifyJWT("doctor"), getPatientsList);

// PRESCRIPTION ROUTES
router.get('/prescriptions/list', verifyJWT("doctor"), getPrescriptionsList)
router.post('/prescriptions/mark-as-complete', verifyJWT("doctor"), markPrescriptionAsComplete)
router.post('/prescriptions/add', verifyJWT("doctor"), addPrescription) // !add validation for this

// MEDICAL RECORDS ROUTES
router.get('/medical-records/list', verifyJWT("doctor"), getMedicalRecordsList)
router.get('/medical-records/list/:patientId', verifyJWT("doctor"), getMedicalRecordsListByPatientId)

// NOTIFICATION ROUTES
router.get('/notifications/list', verifyJWT("doctor"), getNotificationsList);
router.post('/notifications/mark-as-read', verifyJWT("doctor"), markNotificationAsRead);

export default router;
