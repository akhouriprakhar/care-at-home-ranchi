'use client';

import React from 'react';
import { MapPin, Phone } from 'lucide-react';
import { BRAND_DATA } from '@/constants/site-data';

export const ContactMap: React.FC = () => {
  return (
    <div className="w-full space-y-6">
      {/* Quick Address Card */}
      <div className="bg-[#0C364A] text-white rounded-3xl p-6 sm:p-8 border border-white/15 shadow-xl space-y-6 relative overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-white/10 pb-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 bg-[#8EC63F]/20 border border-[#8EC63F]/40 px-3 py-1 rounded-lg text-xs font-bold text-[#8EC63F]">
              <MapPin className="w-3.5 h-3.5" />
              <span>Care at Home, Ranchi • Office Location</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Visit Our Office
            </h3>
            <p className="text-slate-200 text-xs sm:text-sm font-light leading-relaxed">
              {BRAND_DATA.contact.address}
            </p>
          </div>

          {/* Quick Action */}
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={BRAND_DATA.contact.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#20AD96] text-white font-bold py-3 px-5 rounded-xl hover:bg-[#1a917d] transition-colors flex items-center justify-center gap-2 text-xs uppercase tracking-wider shadow"
            >
              <MapPin className="w-4 h-4" />
              <span>Directions</span>
            </a>
            <a
              href={`tel:${BRAND_DATA.contact.phone}`}
              className="bg-[#8EC63F] text-[#072331] font-extrabold py-3 px-5 rounded-xl hover:bg-[#9ee543] transition-colors flex items-center justify-center gap-2 text-xs uppercase tracking-wider shadow"
            >
              <Phone className="w-4 h-4 fill-[#072331]" />
              <span>Call Us</span>
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-slate-300">
          <div>
            <span className="font-bold text-white block mb-0.5">Office Desk Hours:</span>
            <span>Monday – Saturday (Closed Sundays)</span>
          </div>
          <div>
            <span className="font-bold text-white block mb-0.5">Attendant Shift Care:</span>
            <span>12-Hour & 24-Hour Shifts Available</span>
          </div>
        </div>
      </div>

      {/* Embedded Real Interactive Google Maps Location */}
      <div className="w-full h-80 sm:h-[400px] rounded-3xl overflow-hidden border-2 border-slate-200 shadow-xl bg-slate-100 relative">
        <iframe
          title="Care at Home Ranchi Office Location Map"
          src={BRAND_DATA.contact.googleMapsEmbedUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full"
        />
      </div>
    </div>
  );
};
