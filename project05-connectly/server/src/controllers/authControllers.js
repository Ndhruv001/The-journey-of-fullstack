import { verifyPassword } from "../utils/password.js";
import { findUserByEmail, updateUserStatus } from "../queries/userQueries.js";
import sendTokensAndResponse from "../utils/sendTokensAndResponse.js";
import { registerUserQuery, isEmailExist } from "../queries/userQueries.js";

async function register(req, res) {
  const { name, email, password, role } = req.body;

  const isExist = await isEmailExist(email);
  if (isExist) {
    return res
      .status(409)
      .json({ success: false, message: "Email is already exist" });
  }

  try {
    const result = await registerUserQuery({
      name,
      email,
      password,
      role,
    });

    res.status(201).json({
      message: "User registered successfully",
      UserId: result.insertId,
    });
  } catch (error) {
    console.log("🚀 ~ registerUser ~ error:", error);
    res
      .status(500)
      .json({ error: "Error registering user", details: error.message });
  }
}

async function login(req, res) {
  const { email, password } = req.body;

  try {
    // CHECK USER
    const user = await findUserByEmail(email);
    if (user && (await verifyPassword(password, user.password))) {
      // SET USER ONLINE STATUS
      await updateUserStatus(user.id, true);

      // SEND RESPONSE WITH TOKENS
      return sendTokensAndResponse(res, user);
    }

    // NO USER FOUND
    return res
      .status(404)
      .json({ success: false, message: "Invalid email or password" });
  } catch (error) {
    console.error("🚀 ~ login ~ error:", error);
    return res
      .status(500)
      .json({ success: false, message: "Internal server error" });
  }
}

async function logout(req, res) {
  try {
    const userId = req.user?.id; // Assuming the user ID is attached to the request (e.g., via middleware)

    if (!userId) {
      return res.status(401).json({
        success: false,
        message: "User not authenticated",
      });
    }

    // SET USER OFFLINE STATUS
    await updateUserStatus(userId, false);

    // OPTIONALLY: CLEAR TOKENS OR SESSION (if using cookies or session storage)
    res.clearCookie("token"); // Example: Clear token cookie if applicable

    return res.status(200).json({
      success: true,
      message: "Logged out successfully",
    });
  } catch (error) {
    console.error("🚀 ~ logout ~ error:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
}

async function getMe(req, res) {
  const user = req.user;
  return res
    .status(200)
    .json({ success: true, data: user, message: "Fetched successfully." });
}

export { register, login, logout, getMe };
