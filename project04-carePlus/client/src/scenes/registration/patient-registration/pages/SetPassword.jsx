import { useFormContext } from "react-hook-form";
import Input from "@/components/Input";
import Label from "@/components/Label";
import Error from "@/components/Error";

function SetPassword() {
  const {
    register,
    getValues,
    formState: { errors },
  } = useFormContext();
  const defaultValue = getValues();

  return (
    <>
      <div className="mb-4">
        <Label>Password</Label>
        <Input
          type="password"
          placeholder="Enter password"
          bg="bg-gray-100"
          rounded={false}
          autoComplete="password"
          defaultValue={defaultValue["password"] || ""}
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters",
            },
          })}
        />
        <Error message={errors["password"]?.message} />
      </div>
      <div className="mb-4">
        <Label>Confirm Password</Label>
        <Input
          type="password"
          placeholder="Confirm password"
          bg="bg-gray-100"
          rounded={false}
          autoComplete="confirm-password"
          defaultValue={defaultValue["confirm_password"] || ""}
          {...register("confirm_password", {
            required: "Confirm Password is required",
            validate: (value) =>
              value === defaultValue["password"] || "Passwords do not match",
          })}
        />
        <Error message={errors["confirm-password"]?.message} />
      </div>
      <div className="mb-4">
        <Label>
          <input
            type="checkbox"
            {...register("consent", {
              required: "Must be checked before submitting the form",
            })}
          />
          <span className="ml-2 text-gray-700">
            I agree to the terms and conditions
          </span>
        </Label>
      </div>
    </>
  );
}

export default SetPassword;
