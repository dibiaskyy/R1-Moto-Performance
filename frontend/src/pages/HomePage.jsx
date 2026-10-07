import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { 
  ArrowRight, 
  Bike, 
  ShieldCheck, 
  Zap, 
  Award, 
  ShoppingBag, 
  Wrench, 
  FileText, 
  ChevronRight,
  Sparkles
} from 'lucide-react';

export default function HomePage() {
  const { openSignUp } = useAuth();

  const categories = [
    {
      title: 'Pulley Sets & Variators',
      desc: 'CNC-machined aluminum alloy with optimized ramp angles and integrated air fins.',
      badge: 'Transmission',
      path: '/catalog?category=cvt-transmission',
    },
    {
      title: 'Performance Clutch Bells',
      desc: 'Heat-treated stainless steel with linear grooves and cooling wings.',
      badge: 'High RPM',
      path: '/catalog?category=cvt-transmission',
    },
    {
      title: 'Calibrated Flyball & Springs',
      desc: 'Precision weighted roller grams (8g-15g) and 1000-1500 RPM torque springs.',
      badge: 'Tuning',
      path: '/catalog?category=cvt-tuning-calibration',
    },
    {
      title: 'Ceramic Brake Pads',
      desc: 'High thermal tolerance ceramic compound for fade-free stopping power.',
      badge: 'Braking',
      path: '/catalog?category=braking-systems',
    },
  ];

  const popularBikes = [
    { name: 'Yamaha Aerox 155', brand: 'Yamaha', engine: '155cc V1 / V2' },
    { name: 'Yamaha NMAX 155', brand: 'Yamaha', engine: '155cc Touring' },
    { name: 'Honda Click 125i / 150i', brand: 'Honda', engine: 'Game Changer' },
    { name: 'Honda PCX 160 / ADV 160', brand: 'Honda', engine: '157cc 4-Valve' },
  ];

  return (
    <div className="space-y-20 pb-20">
      
      {/* HERO SECTION */}
      <section className="relative pt-12 pb-20 lg:pt-20 lg:pb-32 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full overflow-hidden pointer-events-none -z-10">
          <div className="absolute -top-40 right-10 w-96 h-96 bg-rose-600/15 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 -left-20 w-80 h-80 bg-rose-900/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            
            {/* Tagline Badge */}
            <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-rose-950/60 border border-rose-500/30 text-rose-400 text-xs font-semibold uppercase tracking-wider mb-6">
              <Sparkles size={14} />
              <span>Engineered For Peak Performance</span>
            </div>

            <h1 className="font-display font-black text-4xl sm:text-6xl lg:text-7xl tracking-tight text-white leading-[1.08] mb-6">
              UNLEASH YOUR <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 via-rose-400 to-amber-400">
                SCOOTER'S TRUE POWER
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8 max-w-2xl">
              Precision CNC-machined CVT transmission assemblies, stainless steel clutch bells, and ceramic braking components engineered for racers, daily riders, and enthusiasts.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
              <Link
                to="/compatibility"
                className="px-6 py-3.5 bg-rose-600 hover:bg-rose-500 text-white font-semibold rounded-xl transition shadow-lg shadow-rose-900/40 flex items-center justify-center space-x-2"
              >
                <Bike size={18} />
                <span>Find Parts By Motorcycle Unit</span>
              </Link>
              <Link
                to="/dealer"
                className="px-6 py-3.5 bg-slate-900/80 hover:bg-slate-800 text-slate-200 border border-slate-700/80 font-semibold rounded-xl transition flex items-center justify-center space-x-2"
              >
                <span>Become a Dealer</span>
                <ArrowRight size={18} />
              </Link>
            </div>

            {/* Quick Metrics */}
            <div className="grid grid-cols-3 gap-6 pt-12 mt-12 border-t border-slate-800/80 max-w-lg">
              <div>
                <div className="font-display font-extrabold text-2xl text-white">100%</div>
                <div className="text-xs text-slate-400">CNC Precision</div>
              </div>
              <div>
                <div className="font-display font-extrabold text-2xl text-white">2-Way</div>
                <div className="text-xs text-slate-400">Bike Fitment Engine</div>
              </div>
              <div>
                <div className="font-display font-extrabold text-2xl text-white">B2B</div>
                <div className="text-xs text-slate-400">Wholesale Portal</div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* TWO-WAY COMPATIBILITY TEASER SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#161a24] to-[#0f121a] border border-[#262c3d] relative overflow-hidden">
          <div className="max-w-2xl">
            <span className="text-rose-500 font-bold uppercase tracking-wider text-xs">
              Interactive Fitment Engine
            </span>
            <h2 className="font-display font-black text-2xl sm:text-4xl text-white mt-2 mb-4">
              No More Guesswork. 100% Guaranteed Fitment.
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed mb-6">
              Select your motorcycle model photo to see all verified R1 performance parts, or inspect any part to view every compatible scooter.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
              {popularBikes.map((bike) => (
                <div
                  key={bike.name}
                  className="p-3 bg-slate-900/90 border border-slate-800 rounded-xl flex flex-col justify-between"
                >
                  <span className="text-[10px] font-bold text-rose-400 uppercase tracking-wide">
                    {bike.brand}
                  </span>
                  <span className="text-xs font-semibold text-white mt-1">
                    {bike.name}
                  </span>
                  <span className="text-[10px] text-slate-400 mt-0.5">
                    {bike.engine}
                  </span>
                </div>
              ))}
            </div>

            <Link
              to="/compatibility"
              className="inline-flex items-center space-x-2 text-sm font-bold text-rose-400 hover:text-rose-300 transition"
            >
              <span>Launch Full Motorcycle Unit Selector</span>
              <ChevronRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* CORE PERFORMANCE CATEGORIES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8">
          <div>
            <span className="text-rose-500 font-bold uppercase tracking-wider text-xs">
              Engineered Product Lines
            </span>
            <h2 className="font-display font-black text-2xl sm:text-4xl text-white mt-1">
              CVT Tuning & Race Components
            </h2>
          </div>
          <Link
            to="/catalog"
            className="mt-4 sm:mt-0 text-xs font-semibold text-slate-400 hover:text-rose-400 transition flex items-center space-x-1"
          >
            <span>View Complete Product Catalog</span>
            <ChevronRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.title}
              to={cat.path}
              className="p-6 rounded-2xl bg-[#141822] border border-[#222838] hover:border-rose-600/50 hover:bg-[#1a2030] transition group flex flex-col justify-between"
            >
              <div>
                <span className="inline-block px-2.5 py-1 rounded text-[10px] font-bold bg-rose-950/60 text-rose-400 border border-rose-900/40 uppercase mb-4">
                  {cat.badge}
                </span>
                <h3 className="font-display font-bold text-lg text-white group-hover:text-rose-400 transition mb-2">
                  {cat.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {cat.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center justify-between text-xs font-semibold text-slate-300 group-hover:text-white">
                <span>View Specs</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition text-rose-500" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* B2B DEALERSHIP PORTAL TEASER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-[#10141e] border border-slate-800 relative">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            
            <div className="lg:col-span-2 space-y-4">
              <span className="text-rose-500 font-bold uppercase tracking-wider text-xs">
                B2B Dealership Network
              </span>
              <h2 className="font-display font-black text-2xl sm:text-4xl text-white">
                Partner with R1 Moto Performance
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed max-w-xl">
                Expand your motorcycle shop inventory with official dealership tiers. Enjoy wholesale pricing, marketing collaterals, territory protection, and automated PDF purchase order processing.
              </p>
              
              <div className="flex flex-wrap gap-4 pt-2">
                <div className="flex items-center space-x-2 text-xs text-slate-300">
                  <ShieldCheck size={16} className="text-rose-500" />
                  <span>Wholesale Tier Pricing</span>
                </div>
                <div className="flex items-center space-x-2 text-xs text-slate-300">
                  <FileText size={16} className="text-rose-500" />
                  <span>Automated PDF Order Summary</span>
                </div>
                <div className="flex items-center space-x-2 text-xs text-slate-300">
                  <Wrench size={16} className="text-rose-500" />
                  <span>Marketing & Collateral Support</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col space-y-3 justify-center">
              <Link
                to="/dealer"
                className="w-full py-3.5 bg-rose-600 hover:bg-rose-500 text-white font-semibold rounded-xl text-center transition shadow-lg shadow-rose-950"
              >
                Apply as Dealer / Distributor
              </Link>
              <button
                onClick={openSignUp}
                className="w-full py-3 bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 font-medium rounded-xl text-xs transition"
              >
                Create Account First
              </button>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
