import PersonalDetails from "./pages/PersonalDetails";
import ProfessionalDetails from "./pages/ProfessionalDetails";
import AdditionalInformation from "./pages/AdditionalInformation";
import ConsentAndPolicy from "./pages/ConsentAndPolicy";
import Button from "@/components/Button";
import { useState } from "react";

function DoctorRegistration() {
  const [step, setStep] = useState(1);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        {step === 1 && <PersonalDetails />}

        {step === 2 && <ProfessionalDetails />}

        {step === 3 && <AdditionalInformation />}

        {step === 4 && <ConsentAndPolicy />}

        <div className="flex justify-between mt-6">
          <Button onClick={() => setStep(step - 1)} disabled={step === 1}>
            Previous
          </Button>
          {step === 4 ? (
            <Button>Submit</Button>
          ) : (
            <Button onClick={() => setStep(step + 1)} >
              Next
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

export default DoctorRegistration;
