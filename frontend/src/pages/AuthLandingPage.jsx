import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { Mail, Lock, User, Phone, ArrowRight, ShieldCheck, Bike, Sparkles, CheckCircle2 } from 'lucide-react';

export default function AuthLandingPage() {
  const { login, register, continueAsGuest } = useAuth();
  const [mode, setMode] = useState('login'); // 'login' or 'signup'
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    password_confirmation: '',
  });
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    if (mode === 'login') {
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

  const handleDemoLogin = async (email) => {
    setIsSubmitting(true);
    setError('');
    await login({ email, password: 'password' });
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-[#07090f] text-slate-100 flex flex-col justify-between relative overflow-hidden select-none">
      
      {/* Background Ambience Glow */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-rose-600/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-20 right-10 w-96 h-96 bg-rose-950/20 rounded-full blur-3xl pointer-events-none"></div>

      {/* Main Facebook-Style Split View */}
      <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT COLUMN: Facebook-Style Brand & Tagline Pitch */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Full R1 Logo */}
            <div className="flex justify-center lg:justify-start">
              <img 
                src="/images/r1-logo-full.png" 
                alt="R1 Moto Performance" 
                className="h-16 sm:h-24 w-auto object-contain drop-shadow-[0_10px_25px_rgba(225,29,72,0.4)]"
              />
            </div>

            {/* Official Tagline */}
            <h1 className="font-display font-black text-3xl sm:text-5xl lg:text-5xl tracking-tight text-white leading-tight">
              Enhance your ride, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 via-rose-400 to-amber-400">
                Elevate your drive.
              </span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl mx-auto lg:mx-0">
              The premier platform for motorcycle enthusiasts, racers, and mechanics. Connect with verified dealerships, explore guaranteed 2-way scooter fitments, and access wholesale performance parts.
            </p>

            {/* Feature Highlights */}
            <div className="pt-2 space-y-3 max-w-md mx-auto lg:mx-0 text-left">
              <div className="flex items-center space-x-3 text-sm text-slate-300">
                <CheckCircle2 size={18} className="text-rose-500 flex-shrink-0" />
                <span>100% Guaranteed 2-Way Scooter Fitment Engine</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-slate-300">
                <CheckCircle2 size={18} className="text-rose-500 flex-shrink-0" />
                <span>B2B Dealership Wholesale Portal & Automated PDF Orders</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-slate-300">
                <CheckCircle2 size={18} className="text-rose-500 flex-shrink-0" />
                <span>Genuine CNC Transmission & Racing Friction Components</span>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: Facebook-Style Auth Card */}
          <div className="lg:col-span-5 w-full max-w-md mx-auto">
            <div className="bg-[#121622] border border-[#232a3c] rounded-2xl p-6 sm:p-8 shadow-2xl relative">
              
              {/* Form Title */}
              <div className="mb-6">
                <h2 className="text-xl font-bold font-display text-white">
                  {mode === 'login' ? 'Sign in to R1 Performance' : 'Create Rider Account'}
                </h2>
                <p className="text-xs text-slate-400 mt-1">
                  {mode === 'login'
                    ? 'Enter your credentials to access your garage and orders.'
                    : 'Fast and easy registration for riders and dealerships.'}
                </p>
              </div>

              {error && (
                <div className="mb-4 p-3 bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs rounded-xl">
                  {error}
                </div>
              )}

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                {mode === 'signup' && (
                  <div>
                    <div className="relative">
                      <User size={18} className="absolute left-3.5 top-3.5 text-slate-500" />
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="Full Name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full pl-11 pr-4 py-3 text-sm bg-slate-900 border border-slate-800 rounded-xl focus:outline-none focus:border-rose-500 text-slate-100 placeholder-slate-500"
                      />
                    </div>
                  </div>
                )}

                <div>
                  <div className="relative">
                    <Mail size={18} className="absolute left-3.5 top-3.5 text-slate-500" />
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full pl-11 pr-4 py-3 text-sm bg-slate-900 border border-slate-800 rounded-xl focus:outline-none focus:border-rose-500 text-slate-100 placeholder-slate-500"
                    />
                  </div>
                </div>

                {mode === 'signup' && (
                  <div>
                    <div className="relative">
                      <Phone size={18} className="absolute left-3.5 top-3.5 text-slate-500" />
                      <input
                        type="text"
                        name="phone"
                        placeholder="Mobile Number (Optional)"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full pl-11 pr-4 py-3 text-sm bg-slate-900 border border-slate-800 rounded-xl focus:outline-none focus:border-rose-500 text-slate-100 placeholder-slate-500"
                      />
                    </div>
                  </div>
                )}

                <div>
                  <div className="relative">
                    <Lock size={18} className="absolute left-3.5 top-3.5 text-slate-500" />
                    <input
                      type="password"
                      name="password"
                      required
                      placeholder="Password"
                      value={formData.password}
                      onChange={handleChange}
                      className="w-full pl-11 pr-4 py-3 text-sm bg-slate-900 border border-slate-800 rounded-xl focus:outline-none focus:border-rose-500 text-slate-100 placeholder-slate-500"
                    />
                  </div>
                </div>

                {mode === 'signup' && (
                  <div>
                    <div className="relative">
                      <Lock size={18} className="absolute left-3.5 top-3.5 text-slate-500" />
                      <input
                        type="password"
                        name="password_confirmation"
                        required
                        placeholder="Confirm Password"
                        value={formData.password_confirmation}
                        onChange={handleChange}
                        className="w-full pl-11 pr-4 py-3 text-sm bg-slate-900 border border-slate-800 rounded-xl focus:outline-none focus:border-rose-500 text-slate-100 placeholder-slate-500"
                      />
                    </div>
                  </div>
                )}

                {/* Primary Action Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 text-base font-bold text-white bg-rose-600 hover:bg-rose-500 rounded-xl transition shadow-lg shadow-rose-900/40 flex items-center justify-center space-x-2"
                >
                  <span>
                    {isSubmitting 
                      ? 'Signing in...' 
                      : mode === 'login' 
                        ? 'Log In' 
                        : 'Sign Up'}
                  </span>
                  <ArrowRight size={18} />
                </button>
              </form>

              {/* Quick Demo Test Buttons */}
              <div className="mt-5 pt-4 border-t border-slate-800">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
                  1-Click Quick Demo Login:
                </span>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => handleDemoLogin('admin@r1moto.com')}
                    className="py-1.5 px-2 text-[11px] font-semibold bg-slate-900 hover:bg-slate-800 text-rose-400 border border-slate-800 rounded-lg transition"
                  >
                    👑 Admin
                  </button>
                  <button
                    type="button"
                    onClick={() => handleDemoLogin('dealer@r1moto.com')}
                    className="py-1.5 px-2 text-[11px] font-semibold bg-slate-900 hover:bg-slate-800 text-sky-400 border border-slate-800 rounded-lg transition"
                  >
                    🏢 Dealer
                  </button>
                  <button
                    type="button"
                    onClick={() => handleDemoLogin('rider@r1moto.com')}
                    className="py-1.5 px-2 text-[11px] font-semibold bg-slate-900 hover:bg-slate-800 text-emerald-400 border border-slate-800 rounded-lg transition"
                  >
                    🏍️ Rider
                  </button>
                </div>
              </div>

              {/* Facebook-Style Divider */}
              <div className="my-5 flex items-center">
                <div className="flex-1 border-t border-slate-800"></div>
                <span className="px-3 text-xs text-slate-500 uppercase font-semibold">or</span>
                <div className="flex-1 border-t border-slate-800"></div>
              </div>

              {/* Facebook-Style Alternate Action Button */}
              <div className="text-center">
                {mode === 'login' ? (
                  <button
                    type="button"
                    onClick={() => { setMode('signup'); setError(''); }}
                    className="w-full py-3 text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-500 rounded-xl transition shadow-lg shadow-emerald-950"
                  >
                    Create new account
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() => { setMode('login'); setError(''); }}
                    className="w-full py-3 text-sm font-bold text-slate-200 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-xl transition border border-slate-700"
                  >
                    Already have an account? Log In
                  </button>
                )}
              </div>

              {/* Guest Access Link */}
              <div className="mt-5 pt-3 text-center border-t border-slate-800/80">
                <button
                  type="button"
                  onClick={continueAsGuest}
                  className="text-xs text-slate-400 hover:text-rose-400 transition underline underline-offset-4 font-medium"
                >
                  Explore website as Guest →
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Footer Copyright */}
      <footer className="py-6 border-t border-slate-900 text-center text-xs text-slate-400">
        <p>© {new Date().getFullYear()} R1 Moto Performance. Precision CVT Engineering & Community.</p>
      </footer>

    </div>
  );
}
