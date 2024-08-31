import Input from "@/components/Input";
import Label from "@/components/Label";

function EmergencyContact() {
  return (
    <>
      <h2 className="text-2xl font-bold text-center text-black mb-6">
        Emergency Contact
      </h2>
      <form>
        <div className="mb-4">
          <Label>Name</Label>
          <Input
            placeholder="Enter your name"
            bg="bg-gray-100"
            rounded={false}
          />
        </div>
        <div className="mb-4">
          <Label>Phone Number</Label>
          <Input
            type="number"
            placeholder="Enter your Phone No."
            bg="bg-gray-100"
            rounded={false}
          />
        </div>
      </form>
    </>
  );
}

export default EmergencyContact;
