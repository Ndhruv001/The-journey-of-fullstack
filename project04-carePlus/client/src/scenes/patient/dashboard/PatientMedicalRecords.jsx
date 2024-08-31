import DataContainer from "@/components/DataContainer";
import Container from "@/components/Container";
import Searchbar from "@/components/Searchbar";
import H4 from "@/components/H4";

function PatientMedicalRecords() {
  return (
    <Container>
      <Searchbar />
      <DataContainer>
        <H4>Record Title 1</H4>
        <p>Date: 2024-08-15</p>
        <p>Details: Detailed description of the record...</p>
      </DataContainer>

      <DataContainer>
        <H4>Record Title 2</H4>
        <p>Date: 2024-07-20</p>
        <p>Details: Detailed description of the record...</p>
      </DataContainer>
    </Container>
  );
}
export default PatientMedicalRecords;
