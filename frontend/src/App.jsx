import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import AuthModal from './components/auth/AuthModal';
import HomePage from './pages/HomePage';

// Placeholder views for subsequent sprints
const CatalogPlaceholder = () => (
  <div className="max-w-7xl mx-auto px-4 py-20 text-center">
    <h1 className="text-3xl font-bold font-display text-white mb-4">Product Catalog</h1>
    <p className="text-slate-400 max-w-md mx-auto mb-8">
      Sprint 1 Feature: Browsing Pulley Sets, Clutch Bells, Flyball weights, and Ceramic Brake Pads.
    </p>
    <Link to="/" className="px-5 py-2.5 bg-rose-600 text-white rounded-lg font-semibold text-sm">
      Back to Home
    </Link>
  </div>
);

const CompatibilityPlaceholder = () => (
  <div className="max-w-7xl mx-auto px-4 py-20 text-center">
    <h1 className="text-3xl font-bold font-display text-white mb-4">Bike Compatibility Engine</h1>
    <p className="text-slate-400 max-w-md mx-auto mb-8">
      Sprint 2 Feature: Two-way fitment engine (Unit-to-Parts and Part-to-Units for Aerox, NMAX, Click, PCX).
    </p>
    <Link to="/" className="px-5 py-2.5 bg-rose-600 text-white rounded-lg font-semibold text-sm">
      Back to Home
    </Link>
  </div>
);

const DealerPlaceholder = () => (
  <div className="max-w-7xl mx-auto px-4 py-20 text-center">
    <h1 className="text-3xl font-bold font-display text-white mb-4">Become a Dealer / Distributor</h1>
    <p className="text-slate-400 max-w-md mx-auto mb-8">
      Sprint 4 & 5 Feature: Dealership perks, document uploads (PNG/JPEG), wholesale order sheet, and PDF order generation.
    </p>
    <Link to="/" className="px-5 py-2.5 bg-rose-600 text-white rounded-lg font-semibold text-sm">
      Back to Home
    </Link>
  </div>
);

const AboutPlaceholder = () => (
  <div className="max-w-7xl mx-auto px-4 py-20 text-center">
    <h1 className="text-3xl font-bold font-display text-white mb-4">About R1 Moto Performance</h1>
    <p className="text-slate-400 max-w-md mx-auto mb-8">
      Sprint 3 Feature: Company history, mission & vision, store locator, and verified marketplace channels.
    </p>
    <Link to="/" className="px-5 py-2.5 bg-rose-600 text-white rounded-lg font-semibold text-sm">
      Back to Home
    </Link>
  </div>
);

export default function App() {
  return (
    <Router>
      <AuthProvider>
        <div className="min-h-screen flex flex-col bg-[#0b0f19] text-slate-100 selection:bg-rose-600 selection:text-white">
          <Navbar />
          
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/catalog" element={<CatalogPlaceholder />} />
              <Route path="/compatibility" element={<CompatibilityPlaceholder />} />
              <Route path="/dealer" element={<DealerPlaceholder />} />
              <Route path="/about" element={<AboutPlaceholder />} />
              <Route path="/careers" element={<AboutPlaceholder />} />
              <Route path="/contact" element={<AboutPlaceholder />} />
            </Routes>
          </main>

          <Footer />
          <AuthModal />
        </div>
      </AuthProvider>
    </Router>
  );
}
