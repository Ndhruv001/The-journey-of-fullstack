import express from "express";
import { doctorRegistrationValidationRules } from "../../middlewares/doctor/validateDoctorRegistration.js";
import { registerDoctor, getDoctorsList } from "../../controllers/doctor/doctorControllers.js";
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

router.get('/list', verifyJWT("patient"), getDoctorsList)

export default router;
