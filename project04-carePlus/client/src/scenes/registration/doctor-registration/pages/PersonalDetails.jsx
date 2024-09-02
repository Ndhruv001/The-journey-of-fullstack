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

        <div className="mb-4">
          <Label>Phone Number</Label>
          <Input
            type="tel"
            placeholder="Enter your phone number"
            bg="bg-gray-100"
            rounded={false}
          />
        </div>
        
        <div className="mb-4">
          <Label>Date of Birth</Label>
          <Input type="date" bg="bg-gray-100" rounded={false} />
        </div>

        <div className="mb-4">
          <Label>Gender</Label>
          <select className="w-full p-2 border border-gray-300  focus:outline-none pl-4 bg-gray-100">
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
      </form>
    </>
  );
}

export default PersonalDetails;
