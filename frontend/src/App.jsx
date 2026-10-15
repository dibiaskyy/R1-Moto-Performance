import React from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import { CartProvider } from './context/CartContext';
import CartDrawer from './components/cart/CartDrawer';
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
import AdminDashboardPage from './pages/AdminDashboardPage';

// First-visit route handler: defaults to login/signup for unauthenticated first-time visitors
function FirstVisitHandler() {
  const { isAuthenticated, isGuest, role, loading } = useAuth();

  if (loading) {
    return <div className="min-h-screen bg-[#070709]" />;
  }

  // If logged in as admin, route to admin control center
  if (isAuthenticated && role === 'admin') {
    return <Navigate to="/admin" replace />;
  }

  // If already logged in or continuing as guest, proceed to homepage
  if (isAuthenticated || isGuest) {
    return <Navigate to="/home" replace />;
  }

  // Otherwise, first view is the dedicated login/signup landing page
  return <AuthLandingPage />;
}

// User storefront & admin shared layout: maintains the signature Navbar and Footer
function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-[#070709] text-neutral-100 selection:bg-rose-600 selection:text-white">
      <Navbar />
      <CartDrawer />
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
        <CartProvider>
          <Routes>
          {/* Root path: shows login/signup on first visit */}
          <Route path="/" element={<FirstVisitHandler />} />

          {/* Standalone Login & Registration */}
          <Route path="/login" element={<AuthLandingPage />} />
          <Route path="/register" element={<AuthLandingPage />} />

          {/* Standalone Admin Portal - Clean, dedicated control panel without user storefront navbar */}
          <Route path="/admin" element={<AdminDashboardPage />} />

          {/* Main Website Layout with unified Navbar and Footer across storefront tabs */}
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
        </CartProvider>
      </AuthProvider>
    </Router>
  );
}
