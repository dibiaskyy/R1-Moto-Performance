import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bike, CheckCircle2, ShoppingBag, ArrowRight, ShieldCheck, Search } from 'lucide-react';

export default function CompatibilityPage() {
  const [selectedUnit, setSelectedUnit] = useState('aerox-155');

  const scooterBikes = [
    {
      id: 'aerox-155',
      name: 'Yamaha Aerox 155',
      series: 'V1 & V2 (2017 – Present)',
      engine: '155cc 4-Valve Liquid-Cooled VVA',
      description: 'Sport racing scooter platform with high-RPM variable valve actuation.',
      compatibleParts: [
        { name: 'R1 CNC Performance Pulley Set & Drive Face', type: 'CVT Variator', status: 'Direct Bolt-On', image: '/images/products/pulley-set.png', price: '₱2,450' },
        { name: 'R1 Grooved Performance Clutch Bell', type: 'Clutch System', status: 'Direct Bolt-On', image: '/images/products/bell.png', price: '₱1,850' },
        { name: 'R1 High-Friction Clutch Lining Assembly', type: 'Clutch System', status: 'Direct Bolt-On', image: '/images/products/clutch-lining.png', price: '₱1,250' },
        { name: 'R1 Calibrated Flyball Weights (10g - 13g)', type: 'CVT Tuning', status: 'Optimal Weight', image: '/images/products/flyball.png', price: '₱450' },
        { name: 'R1 Ceramic Composite Brake Pads (Front)', type: 'Braking', status: 'Direct Bolt-On', image: '/images/products/brakepad.png', price: '₱480' },
      ]
    },
    {
      id: 'nmax-155',
      name: 'Yamaha NMAX 155',
      series: 'V1 & V2 (2015 – Present)',
      engine: '155cc BlueCore 4-Valve VVA',
      description: 'Long-haul touring scooter requiring smooth downshifting and thermal stability.',
      compatibleParts: [
        { name: 'R1 CNC Performance Pulley Set & Drive Face', type: 'CVT Variator', status: 'Direct Bolt-On', image: '/images/products/pulley-set.png', price: '₱2,450' },
        { name: 'R1 Grooved Performance Clutch Bell', type: 'Clutch System', status: 'Direct Bolt-On', image: '/images/products/bell.png', price: '₱1,850' },
        { name: 'R1 High-Friction Clutch Lining Assembly', type: 'Clutch System', status: 'Direct Bolt-On', image: '/images/products/clutch-lining.png', price: '₱1,250' },
        { name: 'R1 Calibrated Flyball Weights (11g - 14g)', type: 'CVT Tuning', status: 'Optimal Weight', image: '/images/products/flyball.png', price: '₱450' },
        { name: 'R1 Ceramic Composite Brake Pads (Front & Rear)', type: 'Braking', status: 'Direct Bolt-On', image: '/images/products/brakepad.png', price: '₱480' },
      ]
    },
    {
      id: 'click-125-150',
      name: 'Honda Click 125i / 150i / 160',
      series: 'Game Changer (2018 – Present)',
      engine: '125cc / 150cc / 157cc eSP / eSP+',
      description: 'The Philippines top daily commuter scooter platform demanding rapid stop-and-go acceleration.',
      compatibleParts: [
        { name: 'R1 CNC Performance Pulley Set & Drive Face', type: 'CVT Variator', status: 'Direct Bolt-On', image: '/images/products/pulley-set.png', price: '₱2,450' },
        { name: 'R1 Grooved Anti-Fade Clutch Bell', type: 'Clutch System', status: 'Anti-Shudder Fit', image: '/images/products/bell.png', price: '₱1,850' },
        { name: 'R1 High-Friction Clutch Lining Assembly', type: 'Clutch System', status: 'Direct Bolt-On', image: '/images/products/clutch-lining.png', price: '₱1,250' },
        { name: 'R1 Calibrated Flyball Weights (12g - 15g)', type: 'CVT Tuning', status: 'Optimal Weight', image: '/images/products/flyball.png', price: '₱450' },
        { name: 'R1 Ceramic Composite Brake Pads (Front)', type: 'Braking', status: 'Direct Bolt-On', image: '/images/products/brakepad.png', price: '₱480' },
      ]
    },
    {
      id: 'pcx-adv-160',
      name: 'Honda PCX 160 / ADV 160',
      series: '4-Valve eSP+ Platform (2021 – Present)',
      engine: '157cc 4-Valve Liquid-Cooled eSP+',
      description: 'Modern maxi-scooter with advanced valvetrain and wide-range variator geometry.',
      compatibleParts: [
        { name: 'R1 CNC Performance Pulley Set & Drive Face', type: 'CVT Variator', status: 'Direct Bolt-On', image: '/images/products/pulley-set.png', price: '₱2,450' },
        { name: 'R1 Grooved Anti-Fade Clutch Bell', type: 'Clutch System', status: 'Direct Bolt-On', image: '/images/products/bell.png', price: '₱1,850' },
        { name: 'R1 High-Friction Clutch Lining Assembly', type: 'Clutch System', status: 'Direct Bolt-On', image: '/images/products/clutch-lining.png', price: '₱1,250' },
        { name: 'R1 Dual-Angle Torque Drive Assembly', type: 'CVT Variator', status: 'Direct Bolt-On', image: '/images/products/torque-drive.png', price: '₱2,100' },
        { name: 'R1 Ceramic Composite Brake Pads', type: 'Braking', status: 'Direct Bolt-On', image: '/images/products/brakepad.png', price: '₱480' },
      ]
    },
  ];

  const currentBike = scooterBikes.find((b) => b.id === selectedUnit) || scooterBikes[0];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12 text-neutral-100">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-neutral-400 text-[11px] font-semibold uppercase tracking-widest">
          <span className="w-1.5 h-1.5 rounded-full bg-rose-500"></span>
          <span>TWO-WAY FITMENT LOOKUP</span>
        </div>

        <h1 className="font-heading font-extrabold text-3xl sm:text-5xl text-white uppercase tracking-tight">
          Scooter Compatibility Engine
        </h1>

        <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">
          Select your scooter platform to see all guaranteed plug-and-play R1 pulleys, bells, rollers, and brake pads engineered specifically for your engine.
        </p>
      </div>

      {/* Bike Unit Selectors */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {scooterBikes.map((bike) => (
          <button
            key={bike.id}
            onClick={() => setSelectedUnit(bike.id)}
            className={`p-5 rounded-2xl text-left transition-all duration-200 border ${
              selectedUnit === bike.id
                ? 'bg-[#14141c] border-rose-500 shadow-xl shadow-rose-950/30'
                : 'bg-[#0f0f14] border-white/10 hover:border-white/20 hover:bg-[#121217]'
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <Bike size={18} className={selectedUnit === bike.id ? 'text-rose-500' : 'text-neutral-500'} />
              <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-white/[0.05] text-neutral-300">
                {bike.series.split(' ')[0]}
              </span>
            </div>
            <h3 className="font-heading font-bold text-sm text-white">
              {bike.name}
            </h3>
            <p className="text-[11px] text-neutral-400 mt-1 line-clamp-1">
              {bike.engine}
            </p>
          </button>
        ))}
      </div>

      {/* Selected Bike Details & Compatible Parts Listing */}
      <div className="p-8 sm:p-10 rounded-3xl bg-[#0f0f14] border border-white/10 shadow-2xl space-y-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-6">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-rose-500">
              Verified Fitment Matrix
            </span>
            <h2 className="font-heading font-extrabold text-2xl text-white uppercase mt-1">
              Guaranteed Parts for {currentBike.name}
            </h2>
            <p className="text-xs text-neutral-400 mt-1">
              {currentBike.description} • {currentBike.engine}
            </p>
          </div>

          <Link
            to={`/catalog?model=${currentBike.id.includes('aerox') ? 'aerox' : currentBike.id.includes('nmax') ? 'nmax' : currentBike.id.includes('click') ? 'click' : 'pcx-adv'}`}
            className="px-6 py-2.5 bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs uppercase tracking-wider rounded-full transition shadow-md flex items-center space-x-1.5 self-start md:self-auto"
          >
            <ShoppingBag size={14} />
            <span>Open in Catalog</span>
          </Link>
        </div>

        {/* Compatible Parts Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentBike.compatibleParts.map((part, i) => (
            <div
              key={i}
              className="p-5 rounded-2xl bg-[#08080b] border border-white/[0.06] hover:border-rose-500/40 transition flex flex-col justify-between"
            >
              <div>
                <div className="h-36 w-full rounded-xl bg-white/[0.02] p-3 mb-3 flex items-center justify-center">
                  <img
                    src={part.image}
                    alt={part.name}
                    className="max-h-full max-w-full object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)]"
                  />
                </div>

                <div className="flex items-center justify-between mb-1">
                  <span className="text-[10px] font-bold uppercase text-neutral-400">{part.type}</span>
                  <span className="text-[10px] font-semibold text-emerald-400 flex items-center space-x-1">
                    <CheckCircle2 size={11} />
                    <span>{part.status}</span>
                  </span>
                </div>

                <h4 className="font-heading font-bold text-sm text-white mt-1 mb-2">
                  {part.name}
                </h4>
              </div>

              <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between">
                <span className="text-sm font-extrabold text-white">{part.price}</span>
                <Link
                  to="/catalog"
                  className="px-3.5 py-1.5 bg-white text-black hover:bg-neutral-200 font-bold text-[11px] uppercase tracking-wider rounded-full transition"
                >
                  Buy Part
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
