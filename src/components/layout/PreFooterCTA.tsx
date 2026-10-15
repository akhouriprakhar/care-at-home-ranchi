'use client';

import React from 'react';
import { PhoneCall, Clock, MapPin } from 'lucide-react';
import { BRAND_DATA } from '@/constants/site-data';

export const PreFooterCTA: React.FC = () => {

  return (
    <section className="w-full bg-[#072331] text-white py-12 px-4 sm:px-6 lg:px-8 border-t border-white/10 relative overflow-hidden">
      {/* Subtle Grain Texture */}
      <div className="absolute inset-0 bg-grain pointer-events-none opacity-30 z-0" />

      {/* Ambient background glow in careathomeranchi.com Colors */}
      <div className="absolute -top-12 -right-12 w-80 h-80 rounded-full bg-[#8EC63F]/12 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-12 -left-12 w-80 h-80 rounded-full bg-[#20AD96]/20 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="bg-gradient-to-r from-[#0C364A] via-[#082837] to-[#0C364A] rounded-3xl p-6 sm:p-10 border border-white/15 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
          
          {/* Left Text Column */}
          <div className="space-y-3 text-center lg:text-left max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-[#20AD96]/20 border border-[#20AD96]/40 px-3.5 py-1 rounded-full text-xs font-semibold text-[#8EC63F]">
              <Clock className="w-3.5 h-3.5 text-[#8EC63F]" />
              <span>Direct Deployment & Patient Care Triage</span>
            </div>
            
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
              Need Dedicated Home Nursing with{' '}
              <span className="text-[#8EC63F]">
                Compassionate Dignity
              </span>{' '}
              in Ranchi?
            </h3>
            
            <p className="text-xs sm:text-sm text-slate-200 font-light leading-relaxed">
              Connect directly with our clinical care coordination desk for experienced nursing attendants, senior citizen hygiene care, post-surgical dressing, or in-home physiotherapy.
            </p>
          </div>

          {/* Right Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto flex-shrink-0">
            <a
              href={`tel:${BRAND_DATA.contact.phone}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#8EC63F] hover:bg-[#9ee543] text-[#072331] font-extrabold px-6 py-3.5 rounded-xl text-xs uppercase tracking-wider transition-all shadow-lg shadow-[#8EC63F]/30 hover:shadow-[#8EC63F]/50 active:scale-[0.98]"
            >
              <PhoneCall className="w-4 h-4 text-[#072331]" />
              <span>Call: {BRAND_DATA.contact.phone}</span>
            </a>

            <a
              href={BRAND_DATA.contact.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#20AD96]/20 hover:bg-[#20AD96]/30 text-[#8EC63F] border border-[#20AD96]/40 font-bold px-5 py-3.5 rounded-xl text-xs uppercase tracking-wider transition-all shadow-md active:scale-[0.98]"
            >
              <MapPin className="w-4 h-4 text-[#8EC63F]" />
              <span>Office Directions</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
