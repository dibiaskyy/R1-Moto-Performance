import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Bike, 
  ShoppingBag, 
  Check, 
  ShieldCheck, 
  Award, 
  Truck
} from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-[calc(100vh-5rem)] flex flex-col justify-center items-center text-neutral-100 overflow-hidden relative select-none">
      
      {/* Dynamic Crimson Glow Ambience */}
      <div className="absolute inset-0 tech-grid opacity-25 pointer-events-none -z-10"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[450px] bg-rose-600/15 rounded-full blur-[140px] pointer-events-none -z-10"></div>
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] bg-red-950/25 rounded-full blur-[100px] pointer-events-none -z-10"></div>

      {/* Main Single-Space Hero Container */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 flex flex-col items-center text-center space-y-6 sm:space-y-7 z-10">
        
        {/* BIG FULL R1 LOGO (Immediate Focal Point Above the Fold) */}
        <div className="w-full max-w-xl px-4 flex justify-center items-center">
          <img 
            src="/images/r1-logo-full.png" 
            alt="R1 Moto Performance" 
            className="w-full h-auto max-h-36 sm:max-h-48 md:max-h-56 object-contain drop-shadow-[0_25px_60px_rgba(225,29,72,0.5)] transition-transform duration-500 hover:scale-[1.02]"
          />
        </div>

        {/* CRISP MOTORSPORT TAGLINE */}
        <h2 className="text-xs sm:text-sm md:text-base font-bold tracking-[0.25em] text-rose-500 uppercase">
          Enhance your ride, Elevate your drive
        </h2>

        {/* SHORT, HIGH-IMPACT MARKETING STATEMENT */}
        <p className="text-sm sm:text-base md:text-lg text-neutral-300 leading-relaxed max-w-xl mx-auto font-normal">
          Upgrade your ride with precision performance parts built for faster acceleration, smoother power, and everyday reliability.
        </p>

        {/* PRIMARY CALL TO ACTION BUTTONS */}
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4 pt-2 w-full max-w-md mx-auto">
          <Link
            to="/catalog"
            className="w-full sm:w-auto px-8 py-3.5 bg-white hover:bg-neutral-200 text-black font-bold text-xs uppercase tracking-wider rounded-full transition-all duration-300 shadow-xl shadow-white/5 flex items-center justify-center space-x-2 group"
          >
            <ShoppingBag size={15} />
            <span>Explore Catalog</span>
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>

          <Link
            to="/compatibility"
            className="w-full sm:w-auto px-8 py-3.5 bg-white/[0.04] hover:bg-white/[0.08] text-neutral-200 hover:text-white border border-white/15 hover:border-rose-500/80 font-bold text-xs uppercase tracking-wider rounded-full transition-all duration-300 flex items-center justify-center space-x-2"
          >
            <Bike size={16} className="text-rose-500" />
            <span>Check Fitment</span>
          </Link>
        </div>

        {/* TRUST PILLARS BAR (Clean bottom accent) */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 sm:pt-8 border-t border-white/[0.08] max-w-3xl mx-auto w-full text-[11px] text-neutral-400">
          <div className="flex items-center justify-center space-x-1.5">
            <Check size={14} className="text-rose-500 flex-shrink-0" />
            <span>Guaranteed Fitment</span>
          </div>
          <div className="flex items-center justify-center space-x-1.5">
            <Check size={14} className="text-rose-500 flex-shrink-0" />
            <span>CNC Billet Precision</span>
          </div>
          <div className="flex items-center justify-center space-x-1.5">
            <Check size={14} className="text-rose-500 flex-shrink-0" />
            <span>Authorized Dealers</span>
          </div>
          <div className="flex items-center justify-center space-x-1.5">
            <Check size={14} className="text-rose-500 flex-shrink-0" />
            <span>Nationwide Logistics</span>
          </div>
        </div>

      </div>

    </div>
  );
}
