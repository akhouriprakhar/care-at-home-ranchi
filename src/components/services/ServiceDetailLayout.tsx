'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Activity, 
  Heart, 
  Baby, 
  Stethoscope, 
  CheckCircle2, 
  Clock, 
  FileText, 
  UserCheck, 
  ShieldCheck, 
  Sparkles,
  ArrowLeft
} from 'lucide-react';

export interface ServiceDetailData {
  slug: string;
  badge: string;
  heroTitle: string;
  heroDescription: string;
  iconName: 'activity' | 'heart' | 'baby' | 'stethoscope';
  quickStats: string[];
  overviewTitle: string;
  overviewParagraphs: string[];
  col1Title: string;
  col1IconName: 'activity' | 'heart' | 'baby' | 'stethoscope' | 'shieldCheck';
  col1Items: string[];
  col2Title: string;
  col2IconName: 'userCheck' | 'clock' | 'heart' | 'stethoscope' | 'shieldCheck';
  col2Items: string[];
}

interface ServiceDetailLayoutProps {
  data: ServiceDetailData;
}

export const ServiceDetailLayout: React.FC<ServiceDetailLayoutProps> = ({ data }) => {
  const getIcon = (iconName: string, className: string = 'w-6 h-6') => {
    switch (iconName) {
      case 'activity':
        return <Activity className={className} />;
      case 'heart':
        return <Heart className={className} />;
      case 'baby':
        return <Baby className={className} />;
      case 'stethoscope':
        return <Stethoscope className={className} />;
      case 'userCheck':
        return <UserCheck className={className} />;
      case 'shieldCheck':
        return <ShieldCheck className={className} />;
      default:
        return <Activity className={className} />;
    }
  };

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

  // Phase 2 Mandate: Standardized 3-Option Shift Availability Matrix across all 4 service detail pages
  const shiftModels = [
    {
      title: '12-Hour Shift',
      subtitle: 'Standard Day or Night Shift',
      description: 'Dedicated 12-hour daytime or overnight clinical nurse or attendant deployment for medication, feeding, vitals, and hygiene care.',
      highlight: 'Flexible Day / Night'
    },
    {
      title: '24-Hour Continuous',
      description: 'One dedicated attendant residing at home and deployed throughout the 24-hour period for ongoing patient monitoring and assistance.',
      highlight: 'Single Resident Attendant'
    },
    {
      title: '24-Hour Split Shift',
      description: 'Two alternating attendants (12h Day / 12h Night) for continuous, high-dependency active care without staff fatigue.',
      highlight: 'Dual Nurse Rotation'
    }
  ];

  return (
    <div className="overflow-x-hidden bg-[#F8FAFC]">
      {/* Hero Banner with Direct Section Background Styling (Eliminates White Line Gaps) */}
      <section className="bg-[#0C364A] text-white py-10 sm:py-14 bg-hero-ambient border-b border-slate-700/60 shadow-lg relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-80 h-80 bg-[#20AD96]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-[#8EC63F]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4">
          {/* Breadcrumbs */}
          <motion.div 
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="flex items-center gap-2 text-xs text-slate-300 flex-wrap"
          >
            <Link href="/" className="hover:text-[#8EC63F] transition-colors">Home</Link>
            <span className="text-slate-500">/</span>
            <Link href="/services" className="hover:text-[#8EC63F] transition-colors">Services</Link>
            <span className="text-slate-500">/</span>
            <span className="text-[#8EC63F] font-semibold">{data.badge}</span>
          </motion.div>

          {/* Category Pill Badge */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.35 }}
            className="inline-flex items-center gap-2 bg-[#20AD96]/20 border border-[#20AD96]/40 px-3.5 py-1 rounded-full text-xs font-bold text-[#8EC63F] shadow-xs backdrop-blur-md"
          >
            <span className="p-1 bg-[#20AD96]/30 rounded-full text-[#8EC63F]">
              {getIcon(data.iconName, 'w-3.5 h-3.5')}
            </span>
            <span>{data.badge}</span>
          </motion.div>

          {/* Title */}
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.1 }}
            className="text-2xl sm:text-4xl lg:text-5xl font-extrabold font-serif text-white tracking-tight"
          >
            {data.heroTitle}
          </motion.h1>

          {/* Description */}
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.15 }}
            className="text-slate-200 text-sm sm:text-base max-w-3xl font-light leading-relaxed"
          >
            {data.heroDescription}
          </motion.p>

          {/* Quick Highlight Stats Pills */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.2 }}
            className="pt-1 flex flex-wrap gap-2.5"
          >
            {data.quickStats.map((stat, idx) => (
              <div 
                key={idx} 
                className="bg-white/10 backdrop-blur-md border border-white/15 px-3 py-1 rounded-lg text-xs font-semibold text-white flex items-center gap-1.5"
              >
                <Sparkles className="w-3 h-3 text-[#8EC63F]" />
                <span>{stat}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Main Content Area with Controlled Vertical Padding */}
      <section className="py-8 sm:py-12 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10">
          {/* Section 1: Detailed Clinical Overview */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.4 }}
            className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden group space-y-4"
          >
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0C364A] via-[#20AD96] to-[#8EC63F]" />
            
            <div className="flex items-center gap-3.5">
              <motion.div 
                whileHover={{ rotate: 8, scale: 1.05 }}
                className="p-3 bg-[#20AD96]/10 text-[#20AD96] rounded-xl border border-[#20AD96]/30 shadow-xs"
              >
                <FileText className="w-6 h-6" />
              </motion.div>
              <div>
                <span className="text-[11px] uppercase font-extrabold tracking-widest text-[#20AD96] block">
                  Clinical Standards & Protocols
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-[#0C364A] font-serif">
                  {data.overviewTitle}
                </h2>
              </div>
            </div>

            <div className="space-y-3 text-slate-700 leading-relaxed text-sm sm:text-base font-light border-t border-slate-100 pt-4">
              {data.overviewParagraphs.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>
          </motion.div>

          {/* Section 2: 2-Column Grid - Procedures & Daily Care Routine */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-30px' }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-6"
          >
            {/* Left Column Card */}
            <motion.div 
              variants={itemVariants}
              whileHover={{ y: -3 }}
              className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-4 pb-3 border-b border-slate-100">
                  <div className="p-2.5 bg-[#0C364A] text-white rounded-xl shadow-xs">
                    {getIcon(data.col1IconName, 'w-5 h-5')}
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider font-extrabold text-[#20AD96] block">
                      Medical Focus Area
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-[#0C364A] font-serif">
                      {data.col1Title}
                    </h3>
                  </div>
                </div>

                <ul className="space-y-2.5 text-xs sm:text-sm text-[#0C364A]">
                  {data.col1Items.map((item, idx) => (
                    <motion.li 
                      key={idx}
                      whileHover={{ x: 3 }}
                      className="flex items-start gap-2.5 bg-[#F8FAFC] hover:bg-emerald-50/60 p-3 rounded-xl border border-slate-200/80 transition-colors"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#20AD96] mt-0.5 flex-shrink-0" />
                      <span className="leading-snug font-medium">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Right Column Card */}
            <motion.div 
              variants={itemVariants}
              whileHover={{ y: -3 }}
              className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-4 pb-3 border-b border-slate-100">
                  <div className="p-2.5 bg-[#20AD96] text-white rounded-xl shadow-xs">
                    {getIcon(data.col2IconName, 'w-5 h-5')}
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider font-extrabold text-[#20AD96] block">
                      Attendant Responsibilities
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-[#0C364A] font-serif">
                      {data.col2Title}
                    </h3>
                  </div>
                </div>

                <ul className="space-y-2.5 text-xs sm:text-sm text-[#0C364A]">
                  {data.col2Items.map((item, idx) => (
                    <motion.li 
                      key={idx}
                      whileHover={{ x: 3 }}
                      className="flex items-start gap-2.5 bg-[#F8FAFC] hover:bg-emerald-50/60 p-3 rounded-xl border border-slate-200/80 transition-colors"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#20AD96] mt-0.5 flex-shrink-0" />
                      <span className="leading-snug font-medium">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </motion.div>

          {/* Section 3: Shift Model Availability Matrix (Refactored to 3 Standardized Options) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.4 }}
            className="bg-[#0C364A] text-white rounded-2xl p-6 sm:p-8 shadow-xl border border-white/10 space-y-6 relative overflow-hidden"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10 pb-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-[#8EC63F]/20 text-[#8EC63F] rounded-xl border border-[#8EC63F]/30">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-extrabold tracking-widest text-[#8EC63F]">
                    Shift Availability Matrix
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white font-serif">
                    Caregiver Shift Deployment Options
                  </h3>
                </div>
              </div>

              <div className="text-xs text-slate-300 bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-full font-medium flex items-center gap-1.5 self-start sm:self-auto">
                <ShieldCheck className="w-3.5 h-3.5 text-[#8EC63F]" />
                <span>Certified Clinical Personnel</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {shiftModels.map((shift, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ y: -4, scale: 1.01 }}
                  className="bg-[#072331] p-5 rounded-xl border border-white/10 hover:border-[#8EC63F]/50 transition-all shadow-xs flex flex-col justify-between group"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] uppercase font-extrabold text-[#20AD96] tracking-wider bg-[#20AD96]/10 border border-[#20AD96]/30 px-2 py-0.5 rounded-md">
                        Option 0{idx + 1}
                      </span>
                      {shift.highlight && (
                        <span className="text-[10px] uppercase font-extrabold text-[#8EC63F]">
                          {shift.highlight}
                        </span>
                      )}
                    </div>
                    <h4 className="font-bold text-base text-[#8EC63F] group-hover:text-white transition-colors font-serif">
                      {shift.title}
                    </h4>
                    {shift.subtitle && (
                      <div className="text-[11px] text-[#20AD96] font-semibold">{shift.subtitle}</div>
                    )}
                    <p className="text-slate-300 text-xs font-light leading-relaxed">
                      {shift.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Section 4: Directory Navigation Callout (Clean footer nav without duplicate locality banner) */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-slate-200 text-xs text-slate-500">
            <Link href="/services" className="inline-flex items-center gap-1.5 font-bold text-[#0C364A] hover:text-[#20AD96] transition-colors">
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Explore All 4 Clinical Services</span>
            </Link>
            <span className="text-slate-400 font-medium">
              Care at Home, Ranchi • Registered Healthcare Agency
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};
