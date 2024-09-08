import { useFormContext } from "react-hook-form";
import Input from "@/components/Input";
import Label from "@/components/Label";
import Error from "@/components/Error";

function PersonalDetails() {
  const {
    register,
    getValues,
    formState: { errors },
  } = useFormContext();
  const defaultValue = getValues();

  return (
    <>
      <div className="mb-4">
        <Label>Gender</Label>
        <select
          className="w-full p-2 border bg-gray-100 border-gray-300 focus:outline-none pl-4"
          defaultValue={defaultValue["gender"] || ""}
          {...register("gender", { required: "Gender is required" })}
        >
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        <Error message={errors["gender"]?.message} />
      </div>
      <div className="mb-4">
        <Label>State</Label>
        <Input
          placeholder="Enter your state"
          bg="bg-gray-100"
          rounded={false}
          defaultValue={defaultValue["state"] || ""}
          {...register("state", { required: "State is required" })}
        />
        <Error message={errors["state"]?.message} />
      </div>
      <div className="mb-6">
        <Label>City</Label>
        <Input
          placeholder="Enter your city"
          bg="bg-gray-100"
          rounded={false}
          defaultValue={defaultValue["city"] || ""}
          {...register("city", { required: "City is required" })}
        />
        <Error message={errors["city"]?.message} />
      </div>
    </>
  );
}

export default PersonalDetails;
