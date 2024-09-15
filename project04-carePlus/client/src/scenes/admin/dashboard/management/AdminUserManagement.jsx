import Container from "@/components/Container";
import Button from "@/components/Button";

function AdminUserManagement() {
  return (
    <Container>
      <div className="flex justify-end mb-4">
        <Button color="green">Add New User</Button>
      </div>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-green-100 text-gray-700">
            <th className="border p-2">User ID</th>
            <th className="border p-2">Name</th>
            <th className="border p-2">Role</th>
            <th className="border p-2">Status</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border p-2">U001</td>
            <td className="border p-2">Dr. Sarah Lee</td>
            <td className="border p-2">Doctor</td>
            <td className="border p-2">Active</td>
            <td className="border p-2">
              <Button>Edit</Button>
              <Button color="red">Delete</Button>
              <Button color="yellow">Approve</Button>
            </td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}

export default AdminUserManagement;
