import { Routes, Route, Outlet } from 'react-router-dom';
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

function LayoutWrapper() {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
}

function App() {
  return (
    <HelmetProvider>
      <Routes>
        <Route element={<LayoutWrapper />}>
          <Route path="/" element={<Home />} />
          <Route path="/decide" element={<Decide />} />
          <Route path="/arrive" element={<Arrive />} />
          <Route path="/settle" element={<Settle />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/legal" element={<Legal />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </HelmetProvider>
  );
}

export default App;
