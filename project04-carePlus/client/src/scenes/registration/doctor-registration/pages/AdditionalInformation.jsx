import validateFileInput from "@/lib/helpers/validateFileInput";
import Error from "@/components/Error";
import Input from "@/components/Input";
import Label from "@/components/Label";
import { useFormContext } from "react-hook-form";

function AdditionalInformation() {
  const {
    register,
    getValues,
    formState: { errors },
  } = useFormContext();

  const defaultValue = getValues();

  return (
    <>
      <div className="mb-4">
        <Label>Profile Picture</Label>
        <Input
          type="file"
          rounded={false}
          bg="bg-gray-100"
          {...register("profile-picture", {
            required: "Profile picture is required",
            validate: (files) => validateFileInput(files),
          })}
        />
        <Error message={errors["profile-picture"]?.message} />
      </div>

      <div className="mb-4">
        <Label>Identity Type</Label>
        <select
          className="w-full p-2 border border-gray-300 focus:outline-none pl-4 bg-gray-100"
          defaultValue={defaultValue["identity-type"] || ""}
          {...register("identity-type", {
            required: "Identity type is required",
          })}
        >
          <option value="">Select Identity Type</option>
          <option value="national-id">Aadhar Card</option>
          <option value="driver-license">Driver&apos;s License</option>
          <option value="pan-card">Pan Card</option>
          <option value="passport">Passport</option>
        </select>
        <Error message={errors["identity-type"]?.message} />
      </div>

      <div className="mb-6">
        <Label>Upload Document</Label>
        <Input
          type="file"
          bg="bg-gray-100"
          rounded={false}
          {...register("document", {
            required: "Document is required",
            validate: (files) => validateFileInput(files),
          })}
        />
        <Error message={errors["document"]?.message} />
      </div>
    </>
  );
}

export default AdditionalInformation;
