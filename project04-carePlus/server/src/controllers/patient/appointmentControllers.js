import { insertAppointment } from '../../queries/patient/appointmentQueries.js';
import {formatDate, formatTime } from '../../utils/formatDateAndTime.js';

async function bookAppointment(req, res) {
  const { doctorId, date, time, purpose } = req.body;
  const { id } = req.user;

  const formatedDate = formatDate(date);
  const formatedTime = formatTime(time);

  try {
    const result = await insertAppointment({
      patient_id: id,
      doctor_id: doctorId,
      appointment_date: formatedDate,
      appointment_time: formatedTime,
      purpose,
    });

    return res.status(201).json({ success: true, appointmentId: result.insertId });
  } catch (error) {
    console.log("🚀 ~ bookAppointment ~ error:", error);
    return res.status(500).json({ success: false, message: "Internal server error" });
  }
}

export { bookAppointment };
