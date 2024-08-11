import pool from "../db/connectDB.js";
import {encryptPassword} from '../utils/passwordUtil.js' ;

async function isUserExist(email, username) {
  try {
    const [rows] = await pool.execute(
      "SELECT * FROM users WHERE email = ? OR username = ?",
      [email, username]
    );

    if (rows.length > 0) {
      return true; // User exists
    }
    return false; // User does not exist

  } catch (error) {
    console.error("Error while checking user existence:", error);
    throw new Error("Database error while checking user existence");    
  }
}

async function findUserByEmail(email) {
  try {
    const [user] = await pool.execute("select * from users where email = ?", [
      email,
    ]);

    if (user.length > 0) {
      return user[0]; //user found
    }
    return null;

  } catch (error) {
    console.error("Error while checking find user by email:", error);
    throw new Error("Database error while find user by email");
  }
}

async function findUserByUsername(username) {
  try {
    const [user] = await pool.execute(
      "select * from users where username = ?",
      [username]
    );

    if (user.length > 0) {
      return user[0];
    }
    return null;

  } catch (error) {
    console.error("Error while checking find user by username:", error);
    throw new Error("Database error while find user by username");
  }
}


async function createUser(email, username, password) {
  try {
    const hashedPassword = await encryptPassword(password); // Hash the password
    
    const [result] = await pool.execute(
      `INSERT INTO users (email, username, password) VALUES (?, ?, ?)`,
      [email, username, hashedPassword]
    );

    return result.insertId;

  } catch (error) {
    console.error("Error while creating user:", error);
    throw new Error("Database error while creating user");
  }
}

export { isUserExist, findUserByEmail, findUserByUsername, createUser };
