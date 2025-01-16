import {
  getMessagesQuery,
  sendMessageQuery,
} from "../queries/messageQueries.js";

async function getMessages(req, res) {
  const { receiver_id } = req.params;
  const userId = req.user?.id;

  try {
    const response = await getMessagesQuery({ receiver_id, sender_id: userId });
    return res
      .status(200)
      .json({
        success: true,
        data: response,
        message: "List fetched successfully.",
      });
  } catch (error) {
    console.log("🚀 ~ getMessages ~ error:", error);
    return res
      .status(501)
      .json({ success: false, message: "Interval server error." });
  }
}

async function sendMessage(req, res) {
  const { receiver_id, message } = req.body;
  const sender_id = req.user?.id;

  if (!receiver_id || !message) {
    return res
      .status(400)
      .json({
        success: false,
        message: "Receiver ID and message are required.",
      });
  }

  try {
    const response = await sendMessageQuery({
      sender_id,
      receiver_id,
      message,
    });
    return res
      .status(201)
      .json({
        success: true,
        data: response,
        message: "Message sent successfully.",
      });
  } catch (error) {
    console.log("🚀 ~ sendMessage ~ error:", error);
    return res
      .status(500)
      .json({ success: false, message: "Internal server error." });
  }
}

export { sendMessage, getMessages };
