import express from "express";
import {
  doctorRegistrationValidationRules,
  validate,
} from "../../middlewares/doctor/validateDoctorRegistration.js";
import {
  registerDoctor,
} from "../../controllers/doctor/doctorControllers.js";
import upload from "../../middlewares/multerMiddleware.js";

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


export default router;
