import DataContainer from "@/components/DataContainer";
import Container from "@/components/Container";
import Button from "@/components/Button";
import H4 from "@/components/H4";

function DoctorActivePrescriptions() {
  return (
    <Container>
      <div className="flex justify-end mb-4">
        <Button color="green">Add New Prescription</Button>
      </div>

      <DataContainer>
        <H4>Patient: Jane Smith</H4>
        <p>Medication: Metformin</p>
        <p>Dosage: 500mg, twice daily</p>
        <p>Status: Active</p>
        <Button>Edit Prescription</Button>
        <Button color="red">Remove</Button>
      </DataContainer>
    </Container>
  );
}

export default DoctorActivePrescriptions;
