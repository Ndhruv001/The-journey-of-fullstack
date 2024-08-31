import Container from "@/components/Container";
import Searchbar from "@/components/Searchbar";

function AdminAppointmentsOverview() {
  return (
    <Container>
      <Searchbar />
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-green-100 text-gray-700">
            <th className="border p-2">Appointment ID</th>
            <th className="border p-2">Patient Name</th>
            <th className="border p-2">Doctor Name</th>
            <th className="border p-2">Date</th>
            <th className="border p-2">Time</th>
            <th className="border p-2">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border p-2">A001</td>
            <td className="border p-2">John Doe</td>
            <td className="border p-2">Dr. Sarah Lee</td>
            <td className="border p-2">2024-09-10</td>
            <td className="border p-2">11:00 AM</td>
            <td className="border p-2">Scheduled</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}

export default AdminAppointmentsOverview;
