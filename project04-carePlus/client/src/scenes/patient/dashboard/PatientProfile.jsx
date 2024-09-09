import ProfileImage from "@/assets/profile-image.jpeg";
import ProfileLayout from "@/components/ProfileLayout";
import Input from "@/components/Input";
import Label from "@/components/Label";
import Button from "@/components/Button";

function PatientProfile() {
  return (
    <ProfileLayout profileImage={ProfileImage}>
      <form className="space-y-6 flex flex-col">
        <div className="flex gap-3 w-full">
          <div className="w-3/6 ">
            <Label>First Name</Label>
            <Input />
          </div>

          <div className="w-3/6">
            <Label>Last Name</Label>
            <Input />
          </div>
        </div>

        <div className="flex gap-3 w-full">
          <div className="w-3/6 ">
            <Label>DOB</Label>
            <Input />
          </div>

          <div className="w-3/6">
            <Label>Gender</Label>
            <Input />
          </div>
        </div>

        <div>
          <Label>Phone Number</Label>
          <Input />
        </div>

        <div>
          <Label>Email</Label>
          <Input />
        </div>

        <div>
          <Label>Address</Label>
          <Input />
        </div>

        <div className="flex gap-3 w-full">
          <div className="w-3/6 ">
            <Label>City</Label>
            <Input />
          </div>

          <div className="w-3/6">
            <Label>State</Label>
            <Input />
          </div>
        </div>

        <div className="flex justify-end w-full gap-3">
          <Button>Edit</Button>
        </div>
      </form>
    </ProfileLayout>
  );
}

export default PatientProfile;
