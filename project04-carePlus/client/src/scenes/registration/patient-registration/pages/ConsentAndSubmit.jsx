function ConsentAndSubmit() {
  return (
    <>
      <h2 className="text-2xl font-bold text-center text-black mb-6">
        Consent & Submit
      </h2>
      <form>
        <div className="mb-4">
          <label className="inline-flex items-center">
            <input type="checkbox" className="form-checkbox text-blue-600" />
            <span className="ml-2 text-gray-700">
              I agree to the terms and conditions
            </span>
          </label>
        </div>
      </form>
    </>
  );
}

export default ConsentAndSubmit;
