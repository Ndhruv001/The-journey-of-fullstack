import { useFormContext } from "react-hook-form";
import Input from "@/components/Input";
import Label from "@/components/Label";
import Error from "@/components/Error";

function EmergencyContact() {
  const {
    register,
    getValues,
    formState: { errors },
  } = useFormContext();
  const defaultValue = getValues();

  return (
    <>
      <div className="mb-4">
        <Label>Emergency Name</Label>
        <Input
          placeholder="Enter name"
          bg="bg-gray-100"
          rounded={false}
          defaultValue={defaultValue["emergency-name"] || ""}
          {...register("emergency-name", { required: "Name is required" })}
        />
        <Error message={errors["emergency-name"]?.message} />
      </div>
      <div className="mb-4">
        <Label>Emergency Phone Number</Label>
        <Input
          type="number"
          placeholder="Enter Phone No."
          bg="bg-gray-100"
          rounded={false}
          defaultValue={defaultValue["emergency-phone-number"] || ""}
          {...register("emergency-phone-number", {
            required: "Phone number is required",
            pattern: {
              value: /^[0-9]{10}$/,
              message: "Phone number must be 10 digits",
            },
          })}
        />
        <Error message={errors["emergency-phone-number"]?.message} />
      </div>
    </>
  );
}

export default EmergencyContact;
