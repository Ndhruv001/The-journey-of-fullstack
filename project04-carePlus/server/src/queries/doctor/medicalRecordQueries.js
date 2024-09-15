import pool from "../../db/connectDB.js";

async function getMedicalRecordsListQuery({ id }) {
  try {
    const [result] = await pool.execute(
      `SELECT 
    p.id AS patient_id,
    p.name AS patient_name,
    p.phone_number AS patient_phone_number,
    m.id AS medical_record_id,
    m.created_at AS last_visit
    FROM 
        patients p
    JOIN 
        (SELECT 
            m1.patient_id,
            MAX(m1.created_at) AS last_visit
        FROM 
            medical_records m1
        WHERE 
            m1.doctor_id = ?
        GROUP BY 
            m1.patient_id
            limit 1) latest
    ON 
        p.id = latest.patient_id
    JOIN 
        medical_records m 
    ON 
        m.patient_id = latest.patient_id 
        AND m.created_at = latest.last_visit
    WHERE 
        m.doctor_id = ?
    ORDER BY 
        m.created_at DESC;`,
      [id, id]
    );
    return result;
  } catch (error) {
    throw new Error(`Database Error: ${error}`);
  }
}

async function getMedicalRecordsListByPatientIdQuery({ doctor_id, patient_id }) {
  try {
    const [result] = await pool.execute(
      `select id,
    record_type as title,
    created_at as date,
    details
    from medical_records
    where doctor_id = ? 
    and patient_id = ?
    order by date desc`,
      [doctor_id, patient_id]
    );
    return result;
  } catch (error) {
    throw new Error(`Database Error: ${error}`);
  }
}

export { getMedicalRecordsListQuery, getMedicalRecordsListByPatientIdQuery };
