import pool from "../db/connectDB.js";

async function insertMessages(userId, message) {
  try {
    const [result] = await pool.execute(
      `INSERT INTO messages (userId, messages) VALUES (?, ?)`,
      [userId, message]
    );

    return result.insertId;
  } catch (error) {
    console.error("Error while inserting message :", error);
    throw new Error("Database error while inserting message.");
  }
}

async function getAllMessages(userId) {
  try {
    const [result] = await pool.execute("select * from messages where userId = ?", [userId]);
    return result;
  } catch (error) {
    console.error("Error while get all messages :", error);
    throw new Error("Database error while get all messages.");
  }
}


export {
    insertMessages,
    getAllMessages
}