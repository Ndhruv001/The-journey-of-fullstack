import Input from "@/components/Input";
import Label from "@/components/Label";

function AdditionalInformation() {
  return (
    <>
      <h2 className="text-2xl font-bold text-center text-black mb-6">
        Additional Information
      </h2>
      <form>
        <div className="mb-4">
          <Label>Profile Picture</Label>
          <Input type="file" rounded={false} bg="bg-gray-100" />
        </div>

        <div className="mb-4">
          <Label>Emergency Contact Name</Label>
          <Input
            placeholder="Emergency contact name"
            rounded={false}
            bg="bg-gray-100"
          />
        </div>
        <div className="mb-4">
          <Label>Emergency Contact Number</Label>
          <Input
            type="tel"
            placeholder="Emergency contact number"
            rounded={false}
            bg="bg-gray-100"
          />
        </div>
      </form>
    </>
  );
}

export default AdditionalInformation;
