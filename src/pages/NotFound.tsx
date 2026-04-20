import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#F4F2EE] flex items-center justify-center px-6">
      <div className="max-w-xl text-center">
        <div className="mb-8">
          <span className="inline-block text-[120px] md:text-[180px] font-heading font-bold text-[#50BE00]/20 leading-none">404</span>
        </div>
        <h1 className="font-heading font-bold text-3xl md:text-4xl text-[#333333] mb-4">
          Page not found
        </h1>
        <p className="text-lg text-[#6D6A63] mb-8 max-w-md mx-auto">
          Looks like you've wandered off the path. Don't worry — finding your way in a new country is what we do best.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/" className="btn-primary">
            <Home className="mr-2 w-5 h-5" />
            Back to Home
          </Link>
          <button onClick={() => window.history.back()} className="btn-secondary">
            <ArrowLeft className="mr-2 w-5 h-5" />
            Go Back
          </button>
        </div>
        <div className="mt-12 pt-8 border-t border-[#333333]/10">
          <p className="text-sm text-[#6D6A63] mb-4">Looking for something specific?</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Link to="/decide" className="text-[#50BE00] hover:underline">Decide Phase</Link>
            <Link to="/arrive" className="text-[#50BE00] hover:underline">Arrive Phase</Link>
            <Link to="/settle" className="text-[#50BE00] hover:underline">Settle Phase</Link>
            <Link to="/packages" className="text-[#50BE00] hover:underline">Packages</Link>
            <Link to="/contact" className="text-[#50BE00] hover:underline">Contact Us</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
