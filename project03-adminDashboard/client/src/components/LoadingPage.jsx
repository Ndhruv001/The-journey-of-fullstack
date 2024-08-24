
function LoadingPage() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-800">
      <div className="flex flex-col items-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-opacity-75 mb-4"></div>
        <p className="text-white text-lg">Loading, please wait...</p>
      </div>
    </div>
  );
}

export default LoadingPage;
