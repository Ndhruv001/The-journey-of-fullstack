import Input from "@/components/Input";
import Label from "@/components/Label";

function PersonalDetails() {
  return (
    <>
      <h2 className="text-2xl font-bold text-center text-black mb-6">
        Personal Details
      </h2>
      <form>
        <div className="mb-4">
          <Label>Gender</Label>
          <select className="w-full p-2 border bg-gray-100 border-gray-300  focus:outline-none pl-4">
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="mb-4">
          <Label>State</Label>
          <Input
            placeholder="Enter your state"
            bg="bg-gray-100"
            rounded={false}
          />
        </div>
        <div className="mb-6">
          <Label>City</Label>
          <Input
            placeholder="Enter your city"
            bg="bg-gray-100"
            rounded={false}
          />
        </div>
      </form>
    </>
  );
}

export default PersonalDetails;
