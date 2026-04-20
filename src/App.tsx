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
        <Route path="/" element={<Layout title="Home" description="TooEazy helps skilled migrants Decide with confidence, Arrive without friction, and Settle without regret in Australia."><Home /></Layout>} />
        <Route path="/decide" element={<Layout title="Decide" description="Pre-visa clarity: lifestyle fit, visa pathway (MARA), region shortlisting, and family feasibility."><Decide /></Layout>} />
        <Route path="/arrive" element={<Layout title="Arrive" description="Day-one readiness: banking, mobile, TFN, transport, and insurance guidance before you land."><Arrive /></Layout>} />
        <Route path="/settle" element={<Layout title="Settle" description="Long-term stability: suburb strategy, accommodation, schooling, jobs, and Medicare guidance."><Settle /></Layout>} />
        <Route path="/packages" element={<Layout title="Packages" description="Choose your support: Decide ($600-900), Arrive ($1,200-1,800), or Settle ($2,000-2,800). Bundles available."><Packages /></Layout>} />
        <Route path="/how-it-works" element={<Layout title="How It Works" description="The D.A.S.H. framework: Decide, Arrive, Settle, Home. Your journey step by step."><HowItWorks /></Layout>} />
        <Route path="/legal" element={<Layout title="Legal & Compliance" description="Transparency and trust: MARA disclaimers, financial information, settlement terms, and privacy policy."><Legal /></Layout>} />
        <Route path="/contact" element={<Layout title="Contact" description="Ready when you are. Book a free 15-minute call. We reply within 1 business day."><Contact /></Layout>} />
        <Route path="*" element={<Layout title="Page Not Found" description="The page you're looking for doesn't exist."><NotFound /></Layout>} />
      </Routes>
    </HelmetProvider>
  );
}

export default App;
