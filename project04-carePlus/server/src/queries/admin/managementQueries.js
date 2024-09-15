import pool from "../../db/connectDB.js";

async function getApprovalListQuery() {
  try {
    const [result] = await pool.execute(`
    select 
        id,
        name,
        email,
        specialization,
        experience
    from 
        pending_doctor_verification;`);
    return result;
  } catch (error) {
    throw new Error(`Database Error: ${error}`);
  }
}

export { getApprovalListQuery };
