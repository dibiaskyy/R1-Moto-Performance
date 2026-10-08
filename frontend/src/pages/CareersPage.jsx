import React, { useState } from 'react';
import { Briefcase, MapPin, Clock, ArrowRight, CheckCircle2, Sparkles, Send } from 'lucide-react';

export default function CareersPage() {
  const [selectedJob, setSelectedJob] = useState(null);
  const [applied, setApplied] = useState(false);

  const jobs = [
    {
      id: 1,
      title: 'Senior CVT R&D Technician & Dyno Tuner',
      dept: 'Engineering & R&D',
      type: 'Full-Time',
      location: 'Quezon City Tuning Lab',
      desc: 'Lead dyno testing sessions, analyze CVT belt slip telemetry, prototype high-angle ramp pulleys, and calibrate clutch shoe springs for production.',
      requirements: ['3+ years in motorcycle mechanical tuning or CVT mechanics', 'Experience running chassis dynamometers', 'Strong knowledge of Yamaha and Honda scooter platforms']
    },
    {
      id: 2,
      title: 'B2B Regional Dealer Sales Scout (Visayas / Mindanao)',
      dept: 'Sales & Dealership',
      type: 'Full-Time / Field',
      location: 'Cebu / Davao / Regional',
      desc: 'Build relationships with leading motorcycle parts retailers, workshop owners, and wholesale distributor hubs across provincial regions.',
      requirements: ['Proven track record in automotive or motorcycle aftermarket sales', 'Established connections with motorcycle workshops', 'Willingness to travel for dealer onboarding']
    },
    {
      id: 3,
      title: 'Motorsport Social Media & Community Specialist',
      dept: 'Brand Marketing',
      type: 'Full-Time',
      location: 'Quezon City / Hybrid',
      desc: 'Manage official R1 Moto Facebook, TikTok, and YouTube channels. Create high-energy track videos, technical how-to guides, and live streams.',
      requirements: ['Deep passion and familiarity with Philippine scooter culture', 'Proficiency in vertical video editing (CapCut / Premiere)', 'Strong community management and livestream presentation skills']
    },
    {
      id: 4,
      title: 'Warehouse Logistics & Quality Control Lead',
      dept: 'Supply Chain',
      type: 'Full-Time',
      location: 'Quezon City Distribution Hub',
      desc: 'Supervise daily pick-and-pack fulfillment for wholesale and direct online orders. Perform micrometer QC inspections on incoming CNC variator batches.',
      requirements: ['Experience in warehouse inventory systems', 'High attention to micrometer tolerances and surface finishing', 'Capable of managing daily courier handoffs']
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16 text-neutral-100">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-neutral-400 text-[11px] font-semibold uppercase tracking-widest">
          <span className="w-1.5 h-1.5 rounded-full bg-rose-500"></span>
          <span>CAREERS AT R1 MOTO PERFORMANCE</span>
        </div>

        <h1 className="font-heading font-extrabold text-3xl sm:text-5xl text-white uppercase tracking-tight">
          Join the High-Performance Team
        </h1>

        <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">
          We are builders, riders, and innovators redefining scooter racing performance across the Philippines. Explore our open positions and build your career in motorsports.
        </p>
      </div>

      {/* Jobs Listing */}
      <div className="space-y-4 max-w-4xl mx-auto">
        <h2 className="font-heading font-bold text-xl text-white uppercase mb-4">
          Open Positions ({jobs.length})
        </h2>

        {jobs.map((job) => (
          <div
            key={job.id}
            className="p-6 rounded-2xl bg-[#0f0f14] border border-white/10 hover:border-rose-500/50 transition-all duration-300 space-y-4"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-rose-400">
                  {job.dept}
                </span>
                <h3 className="font-heading font-bold text-lg text-white mt-0.5">
                  {job.title}
                </h3>
              </div>

              <div className="flex items-center space-x-2 text-[11px] text-neutral-400">
                <span className="px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/10">
                  {job.type}
                </span>
                <span className="flex items-center space-x-1">
                  <MapPin size={12} className="text-rose-500" />
                  <span>{job.location}</span>
                </span>
              </div>
            </div>

            <p className="text-xs text-neutral-400 leading-relaxed">
              {job.desc}
            </p>

            <div className="space-y-1 pt-1">
              <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-300 block">
                Requirements:
              </span>
              <ul className="space-y-1">
                {job.requirements.map((req, i) => (
                  <li key={i} className="text-[11px] text-neutral-400 flex items-center space-x-2">
                    <CheckCircle2 size={12} className="text-rose-500 flex-shrink-0" />
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-2 flex justify-end">
              <button
                onClick={() => { setSelectedJob(job); setApplied(false); }}
                className="px-5 py-2 bg-white text-black hover:bg-neutral-200 font-bold text-xs uppercase tracking-wider rounded-full transition shadow-md flex items-center space-x-1.5"
              >
                <span>Apply for this Position</span>
                <ArrowRight size={13} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Application Modal */}
      {selectedJob && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4">
          <div className="max-w-lg w-full p-8 rounded-3xl bg-[#0f0f14] border border-white/10 space-y-4">
            <h3 className="font-heading font-bold text-xl text-white uppercase">
              Apply for {selectedJob.title}
            </h3>

            {applied ? (
              <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-center space-y-2">
                <CheckCircle2 size={32} className="mx-auto text-emerald-400" />
                <h4 className="font-heading font-bold text-base text-white">Application Sent!</h4>
                <p className="text-xs text-neutral-300">
                  Our HR & talent team will review your resume and contact you for an interview.
                </p>
                <button
                  onClick={() => setSelectedJob(null)}
                  className="mt-3 px-5 py-2 bg-white text-black font-bold text-xs rounded-full uppercase"
                >
                  Close
                </button>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setApplied(true); }} className="space-y-3">
                <div>
                  <label className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 block mb-1">
                    Your Full Name
                  </label>
                  <input required type="text" placeholder="Juan Dela Cruz" className="w-full px-4 py-2 bg-[#08080b] border border-white/10 rounded-xl text-xs text-white" />
                </div>
                <div>
                  <label className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 block mb-1">
                    Email Address
                  </label>
                  <input required type="email" placeholder="you@example.com" className="w-full px-4 py-2 bg-[#08080b] border border-white/10 rounded-xl text-xs text-white" />
                </div>
                <div>
                  <label className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 block mb-1">
                    Contact Phone Number
                  </label>
                  <input required type="text" placeholder="+63 9XX XXX XXXX" className="w-full px-4 py-2 bg-[#08080b] border border-white/10 rounded-xl text-xs text-white" />
                </div>
                <div>
                  <label className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 block mb-1">
                    Brief Summary / Portfolio Link
                  </label>
                  <textarea rows={3} placeholder="Link to resume (Google Drive, LinkedIn) or summary of experience..." className="w-full px-4 py-2 bg-[#08080b] border border-white/10 rounded-xl text-xs text-white"></textarea>
                </div>
                <div className="flex justify-end space-x-2 pt-2">
                  <button
                    type="button"
                    onClick={() => setSelectedJob(null)}
                    className="px-4 py-2 bg-white/[0.05] text-neutral-300 rounded-full text-xs font-semibold"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2 bg-rose-600 hover:bg-rose-500 text-white rounded-full text-xs font-bold uppercase tracking-wider shadow-md"
                  >
                    Submit Resume
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}

    </div>
  );
}
