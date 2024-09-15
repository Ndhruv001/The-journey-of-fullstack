import pool from "../../db/connectDB.js";

async function getAppointmentsListQuery({ id }) {
  try {
    const [result] = await pool.execute(`
    SELECT 
        a.id,
        a.appointment_date, 
        a.appointment_time, 
        p.name as patient_name, 
        a.purpose, 
        a.status
    FROM 
        appointments a
    JOIN 
        patients p 
    ON a.patient_id = p.id
    WHERE 
        a.doctor_id = ?              
    AND a.status IN ('Pending', 'Scheduled')
    ORDER BY  a.appointment_date DESC, a.appointment_time DESC;`, [id]);
    return result;
  } catch (error) {
    throw new Error(`Database error: ${error}`);
  }
}

async function acceptAppointmentQuery({id}){
  try {
    await pool.execute(`
      UPDATE appointments
      SET status = 'Scheduled'
      WHERE ID = ?;`, [id]);
      return; 
  } catch (error) {
    throw new Error(`Database error: ${error}`); 
  }
}

async function cancelAppointmentQuery({id}){
  try {
    await pool.execute(`
      UPDATE appointments
      SET status = 'Rejected'
      WHERE ID = ?;`, [id]);
      return; 
  } catch (error) {
    throw new Error(`Database error: ${error}`); 
  }
}

export  {getAppointmentsListQuery, acceptAppointmentQuery, cancelAppointmentQuery}