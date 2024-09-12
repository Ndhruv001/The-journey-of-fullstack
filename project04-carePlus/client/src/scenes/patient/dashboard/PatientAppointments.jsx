import {NavLink} from 'react-router-dom';
import Container from "@/components/Container";
import Button from "@/components/Button";

function PatientAppointments() {
  return (
    <Container>
      <div className="flex justify-end mb-4">
        <NavLink to="/patient" className="text-white px-4 py-1 rounded mr-1 bg-green-500 hover:bg-green-600">Add New Appointment</NavLink>
      </div>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-blue-100 text-gray-700">
            <th className="border p-2">Date</th>
            <th className="border p-2">Time</th>
            <th className="border p-2">Doctor</th>
            <th className="border p-2">Status</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border p-2">2024-09-05</td>
            <td className="border p-2">10:00 AM</td>
            <td className="border p-2">Dr. John Doe</td>
            <td className="border p-2">Scheduled</td>
            <td className="border p-2">
              <Button>Reschedule</Button>
              <Button color="red">Cancel</Button>
            </td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}

export default PatientAppointments;
