
function ErrorResponse({ error }) {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-800">
      <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded shadow-md w-96">
        <h2 className="font-bold text-xl mb-2">Error</h2>
        <p className="text-sm">{error?.message || "An unexpected error occurred. Please try again later."}</p>
      </div>
    </div>
  );
}

export default ErrorResponse;
