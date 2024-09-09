import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useForm, FormProvider } from "react-hook-form";
import BasicInformations from "./pages/BasicInformations";
import EmergencyContact from "./pages/EmergencyContact";
import PersonalDetails from "./pages/PersonalDetails";
import axiosInstance from "@/lib/config/axiosInstance";
import formatDateOfBirth from "@/lib/helpers/formatDateOfBirth";
import SetPassword from "./pages/SetPassword";
import Button from "@/components/Button";

function PatientRegistration() {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();
  const methods = useForm();
  const { isDirty, isValid } = methods.formState;

  const { mutate } = useMutation({
    mutationFn: (data) => axiosInstance.post("/patient/auth/register", data),
    onSuccess: () => {
      toast.success("Registration successfull! redirect to login...");

      setTimeout(() => {
        navigate("/login");
      }, 2000);
    },
    onError: (error) => {
      console.log("🚀 ~ PatientRegistration ~ error:", error);
      toast.error("Registration failed! Please try again.");
    },
  });

  function prevStep(e) {
    e.preventDefault();
    setStep((prev) => prev - 1);
  }

  function nextStep() {
    setStep((prev) => prev + 1);
  }

  function onSubmit(data) {
    if (step < 4) {
      nextStep();
    } else {
      const formatedDOB = formatDateOfBirth(data.dob);
      mutate({ ...data, dob: formatedDOB });
    }
  }

  return (
    <FormProvider {...methods}>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-lg w-96">
          <h2 className="text-2xl font-bold text-center text-black mb-6">
            Step {step} of 4
          </h2>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            {step === 1 && <BasicInformations />}
            {step === 2 && <PersonalDetails />}
            {step === 3 && <EmergencyContact />}
            {step === 4 && <SetPassword />}

            <div className="flex justify-between mt-4">
              {step > 1 && (
                <Button type="button" onClick={prevStep}>
                  Previous
                </Button>
              )}

              <Button
                type="submit"
                disabled={step === 4 && (!isDirty || !isValid)}
              >
                {step < 4 ? "Next" : "Submit"}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </FormProvider>
  );
}

export default PatientRegistration;
