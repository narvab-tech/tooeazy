import { Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Layout from './components/Layout';
import Home from './pages/Home';
import Decide from './pages/Decide';
import Arrive from './pages/Arrive';
import Settle from './pages/Settle';
import Packages from './pages/Packages';
import HowItWorks from './pages/HowItWorks';
import Legal from './pages/Legal';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import './App.css';

function App() {
  return (
    <HelmetProvider>
      <Routes>
        <Route path="/" element={<Layout title="Your Life Architect for Australia" description="TooEazy helps skilled migrants moving to Australia navigate every step — from pre-visa decisions to long-term settlement. Book a free consult today."><Home /></Layout>} />
        <Route path="/decide" element={<Layout title="Decide — Pre-Move Clarity for Australia" description="Make the right move decision before you spend big. Lifestyle fit, visa pathway (via MARA partner), suburb shortlisting, and school feasibility — all before you commit."><Decide /></Layout>} />
        <Route path="/arrive" element={<Layout title="Arrive — Day-One Readiness in Australia" description="Land in Australia ready — not scrambling. Bank account, mobile number, TFN, transport, and health insurance sorted before you step off the plane."><Arrive /></Layout>} />
        <Route path="/settle" element={<Layout title="Settle — Long-Term Settlement in Australia" description="Build long-term stability in Australia within 60–90 days. Suburb strategy, school research, healthcare, career support — done right the first time."><Settle /></Layout>} />
        <Route path="/packages" element={<Layout title="Packages & Pricing" description="TooEazy settlement packages: Decide ($600–900 AUD), Arrive ($1,200–1,800 AUD), Settle ($2,000–2,800 AUD). D.A.S. Bundle saves up to $1,300."><Packages /></Layout>} />
        <Route path="/how-it-works" element={<Layout title="How It Works — The D.A.S.H. Framework" description="The D.A.S.H. framework for skilled migrants moving to Australia. Four phases that turn your visa into a life you love — step by step."><HowItWorks /></Layout>} />
        <Route path="/legal" element={<Layout title="Legal & Compliance" description="TooEazy legal documentation: MARA migration disclaimer, financial advice disclaimer, settlement support terms, and privacy policy."><Legal /></Layout>} />
        <Route path="/contact" element={<Layout title="Contact & Free Consultation" description="Contact TooEazy — your Australian settlement team. Book a free 15-minute consultation. We respond within 1 business day."><Contact /></Layout>} />
        <Route path="*" element={<Layout title="Page Not Found" description="The page you're looking for doesn't exist. Explore TooEazy's settlement services for Australia."><NotFound /></Layout>} />
      </Routes>
    </HelmetProvider>
  );
}

export default App;
