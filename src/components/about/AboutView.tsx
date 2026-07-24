'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Star, 
  ShieldCheck, 
  UserCheck, 
  Phone, 
  Award, 
  Building2, 
  HeartHandshake, 
  MapPin,
  Clock,
  CheckCircle2,
  FileCheck2,
  Sparkles,
  Stethoscope
} from 'lucide-react';
import { BRAND_DATA } from '@/constants/site-data';

export const AboutView: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.35 } },
  };

  return (
    <div className="overflow-x-hidden bg-[#F8FAFC]">
      {/* Page Hero Banner */}
      <section className="bg-[#0C364A] text-white py-10 sm:py-14 bg-hero-ambient border-b border-slate-700/60 shadow-lg relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-80 h-80 bg-[#20AD96]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-[#8EC63F]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-3">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.35 }}
            className="inline-flex items-center gap-2 bg-[#20AD96]/20 border border-[#20AD96]/40 px-3.5 py-1 rounded-full text-xs font-bold text-[#8EC63F] shadow-xs backdrop-blur-md"
          >
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            <span>{BRAND_DATA.rating.score} / 5 Verified Rating ({BRAND_DATA.rating.count}+ Client Reviews)</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.1 }}
            className="text-2xl sm:text-4xl lg:text-5xl font-extrabold font-serif text-white tracking-tight"
          >
            About Care at Home, Ranchi
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.15 }}
            className="text-slate-200 text-sm sm:text-base max-w-3xl font-light leading-relaxed"
          >
            Established in {BRAND_DATA.est}, Care at Home is Ranchi's leading clinical home nursing agency. Delivering 12-hour and 24-hour shift care, ICU support, patient hygiene, and physiotherapy across 100% of Ranchi.
          </motion.p>
        </div>
      </section>

      {/* Main Section */}
      <section className="py-8 sm:py-12 bg-[#F8FAFC]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8">
          {/* Section 1: History & Operational Mandate */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.4 }}
            className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4 relative overflow-hidden"
          >
            <div className="flex items-center gap-3 border-b border-slate-100 pb-3">
              <div className="p-2.5 bg-[#20AD96]/10 text-[#20AD96] rounded-xl border border-[#20AD96]/30">
                <Building2 className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] uppercase font-extrabold tracking-widest text-[#20AD96]">
                  Institutional Standing
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-[#0C364A] font-serif">
                  Over 8 Years of Dedicated Home Healthcare
                </h2>
              </div>
            </div>

            <div className="space-y-3 text-slate-700 leading-relaxed text-sm sm:text-base font-light">
              <p>
                Founded in {BRAND_DATA.est}, {BRAND_DATA.name} was established to fill the critical gap for structured, qualified, and compassionate clinical nursing care in Ranchi. Over the past eight years, our agency has provided hospital-grade bedside recovery for thousands of families across Ranchi city.
              </p>
              <p>
                Our daily clinical operations focus strictly on patient care. Every deployment is managed under physician treatment recommendations, ensuring accurate vital parameter tracking, proper catheter/tracheostomy hygiene, and dignity for bedridden patients.
              </p>
            </div>

            {/* Quick Pillars Bar */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="bg-[#F8FAFC] border border-slate-200 p-3.5 rounded-xl flex items-center gap-2.5">
                <Clock className="w-5 h-5 text-[#20AD96] flex-shrink-0" />
                <div>
                  <div className="text-xs font-bold text-[#0C364A]">Shift-Based Patient Care</div>
                  <div className="text-[11px] text-slate-500 font-light">Office Mon–Sat (Closed Sun)</div>
                </div>
              </div>

              <div className="bg-[#F8FAFC] border border-slate-200 p-3.5 rounded-xl flex items-center gap-2.5">
                <FileCheck2 className="w-5 h-5 text-[#20AD96] flex-shrink-0" />
                <div>
                  <div className="text-xs font-bold text-[#0C364A]">Physician Order Driven</div>
                  <div className="text-[11px] text-slate-500 font-light">Strict Medical Compliance</div>
                </div>
              </div>

              <div className="bg-[#F8FAFC] border border-slate-200 p-3.5 rounded-xl flex items-center gap-2.5">
                <MapPin className="w-5 h-5 text-[#20AD96] flex-shrink-0" />
                <div>
                  <div className="text-xs font-bold text-[#0C364A]">100% Ranchi Coverage</div>
                  <div className="text-[11px] text-slate-500 font-light">City-Wide Home Deployment</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Section 2: Clinical Verification Standards Grid */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-30px' }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            <motion.div 
              variants={itemVariants}
              whileHover={{ y: -3 }}
              className="bg-[#F8FAFC] rounded-2xl p-6 border border-slate-200 shadow-xs space-y-2"
            >
              <div className="p-2.5 bg-white text-[#20AD96] rounded-xl border border-slate-200 w-fit">
                <UserCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#0C364A] font-serif">Background Verified Personnel</h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-light">
                Mandatory Aadhaar identity checks, residential verification, and background clearance for all assigned personnel.
              </p>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              whileHover={{ y: -3 }}
              className="bg-[#F8FAFC] rounded-2xl p-6 border border-slate-200 shadow-xs space-y-2"
            >
              <div className="p-2.5 bg-white text-[#20AD96] rounded-xl border border-slate-200 w-fit">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#0C364A] font-serif">Hospital Hygiene Standards</h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-light">
                Aseptic wound dressing, sterile tracheostomy suctioning, and catheter care following clinical safety guidelines.
              </p>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              whileHover={{ y: -3 }}
              className="bg-[#F8FAFC] rounded-2xl p-6 border border-slate-200 shadow-xs space-y-2"
            >
              <div className="p-2.5 bg-white text-[#8EC63F] rounded-xl border border-slate-200 w-fit">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#0C364A] font-serif">Top Rated Agency Standing</h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-light">
                4.7/5 rating backed by 146+ verified client feedback reviews on Google & Justdial across Ranchi.
              </p>
            </motion.div>
          </motion.div>

          {/* Section 3: Agency Charter Declaration */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.4 }}
            className="bg-[#0C364A] text-white rounded-2xl p-6 sm:p-8 shadow-xl border border-white/10 space-y-4"
          >
            <div className="flex items-center gap-3">
              <HeartHandshake className="w-6 h-6 text-[#8EC63F]" />
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-white font-serif">{BRAND_DATA.name} Operational Charter</h3>
                <span className="text-[10px] text-[#8EC63F] uppercase tracking-wider font-extrabold">
                  Clinical Healthcare Agency
                </span>
              </div>
            </div>

            <blockquote className="italic text-slate-200 text-sm sm:text-base border-l-4 border-[#20AD96] pl-4 py-1 font-light leading-relaxed">
              &ldquo;Our agency is built upon clinical compliance, patient dignity, and medical hygiene. Every nurse and attendant deployed by Care at Home operates under physician orders to ensure safety and hospital-grade recovery at home.&rdquo;
            </blockquote>

            <div className="pt-3 border-t border-white/10 text-xs text-slate-400 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
              <span>{BRAND_DATA.name} • Registered Clinical Agency (Est. {BRAND_DATA.est})</span>
              <span className="text-slate-300 font-semibold">Headquarters: Ashok Kunj, Harmu Colony, Ranchi</span>
            </div>
          </motion.div>

          {/* Phase 3 Mandate: Transitional Banner between main content card and dark footer */}
          <section className="bg-[#F8FAFC] border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-[#20AD96]/10 text-[#20AD96] rounded-xl border border-[#20AD96]/30">
                  <Stethoscope className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-base text-[#0C364A] font-serif">Sanitized Equipment & Verified Clinical Personnel</h4>
                  <p className="text-slate-600 text-xs font-light">100% Aadhaar checked health attendants and licensed GNM/B.Sc nurses for Ranchi families.</p>
                </div>
              </div>
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href={`tel:${BRAND_DATA.contact.phone}`}
                className="bg-[#8EC63F] text-[#072331] font-extrabold px-6 py-2.5 rounded-xl text-xs uppercase tracking-wider flex-shrink-0 flex items-center gap-1.5 shadow"
              >
                <Phone className="w-3.5 h-3.5 fill-[#072331]" />
                <span>Call Helpline ({BRAND_DATA.contact.phone})</span>
              </motion.a>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
};
