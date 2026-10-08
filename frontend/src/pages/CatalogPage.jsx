import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ShoppingBag, ArrowRight, CheckCircle2, Filter, Bike, Search, Star, Sparkles, Check, RotateCcw } from 'lucide-react';

export default function CatalogPage() {
  const [searchParams] = useSearchParams();

  // Filter States requested by user
  const [selectedBrand, setSelectedBrand] = useState('all');
  const [selectedModel, setSelectedModel] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [addedItem, setAddedItem] = useState(null);

  // Sync URL search params if navigated with params
  useEffect(() => {
    const brandParam = searchParams.get('brand');
    const modelParam = searchParams.get('model');
    const catParam = searchParams.get('category');
    if (brandParam) setSelectedBrand(brandParam);
    if (modelParam) setSelectedModel(modelParam);
    if (catParam) setSelectedCategory(catParam);
  }, [searchParams]);

  const allProducts = [
    {
      id: 1,
      name: 'R1 CNC Performance Pulley Set & Drive Face',
      category: 'cvt-transmission',
      categoryLabel: 'CVT Transmission',
      specs: '13.5° Optimized Ramp Angle • Billet 6061-T6',
      desc: 'Precision CNC-machined variator with Teflon-coated slide guides for explosive acceleration and high-RPM stability.',
      image: '/images/products/pulley-set.png',
      badge: 'BESTSELLER',
      badgeColor: 'bg-rose-600',
      price: '₱2,450',
      rating: 5.0,
      reviews: 142,
      fitment: 'Aerox 155, NMAX 155, Click 125i/150i/160, PCX 160',
    },
    {
      id: 2,
      name: 'R1 Grooved Performance Clutch Bell',
      category: 'cvt-transmission',
      categoryLabel: 'CVT Transmission',
      specs: 'Lightweight Outer Air Vents • Dynamic Balancing',
      desc: 'Heat-treated carbon steel with internal micro-grooves that provide instant clutch pad engagement with zero slipping.',
      image: '/images/products/bell.png',
      badge: 'HIGH RPM',
      badgeColor: 'bg-red-600',
      price: '₱1,850',
      rating: 4.9,
      reviews: 98,
      fitment: 'Aerox 155, NMAX 155, Click 125i/150i/160, PCX 160',
    },
    {
      id: 3,
      name: 'R1 High-Friction Clutch Lining Assembly',
      category: 'cvt-transmission',
      categoryLabel: 'CVT Transmission',
      specs: 'Carbon-Composite Friction Compound • Reinforced Base',
      desc: 'Eliminates stop-and-go dragging, shuddering, and clutch fade under high heat racing or city traffic conditions.',
      image: '/images/products/clutch-lining.png',
      badge: 'FRICTION PACK',
      badgeColor: 'bg-rose-700',
      price: '₱1,250',
      rating: 4.9,
      reviews: 84,
      fitment: 'Aerox 155, NMAX 155, Click 125i/150i/160, PCX 160',
    },
    {
      id: 4,
      name: 'R1 Calibrated Flyball Roller Weights',
      category: 'cvt-tuning',
      categoryLabel: 'CVT Tuning & Calibration',
      specs: 'Self-Lubricating Nylon Polymer • 8g - 15g Set of 6',
      desc: 'Ultra-durable roller weights designed for high-RPM continuous rolling without flat spotting.',
      image: '/images/products/flyball.png',
      badge: 'TUNING GRAMS',
      badgeColor: 'bg-rose-600',
      price: '₱450',
      rating: 4.8,
      reviews: 67,
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
      badge: 'SPRING RATES',
      badgeColor: 'bg-red-700',
      price: '₱680',
      rating: 4.9,
      reviews: 53,
      fitment: 'Yamaha & Honda Modern Scooters',
    },
    {
      id: 6,
      name: 'R1 Ceramic Composite Brake Pads',
      category: 'braking',
      categoryLabel: 'Braking Systems',
      specs: 'High Thermal Resistance • Low Dust • Rotor-Friendly',
      desc: 'Fade-free stopping power formulated for spirited mountain touring and wet city roads.',
      image: '/images/products/brakepad.png',
      badge: 'CERAMIC SPEC',
      badgeColor: 'bg-rose-600',
      price: '₱480',
      rating: 5.0,
      reviews: 210,
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
      badge: 'TORQUE CAM',
      badgeColor: 'bg-rose-700',
      price: '₱2,100',
      rating: 4.9,
      reviews: 41,
      fitment: 'Aerox 155, NMAX 155, Click 125i/150i/160',
    },
    {
      id: 8,
      name: 'R1 Formula CVT Cleaner & Degreaser Spray',
      category: 'maintenance',
      categoryLabel: 'Maintenance & Care',
      specs: 'Fast-Drying • Zero Residue • Rubber-Safe',
      desc: 'Quickly strips away belt dust, clutch glazing, and grease contamination to restore full transmission grip.',
      image: '/images/products/cvt-cleaner.png',
      badge: 'CARE FORMULA',
      badgeColor: 'bg-neutral-800',
      price: '₱350',
      rating: 4.9,
      reviews: 79,
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
      badge: 'SUSPENSION',
      badgeColor: 'bg-neutral-800',
      price: '₱380',
      rating: 4.8,
      reviews: 45,
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
      badge: 'SLIDE GUIDE',
      badgeColor: 'bg-rose-600',
      price: '₱280',
      rating: 4.7,
      reviews: 38,
      fitment: 'Yamaha & Honda Variator Ramp Plates',
    },
  ];

  // Filtering Logic
  const filtered = allProducts.filter((p) => {
    // Brand match
    let matchBrand = true;
    if (selectedBrand !== 'all') {
      const fit = p.fitment.toLowerCase();
      if (selectedBrand === 'yamaha') {
        matchBrand = fit.includes('yamaha') || fit.includes('aerox') || fit.includes('nmax') || fit.includes('universal');
      } else if (selectedBrand === 'honda') {
        matchBrand = fit.includes('honda') || fit.includes('click') || fit.includes('pcx') || fit.includes('adv') || fit.includes('universal');
      } else if (selectedBrand === 'suzuki') {
        matchBrand = fit.includes('suzuki') || fit.includes('universal') || fit.includes('japanese');
      }
    }

    // Model match
    let matchModel = true;
    if (selectedModel !== 'all') {
      const fit = p.fitment.toLowerCase();
      if (selectedModel === 'aerox') {
        matchModel = fit.includes('aerox') || fit.includes('universal');
      } else if (selectedModel === 'nmax') {
        matchModel = fit.includes('nmax') || fit.includes('universal');
      } else if (selectedModel === 'click') {
        matchModel = fit.includes('click') || fit.includes('universal');
      } else if (selectedModel === 'pcx-adv') {
        matchModel = fit.includes('pcx') || fit.includes('adv') || fit.includes('universal');
      }
    }

    // Category / System match
    const matchCat = selectedCategory === 'all' || p.category === selectedCategory;

    // Search query match
    const matchQuery = p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                       p.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
                       p.fitment.toLowerCase().includes(searchQuery.toLowerCase());

    return matchBrand && matchModel && matchCat && matchQuery;
  });

  const handleResetFilters = () => {
    setSelectedBrand('all');
    setSelectedModel('all');
    setSelectedCategory('all');
    setSearchQuery('');
  };

  const handleAddToCart = (product) => {
    setAddedItem(product.id);
    setTimeout(() => {
      setAddedItem(null);
    }, 2000);
  };

  const hasActiveFilters = selectedBrand !== 'all' || selectedModel !== 'all' || selectedCategory !== 'all' || searchQuery !== '';

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10 text-neutral-100">
      
      {/* Header Section */}
      <div className="space-y-3 text-center sm:text-left">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-neutral-400 text-[11px] font-semibold uppercase tracking-widest">
          <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-ping"></span>
          <span>OFFICIAL R1 PRODUCT CATALOG</span>
        </div>

        <h1 className="font-heading font-extrabold text-3xl sm:text-4xl text-white tracking-tight uppercase">
          Performance Parts Lineup
        </h1>

        <p className="text-neutral-400 text-xs sm:text-sm max-w-2xl">
          All genuine R1 parts are engineered with tight tolerances and premium metallurgy for maximum power transfer, smoother acceleration, and extended durability.
        </p>
      </div>

      {/* =========================================================================
          SCOOTER FITMENT & SYSTEM FILTER BAR (Moved from Homepage as requested)
          ========================================================================= */}
      <div className="p-4 sm:p-5 rounded-2xl bg-[#0f0f14] border border-white/10 backdrop-blur-xl shadow-2xl space-y-4">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          
          {/* 1. Scooter Brand */}
          <div className="flex flex-col text-left px-3.5 py-2 bg-white/[0.03] rounded-xl border border-white/[0.06]">
            <label className="text-[10px] font-bold uppercase tracking-wider text-rose-400 mb-1">
              Scooter Brand
            </label>
            <select
              value={selectedBrand}
              onChange={(e) => setSelectedBrand(e.target.value)}
              className="bg-transparent text-xs font-semibold text-white focus:outline-none cursor-pointer py-1"
            >
              <option value="all" className="bg-[#121217] text-white">Select Scooter Brand</option>
              <option value="yamaha" className="bg-[#121217] text-white">Yamaha</option>
              <option value="honda" className="bg-[#121217] text-white">Honda</option>
              <option value="suzuki" className="bg-[#121217] text-white">Suzuki</option>
            </select>
          </div>

          {/* 2. Series / Model */}
          <div className="flex flex-col text-left px-3.5 py-2 bg-white/[0.03] rounded-xl border border-white/[0.06]">
            <label className="text-[10px] font-bold uppercase tracking-wider text-rose-400 mb-1">
              Series / Model
            </label>
            <select
              value={selectedModel}
              onChange={(e) => setSelectedModel(e.target.value)}
              className="bg-transparent text-xs font-semibold text-white focus:outline-none cursor-pointer py-1"
            >
              <option value="all" className="bg-[#121217] text-white">Select Series / Model</option>
              <option value="aerox" className="bg-[#121217] text-white">Aerox 155 (V1 & V2)</option>
              <option value="nmax" className="bg-[#121217] text-white">NMAX 155 (V1 & V2)</option>
              <option value="click" className="bg-[#121217] text-white">Click 125i / 150i / 160</option>
              <option value="pcx-adv" className="bg-[#121217] text-white">PCX 160 / ADV 160</option>
            </select>
          </div>

          {/* 3. Performance System */}
          <div className="flex flex-col text-left px-3.5 py-2 bg-white/[0.03] rounded-xl border border-white/[0.06]">
            <label className="text-[10px] font-bold uppercase tracking-wider text-rose-400 mb-1">
              Performance System
            </label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="bg-transparent text-xs font-semibold text-white focus:outline-none cursor-pointer py-1"
            >
              <option value="all" className="bg-[#121217] text-white">All Performance Systems</option>
              <option value="cvt-transmission" className="bg-[#121217] text-white">CVT Pulley & Variator</option>
              <option value="cvt-tuning" className="bg-[#121217] text-white">CVT Tuning & Rollers</option>
              <option value="braking" className="bg-[#121217] text-white">Ceramic Braking</option>
              <option value="maintenance" className="bg-[#121217] text-white">Maintenance & Fluids</option>
            </select>
          </div>

          {/* 4. Search Filter */}
          <div className="flex flex-col text-left px-3.5 py-2 bg-white/[0.03] rounded-xl border border-white/[0.06] justify-center relative">
            <label className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 mb-1">
              Search Parts
            </label>
            <div className="relative">
              <Search size={14} className="absolute left-0 top-1.5 text-neutral-500" />
              <input
                type="text"
                placeholder="Pulley, bell, Click, Aerox..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-6 pr-2 py-0.5 text-xs bg-transparent focus:outline-none text-white placeholder-neutral-500"
              />
            </div>
          </div>

        </div>

        {/* Results summary and Reset bar */}
        <div className="flex items-center justify-between text-xs text-neutral-400 pt-1 px-1">
          <div className="flex items-center space-x-2">
            <span>Showing <strong className="text-white">{filtered.length}</strong> of {allProducts.length} components</span>
            {hasActiveFilters && (
              <span className="px-2 py-0.5 bg-rose-600/20 text-rose-400 text-[10px] font-bold rounded-full">
                Filters Active
              </span>
            )}
          </div>

          {hasActiveFilters && (
            <button
              onClick={handleResetFilters}
              className="inline-flex items-center space-x-1 text-xs text-rose-400 hover:text-white transition font-semibold"
            >
              <RotateCcw size={12} />
              <span>Reset Filters</span>
            </button>
          )}
        </div>

      </div>

      {/* Products Grid (All Products with Transparent PNGs matching Image 1) */}
      {filtered.length === 0 ? (
        <div className="p-12 text-center rounded-2xl bg-[#0f0f14] border border-white/10 space-y-3">
          <Bike size={32} className="mx-auto text-neutral-600" />
          <h3 className="font-heading font-bold text-base text-white">No products found</h3>
          <p className="text-xs text-neutral-400">Try adjusting your brand, model, or category filter.</p>
          <button
            onClick={handleResetFilters}
            className="px-5 py-2 bg-white text-black font-bold text-xs uppercase tracking-wider rounded-full hover:bg-neutral-200 transition"
          >
            Show All Products
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((product) => (
            <div
              key={product.id}
              className="p-5 rounded-2xl bg-[#0f0f14] border border-white/[0.07] hover:border-rose-500/50 hover:bg-[#131319] transition-all duration-300 flex flex-col justify-between shadow-xl group"
            >
              <div>
                {/* Product Badge & Rating Row */}
                <div className="flex items-center justify-between mb-3">
                  <span className={`px-2 py-0.5 rounded text-[9px] font-black tracking-wider text-white ${product.badgeColor}`}>
                    {product.badge}
                  </span>
                  <div className="flex items-center space-x-1 text-amber-400 text-xs font-bold">
                    <Star size={11} className="fill-amber-400" />
                    <span>{product.rating}</span>
                  </div>
                </div>

                {/* Product PNG Display on dark pedestal */}
                <div className="h-44 w-full rounded-xl bg-[#08080b] border border-white/[0.04] p-4 mb-4 flex items-center justify-center relative overflow-hidden group-hover:border-white/10 transition">
                  <div className="absolute inset-0 bg-radial-gradient from-rose-600/5 to-transparent blur-xl pointer-events-none"></div>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-110 drop-shadow-[0_15px_30px_rgba(0,0,0,0.9)]"
                    loading="lazy"
                  />
                </div>

                {/* Category & Fitment */}
                <span className="text-[10px] font-bold uppercase text-neutral-400 tracking-wider">
                  {product.categoryLabel}
                </span>

                {/* Product Title */}
                <h3 className="font-heading font-bold text-sm text-white group-hover:text-rose-400 transition mt-1 mb-2 line-clamp-1">
                  {product.name}
                </h3>

                {/* Description */}
                <p className="text-xs text-neutral-400 leading-relaxed mb-3 line-clamp-2">
                  {product.desc}
                </p>

                {/* Specs pill */}
                <div className="text-[11px] text-neutral-300 font-medium bg-white/[0.03] p-2 rounded-lg border border-white/[0.04] mb-3">
                  <span className="text-neutral-400 text-[10px] uppercase block font-semibold">Specification</span>
                  {product.specs}
                </div>

                {/* Fitment Indicator */}
                <div className="flex items-center space-x-1.5 text-[11px] text-rose-400 font-medium">
                  <Bike size={13} className="flex-shrink-0" />
                  <span className="truncate">{product.fitment}</span>
                </div>
              </div>

              {/* Price & Add to Cart Capsule Button */}
              <div className="mt-5 pt-4 border-t border-white/[0.06] flex items-center justify-between gap-3">
                <div className="text-base font-extrabold text-white tracking-tight">
                  {product.price}
                </div>

                <button
                  onClick={() => handleAddToCart(product)}
                  className={`py-2 px-4 rounded-full font-bold text-xs uppercase tracking-wider transition shadow-md flex items-center space-x-1.5 ${
                    addedItem === product.id
                      ? 'bg-rose-600 text-white'
                      : 'bg-white hover:bg-neutral-200 text-black'
                  }`}
                >
                  {addedItem === product.id ? (
                    <>
                      <Check size={13} />
                      <span>Added!</span>
                    </>
                  ) : (
                    <>
                      <ShoppingBag size={13} />
                      <span>Add to Cart</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

    </div>
  );
}
