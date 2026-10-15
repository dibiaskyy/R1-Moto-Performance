import React, { useState, useEffect } from 'react';
import { 
  Building, 
  Upload, 
  ShoppingBag, 
  FileCheck, 
  CheckCircle2, 
  ArrowRight, 
  ArrowLeft, 
  Shield, 
  TrendingUp, 
  Truck, 
  Award, 
  Plus, 
  Minus, 
  Trash2, 
  Eye, 
  FileText, 
  AlertCircle,
  Percent,
  Check
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function DealerPage() {
  // Step State: 1 = Business Info, 2 = Document Upload, 3 = Wholesale Order, 4 = Review & Submit
  const [currentStep, setCurrentStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [applicationRef, setApplicationRef] = useState('');

  // Step 1: Business Profile Form
  const [formData, setFormData] = useState({
    business_name: '',
    owner_name: '',
    email: '',
    phone: '',
    business_address: '',
    city: '',
    province: '',
    years_in_business: '1-3 years',
    facebook_page: '',
    notes: ''
  });

  // Step 2: Documents State
  const [documents, setDocuments] = useState({
    dti_sec: null,
    mayors_permit: null,
    valid_id: null,
    store_photo: null
  });

  // Step 3: Available Wholesale Products from Catalog
  const [catalogProducts, setCatalogProducts] = useState([]);
  const [loadingProducts, setLoadingProducts] = useState(false);

  // Selected Order Items: { [productId]: quantity }
  const [orderItems, setOrderItems] = useState({});

  // Preset Wholesale Starter Packages
  const STARTER_PACKS = [
    {
      id: 'starter-cvt',
      name: 'Starter CVT Fast-Movers Kit',
      desc: 'Ideal for small scooter shops starting with Click 125 & Aerox tuning.',
      discountRate: 0.30, // 30% Wholesale Margin
      items: {
        1: 5, // 5x Click 125 Pulley
        2: 5, // 5x Aerox/NMAX Pulley
        3: 5, // 5x Clutch Bell
        5: 10 // 10x Flyballs
      }
    },
    {
      id: 'pro-master',
      name: 'Pro-Shop Performance Master Pack',
      desc: 'Complete inventory covering CVT transmission, springs, and ceramic braking.',
      discountRate: 0.35, // 35% Wholesale Margin
      items: {
        1: 10,
        2: 10,
        3: 10,
        4: 8,
        5: 20,
        6: 25 // 25x Ceramic Brake Pads
      }
    }
  ];

  // Fetch real products from API or fallback
  useEffect(() => {
    const fetchCatalog = async () => {
      setLoadingProducts(true);
      try {
        const res = await fetch('http://127.0.0.1:8000/api/v1/products');
        const data = await res.json();
        if (data && data.data && data.data.length > 0) {
          setCatalogProducts(data.data);
        } else {
          throw new Error('Fallback needed');
        }
      } catch (err) {
        setCatalogProducts([
          {
            id: 1,
            name: 'R1 Pulley Set (Click 125)',
            sku: 'R1-PULLEY-Y-CLK',
            category_name: 'CVT Transmission',
            retail_price: 2000,
            dealer_wholesale_price: 1400,
            primary_image: '/images/products/pulley-set.png'
          },
          {
            id: 2,
            name: 'R1 Pulley Set (NMAX / Aerox 155)',
            sku: 'R1-PULLEY-Y-NMAX',
            category_name: 'CVT Transmission',
            retail_price: 2700,
            dealer_wholesale_price: 1890,
            primary_image: '/images/products/pulley-set.png'
          },
          {
            id: 3,
            name: 'R1 Clutch Bell (Aerox 155)',
            sku: 'R1-BELL-Y-AER',
            category_name: 'CVT Transmission',
            retail_price: 1800,
            dealer_wholesale_price: 1260,
            primary_image: '/images/products/bell.png'
          },
          {
            id: 4,
            name: 'R1 Clutch Lining Assembly (Aerox / NMAX 155)',
            sku: 'R1-LINING-Y-155',
            category_name: 'CVT Transmission',
            retail_price: 1950,
            dealer_wholesale_price: 1365,
            primary_image: '/images/products/clutch-lining.png'
          },
          {
            id: 5,
            name: 'R1 Performance Flyball Roller Weights (Set of 6)',
            sku: 'R1-FLYBALL-SET',
            category_name: 'CVT Tuning',
            retail_price: 380,
            dealer_wholesale_price: 250,
            primary_image: '/images/products/flyball.png'
          },
          {
            id: 6,
            name: 'R1 Ceramic Disc Brake Pad (Aerox / NMAX / Click)',
            sku: 'R1-BRAKEPAD-CERAMIC',
            category_name: 'Braking Systems',
            retail_price: 350,
            dealer_wholesale_price: 220,
            primary_image: '/images/products/brakepad.png'
          }
        ]);
      }
      setLoadingProducts(false);
    };
    fetchCatalog();
  }, []);

  // Handle Document Upload
  const handleFileChange = (docKey, file) => {
    if (!file) return;
    setDocuments(prev => ({
      ...prev,
      [docKey]: {
        file,
        name: file.name,
        size: (file.size / 1024).toFixed(1) + ' KB',
        preview: file.type.startsWith('image/') ? URL.createObjectURL(file) : null
      }
    }));
  };

  // Quantity controllers for custom wholesale builder
  const updateQuantity = (productId, delta) => {
    setOrderItems(prev => {
      const current = prev[productId] || 0;
      const updated = Math.max(0, current + delta);
      if (updated === 0) {
        const copy = { ...prev };
        delete copy[productId];
        return copy;
      }
      return { ...prev, [productId]: updated };
    });
  };

  // Apply Preset Package
  const applyStarterPack = (pack) => {
    setOrderItems(pack.items);
  };

  // Computations
  const totalItemCount = Object.values(orderItems).reduce((sum, q) => sum + q, 0);

  const calculateSubtotal = () => {
    let subtotal = 0;
    Object.entries(orderItems).forEach(([pId, qty]) => {
      const prod = catalogProducts.find(p => p.id === parseInt(pId));
      if (prod) {
        const price = prod.dealer_wholesale_price || (prod.retail_price * 0.7);
        subtotal += price * qty;
      }
    });
    return subtotal;
  };

  const calculateRetailWorth = () => {
    let retail = 0;
    Object.entries(orderItems).forEach(([pId, qty]) => {
      const prod = catalogProducts.find(p => p.id === parseInt(pId));
      if (prod) {
        retail += prod.retail_price * qty;
      }
    });
    return retail;
  };

  const subtotal = calculateSubtotal();
  const retailWorth = calculateRetailWorth();
  const projectedProfit = retailWorth - subtotal;
  const marginPercent = retailWorth > 0 ? Math.round((projectedProfit / retailWorth) * 100) : 0;

  // Final Submission Handler
  const handleFinalSubmit = (e) => {
    e.preventDefault();
    const generatedRef = 'DLR-' + Math.floor(100000 + Math.random() * 900000);
    setApplicationRef(generatedRef);
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const steps = [
    { num: 1, label: 'Shop Details', icon: Building },
    { num: 2, label: 'Document Upload', icon: Upload },
    { num: 3, label: 'Wholesale Order', icon: ShoppingBag },
    { num: 4, label: 'Review & Submit', icon: FileCheck },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12 text-neutral-100">
      
      {/* =========================================================================
          HERO BANNER & VALUE HIGHLIGHTS
          ========================================================================= */}
      <section className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 text-[11px] font-mono uppercase tracking-widest">
          <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse"></span>
          <span>B2B DEALER REGISTRATION WIZARD</span>
        </div>

        <h1 className="font-heading font-black text-3xl sm:text-5xl text-white uppercase tracking-tight">
          Become An Authorized Dealer
        </h1>

        <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">
          Join our certified nationwide network of motorcycle workshops and retailers. Complete our streamlined 4-step registration wizard to unlock direct tier wholesale pricing.
        </p>
      </section>

      {/* =========================================================================
          PERKS GRID
          ========================================================================= */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 rounded-2xl bg-gradient-to-b from-[#13131a] to-[#0c0c10] border border-white/[0.08] hover:border-rose-500/30 transition space-y-3">
          <div className="w-10 h-10 rounded-xl bg-rose-600/10 text-rose-500 flex items-center justify-center font-bold">
            <TrendingUp size={20} />
          </div>
          <h3 className="font-heading font-bold text-base text-white uppercase">25% - 40% Tiered Margins</h3>
          <p className="text-xs text-neutral-400 leading-relaxed">
            Generous dealer pricing on all pulleys, clutch assemblies, and ceramic pads designed to boost workshop profitability.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-gradient-to-b from-[#13131a] to-[#0c0c10] border border-white/[0.08] hover:border-rose-500/30 transition space-y-3">
          <div className="w-10 h-10 rounded-xl bg-rose-600/10 text-rose-500 flex items-center justify-center font-bold">
            <Truck size={20} />
          </div>
          <h3 className="font-heading font-bold text-base text-white uppercase">Priority Warehouse Dispatch</h3>
          <p className="text-xs text-neutral-400 leading-relaxed">
            Orders processed with priority inventory allocation directly from our Mandaluyong central fulfillment hub.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-gradient-to-b from-[#13131a] to-[#0c0c10] border border-white/[0.08] hover:border-rose-500/30 transition space-y-3">
          <div className="w-10 h-10 rounded-xl bg-rose-600/10 text-rose-500 flex items-center justify-center font-bold">
            <Award size={20} />
          </div>
          <h3 className="font-heading font-bold text-base text-white uppercase">Marketing & Merchandising</h3>
          <p className="text-xs text-neutral-400 leading-relaxed">
            Free high-gloss showroom banners, official dealer sticker kits, and verified inclusion on our digital store directory.
          </p>
        </div>
      </div>

      {/* =========================================================================
          4-STEP REGISTRATION WIZARD CONTAINER
          ========================================================================= */}
      <div className="max-w-4xl mx-auto rounded-3xl bg-[#0f0f15] border border-white/10 shadow-2xl overflow-hidden">
        
        {/* Wizard Stepper Progress Bar */}
        <div className="p-6 sm:p-8 bg-neutral-900/60 border-b border-white/10">
          <div className="grid grid-cols-4 gap-2 sm:gap-4">
            {steps.map((st) => {
              const Icon = st.icon;
              const isPassed = currentStep > st.num;
              const isCurrent = currentStep === st.num;

              return (
                <div 
                  key={st.num}
                  className={`flex flex-col items-center text-center space-y-2 cursor-pointer transition ${
                    isCurrent ? 'opacity-100' : isPassed ? 'opacity-90' : 'opacity-40'
                  }`}
                  onClick={() => {
                    if (isPassed) setCurrentStep(st.num);
                  }}
                >
                  <div className={`w-9 h-9 sm:w-11 sm:h-11 rounded-2xl flex items-center justify-center font-bold text-xs transition ${
                    isCurrent 
                      ? 'bg-rose-600 text-white shadow-lg shadow-rose-950 scale-105' 
                      : isPassed 
                        ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40' 
                        : 'bg-white/5 text-neutral-400 border border-white/10'
                  }`}>
                    {isPassed ? <Check size={18} /> : <Icon size={18} />}
                  </div>
                  <div className="hidden sm:block">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-500 block">
                      Step {st.num}
                    </span>
                    <span className={`text-xs font-heading font-bold uppercase tracking-wide ${
                      isCurrent ? 'text-white' : 'text-neutral-400'
                    }`}>
                      {st.label}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Wizard Content Body */}
        <div className="p-6 sm:p-10">
          {submitted ? (
            /* Submission Success Screen */
            <div className="text-center py-10 space-y-6 max-w-xl mx-auto">
              <div className="w-20 h-20 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto shadow-xl">
                <CheckCircle2 size={42} />
              </div>

              <div className="space-y-2">
                <span className="text-[11px] font-mono text-emerald-400 uppercase tracking-widest font-bold">
                  Application Logged Successfully
                </span>
                <h2 className="font-heading font-black text-2xl sm:text-3xl text-white uppercase">
                  Welcome to the Dealer Network!
                </h2>
                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                  Your dealership application and initial wholesale order have been received under reference number:
                </p>
                <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 font-mono text-lg font-bold text-rose-400 tracking-wider inline-block mt-2">
                  {applicationRef}
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-[#14141d] border border-white/10 text-left space-y-3 text-xs">
                <h4 className="font-bold text-white uppercase text-[11px] tracking-wider text-rose-400">
                  Application Summary & Next Steps:
                </h4>
                <div className="space-y-1.5 text-neutral-300">
                  <div className="flex justify-between">
                    <span className="text-neutral-400">Shop Name:</span>
                    <strong className="text-white">{formData.business_name}</strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-400">Owner / Rep:</span>
                    <span className="text-white">{formData.owner_name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-400">Wholesale Order Total:</span>
                    <strong className="text-emerald-400 font-mono">₱{subtotal.toLocaleString()} ({totalItemCount} items)</strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-400">Target Profit Margin:</span>
                    <span className="text-white font-mono">{marginPercent}% (₱{projectedProfit.toLocaleString()} profit)</span>
                  </div>
                </div>
                <p className="text-[11px] text-neutral-400 pt-2 border-t border-white/10">
                  Our B2B verification team will review your business documents within 24 business hours. A sales account manager will contact you via <strong>{formData.phone || formData.email}</strong> to finalize dispatch logistics.
                </p>
              </div>

              <div className="pt-4 flex flex-wrap justify-center gap-3">
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setCurrentStep(1);
                    setOrderItems({});
                  }}
                  className="px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-wider transition"
                >
                  Submit Another Application
                </button>
                <Link
                  to="/catalog"
                  className="px-6 py-3 rounded-full bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs uppercase tracking-wider transition shadow-lg shadow-rose-950"
                >
                  Browse Public Catalog
                </Link>
              </div>
            </div>
          ) : (
            <div>
              {/* =============================================================
                  STEP 1: BUSINESS & WORKSHOP PROFILE
                  ============================================================= */}
              {currentStep === 1 && (
                <div className="space-y-6">
                  <div>
                    <h3 className="font-heading font-black text-xl text-white uppercase tracking-tight">
                      Step 1: Motorcycle Workshop & Business Profile
                    </h3>
                    <p className="text-xs text-neutral-400 mt-1">
                      Enter your official business information for dealer record creation and territory dispatch.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-[11px] font-mono uppercase text-neutral-400 block mb-1.5 font-semibold">
                        Motorcycle Shop / Business Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Apex Performance Moto Garage"
                        value={formData.business_name}
                        onChange={(e) => setFormData({ ...formData, business_name: e.target.value })}
                        className="w-full px-4 py-3 bg-[#08080b] border border-white/10 rounded-xl text-xs text-white placeholder-neutral-600 focus:outline-none focus:border-rose-500 transition"
                      />
                    </div>

                    <div>
                      <label className="text-[11px] font-mono uppercase text-neutral-400 block mb-1.5 font-semibold">
                        Owner / Primary Representative Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Juan Dela Cruz"
                        value={formData.owner_name}
                        onChange={(e) => setFormData({ ...formData, owner_name: e.target.value })}
                        className="w-full px-4 py-3 bg-[#08080b] border border-white/10 rounded-xl text-xs text-white placeholder-neutral-600 focus:outline-none focus:border-rose-500 transition"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-[11px] font-mono uppercase text-neutral-400 block mb-1.5 font-semibold">
                        Official Business Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="e.g. workshop@apexmotoworks.ph"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 bg-[#08080b] border border-white/10 rounded-xl text-xs text-white placeholder-neutral-600 focus:outline-none focus:border-rose-500 transition"
                      />
                    </div>

                    <div>
                      <label className="text-[11px] font-mono uppercase text-neutral-400 block mb-1.5 font-semibold">
                        Contact Mobile Number *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. 0917 123 4567"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 bg-[#08080b] border border-white/10 rounded-xl text-xs text-white placeholder-neutral-600 focus:outline-none focus:border-rose-500 transition"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[11px] font-mono uppercase text-neutral-400 block mb-1.5 font-semibold">
                      Shop Physical Street Address *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Unit 4, Highway Commercial Complex, National Road"
                      value={formData.business_address}
                      onChange={(e) => setFormData({ ...formData, business_address: e.target.value })}
                      className="w-full px-4 py-3 bg-[#08080b] border border-white/10 rounded-xl text-xs text-white placeholder-neutral-600 focus:outline-none focus:border-rose-500 transition"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                    <div>
                      <label className="text-[11px] font-mono uppercase text-neutral-400 block mb-1.5 font-semibold">
                        City / Municipality *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Mandaluyong / Cebu City"
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        className="w-full px-4 py-3 bg-[#08080b] border border-white/10 rounded-xl text-xs text-white placeholder-neutral-600 focus:outline-none focus:border-rose-500 transition"
                      />
                    </div>

                    <div>
                      <label className="text-[11px] font-mono uppercase text-neutral-400 block mb-1.5 font-semibold">
                        Province / Region *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Metro Manila / Cebu"
                        value={formData.province}
                        onChange={(e) => setFormData({ ...formData, province: e.target.value })}
                        className="w-full px-4 py-3 bg-[#08080b] border border-white/10 rounded-xl text-xs text-white placeholder-neutral-600 focus:outline-none focus:border-rose-500 transition"
                      />
                    </div>

                    <div>
                      <label className="text-[11px] font-mono uppercase text-neutral-400 block mb-1.5 font-semibold">
                        Years in Business
                      </label>
                      <select
                        value={formData.years_in_business}
                        onChange={(e) => setFormData({ ...formData, years_in_business: e.target.value })}
                        className="w-full px-4 py-3 bg-[#08080b] border border-white/10 rounded-xl text-xs text-white focus:outline-none focus:border-rose-500 transition"
                      >
                        <option value="New Store (< 1 year)">New Store (&lt; 1 year)</option>
                        <option value="1-3 years">1 - 3 years</option>
                        <option value="3-5 years">3 - 5 years</option>
                        <option value="5+ years">Established 5+ years</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-[11px] font-mono uppercase text-neutral-400 block mb-1.5 font-semibold">
                      Workshop Facebook Page / Online Presence (Optional)
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. facebook.com/apexmotogarage"
                      value={formData.facebook_page}
                      onChange={(e) => setFormData({ ...formData, facebook_page: e.target.value })}
                      className="w-full px-4 py-3 bg-[#08080b] border border-white/10 rounded-xl text-xs text-white placeholder-neutral-600 focus:outline-none focus:border-rose-500 transition"
                    />
                  </div>

                  <div className="pt-4 flex justify-end">
                    <button
                      type="button"
                      disabled={!formData.business_name || !formData.owner_name || !formData.email || !formData.phone}
                      onClick={() => setCurrentStep(2)}
                      className="px-8 py-3.5 rounded-xl bg-rose-600 hover:bg-rose-500 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold text-xs uppercase tracking-wider transition shadow-lg shadow-rose-950 flex items-center space-x-2"
                    >
                      <span>Proceed to Document Upload</span>
                      <ArrowRight size={15} />
                    </button>
                  </div>
                </div>
              )}

              {/* =============================================================
                  STEP 2: BUSINESS DOCUMENT UPLOADS
                  ============================================================= */}
              {currentStep === 2 && (
                <div className="space-y-6">
                  <div>
                    <h3 className="font-heading font-black text-xl text-white uppercase tracking-tight">
                      Step 2: Business Verification Documents
                    </h3>
                    <p className="text-xs text-neutral-400 mt-1">
                      Upload verification files to certify legitimate retail/workshop operations. Accepted formats: JPG, PNG, PDF (Max 5MB each).
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Doc 1: DTI or SEC */}
                    <div className="p-5 rounded-2xl bg-[#08080b] border border-white/10 space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold uppercase text-white">DTI / SEC Certificate *</span>
                        {documents.dti_sec && (
                          <span className="text-[10px] font-mono text-emerald-400 flex items-center space-x-1">
                            <CheckCircle2 size={12} />
                            <span>Attached</span>
                          </span>
                        )}
                      </div>
                      <p className="text-[11px] text-neutral-400 leading-relaxed">
                        Department of Trade & Industry (DTI) or Securities and Exchange Commission registration.
                      </p>
                      <label className="block p-4 border border-dashed border-white/20 hover:border-rose-500/50 rounded-xl cursor-pointer text-center bg-white/[0.01] hover:bg-white/[0.03] transition">
                        <Upload size={18} className="mx-auto text-neutral-400 mb-1.5" />
                        <span className="text-xs text-neutral-300 font-semibold block">
                          {documents.dti_sec ? documents.dti_sec.name : 'Choose File or Drag Here'}
                        </span>
                        <span className="text-[10px] text-neutral-500 block">PDF, JPG, or PNG</span>
                        <input
                          type="file"
                          accept=".pdf,image/*"
                          className="hidden"
                          onChange={(e) => handleFileChange('dti_sec', e.target.files[0])}
                        />
                      </label>
                    </div>

                    {/* Doc 2: Mayor's or Barangay Permit */}
                    <div className="p-5 rounded-2xl bg-[#08080b] border border-white/10 space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold uppercase text-white">Mayor's / Business Permit</span>
                        {documents.mayors_permit && (
                          <span className="text-[10px] font-mono text-emerald-400 flex items-center space-x-1">
                            <CheckCircle2 size={12} />
                            <span>Attached</span>
                          </span>
                        )}
                      </div>
                      <p className="text-[11px] text-neutral-400 leading-relaxed">
                        Current year Mayor's Permit or Barangay Business Clearance.
                      </p>
                      <label className="block p-4 border border-dashed border-white/20 hover:border-rose-500/50 rounded-xl cursor-pointer text-center bg-white/[0.01] hover:bg-white/[0.03] transition">
                        <Upload size={18} className="mx-auto text-neutral-400 mb-1.5" />
                        <span className="text-xs text-neutral-300 font-semibold block">
                          {documents.mayors_permit ? documents.mayors_permit.name : 'Choose File or Drag Here'}
                        </span>
                        <span className="text-[10px] text-neutral-500 block">PDF, JPG, or PNG</span>
                        <input
                          type="file"
                          accept=".pdf,image/*"
                          className="hidden"
                          onChange={(e) => handleFileChange('mayors_permit', e.target.files[0])}
                        />
                      </label>
                    </div>

                    {/* Doc 3: Government Valid ID */}
                    <div className="p-5 rounded-2xl bg-[#08080b] border border-white/10 space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold uppercase text-white">Owner Valid Govt ID *</span>
                        {documents.valid_id && (
                          <span className="text-[10px] font-mono text-emerald-400 flex items-center space-x-1">
                            <CheckCircle2 size={12} />
                            <span>Attached</span>
                          </span>
                        )}
                      </div>
                      <p className="text-[11px] text-neutral-400 leading-relaxed">
                        Driver's License, Passport, UMID, or National ID of authorized shop representative.
                      </p>
                      <label className="block p-4 border border-dashed border-white/20 hover:border-rose-500/50 rounded-xl cursor-pointer text-center bg-white/[0.01] hover:bg-white/[0.03] transition">
                        <Upload size={18} className="mx-auto text-neutral-400 mb-1.5" />
                        <span className="text-xs text-neutral-300 font-semibold block">
                          {documents.valid_id ? documents.valid_id.name : 'Choose File or Drag Here'}
                        </span>
                        <span className="text-[10px] text-neutral-500 block">Clear front photo or PDF</span>
                        <input
                          type="file"
                          accept=".pdf,image/*"
                          className="hidden"
                          onChange={(e) => handleFileChange('valid_id', e.target.files[0])}
                        />
                      </label>
                    </div>

                    {/* Doc 4: Storefront Photo */}
                    <div className="p-5 rounded-2xl bg-[#08080b] border border-white/10 space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold uppercase text-white">Physical Store / Workshop Photo *</span>
                        {documents.store_photo && (
                          <span className="text-[10px] font-mono text-emerald-400 flex items-center space-x-1">
                            <CheckCircle2 size={12} />
                            <span>Attached</span>
                          </span>
                        )}
                      </div>
                      <p className="text-[11px] text-neutral-400 leading-relaxed">
                        Exterior storefront photo showing shop signage, service bays, or parts display counter.
                      </p>
                      <label className="block p-4 border border-dashed border-white/20 hover:border-rose-500/50 rounded-xl cursor-pointer text-center bg-white/[0.01] hover:bg-white/[0.03] transition">
                        <Upload size={18} className="mx-auto text-neutral-400 mb-1.5" />
                        <span className="text-xs text-neutral-300 font-semibold block">
                          {documents.store_photo ? documents.store_photo.name : 'Choose File or Drag Here'}
                        </span>
                        <span className="text-[10px] text-neutral-500 block">JPG or PNG image</span>
                        <input
                          type="file"
                          accept="image/*"
                          className="hidden"
                          onChange={(e) => handleFileChange('store_photo', e.target.files[0])}
                        />
                      </label>
                    </div>
                  </div>

                  <div className="pt-4 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => setCurrentStep(1)}
                      className="px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-neutral-300 hover:text-white font-bold text-xs uppercase tracking-wider transition flex items-center space-x-2"
                    >
                      <ArrowLeft size={15} />
                      <span>Back to Shop Profile</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setCurrentStep(3)}
                      className="px-8 py-3.5 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs uppercase tracking-wider transition shadow-lg shadow-rose-950 flex items-center space-x-2"
                    >
                      <span>Proceed to Wholesale Order</span>
                      <ArrowRight size={15} />
                    </button>
                  </div>
                </div>
              )}

              {/* =============================================================
                  STEP 3: INITIAL WHOLESALE ORDER SELECTION
                  ============================================================= */}
              {currentStep === 3 && (
                <div className="space-y-8">
                  <div>
                    <h3 className="font-heading font-black text-xl text-white uppercase tracking-tight">
                      Step 3: Initial Wholesale Order Selection
                    </h3>
                    <p className="text-xs text-neutral-400 mt-1">
                      Choose an expertly-curated starter package or build your own customized batch with wholesale unit pricing.
                    </p>
                  </div>

                  {/* Preset Starter Package Fast-Toggles */}
                  <div className="space-y-3">
                    <span className="text-[11px] font-mono uppercase text-rose-400 font-bold tracking-wider block">
                      Recommended Dealer Starter Packs:
                    </span>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {STARTER_PACKS.map((pack) => (
                        <div 
                          key={pack.id}
                          className="p-5 rounded-2xl bg-gradient-to-br from-[#14141e] to-[#0c0c12] border border-white/10 hover:border-rose-500/40 transition space-y-3 flex flex-col justify-between"
                        >
                          <div>
                            <div className="flex items-center justify-between">
                              <h4 className="font-heading font-bold text-white text-sm uppercase">{pack.name}</h4>
                              <span className="px-2 py-0.5 rounded-full bg-rose-500/20 text-rose-400 text-[10px] font-mono font-bold">
                                {Math.round(pack.discountRate * 100)}% Margin
                              </span>
                            </div>
                            <p className="text-xs text-neutral-400 mt-1">{pack.desc}</p>
                          </div>

                          <button
                            type="button"
                            onClick={() => applyStarterPack(pack)}
                            className="w-full py-2.5 rounded-xl bg-white/10 hover:bg-rose-600 text-white text-xs font-bold uppercase tracking-wider transition flex items-center justify-center space-x-1.5"
                          >
                            <span>Load This Package</span>
                            <Plus size={13} />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Custom Order Builder Table */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-mono uppercase text-neutral-400 font-bold tracking-wider">
                        Custom Product Item Selection
                      </span>
                      <span className="text-xs text-neutral-400">
                        Total Items Selected: <strong className="text-white font-mono">{totalItemCount}</strong>
                      </span>
                    </div>

                    <div className="rounded-2xl border border-white/10 overflow-hidden bg-[#08080b]">
                      <div className="divide-y divide-white/[0.06]">
                        {catalogProducts.map((prod) => {
                          const qty = orderItems[prod.id] || 0;
                          const wholesalePrice = prod.dealer_wholesale_price || (prod.retail_price * 0.7);

                          return (
                            <div key={prod.id} className="p-4 flex flex-col sm:flex-row items-center justify-between gap-4 hover:bg-white/[0.01] transition">
                              <div className="flex items-center space-x-3.5 w-full sm:w-auto">
                                <img
                                  src={prod.primary_image || prod.image_url || '/images/products/pulley-set.png'}
                                  alt={prod.name}
                                  className="w-12 h-12 object-contain rounded-lg bg-neutral-900 border border-white/10 p-1 flex-shrink-0"
                                />
                                <div>
                                  <div className="font-heading font-bold text-white text-xs uppercase leading-snug">
                                    {prod.name}
                                  </div>
                                  <div className="text-[10px] font-mono text-neutral-400 mt-0.5">
                                    SKU: {prod.sku} • {prod.category_name}
                                  </div>
                                  <div className="flex items-center space-x-3 text-xs mt-1">
                                    <span className="text-neutral-400">Retail: <del>₱{prod.retail_price.toLocaleString()}</del></span>
                                    <span className="text-rose-400 font-bold font-mono">Wholesale: ₱{wholesalePrice.toLocaleString()}</span>
                                  </div>
                                </div>
                              </div>

                              {/* Quantity Stepper */}
                              <div className="flex items-center space-x-3 self-end sm:self-center">
                                <div className="flex items-center space-x-2 bg-white/[0.04] border border-white/10 rounded-xl p-1">
                                  <button
                                    type="button"
                                    onClick={() => updateQuantity(prod.id, -1)}
                                    className="w-7 h-7 rounded-lg bg-white/5 hover:bg-white/10 text-neutral-300 hover:text-white flex items-center justify-center transition"
                                  >
                                    <Minus size={13} />
                                  </button>
                                  <span className="w-8 text-center text-xs font-mono font-bold text-white">
                                    {qty}
                                  </span>
                                  <button
                                    type="button"
                                    onClick={() => updateQuantity(prod.id, 1)}
                                    className="w-7 h-7 rounded-lg bg-rose-600/30 hover:bg-rose-600 text-rose-300 hover:text-white flex items-center justify-center transition"
                                  >
                                    <Plus size={13} />
                                  </button>
                                </div>

                                <div className="w-24 text-right">
                                  <span className="text-xs font-mono font-bold text-white block">
                                    ₱{(wholesalePrice * qty).toLocaleString()}
                                  </span>
                                  {qty > 0 && (
                                    <span className="text-[10px] font-mono text-emerald-400 block">
                                      +₱{((prod.retail_price - wholesalePrice) * qty).toLocaleString()} profit
                                    </span>
                                  )}
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  {/* Real-Time Order Economics Summary Banner */}
                  <div className="p-6 rounded-2xl bg-gradient-to-r from-rose-950/30 via-[#101018] to-[#0f0f15] border border-rose-500/30 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
                    <div>
                      <span className="text-[10px] font-mono uppercase text-neutral-400 block">Total Units</span>
                      <strong className="text-xl font-heading font-black text-white">{totalItemCount} pcs</strong>
                    </div>
                    <div>
                      <span className="text-[10px] font-mono uppercase text-neutral-400 block">Retail Worth</span>
                      <strong className="text-xl font-heading font-black text-neutral-300">₱{retailWorth.toLocaleString()}</strong>
                    </div>
                    <div>
                      <span className="text-[10px] font-mono uppercase text-rose-400 font-bold block">Wholesale Payable</span>
                      <strong className="text-xl font-heading font-black text-rose-400">₱{subtotal.toLocaleString()}</strong>
                    </div>
                    <div>
                      <span className="text-[10px] font-mono uppercase text-emerald-400 font-bold block">Estimated Profit</span>
                      <strong className="text-xl font-heading font-black text-emerald-400 font-mono">+{marginPercent}% (₱{projectedProfit.toLocaleString()})</strong>
                    </div>
                  </div>

                  <div className="pt-4 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => setCurrentStep(2)}
                      className="px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-neutral-300 hover:text-white font-bold text-xs uppercase tracking-wider transition flex items-center space-x-2"
                    >
                      <ArrowLeft size={15} />
                      <span>Back to Documents</span>
                    </button>

                    <button
                      type="button"
                      disabled={totalItemCount === 0}
                      onClick={() => setCurrentStep(4)}
                      className="px-8 py-3.5 rounded-xl bg-rose-600 hover:bg-rose-500 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold text-xs uppercase tracking-wider transition shadow-lg shadow-rose-950 flex items-center space-x-2"
                    >
                      <span>Review Dealership Application</span>
                      <ArrowRight size={15} />
                    </button>
                  </div>
                </div>
              )}

              {/* =============================================================
                  STEP 4: COMPREHENSIVE REVIEW & FINAL SUBMISSION
                  ============================================================= */}
              {currentStep === 4 && (
                <div className="space-y-6">
                  <div>
                    <h3 className="font-heading font-black text-xl text-white uppercase tracking-tight">
                      Step 4: Review Application & Wholesale Order
                    </h3>
                    <p className="text-xs text-neutral-400 mt-1">
                      Please review all details carefully before submitting for official dealer approval.
                    </p>
                  </div>

                  {/* Summary Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {/* Workshop Profile Summary */}
                    <div className="p-5 rounded-2xl bg-[#08080b] border border-white/10 space-y-3">
                      <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
                        <span className="text-xs font-bold uppercase text-white flex items-center space-x-1.5">
                          <Building size={14} className="text-rose-500" />
                          <span>Workshop Profile</span>
                        </span>
                        <button
                          type="button"
                          onClick={() => setCurrentStep(1)}
                          className="text-[10px] font-mono text-rose-400 hover:underline uppercase"
                        >
                          Edit
                        </button>
                      </div>
                      <div className="space-y-1.5 text-xs">
                        <div><span className="text-neutral-400">Business:</span> <strong className="text-white ml-1">{formData.business_name}</strong></div>
                        <div><span className="text-neutral-400">Owner:</span> <span className="text-neutral-200 ml-1">{formData.owner_name}</span></div>
                        <div><span className="text-neutral-400">Contact:</span> <span className="text-neutral-200 ml-1">{formData.phone} • {formData.email}</span></div>
                        <div><span className="text-neutral-400">Address:</span> <span className="text-neutral-300 ml-1">{formData.business_address}, {formData.city}, {formData.province}</span></div>
                        <div><span className="text-neutral-400">Experience:</span> <span className="text-neutral-300 ml-1">{formData.years_in_business}</span></div>
                      </div>
                    </div>

                    {/* Verification Documents Summary */}
                    <div className="p-5 rounded-2xl bg-[#08080b] border border-white/10 space-y-3">
                      <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
                        <span className="text-xs font-bold uppercase text-white flex items-center space-x-1.5">
                          <FileText size={14} className="text-rose-500" />
                          <span>Attached Documents</span>
                        </span>
                        <button
                          type="button"
                          onClick={() => setCurrentStep(2)}
                          className="text-[10px] font-mono text-rose-400 hover:underline uppercase"
                        >
                          Edit
                        </button>
                      </div>
                      <div className="space-y-2 text-xs">
                        <div className="flex items-center justify-between">
                          <span className="text-neutral-400">DTI/SEC Certificate:</span>
                          <span className={`font-mono text-[11px] ${documents.dti_sec ? 'text-emerald-400' : 'text-neutral-500'}`}>
                            {documents.dti_sec ? documents.dti_sec.name : 'Not provided'}
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-neutral-400">Mayor's Permit:</span>
                          <span className={`font-mono text-[11px] ${documents.mayors_permit ? 'text-emerald-400' : 'text-neutral-500'}`}>
                            {documents.mayors_permit ? documents.mayors_permit.name : 'Not provided'}
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-neutral-400">Valid ID:</span>
                          <span className={`font-mono text-[11px] ${documents.valid_id ? 'text-emerald-400' : 'text-neutral-500'}`}>
                            {documents.valid_id ? documents.valid_id.name : 'Not provided'}
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-neutral-400">Store Photo:</span>
                          <span className={`font-mono text-[11px] ${documents.store_photo ? 'text-emerald-400' : 'text-neutral-500'}`}>
                            {documents.store_photo ? documents.store_photo.name : 'Not provided'}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Wholesale Order Table Summary */}
                  <div className="p-5 rounded-2xl bg-[#08080b] border border-white/10 space-y-3">
                    <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
                      <span className="text-xs font-bold uppercase text-white flex items-center space-x-1.5">
                        <ShoppingBag size={14} className="text-rose-500" />
                        <span>Initial Wholesale Order Batch ({totalItemCount} units)</span>
                      </span>
                      <button
                        type="button"
                        onClick={() => setCurrentStep(3)}
                        className="text-[10px] font-mono text-rose-400 hover:underline uppercase"
                      >
                        Edit Order
                      </button>
                    </div>

                    <div className="space-y-2 max-h-48 overflow-y-auto pr-1">
                      {Object.entries(orderItems).map(([pId, qty]) => {
                        const prod = catalogProducts.find(p => p.id === parseInt(pId));
                        if (!prod) return null;
                        const price = prod.dealer_wholesale_price || (prod.retail_price * 0.7);

                        return (
                          <div key={pId} className="flex justify-between items-center text-xs py-1 border-b border-white/[0.04]">
                            <div>
                              <span className="text-white font-medium">{prod.name}</span>
                              <span className="text-neutral-500 font-mono text-[10px] ml-2">x {qty}</span>
                            </div>
                            <span className="font-mono text-neutral-300">₱{(price * qty).toLocaleString()}</span>
                          </div>
                        );
                      })}
                    </div>

                    <div className="pt-3 border-t border-white/10 flex justify-between items-center text-xs">
                      <span className="font-bold text-white uppercase">Wholesale Total Amount Payable:</span>
                      <strong className="text-rose-400 font-mono text-base">₱{subtotal.toLocaleString()}</strong>
                    </div>
                  </div>

                  <div>
                    <label className="text-[11px] font-mono uppercase text-neutral-400 block mb-1.5 font-semibold">
                      Special Delivery Instructions / Remarks (Optional)
                    </label>
                    <textarea
                      rows={2}
                      placeholder="Add any specific requests regarding shipping couriers, preferred dispatch schedule, etc."
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full px-4 py-2.5 bg-[#08080b] border border-white/10 rounded-xl text-xs text-white placeholder-neutral-600 focus:outline-none focus:border-rose-500"
                    ></textarea>
                  </div>

                  <div className="pt-4 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => setCurrentStep(3)}
                      className="px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-neutral-300 hover:text-white font-bold text-xs uppercase tracking-wider transition flex items-center space-x-2"
                    >
                      <ArrowLeft size={15} />
                      <span>Back to Order Selection</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleFinalSubmit}
                      className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-rose-600 to-rose-700 hover:from-rose-500 hover:to-rose-600 text-white font-bold text-xs uppercase tracking-wider transition shadow-xl shadow-rose-950 flex items-center space-x-2"
                    >
                      <FileCheck size={16} />
                      <span>Submit Dealership Application</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

    </div>
  );
}
