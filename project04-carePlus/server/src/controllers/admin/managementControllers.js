import { getApprovalListQuery } from "../../queries/admin/managementQueries.js";

async function getApprovalList(_, res) {
  try {
    const response = await getApprovalListQuery();
    return res
      .status(200)
      .json({ success: true, data: response, message: "Get approval list successfully!" });

  } catch (error) {
    console.log("🚀 ~ getApprovalList ~ error:", error);
    return res 
      .status(500)
      .json({ success: false, message: "Internal server error", error: error });
  }
}

export { getApprovalList };
