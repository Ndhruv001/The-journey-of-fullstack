import { getContactsListQuery } from "../queries/userQueries.js";

async function getContactsList(req, res) {
  const userId = req.user?.id;

  try {
    const response = await getContactsListQuery(userId);
    return res
      .status(200)
      .json({
        success: true,
        data: response,
        message: "List fetched successfully.",
      });
  } catch (error) {
    console.log("🚀 ~ getContactsList ~ error:", error);
    return res
      .status(501)
      .json({ success: false, message: "Interval server error." });
  }
}

export { getContactsList };
