import Input from "@/components/Input";
import Label from "@/components/Label";

function Identification() {
  return (
    <>
      <h2 className="text-2xl font-bold text-center text-black mb-6">
        Identification
      </h2>
      <form>
        <div className="mb-4">
          <Label>Identity Type</Label>
          <select className="w-full p-2 border border-gray-300  focus:outline-none pl-4 bg-gray-100">
            <option value="">Select Identity Type</option>
            <option value="national-id">Aadhar Card</option>
            <option value="driver-license">Driver&apos;s License</option>
            <option value="pan-card">Pan Card</option>
            <option value="passport">Passport</option>
          </select>
        </div>
        <div className="mb-4">
          <Label>Identity Number</Label>
          <Input
            placeholder="Your identity number"
            bg="bg-gray-100"
            rounded={false}
          />
        </div>
        <div className="mb-6">
          <Label>Upload Document</Label>
          <Input type="file" bg="bg-gray-100" rounded={false} />
        </div>
      </form>
    </>
  );
}

export default Identification;
