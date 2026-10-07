import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, ArrowRight, CheckCircle2, Filter, Bike, Search } from 'lucide-react';

export default function CatalogPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const allProducts = [
    {
      id: 1,
      name: 'R1 CNC Performance Pulley Set & Drive Face',
      category: 'cvt-transmission',
      categoryLabel: 'CVT Transmission',
      specs: '13.5° Optimized Ramp Angle • Billet Aluminum',
      desc: 'Precision CNC-machined variator with Teflon-coated slide guides for explosive acceleration and high-RPM stability.',
      image: '/images/products/pulley-set.png',
      badge: 'Bestseller',
      fitment: 'Aerox 155, NMAX 155, Click 125i/150i, PCX 160',
    },
    {
      id: 2,
      name: 'R1 Grooved Performance Clutch Bell',
      category: 'cvt-transmission',
      categoryLabel: 'CVT Transmission',
      specs: 'Lightweight Outer Air Vents • Dynamic Balancing',
      desc: 'Heat-treated carbon steel with internal micro-grooves that provide instant clutch pad engagement with zero slipping.',
      image: '/images/products/bell.png',
      badge: 'High RPM',
      fitment: 'Aerox 155, NMAX 155, Click 125i/150i, PCX 160',
    },
    {
      id: 3,
      name: 'R1 High-Friction Clutch Lining Assembly',
      category: 'cvt-transmission',
      categoryLabel: 'CVT Transmission',
      specs: 'Carbon-Composite Friction Compound • Reinforced Base',
      desc: 'Eliminates stop-and-go dragging, shuddering, and clutch fade under high heat racing or city traffic conditions.',
      image: '/images/products/clutch-lining.png',
      badge: 'Friction Pack',
      fitment: 'Aerox 155, NMAX 155, Click 125i/150i, PCX 160',
    },
    {
      id: 4,
      name: 'R1 Calibrated Flyball Roller Weights',
      category: 'cvt-tuning',
      categoryLabel: 'CVT Tuning & Calibration',
      specs: 'Self-Lubricating Nylon Polymer • 8g - 15g Set of 6',
      desc: 'Ultra-durable roller weights designed for high-RPM continuous rolling without flat spotting.',
      image: '/images/products/flyball.png',
      badge: 'Tuning Grams',
      fitment: 'Universal Fitment for All Japanese Scooters',
    },
    {
      id: 5,
      name: 'R1 Silicon-Chrome Center & Clutch Springs',
      category: 'cvt-tuning',
      categoryLabel: 'CVT Tuning & Calibration',
      specs: '1000 RPM & 1500 RPM Tension Ratings',
      desc: 'Consistent compression rates that maintain proper CVT belt tension and responsive low-gear downshifting.',
      image: '/images/products/clutch-spring.png',
      badge: 'Spring Rates',
      fitment: 'Yamaha / Honda Modern Scooters',
    },
    {
      id: 6,
      name: 'R1 Ceramic Composite Brake Pads',
      category: 'braking',
      categoryLabel: 'Braking Systems',
      specs: 'High Thermal Resistance • Low Dust • Rotor-Friendly',
      desc: 'Fade-free stopping power formulated for spirited mountain touring and wet city roads.',
      image: '/images/products/brakepad.png',
      badge: 'Ceramic',
      fitment: 'Aerox Front, NMAX Front/Rear, Click Front',
    },
    {
      id: 7,
      name: 'R1 Dual-Angle Torque Drive Assembly',
      category: 'cvt-transmission',
      categoryLabel: 'CVT Transmission',
      specs: 'Linear & Curved Guide Channels • Hardened Alloy',
      desc: 'Smooths out CVT shifts and keeps the engine in its optimal horsepower powerband at all throttle openings.',
      image: '/images/products/torque-drive.png',
      badge: 'Torque Cam',
      fitment: 'Aerox 155, NMAX 155, Click 125i/150i',
    },
    {
      id: 8,
      name: 'R1 Formula CVT Cleaner & Degreaser Spray',
      category: 'maintenance',
      categoryLabel: 'Maintenance & Care',
      specs: 'Fast-Drying • Zero Residue • Rubber-Safe',
      desc: 'Quickly strips away belt dust, clutch glazing, and grease contamination to restore full transmission grip.',
      image: '/images/products/cvt-cleaner.png',
      badge: 'Care Formula',
      fitment: 'Safe for All Scooters & Motorcycles',
    },
    {
      id: 9,
      name: 'R1 High-Performance Synthetic Fork Oil',
      category: 'maintenance',
      categoryLabel: 'Maintenance & Care',
      specs: 'Viscosity Stable • Anti-Foam Additives',
      desc: 'Provides plush damping characteristics, prevents suspension dive under heavy braking, and protects internal seals.',
      image: '/images/products/fork-oil.png',
      badge: 'Suspension',
      fitment: 'Universal Telescopic Motorcycle Forks',
    },
    {
      id: 10,
      name: 'R1 Heavy-Duty Variator Slider Pieces',
      category: 'cvt-tuning',
      categoryLabel: 'CVT Tuning & Calibration',
      specs: 'High Heat Synthetic Polymer • Pack of 3',
      desc: 'Tight tolerance variator guides preventing plate vibration and ensuring smooth ramp ascension.',
      image: '/images/products/slider-piece.png',
      badge: 'Slide Guide',
      fitment: 'Yamaha & Honda Variator Ramp Plates',
    },
  ];

  const categories = [
    { id: 'all', label: 'All Products' },
    { id: 'cvt-transmission', label: 'CVT Transmission' },
    { id: 'cvt-tuning', label: 'CVT Tuning' },
    { id: 'braking', label: 'Braking Systems' },
    { id: 'maintenance', label: 'Maintenance & Care' },
  ];

  const filtered = allProducts.filter((p) => {
    const matchCat = selectedCategory === 'all' || p.category === selectedCategory;
    const matchQuery = p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                       p.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
                       p.fitment.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchQuery;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      
      {/* Header */}
      <div className="space-y-4">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-rose-950/70 border border-rose-500/30 text-rose-400 text-xs font-bold uppercase tracking-wider">
          <span>Official R1 Product Catalog</span>
        </div>
        <h1 className="font-display font-black text-3xl sm:text-5xl text-white">
          Performance Parts Lineup
        </h1>
        <p className="text-slate-400 text-sm sm:text-base max-w-2xl">
          All genuine R1 parts are engineered with tight tolerances and premium metallurgy for maximum power transfer and extended durability.
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 p-4 bg-[#121622] border border-[#222838] rounded-2xl">
        <div className="flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setSelectedCategory(c.id)}
              className={`px-3.5 py-2 text-xs font-semibold rounded-xl transition ${
                selectedCategory === c.id
                  ? 'bg-rose-600 text-white shadow-md shadow-rose-950'
                  : 'bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        <div className="relative w-full md:w-64">
          <Search size={16} className="absolute left-3.5 top-3 text-slate-500" />
          <input
            type="text"
            placeholder="Search parts or bikes..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-3 py-2 text-xs bg-slate-900 border border-slate-800 rounded-xl focus:outline-none focus:border-rose-500 text-slate-100"
          />
        </div>
      </div>

      {/* Products Grid (All Products with Transparent PNGs) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filtered.map((product) => (
          <div
            key={product.id}
            className="p-5 rounded-2xl bg-[#131722] border border-[#222838] hover:border-rose-600/50 hover:bg-[#181d2a] transition group flex flex-col justify-between shadow-lg"
          >
            <div>
              {/* Product PNG Display */}
              <div className="h-48 w-full bg-slate-900/70 rounded-xl mb-4 p-4 flex items-center justify-center relative overflow-hidden">
                <span className="absolute top-2.5 left-2.5 px-2 py-0.5 text-[10px] font-bold uppercase rounded bg-rose-950/80 text-rose-400 border border-rose-900/40">
                  {product.badge}
                </span>
                <img
                  src={product.image}
                  alt={product.name}
                  className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-110 drop-shadow-[0_10px_20px_rgba(0,0,0,0.7)]"
                  loading="lazy"
                />
              </div>

              <span className="text-[10px] font-bold uppercase text-slate-400 tracking-wider">
                {product.categoryLabel}
              </span>

              <h3 className="font-display font-bold text-base text-white group-hover:text-rose-400 transition mt-1 mb-2">
                {product.name}
              </h3>

              <p className="text-xs text-slate-400 leading-relaxed mb-3">
                {product.desc}
              </p>
            </div>

            <div className="space-y-3 pt-3 border-t border-slate-800/80">
              <div className="text-[11px] text-slate-400">
                <span className="font-semibold text-slate-300">Specs: </span>
                {product.specs}
              </div>

              <div className="flex items-center space-x-1.5 text-[11px] text-rose-400 font-medium">
                <Bike size={13} className="flex-shrink-0" />
                <span className="truncate">{product.fitment}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
