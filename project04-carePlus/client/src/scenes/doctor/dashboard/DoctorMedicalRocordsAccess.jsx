import DataContainer from "@/components/DataContainer";
import Container from "@/components/Container";
import Searchbar from "@/components/Searchbar";
import Button from "@/components/Button";
import H4 from "@/components/H4";

function DoctorMedicalRecordsAccess() {
  return (
    <Container>
      <Searchbar />
      
      <DataContainer>
        <H4>Patient: John Doe</H4>
        <p>Condition: Diabetes</p>
        <p>Last Check-up: 2024-08-20</p>
        <p>Notes: Maintain diet control, regular exercise.</p>
        <Button>Edit Record</Button>
      </DataContainer>
    </Container>
  );
}

export default DoctorMedicalRecordsAccess;
