import { verifyPassword } from "../../utils/password.js";
import { findPatientByEmail } from "../../queries/patient/patientQueries.js";
import { findDoctorByEmail } from "../../queries/doctor/doctorQueries.js";
import sendTokensAndResponse from "../../utils/sendTokensAndResponse.js";

async function login(req, res) {
  const { email, password } = req.body;

  try {

    // CHECK FOR ADMIN
    if(email === 'admin@gmail.com' && password === 'admin123'){
      return sendTokensAndResponse(res, {id: 1}, 'admin');
    }

    // CHECK FOR PATIENT
    const patient = await findPatientByEmail(email);
    if (patient && (await verifyPassword(password, patient.password))) {
      return sendTokensAndResponse(res, patient, "patient");
    }

    // CHECK FOR DOCTOR
    const doctor = await findDoctorByEmail(email);
    if (doctor && (await verifyPassword(password, doctor.password))) {
      return sendTokensAndResponse(res, doctor, "doctor");
    }

    // NO USER FOUND
    return res
      .status(404)
      .json({ success: false, message: "Invalid email or password" });

  } catch (error) {
    console.error("🚀 ~ login ~ error:", error);
    return res
      .status(500)
      .json({ success: false, message: "Internal server error" });
  }
}

export default login;
