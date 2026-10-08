import React from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import CatalogPage from './pages/CatalogPage';
import AuthLandingPage from './pages/AuthLandingPage';
import AboutPage from './pages/AboutPage';
import DealerPage from './pages/DealerPage';
import CareersPage from './pages/CareersPage';
import ContactPage from './pages/ContactPage';
import CompatibilityPage from './pages/CompatibilityPage';

// Standard React Router v6 Layout with Outlet
function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-[#070709] text-neutral-100 selection:bg-rose-600 selection:text-white">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          {/* Standalone Facebook-Style Login & Registration */}
          <Route path="/login" element={<AuthLandingPage />} />
          <Route path="/register" element={<AuthLandingPage />} />

          {/* Main Website with Navbar and Footer */}
          <Route element={<MainLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/catalog" element={<CatalogPage />} />
            <Route path="/products" element={<CatalogPage />} />
            <Route path="/compatibility" element={<CompatibilityPage />} />
            <Route path="/dealer" element={<DealerPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/careers" element={<CareersPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<HomePage />} />
          </Route>
        </Routes>
      </AuthProvider>
    </Router>
  );
}
