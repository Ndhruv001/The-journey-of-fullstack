import pool from '../../db/connectDB.js';

async function insertAppointment({ patient_id, doctor_id, appointment_date, appointment_time, purpose }) {
  try {
    const [result] = await pool.execute(
      `INSERT INTO appointments (patient_id, doctor_id, appointment_date, appointment_time, purpose)
       VALUES (?, ?, ?, ?, ?)`,
      [patient_id, doctor_id, appointment_date, appointment_time, purpose]
    );

    return result;
  } catch (error) {
    throw new Error(`Failed to insert appointment ${error?.message}`);
  }
}

export { insertAppointment };
