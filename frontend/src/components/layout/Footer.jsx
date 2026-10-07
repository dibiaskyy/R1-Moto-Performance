import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Facebook, Shield, Award, Wrench, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#070a10] border-t border-[#1a1f2b] text-slate-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          
          {/* Brand & Community Mission */}
          <div className="space-y-4 md:col-span-1">
            <Link to="/" className="inline-block">
              <img
                src="/images/r1-logo-full.png"
                alt="R1 Moto Performance"
                className="h-10 w-auto object-contain drop-shadow-[0_4px_12px_rgba(225,29,72,0.35)]"
              />
            </Link>
            <p className="text-xs leading-relaxed text-slate-400">
              At R1 Moto, we don't just sell parts—we foster a community connecting riders, mechanics, scouts, and dealerships across the Philippines.
            </p>
            <div className="pt-1">
              <a
                href="https://www.facebook.com/r1motoperformance"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center space-x-2 text-xs font-semibold text-rose-400 hover:text-rose-300 transition"
              >
                <Facebook size={16} />
                <span>facebook.com/r1motoperformance</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-white text-sm uppercase tracking-wider mb-4">
              Explore Products
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link to="/catalog?category=cvt-transmission" className="hover:text-rose-400 transition">
                  Pulley Sets & Clutch Bells
                </Link>
              </li>
              <li>
                <Link to="/catalog?category=cvt-tuning-calibration" className="hover:text-rose-400 transition">
                  Flyball & Torque Springs
                </Link>
              </li>
              <li>
                <Link to="/catalog?category=braking-systems" className="hover:text-rose-400 transition">
                  Ceramic Brake Pads
                </Link>
              </li>
              <li>
                <Link to="/compatibility" className="hover:text-rose-400 transition flex items-center space-x-1">
                  <span>Bike Fitment Finder</span>
                  <span className="px-1.5 py-0.5 text-[9px] bg-rose-600/30 text-rose-400 rounded">NEW</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Dealership & Careers */}
          <div>
            <h4 className="font-display font-bold text-white text-sm uppercase tracking-wider mb-4">
              Opportunities
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link to="/dealer" className="hover:text-rose-400 transition">
                  Become an Authorized Dealer
                </Link>
              </li>
              <li>
                <Link to="/dealer#perks" className="hover:text-rose-400 transition">
                  Dealer Perks & Tier Margins
                </Link>
              </li>
              <li>
                <Link to="/careers" className="hover:text-rose-400 transition">
                  Join Our Team (Careers)
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-rose-400 transition">
                  Technical Support & Warranty
                </Link>
              </li>
            </ul>
          </div>

          {/* Official Marketplace Stores */}
          <div>
            <h4 className="font-display font-bold text-white text-sm uppercase tracking-wider mb-4">
              Official Store Links
            </h4>
            <p className="text-xs text-slate-400 mb-3">
              Buy directly from our verified partner stores with genuine warranty:
            </p>
            <div className="flex flex-col space-y-2">
              <a
                href="https://shopee.ph"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-between p-2.5 bg-slate-900 border border-slate-800 rounded-lg text-xs text-slate-200 hover:border-orange-500/50 hover:text-white transition"
              >
                <span>Shopee Official Mall</span>
                <ExternalLink size={14} className="text-orange-500" />
              </a>
              <a
                href="https://lazada.com.ph"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-between p-2.5 bg-slate-900 border border-slate-800 rounded-lg text-xs text-slate-200 hover:border-sky-500/50 hover:text-white transition"
              >
                <span>Lazada LazMall Flagship</span>
                <ExternalLink size={14} className="text-sky-500" />
              </a>
            </div>
          </div>

        </div>

        <div className="mt-12 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500">
          <p>© {new Date().getFullYear()} R1 Moto Performance. All rights reserved.</p>
          <p className="mt-2 sm:mt-0">
            Crafted for high-performance scooter racing and touring.
          </p>
        </div>
      </div>
    </footer>
  );
}
