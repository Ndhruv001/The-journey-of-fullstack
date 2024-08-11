import { useNavigate } from 'react-router-dom';
import Button from '../components/ButtonComponent';
function ErrorPage() {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
      <h1 className="text-9xl font-bold mb-4">404</h1>
      <h2 className="text-3xl mb-8">Page Not Found</h2>
      <p className="mb-6 text-center max-w-lg">
        The page you&apos;re looking for doesn&apos;t exist or has been moved. Please check the URL and try again.
      </p>
      <Button
        onClick={handleGoHome}
      >
        Go Home
      </Button>
    </div>
  );
}

export default ErrorPage;
