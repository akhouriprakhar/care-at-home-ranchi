'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  CheckCircle2, 
  ShieldCheck, 
  Award, 
  Building2, 
  Phone, 
  MapPin
} from 'lucide-react';
import { BRAND_DATA } from '@/constants/site-data';

export const Hero: React.FC = () => {

  return (
    <section className="w-full bg-[#072331] text-white pt-24 sm:pt-28 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8 bg-hero-ambient relative overflow-hidden border-b border-white/10 shadow-xl">
      {/* Subtle Grain Overlay */}
      <div className="absolute inset-0 bg-grain pointer-events-none opacity-30 z-0" />

      {/* Ambient Lighting Accents in careathomeranchi.com Colors */}
      <div className="absolute top-12 right-12 w-96 h-96 rounded-full bg-[#8EC63F]/12 blur-3xl pointer-events-none" />
      <div className="absolute bottom-8 left-12 w-96 h-96 rounded-full bg-[#20AD96]/20 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="lg:col-span-7 space-y-4 max-w-2xl"
          >
            {/* Compact Pill Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="inline-flex items-center gap-2 bg-[#20AD96]/20 border border-[#20AD96]/40 px-3.5 py-1 rounded-full text-xs font-semibold text-[#8EC63F] shadow-xs backdrop-blur-md"
            >
              <div className="w-2 h-2 rounded-full bg-[#8EC63F] animate-pulse" />
              <span>Dedicated Home Care Since {BRAND_DATA.est} • Ashok Nagar, Ranchi</span>
            </motion.div>

            {/* Headline with Clean Unified Sans-Serif Typography */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
              Professional Clinical Home Nursing &amp;{' '}
              <span className="text-[#8EC63F]">
                Compassionate Patient Care
              </span>{' '}
              in Ranchi
            </h1>

            {/* Concise, Verifiable Value Description */}
            <p className="text-sm sm:text-base text-slate-200 max-w-xl leading-relaxed font-light">
              Experienced nursing support, elderly patient hygiene, post-surgical recovery, and in-home physiotherapy across Ashok Nagar, Harmu, Kanke, Bariatu, and surrounding Ranchi localities. Direct, background-verified caregivers with active local coordination.
            </p>

            {/* Direct CTAs: Signature Call Button & Office Directions */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <motion.a
                href={`tel:${BRAND_DATA.contact.phone}`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-2.5 bg-[#8EC63F] hover:bg-[#9ee543] text-[#072331] font-extrabold text-xs uppercase tracking-wider px-6 py-3.5 rounded-xl shadow-lg shadow-[#8EC63F]/30 hover:shadow-[#8EC63F]/50 transition-all cursor-pointer group"
              >
                <motion.span
                  animate={{ rotate: [0, -10, 10, -10, 0] }}
                  transition={{ repeat: Infinity, repeatDelay: 3, duration: 0.6 }}
                >
                  <Phone className="w-4 h-4 fill-[#072331] text-[#072331]" />
                </motion.span>
                <span>Call Helpline: {BRAND_DATA.contact.phone}</span>
              </motion.a>

              <motion.a
                href={BRAND_DATA.contact.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-2.5 bg-[#20AD96]/20 hover:bg-[#20AD96]/30 text-[#8EC63F] border border-[#20AD96]/40 font-bold text-xs uppercase tracking-wider px-5 py-3.5 rounded-xl backdrop-blur-md transition-all shadow-md"
              >
                <MapPin className="w-4 h-4 text-[#8EC63F]" />
                <span>Office Location &amp; Directions</span>
              </motion.a>
            </div>

            {/* Clinical Capabilities Quick Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 text-xs pt-3">
              <div className="flex items-center gap-2 glass-panel-dark p-2.5 rounded-xl border border-white/10">
                <CheckCircle2 className="w-4 h-4 text-[#8EC63F] flex-shrink-0" />
                <span className="font-medium text-slate-200">ICU Trained Nurses</span>
              </div>
              <div className="flex items-center gap-2 glass-panel-dark p-2.5 rounded-xl border border-white/10">
                <CheckCircle2 className="w-4 h-4 text-[#20AD96] flex-shrink-0" />
                <span className="font-medium text-slate-200">Doctor-Guided Care</span>
              </div>
              <div className="flex items-center gap-2 glass-panel-dark p-2.5 rounded-xl border border-white/10 col-span-2 sm:col-span-1">
                <CheckCircle2 className="w-4 h-4 text-[#8EC63F] flex-shrink-0" />
                <span className="font-medium text-slate-200">12h & 24h Shifts</span>
              </div>
            </div>

            {/* Trust Anchors */}
            <div className="pt-3 flex flex-wrap items-center gap-5 text-xs text-slate-300 border-t border-white/10">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#8EC63F]" />
                <span>Background Verified Staff</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-[#20AD96]" />
                <span>{BRAND_DATA.rating.score}/5 on {BRAND_DATA.rating.platform} ({BRAND_DATA.rating.count}+ Reviews)</span>
              </div>
              <a 
                href={BRAND_DATA.contact.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-[#8EC63F] transition-colors"
              >
                <MapPin className="w-4 h-4 text-[#8EC63F]" />
                <span>Ashok Nagar Gate No. 5</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Hero Visual Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 25 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, type: 'spring', stiffness: 200, damping: 20 }}
            className="lg:col-span-5 flex justify-center relative"
          >
            <div className="relative w-full max-w-md aspect-[4/3] rounded-3xl overflow-hidden border border-white/20 shadow-2xl bg-glow-teal">
              <Image
                src="/images/brand/caregiver.jpg"
                alt="Care at Home, Ranchi nurse attentively caring for patient"
                fill
                className="object-cover"
                priority
              />

              {/* Gradient Scrim for contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#072331]/90 via-transparent to-transparent pointer-events-none" />

              {/* Status Floating Pill Overlay */}
              <div className="absolute bottom-4 left-4 right-4 glass-panel-dark p-3.5 rounded-2xl border border-white/20 shadow-2xl flex items-center justify-between text-xs backdrop-blur-xl">
                <div className="flex items-center gap-2.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#8EC63F] animate-pulse" />
                  <div>
                    <div className="font-heading font-bold text-white text-sm">Care at Home</div>
                    <div className="text-[11px] text-slate-300 font-sans">Ashok Nagar Gate No. 5, Ranchi</div>
                  </div>
                </div>
                <div className="inline-flex items-center gap-1.5 bg-[#20AD96]/20 text-[#8EC63F] border border-[#20AD96]/30 px-2.5 py-1 rounded-lg font-bold text-[11px]">
                  <Building2 className="w-3.5 h-3.5 text-[#8EC63F]" />
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
