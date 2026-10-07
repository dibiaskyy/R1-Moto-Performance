import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { Shield, User, LogOut, Menu, X, Bike, ShoppingBag, Sparkles } from 'lucide-react';

export default function Navbar() {
  const { user, isAuthenticated, logout, openLogin, openSignUp, role } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Products', path: '/catalog' },
    { name: 'Bike Fitment', path: '/compatibility' },
    { name: 'Become a Dealer', path: '/dealer' },
    { name: 'About Us', path: '/about' },
    { name: 'Careers', path: '/careers' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="sticky top-0 z-40 w-full bg-[#0b0f19]/90 backdrop-blur-md border-b border-[#1f2430]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Logo - Only R1 Logo as requested */}
        <Link to="/" className="flex items-center space-x-3 group" title="R1 Moto Performance">
          <img
            src="/images/r1-logo-icon.png"
            alt="R1"
            className="h-10 sm:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105 drop-shadow-[0_0_14px_rgba(225,29,72,0.45)]"
          />
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-1">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`px-3 py-2 text-sm font-medium rounded-lg transition ${
                isActive(link.path)
                  ? 'text-rose-400 bg-rose-950/30'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* User Authentication Actions */}
        <div className="hidden md:flex items-center space-x-3">
          {isAuthenticated ? (
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-2 px-3 py-1.5 bg-slate-900/80 border border-slate-800 rounded-lg">
                <div className="w-7 h-7 rounded-full bg-rose-600/20 text-rose-400 flex items-center justify-center font-bold text-xs">
                  {user.name.charAt(0)}
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-semibold text-slate-200 leading-tight truncate max-w-[120px]">
                    {user.name}
                  </span>
                  <span className="text-[10px] text-rose-400 font-bold uppercase tracking-wider">
                    {role}
                  </span>
                </div>
              </div>

              {role === 'admin' && (
                <Link
                  to="/admin"
                  className="p-2 text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg transition"
                  title="Admin Dashboard"
                >
                  <Shield size={18} />
                </Link>
              )}

              <button
                onClick={logout}
                className="p-2 text-slate-400 hover:text-rose-400 hover:bg-slate-800 rounded-lg transition"
                title="Log Out"
              >
                <LogOut size={18} />
              </button>
            </div>
          ) : (
            <div className="flex items-center space-x-2">
              <button
                onClick={openLogin}
                className="px-4 py-2 text-sm font-semibold text-slate-300 hover:text-white rounded-lg hover:bg-slate-800 transition"
              >
                Sign In
              </button>
              <button
                onClick={openSignUp}
                className="px-4 py-2 text-sm font-semibold text-white bg-rose-600 hover:bg-rose-700 rounded-lg transition shadow-md shadow-rose-950 flex items-center space-x-1.5"
              >
                <span>Register</span>
              </button>
            </div>
          )}
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex lg:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-800 bg-[#0f131d] px-4 pt-3 pb-6 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-base font-medium rounded-lg text-slate-200 hover:bg-slate-800"
            >
              {link.name}
            </Link>
          ))}
          
          <div className="pt-4 border-t border-slate-800 flex flex-col space-y-2">
            {isAuthenticated ? (
              <div className="space-y-2">
                <div className="text-sm text-slate-300">
                  Signed in as <strong>{user.name}</strong> ({role})
                </div>
                <button
                  onClick={() => { logout(); setMobileMenuOpen(false); }}
                  className="w-full text-left py-2 px-3 text-sm text-rose-400 hover:bg-slate-800 rounded-lg"
                >
                  Sign Out
                </button>
              </div>
            ) : (
              <div className="flex space-x-2 pt-2">
                <button
                  onClick={() => { openLogin(); setMobileMenuOpen(false); }}
                  className="flex-1 py-2 text-sm font-medium bg-slate-800 text-white rounded-lg text-center"
                >
                  Sign In
                </button>
                <button
                  onClick={() => { openSignUp(); setMobileMenuOpen(false); }}
                  className="flex-1 py-2 text-sm font-medium bg-rose-600 text-white rounded-lg text-center"
                >
                  Register
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
