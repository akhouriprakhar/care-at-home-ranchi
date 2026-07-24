'use client';

import React from 'react';
import { MapPin, Navigation } from 'lucide-react';
import { BRAND_DATA } from '@/constants/site-data';

export const StickyMobileCTA: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 flex items-center justify-between md:hidden bg-[#072331]/95 backdrop-blur-xl border-t border-slate-700 shadow-2xl px-4 py-2.5 text-xs text-white">
      <div className="flex items-center gap-1.5 text-slate-200 truncate">
        <MapPin className="w-3.5 h-3.5 text-[#8EC63F] flex-shrink-0" />
        <span className="truncate font-medium">Gate No 5, Ashok Nagar, Ranchi</span>
      </div>
      <a
        href={BRAND_DATA.contact.googleMapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#8EC63F] text-[#072331] font-bold px-3 py-1 rounded-lg flex items-center gap-1 flex-shrink-0 ml-2 text-[11px]"
      >
        <Navigation className="w-3 h-3 fill-[#072331]" />
        <span>Directions</span>
      </a>
    </div>
  );
};
