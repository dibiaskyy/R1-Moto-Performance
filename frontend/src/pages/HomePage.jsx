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
  Sparkles,
  Facebook,
  ExternalLink,
  CheckCircle2,
  Layers,
  FileCheck
} from 'lucide-react';

export default function HomePage() {
  const { user, role, isAuthenticated } = useAuth();

  const scooterUnits = [
    { name: 'Yamaha Aerox 155', brand: 'Yamaha', engine: '155cc 4-Valve VVA V1 / V2', badge: 'High Performance' },
    { name: 'Yamaha NMAX 155', brand: 'Yamaha', engine: '155cc Touring ABS / Non-ABS', badge: 'Touring' },
    { name: 'Honda Click 125i / 150i', brand: 'Honda', engine: 'Game Changer Liquid-Cooled', badge: 'Urban Commute' },
    { name: 'Honda PCX 160 / ADV 160', brand: 'Honda', engine: '157cc eSP+ 4-Valve Engine', badge: 'Maxi Scooter' },
  ];

  const quickPortals = [
    {
      title: 'Product Catalog',
      desc: 'Browse our full lineup of CNC variators, grooved clutch bells, springs, and ceramic pads.',
      icon: ShoppingBag,
      link: '/catalog',
      badge: 'Full Lineup',
      color: 'rose',
    },
    {
      title: 'Bike Fitment Engine',
      desc: 'Two-way verified fitment: select your motorcycle model to see all guaranteed compatible parts.',
      icon: Bike,
      link: '/compatibility',
      badge: 'Interactive',
      color: 'sky',
    },
    {
      title: 'Become a Dealer / Distributor',
      desc: 'Access exclusive wholesale pricing tiers, order selection, and automated PDF purchase order processing.',
      icon: FileCheck,
      link: '/dealer',
      badge: 'B2B Wholesale',
      color: 'emerald',
    },
    {
      title: 'Company Story & Community',
      desc: 'Explore our racing heritage, community initiatives, and direct Facebook rider channels.',
      icon: Layers,
      link: '/about',
      badge: 'About R1',
      color: 'amber',
    },
  ];

  return (
    <div className="space-y-20 pb-20">
      
      {/* HERO SECTION (Dashboard Overview - No Product Cards) */}
      <section className="relative pt-10 pb-16 lg:pt-16 lg:pb-24 overflow-hidden">
        {/* Ambient Glows */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full overflow-hidden pointer-events-none -z-10">
          <div className="absolute -top-32 right-12 w-[500px] h-[500px] bg-rose-600/15 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 -left-32 w-[450px] h-[450px] bg-rose-950/20 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-6">
            
            {/* FULL R1 LOGO (Homepage displays full logo) */}
            <div>
              <img 
                src="/images/r1-logo-full.png" 
                alt="R1 Moto Performance" 
                className="h-16 sm:h-22 md:h-24 w-auto object-contain drop-shadow-[0_10px_25px_rgba(225,29,72,0.4)]"
              />
            </div>

            {/* Tagline Badge */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-rose-950/70 border border-rose-500/40 text-rose-400 text-xs font-bold uppercase tracking-wider">
              <Sparkles size={14} className="text-amber-400" />
              <span>Official R1 Moto Performance</span>
            </div>

            {/* PRIMARY TAGLINE */}
            <h1 className="font-display font-black text-4xl sm:text-6xl lg:text-6xl tracking-tight text-white leading-[1.08]">
              Enhance your ride, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 via-rose-400 to-amber-400">
                Elevate your drive.
              </span>
            </h1>

            {/* Brand Paragraph */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
              Precision CNC-machined CVT transmission assemblies, stainless steel clutch bells, and ceramic braking components engineered for racers, daily riders, and enthusiasts.
            </p>

            {/* Quick Navigation Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 pt-2">
              <Link
                to="/compatibility"
                className="px-6 py-3.5 bg-rose-600 hover:bg-rose-500 text-white font-bold rounded-xl transition shadow-lg shadow-rose-900/50 flex items-center justify-center space-x-2 group"
              >
                <Bike size={20} />
                <span>Find Parts By Motorcycle Unit</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition" />
              </Link>
              <Link
                to="/catalog"
                className="px-6 py-3.5 bg-slate-900/90 hover:bg-slate-800 text-slate-200 border border-slate-700/80 font-semibold rounded-xl transition flex items-center justify-center space-x-2"
              >
                <ShoppingBag size={18} className="text-rose-400" />
                <span>Open Product Catalog</span>
              </Link>
            </div>

            {/* Quick Metrics */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-slate-800/80 max-w-lg">
              <div>
                <div className="font-display font-extrabold text-2xl text-white">100%</div>
                <div className="text-xs text-slate-400 mt-0.5">CNC Precision</div>
              </div>
              <div>
                <div className="font-display font-extrabold text-2xl text-white">2-Way</div>
                <div className="text-xs text-slate-400 mt-0.5">Fitment Engine</div>
              </div>
              <div>
                <div className="font-display font-extrabold text-2xl text-white">B2B</div>
                <div className="text-xs text-slate-400 mt-0.5">Dealer Network</div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* QUICK DASHBOARD PORTAL CARDS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {quickPortals.map((portal) => {
            const Icon = portal.icon;
            return (
              <Link
                key={portal.title}
                to={portal.link}
                className="p-6 rounded-2xl bg-[#121622] border border-[#222838] hover:border-rose-600/50 hover:bg-[#181d2a] transition group flex flex-col justify-between shadow-lg"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-slate-900 flex items-center justify-center text-rose-500 mb-4 group-hover:scale-105 transition">
                    <Icon size={24} />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-rose-400">
                    {portal.badge}
                  </span>
                  <h3 className="font-display font-bold text-lg text-white group-hover:text-rose-400 transition mt-1 mb-2">
                    {portal.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {portal.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/70 flex items-center justify-between text-xs font-semibold text-slate-300 group-hover:text-white">
                  <span>Enter Portal</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition text-rose-500" />
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* TWO-WAY COMPATIBILITY TEASER SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#161a24] to-[#0f121a] border border-[#262c3d] relative overflow-hidden">
          <div className="max-w-3xl space-y-4">
            <span className="text-rose-500 font-bold uppercase tracking-wider text-xs">
              Interactive Fitment Engine
            </span>
            <h2 className="font-display font-black text-2xl sm:text-4xl text-white">
              No More Guesswork. 100% Guaranteed Fitment.
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              Our 2-way compatibility engine verifies exact parts fitment for your motorcycle: select your scooter model to see all matching R1 components, or click any performance part to inspect every compatible bike model.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              {scooterUnits.map((bike) => (
                <div
                  key={bike.name}
                  className="p-4 bg-slate-900/90 border border-slate-800 rounded-xl flex flex-col justify-between"
                >
                  <span className="text-[10px] font-bold text-rose-400 uppercase tracking-wide">
                    {bike.brand}
                  </span>
                  <span className="text-xs font-semibold text-white mt-1">
                    {bike.name}
                  </span>
                  <span className="text-[10px] text-slate-400 mt-1">
                    {bike.engine}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <Link
                to="/compatibility"
                className="inline-flex items-center space-x-2 px-6 py-3.5 bg-rose-600 hover:bg-rose-500 text-white rounded-xl text-xs font-bold transition shadow-lg shadow-rose-950"
              >
                <span>Launch Interactive Motorcycle Unit Selector</span>
                <ChevronRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* AUTHENTIC BRAND STORY (About Us) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-[#10141e] border border-slate-800 space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800/80 pb-6">
            <div>
              <span className="text-rose-500 font-bold uppercase tracking-wider text-xs">
                About R1 Moto Performance
              </span>
              <h2 className="font-display font-black text-2xl sm:text-3xl text-white mt-1">
                More Than Just Parts — We Foster a Community
              </h2>
            </div>
            <a
              href="https://www.facebook.com/r1motoperformance"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center space-x-2 text-xs font-semibold text-rose-400 hover:text-rose-300 transition"
            >
              <Facebook size={16} />
              <span>facebook.com/r1motoperformance</span>
              <ExternalLink size={12} />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-slate-300 leading-relaxed">
            <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800/80 space-y-2">
              <div className="font-bold text-white text-sm flex items-center space-x-2">
                <CheckCircle2 size={16} className="text-rose-500" />
                <span>Premier Performance Hub</span>
              </div>
              <p>
                R1 Moto Performance is a premier hub for motorcycle enthusiasts and riders seeking high-quality performance parts and accessories. Our passion for motorcycles drives us to provide products that combine innovation, durability, and precision engineering, ensuring every ride is smoother, safer, and more exciting.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800/80 space-y-2">
              <div className="font-bold text-white text-sm flex items-center space-x-2">
                <CheckCircle2 size={16} className="text-rose-500" />
                <span>Rider & Mechanic Network</span>
              </div>
              <p>
                At R1 Moto, we don't just sell parts—we foster a community. We aim to connect riders, mechanics, scouts, and potential dealerships, creating opportunities for collaboration, networking, and shared knowledge across the racing and touring community.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800/80 space-y-2">
              <div className="font-bold text-white text-sm flex items-center space-x-2">
                <CheckCircle2 size={16} className="text-rose-500" />
                <span>Excellence on the Road</span>
              </div>
              <p>
                Through partnerships with media and industry leaders, we continually strive to increase brand awareness and recognition while maintaining our commitment to excellence. Whether you're upgrading your bike, seeking expert advice, or exploring new riding experiences, R1 Moto Performance is dedicated to helping you reach peak performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* B2B DEALERSHIP PORTAL TEASER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#121622] to-[#0a0d14] border border-[#202738] relative">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            
            <div className="lg:col-span-2 space-y-4">
              <span className="text-rose-500 font-bold uppercase tracking-wider text-xs">
                B2B Dealership & Distribution
              </span>
              <h2 className="font-display font-black text-2xl sm:text-4xl text-white">
                Become an Authorized R1 Dealer
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed max-w-xl">
                Expand your motorcycle shop inventory with official dealership tiers. Enjoy wholesale pricing, marketing collaterals, territory protection, and automated PDF purchase order processing.
              </p>
              
              <div className="flex flex-wrap gap-4 pt-2">
                <div className="flex items-center space-x-2 text-xs text-slate-300">
                  <ShieldCheck size={16} className="text-rose-500" />
                  <span>Wholesale Tier Margins</span>
                </div>
                <div className="flex items-center space-x-2 text-xs text-slate-300">
                  <FileText size={16} className="text-rose-500" />
                  <span>Automated PDF Orders</span>
                </div>
                <div className="flex items-center space-x-2 text-xs text-slate-300">
                  <Wrench size={16} className="text-rose-500" />
                  <span>Direct Technical Backing</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col space-y-3 justify-center">
              <Link
                to="/dealer"
                className="w-full py-3.5 bg-rose-600 hover:bg-rose-500 text-white font-bold rounded-xl text-center text-sm transition shadow-lg shadow-rose-950"
              >
                Apply as Dealer / Distributor
              </Link>
              <Link
                to="/catalog"
                className="w-full py-3 bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 font-medium rounded-xl text-xs text-center transition"
              >
                View Product Catalog
              </Link>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
