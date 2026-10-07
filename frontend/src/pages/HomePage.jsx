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
  UserCheck,
  Facebook,
  ExternalLink,
  CheckCircle2
} from 'lucide-react';

export default function HomePage() {
  const { isAuthenticated, user, role, openLogin, openSignUp } = useAuth();

  const featuredProducts = [
    {
      title: 'CNC Pulley Set & Drive Face',
      subtitle: 'Teflon-Coated Ramp Guides',
      desc: 'Precision CNC-machined aluminum variator with optimal ramp angles for explosive low-end takeoff and higher top speed.',
      image: '/images/products/pulley-set.png',
      badge: 'Transmission',
      specs: '13.5° Ramp Angle • Billet Aluminum',
      path: '/catalog?category=cvt-transmission',
    },
    {
      title: 'Grooved Performance Clutch Bell',
      subtitle: 'Heat-Treated Steel with Cooling Fins',
      desc: 'Aerodynamic outer air vents and precision-machined internal grooves for instantaneous clutch shoe grip without slipping.',
      image: '/images/products/bell.png',
      badge: 'High RPM',
      specs: 'Anti-Vibration Dynamic Balancing',
      path: '/catalog?category=cvt-transmission',
    },
    {
      title: 'High-Friction Clutch Lining Assembly',
      subtitle: 'Carbon-Composite Friction Pads',
      desc: 'Formulated to withstand extreme heat cycles, eliminating stop-and-go dragging and shuddering during acceleration.',
      image: '/images/products/clutch-lining.png',
      badge: 'Clutch Assy',
      specs: 'Reinforced Backing • Racing Compound',
      path: '/catalog?category=cvt-transmission',
    },
    {
      title: 'Precision Calibrated Flyball Weights',
      subtitle: 'High-Durability Polymer Roller Set',
      desc: 'Wear-resistant self-lubricating rollers available from 8g to 15g for custom CVT tuning and throttle response matching.',
      image: '/images/products/flyball.png',
      badge: 'Tuning',
      specs: 'Set of 6 • Self-Lubricating Nylon',
      path: '/catalog?category=cvt-tuning-calibration',
    },
    {
      title: 'Racing Center & Clutch Springs',
      subtitle: 'Silicon-Chrome Alloy Steel',
      desc: 'Consistent compression rate ratings (1000 RPM & 1500 RPM) to keep the belt tight and prevent sluggish downshifting.',
      image: '/images/products/clutch-spring.png',
      badge: 'RPM Rating',
      specs: '1000 RPM / 1500 RPM Options',
      path: '/catalog?category=cvt-tuning-calibration',
    },
    {
      title: 'Ceramic Composite Brake Pads',
      subtitle: 'Fade-Free Thermal Tolerance',
      desc: 'High-performance stopping power formulated for street touring and spirited cornering with minimal rotor abrasion.',
      image: '/images/products/brakepad.png',
      badge: 'Braking',
      specs: 'Low Dust • Quiet Wet Braking',
      path: '/catalog?category=braking-systems',
    },
    {
      title: 'Dual-Angle Torque Drive Assembly',
      subtitle: 'Smooth Belt Transition Guides',
      desc: 'Engineered guide pin channels that smooth out power delivery transitions from mid-corner throttle to top-end cruising.',
      image: '/images/products/torque-drive.png',
      badge: 'Torque Cam',
      specs: 'Dual Angle Grooves • Steel Pins',
      path: '/catalog?category=cvt-transmission',
    },
    {
      title: 'R1 Formula CVT Cleaner & Degreaser',
      subtitle: 'Zero-Residue Fast Drying Spray',
      desc: 'Quickly dissolves belt dust, clutch glazing, and accumulated grime to restore peak CVT friction and efficiency.',
      image: '/images/products/cvt-cleaner.png',
      badge: 'Chemical Care',
      specs: 'Fast-Drying • Rubber-Safe Formula',
      path: '/catalog?category=maintenance-care',
    },
  ];

  const popularBikes = [
    { name: 'Yamaha Aerox 155', brand: 'Yamaha', engine: '155cc V1 / V2 (4-Valve VVA)' },
    { name: 'Yamaha NMAX 155', brand: 'Yamaha', engine: '155cc Touring (ABS / Non-ABS)' },
    { name: 'Honda Click 125i / 150i', brand: 'Honda', engine: 'Game Changer Liquid-Cooled' },
    { name: 'Honda PCX 160 / ADV 160', brand: 'Honda', engine: '157cc eSP+ 4-Valve Engine' },
  ];

  return (
    <div className="space-y-24 pb-24">
      
      {/* HERO SECTION */}
      <section className="relative pt-8 pb-16 lg:pt-14 lg:pb-28 overflow-hidden">
        {/* Background Gradients & Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full overflow-hidden pointer-events-none -z-10">
          <div className="absolute -top-32 right-12 w-[500px] h-[500px] bg-rose-600/15 rounded-full blur-3xl"></div>
          <div className="absolute top-1/3 -left-32 w-[450px] h-[450px] bg-rose-950/20 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Hero Content */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* FULL R1 LOGO (Homepage shows full logo) */}
              <div className="pt-2">
                <img 
                  src="/images/r1-logo-full.png" 
                  alt="R1 Moto Performance" 
                  className="h-16 sm:h-20 md:h-24 w-auto object-contain drop-shadow-[0_10px_25px_rgba(225,29,72,0.35)]"
                />
              </div>

              {/* Tagline Badge */}
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-rose-950/70 border border-rose-500/40 text-rose-400 text-xs font-bold uppercase tracking-wider">
                <Sparkles size={14} className="text-amber-400" />
                <span>Premier Motorcycle Performance Parts</span>
              </div>

              {/* PRIMARY TAGLINE HEADLINE (Enhance your ride, Elevate your drive) */}
              <h1 className="font-display font-black text-4xl sm:text-6xl lg:text-6xl tracking-tight text-white leading-[1.08]">
                Enhance your ride, <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 via-rose-400 to-amber-400">
                  Elevate your drive.
                </span>
              </h1>

              {/* Authentic Brand Paragraph */}
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl">
                Precision CNC-machined CVT transmission systems, heat-treated clutch bells, and racing-grade components crafted to deliver instant throttle response, zero belt slip, and relentless road endurance.
              </p>

              {/* Primary Call to Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 pt-2">
                <Link
                  to="/compatibility"
                  className="px-6 py-3.5 bg-rose-600 hover:bg-rose-500 text-white font-bold rounded-xl transition shadow-lg shadow-rose-900/50 flex items-center justify-center space-x-2 group"
                >
                  <Bike size={20} />
                  <span>Check Parts for Your Scooter</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition" />
                </Link>

                {!isAuthenticated ? (
                  <button
                    onClick={openLogin}
                    className="px-6 py-3.5 bg-slate-900/90 hover:bg-slate-800 text-slate-200 border border-slate-700/80 font-semibold rounded-xl transition flex items-center justify-center space-x-2"
                  >
                    <UserCheck size={18} className="text-rose-400" />
                    <span>Sign In / Create Account</span>
                  </button>
                ) : (
                  <Link
                    to="/catalog"
                    className="px-6 py-3.5 bg-slate-900/90 hover:bg-slate-800 text-slate-200 border border-slate-700/80 font-semibold rounded-xl transition flex items-center justify-center space-x-2"
                  >
                    <ShoppingBag size={18} className="text-rose-400" />
                    <span>Browse Product Catalog</span>
                  </Link>
                )}
              </div>

              {/* Quick Specs Badges */}
              <div className="grid grid-cols-3 gap-4 pt-8 border-t border-slate-800/80 max-w-md">
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

            {/* Right Column: Hero Visual Product Card */}
            <div className="lg:col-span-5">
              <div className="relative p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-[#181d29] to-[#0f121a] border border-[#262c3d] shadow-2xl overflow-hidden group">
                <div className="absolute -top-16 -right-16 w-48 h-48 bg-rose-600/20 rounded-full blur-2xl pointer-events-none"></div>

                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-md bg-rose-950/80 text-rose-400 border border-rose-800/50">
                    Flagship Pulley Set
                  </span>
                  <span className="text-xs text-slate-400 font-medium">Aerox / NMAX / Click</span>
                </div>

                {/* Hero Showcase Image */}
                <div className="relative h-64 sm:h-72 flex items-center justify-center my-4 overflow-hidden">
                  <img 
                    src="/images/products/pulley-set.png" 
                    alt="R1 CNC Pulley Set" 
                    className="max-h-full w-auto object-contain transition-transform duration-500 group-hover:scale-105 drop-shadow-[0_15px_30px_rgba(0,0,0,0.8)]"
                  />
                </div>

                <div className="space-y-2 pt-2 border-t border-slate-800/70">
                  <div className="flex items-center justify-between">
                    <h3 className="font-display font-black text-lg text-white">
                      R1 CNC Performance Pulley Set
                    </h3>
                    <span className="text-xs font-bold text-emerald-400 bg-emerald-950/50 px-2 py-0.5 rounded border border-emerald-800/40">
                      In Stock
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Includes precision ramp plate, high-temp teflon slide pieces, and drive face with optimized airflow cooling vanes.
                  </p>
                </div>

                {/* Direct Action */}
                <div className="mt-5 pt-3 flex items-center justify-between">
                  <Link
                    to="/catalog"
                    className="w-full py-2.5 text-center text-xs font-bold text-white bg-rose-600 hover:bg-rose-500 rounded-lg transition"
                  >
                    View Product Specifications
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* QUICK AUTHENTICATION WELCOME BANNER (First User Experience) */}
      {!isAuthenticated && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-rose-950/40 via-slate-900 to-slate-900 border border-rose-900/30 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-xl bg-rose-600/20 text-rose-400 flex items-center justify-center flex-shrink-0">
                <UserCheck size={26} />
              </div>
              <div>
                <h3 className="font-display font-bold text-lg text-white">
                  Join the R1 Performance Community
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">
                  Sign in or create your free account to unlock tailored fitment alerts, dealer wholesale applications, and saved garage units.
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-3 w-full md:w-auto">
              <button
                onClick={openLogin}
                className="flex-1 md:flex-none px-5 py-2.5 text-xs font-bold text-slate-200 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition border border-slate-700"
              >
                Sign In
              </button>
              <button
                onClick={openSignUp}
                className="flex-1 md:flex-none px-5 py-2.5 text-xs font-bold text-white bg-rose-600 hover:bg-rose-500 rounded-lg transition shadow-md shadow-rose-950"
              >
                Create Account
              </button>
            </div>
          </div>
        </section>
      )}

      {/* FEATURED PRODUCTS GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10">
          <div>
            <span className="text-rose-500 font-bold uppercase tracking-wider text-xs">
              Genuine R1 Catalog
            </span>
            <h2 className="font-display font-black text-2xl sm:text-4xl text-white mt-1">
              Precision Engineering Lineup
            </h2>
          </div>
          <Link
            to="/catalog"
            className="mt-4 sm:mt-0 text-xs font-semibold text-rose-400 hover:text-rose-300 transition flex items-center space-x-1"
          >
            <span>View All R1 Parts</span>
            <ChevronRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <div
              key={product.title}
              className="p-5 rounded-2xl bg-[#131722] border border-[#222838] hover:border-rose-600/50 hover:bg-[#181d2a] transition group flex flex-col justify-between"
            >
              <div>
                {/* Product Image Showcase */}
                <div className="h-44 w-full bg-slate-900/60 rounded-xl mb-4 p-3 flex items-center justify-center relative overflow-hidden">
                  <span className="absolute top-2.5 left-2.5 px-2 py-0.5 text-[10px] font-bold uppercase rounded bg-rose-950/70 text-rose-400 border border-rose-900/40">
                    {product.badge}
                  </span>
                  <img
                    src={product.image}
                    alt={product.title}
                    className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-110 drop-shadow-[0_8px_16px_rgba(0,0,0,0.6)]"
                    loading="lazy"
                  />
                </div>

                <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wide">
                  {product.subtitle}
                </div>
                <h3 className="font-display font-bold text-base text-white group-hover:text-rose-400 transition mt-1 mb-2">
                  {product.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {product.desc}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-800/70 flex items-center justify-between text-xs font-medium text-slate-300">
                <span className="text-[11px] text-slate-500">{product.specs}</span>
                <Link to={product.path} className="text-rose-400 group-hover:text-rose-300 flex items-center space-x-1 font-semibold">
                  <span>Specs</span>
                  <ArrowRight size={13} className="group-hover:translate-x-0.5 transition" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TWO-WAY COMPATIBILITY FITMENT ENGINE TEASER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#161a24] to-[#0f121a] border border-[#262c3d] relative overflow-hidden">
          <div className="max-w-2xl space-y-4">
            <span className="text-rose-500 font-bold uppercase tracking-wider text-xs">
              Interactive Fitment Engine
            </span>
            <h2 className="font-display font-black text-2xl sm:text-4xl text-white">
              No More Guesswork. 100% Guaranteed Fitment.
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              Our 2-way compatibility engine verifies exact parts fitment for your motorcycle: select your scooter model photo to see all matching R1 components, or click any performance part to inspect every compatible bike model.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
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

            <div className="pt-4">
              <Link
                to="/compatibility"
                className="inline-flex items-center space-x-2 px-5 py-3 bg-rose-600 hover:bg-rose-500 text-white rounded-xl text-xs font-bold transition shadow-lg shadow-rose-950"
              >
                <span>Launch Interactive Motorcycle Unit Selector</span>
                <ChevronRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* AUTHENTIC BRAND STORY (About Us copied from company brief) */}
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
                Partner with R1 Moto Performance. Enjoy dedicated tier margins, wholesale ordering with automatic PDF purchase orders, territory rights, and marketing collateral support.
              </p>
              
              <div className="flex flex-wrap gap-4 pt-2">
                <div className="flex items-center space-x-2 text-xs text-slate-300">
                  <ShieldCheck size={16} className="text-rose-500" />
                  <span>Wholesale Tier Margins</span>
                </div>
                <div className="flex items-center space-x-2 text-xs text-slate-300">
                  <FileText size={16} className="text-rose-500" />
                  <span>Consolidated PDF Orders</span>
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
              {!isAuthenticated ? (
                <button
                  onClick={openSignUp}
                  className="w-full py-3 bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 font-medium rounded-xl text-xs transition"
                >
                  Create Rider/Dealer Account
                </button>
              ) : (
                <Link
                  to="/dealer"
                  className="w-full py-3 bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 font-medium rounded-xl text-xs text-center transition"
                >
                  View Application Status
                </Link>
              )}
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
