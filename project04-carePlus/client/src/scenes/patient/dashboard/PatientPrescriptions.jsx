import DataContainer from "@/components/DataContainer";
import Container from "@/components/Container";
import Searchbar from "@/components/Searchbar";
import Button from "@/components/Button";
import H4 from "@/components/H4";

function PatientPrescriptions() {
  return (
    <Container>
      <Searchbar />

      <DataContainer>
        <H4>Medication Name 1</H4>
        <p>Dosage: 1 tablet daily</p>
        <p>Status: Active</p>
        <Button>Order Refill</Button>
      </DataContainer>

      <DataContainer>
        <H4>Medication Name 2</H4>
        <p>Dosage: 2 tablets twice a day</p>
        <p>Status: Active</p>
        <Button>Order Refill</Button>
      </DataContainer>
    </Container>
  );
}
export default PatientPrescriptions;
