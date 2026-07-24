'use client';

import React from 'react';
import Image from 'next/image';
import { Star, ShieldCheck, Phone } from 'lucide-react';
import { BRAND_DATA } from '@/constants/site-data';

export const HeroBanner: React.FC = () => {
  return (
    <section className="w-full bg-[#0C364A] text-white py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-hero-radial relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column */}
          <div className="lg:col-span-7 space-y-6">
            {/* Trust Rating Strip */}
            <div className="inline-flex items-center gap-2 bg-[#20AD96]/20 border border-[#20AD96]/40 px-3.5 py-1.5 rounded-full text-xs font-semibold text-[#8EC63F]">
              <div className="flex items-center text-amber-400">
                <Star className="w-4 h-4 fill-amber-400" />
                <span className="ml-1 font-bold text-white">{BRAND_DATA.rating.score} / 5</span>
              </div>
              <span className="text-slate-300">•</span>
              <span className="text-slate-200">{BRAND_DATA.rating.count}+ Verified {BRAND_DATA.rating.platform}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-serif font-bold text-white leading-tight">
              Hospital-Quality Medical Care in the Comfort of Your Home
            </h1>

            <p className="text-lg text-slate-200 max-w-xl leading-relaxed font-light">
              Serving Ashok Nagar, Bariatu, Argora & Surrounding Areas since {BRAND_DATA.est}. Dedicated clinical attendants and patient hygiene care.
            </p>

            {/* Action Button */}
            <div className="pt-2">
              <a
                href={`tel:${BRAND_DATA.contact.phone}`}
                className="bg-[#8EC63F] text-[#072331] font-bold px-6 py-3 rounded-lg shadow-lg hover:bg-[#a2d852] transition-colors inline-flex items-center gap-2 text-base"
              >
                <Phone className="w-5 h-5 text-[#072331]" />
                Call Care Helpline ({BRAND_DATA.contact.phone})
              </a>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-6 text-xs text-slate-300 border-t border-slate-700/60">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#8EC63F]" />
                <span>Background-Verified Nurses</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#8EC63F]" />
                <span>Care at Home, Ranchi</span>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md aspect-[4/3] rounded-2xl overflow-hidden border-2 border-[#20AD96]/30 shadow-2xl">
              <Image
                src="/images/brand/caregiver.jpg"
                alt="Care at Home, Ranchi nurse attentively caring for patient"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
