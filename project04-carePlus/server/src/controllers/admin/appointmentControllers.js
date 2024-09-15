import { getAppointmentsListQuery } from "../../queries/admin/appointmentQueries.js";
import {
  formatDateForClient,
  formatTimeForClient,
} from "../../utils/formatDateAndTime.js";

async function getAppointmentsList(_, res) {
  try {
    const response = await getAppointmentsListQuery();

    const formatedResponse = response.map((item) => {
        return {
            ...item,
            appointment_date: formatDateForClient(item.appointment_date),
            appointment_time: formatTimeForClient(item.appointment_time)
        }
    })

    return res
      .status(200)
      .json({ success: true, data: formatedResponse, message: "Get appointments successfully!" });
  } catch (error) {
    console.log("🚀 ~ getAppointmentsList ~ error:", error);
    return res
      .status(500)
      .json({ success: false, message: "Internal server error", error: error });
  }
}

export { getAppointmentsList };
