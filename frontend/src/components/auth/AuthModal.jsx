import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { X, Lock, Mail, User, Phone, ShieldCheck, Bike, ArrowRight } from 'lucide-react';

export default function AuthModal() {
  const { authModalOpen, setAuthModalOpen, authModalMode, setAuthModalMode, login, register } = useAuth();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    password_confirmation: '',
    motorcycle_model_id: '',
  });
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!authModalOpen) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    if (authModalMode === 'login') {
      const res = await login({ email: formData.email, password: formData.password });
      if (!res.success) setError(res.message);
    } else {
      if (formData.password !== formData.password_confirmation) {
        setError('Passwords do not match.');
        setIsSubmitting(false);
        return;
      }
      const res = await register(formData);
      if (!res.success) setError(res.message);
    }
    setIsSubmitting(false);
  };

  // Quick Demo Logins for Testing & Supervisor Evaluation
  const handleQuickLogin = async (email) => {
    setIsSubmitting(true);
    await login({ email, password: 'password' });
    setIsSubmitting(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-md p-6 bg-[#161922] border border-[#2a3142] rounded-2xl shadow-2xl overflow-hidden">
        
        {/* Close Button */}
        <button
          onClick={() => setAuthModalOpen(false)}
          className="absolute top-4 right-4 text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 transition"
          aria-label="Close"
        >
          <X size={20} />
        </button>

        {/* Brand Header */}
        <div className="text-center pt-2 pb-4">
          <img
            src="/images/r1-logo-full.png"
            alt="R1 Moto Performance"
            className="h-12 w-auto mx-auto object-contain drop-shadow-[0_4px_16px_rgba(225,29,72,0.4)]"
          />
          <p className="text-xs text-rose-400 font-semibold tracking-wide uppercase mt-2">
            Enhance your ride, Elevate your drive
          </p>
        </div>

        {/* Header Tabs */}
        <div className="flex border-b border-slate-800 mb-6 pb-2">
          <button
            onClick={() => { setAuthModalMode('login'); setError(''); }}
            className={`pb-2 text-sm sm:text-base font-semibold transition border-b-2 mr-6 ${
              authModalMode === 'login'
                ? 'border-rose-600 text-rose-500'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            Sign In
          </button>
          <button
            onClick={() => { setAuthModalMode('signup'); setError(''); }}
            className={`pb-2 text-base font-semibold transition border-b-2 ${
              authModalMode === 'signup'
                ? 'border-rose-600 text-rose-500'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            Create Rider Account
          </button>
        </div>

        {error && (
          <div className="mb-4 p-3 bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs rounded-lg">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          {authModalMode === 'signup' && (
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">Full Name</label>
              <div className="relative">
                <User size={16} className="absolute left-3 top-3 text-slate-500" />
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Juan Dela Cruz"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full pl-9 pr-3 py-2 text-sm bg-slate-900 border border-slate-800 rounded-lg focus:outline-none focus:border-rose-500 text-slate-100"
                />
              </div>
            </div>
          )}

          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1">Email Address</label>
            <div className="relative">
              <Mail size={16} className="absolute left-3 top-3 text-slate-500" />
              <input
                type="email"
                name="email"
                required
                placeholder="rider@example.com"
                value={formData.email}
                onChange={handleChange}
                className="w-full pl-9 pr-3 py-2 text-sm bg-slate-900 border border-slate-800 rounded-lg focus:outline-none focus:border-rose-500 text-slate-100"
              />
            </div>
          </div>

          {authModalMode === 'signup' && (
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">Mobile Number (Optional)</label>
              <div className="relative">
                <Phone size={16} className="absolute left-3 top-3 text-slate-500" />
                <input
                  type="text"
                  name="phone"
                  placeholder="+63 917 123 4567"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full pl-9 pr-3 py-2 text-sm bg-slate-900 border border-slate-800 rounded-lg focus:outline-none focus:border-rose-500 text-slate-100"
                />
              </div>
            </div>
          )}

          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1">Password</label>
            <div className="relative">
              <Lock size={16} className="absolute left-3 top-3 text-slate-500" />
              <input
                type="password"
                name="password"
                required
                placeholder="••••••••"
                value={formData.password}
                onChange={handleChange}
                className="w-full pl-9 pr-3 py-2 text-sm bg-slate-900 border border-slate-800 rounded-lg focus:outline-none focus:border-rose-500 text-slate-100"
              />
            </div>
          </div>

          {authModalMode === 'signup' && (
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">Confirm Password</label>
              <div className="relative">
                <Lock size={16} className="absolute left-3 top-3 text-slate-500" />
                <input
                  type="password"
                  name="password_confirmation"
                  required
                  placeholder="••••••••"
                  value={formData.password_confirmation}
                  onChange={handleChange}
                  className="w-full pl-9 pr-3 py-2 text-sm bg-slate-900 border border-slate-800 rounded-lg focus:outline-none focus:border-rose-500 text-slate-100"
                />
              </div>
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-2.5 mt-2 text-sm font-semibold text-white bg-rose-600 hover:bg-rose-700 rounded-lg transition shadow-lg shadow-rose-900/30 flex items-center justify-center space-x-2"
          >
            <span>{isSubmitting ? 'Processing...' : authModalMode === 'login' ? 'Sign In to Account' : 'Register Account'}</span>
            <ArrowRight size={16} />
          </button>
        </form>

        {/* Demo Fast Logins for Testing */}
        <div className="mt-6 pt-4 border-t border-slate-800">
          <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 mb-2">
            Quick Demo Login (Sprint Testing)
          </p>
          <div className="grid grid-cols-3 gap-2">
            <button
              onClick={() => handleQuickLogin('admin@r1moto.com')}
              className="py-1.5 px-2 text-[11px] font-medium bg-slate-900 hover:bg-slate-800 text-rose-400 border border-slate-800 rounded-md transition"
            >
              👑 Admin
            </button>
            <button
              onClick={() => handleQuickLogin('dealer@r1moto.com')}
              className="py-1.5 px-2 text-[11px] font-medium bg-slate-900 hover:bg-slate-800 text-sky-400 border border-slate-800 rounded-md transition"
            >
              🏢 Dealer
            </button>
            <button
              onClick={() => handleQuickLogin('rider@r1moto.com')}
              className="py-1.5 px-2 text-[11px] font-medium bg-slate-900 hover:bg-slate-800 text-emerald-400 border border-slate-800 rounded-md transition"
            >
              🏍️ Rider
            </button>
          </div>
        </div>

        {/* Continue as Guest */}
        <div className="mt-4 text-center">
          <button
            onClick={() => setAuthModalOpen(false)}
            className="text-xs text-slate-400 hover:text-slate-200 transition underline underline-offset-4"
          >
            Explore site as Guest
          </button>
        </div>

      </div>
    </div>
  );
}
