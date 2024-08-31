import DataContainer from "@/components/DataContainer";
import Container from "@/components/Container";
import Button from "@/components/Button";

function AdminSetting() {
  return (
    <Container>
      <DataContainer>
        <div className="flex justify-between items-center bg-gray-50 p-4 rounded-lg shadow-sm mb-2">
          <span className="font-semibold">Enable Notifications</span>
          <input
            type="checkbox"
            className="form-checkbox h-5 w-5 text-green-600"
          />
        </div>

        <div className="flex justify-between items-center bg-gray-50 p-4 rounded-lg shadow-sm mb-2">
          <span className="font-semibold">User Role Management</span>
          <Button color="green">Manage Roles</Button>
        </div>
      </DataContainer>
    </Container>
  );
}

export default AdminSetting;
