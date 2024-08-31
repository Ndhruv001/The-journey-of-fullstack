import DataContainer from "@/components/DataContainer";
import Container from "@/components/Container";
import H4 from "@/components/H4";

function AdminNotifications() {
  return (
    <Container>
      <DataContainer>
        <H4>System Update</H4>
        <p>A new version of the application will be deployed on 2024-09-15.</p>
      </DataContainer>

      <DataContainer>
        <H4>Security Alert</H4>
        <p>
          Ensure all user data is backed up before system maintenance on
          2024-09-12.
        </p>
      </DataContainer>
    </Container>
  );
}

export default AdminNotifications;
