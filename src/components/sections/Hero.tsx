'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Star, CheckCircle2, ShieldCheck, Award, Building2 } from 'lucide-react';
import { BRAND_DATA } from '@/constants/site-data';

export const Hero: React.FC = () => {
  return (
    <section className="w-full bg-[#0C364A] text-white py-10 md:py-16 px-4 sm:px-6 lg:px-8 bg-hero-ambient relative overflow-hidden border-b border-slate-700/60 shadow-lg">
      {/* Ambient Decorative Lighting */}
      <div className="absolute top-10 right-10 w-96 h-96 rounded-full bg-[#20AD96]/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 rounded-full bg-[#8EC63F]/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-7 space-y-4"
          >
            {/* Shortened Neat Pill Bubble */}
            <div className="inline-flex items-center gap-2 bg-[#20AD96]/20 border border-[#20AD96]/40 px-3.5 py-1 rounded-full text-xs font-bold text-[#8EC63F] shadow-xs backdrop-blur-md">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400 flex-shrink-0" />
              <span>Serving Ranchi Since {BRAND_DATA.est}</span>
            </div>

            {/* Small, Clear & Nice Headline */}
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight leading-tight">
              Clinical Home Nursing & Patient Care
            </h1>

            {/* Concise & Clear Sub-header */}
            <p className="text-sm sm:text-base text-slate-200 max-w-xl leading-relaxed font-light">
              Doctor-prescribed home nursing, patient hygiene care, and physical recovery support across Ranchi.
            </p>

            {/* Clinical Capabilities Quick Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 text-xs pt-1">
              <div className="flex items-center gap-2 glass-panel-dark p-2.5 rounded-xl border border-white/10">
                <CheckCircle2 className="w-4 h-4 text-[#8EC63F] flex-shrink-0" />
                <span className="font-medium text-slate-200">ICU Trained Nurses</span>
              </div>
              <div className="flex items-center gap-2 glass-panel-dark p-2.5 rounded-xl border border-white/10">
                <CheckCircle2 className="w-4 h-4 text-[#8EC63F] flex-shrink-0" />
                <span className="font-medium text-slate-200">Doctor-Guided Care</span>
              </div>
              <div className="flex items-center gap-2 glass-panel-dark p-2.5 rounded-xl border border-white/10 col-span-2 sm:col-span-1">
                <CheckCircle2 className="w-4 h-4 text-[#8EC63F] flex-shrink-0" />
                <span className="font-medium text-slate-200">12h & 24h Shifts</span>
              </div>
            </div>

            <div className="pt-3 flex flex-wrap items-center gap-5 text-xs text-slate-300 border-t border-white/10">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#8EC63F]" />
                <span>Verified Attendants</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-[#20AD96]" />
                <span>Registered Agency</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="lg:col-span-5 flex justify-center relative"
          >
            <div className="relative w-full max-w-md aspect-[4/3] rounded-3xl overflow-hidden border-2 border-[#20AD96]/40 shadow-2xl bg-glow-teal">
              <Image
                src="/images/brand/caregiver.jpg"
                alt="Care at Home, Ranchi nurse attentively caring for patient"
                fill
                className="object-cover"
                priority
              />

              <div className="absolute bottom-4 left-4 right-4 glass-panel-dark p-3.5 rounded-2xl border border-white/20 shadow-2xl flex items-center justify-between text-xs">
                <div className="flex items-center gap-2.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  <div>
                    <div className="font-bold text-white font-serif text-sm">Care at Home</div>
                    <div className="text-[11px] text-slate-300">Ashok Nagar, Ranchi</div>
                  </div>
                </div>
                <div className="inline-flex items-center gap-1.5 bg-[#8EC63F]/20 text-[#8EC63F] border border-[#8EC63F]/40 px-2.5 py-1 rounded-lg font-bold text-[11px]">
                  <Building2 className="w-3.5 h-3.5" />
                  <span>Est. 2016</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
