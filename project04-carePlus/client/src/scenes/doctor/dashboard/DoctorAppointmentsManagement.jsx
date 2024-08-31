import Container from "@/components/Container";
import Button from "@/components/Button";

function DoctorAppointmentsManagement() {
  return (
    <Container>
      <div className="flex justify-end mb-4">
        <Button color="green">Add New Appointment</Button>
      </div>
      
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-green-100 text-gray-700">
            <th className="border p-2">Date</th>
            <th className="border p-2">Time</th>
            <th className="border p-2">Patient</th>
            <th className="border p-2">Purpose</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border p-2">2024-09-10</td>
            <td className="border p-2">11:00 AM</td>
            <td className="border p-2">Jane Smith</td>
            <td className="border p-2">Follow-up</td>
            <td className="border p-2">
              <Button color="green">Reschedule</Button>
              <Button color="red">Cancel</Button>
            </td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}

export default DoctorAppointmentsManagement;
