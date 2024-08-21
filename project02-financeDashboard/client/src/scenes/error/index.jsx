function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
      <div className="text-center">
        <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
        <p className="mt-4 text-lg">
          Oops! The page {"you're"} looking for {"doesn't"} exist.
        </p>
      </div>
    </div>
  );
}

export default NotFound;
