import Searchbar from "@/components/Searchbar";
import Container from "@/components/Container";
import Button from "@/components/Button";

function DoctorPatientsList() {
  return (
    <Container>
      <Searchbar />
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-green-100 text-gray-700">
            <th className="border p-2">Patient ID</th>
            <th className="border p-2">Name</th>
            <th className="border p-2">Age</th>
            <th className="border p-2">Condition</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border p-2">P001</td>
            <td className="border p-2">John Doe</td>
            <td className="border p-2">45</td>
            <td className="border p-2">Diabetes</td>
            <td className="border p-2">
              <Button color="green">View</Button>
            </td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
export default DoctorPatientsList;
