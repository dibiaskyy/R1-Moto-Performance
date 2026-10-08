import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Mail, Lock, User, Phone, ArrowRight, ShieldCheck, Bike, Sparkles, CheckCircle2, ChevronLeft } from 'lucide-react';

export default function AuthLandingPage() {
  const { login, register } = useAuth();
  const navigate = useNavigate();
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
      if (res.success) {
        navigate('/');
      } else {
        setError(res.message);
      }
    } else {
      if (formData.password !== formData.password_confirmation) {
        setError('Passwords do not match.');
        setIsSubmitting(false);
        return;
      }
      const res = await register(formData);
      if (res.success) {
        navigate('/');
      } else {
        setError(res.message);
      }
    }
    setIsSubmitting(false);
  };

  const handleDemoLogin = async (email) => {
    setIsSubmitting(true);
    setError('');
    const res = await login({ email, password: 'password' });
    if (res.success) {
      navigate('/');
    } else {
      setError(res.message);
    }
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-[#070709] text-neutral-100 flex flex-col justify-between relative overflow-hidden select-none">
      
      {/* Background Ambience Glow */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-rose-600/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-20 right-10 w-96 h-96 bg-red-950/20 rounded-full blur-3xl pointer-events-none"></div>

      {/* Top Header Navigation */}
      <header className="px-6 py-5 max-w-7xl mx-auto w-full flex items-center justify-between z-10">
        <Link to="/" className="inline-flex items-center space-x-2 text-xs font-semibold text-neutral-400 hover:text-white transition">
          <ChevronLeft size={16} />
          <span>Back to Homepage</span>
        </Link>
        <Link to="/" className="text-xs text-rose-500 hover:text-rose-400 font-bold uppercase tracking-widest font-heading">
          R1 MOTO PERFORMANCE
        </Link>
      </header>

      {/* Main Facebook-Style Split View */}
      <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT COLUMN: Facebook-Style Brand & Tagline Pitch */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Full R1 Logo */}
            <div className="flex justify-center lg:justify-start">
              <Link to="/">
                <img 
                  src="/images/r1-logo-full.png" 
                  alt="R1 Moto Performance" 
                  className="h-14 sm:h-20 w-auto object-contain drop-shadow-[0_15px_30px_rgba(225,29,72,0.45)]"
                />
              </Link>
            </div>

            {/* Official Tagline */}
            <h1 className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-5xl tracking-tight text-white leading-tight uppercase">
              Enhance your ride, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-rose-500 to-red-600">
                Elevate your drive.
              </span>
            </h1>

            {/* Description */}
            <p className="text-sm sm:text-base text-neutral-400 leading-relaxed max-w-xl mx-auto lg:mx-0">
              The premier platform for motorcycle enthusiasts, racers, and mechanics. Connect with verified dealerships, explore guaranteed 2-way scooter fitments, and access wholesale performance parts.
            </p>

            {/* Feature Highlights */}
            <div className="pt-2 space-y-3 max-w-md mx-auto lg:mx-0 text-left">
              <div className="flex items-center space-x-3 text-xs sm:text-sm text-neutral-300">
                <CheckCircle2 size={16} className="text-rose-500 flex-shrink-0" />
                <span>100% Guaranteed 2-Way Scooter Fitment Engine</span>
              </div>
              <div className="flex items-center space-x-3 text-xs sm:text-sm text-neutral-300">
                <CheckCircle2 size={16} className="text-rose-500 flex-shrink-0" />
                <span>B2B Dealership Wholesale Portal & Automated PDF Orders</span>
              </div>
              <div className="flex items-center space-x-3 text-xs sm:text-sm text-neutral-300">
                <CheckCircle2 size={16} className="text-rose-500 flex-shrink-0" />
                <span>Genuine CNC Transmission & Racing Friction Components</span>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: Facebook-Style Auth Card */}
          <div className="lg:col-span-5 w-full max-w-md mx-auto">
            <div className="bg-[#0f0f14] border border-white/10 rounded-3xl p-6 sm:p-8 shadow-2xl relative">
              
              {/* Form Title */}
              <div className="mb-6">
                <h2 className="text-xl font-bold font-heading uppercase text-white">
                  {mode === 'login' ? 'Sign In to R1 Performance' : 'Create Rider Account'}
                </h2>
                <p className="text-xs text-neutral-400 mt-1">
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
                      <User size={17} className="absolute left-3.5 top-3.5 text-neutral-500" />
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="Full Name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-3 text-xs bg-[#08080b] border border-white/10 rounded-xl focus:outline-none focus:border-rose-500 text-neutral-100 placeholder-neutral-500 transition"
                      />
                    </div>
                  </div>
                )}

                <div>
                  <div className="relative">
                    <Mail size={17} className="absolute left-3.5 top-3.5 text-neutral-500" />
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 text-xs bg-[#08080b] border border-white/10 rounded-xl focus:outline-none focus:border-rose-500 text-neutral-100 placeholder-neutral-500 transition"
                    />
                  </div>
                </div>

                {mode === 'signup' && (
                  <div>
                    <div className="relative">
                      <Phone size={17} className="absolute left-3.5 top-3.5 text-neutral-500" />
                      <input
                        type="text"
                        name="phone"
                        placeholder="Mobile Number (Optional)"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-3 text-xs bg-[#08080b] border border-white/10 rounded-xl focus:outline-none focus:border-rose-500 text-neutral-100 placeholder-neutral-500 transition"
                      />
                    </div>
                  </div>
                )}

                <div>
                  <div className="relative">
                    <Lock size={17} className="absolute left-3.5 top-3.5 text-neutral-500" />
                    <input
                      type="password"
                      name="password"
                      required
                      placeholder="Password"
                      value={formData.password}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 text-xs bg-[#08080b] border border-white/10 rounded-xl focus:outline-none focus:border-rose-500 text-neutral-100 placeholder-neutral-500 transition"
                    />
                  </div>
                </div>

                {mode === 'signup' && (
                  <div>
                    <div className="relative">
                      <Lock size={17} className="absolute left-3.5 top-3.5 text-neutral-500" />
                      <input
                        type="password"
                        name="password_confirmation"
                        required
                        placeholder="Confirm Password"
                        value={formData.password_confirmation}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-3 text-xs bg-[#08080b] border border-white/10 rounded-xl focus:outline-none focus:border-rose-500 text-neutral-100 placeholder-neutral-500 transition"
                      />
                    </div>
                  </div>
                )}

                {/* Primary Action Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 text-xs font-bold uppercase tracking-wider text-white bg-rose-600 hover:bg-rose-500 rounded-xl transition shadow-lg shadow-rose-950 flex items-center justify-center space-x-2"
                >
                  <span>
                    {isSubmitting 
                      ? 'Processing...' 
                      : mode === 'login' 
                        ? 'Sign In' 
                        : 'Create Account'}
                  </span>
                  <ArrowRight size={15} />
                </button>
              </form>

              {/* Quick Demo Test Buttons */}
              <div className="mt-5 pt-4 border-t border-white/10">
                <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 block mb-2">
                  1-Click Quick Demo Login:
                </span>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => handleDemoLogin('admin@r1moto.com')}
                    className="py-1.5 px-2 text-[10px] font-bold uppercase bg-white/[0.04] hover:bg-white/[0.08] text-rose-400 border border-white/10 rounded-lg transition"
                  >
                    👑 Admin
                  </button>
                  <button
                    type="button"
                    onClick={() => handleDemoLogin('dealer@r1moto.com')}
                    className="py-1.5 px-2 text-[10px] font-bold uppercase bg-white/[0.04] hover:bg-white/[0.08] text-sky-400 border border-white/10 rounded-lg transition"
                  >
                    🏢 Dealer
                  </button>
                  <button
                    type="button"
                    onClick={() => handleDemoLogin('rider@r1moto.com')}
                    className="py-1.5 px-2 text-[10px] font-bold uppercase bg-white/[0.04] hover:bg-white/[0.08] text-emerald-400 border border-white/10 rounded-lg transition"
                  >
                    🏍️ Rider
                  </button>
                </div>
              </div>

              {/* Facebook-Style Divider */}
              <div className="my-5 flex items-center">
                <div className="flex-1 border-t border-white/10"></div>
                <span className="px-3 text-[10px] text-neutral-500 uppercase font-semibold">or</span>
                <div className="flex-1 border-t border-white/10"></div>
              </div>

              {/* Facebook-Style Alternate Action Button */}
              <div className="text-center">
                {mode === 'login' ? (
                  <button
                    type="button"
                    onClick={() => { setMode('signup'); setError(''); }}
                    className="w-full py-2.5 text-xs font-bold uppercase tracking-wider text-black bg-white hover:bg-neutral-200 rounded-xl transition shadow-md"
                  >
                    Create new account
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() => { setMode('login'); setError(''); }}
                    className="w-full py-2.5 text-xs font-bold uppercase tracking-wider text-neutral-200 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] rounded-xl transition border border-white/10"
                  >
                    Already have an account? Sign In
                  </button>
                )}
              </div>

              {/* Guest Access Link */}
              <div className="mt-5 pt-3 text-center border-t border-white/10">
                <Link
                  to="/"
                  className="text-xs text-neutral-400 hover:text-rose-400 transition underline underline-offset-4 font-medium"
                >
                  Explore website as Guest →
                </Link>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Footer Copyright */}
      <footer className="py-6 border-t border-white/[0.06] text-center text-[11px] text-neutral-500">
        <p>© {new Date().getFullYear()} R1 Moto Performance. Precision CVT Engineering & Community.</p>
      </footer>

    </div>
  );
}
