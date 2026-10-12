import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Facebook, Shield, Award, Wrench, Heart, Mail, ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#070709] border-t border-white/[0.08] text-neutral-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Brand Overview & Official Channels */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-12 border-b border-white/[0.08]">
          <div className="lg:col-span-5 space-y-4">
            <Link to="/home" className="inline-block">
              <img
                src="/images/r1-logo-full.png"
                alt="R1 Moto Performance"
                className="h-10 w-auto object-contain drop-shadow-[0_4px_16px_rgba(225,29,72,0.4)]"
              />
            </Link>
            <p className="text-xs leading-relaxed text-neutral-400 max-w-sm">
              R1 Moto Performance provides high-quality motorcycle performance parts and accessories, fostering a community of riders, mechanics, and partner shops across the Philippines.
            </p>
            <div className="text-xs text-neutral-400 font-mono">
              <span>506 Boni Ave, Mandaluyong, Philippines</span>
            </div>
          </div>

          {/* Official Stores Column */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div>
              <h5 className="font-heading font-bold text-white text-xs uppercase tracking-wider mb-4">
                Official Stores
              </h5>
              <ul className="space-y-3">
                <li>
                  <a
                    href="https://shopee.ph/r1motoperformanceph"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-white transition flex items-center space-x-2.5 group"
                  >
                    <div className="w-5 h-5 rounded-md bg-[#EE4D2D]/10 border border-[#EE4D2D]/30 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none">
                        <path
                          d="M19 7H16.5C16.3 4.2 14.4 2 12 2C9.6 2 7.7 4.2 7.5 7H5C3.9 7 3 7.9 3 9L4.4 20C4.5 21.1 5.4 22 6.5 22H17.5C18.6 22 19.5 21.1 19.6 20L21 9C21 7.9 20.1 7 19 7ZM12 4C13.3 4 14.4 5.3 14.5 7H9.5C9.6 5.3 10.7 4 12 4ZM17.6 20H6.4L5.2 9H7.5V11C7.5 11.6 7.9 12 8.5 12C9.1 12 9.5 11.6 9.5 11V9H14.5V11C14.5 11.6 14.9 12 15.5 12C16.1 12 16.5 11.6 16.5 11V9H18.8L17.6 20Z"
                          fill="#EE4D2D"
                        />
                        <path
                          d="M12.5 13.5C11.4 13.5 10.8 13.9 10.8 14.4C10.8 15.3 13.6 15.4 13.6 17.1C13.6 18.2 12.6 19 11.4 19C10.1 19 9.5 18.2 9.4 17.5H10.5C10.6 17.8 10.9 18.1 11.4 18.1C12 18.1 12.5 17.7 12.5 17.2C12.5 16.2 9.7 16.1 9.7 14.5C9.7 13.4 10.7 12.6 11.9 12.6C13.1 12.6 13.6 13.3 13.6 13.9H12.5C12.5 13.6 12.2 13.5 12.5 13.5Z"
                          fill="#EE4D2D"
                        />
                      </svg>
                    </div>
                    <span className="group-hover:text-[#EE4D2D] transition-colors font-medium">Shopee PH</span>
                    <ExternalLink size={12} className="text-neutral-500 group-hover:text-[#EE4D2D]" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.tiktok.com/@r1motoperformance"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-white transition flex items-center space-x-2.5 group"
                  >
                    <div className="w-5 h-5 rounded-md bg-white/[0.05] border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none">
                        <path
                          d="M19.5 7.05C18.14 7.04 16.96 6.3 16.32 5.22C16.03 4.74 15.86 4.18 15.84 3.59H12.72V15.2C12.72 17.13 11.16 18.69 9.23 18.69C7.3 18.69 5.74 17.13 5.74 15.2C5.74 13.27 7.3 11.71 9.23 11.71C9.65 11.71 10.05 11.79 10.42 11.93V8.75C10.03 8.7 9.63 8.67 9.23 8.67C5.62 8.67 2.7 11.59 2.7 15.2C2.7 18.81 5.62 21.73 9.23 21.73C12.84 21.73 15.76 18.81 15.76 15.2V9.82C17.06 10.75 18.66 11.31 20.39 11.31V8.27C20.08 8.27 19.78 8.24 19.5 8.16V7.05Z"
                          fill="#FFFFFF"
                        />
                        <path
                          d="M16.32 5.22C16.96 6.3 18.14 7.04 19.5 7.05V5.5C18.14 5.5 16.96 4.76 16.32 3.68V5.22Z"
                          fill="#00F2FE"
                        />
                        <path
                          d="M15.76 9.82V15.2C15.76 18.81 12.84 21.73 9.23 21.73V20.25C12.02 20.25 14.28 17.99 14.28 15.2V8.34C14.81 8.86 15.42 9.3 16.09 9.64C15.98 9.7 15.87 9.76 15.76 9.82Z"
                          fill="#FE2C55"
                        />
                      </svg>
                    </div>
                    <span className="group-hover:text-[#00F2FE] transition-colors font-medium">TikTok Shop</span>
                    <ExternalLink size={12} className="text-neutral-500 group-hover:text-[#00F2FE]" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/r1motoperformance/directory_basic_info"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-white transition flex items-center space-x-2.5 group"
                  >
                    <div className="w-5 h-5 rounded-md bg-[#1877F2]/10 border border-[#1877F2]/30 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="#1877F2">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    </div>
                    <span className="group-hover:text-[#1877F2] transition-colors font-medium">Facebook Page</span>
                    <ExternalLink size={12} className="text-neutral-500 group-hover:text-[#1877F2]" />
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="font-heading font-bold text-white text-xs uppercase tracking-wider mb-4">
                Explore
              </h5>
              <ul className="space-y-2.5">
                <li>
                  <Link to="/catalog" className="hover:text-white transition">
                    Product Catalog
                  </Link>
                </li>
                <li>
                  <Link to="/compatibility" className="hover:text-white transition">
                    Motor Compatibility
                  </Link>
                </li>
                <li>
                  <Link to="/dealer" className="hover:text-white transition">
                    Authorized Dealers
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="font-heading font-bold text-white text-xs uppercase tracking-wider mb-4">
                Company
              </h5>
              <ul className="space-y-2.5">
                <li>
                  <Link to="/about" className="hover:text-white transition">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/about#mission" className="hover:text-white transition">
                    Mission & Vision
                  </Link>
                </li>
                <li>
                  <Link to="/about#location" className="hover:text-white transition">
                    Where to Find Us
                  </Link>
                </li>
              </ul>
            </div>
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
