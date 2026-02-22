import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
}

export default function Layout({ children, title, description }: LayoutProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/decide', label: 'Decide' },
    { path: '/land', label: 'Land' },
    { path: '/settle', label: 'Settle' },
    { path: '/packages', label: 'Packages' },
    { path: '/how-it-works', label: 'How It Works' },
    { path: '/legal', label: 'Legal' },
    { path: '/contact', label: 'Contact' },
  ];

  const pageTitle = title ? `${title} | TooEazy` : 'TooEazy - Move to Australia Smarter';
  const pageDescription = description || 'TooEazy helps skilled migrants decide with confidence, land without friction, and settle without regret in Australia.';

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href={`https://tooeazy.au${location.pathname}`} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://tooeazy.au${location.pathname}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
      </Helmet>

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#F4F2EE]/95 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
        <div className="px-6 lg:px-12 py-5 flex items-center justify-between">
          <Link to="/" className="font-heading font-bold text-xl text-[#111111]">TooEazy</Link>
          
          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                to={link.path} 
                className={`text-sm font-medium transition-colors ${location.pathname === link.path ? 'text-[#2F6BFF]' : 'text-[#111111] hover:text-[#2F6BFF]'}`}
              >
                {link.label}
              </Link>
            ))}
            <Link to="/contact" className="btn-primary text-sm py-2.5 px-5">
              Book a Call
              <ArrowRight className="ml-1.5 w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <button 
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#F4F2EE] flex flex-col items-center justify-center gap-6 lg:hidden">
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              to={link.path} 
              className={`text-2xl font-heading font-semibold ${location.pathname === link.path ? 'text-[#2F6BFF]' : 'text-[#111111]'}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link to="/contact" className="btn-primary mt-4" onClick={() => setMobileMenuOpen(false)}>
            Book a free call
          </Link>
        </div>
      )}

      {/* Main content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-[#111111] text-white py-16 px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <h3 className="font-heading font-bold text-2xl mb-4">TooEazy</h3>
              <p className="text-white/60 max-w-sm">
                Helping skilled migrants decide with confidence, land without friction, and settle without regret in Australia.
              </p>
            </div>
            <div>
              <h4 className="font-heading font-semibold mb-4">Services</h4>
              <ul className="space-y-2">
                <li><Link to="/decide" className="text-white/60 hover:text-white transition-colors">Decide</Link></li>
                <li><Link to="/land" className="text-white/60 hover:text-white transition-colors">Land</Link></li>
                <li><Link to="/settle" className="text-white/60 hover:text-white transition-colors">Settle</Link></li>
                <li><Link to="/packages" className="text-white/60 hover:text-white transition-colors">Packages</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-heading font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li><Link to="/how-it-works" className="text-white/60 hover:text-white transition-colors">How It Works</Link></li>
                <li><Link to="/legal" className="text-white/60 hover:text-white transition-colors">Legal & Compliance</Link></li>
                <li><Link to="/contact" className="text-white/60 hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-white/40">
              © {new Date().getFullYear()} TooEazy. Independent settlement support.
            </p>
            <div className="flex items-center gap-6 text-sm text-white/40">
              <Link to="/legal" className="hover:text-white transition-colors">Migration Disclaimer</Link>
              <Link to="/legal" className="hover:text-white transition-colors">Privacy Policy</Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
