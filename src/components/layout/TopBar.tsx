'use client';

import React from 'react';
import { MapPin, Phone, Clock, Star, ShieldCheck } from 'lucide-react';
import { BRAND_DATA } from '@/constants/site-data';

export const TopBar: React.FC = () => {
  return (
    <div className="bg-[#072331] text-slate-200 text-xs py-2 border-b border-slate-700/60 hidden md:block">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Left Side: Address & Operating Status */}
        <div className="flex items-center space-x-6">
          <div className="flex items-center gap-1.5 text-slate-300">
            <MapPin className="w-3.5 h-3.5 text-[#8EC63F] flex-shrink-0" />
            <span>Gate No 5, Ashok Nagar, Ranchi - 834002</span>
          </div>

          <div className="flex items-center gap-1.5 text-slate-300">
            <Clock className="w-3.5 h-3.5 text-[#20AD96] flex-shrink-0" />
            <span>24/7 / 365 Emergency Dispatch Desk</span>
          </div>

          <div className="flex items-center gap-1.5 text-emerald-400 font-semibold bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/40">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>12h & 24h Nurse Shifts Active</span>
          </div>
        </div>

        {/* Right Side: Rating & Direct Helpline */}
        <div className="flex items-center space-x-6">
          <div className="flex items-center gap-1.5 text-amber-400 font-semibold">
            <Star className="w-3.5 h-3.5 fill-amber-400" />
            <span className="text-white">{BRAND_DATA.rating.score}/5</span>
            <span className="text-slate-400 font-normal">({BRAND_DATA.rating.count}+ Reviews)</span>
          </div>

          <div className="flex items-center gap-1.5 font-bold text-white">
            <Phone className="w-3.5 h-3.5 text-[#8EC63F]" />
            <span>Helpline:</span>
            <a href={`tel:${BRAND_DATA.contact.phone}`} className="text-[#8EC63F] hover:underline">
              {BRAND_DATA.contact.phone}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
