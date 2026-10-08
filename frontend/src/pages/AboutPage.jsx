import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Shield, Target, Compass, MapPin, ExternalLink, ShoppingBag, Facebook, CheckCircle2, Award, Phone, Mail } from 'lucide-react';

export default function AboutPage() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  const onlineStores = [
    {
      name: 'Official Shopee Mall',
      desc: '100% Genuine Guarantee, Shopee Pay, Free Shipping Vouchers, and COD nationwide.',
      badge: 'Shopee Certified',
      link: 'https://shopee.ph',
      icon: '🛍️'
    },
    {
      name: 'Official Lazada Flagship Store',
      desc: 'LazMall guaranteed authenticity, priority courier handling, and direct installment plans.',
      badge: 'LazMall Verified',
      link: 'https://lazada.com.ph',
      icon: '⚡'
    },
    {
      name: 'Official TikTok Shop',
      desc: 'Live unboxing demonstrations, dyno testing clips, and exclusive live flash vouchers.',
      badge: 'TikTok Verified',
      link: 'https://tiktok.com',
      icon: '📱'
    },
    {
      name: 'Official Facebook Marketplace & Page',
      desc: 'Direct customer service, dealer inquiry support, and local rider community updates.',
      badge: 'Official FB Page',
      link: 'https://www.facebook.com/r1motoperformance',
      icon: '💬'
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16 text-neutral-100">
      
      {/* Top Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-neutral-400 text-[11px] font-semibold uppercase tracking-widest">
          <span className="w-1.5 h-1.5 rounded-full bg-rose-500"></span>
          <span>ABOUT R1 MOTO PERFORMANCE</span>
        </div>

        <h1 className="font-heading font-extrabold text-3xl sm:text-5xl text-white uppercase tracking-tight">
          Engineered for the Peak, Driven by Community
        </h1>

        <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">
          At R1 Moto, we don't just engineer parts—we foster an interconnected nationwide network connecting riders, mechanics, scouts, and dealerships across the Philippines.
        </p>
      </div>

      {/* =========================================================================
          SECTION 1: MISSION & VISION
          ========================================================================= */}
      <section id="mission" className="scroll-mt-24 space-y-8">
        <div className="text-center max-w-xl mx-auto">
          <span className="text-rose-500 font-bold uppercase tracking-widest text-xs">Core Purpose</span>
          <h2 className="font-heading font-bold text-2xl sm:text-3xl text-white uppercase mt-1">
            Mission & Vision
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mission Card */}
          <div className="p-8 rounded-3xl bg-[#0f0f14] border border-white/10 shadow-xl space-y-4 relative overflow-hidden">
            <div className="w-12 h-12 rounded-2xl bg-rose-600/10 border border-rose-500/20 text-rose-500 flex items-center justify-center">
              <Target size={24} />
            </div>
            <h3 className="font-heading font-bold text-xl text-white uppercase">Our Mission</h3>
            <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">
              To provide Filipino riders and professional mechanics with racing-grade, precision-machined CVT transmission and braking components that deliver instant throttle response, zero shudder, and absolute reliability under everyday road conditions and high-RPM track demands.
            </p>
            <div className="space-y-2 pt-2">
              <div className="flex items-center space-x-2 text-xs text-neutral-300">
                <CheckCircle2 size={15} className="text-rose-500 flex-shrink-0" />
                <span>100% Plug-and-play fitment validation on local scooter chassis</span>
              </div>
              <div className="flex items-center space-x-2 text-xs text-neutral-300">
                <CheckCircle2 size={15} className="text-rose-500 flex-shrink-0" />
                <span>Fair pricing and sustainable profit margins for motorcycle repair shops</span>
              </div>
            </div>
          </div>

          {/* Vision Card */}
          <div className="p-8 rounded-3xl bg-[#0f0f14] border border-white/10 shadow-xl space-y-4 relative overflow-hidden">
            <div className="w-12 h-12 rounded-2xl bg-white/[0.05] border border-white/10 text-rose-500 flex items-center justify-center">
              <Compass size={24} />
            </div>
            <h3 className="font-heading font-bold text-xl text-white uppercase">Our Vision</h3>
            <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">
              To be the premier performance motorcycle tuning brand in Southeast Asia, celebrated for technical excellence, authentic rider community empowerment, and transparent engineering standards that raise the bar for the entire motorcycle aftermarket industry.
            </p>
            <div className="space-y-2 pt-2">
              <div className="flex items-center space-x-2 text-xs text-neutral-300">
                <CheckCircle2 size={15} className="text-rose-500 flex-shrink-0" />
                <span>Nationwide dealer distribution across Luzon, Visayas, and Mindanao</span>
              </div>
              <div className="flex items-center space-x-2 text-xs text-neutral-300">
                <CheckCircle2 size={15} className="text-rose-500 flex-shrink-0" />
                <span>Continuous grassroots racing sponsorships and mechanical talent development</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: LOCATION & HEADQUARTERS
          ========================================================================= */}
      <section id="location" className="scroll-mt-24 space-y-8">
        <div className="text-center max-w-xl mx-auto">
          <span className="text-rose-500 font-bold uppercase tracking-widest text-xs">Physical Presence</span>
          <h2 className="font-heading font-bold text-2xl sm:text-3xl text-white uppercase mt-1">
            Headquarters & Distribution Hub
          </h2>
        </div>

        <div className="p-8 sm:p-10 rounded-3xl bg-[#0f0f14] border border-white/10 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-5">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-rose-600/20 text-rose-400 text-[11px] font-bold uppercase">
              <MapPin size={13} />
              <span>Central Distribution Warehouse</span>
            </div>

            <h3 className="font-heading font-bold text-xl sm:text-2xl text-white">
              Metro Manila Logistics & Tuning Lab
            </h3>

            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
              Our central hub houses our precision inspection facility, dyno testing bench, wholesale inventory storage, and customer support team. Orders placed before 2:00 PM are dispatched on the same business day.
            </p>

            <div className="space-y-3 pt-2 text-xs text-neutral-300">
              <div className="flex items-start space-x-3">
                <MapPin size={16} className="text-rose-500 flex-shrink-0 mt-0.5" />
                <span>128 Performance Boulevard, Automotive Hub, Quezon City, Metro Manila, Philippines 1100</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-rose-500 flex-shrink-0" />
                <span>+63 (2) 8892-R1MOTO / +63 917 123 4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-rose-500 flex-shrink-0" />
                <span>support@r1motoperformance.com / dealers@r1motoperformance.com</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 h-64 sm:h-80 rounded-2xl bg-[#08080b] border border-white/10 p-6 flex flex-col justify-center items-center text-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-radial-gradient from-rose-600/10 to-transparent blur-2xl"></div>
            <MapPin size={40} className="text-rose-500 mb-3 animate-bounce" />
            <h4 className="font-heading font-bold text-base text-white">Philippines Nationwide Coverage</h4>
            <p className="text-xs text-neutral-400 max-w-xs mt-1">
              Direct delivery across Metro Manila (1-2 days) and provincial Luzon, Visayas, Mindanao (3-5 days via verified express couriers).
            </p>
            <div className="mt-4 px-4 py-2 rounded-full bg-white/[0.05] border border-white/10 text-[11px] font-semibold text-neutral-300">
              Operating Hours: Monday – Saturday (8:00 AM – 6:00 PM PHT)
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: ONLINE SHOP LINKS
          ========================================================================= */}
      <section id="stores" className="scroll-mt-24 space-y-8">
        <div className="text-center max-w-xl mx-auto">
          <span className="text-rose-500 font-bold uppercase tracking-widest text-xs">Official Channels</span>
          <h2 className="font-heading font-bold text-2xl sm:text-3xl text-white uppercase mt-1">
            Online Shop Links
          </h2>
          <p className="text-xs text-neutral-400 mt-1">
            Beware of counterfeit parts. Purchase only through our official verified stores and authorized regional dealers.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {onlineStores.map((store) => (
            <a
              key={store.name}
              href={store.link}
              target="_blank"
              rel="noreferrer"
              className="p-6 rounded-2xl bg-[#0f0f14] border border-white/[0.08] hover:border-rose-500/50 hover:bg-[#131319] transition-all duration-300 flex flex-col justify-between shadow-xl group"
            >
              <div>
                <div className="text-2xl mb-3">{store.icon}</div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-rose-400">
                  {store.badge}
                </span>
                <h3 className="font-heading font-bold text-sm text-white group-hover:text-rose-400 transition mt-1 mb-2">
                  {store.name}
                </h3>
                <p className="text-[11px] text-neutral-400 leading-relaxed">
                  {store.desc}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-white/[0.06] flex items-center justify-between text-xs font-semibold text-neutral-400 group-hover:text-white transition">
                <span>Visit Official Store</span>
                <ExternalLink size={13} className="text-rose-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </a>
          ))}
        </div>
      </section>

    </div>
  );
}
