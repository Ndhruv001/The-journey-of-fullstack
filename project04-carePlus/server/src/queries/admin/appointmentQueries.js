import pool from "../../db/connectDB.js";

async function getAppointmentsListQuery() {
  try {
    const [result] = await pool.execute(`
        select
            a.id,
            p.id as patient_id,
            p.name as patient_name,
            d.id as doctor_id,
            d.name as doctor_name,
            a.appointment_date,
            a.appointment_time,
            a.status
        from appointments a 
        join patients p
            on a.patient_id = p.id
        join doctors d 
            on a.doctor_id = d.id
        order by a.appointment_date desc, a.appointment_time desc;`);
    return result;
  } catch (error) {
    throw new Error(`Database Error: ${error}`);
  }
}

export { getAppointmentsListQuery };
