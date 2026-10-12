import React, { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { 
  Shield, 
  Target, 
  Compass, 
  MapPin, 
  ExternalLink, 
  ShoppingBag, 
  Facebook, 
  CheckCircle2, 
  Award, 
  Phone, 
  Mail, 
  ArrowRight,
  Gauge,
  Flame,
  Wrench,
  Users,
  Building,
  Navigation
} from 'lucide-react';

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
      name: 'Official Shopee Store',
      desc: '100% Genuine Guarantee, Shopee Pay vouchers, verified 5-star rider reviews, and priority logistics dispatch.',
      badge: 'Shopee Mall / Official',
      link: 'https://shopee.ph/r1motoperformanceph',
      platform: 'shopee',
      btnText: 'Shop on Shopee PH',
      brandColor: '#EE4D2D',
      brandBg: 'rgba(238, 77, 45, 0.1)',
      brandBorder: 'rgba(238, 77, 45, 0.3)'
    },
    {
      name: 'Official TikTok Shop',
      desc: 'Watch installations, product reveals, test ride updates, and grab exclusive TikTok checkout discounts.',
      badge: 'Official TikTok Shop',
      link: 'https://www.tiktok.com/@r1motoperformance',
      platform: 'tiktok',
      btnText: 'Follow on TikTok',
      brandColor: '#00F2FE',
      brandBg: 'rgba(0, 242, 254, 0.1)',
      brandBorder: 'rgba(0, 242, 254, 0.3)'
    },
    {
      name: 'Official Facebook Hub',
      desc: 'Connect with local riding clubs, find verified partner mechanic shops, and get direct product announcements.',
      badge: 'Verified Page',
      link: 'https://www.facebook.com/r1motoperformance/directory_basic_info',
      platform: 'facebook',
      btnText: 'Visit Facebook Page',
      brandColor: '#1877F2',
      brandBg: 'rgba(24, 119, 242, 0.1)',
      brandBorder: 'rgba(24, 119, 242, 0.3)'
    },
  ];

  const brandPillars = [
    {
      icon: <Shield className="text-rose-500" size={24} />,
      title: 'High Quality & Durable',
      desc: 'Built with durable materials designed to last and handle daily road riding.'
    },
    {
      icon: <Flame className="text-rose-500" size={24} />,
      title: 'Tested For Daily Rides',
      desc: 'Made to keep your motorcycle running smooth even in heavy traffic and heat.'
    },
    {
      icon: <Wrench className="text-rose-500" size={24} />,
      title: 'Easy Fit For Your Bike',
      desc: 'Direct fitment for popular scooters like Aerox, NMAX, Click, and more.'
    },
    {
      icon: <Users className="text-rose-500" size={24} />,
      title: 'Trusted By Riders',
      desc: 'Supported by riders, mechanics, and partner shops nationwide.'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-20 text-neutral-100">
      
      {/* =========================================================================
          ABOUT US OVERVIEW & BRAND STORY
          ========================================================================= */}
      <section className="relative rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-b from-[#14141d] via-[#0d0d13] to-[#09090d] p-8 sm:p-12 lg:p-16 shadow-2xl">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-rose-600/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-6">
            <h1 className="font-heading font-black text-3xl sm:text-5xl text-white uppercase tracking-tight">
              About Us
            </h1>

            <div className="space-y-4 text-sm sm:text-base text-neutral-300 leading-relaxed">
              <p>
                <strong className="text-white">R1 Moto Performance</strong> is a premier hub for motorcycle enthusiasts and riders seeking high-quality performance parts and accessories. Our passion for motorcycles drives us to provide products that combine innovation, durability, and precision engineering—ensuring every ride is smoother, safer, and more exciting.
              </p>
              <p className="text-neutral-400">
                At R1 Moto, we don't just sell parts—we foster a community. We aim to connect riders, mechanics, scouts, and potential dealerships, creating opportunities for collaboration, networking, and shared knowledge. Through partnerships with media and industry leaders, we continually strive to increase brand awareness and recognition, while maintaining our commitment to excellence in every product we offer.
              </p>
              <p className="text-neutral-400 italic border-l-2 border-rose-500 pl-4 py-1">
                Whether you're upgrading your bike, seeking expert advice, or exploring new riding experiences, R1 Moto Performance is dedicated to helping you reach peak performance and enjoy every moment on the road.
              </p>
            </div>

            <div className="pt-2 flex flex-wrap gap-4 items-center">
              <Link
                to="/catalog"
                className="px-6 py-3 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs uppercase tracking-wider transition shadow-lg shadow-rose-950 flex items-center space-x-2"
              >
                <ShoppingBag size={14} />
                <span>Explore Catalog</span>
              </Link>
              <Link
                to="/compatibility"
                className="px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-neutral-200 hover:text-white border border-white/10 font-bold text-xs uppercase tracking-wider transition flex items-center space-x-2"
              >
                <span>Check Motor Fitment</span>
              </Link>
              <a
                href="#location"
                className="text-xs text-neutral-400 hover:text-rose-400 font-mono tracking-wider transition inline-flex items-center space-x-1.5"
              >
                <MapPin size={13} />
                <span>Visit Mandaluyong Hub</span>
              </a>
            </div>
          </div>

          {/* Sleek Motorsport Brand Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl p-8 sm:p-9 bg-gradient-to-b from-[#161622] via-[#0f0f17] to-[#0a0a0f] border border-white/10 shadow-2xl space-y-6 overflow-hidden group">
              <div className="absolute top-0 right-0 w-44 h-44 bg-rose-600/10 rounded-full blur-3xl group-hover:bg-rose-600/20 transition-all pointer-events-none"></div>

              {/* Logo Presentation Showcase */}
              <div className="relative p-6 rounded-2xl bg-white/[0.02] border border-white/10 flex items-center justify-center backdrop-blur-sm group-hover:border-rose-500/30 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-r from-rose-500/5 to-transparent rounded-2xl pointer-events-none"></div>
                <img
                  src="/images/r1-logo-full.png"
                  alt="R1 Moto Performance"
                  className="h-11 sm:h-12 w-auto object-contain drop-shadow-md group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Information Tiles */}
              <div className="space-y-3.5">
                <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.08] hover:border-white/20 transition flex items-start space-x-3.5">
                  <div className="w-10 h-10 rounded-xl bg-rose-600/10 border border-rose-500/20 text-rose-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Shield size={18} />
                  </div>
                  <div>
                    <div className="font-heading font-bold text-white text-sm uppercase tracking-wide">
                      Official R1 Moto Equipment
                    </div>
                    <div className="text-neutral-400 text-xs mt-1 leading-relaxed">
                      High-grade motorcycle performance parts, lubricants, and precision transmission tuning.
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.08] hover:border-white/20 transition flex items-start space-x-3.5">
                  <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 text-rose-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <div className="font-heading font-bold text-white text-sm uppercase tracking-wide">
                      Centrally Based in the Philippines
                    </div>
                    <div className="text-neutral-400 text-xs mt-1 leading-relaxed">
                      506 Boni Ave, Mandaluyong facility supporting nationwide riders and certified partner shops.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 1: MISSION & VISION (HIGH IMPACT COMMERCIAL CARDS)
          ========================================================================= */}
      <section id="mission" className="scroll-mt-24 space-y-10">
        <div className="text-center max-w-xl mx-auto space-y-3">
          <span className="text-rose-500 font-bold uppercase tracking-widest text-xs font-mono">Foundational Pillars</span>
          <h2 className="font-heading font-black text-3xl sm:text-4xl text-white uppercase tracking-tight">
            Our Vision & Mission
          </h2>
          <p className="text-xs sm:text-sm text-neutral-400">
            The core principles guiding our engineering, rider empowerment, and nationwide network.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Vision Card */}
          <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-b from-[#13131c] to-[#0c0c11] border border-white/10 shadow-xl space-y-6 relative overflow-hidden group hover:border-rose-500/40 transition-all duration-300">
            <div className="absolute top-0 right-0 w-44 h-44 bg-rose-600/10 rounded-full blur-3xl group-hover:bg-rose-600/20 transition-all"></div>
            
            <div className="flex items-center justify-between">
              <div className="w-14 h-14 rounded-2xl bg-white/[0.04] border border-white/10 text-rose-500 flex items-center justify-center group-hover:scale-105 group-hover:border-rose-500/30 transition-all">
                <Compass size={28} />
              </div>
              <span className="px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-[10px] font-mono uppercase tracking-wider text-neutral-400">
                Global Horizon
              </span>
            </div>

            <div className="space-y-3">
              <h3 className="font-heading font-black text-2xl text-white uppercase tracking-wider">
                Our Vision
              </h3>
              <p className="text-neutral-200 text-sm sm:text-base leading-relaxed font-medium">
                "To become a globally recognized name in motorcycle performance parts through innovation, reliability, and a rider-first approach."
              </p>
            </div>

            <div className="space-y-3 pt-4 border-t border-white/[0.08] text-xs text-neutral-300">
              <div className="flex items-center space-x-2.5">
                <CheckCircle2 size={16} className="text-rose-500 flex-shrink-0" />
                <span>Global brand recognition through mechanical innovation</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <CheckCircle2 size={16} className="text-rose-500 flex-shrink-0" />
                <span>Rider-first product development for consistent reliability</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <CheckCircle2 size={16} className="text-rose-500 flex-shrink-0" />
                <span>Transparent mechanical specifications and benchmark metrics</span>
              </div>
            </div>
          </div>

          {/* Mission Card */}
          <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-b from-[#13131c] to-[#0c0c11] border border-white/10 shadow-xl space-y-6 relative overflow-hidden group hover:border-rose-500/40 transition-all duration-300">
            <div className="absolute top-0 right-0 w-44 h-44 bg-rose-600/15 rounded-full blur-3xl group-hover:bg-rose-600/25 transition-all"></div>
            
            <div className="flex items-center justify-between">
              <div className="w-14 h-14 rounded-2xl bg-rose-600/15 border border-rose-500/30 text-rose-500 flex items-center justify-center group-hover:scale-105 group-hover:border-rose-500/40 transition-all">
                <Target size={28} />
              </div>
              <span className="px-3 py-1 rounded-full bg-rose-600/10 border border-rose-500/30 text-[10px] font-mono uppercase tracking-wider text-rose-400">
                Operational Mission
              </span>
            </div>

            <div className="space-y-3">
              <h3 className="font-heading font-black text-2xl text-white uppercase tracking-wider">
                Our Mission
              </h3>
              <p className="text-neutral-200 text-sm sm:text-base leading-relaxed font-medium">
                "To deliver high-quality, performance-driven motorcycle parts that empower riders to push boundaries and ride with confidence and world-class motorcycle parts that unlock maximum performance for every rider—from street to circuit."
              </p>
            </div>

            <div className="space-y-3 pt-4 border-t border-white/[0.08] text-xs text-neutral-300">
              <div className="flex items-center space-x-2.5">
                <CheckCircle2 size={16} className="text-rose-500 flex-shrink-0" />
                <span>Precision CNC-machined transmission components</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <CheckCircle2 size={16} className="text-rose-500 flex-shrink-0" />
                <span>Empowering street riders and track competitors alike</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <CheckCircle2 size={16} className="text-rose-500 flex-shrink-0" />
                <span>Uncompromising durability under harsh Philippine road conditions</span>
              </div>
            </div>
          </div>
        </div>
      </section>

        {/* =========================================================================
            BRAND PILLARS: Simple Values Grid
            ========================================================================= */}
        <section className="space-y-8">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <h2 className="font-heading font-black text-2xl sm:text-3xl text-white uppercase tracking-tight">
              Why Choose R1 Moto
            </h2>
            <p className="text-xs text-neutral-400">
              Reliable performance parts made for every rider.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {brandPillars.map((p, i) => (
              <div 
                key={i} 
                className="p-6 rounded-2xl bg-gradient-to-b from-[#13131a] to-[#0c0c10] border border-white/[0.08] hover:border-rose-500/40 hover:-translate-y-1 transition-all duration-300 space-y-4 shadow-lg group"
              >
                <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/10 group-hover:border-rose-500/30 group-hover:scale-105 flex items-center justify-center transition">
                  {p.icon}
                </div>
                <h3 className="font-heading font-bold text-base text-white uppercase group-hover:text-rose-400 transition">{p.title}</h3>
                <p className="text-xs text-neutral-400 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* =========================================================================
            SECTION 2: LOCATION (WITH INTERACTIVE GOOGLE MAP)
            ========================================================================= */}
        <section id="location" className="scroll-mt-24 space-y-8">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-rose-500 font-bold uppercase tracking-widest text-xs font-mono">Location</span>
            <h2 className="font-heading font-black text-2xl sm:text-3xl text-white uppercase tracking-tight">
              Where to Find Us
            </h2>
            <p className="text-xs text-neutral-400">
              Centrally based in Mandaluyong to serve motorcycle dealers and riders nationwide.
            </p>
          </div>

          <div className="p-8 sm:p-10 rounded-3xl bg-[#0f0f15] border border-white/10 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Address & Facility Information */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-rose-600/20 text-rose-400 text-[11px] font-bold uppercase">
                <MapPin size={13} />
                <span>Our Location</span>
              </div>

              <div>
                <h3 className="font-heading font-black text-2xl text-white uppercase">
                  506 Boni Ave, Mandaluyong
                </h3>
                <p className="text-xs text-neutral-400 mt-1 leading-relaxed">
                  Our facility oversees product testing, dealer inventory coordination, and wholesale dispatch across the Philippines.
                </p>
              </div>

              <div className="space-y-3.5 pt-2 text-xs text-neutral-300">
                <div className="flex items-start space-x-3 p-4 rounded-xl bg-white/[0.02] border border-white/10">
                  <MapPin size={20} className="text-rose-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-white text-sm">Full Address</div>
                    <div className="text-neutral-400 mt-1 leading-relaxed">506 Boni Ave, Mandaluyong, Philippines</div>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="https://maps.google.com/?q=506+Boni+Ave+Mandaluyong+Philippines"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-wider transition"
                >
                  <Navigation size={14} className="text-rose-500" />
                  <span>Get Directions on Google Maps</span>
                </a>
              </div>
            </div>

            {/* Embedded Live Google Maps Frame */}
            <div className="lg:col-span-7 h-80 sm:h-96 rounded-2xl overflow-hidden border border-white/10 bg-[#08080b] shadow-2xl relative">
              <iframe
                title="R1 Moto Performance Location"
                src="https://maps.google.com/maps?q=506%20Boni%20Ave,%20Mandaluyong,%20Philippines&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(105%)' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full opacity-90 hover:opacity-100 transition-opacity"
              ></iframe>
              <div className="absolute bottom-3 left-3 bg-[#0a0a0f]/90 border border-white/15 px-3 py-1.5 rounded-lg text-[10px] text-white font-mono flex items-center space-x-1.5 backdrop-blur-sm pointer-events-none">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>Mandaluyong Hub Active</span>
              </div>
            </div>

          </div>
        </section>

        {/* =========================================================================
            SECTION 3: OFFICIAL ONLINE SHOP CHANNELS (NO LAZADA, NO EMOJIS)
            ========================================================================= */}
        <section id="stores" className="scroll-mt-24 space-y-8">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-rose-500 font-bold uppercase tracking-widest text-xs font-mono">Official Distribution</span>
            <h2 className="font-heading font-black text-2xl sm:text-4xl text-white uppercase tracking-tight">
              Official Online Stores
            </h2>
            <p className="text-xs sm:text-sm text-neutral-400">
              Avoid counterfeit and substandard imitation parts. Order only through verified R1 Moto commercial channels.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {onlineStores.map((store) => (
              <a
                key={store.name}
                href={store.link}
                target="_blank"
                rel="noreferrer"
                className="p-8 rounded-3xl bg-[#0f0f15] border border-white/[0.08] hover:border-white/20 hover:bg-[#131319] transition-all duration-300 flex flex-col justify-between shadow-xl group"
                style={{
                  '--brand-color': store.brandColor
                }}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    {/* Official Brand Logo Container */}
                    <div 
                      className="w-12 h-12 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-105"
                      style={{ 
                        backgroundColor: store.brandBg, 
                        border: `1px solid ${store.brandBorder}` 
                      }}
                    >
                      {store.platform === 'shopee' && (
                        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                          <path
                            d="M19 7H16.5C16.3 4.2 14.4 2 12 2C9.6 2 7.7 4.2 7.5 7H5C3.9 7 3 7.9 3 9L4.4 20C4.5 21.1 5.4 22 6.5 22H17.5C18.6 22 19.5 21.1 19.6 20L21 9C21 7.9 20.1 7 19 7ZM12 4C13.3 4 14.4 5.3 14.5 7H9.5C9.6 5.3 10.7 4 12 4ZM17.6 20H6.4L5.2 9H7.5V11C7.5 11.6 7.9 12 8.5 12C9.1 12 9.5 11.6 9.5 11V9H14.5V11C14.5 11.6 14.9 12 15.5 12C16.1 12 16.5 11.6 16.5 11V9H18.8L17.6 20Z"
                            fill="#EE4D2D"
                          />
                          <path
                            d="M12.5 13.5C11.4 13.5 10.8 13.9 10.8 14.4C10.8 15.3 13.6 15.4 13.6 17.1C13.6 18.2 12.6 19 11.4 19C10.1 19 9.5 18.2 9.4 17.5H10.5C10.6 17.8 10.9 18.1 11.4 18.1C12 18.1 12.5 17.7 12.5 17.2C12.5 16.2 9.7 16.1 9.7 14.5C9.7 13.4 10.7 12.6 11.9 12.6C13.1 12.6 13.6 13.3 13.6 13.9H12.5C12.5 13.6 12.2 13.5 12.5 13.5Z"
                            fill="#EE4D2D"
                          />
                        </svg>
                      )}

                      {store.platform === 'tiktok' && (
                        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
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
                      )}

                      {store.platform === 'facebook' && (
                        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="#1877F2">
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                        </svg>
                      )}
                    </div>

                    <span 
                      className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider"
                      style={{ 
                        backgroundColor: store.brandBg, 
                        color: store.brandColor,
                        border: `1px solid ${store.brandBorder}`
                      }}
                    >
                      {store.badge}
                    </span>
                  </div>

                  <h3 className="font-heading font-black text-lg text-white group-hover:text-white transition mt-1">
                    {store.name}
                  </h3>
                  <p className="text-xs text-neutral-400 leading-relaxed mt-2.5">
                    {store.desc}
                  </p>
                </div>

                <div 
                  className="mt-8 pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-bold text-neutral-300 group-hover:text-white transition"
                >
                  <span style={{ color: store.brandColor }}>{store.btnText}</span>
                  <ExternalLink size={14} style={{ color: store.brandColor }} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* =========================================================================
            B2B DEALER COMMERCIAL CTA
            ========================================================================= */}
        <section className="relative p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-rose-950/40 via-[#101018] to-[#0f0f15] border border-rose-500/30 overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-80 h-80 bg-rose-600/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 max-w-2xl space-y-4">
            <span className="px-3 py-1 rounded-full bg-rose-600/20 text-rose-400 text-[10px] font-mono font-bold uppercase tracking-widest">
              B2B PARTNERSHIP PROGRAM
            </span>
            <h2 className="font-heading font-black text-2xl sm:text-4xl text-white uppercase tracking-tight">
              Grow Your Motorcycle Shop With R1 Moto Performance
            </h2>
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
              Are you a motorcycle workshop, regional distributor, or tuning garage? Join our certified nationwide dealer network with wholesale margins, direct warranty support, and prioritized inventory allocation.
            </p>
            <div className="pt-2 flex flex-wrap gap-3">
              <Link
                to="/dealer"
                className="px-6 py-3 rounded-full bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs uppercase tracking-wider transition shadow-lg shadow-rose-950 flex items-center space-x-2"
              >
                <Building size={14} />
                <span>Apply as Authorized Dealer</span>
              </Link>
              <Link
                to="/contact"
                className="px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 text-white border border-white/10 font-bold text-xs uppercase tracking-wider transition"
              >
                Contact Sales Team
              </Link>
            </div>
          </div>
        </section>

    </div>
  );
}
