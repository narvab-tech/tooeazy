import { Routes, Route, Navigate } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import ComingSoon from './pages/ComingSoon';
import './App.css';

function App() {
  return (
    <HelmetProvider>
      <Routes>
        <Route path="/" element={<ComingSoon />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </HelmetProvider>
  );
}

export default App;
