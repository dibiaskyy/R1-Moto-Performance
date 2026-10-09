import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { Shield, User, LogOut, Menu, X, Bike, ShoppingBag, Search, ChevronDown, Target, MapPin, ExternalLink } from 'lucide-react';

export default function Navbar() {
  const { user, isAuthenticated, logout, role } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate('/');
  };

  const isActive = (path) => {
    if (path === '/home') return location.pathname === '/home' || location.pathname === '/';
    return location.pathname === path;
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[#070709]/95 backdrop-blur-xl border-b border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Logo - R1 Logo Icon */}
        <Link to="/home" className="flex items-center space-x-3 group" title="R1 Moto Performance">
          <img
            src="/images/r1-logo-icon.png"
            alt="R1"
            className="h-10 sm:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105 drop-shadow-[0_0_16px_rgba(225,29,72,0.5)]"
          />
        </Link>

        {/* Desktop Navigation Links (Motorsport uppercase styling) */}
        <nav className="hidden lg:flex items-center space-x-1 font-heading text-xs font-semibold tracking-wider">
          
          <Link
            to="/home"
            className={`px-3.5 py-2 rounded-full transition-all duration-200 ${
              isActive('/home')
                ? 'text-white bg-white/10 shadow-inner'
                : 'text-neutral-400 hover:text-white hover:bg-white/[0.05]'
            }`}
          >
            HOME
          </Link>

          {/* About Us with Dropdown (Matching User's Diagram) */}
          <div 
            className="relative"
            onMouseEnter={() => setAboutDropdownOpen(true)}
            onMouseLeave={() => setAboutDropdownOpen(false)}
          >
            <Link
              to="/about"
              className={`px-3.5 py-2 rounded-full transition-all duration-200 flex items-center space-x-1 ${
                location.pathname.startsWith('/about')
                  ? 'text-white bg-white/10 shadow-inner'
                  : 'text-neutral-400 hover:text-white hover:bg-white/[0.05]'
              }`}
            >
              <span>ABOUT US</span>
              <ChevronDown size={12} className="transition-transform group-hover:rotate-180" />
            </Link>

            {aboutDropdownOpen && (
              <div className="absolute top-full left-0 w-60 py-2 mt-1 bg-[#0f0f14] border border-white/10 rounded-2xl shadow-2xl backdrop-blur-2xl z-50">
                <Link
                  to="/about"
                  className="block px-4 py-2 text-xs text-neutral-300 hover:text-white hover:bg-white/[0.06] transition"
                >
                  Overview & History
                </Link>
                <Link
                  to="/about#mission"
                  className="block px-4 py-2 text-xs text-neutral-300 hover:text-white hover:bg-white/[0.06] transition"
                >
                  Mission & Vision
                </Link>
                <Link
                  to="/about#location"
                  className="block px-4 py-2 text-xs text-neutral-300 hover:text-white hover:bg-white/[0.06] transition"
                >
                  Location & Warehouse Hub
                </Link>
                <Link
                  to="/about#stores"
                  className="block px-4 py-2 text-xs text-neutral-300 hover:text-white hover:bg-white/[0.06] transition"
                >
                  Online Shop Links
                </Link>
              </div>
            )}
          </div>

          <Link
            to="/catalog"
            className={`px-3.5 py-2 rounded-full transition-all duration-200 ${
              isActive('/catalog')
                ? 'text-white bg-white/10 shadow-inner'
                : 'text-neutral-400 hover:text-white hover:bg-white/[0.05]'
            }`}
          >
            PRODUCTS
          </Link>

          <Link
            to="/compatibility"
            className={`px-3.5 py-2 rounded-full transition-all duration-200 ${
              isActive('/compatibility')
                ? 'text-white bg-white/10 shadow-inner'
                : 'text-neutral-400 hover:text-white hover:bg-white/[0.05]'
            }`}
          >
            MOTOR FITMENT
          </Link>

          <Link
            to="/dealer"
            className={`px-3.5 py-2 rounded-full transition-all duration-200 ${
              isActive('/dealer')
                ? 'text-white bg-white/10 shadow-inner'
                : 'text-neutral-400 hover:text-white hover:bg-white/[0.05]'
            }`}
          >
            BECOME A DEALER / DISTRIBUTOR
          </Link>

          <Link
            to="/careers"
            className={`px-3.5 py-2 rounded-full transition-all duration-200 ${
              isActive('/careers')
                ? 'text-white bg-white/10 shadow-inner'
                : 'text-neutral-400 hover:text-white hover:bg-white/[0.05]'
            }`}
          >
            CAREERS
          </Link>

          <Link
            to="/contact"
            className={`px-3.5 py-2 rounded-full transition-all duration-200 ${
              isActive('/contact')
                ? 'text-white bg-white/10 shadow-inner'
                : 'text-neutral-400 hover:text-white hover:bg-white/[0.05]'
            }`}
          >
            CONTACT US
          </Link>
        </nav>

        {/* Right Action Icons & Auth Controls (Automotive E-commerce layout) */}
        <div className="hidden md:flex items-center space-x-4">
          

          {/* Quick Search Button */}
          <Link
            to="/catalog"
            className="p-2 rounded-full text-neutral-400 hover:text-white hover:bg-white/[0.06] transition"
            title="Search Products"
          >
            <Search size={17} />
          </Link>

          {/* Shopping Cart Pill Button */}
          <Link
            to="/catalog"
            className="relative p-2 rounded-full text-neutral-400 hover:text-white hover:bg-white/[0.06] transition"
            title="Cart"
          >
            <ShoppingBag size={18} />
            <span className="absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full bg-rose-600 text-white text-[9px] font-extrabold flex items-center justify-center">
              2
            </span>
          </Link>

          {/* Divider */}
          <div className="h-4 w-px bg-white/10"></div>

          {/* User Authentication Actions */}
          {isAuthenticated ? (
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-2 px-3 py-1.5 bg-[#121217] border border-white/10 rounded-full">
                <div className="w-6 h-6 rounded-full bg-rose-600/30 text-rose-400 flex items-center justify-center font-bold text-xs">
                  {user.name.charAt(0)}
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-semibold text-neutral-200 leading-tight truncate max-w-[100px]">
                    {user.name}
                  </span>
                </div>
              </div>

              {role === 'admin' && (
                <Link
                  to="/admin"
                  className="p-2 text-neutral-400 hover:text-white hover:bg-white/[0.06] rounded-full transition"
                  title="Admin Dashboard"
                >
                  <Shield size={17} />
                </Link>
              )}

              <button
                onClick={handleLogout}
                className="p-2 text-neutral-400 hover:text-rose-400 hover:bg-white/[0.06] rounded-full transition"
                title="Log Out"
              >
                <LogOut size={17} />
              </button>
            </div>
          ) : (
            <div className="flex items-center space-x-2">
              <Link
                to="/login"
                className="px-5 py-2 text-xs font-bold uppercase tracking-wider text-neutral-300 hover:text-white rounded-full border border-white/15 hover:border-rose-500/80 hover:bg-white/[0.04] transition duration-200"
              >
                Sign In
              </Link>
            </div>
          )}
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex lg:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-neutral-400 hover:text-white hover:bg-white/[0.05]"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-white/[0.08] bg-[#0c0c10] px-4 pt-3 pb-6 space-y-2">
          <Link
            to="/"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-sm font-semibold tracking-wider rounded-lg text-neutral-300 hover:text-white hover:bg-white/[0.05]"
          >
            HOME
          </Link>
          <Link
            to="/catalog"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-sm font-semibold tracking-wider rounded-lg text-neutral-300 hover:text-white hover:bg-white/[0.05]"
          >
            PRODUCTS
          </Link>
          <Link
            to="/about"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-sm font-semibold tracking-wider rounded-lg text-neutral-300 hover:text-white hover:bg-white/[0.05]"
          >
            ABOUT US (Mission, Location, Online Stores)
          </Link>
          <Link
            to="/compatibility"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-sm font-semibold tracking-wider rounded-lg text-neutral-300 hover:text-white hover:bg-white/[0.05]"
          >
            MOTOR FITMENT
          </Link>
          <Link
            to="/dealer"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-sm font-semibold tracking-wider rounded-lg text-neutral-300 hover:text-white hover:bg-white/[0.05]"
          >
            BECOME A DEALER / DISTRIBUTOR
          </Link>
          <Link
            to="/careers"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-sm font-semibold tracking-wider rounded-lg text-neutral-300 hover:text-white hover:bg-white/[0.05]"
          >
            CAREERS
          </Link>
          <Link
            to="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-sm font-semibold tracking-wider rounded-lg text-neutral-300 hover:text-white hover:bg-white/[0.05]"
          >
            CONTACT US
          </Link>
          
          <div className="pt-4 border-t border-white/[0.08] flex flex-col space-y-2">
            {isAuthenticated ? (
              <div className="space-y-2">
                <div className="text-xs text-neutral-400">
                  Signed in as <strong className="text-white">{user.name}</strong> ({role})
                </div>
                <button
                  onClick={async () => { await handleLogout(); setMobileMenuOpen(false); }}
                  className="w-full text-left py-2 px-3 text-xs text-rose-400 hover:bg-white/[0.05] rounded-lg"
                >
                  Log Out
                </button>
              </div>
            ) : (
              <Link
                to="/login"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-center py-2.5 px-4 text-xs font-bold uppercase tracking-wider text-black bg-white hover:bg-neutral-200 rounded-full transition"
              >
                Sign In / Register
              </Link>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
