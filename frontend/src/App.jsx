import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import AuthModal from './components/auth/AuthModal';
import HomePage from './pages/HomePage';
import CatalogPage from './pages/CatalogPage';
import AuthLandingPage from './pages/AuthLandingPage';

// Placeholder views for subsequent sprints
const CompatibilityPlaceholder = () => (
  <div className="max-w-7xl mx-auto px-4 py-20 text-center">
    <h1 className="text-3xl font-bold font-display text-white mb-4">Bike Compatibility Engine</h1>
    <p className="text-slate-400 max-w-md mx-auto mb-8">
      Sprint 2 Feature: Two-way fitment engine (Unit-to-Parts and Part-to-Units for Aerox, NMAX, Click, PCX).
    </p>
    <Link to="/" className="px-5 py-2.5 bg-rose-600 text-white rounded-lg font-semibold text-sm">
      Back to Dashboard
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
      Back to Dashboard
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
      Back to Dashboard
    </Link>
  </div>
);

function MainLayout() {
  const { isAuthenticated, isGuest } = useAuth();

  // If user is not authenticated and has not chosen guest mode,
  // show the Facebook-style standalone login landing page (NO homepage in the background)
  if (!isAuthenticated && !isGuest) {
    return <AuthLandingPage />;
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#0b0f19] text-slate-100 selection:bg-rose-600 selection:text-white">
      <Navbar />
      
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
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
  );
}

export default function App() {
  return (
    <Router>
      <AuthProvider>
        <MainLayout />
      </AuthProvider>
    </Router>
  );
}
