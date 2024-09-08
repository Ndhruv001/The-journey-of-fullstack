import Input from "@/components/Input";
import Label from "@/components/Label";
import { useFormContext } from "react-hook-form";
import Error from "@/components/Error"; 

function PersonalDetails() {
  const {
    register,
    getValues,
    formState: { errors },
  } = useFormContext();

  const defaultValue = getValues()
 

  return (
    <>
      
        <div className="mb-4">
          <Label>Name</Label>
          <Input
            placeholder="Enter your name"
            bg="bg-gray-100"
            rounded={false}
            defaultValue={defaultValue["name"] || ""}
            {...register("name", { required: "Name is required" })}
          />
          <Error message={errors["name"]?.message} />
        </div>
        <div className="mb-4">
          <Label>Email</Label>
          <Input
            placeholder="Enter your email"
            bg="bg-gray-100"
            rounded={false}
            defaultValue={defaultValue["email"] || ""}
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^@]+@[^@]+\.[^@]+$/,
                message: "Invalid email address",
              },
            })}
          />
          <Error message={errors["email"]?.message} />
        </div>

        <div className="mb-4">
          <Label>Phone Number</Label>
          <Input
            type="tel"
            placeholder="Enter your phone number"
            bg="bg-gray-100"
            rounded={false}
            defaultValue={defaultValue["phone-number"] || ""}
            {...register("phone-number", {
              required: "Phone number is required",
              pattern: {
                value: /^[0-9]{10}$/,
                message: "Invalid phone number",
              },
            })}
          />
          <Error message={errors["phone-number"]?.message} />
        </div>

        <div className="mb-4">
          <Label>Date of Birth</Label>
          <Input
            type="date"
            bg="bg-gray-100"
            rounded={false}
            defaultValue={defaultValue["dob"] || ""}
            {...register("dob", { required: "Date of birth is required" })}
          />
          <Error message={errors["dob"]?.message} />
        </div>

        <div className="mb-4">
          <Label>Gender</Label>
          <select
            className="w-full p-2 border border-gray-300 focus:outline-none pl-4 bg-gray-100"
            defaultValue={defaultValue["gender"] || ""}
            {...register("gender", {
              required: "Gender is required",
            })}
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          <Error message={errors["gender"]?.message} />
        </div>

        
    
    </>
  );
}

export default PersonalDetails;
