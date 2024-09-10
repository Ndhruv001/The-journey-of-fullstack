import {
  registerDoctorQuery,
  isEmailExist,
} from "../../queries/doctor/doctorQueries.js";
import uploadOnCloudinary from "../../utils/cloudinary.js";

async function registerDoctor(req, res) {
  const {
    name,
    email,
    password,
    dob,
    gender,
    phone_number,
    specialization,
    medical_license_number,
    experience,
    education_detail,
    identity_type,
  } = req.body;

  const { profile_picture, identity_document, certification } = req.files;

  const isExist = await isEmailExist(email);
  if(isExist){
    return res.status(409).json({success: false, message: "Email is already exist"});
  }

  try {
    // Upload files to Cloudinary
    const profilePictureUrl = profile_picture
      ? await uploadOnCloudinary(profile_picture[0].path)
      : null;
    const identityDocumentUrl = identity_document
      ? await uploadOnCloudinary(identity_document[0].path)
      : null;
    const certificationUrl = certification
      ? await uploadOnCloudinary(certification[0].path)
      : null;

    const result = await registerDoctorQuery({
      name,
      email,
      password,
      dob,
      gender,
      phone_number,
      specialization,
      medical_license_number,
      experience,
      certification: certificationUrl?.secure_url,
      education_detail,
      profile_picture: profilePictureUrl?.secure_url,
      identity_type,
      identity_document: identityDocumentUrl?.secure_url,
    });

    res.status(201).json({
      message: "Doctor registered successfully",
      doctorId: result.insertId,
    });
  } catch (error) {
    console.log("🚀 ~ registerDoctor ~ error:", error);
    res
      .status(500)
      .json({ error: "Error registering doctor", details: error.message });
  }
}



export { registerDoctor };
