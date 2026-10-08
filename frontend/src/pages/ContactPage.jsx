import React, { useState } from 'react';
import { Mail, Phone, MapPin, MessageSquare, Send, CheckCircle2, Facebook, ShieldCheck } from 'lucide-react';

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    scooterModel: '',
    subject: 'Technical Fitment Question',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16 text-neutral-100">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-neutral-400 text-[11px] font-semibold uppercase tracking-widest">
          <span className="w-1.5 h-1.5 rounded-full bg-rose-500"></span>
          <span>GET IN TOUCH</span>
        </div>

        <h1 className="font-heading font-extrabold text-3xl sm:text-5xl text-white uppercase tracking-tight">
          Contact R1 Moto Performance
        </h1>

        <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">
          Need help with scooter fitment, dyno tuning questions, wholesale orders, or warranty claims? Our technical support specialists are ready to help.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Contact Info Cards */}
        <div className="lg:col-span-5 space-y-4">
          <div className="p-6 rounded-2xl bg-[#0f0f14] border border-white/10 space-y-2">
            <div className="w-10 h-10 rounded-xl bg-rose-600/10 text-rose-500 flex items-center justify-center font-bold">
              <Phone size={20} />
            </div>
            <h3 className="font-heading font-bold text-base text-white uppercase">Customer & Technical Hotline</h3>
            <p className="text-xs text-neutral-400">Available Monday to Saturday, 8:00 AM – 6:00 PM PHT</p>
            <div className="text-sm font-semibold text-white pt-1">+63 (2) 8892-R1MOTO / +63 917 123 4567</div>
          </div>

          <div className="p-6 rounded-2xl bg-[#0f0f14] border border-white/10 space-y-2">
            <div className="w-10 h-10 rounded-xl bg-rose-600/10 text-rose-500 flex items-center justify-center font-bold">
              <Mail size={20} />
            </div>
            <h3 className="font-heading font-bold text-base text-white uppercase">Direct Email Support</h3>
            <p className="text-xs text-neutral-400">General, dealership inquiries, and technical documentation</p>
            <div className="text-sm font-semibold text-rose-400 pt-1">support@r1motoperformance.com</div>
          </div>

          <div className="p-6 rounded-2xl bg-[#0f0f14] border border-white/10 space-y-2">
            <div className="w-10 h-10 rounded-xl bg-rose-600/10 text-rose-500 flex items-center justify-center font-bold">
              <Facebook size={20} />
            </div>
            <h3 className="font-heading font-bold text-base text-white uppercase">Official Facebook Page</h3>
            <p className="text-xs text-neutral-400">Real-time messenger support and community group</p>
            <a
              href="https://www.facebook.com/r1motoperformance"
              target="_blank"
              rel="noreferrer"
              className="text-xs font-semibold text-rose-400 hover:underline block pt-1"
            >
              facebook.com/r1motoperformance →
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-7 p-8 sm:p-10 rounded-3xl bg-[#0f0f14] border border-white/10 shadow-2xl">
          <h2 className="font-heading font-bold text-2xl text-white uppercase mb-2">
            Send Us a Message
          </h2>
          <p className="text-xs text-neutral-400 mb-6">
            Fill out the form below and an R1 technical consultant will get back to you within 24 hours.
          </p>

          {sent ? (
            <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-center space-y-2">
              <CheckCircle2 size={32} className="mx-auto text-emerald-400" />
              <h4 className="font-heading font-bold text-lg text-white">Message Sent Successfully!</h4>
              <p className="text-xs text-neutral-300">
                Thank you for contacting R1 Moto Performance. We have received your inquiry and our team will get in touch with you shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 block mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Juan Dela Cruz"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 bg-[#08080b] border border-white/10 rounded-xl text-xs text-white focus:outline-none focus:border-rose-500"
                  />
                </div>

                <div>
                  <label className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 block mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 bg-[#08080b] border border-white/10 rounded-xl text-xs text-white focus:outline-none focus:border-rose-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 block mb-1">
                    Scooter Model (Optional)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Aerox 155 V2 / Click 150i"
                    value={formData.scooterModel}
                    onChange={(e) => setFormData({ ...formData, scooterModel: e.target.value })}
                    className="w-full px-4 py-2.5 bg-[#08080b] border border-white/10 rounded-xl text-xs text-white focus:outline-none focus:border-rose-500"
                  />
                </div>

                <div>
                  <label className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 block mb-1">
                    Inquiry Topic
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-2.5 bg-[#08080b] border border-white/10 rounded-xl text-xs text-white focus:outline-none focus:border-rose-500"
                  >
                    <option value="Technical Fitment Question">Technical Fitment Question</option>
                    <option value="Wholesale & Dealership">Wholesale & Dealership Inquiry</option>
                    <option value="Order Tracking & Support">Order Tracking & Fulfillment</option>
                    <option value="Warranty Claim">Warranty Claim</option>
                    <option value="General Inquiry">General Inquiry</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 block mb-1">
                  Message
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="How can we assist you today? Please include any questions about fitment, parts, or orders..."
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
                <span>Send Technical Inquiry</span>
              </button>
            </form>
          )}
        </div>

      </div>

    </div>
  );
}
