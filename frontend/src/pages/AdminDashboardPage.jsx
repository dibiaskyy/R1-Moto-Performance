import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { 
  Package, 
  Users, 
  Plus, 
  Trash2, 
  Edit2,
  CheckCircle, 
  XCircle, 
  Clock, 
  Shield, 
  Search, 
  RefreshCw,
  Building,
  DollarSign,
  AlertCircle,
  LogOut,
  X,
  Image as ImageIcon,
  Camera
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Available official Product Catalog photos
const AVAILABLE_PRODUCT_IMAGES = [
  { path: '/images/products/pulley-set.png', label: 'Pulley Set' },
  { path: '/images/products/bell.png', label: 'Clutch Bell' },
  { path: '/images/products/clutch-lining.png', label: 'Clutch Lining' },
  { path: '/images/products/flyball.png', label: 'Flyball Rollers' },
  { path: '/images/products/center-spring.png', label: 'Center Spring' },
  { path: '/images/products/clutch-spring.png', label: 'Clutch Spring' },
  { path: '/images/products/brakepad.png', label: 'Ceramic Brake Pad' },
  { path: '/images/products/torque-drive.png', label: 'Torque Drive' },
  { path: '/images/products/slider-piece.png', label: 'Slider Piece' },
  { path: '/images/products/cvt-cleaner.png', label: 'CVT Cleaner' },
  { path: '/images/products/fork-oil.png', label: 'Race Fork Oil' }
];

// Available Macro Lens Zoom Crop photos grouped by component
const AVAILABLE_MACRO_IMAGES = [
  { path: '/images/products/crops/pulley_set_1.png', label: 'Pulley Set #1', category: 'Pulley' },
  { path: '/images/products/crops/pulley_set_2.png', label: 'Pulley Set #2', category: 'Pulley' },
  { path: '/images/products/crops/pulley_set_3.png', label: 'Pulley Set #3', category: 'Pulley' },
  { path: '/images/products/crops/pulley_set_4.png', label: 'Pulley Set #4', category: 'Pulley' },
  { path: '/images/products/crops/bell_1.png', label: 'Clutch Bell #1', category: 'Bell' },
  { path: '/images/products/crops/bell_2.png', label: 'Clutch Bell #2', category: 'Bell' },
  { path: '/images/products/crops/bell_3.png', label: 'Clutch Bell #3', category: 'Bell' },
  { path: '/images/products/crops/bell_4.png', label: 'Clutch Bell #4', category: 'Bell' },
  { path: '/images/products/crops/clutch_lining_1.png', label: 'Clutch Lining #1', category: 'Clutch Lining' },
  { path: '/images/products/crops/clutch_lining_2.png', label: 'Clutch Lining #2', category: 'Clutch Lining' },
  { path: '/images/products/crops/clutch_lining_3.png', label: 'Clutch Lining #3', category: 'Clutch Lining' },
  { path: '/images/products/crops/clutch_lining_4.png', label: 'Clutch Lining #4', category: 'Clutch Lining' },
  { path: '/images/products/crops/flyball_1.png', label: 'Flyball #1', category: 'Flyball' },
  { path: '/images/products/crops/flyball_2.png', label: 'Flyball #2', category: 'Flyball' },
  { path: '/images/products/crops/flyball_3.png', label: 'Flyball #3', category: 'Flyball' },
  { path: '/images/products/crops/flyball_4.png', label: 'Flyball #4', category: 'Flyball' },
  { path: '/images/products/crops/center_spring_1.png', label: 'Center Spring #1', category: 'Center Spring' },
  { path: '/images/products/crops/center_spring_2.png', label: 'Center Spring #2', category: 'Center Spring' },
  { path: '/images/products/crops/center_spring_3.png', label: 'Center Spring #3', category: 'Center Spring' },
  { path: '/images/products/crops/center_spring_4.png', label: 'Center Spring #4', category: 'Center Spring' },
  { path: '/images/products/crops/clutch_spring_1.png', label: 'Clutch Spring #1', category: 'Clutch Spring' },
  { path: '/images/products/crops/clutch_spring_2.png', label: 'Clutch Spring #2', category: 'Clutch Spring' },
  { path: '/images/products/crops/clutch_spring_3.png', label: 'Clutch Spring #3', category: 'Clutch Spring' },
  { path: '/images/products/crops/clutch_spring_4.png', label: 'Clutch Spring #4', category: 'Clutch Spring' },
  { path: '/images/products/crops/brakepad_1.png', label: 'Brake Pad #1', category: 'Brake Pad' },
  { path: '/images/products/crops/brakepad_2.png', label: 'Brake Pad #2', category: 'Brake Pad' },
  { path: '/images/products/crops/brakepad_3.png', label: 'Brake Pad #3', category: 'Brake Pad' },
  { path: '/images/products/crops/brakepad_4.png', label: 'Brake Pad #4', category: 'Brake Pad' },
  { path: '/images/products/crops/torque_drive_1.png', label: 'Torque Drive #1', category: 'Torque Drive' },
  { path: '/images/products/crops/torque_drive_2.png', label: 'Torque Drive #2', category: 'Torque Drive' },
  { path: '/images/products/crops/torque_drive_3.png', label: 'Torque Drive #3', category: 'Torque Drive' },
  { path: '/images/products/crops/torque_drive_4.png', label: 'Torque Drive #4', category: 'Torque Drive' },
  { path: '/images/products/crops/slider_piece_1.png', label: 'Slider Piece #1', category: 'Slider Piece' },
  { path: '/images/products/crops/slider_piece_2.png', label: 'Slider Piece #2', category: 'Slider Piece' },
  { path: '/images/products/crops/slider_piece_3.png', label: 'Slider Piece #3', category: 'Slider Piece' },
  { path: '/images/products/crops/slider_piece_4.png', label: 'Slider Piece #4', category: 'Slider Piece' },
  { path: '/images/products/crops/cvt_cleaner_1.png', label: 'CVT Cleaner #1', category: 'CVT Cleaner' },
  { path: '/images/products/crops/cvt_cleaner_2.png', label: 'CVT Cleaner #2', category: 'CVT Cleaner' },
  { path: '/images/products/crops/cvt_cleaner_3.png', label: 'CVT Cleaner #3', category: 'CVT Cleaner' },
  { path: '/images/products/crops/cvt_cleaner_4.png', label: 'CVT Cleaner #4', category: 'CVT Cleaner' },
  { path: '/images/products/crops/fork_oil_1.png', label: 'Fork Oil #1', category: 'Fork Oil' },
  { path: '/images/products/crops/fork_oil_2.png', label: 'Fork Oil #2', category: 'Fork Oil' },
  { path: '/images/products/crops/fork_oil_3.png', label: 'Fork Oil #3', category: 'Fork Oil' },
  { path: '/images/products/crops/fork_oil_4.png', label: 'Fork Oil #4', category: 'Fork Oil' }
];

export default function AdminDashboardPage() {
  const { user, role, isAuthenticated, loading, logout } = useAuth();
  const navigate = useNavigate();

  // Route Guard: only admins can see this page
  useEffect(() => {
    if (!loading && (!isAuthenticated || role !== 'admin')) {
      navigate('/login');
    }
  }, [loading, isAuthenticated, role, navigate]);
  const [activeTab, setActiveTab] = useState('dealers'); // 'dealers' or 'products'
  
  // Dealers Management State
  const [dealers, setDealers] = useState([]);
  const [dealersLoading, setDealersLoading] = useState(false);
  const [dealerActionMsg, setDealerActionMsg] = useState('');

  // Products CRUD State
  const [products, setProducts] = useState([]);
  const [productsLoading, setProductsLoading] = useState(false);
  const [productActionMsg, setProductActionMsg] = useState('');
  const [showAddModal, setShowAddModal] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  
  // Visual Image Picker Modals
  const [showProductImagePicker, setShowProductImagePicker] = useState(false);
  const [macroImagePickerIndex, setMacroImagePickerIndex] = useState(null); // index of spec being picked
  const [macroCategoryFilter, setMacroCategoryFilter] = useState('All');

  const [newProduct, setNewProduct] = useState({
    name: '',
    category_id: '1',
    sku: '',
    retail_price: '',
    description: '',
    image_url: '/images/products/pulley-set.png'
  });

  // Fetch pending/registered dealers
  const fetchDealers = async () => {
    setDealersLoading(true);
    try {
      const res = await fetch('http://127.0.0.1:8000/api/v1/admin/dealers');
      const data = await res.json();
      if (data && data.data && data.data.length > 0) {
        setDealers(data.data);
      } else {
        throw new Error('Empty dealers');
      }
    } catch (e) {
      // Local fallback for offline/restart mode
      const localUsers = JSON.parse(localStorage.getItem('r1_registered_users') || '[]');
      let dealerList = localUsers.filter(u => u.role === 'dealer');
      if (dealerList.length === 0) {
        dealerList = [
          {
            id: 8,
            name: 'ProMoto Garage Philippines',
            email: 'contact@promoto.ph',
            phone: '+63 917 555 1234',
            role: 'dealer',
            is_approved: 0,
            created_at: new Date().toISOString()
          },
          {
            id: 2,
            name: 'SpeedZone Moto Parts (Authorized Dealer)',
            email: 'dealer@r1moto.com',
            phone: '+63 928 987 6543',
            role: 'dealer',
            is_approved: 1,
            created_at: '2026-10-10 20:10:54'
          }
        ];
      }
      setDealers(dealerList);
    }
    setDealersLoading(false);
  };

  // Fetch products
  const fetchProducts = async () => {
    setProductsLoading(true);
    try {
      const res = await fetch('http://127.0.0.1:8000/api/v1/products');
      const data = await res.json();
      if (data && data.data && data.data.length > 0) {
        setProducts(data.data);
      } else {
        throw new Error('Empty products');
      }
    } catch (e) {
      // Offline fallback products with authentic catalog specs
      setProducts([
        {
          id: 1,
          name: 'R1 Pulley Set (Click 125)',
          sku: 'R1-PULLEY-Y-CLK',
          category_name: 'CVT Transmission',
          retail_price: 2000,
          stock_quantity: 150,
          description: 'CNC-machined aluminum alloy variator assembly with optimized ramp angles and precision cooling air fins.',
          image_url: '/images/products/pulley-set.png',
          primary_image: '/images/products/pulley-set.png'
        },
        {
          id: 2,
          name: 'R1 Pulley Set (NMAX / Aerox 155)',
          sku: 'R1-PULLEY-Y-NMAX',
          category_name: 'CVT Transmission',
          retail_price: 2700,
          stock_quantity: 120,
          description: 'Performance pulley set designed specifically for Yamaha NMAX 155 and Aerox 155.',
          image_url: '/images/products/pulley-set.png',
          primary_image: '/images/products/pulley-set.png'
        },
        {
          id: 3,
          name: 'R1 Clutch Bell (Aerox 155)',
          sku: 'R1-BELL-Y-AER',
          category_name: 'CVT Transmission',
          retail_price: 1800,
          stock_quantity: 85,
          description: 'Lightweight performance clutch bell engineered to eliminate clutch dragging and reduce rotating mass.',
          image_url: '/images/products/bell.png',
          primary_image: '/images/products/bell.png'
        },
        {
          id: 4,
          name: 'R1 Clutch Lining Assembly (Aerox / NMAX 155)',
          sku: 'R1-LINING-Y-155',
          category_name: 'CVT Transmission',
          retail_price: 1950,
          stock_quantity: 95,
          description: 'Kevlar-copper composite clutch shoe assembly engineered to resist glazing and overheating.',
          image_url: '/images/products/clutch-lining.png',
          primary_image: '/images/products/clutch-lining.png'
        },
        {
          id: 5,
          name: 'R1 Performance Flyball Roller Weights (Set of 6)',
          sku: 'R1-FLYBALL-SET',
          category_name: 'CVT Tuning',
          retail_price: 380,
          stock_quantity: 250,
          description: 'Precision balanced brass-core roller weights with wear-resistant self-lubricating nylon sleeve.',
          image_url: '/images/products/flyball.png',
          primary_image: '/images/products/flyball.png'
        },
        {
          id: 6,
          name: 'R1 Ceramic Disc Brake Pad (Aerox / NMAX / Click)',
          sku: 'R1-BRAKEPAD-CERAMIC',
          category_name: 'Braking Systems',
          retail_price: 350,
          stock_quantity: 220,
          description: 'Ceramic-copper composite disc brake pad providing maximum stopping power with zero rotor scoring.',
          image_url: '/images/products/brakepad.png',
          primary_image: '/images/products/brakepad.png'
        }
      ]);
    }
    setProductsLoading(false);
  };

  useEffect(() => {
    fetchDealers();
    fetchProducts();
  }, []);

  // Dealer Approval Handler
  const handleDealerApproval = async (dealerId, action) => {
    try {
      const res = await fetch('http://127.0.0.1:8000/api/v1/admin/dealers/approve', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ user_id: dealerId, action })
      });
      const data = await res.json();
      setDealerActionMsg(data.message || `Dealer ${action}d successfully!`);
      
      // Update local storage too
      const localUsers = JSON.parse(localStorage.getItem('r1_registered_users') || '[]');
      const updated = localUsers.map(u => u.id === dealerId ? { ...u, is_approved: action === 'approve' } : u);
      localStorage.setItem('r1_registered_users', JSON.stringify(updated));

      fetchDealers();
      setTimeout(() => setDealerActionMsg(''), 4000);
    } catch (e) {
      setDealerActionMsg('Action processed locally.');
      fetchDealers();
    }
  };

  // Product Delete Handler
  const handleDeleteProduct = async (id) => {
    if (!window.confirm('Are you sure you want to delete this product?')) return;
    try {
      await fetch(`http://127.0.0.1:8000/api/v1/admin/products/${id}`, {
        method: 'DELETE'
      });
      setProductActionMsg('Product deleted successfully.');
      fetchProducts();
      setTimeout(() => setProductActionMsg(''), 3000);
    } catch (e) {
      console.error(e);
    }
  };

  // Product Add Handler
  const handleCreateProduct = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://127.0.0.1:8000/api/v1/products', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newProduct)
      });
      const data = await res.json();
      setProductActionMsg('New product published successfully!');
      setShowAddModal(false);
      setNewProduct({
        name: '',
        category_id: '1',
        sku: '',
        retail_price: '',
        description: '',
        image_url: '/images/products/pulley-set.png'
      });
      fetchProducts();
      setTimeout(() => setProductActionMsg(''), 3000);
    } catch (e) {
      console.error(e);
    }
  };

  // Product Edit Handler
  const handleUpdateProduct = async (e) => {
    e.preventDefault();
    if (!editingProduct) return;
    try {
      const res = await fetch(`http://127.0.0.1:8000/api/v1/admin/products/${editingProduct.id}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: editingProduct.name,
          retail_price: editingProduct.retail_price,
          description: editingProduct.description,
          stock_quantity: editingProduct.stock_quantity,
          primary_image: editingProduct.image,
          image_url: editingProduct.image,
          specHighlights: editingProduct.specHighlights || []
        })
      });
      const data = await res.json();
      setProductActionMsg(data.message || 'Product updated successfully!');
      setEditingProduct(null);
      fetchProducts();
      setTimeout(() => setProductActionMsg(''), 3000);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="min-h-screen bg-[#070709] text-neutral-100 flex flex-col justify-between select-none">
      
      {/* Clean Minimal Top Header Bar (Sticky: stays in sight when scrolling) */}
      <header className="sticky top-0 z-40 border-b border-white/[0.08] bg-[#09090d]/95 backdrop-blur-md shadow-lg shadow-black/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img
              src="/images/r1-logo-full.png"
              alt="R1 Moto Performance"
              className="h-8 sm:h-9 w-auto object-contain drop-shadow-[0_0_12px_rgba(225,29,72,0.4)]"
            />
          </div>

          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-2.5 px-3 py-1.5 bg-[#121217] border border-white/10 rounded-full shadow-inner">
              <div className="w-7 h-7 rounded-full bg-rose-600/30 border border-rose-500/40 text-rose-400 flex items-center justify-center font-bold text-xs uppercase shadow-sm">
                {(user?.name || 'A').charAt(0)}
              </div>
              <div className="flex flex-col pr-1">
                <span className="text-xs font-semibold text-neutral-200 leading-tight">
                  {user?.name || 'Admin'}
                </span>
                <span className="text-[9px] font-mono text-rose-400 font-bold uppercase tracking-wider leading-none">
                  Admin
                </span>
              </div>
            </div>

            <button
              onClick={async () => {
                await logout();
                navigate('/login');
              }}
              className="px-3.5 py-1.5 rounded-full bg-rose-600/10 hover:bg-rose-600 text-rose-400 hover:text-white border border-rose-500/30 text-xs font-bold uppercase tracking-wider transition flex items-center space-x-1.5"
              title="Sign Out"
            >
              <LogOut size={13} />
              <span>Sign Out</span>
            </button>
          </div>
        </div>
      </header>

      {/* =========================================================================
          HERO BANNER: Matching User's Catalog & Compatibility Pages Exactly
          ========================================================================= */}
      <section className="relative border-b border-white/[0.08] overflow-hidden pt-8 pb-10 sm:pt-12 sm:pb-14 bg-gradient-to-b from-[#0d0d12] via-[#09090d] to-[#070709]">
        <div className="absolute inset-0 tech-grid opacity-25 pointer-events-none"></div>
        <div className="absolute top-0 right-1/4 w-[500px] h-[300px] bg-rose-600/10 rounded-full blur-[140px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <h1 className="font-heading font-extrabold text-2xl sm:text-4xl text-white tracking-tight uppercase">
              Admin & Product Management
            </h1>
            <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">
              Verify B2B dealer registrations, approve dealership wholesale accounts, and manage official catalog items with live database synchronization.
            </p>
          </div>

          {/* Quick Tab Switcher & Refresh */}
          <div className="flex items-center space-x-3 self-start md:self-auto">
            <button
              onClick={() => { fetchDealers(); fetchProducts(); }}
              className="p-3 rounded-2xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-neutral-300 hover:text-white transition shadow-sm"
              title="Refresh Data"
            >
              <RefreshCw size={16} />
            </button>

            <div className="flex items-center p-1.5 rounded-2xl bg-[#0f0f14] border border-white/10 shadow-lg">
              <button
                onClick={() => setActiveTab('dealers')}
                className={`px-4 py-2 rounded-xl font-bold text-xs uppercase tracking-wider transition flex items-center space-x-2 ${
                  activeTab === 'dealers'
                    ? 'bg-sky-500/20 text-sky-400 border border-sky-500/40 shadow-lg shadow-sky-950/40'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                <Building size={14} />
                <span>Dealers</span>
                <span className="px-1.5 py-0.2 rounded-full bg-white/10 text-[10px] font-mono">
                  {dealers.length}
                </span>
              </button>

              <button
                onClick={() => setActiveTab('products')}
                className={`px-4 py-2 rounded-xl font-bold text-xs uppercase tracking-wider transition flex items-center space-x-2 ${
                  activeTab === 'products'
                    ? 'bg-rose-500/20 text-rose-400 border border-rose-500/40 shadow-lg shadow-rose-950/40'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                <Package size={14} />
                <span>Products CRUD</span>
                <span className="px-1.5 py-0.2 rounded-full bg-white/10 text-[10px] font-mono">
                  {products.length}
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full space-y-8">
        
        {/* KPI Summary Cards (Catalog Items, Dealer Network, Pending Approvals) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
          <div className="p-5 rounded-2xl bg-[#0f0f14] border border-white/10 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-24 h-24 bg-rose-600/10 rounded-full blur-2xl pointer-events-none"></div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-mono uppercase text-neutral-400 tracking-wider">Catalog Items</span>
              <Package size={17} className="text-rose-500" />
            </div>
            <div className="text-2xl font-black font-heading text-white">{products.length}</div>
            <p className="text-[11px] text-neutral-500 mt-1">Active performance components</p>
          </div>

          <div className="p-5 rounded-2xl bg-[#0f0f14] border border-white/10 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-24 h-24 bg-sky-600/10 rounded-full blur-2xl pointer-events-none"></div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-mono uppercase text-neutral-400 tracking-wider">Dealer Network</span>
              <Building size={17} className="text-sky-400" />
            </div>
            <div className="text-2xl font-black font-heading text-white">{dealers.length}</div>
            <p className="text-[11px] text-neutral-500 mt-1">Total registered dealership partners</p>
          </div>

          <div className="p-5 rounded-2xl bg-[#0f0f14] border border-white/10 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-24 h-24 bg-amber-600/10 rounded-full blur-2xl pointer-events-none"></div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-mono uppercase text-neutral-400 tracking-wider">Pending Approvals</span>
              <Clock size={17} className="text-amber-400" />
            </div>
            <div className="text-2xl font-black font-heading text-amber-400">
              {dealers.filter(d => Number(d.is_approved) !== 1).length}
            </div>
            <p className="text-[11px] text-neutral-500 mt-1">Awaiting your confirmation</p>
          </div>
        </div>

        {/* TAB 1: DEALER ACCOUNT CONFIRMATIONS */}
        {activeTab === 'dealers' && (
          <div className="space-y-4">
            {dealerActionMsg && (
              <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs flex items-center space-x-2">
                <CheckCircle size={16} />
                <span>{dealerActionMsg}</span>
              </div>
            )}

            <div className="bg-[#0f0f14] border border-white/10 rounded-2xl overflow-hidden shadow-xl">
              <div className="p-4 border-b border-white/10 flex items-center justify-between">
                <h3 className="font-heading font-bold text-sm text-white uppercase tracking-wider">
                  B2B Dealer Registrations Awaiting Confirmation
                </h3>
                <span className="text-xs text-neutral-400">
                  Dealers cannot log in until approved below.
                </span>
              </div>

              {dealersLoading ? (
                <div className="p-10 text-center text-xs text-neutral-500">Loading dealer accounts...</div>
              ) : dealers.length === 0 ? (
                <div className="p-10 text-center text-xs text-neutral-500">No registered dealer accounts found.</div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs text-neutral-300">
                    <thead className="bg-[#14141c] text-neutral-400 uppercase text-[10px] tracking-wider border-b border-white/10">
                      <tr>
                        <th className="p-4">Dealership / Partner</th>
                        <th className="p-4">Email</th>
                        <th className="p-4">Phone</th>
                        <th className="p-4">Status</th>
                        <th className="p-4 text-right">Admin Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/[0.06]">
                      {dealers.map((d) => {
                        const isApproved = Number(d.is_approved) === 1;
                        return (
                          <tr key={d.id} className="hover:bg-white/[0.02] transition">
                            <td className="p-4 font-semibold text-white flex items-center space-x-2">
                              <Building size={15} className="text-sky-400 shrink-0" />
                              <span>{d.name}</span>
                            </td>
                            <td className="p-4 text-neutral-400 font-mono">{d.email}</td>
                            <td className="p-4 text-neutral-400">{d.phone || 'N/A'}</td>
                            <td className="p-4">
                              {isApproved ? (
                                <span className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-bold text-[10px] uppercase">
                                  <CheckCircle size={12} />
                                  <span>Confirmed / Active</span>
                                </span>
                              ) : (
                                <span className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20 font-bold text-[10px] uppercase">
                                  <Clock size={12} />
                                  <span>Pending Approval</span>
                                </span>
                              )}
                            </td>
                            <td className="p-4 text-right">
                              {!isApproved ? (
                                <button
                                  onClick={() => handleDealerApproval(d.id, 'approve')}
                                  className="px-3.5 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider transition shadow-md shadow-emerald-950"
                                >
                                  Confirm & Activate
                                </button>
                              ) : (
                                <button
                                  onClick={() => handleDealerApproval(d.id, 'reject')}
                                  className="px-3 py-1.5 rounded-lg bg-rose-600/20 hover:bg-rose-600/30 text-rose-400 border border-rose-500/30 font-bold text-xs uppercase tracking-wider transition"
                                >
                                  Revoke Access
                                </button>
                              )}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        )}

        {/* TAB 2: PRODUCT CATALOG CRUD */}
        {activeTab === 'products' && (
          <div className="space-y-6">
            {/* Header controls: Single clean 'Add New Product' button */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-white/[0.06]">
              <div className="flex items-center space-x-3">
                <span className="text-xs text-neutral-400">
                  Showing <strong className="text-white font-semibold">{products.length}</strong> live catalog components
                </span>
                {productActionMsg && (
                  <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold animate-fade-in">
                    <CheckCircle size={13} />
                    <span>{productActionMsg}</span>
                  </span>
                )}
              </div>

              <button
                onClick={() => setShowAddModal(true)}
                className="px-5 py-2.5 rounded-full bg-gradient-to-r from-rose-600 to-red-600 hover:from-rose-500 hover:to-red-500 text-white font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-xl shadow-rose-600/25 flex items-center justify-center space-x-2 self-start sm:self-auto"
              >
                <Plus size={16} />
                <span>Add New Product</span>
              </button>
            </div>

            {/* Product Cards Grid: High-end Motorsport Aesthetic identical to user catalog */}
            {productsLoading ? (
              <div className="p-16 text-center text-xs text-neutral-500 bg-[#0c0c12] rounded-3xl border border-white/[0.08]">
                Loading catalog components from database...
              </div>
            ) : products.length === 0 ? (
              <div className="p-16 text-center text-xs text-neutral-500 bg-[#0c0c12] rounded-3xl border border-white/[0.08]">
                No performance products in database. Click "Add New Product" to publish the first item.
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {products.map((p) => {
                  // Smart image fallback: maps name/category/sku to the authentic HD product asset
                  const getProductImg = (item) => {
                    if (item.image_url && item.image_url !== '/images/products/sample.png' && !item.image_url.includes('r1-logo')) {
                      return item.image_url;
                    }
                    if (item.primary_image && !item.primary_image.includes('r1-logo')) {
                      return item.primary_image;
                    }
                    const n = (item.name || '').toLowerCase();
                    const sku = (item.sku || '').toLowerCase();
                    if (n.includes('pulley') || sku.includes('pulley')) return '/images/products/pulley-set.png';
                    if (n.includes('clutch bell') || n.includes('bell') || sku.includes('bell')) return '/images/products/bell.png';
                    if (n.includes('clutch lining') || n.includes('lining') || sku.includes('lining')) return '/images/products/clutch-lining.png';
                    if (n.includes('roller') || n.includes('flyball') || sku.includes('flyball')) return '/images/products/flyball.png';
                    if (n.includes('center spring') || sku.includes('center-spring')) return '/images/products/center-spring.png';
                    if (n.includes('clutch spring') || sku.includes('clutch-spring')) return '/images/products/clutch-spring.png';
                    if (n.includes('cleaner') || sku.includes('cleaner')) return '/images/products/cvt-cleaner.png';
                    if (n.includes('slider') || sku.includes('slider')) return '/images/products/slider-piece.png';
                    if (n.includes('brake') || n.includes('pad') || sku.includes('brakepad') || sku.includes('pad')) return '/images/products/brakepad.png';
                    if (n.includes('fork oil') || n.includes('oil') || sku.includes('fork')) return '/images/products/fork-oil.png';
                    if (n.includes('torque drive') || sku.includes('torque')) return '/images/products/torque-drive.png';
                    return '/images/products/pulley-set.png';
                  };

                  const resolvedImg = getProductImg(p);

                  return (
                    <div
                      key={p.id}
                      className="group rounded-3xl bg-[#0c0c12] border border-white/[0.08] hover:border-rose-500/50 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(225,29,72,0.15)] overflow-hidden"
                    >
                      <div>
                        {/* Product Card Top: Stage Pedestal with glow */}
                        <div className="relative h-48 w-full stage-pedestal rounded-t-2xl p-4 flex items-center justify-center overflow-hidden border-b border-white/[0.05]">
                          <div className="absolute inset-0 stage-glow pointer-events-none"></div>

                          {/* Top SKU Badge */}
                          <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
                            <span className="px-2.5 py-0.5 rounded-md text-[9px] font-mono uppercase tracking-wider bg-black/60 border border-white/10 text-neutral-300">
                              {p.sku || 'R1-MOTO'}
                            </span>
                            <span className="px-2 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider bg-rose-500/15 border border-rose-500/30 text-rose-400">
                              {p.category_name || 'CVT'}
                            </span>
                          </div>

                          <img
                            src={resolvedImg}
                            alt={p.name}
                            className="h-32 w-auto object-contain transition-transform duration-300 group-hover:scale-110 drop-shadow-[0_8px_20px_rgba(0,0,0,0.8)] z-10"
                            onError={(e) => { e.target.src = '/images/products/pulley-set.png'; }}
                          />
                        </div>

                        {/* Product Content */}
                        <div className="p-5 space-y-3">
                          <div>
                            <h4 className="font-heading font-bold text-sm text-white group-hover:text-rose-400 transition-colors line-clamp-1">
                              {p.name}
                            </h4>
                            <p className="text-[11px] text-neutral-400 line-clamp-2 mt-1 leading-relaxed">
                              {p.description || p.summary || 'High-performance motorcycle component precision-engineered for smooth power transfer.'}
                            </p>
                          </div>

                          {/* Pricing Details: Clean, unified retail price without wholesale */}
                          <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-between text-xs">
                            <span className="text-[10px] uppercase tracking-wider text-neutral-400 font-mono font-medium">Price</span>
                            <span className="font-extrabold text-white text-base font-heading text-rose-400">
                              ₱{Number(p.retail_price || p.suggested_retail_price || 0).toLocaleString()}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Admin Actions Footer: Edit & Delete Buttons */}
                      <div className="p-4 pt-0 flex items-center justify-between border-t border-white/[0.04]">
                        <span className="text-[10px] text-neutral-500 font-mono">ID #{p.id}</span>
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() => {
                              let parsedSpecs = [];
                              if (Array.isArray(p.specs)) {
                                parsedSpecs = p.specs;
                              } else if (typeof p.specs === 'string' && p.specs.trim().startsWith('[')) {
                                try {
                                  parsedSpecs = JSON.parse(p.specs);
                                } catch (e) {
                                  parsedSpecs = [];
                                }
                              } else if (Array.isArray(p.key_features)) {
                                parsedSpecs = p.key_features.map(f => ({
                                  title: f,
                                  desc: 'High performance specification engineered by R1.',
                                  img: '/images/products/crops/pulley_set_1.png'
                                }));
                              }

                              if (!parsedSpecs || parsedSpecs.length === 0) {
                                parsedSpecs = [
                                  { title: 'CNC-Machined Aerospace Alloy', desc: 'Crafted from premium aluminum alloy for maximum strength.', img: '/images/products/crops/pulley_set_1.png' },
                                  { title: 'Precision-Machined Surface', desc: 'CNC-machined pulley faces ensure smooth belt travel.', img: '/images/products/crops/pulley_set_2.png' },
                                  { title: 'Optimized Ramp Angle', desc: 'Designed with precise ramp angles for smooth acceleration.', img: '/images/products/crops/pulley_set_3.png' }
                                ];
                              }

                              setEditingProduct({
                                id: p.id,
                                name: p.name,
                                retail_price: p.retail_price || p.suggested_retail_price || 0,
                                stock_quantity: p.stock_quantity ?? 50,
                                image: resolvedImg,
                                description: p.description || p.summary || '',
                                specHighlights: parsedSpecs
                              });
                            }}
                            className="px-3 py-1.5 rounded-full bg-sky-600/10 hover:bg-sky-600 text-sky-400 hover:text-white border border-sky-500/30 text-[11px] font-bold uppercase tracking-wider transition flex items-center space-x-1"
                            title="Edit Product"
                          >
                            <Edit2 size={12} />
                            <span>Edit</span>
                          </button>

                          <button
                            onClick={() => handleDeleteProduct(p.id)}
                            className="px-3 py-1.5 rounded-full bg-rose-600/10 hover:bg-rose-600 text-rose-400 hover:text-white border border-rose-500/20 text-[11px] font-bold uppercase tracking-wider transition flex items-center space-x-1"
                            title="Delete Product"
                          >
                            <Trash2 size={12} />
                            <span>Delete</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}

      {/* Edit Product Modal: Comprehensive Editor (Price, Stocks, Main Image, Macro Specs & Pictures) */}
      {editingProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/85 backdrop-blur-md overflow-y-auto animate-fade-in">
          <div className="relative w-full max-w-2xl my-auto p-6 sm:p-8 bg-[#101018] border border-white/15 rounded-3xl shadow-[0_20px_70px_rgba(0,0,0,0.9)] overflow-hidden max-h-[90vh] flex flex-col">
            <div className="flex items-center justify-between pb-4 border-b border-white/10 flex-shrink-0">
              <div className="flex items-center space-x-2.5">
                <div className="p-2 rounded-xl bg-sky-500/10 border border-sky-500/20 text-sky-400">
                  <Edit2 size={18} />
                </div>
                <div>
                  <h3 className="font-heading font-black text-lg text-white uppercase tracking-wider">
                    Edit Product Specifications
                  </h3>
                  <p className="text-[11px] text-neutral-400">
                    Modify prices, warehouse stock, primary image, and macro zoom engineering specs.
                  </p>
                </div>
              </div>
              <button
                onClick={() => setEditingProduct(null)}
                className="p-2 rounded-xl text-neutral-400 hover:text-white hover:bg-white/10 transition"
              >
                <X size={18} />
              </button>
            </div>

            <form onSubmit={handleUpdateProduct} className="space-y-5 text-xs overflow-y-auto pr-1 py-4 flex-1">
              {/* Product Basic Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="sm:col-span-2">
                  <label className="block text-neutral-300 font-bold uppercase tracking-wider mb-1.5 text-[10px]">
                    Product Title
                  </label>
                  <input
                    type="text"
                    required
                    value={editingProduct.name}
                    onChange={(e) => setEditingProduct({ ...editingProduct, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-[#0a0a0f] border border-white/15 rounded-xl text-white font-semibold focus:outline-none focus:border-sky-500"
                  />
                </div>

                <div>
                  <label className="block text-neutral-300 font-bold uppercase tracking-wider mb-1.5 text-[10px]">
                    Retail Price (₱) <span className="text-rose-400 font-mono">*Live Synced</span>
                  </label>
                  <input
                    type="number"
                    required
                    value={editingProduct.retail_price}
                    onChange={(e) => setEditingProduct({ ...editingProduct, retail_price: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-[#0a0a0f] border border-white/15 rounded-xl text-white font-mono font-bold focus:outline-none focus:border-sky-500"
                  />
                </div>

                <div>
                  <label className="block text-neutral-300 font-bold uppercase tracking-wider mb-1.5 text-[10px]">
                    Warehouse Stock Quantity
                  </label>
                  <input
                    type="number"
                    required
                    value={editingProduct.stock_quantity ?? 50}
                    onChange={(e) => setEditingProduct({ ...editingProduct, stock_quantity: Number(e.target.value) })}
                    className="w-full px-3.5 py-2.5 bg-[#0a0a0f] border border-white/15 rounded-xl text-white font-mono focus:outline-none focus:border-sky-500"
                  />
                </div>
              </div>

              {/* Product Primary Image Selector - Visual Card & Picker Trigger */}
              <div>
                <label className="block text-neutral-300 font-bold uppercase tracking-wider mb-1.5 text-[10px]">
                  Product Primary Photo
                </label>
                <div className="flex items-center space-x-3 p-3 rounded-2xl bg-black/40 border border-white/10">
                  <div className="w-16 h-16 rounded-xl bg-black/80 border border-white/20 p-1.5 flex-shrink-0 flex items-center justify-center overflow-hidden">
                    <img
                      src={editingProduct.image || '/images/products/pulley-set.png'}
                      alt="Selected Product"
                      className="w-full h-full object-contain"
                      onError={(e) => { e.target.src = '/images/products/pulley-set.png'; }}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs font-bold text-white truncate">
                      {AVAILABLE_PRODUCT_IMAGES.find(img => img.path === editingProduct.image)?.label || 'Custom Product Image'}
                    </div>
                    <div className="text-[10px] font-mono text-neutral-400 truncate">
                      {editingProduct.image || '/images/products/pulley-set.png'}
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => setShowProductImagePicker(true)}
                    className="px-3.5 py-2 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-bold text-[11px] uppercase tracking-wider transition flex items-center space-x-1.5 shadow-md shadow-sky-950 flex-shrink-0"
                  >
                    <ImageIcon size={14} />
                    <span>Choose Picture</span>
                  </button>
                </div>
              </div>

              {/* Description */}
              <div>
                <label className="block text-neutral-300 font-bold uppercase tracking-wider mb-1.5 text-[10px]">
                  Description & Specifications Overview
                </label>
                <textarea
                  rows={2}
                  value={editingProduct.description || ''}
                  onChange={(e) => setEditingProduct({ ...editingProduct, description: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-[#0a0a0f] border border-white/15 rounded-xl text-white focus:outline-none focus:border-sky-500 leading-relaxed"
                />
              </div>

              {/* Component Engineering Zoom / Macro Breakdown Specs Editor */}
              <div className="pt-2 border-t border-white/10 space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-heading font-black text-xs text-white uppercase tracking-wider">
                      Macro Spec Highlights & Lens Photos
                    </h4>
                    <p className="text-[10px] text-neutral-400">
                      These are the interactive circular zoom breakdowns shown in the product details view. Pick lens photos visually!
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      const cur = editingProduct.specHighlights || [];
                      setEditingProduct({
                        ...editingProduct,
                        specHighlights: [
                          ...cur,
                          { title: 'New Engineering Feature', desc: 'Detailed performance breakdown.', img: '/images/products/crops/pulley_set_1.png' }
                        ]
                      });
                    }}
                    className="px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-[10px] uppercase tracking-wider transition flex items-center space-x-1"
                  >
                    <Plus size={12} />
                    <span>Add Macro Spec</span>
                  </button>
                </div>

                <div className="space-y-3">
                  {(editingProduct.specHighlights && editingProduct.specHighlights.length > 0
                    ? editingProduct.specHighlights
                    : [
                        { title: 'CNC-Machined Aerospace Alloy', desc: 'Crafted from premium aluminum alloy for maximum strength.', img: '/images/products/crops/pulley_set_1.png' },
                        { title: 'Precision-Machined Surface', desc: 'CNC-machined pulley faces ensure smooth belt travel.', img: '/images/products/crops/pulley_set_2.png' }
                      ]
                  ).map((spec, idx) => (
                    <div key={idx} className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/[0.08] space-y-2.5">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-mono text-rose-400 font-bold uppercase tracking-wider">
                          Macro Lens #{idx + 1}
                        </span>
                        {editingProduct.specHighlights && editingProduct.specHighlights.length > 1 && (
                          <button
                            type="button"
                            onClick={() => {
                              const updated = editingProduct.specHighlights.filter((_, i) => i !== idx);
                              setEditingProduct({ ...editingProduct, specHighlights: updated });
                            }}
                            className="text-neutral-500 hover:text-rose-400 text-[10px]"
                          >
                            Remove
                          </button>
                        )}
                      </div>

                      {/* Visual Macro Lens Picture Selector Row */}
                      <div className="flex items-center space-x-3 p-2.5 rounded-xl bg-black/30 border border-white/10">
                        <div className="w-12 h-12 rounded-full overflow-hidden bg-black/80 border-2 border-rose-500/50 flex-shrink-0 p-1 flex items-center justify-center">
                          <img
                            src={spec.img || '/images/products/crops/pulley_set_1.png'}
                            alt={`Lens ${idx + 1}`}
                            className="w-full h-full object-cover rounded-full"
                            onError={(e) => { e.target.src = '/images/products/crops/pulley_set_1.png'; }}
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-[11px] font-bold text-white truncate">
                            {AVAILABLE_MACRO_IMAGES.find(m => m.path === spec.img)?.label || 'Custom Macro Lens'}
                          </div>
                          <div className="text-[9px] font-mono text-neutral-400 truncate">
                            {spec.img || '/images/products/crops/pulley_set_1.png'}
                          </div>
                        </div>
                        <button
                          type="button"
                          onClick={() => {
                            setMacroCategoryFilter('All');
                            setMacroImagePickerIndex(idx);
                          }}
                          className="px-3 py-1.5 rounded-lg bg-rose-600/20 hover:bg-rose-600 text-rose-400 hover:text-white border border-rose-500/30 text-[10px] font-bold uppercase tracking-wider transition flex items-center space-x-1 flex-shrink-0"
                        >
                          <Camera size={13} />
                          <span>Pick Picture</span>
                        </button>
                      </div>

                      <div>
                        <input
                          type="text"
                          placeholder="Spec Title (e.g. High-Grade Aluminum)"
                          value={spec.title || ''}
                          onChange={(e) => {
                            const cur = [...(editingProduct.specHighlights || [])];
                            cur[idx] = { ...cur[idx], title: e.target.value };
                            setEditingProduct({ ...editingProduct, specHighlights: cur });
                          }}
                          className="w-full px-3 py-2 bg-[#0a0a0f] border border-white/10 rounded-lg text-white text-xs font-semibold focus:outline-none focus:border-sky-500"
                        />
                      </div>

                      <textarea
                        rows={2}
                        placeholder="Detailed specification explanation..."
                        value={spec.desc || ''}
                        onChange={(e) => {
                          const cur = [...(editingProduct.specHighlights || [])];
                          cur[idx] = { ...cur[idx], desc: e.target.value };
                          setEditingProduct({ ...editingProduct, specHighlights: cur });
                        }}
                        className="w-full px-3 py-2 bg-[#0a0a0f] border border-white/10 rounded-lg text-white text-xs focus:outline-none focus:border-sky-500 leading-relaxed"
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-end space-x-3 pt-4 border-t border-white/10 flex-shrink-0">
                <button
                  type="button"
                  onClick={() => setEditingProduct(null)}
                  className="px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-neutral-300 font-bold uppercase tracking-wider transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-500 hover:to-blue-500 text-white font-bold uppercase tracking-wider shadow-lg shadow-sky-950 flex items-center space-x-1.5 transition"
                >
                  <CheckCircle size={15} />
                  <span>Save All Changes</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Add Product Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
          <div className="relative w-full max-w-lg p-6 bg-[#161922] border border-[#2a3142] rounded-2xl shadow-2xl overflow-hidden">
            <h3 className="font-heading font-bold text-lg text-white uppercase tracking-wider mb-4">
              Add New Performance Part
            </h3>

            <form onSubmit={handleCreateProduct} className="space-y-3 text-xs">
              <div>
                <label className="block text-neutral-400 mb-1">Product Title</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. R1 Stage 3 Clutch Bell"
                  value={newProduct.name}
                  onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                  className="w-full px-3 py-2 bg-slate-900 border border-slate-800 rounded-lg text-white focus:outline-none focus:border-rose-500"
                />
              </div>

              <div>
                <label className="block text-neutral-400 mb-1">Price (₱)</label>
                <input
                  type="number"
                  required
                  placeholder="2500"
                  value={newProduct.retail_price}
                  onChange={(e) => setNewProduct({ ...newProduct, retail_price: e.target.value })}
                  className="w-full px-3 py-2 bg-slate-900 border border-slate-800 rounded-lg text-white focus:outline-none focus:border-rose-500"
                />
              </div>

              <div>
                <label className="block text-neutral-400 mb-1">Description</label>
                <textarea
                  rows={3}
                  placeholder="Enter specifications and features..."
                  value={newProduct.description}
                  onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
                  className="w-full px-3 py-2 bg-slate-900 border border-slate-800 rounded-lg text-white focus:outline-none focus:border-rose-500"
                />
              </div>

              <div className="flex items-center justify-end space-x-3 pt-3 border-t border-white/10">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-neutral-300 font-bold uppercase tracking-wider"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-lg bg-rose-600 hover:bg-rose-500 text-white font-bold uppercase tracking-wider shadow-md shadow-rose-950"
                >
                  Publish Product
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL: Visual Product Photo Picker */}
      {showProductImagePicker && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-3 sm:p-5 bg-black/90 backdrop-blur-md animate-fade-in">
          <div className="relative w-full max-w-2xl bg-[#0f0f16] border border-white/20 rounded-3xl shadow-[0_25px_80px_rgba(0,0,0,0.95)] overflow-hidden max-h-[85vh] flex flex-col p-6">
            <div className="flex items-center justify-between pb-4 border-b border-white/10 flex-shrink-0">
              <div className="flex items-center space-x-2.5">
                <div className="p-2 rounded-xl bg-sky-500/10 border border-sky-500/20 text-sky-400">
                  <ImageIcon size={18} />
                </div>
                <div>
                  <h3 className="font-heading font-black text-base text-white uppercase tracking-wider">
                    Select Product Primary Picture
                  </h3>
                  <p className="text-[11px] text-neutral-400">
                    Click any official R1 Moto Performance image to assign it to this product.
                  </p>
                </div>
              </div>
              <button
                onClick={() => setShowProductImagePicker(false)}
                className="p-2 rounded-xl text-neutral-400 hover:text-white hover:bg-white/10 transition"
              >
                <X size={18} />
              </button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 py-5 overflow-y-auto pr-1 flex-1">
              {AVAILABLE_PRODUCT_IMAGES.map((imgItem) => {
                const isSelected = editingProduct && editingProduct.image === imgItem.path;
                return (
                  <button
                    key={imgItem.path}
                    type="button"
                    onClick={() => {
                      if (editingProduct) {
                        setEditingProduct({ ...editingProduct, image: imgItem.path });
                      }
                      setShowProductImagePicker(false);
                    }}
                    className={`group relative p-3 rounded-2xl flex flex-col items-center text-center transition-all border ${
                      isSelected 
                        ? 'bg-sky-600/15 border-sky-400 shadow-[0_0_20px_rgba(56,189,248,0.25)]' 
                        : 'bg-black/40 border-white/10 hover:border-white/30 hover:bg-white/[0.04]'
                    }`}
                  >
                    <div className="w-20 h-20 rounded-xl bg-black/60 p-2 flex items-center justify-center mb-2.5 overflow-hidden">
                      <img
                        src={imgItem.path}
                        alt={imgItem.label}
                        className="w-full h-full object-contain group-hover:scale-105 transition-transform"
                      />
                    </div>
                    <span className="font-heading font-bold text-xs text-white group-hover:text-sky-300 transition-colors">
                      {imgItem.label}
                    </span>
                    <span className="text-[9px] text-neutral-500 font-mono mt-0.5 truncate w-full">
                      {imgItem.path.split('/').pop()}
                    </span>
                    {isSelected && (
                      <span className="absolute top-2 right-2 p-1 rounded-full bg-sky-500 text-black">
                        <CheckCircle size={12} className="text-black" />
                      </span>
                    )}
                  </button>
                );
              })}
            </div>

            <div className="flex items-center justify-end pt-3 border-t border-white/10 flex-shrink-0">
              <button
                type="button"
                onClick={() => setShowProductImagePicker(false)}
                className="px-5 py-2 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-xs uppercase tracking-wider transition"
              >
                Close Gallery
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL: Visual Macro Lens Zoom Picture Picker */}
      {macroImagePickerIndex !== null && editingProduct && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-3 sm:p-5 bg-black/90 backdrop-blur-md animate-fade-in">
          <div className="relative w-full max-w-3xl bg-[#0f0f16] border border-white/20 rounded-3xl shadow-[0_25px_80px_rgba(0,0,0,0.95)] overflow-hidden max-h-[85vh] flex flex-col p-6">
            <div className="flex items-center justify-between pb-3 border-b border-white/10 flex-shrink-0">
              <div className="flex items-center space-x-2.5">
                <div className="p-2 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-400">
                  <Camera size={18} />
                </div>
                <div>
                  <h3 className="font-heading font-black text-base text-white uppercase tracking-wider">
                    Pick Macro Lens Spec Picture (Lens #{macroImagePickerIndex + 1})
                  </h3>
                  <p className="text-[11px] text-neutral-400">
                    Click any macro engineering close-up photo to set it for this spec breakdown.
                  </p>
                </div>
              </div>
              <button
                onClick={() => setMacroImagePickerIndex(null)}
                className="p-2 rounded-xl text-neutral-400 hover:text-white hover:bg-white/10 transition"
              >
                <X size={18} />
              </button>
            </div>

            {/* Category Filter Pills */}
            <div className="flex items-center space-x-2 py-3 overflow-x-auto flex-shrink-0 no-scrollbar">
              {['All', 'Pulley', 'Bell', 'Clutch Lining', 'Flyball', 'Center Spring', 'Clutch Spring', 'Brake Pad', 'Torque Drive', 'Slider Piece', 'CVT Cleaner', 'Fork Oil'].map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setMacroCategoryFilter(cat)}
                  className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider transition whitespace-nowrap ${
                    macroCategoryFilter === cat
                      ? 'bg-rose-600 text-white shadow-md shadow-rose-950'
                      : 'bg-white/5 text-neutral-400 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Macro Photo Visual Selection Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-3 py-3 overflow-y-auto pr-1 flex-1">
              {AVAILABLE_MACRO_IMAGES
                .filter(m => macroCategoryFilter === 'All' || m.category === macroCategoryFilter)
                .map((macroItem) => {
                  const currentSpecImg = editingProduct.specHighlights?.[macroImagePickerIndex]?.img;
                  const isSelected = currentSpecImg === macroItem.path;
                  return (
                    <button
                      key={macroItem.path}
                      type="button"
                      onClick={() => {
                        const cur = [...(editingProduct.specHighlights || [])];
                        if (cur[macroImagePickerIndex]) {
                          cur[macroImagePickerIndex] = {
                            ...cur[macroImagePickerIndex],
                            img: macroItem.path
                          };
                          setEditingProduct({ ...editingProduct, specHighlights: cur });
                        }
                        setMacroImagePickerIndex(null);
                      }}
                      className={`group relative p-2.5 rounded-2xl flex flex-col items-center text-center transition-all border ${
                        isSelected 
                          ? 'bg-rose-600/15 border-rose-500 shadow-[0_0_20px_rgba(244,63,94,0.3)]' 
                          : 'bg-black/40 border-white/10 hover:border-white/30 hover:bg-white/[0.04]'
                      }`}
                    >
                      <div className="w-16 h-16 rounded-full overflow-hidden bg-black/60 border-2 border-white/10 group-hover:border-rose-400/60 p-1 flex items-center justify-center mb-2 transition">
                        <img
                          src={macroItem.path}
                          alt={macroItem.label}
                          className="w-full h-full object-cover rounded-full group-hover:scale-110 transition-transform"
                        />
                      </div>
                      <span className="font-heading font-bold text-[11px] text-white group-hover:text-rose-300 transition-colors truncate w-full">
                        {macroItem.label}
                      </span>
                      <span className="text-[8px] text-neutral-500 font-mono mt-0.5 truncate w-full">
                        {macroItem.category}
                      </span>
                      {isSelected && (
                        <span className="absolute top-2 right-2 p-0.5 rounded-full bg-rose-500 text-white">
                          <CheckCircle size={11} />
                        </span>
                      )}
                    </button>
                  );
                })}
            </div>

            <div className="flex items-center justify-end pt-3 border-t border-white/10 flex-shrink-0">
              <button
                type="button"
                onClick={() => setMacroImagePickerIndex(null)}
                className="px-5 py-2 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-xs uppercase tracking-wider transition"
              >
                Close Picker
              </button>
            </div>
          </div>
        </div>
      )}

      </main>

      {/* Formal Admin Console Footer */}
      <footer className="mt-auto border-t border-white/[0.08] bg-[#09090d]/90 py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-neutral-500 gap-3">
          <div className="flex items-center space-x-3">
            <span className="font-heading font-black tracking-wider text-neutral-300">
              R1 MOTO PERFORMANCE
            </span>
            <span className="text-neutral-700">|</span>
            <span className="font-mono text-neutral-400">
              Internal Administration Console
            </span>
          </div>
          <div className="flex items-center space-x-4 font-mono text-[10px] text-neutral-400">
            <span>&copy; {new Date().getFullYear()} R1 Moto Performance. All rights reserved.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
