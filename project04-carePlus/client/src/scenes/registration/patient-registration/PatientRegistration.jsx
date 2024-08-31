import BasicInformations from "./pages/BasicInformations";
import ConsentAndSubmit from "./pages/ConsentAndSubmit";
import EmergencyContact from "./pages/EmergencyContact";
import PersonalDetails from "./pages/PersonalDetails";
import Identification from "./pages/Identification";
import Button from "@/components/Button";
import { useState } from "react";

function PatientRegistration() {
  const [step, setStep] = useState(1);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        {step === 1 && <BasicInformations />}

        {step === 2 && <PersonalDetails />}

        {step === 3 && <EmergencyContact />}

        {step === 4 && <Identification />}

        {step === 5 && <ConsentAndSubmit />}

        <div className="flex justify-between mt-6">
          <Button onClick={() => setStep(step - 1)} disabled={step === 1}>
            Previous
          </Button>
          {step === 5 ? (
            <Button>Submit</Button>
          ) : (
            <Button onClick={() => setStep(step + 1)} disabled={step === 5}>
              Next
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

export default PatientRegistration;
