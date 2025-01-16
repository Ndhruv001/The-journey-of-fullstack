import pool from "../db/connectDB.js";
import { encryptPassword } from "../utils/password.js";

async function registerUserQuery({ name, email, password, role }) {
  // HASH PASSWORD BEFORE STORE
  const hashedPassword = await encryptPassword(password);

  const query = `
        INSERT INTO users (
            name,
            email,
            password,
            role
        ) VALUES (?, ?, ?, ?)
    `;

  const values = [name, email, hashedPassword, role];

  try {
    const [result] = await pool.execute(query, values);
    return result;
  } catch (error) {
    throw new Error("Database error: " + error.message);
  }
}

async function isEmailExist(email) {
  try {
    const [isExist] = await pool.execute(
      "select name from users where email = ?",
      [email]
    );
    if (isExist.length > 0) {
      return true;
    }
    return false;
  } catch (error) {
    console.log("🚀 ~ isEmailExist ~ error:", error);
    throw new Error("Database error ", error.message);
  }
}

async function findUserByEmail(email) {
  try {
    const [user] = await pool.execute("select * from users where email = ?", [
      email,
    ]);
    if (user.length > 0) {
      return user[0];
    }
    return null;
  } catch (error) {
    console.log("🚀 ~ findUserByEmail ~ error:", error);
    throw new Error("Database error ", error.message);
  }
}

async function updateUserStatus(userId, isOnline) {
  const query = "UPDATE users SET is_online = ? WHERE id = ?";
  const values = [isOnline, userId];
  try {
    await pool.query(query, values);
  } catch (error) {
    console.error("🚀 ~ updateUserStatus ~ error:", error);
    throw error;
  }
}

async function getContactsListQuery(userId) {
  const query = "SELECT * FROM users where id <> ?";
  const values = [userId];

  try {
    const [result] = await pool.execute(query, values);
    return result;
  } catch (error) {
    console.log("🚀 ~ getContactsListQuery ~ error:", error);
    throw error;
  }
}

export {
  registerUserQuery,
  findUserByEmail,
  isEmailExist,
  updateUserStatus,
  getContactsListQuery,
};
