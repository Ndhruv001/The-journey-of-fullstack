import { useFormContext } from "react-hook-form";
import Input from "@/components/Input";
import Label from "@/components/Label";
import Error from "@/components/Error";

function BasicInformations() {
  const {
    register,
    getValues,
    formState: { errors },
  } = useFormContext();

  const defaultValue = getValues();

  return (
    <>
      <div className="mb-4">
        <Label>Name</Label>
        <Input
          placeholder="Enter your name"
          bg="bg-gray-100"
          rounded={false}
          defaultValue={defaultValue["name"] || ""}
          {...register("name", {
            required: "Name is required",
          })}
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
      <div className="mb-6">
        <Label>DOB</Label>
        <Input
          type="date"
          placeholder="Enter your DOB"
          bg="bg-gray-100"
          rounded={false}
          defaultValue={defaultValue["dob"] || ""}
          {...register("dob", { required: "Date of birth is required" })}
        />
        <Error message={errors["dob"]?.message} />
      </div>
      <div className="mb-6">
        <Label>Phone number</Label>
        <Input
          type="number"
          placeholder="Enter your Phone No."
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
    </>
  );
}

export default BasicInformations;
