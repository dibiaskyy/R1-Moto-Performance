import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Facebook, Shield, Award, Wrench, Heart, Mail, ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#070709] border-t border-white/[0.08] text-neutral-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Top Newsletter & Brand Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-12 border-b border-white/[0.08]">
          
          <div className="lg:col-span-6 space-y-4">
            <Link to="/home" className="inline-block">
              <img
                src="/images/r1-logo-full.png"
                alt="R1 Moto Performance"
                className="h-10 w-auto object-contain drop-shadow-[0_4px_16px_rgba(225,29,72,0.4)]"
              />
            </Link>
            <p className="text-xs leading-relaxed text-neutral-400 max-w-md">
              At R1 Moto Performance, we don't just sell parts—we foster a nationwide community connecting riders, mechanics, tuners, and authorized dealerships across the Philippines.
            </p>
            <div className="pt-2">
              <a
                href="https://www.facebook.com/r1motoperformance"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center space-x-2 text-xs font-semibold text-rose-400 hover:text-rose-300 transition"
              >
                <Facebook size={15} />
                <span>facebook.com/r1motoperformance</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-3">
            <h4 className="font-heading font-bold text-white text-sm uppercase tracking-wider">
              Join the R1 Performance Club
            </h4>
            <p className="text-xs text-neutral-400">
              Subscribe for new scooter fitment updates, track test releases, and exclusive wholesale dealer catalogs.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="flex items-center gap-2 max-w-md pt-1">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-2.5 bg-white/[0.03] border border-white/10 rounded-full text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-rose-500"
              />
              <button
                type="submit"
                className="px-5 py-2.5 bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs uppercase tracking-wider rounded-full transition shadow-md shadow-rose-950 flex items-center space-x-1.5"
              >
                <span>Subscribe</span>
                <ArrowRight size={13} />
              </button>
            </form>
          </div>

        </div>

        {/* Links Navigation Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-b border-white/[0.08]">
          
          <div>
            <h5 className="font-heading font-bold text-white text-xs uppercase tracking-wider mb-4">
              Performance Parts
            </h5>
            <ul className="space-y-2.5">
              <li>
                <Link to="/catalog?category=cvt-transmission" className="hover:text-white transition">
                  CNC Pulley Sets & Drive Faces
                </Link>
              </li>
              <li>
                <Link to="/catalog?category=cvt-transmission" className="hover:text-white transition">
                  Grooved Anti-Glaze Clutch Bells
                </Link>
              </li>
              <li>
                <Link to="/catalog?category=cvt-tuning" className="hover:text-white transition">
                  Calibrated Flyball Rollers
                </Link>
              </li>
              <li>
                <Link to="/catalog?category=braking" className="hover:text-white transition">
                  Ceramic Brake Pads
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="font-heading font-bold text-white text-xs uppercase tracking-wider mb-4">
              Fitment & Support
            </h5>
            <ul className="space-y-2.5">
              <li>
                <Link to="/compatibility" className="hover:text-white transition flex items-center space-x-1.5">
                  <span>Scooter Fitment Lookup</span>
                  <span className="px-1.5 py-0.2 bg-rose-600/30 text-rose-400 rounded text-[9px] font-bold">2-WAY</span>
                </Link>
              </li>
              <li>
                <Link to="/compatibility?unit=aerox-155" className="hover:text-white transition">
                  Yamaha Aerox 155 Tuning
                </Link>
              </li>
              <li>
                <Link to="/compatibility?unit=click-125-150" className="hover:text-white transition">
                  Honda Click 125i/150i/160
                </Link>
              </li>
              <li>
                <Link to="/compatibility?unit=nmax-155" className="hover:text-white transition">
                  Yamaha NMAX 155 Specs
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="font-heading font-bold text-white text-xs uppercase tracking-wider mb-4">
              B2B Dealership
            </h5>
            <ul className="space-y-2.5">
              <li>
                <Link to="/dealer" className="hover:text-white transition">
                  Become Authorized Dealer
                </Link>
              </li>
              <li>
                <Link to="/dealer" className="hover:text-white transition">
                  Wholesale Tier Margins
                </Link>
              </li>
              <li>
                <Link to="/dealer" className="hover:text-white transition">
                  Bulk Ordering & PDF Invoicing
                </Link>
              </li>
              <li>
                <Link to="/dealer" className="hover:text-white transition">
                  Authorized Shop Directory
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="font-heading font-bold text-white text-xs uppercase tracking-wider mb-4">
              Company & Brand
            </h5>
            <ul className="space-y-2.5">
              <li>
                <Link to="/about" className="hover:text-white transition">
                  About R1 Moto Performance
                </Link>
              </li>
              <li>
                <Link to="/careers" className="hover:text-white transition">
                  Careers & Job Openings
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition">
                  Customer Support & Warranty
                </Link>
              </li>
              <li>
                <Link to="/login" className="hover:text-white transition">
                  Dealer Portal Sign In
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright & Guarantee */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-neutral-500 gap-4">
          <p>© {new Date().getFullYear()} R1 Moto Performance. All Rights Reserved. Engineered for the Peak.</p>
          <div className="flex items-center space-x-4">
            <span className="flex items-center space-x-1 text-neutral-400">
              <Shield size={12} className="text-rose-500" />
              <span>100% Genuine Performance Guarantee</span>
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}
