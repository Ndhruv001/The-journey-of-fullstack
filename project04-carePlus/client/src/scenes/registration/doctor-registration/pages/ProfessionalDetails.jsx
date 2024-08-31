import Input from "@/components/Input";
import Label from "@/components/Label";

function ProfessionalDetails() {
  return (
    <>
      <h2 className="text-2xl font-bold text-center text-black mb-6">
        Professional Details
      </h2>
      <form>
        <div className="mb-4">
          <Label>Specialization</Label>
          <Input
            placeholder="Enter specialization"
            rounded={false}
            bg="bg-gray-100"
          />
        </div>
        <div className="mb-4">
          <Label>Medical License Number</Label>
          <Input
            placeholder="Enter license number"
            rounded={false}
            bg="bg-gray-100"
          />
        </div>

        <div className="mb-4">
          <Label>Years of Experience</Label>
          <Input
            type="number"
            placeholder="Years of experience"
            rounded={false}
            bg="bg-gray-100"
          />
        </div>
        <div className="mb-4">
          <Label>Certifications</Label>
          <Input type="file" rounded={false} bg="bg-gray-100" />
        </div>

        <div className="mb-4">
          <Label>Education Details</Label>
          <Input
            placeholder="Enter education details"
            rounded={false}
            bg="bg-gray-100"
          />
        </div>
      </form>
    </>
  );
}

export default ProfessionalDetails;
