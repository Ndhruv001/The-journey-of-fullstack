import Input from "@/components/Input";
import Label from "@/components/Label";

function BasicInformations() {
  return (
    <>
      <h2 className="text-2xl font-bold text-center text-black mb-6">
        Basic Information
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
          <Label>Email</Label>
          <Input
            placeholder="Enter your email"
            bg="bg-gray-100"
            rounded={false}
          />
        </div>
        <div className="mb-6">
          <Label>DOB</Label>
          <Input
            type="date"
            placeholder="Enter your DOB"
            bg="bg-gray-100"
            rounded={false}
          />
        </div>
        <div className="mb-6">
          <Label>Phone number</Label>
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

export default BasicInformations;
