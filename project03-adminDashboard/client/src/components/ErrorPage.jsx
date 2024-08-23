
function ErrorPage() {
  return (
    <div className="bg-gray-900 text-white flex items-center justify-center h-screen">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-yellow-400">404</h1>
        <h2 className="text-2xl mt-4">Page Not Found</h2>
        <p className="text-lg mt-2">Sorry, the page you are looking for does not exist.</p>
        <a href="/" className="mt-4 inline-block bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
          Go To Dashboard
        </a>
      </div>
    </div>
  );
}

export default ErrorPage;
