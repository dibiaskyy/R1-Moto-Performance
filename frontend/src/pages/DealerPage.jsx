import React, { useState } from 'react';
import { Shield, FileCheck, CheckCircle2, TrendingUp, Truck, Send, Award, Phone } from 'lucide-react';

export default function DealerPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    shopName: '',
    ownerName: '',
    email: '',
    phone: '',
    location: '',
    yearsInBusiness: '1-3 years',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16 text-neutral-100">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-neutral-400 text-[11px] font-semibold uppercase tracking-widest">
          <span className="w-1.5 h-1.5 rounded-full bg-rose-500"></span>
          <span>B2B WHOLESALE DISTRIBUTION</span>
        </div>

        <h1 className="font-heading font-extrabold text-3xl sm:text-5xl text-white uppercase tracking-tight">
          Become an Authorized Dealer / Distributor
        </h1>

        <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">
          Partner with R1 Moto Performance. Provide your local riders and motorcycle repair shop with guaranteed genuine high-performance CVT transmission parts and ceramic brake pads.
        </p>
      </div>

      {/* Dealer Perks Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 rounded-2xl bg-[#0f0f14] border border-white/10 space-y-3">
          <div className="w-10 h-10 rounded-xl bg-rose-600/10 text-rose-500 flex items-center justify-center font-bold">
            <TrendingUp size={20} />
          </div>
          <h3 className="font-heading font-bold text-base text-white uppercase">Tiered Profit Margins</h3>
          <p className="text-xs text-neutral-400 leading-relaxed">
            Tier-based discount structures yielding healthy 25% to 40% margins across pulleys, bells, rollers, and brake pads.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-[#0f0f14] border border-white/10 space-y-3">
          <div className="w-10 h-10 rounded-xl bg-rose-600/10 text-rose-500 flex items-center justify-center font-bold">
            <Truck size={20} />
          </div>
          <h3 className="font-heading font-bold text-base text-white uppercase">Priority Inventory</h3>
          <p className="text-xs text-neutral-400 leading-relaxed">
            Direct priority dispatch from our central Quezon City warehouse with express freight shipping nationwide.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-[#0f0f14] border border-white/10 space-y-3">
          <div className="w-10 h-10 rounded-xl bg-rose-600/10 text-rose-500 flex items-center justify-center font-bold">
            <Award size={20} />
          </div>
          <h3 className="font-heading font-bold text-base text-white uppercase">Marketing & Collateral</h3>
          <p className="text-xs text-neutral-400 leading-relaxed">
            Free shop banners, sticker kits, acrylic display stands, and official store listing on our verified dealer directory.
          </p>
        </div>
      </div>

      {/* Dealer Application Form */}
      <div className="max-w-3xl mx-auto p-8 sm:p-10 rounded-3xl bg-[#0f0f14] border border-white/10 shadow-2xl">
        <h2 className="font-heading font-bold text-2xl text-white uppercase mb-2">
          Dealer Application Form
        </h2>
        <p className="text-xs text-neutral-400 mb-6">
          Submit your shop details below. Our dealer account team will review and contact you within 24 business hours.
        </p>

        {submitted ? (
          <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-center space-y-2">
            <CheckCircle2 size={32} className="mx-auto text-emerald-400" />
            <h4 className="font-heading font-bold text-lg text-white">Application Received!</h4>
            <p className="text-xs text-neutral-300">
              Thank you for applying. An R1 wholesale representative will reach out to your phone/email shortly with our wholesale price sheet and onboarding documents.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 block mb-1">
                  Motorcycle Shop / Business Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Apex Moto Works"
                  value={formData.shopName}
                  onChange={(e) => setFormData({ ...formData, shopName: e.target.value })}
                  className="w-full px-4 py-2.5 bg-[#08080b] border border-white/10 rounded-xl text-xs text-white focus:outline-none focus:border-rose-500"
                />
              </div>

              <div>
                <label className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 block mb-1">
                  Owner / Representative Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Juan Dela Cruz"
                  value={formData.ownerName}
                  onChange={(e) => setFormData({ ...formData, ownerName: e.target.value })}
                  className="w-full px-4 py-2.5 bg-[#08080b] border border-white/10 rounded-xl text-xs text-white focus:outline-none focus:border-rose-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 block mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="shop@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2.5 bg-[#08080b] border border-white/10 rounded-xl text-xs text-white focus:outline-none focus:border-rose-500"
                />
              </div>

              <div>
                <label className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 block mb-1">
                  Contact Mobile Number
                </label>
                <input
                  type="text"
                  required
                  placeholder="+63 9XX XXX XXXX"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-2.5 bg-[#08080b] border border-white/10 rounded-xl text-xs text-white focus:outline-none focus:border-rose-500"
                />
              </div>
            </div>

            <div>
              <label className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 block mb-1">
                Shop Location / Complete Address
              </label>
              <input
                type="text"
                required
                placeholder="City / Municipality, Province"
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                className="w-full px-4 py-2.5 bg-[#08080b] border border-white/10 rounded-xl text-xs text-white focus:outline-none focus:border-rose-500"
              />
            </div>

            <div>
              <label className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 block mb-1">
                Estimated Initial Order / Special Inquiries
              </label>
              <textarea
                rows={3}
                placeholder="Tell us about your workshop, monthly volume, or preferred product lines..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-2.5 bg-[#08080b] border border-white/10 rounded-xl text-xs text-white focus:outline-none focus:border-rose-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition shadow-lg shadow-rose-950 flex items-center justify-center space-x-2"
            >
              <Send size={14} />
              <span>Submit Dealership Application</span>
            </button>
          </form>
        )}
      </div>

    </div>
  );
}
