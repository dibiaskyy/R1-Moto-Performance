import React from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
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

// First-visit route handler: defaults to login/signup for unauthenticated first-time visitors
function FirstVisitHandler() {
  const { isAuthenticated, isGuest, loading } = useAuth();

  if (loading) {
    return <div className="min-h-screen bg-[#070709]" />;
  }

  // If already logged in or continuing as guest, proceed to homepage
  if (isAuthenticated || isGuest) {
    return <Navigate to="/home" replace />;
  }

  // Otherwise, first view is the dedicated Facebook-style login/signup landing page
  return <AuthLandingPage />;
}

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
          {/* Root path: shows login/signup on first visit */}
          <Route path="/" element={<FirstVisitHandler />} />

          {/* Standalone Facebook-Style Login & Registration */}
          <Route path="/login" element={<AuthLandingPage />} />
          <Route path="/register" element={<AuthLandingPage />} />

          {/* Main Website with Navbar and Footer */}
          <Route element={<MainLayout />}>
            <Route path="/home" element={<HomePage />} />
            <Route path="/catalog" element={<CatalogPage />} />
            <Route path="/products" element={<CatalogPage />} />
            <Route path="/compatibility" element={<CompatibilityPage />} />
            <Route path="/dealer" element={<DealerPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/careers" element={<CareersPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<Navigate to="/home" replace />} />
          </Route>
        </Routes>
      </AuthProvider>
    </Router>
  );
}
