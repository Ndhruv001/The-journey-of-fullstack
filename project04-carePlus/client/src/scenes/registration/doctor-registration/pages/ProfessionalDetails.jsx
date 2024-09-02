import Input from "@/components/Input";
import Label from "@/components/Label";

function ProfessionalDetails() {
  return (
    <>
      <h2 className="text-2xl font-bold text-center text-black mb-6">
        Professional Details
      </h2>
      <form>
        <div className="mb-4">
          <Label>Specialization</Label>
          <select className="w-full p-2 border border-gray-300  focus:outline-none pl-4 bg-gray-100">
            <option value="">--Select Specialization--</option>
            <option value="cardiology">Cardiology</option>
            <option value="dermatology">Dermatology</option>
            <option value="endocrinology">Endocrinology</option>
            <option value="gastroenterology">Gastroenterology</option>
            <option value="general_surgery">General Surgery</option>
            <option value="neurology">Neurology</option>
            <option value="obstetrics_gynecology">
              Obstetrics & Gynecology
            </option>
            <option value="oncology">Oncology</option>
            <option value="orthopedics">Orthopedics</option>
            <option value="pediatrics">Pediatrics</option>
            <option value="psychiatry">Psychiatry</option>
            <option value="radiology">Radiology</option>
            <option value="urology">Urology</option>
          </select>
        </div>
        <div className="mb-4">
          <Label>Medical License Number</Label>
          <Input
            placeholder="Enter license number"
            rounded={false}
            bg="bg-gray-100"
          />
        </div>

        <div className="mb-4">
          <Label>Years of Experience</Label>
          <select className="w-full p-2 border border-gray-300 focus:outline-none pl-4 bg-gray-100">
            <option value="">--Years of Experience--</option>
            <option value="less_than_1_year">Less than 1 Year</option>
            <option value="1-2_years">1-2 Years</option>
            <option value="3-5_years">3-5 Years</option>
            <option value="6-10_years">6-10 Years</option>
            <option value="11-15_years">11-15 Years</option>
            <option value="16-20_years">16-20 Years</option>
            <option value="more_than_20_years">More than 20 Years</option>
          </select>
        </div>
        <div className="mb-4">
          <Label>Certifications</Label>
          <Input type="file" rounded={false} bg="bg-gray-100" />
        </div>

        <div className="mb-4">
          <Label>Education Details</Label>
          <select className="w-full p-2 border border-gray-300 focus:outline-none pl-4 bg-gray-100">
            <option value="">--Select Education Level--</option>
            <option value="diploma">Diploma</option>
            <option value="undergraduate">
              Undergraduate (Bachelor&apos;s Degree)
            </option>
            <option value="postgraduate">
              Postgraduate (Master&apos;s Degree)
            </option>
            <option value="phd">Doctorate (Ph.D.)</option>
            <option value="postdoctoral">Postdoctoral Studies</option>
            <option value="professional_certificate">
              Professional Certification
            </option>
          </select>
        </div>
      </form>
    </>
  );
}

export default ProfessionalDetails;
