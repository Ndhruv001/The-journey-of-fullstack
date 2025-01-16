import pool from "../db/connectDB.js";

async function getMessagesQuery({ receiver_id, sender_id }) {
  const query = `SELECT *
FROM messages
WHERE (sender_id = ? AND receiver_id = ?)
   OR (sender_id = ? AND receiver_id = ?)
ORDER BY created_at ASC;`;
  const values = [sender_id, receiver_id, receiver_id, sender_id];

  try {
    const [result] = await pool.execute(query, values);
    return result;
  } catch (error) {
    console.log("🚀 ~ getMessagesQuery ~ error:", error);
    throw error;
  }
}

async function sendMessageQuery({ sender_id, receiver_id, message }) {
  const query =
    "INSERT INTO messages (sender_id, receiver_id, message) VALUES (?, ?, ?)";
  const values = [sender_id, receiver_id, message];

  try {
    const [result] = await pool.execute(query, values);
    console.log("🚀 ~ sendMessageQuery ~ result:", result);
    return result;
  } catch (error) {
    console.log("🚀 ~ sendMessageQuery ~ error:", error);
    throw error;
  }
}

export { getMessagesQuery, sendMessageQuery };
