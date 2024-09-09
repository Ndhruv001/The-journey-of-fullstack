import DataContainer from "@/components/DataContainer";
import Container from "@/components/Container";
import H4 from "@/components/H4";

function DoctorNotifications() {
  return (
    <Container>
      <DataContainer>
        <H4>Alert: New Patient Added</H4>
        <p>John Doe has been assigned to your care.</p>
      </DataContainer>

      <DataContainer>
        <H4>Update: Appointment Reminder</H4>
        <p>
          Jane Smith&apos;s follow-up appointment is scheduled for 2024-09-10 at
          11:00 AM.
        </p>
      </DataContainer>
    </Container>
  );
}

export default DoctorNotifications;
