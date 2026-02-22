import { Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Layout from './components/Layout';
import Home from './pages/Home';
import Decide from './pages/Decide';
import Land from './pages/Land';
import Settle from './pages/Settle';
import Packages from './pages/Packages';
import HowItWorks from './pages/HowItWorks';
import Legal from './pages/Legal';
import Contact from './pages/Contact';
import './App.css';

function App() {
  return (
    <HelmetProvider>
      <Routes>
        <Route path="/" element={<Layout title="Home" description="TooEazy helps skilled migrants decide with confidence, land without friction, and settle without regret in Australia."><Home /></Layout>} />
        <Route path="/decide" element={<Layout title="Decide" description="Pre-visa clarity services: lifestyle fit, visa pathway clarity (MARA), and family feasibility analysis."><Decide /></Layout>} />
        <Route path="/land" element={<Layout title="Land" description="Arrival readiness: banking, mobile, TFN, transport, and insurance guidance for day-one functionality."><Land /></Layout>} />
        <Route path="/settle" element={<Layout title="Settle" description="Long-term stability: suburb strategy, accommodation, schooling, jobs, and Medicare guidance."><Settle /></Layout>} />
        <Route path="/packages" element={<Layout title="Packages" description="Choose your level of support: Decide (AUD 600-900), Land (AUD 1,200-1,800), or Settle (AUD 2,000-2,800)."><Packages /></Layout>} />
        <Route path="/how-it-works" element={<Layout title="How It Works" description="Your journey step by step: initial consultation, assessment, pre-departure preparation, arrival, and ongoing support."><HowItWorks /></Layout>} />
        <Route path="/legal" element={<Layout title="Legal & Compliance" description="Transparency and trust: migration disclaimers, financial information, settlement terms, and privacy policy."><Legal /></Layout>} />
        <Route path="/contact" element={<Layout title="Contact" description="Ready when you are. Book a free 15-minute call. We reply within 1 business day."><Contact /></Layout>} />
      </Routes>
    </HelmetProvider>
  );
}

export default App;
