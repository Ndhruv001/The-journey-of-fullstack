import { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import PersonalDetails from "./pages/PersonalDetails";
import ProfessionalDetails from "./pages/ProfessionalDetails";
import AdditionalInformation from "./pages/AdditionalInformation";
import SetPassword from "./pages/SetPassword";
import Button from "@/components/Button";

function DoctorRegistration() {
  const [step, setStep] = useState(1);
  const methods = useForm();
  const { isDirty, isValid } = methods.formState;

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
      console.log("Final submission with data:", data);
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
            {step === 1 && <PersonalDetails />}
            {step === 2 && <ProfessionalDetails />}
            {step === 3 && <AdditionalInformation />}
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

export default DoctorRegistration;
