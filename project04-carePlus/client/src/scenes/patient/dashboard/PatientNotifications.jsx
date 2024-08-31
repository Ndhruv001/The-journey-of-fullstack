import DataContainer from "@/components/DataContainer";
import Container from "@/components/Container";
import H4 from "@/components/H4";

function PatientNotifications() {
  return (
    <Container>
      <DataContainer>
        <H4>Health Tip 1</H4>
        <p>Stay hydrated by drinking plenty of water...</p>
      </DataContainer>

      <DataContainer>
        <H4>Reminder</H4>
        <p>Your appointment with Dr. John Doe is scheduled for 2024-09-05 at 10:00 AM.</p>
      </DataContainer>

      <DataContainer>
        <H4>Update</H4>
        <p>New feature added to manage prescriptions online.</p>
      </DataContainer>
    </Container>
  );
}

export default PatientNotifications;
