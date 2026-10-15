'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Activity, 
  Heart, 
  Baby, 
  Stethoscope, 
  ChevronRight, 
  CheckCircle2, 
  AlertCircle,
  Sparkles
} from 'lucide-react';
import { SERVICES_DATA, SPECIFIC_PROCEDURES } from '@/constants/site-data';

export const ServicesDirectoryView: React.FC = () => {
  const getServiceIcon = (slug: string) => {
    switch (slug) {
      case 'critical-care':
        return <Activity className="w-6 h-6 text-[#20AD96]" />;
      case 'elderly-hygiene':
        return <Heart className="w-6 h-6 text-[#20AD96]" />;
      case 'mother-baby-care':
        return <Baby className="w-6 h-6 text-[#20AD96]" />;
      case 'physiotherapy':
        return <Stethoscope className="w-6 h-6 text-[#20AD96]" />;
      default:
        return <Activity className="w-6 h-6 text-[#20AD96]" />;
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

  return (
    <div className="overflow-x-hidden bg-[#F8FAFC]">
      {/* Hero Banner in careathomeranchi.com Colors */}
      <section className="bg-[#072331] text-white pt-24 sm:pt-28 pb-10 sm:pb-14 bg-hero-ambient border-b border-white/10 shadow-lg relative overflow-hidden">
        {/* Subtle Grain Overlay */}
        <div className="absolute inset-0 bg-grain opacity-30 pointer-events-none" />

        <div className="absolute top-0 right-1/4 w-80 h-80 bg-[#8EC63F]/12 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-[#20AD96]/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-3">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.35 }}
            className="inline-flex items-center gap-2 bg-[#20AD96]/20 border border-[#20AD96]/40 px-3.5 py-1 rounded-full text-xs font-semibold text-[#8EC63F] shadow-xs backdrop-blur-md font-sans"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#8EC63F]" />
            <span>Specialized Clinical Home Healthcare</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight"
          >
            Clinical Services Directory in{' '}
            <span className="text-[#8EC63F]">
              Ranchi
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.15 }}
            className="text-slate-200 text-sm sm:text-base max-w-3xl font-sans font-light leading-relaxed"
          >
            Doctor-prescribed home nursing, specialized clinical patient hygiene, post-natal recovery, and in-home physical rehabilitation across Ranchi.
          </motion.p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-8 sm:py-12 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {/* Section 1: Main 4 Services Grid */}
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div>
                <span className="text-[10px] uppercase font-extrabold tracking-widest text-[#20AD96] font-sans">
                  Core Offerings
                </span>
                <h2 className="text-xl sm:text-2xl font-heading font-bold text-[#0C364A]">
                  Four Specialized Clinical Services
                </h2>
              </div>
              <span className="text-xs font-semibold text-[#20AD96] bg-[#20AD96]/10 border border-[#20AD96]/30 px-3 py-1 rounded-full self-start sm:self-auto font-sans">
                12h & 24h Shift Models
              </span>
            </div>

            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {SERVICES_DATA.map((service) => (
                <motion.div
                  key={service.id}
                  variants={itemVariants}
                  whileHover={{ y: -4 }}
                  className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xs hover:shadow-xl hover:border-[#20AD96]/50 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden space-y-4"
                >
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#20AD96] via-[#8EC63F] to-[#20AD96] opacity-0 group-hover:opacity-100 transition-opacity" />

                  <div>
                    <div className="flex items-center justify-between mb-3.5">
                      <div className="p-2.5 bg-slate-50 rounded-2xl border border-slate-200 group-hover:scale-105 transition-transform">
                        {getServiceIcon(service.slug)}
                      </div>
                      {service.badge && (
                        <span className="bg-[#20AD96]/15 text-[#0C364A] border border-[#20AD96]/30 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider font-sans">
                          {service.badge}
                        </span>
                      )}
                    </div>

                    <h3 className="text-xl font-heading font-bold text-[#0C364A] group-hover:text-[#20AD96] transition-colors mb-2">
                      {service.title}
                    </h3>

                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4 font-sans font-light">
                      {service.fullDescription}
                    </p>

                    <div className="border-t border-slate-100 pt-3 mb-4 font-sans">
                      <span className="text-[10px] uppercase font-bold text-[#20AD96] block mb-2 font-heading tracking-wider">
                        Clinical Capabilities Included
                      </span>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#0C364A]">
                        {service.features.map((feat, idx) => (
                          <li key={idx} className="flex items-start">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#20AD96] mr-1.5 mt-0.5 flex-shrink-0" />
                            <span className="leading-snug">{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                    <Link
                      href={`/services/${service.slug}`}
                      className="w-full border border-slate-300 group-hover:border-[#0C364A] group-hover:bg-[#0C364A] group-hover:text-white text-[#0C364A] font-heading font-bold text-xs py-2.5 px-4 rounded-xl transition-all text-center flex items-center justify-center gap-1.5 shadow-xs"
                    >
                      <span>View Full Service Details</span>
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Section 2: Specific Medical Procedures Catalog */}
          <div className="space-y-6 pt-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div>
                <span className="text-[10px] uppercase font-extrabold tracking-widest text-[#20AD96] font-sans">
                  Clinical Procedures
                </span>
                <h2 className="text-xl sm:text-2xl font-heading font-bold text-[#0C364A]">
                  Specific Prescribed Medical Care
                </h2>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-amber-700 bg-amber-50 border border-amber-200 px-3 py-1 rounded-full font-sans">
                <AlertCircle className="w-3.5 h-3.5 text-amber-600" />
                <span>Requires Doctor Orders for Invasive Care</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {SPECIFIC_PROCEDURES.map((proc) => (
                <motion.div
                  key={proc.id}
                  whileHover={{ y: -3 }}
                  className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-xs hover:border-[#20AD96]/40 hover:shadow-md transition-all flex flex-col justify-between space-y-3"
                >
                  <div className="space-y-1.5">
                    <span className="text-[10px] font-bold text-[#20AD96] uppercase tracking-wider block font-sans">
                      {proc.category}
                    </span>
                    <h3 className="font-heading font-bold text-sm sm:text-base text-[#0C364A]">
                      {proc.title}
                    </h3>
                    <p className="text-slate-600 text-xs font-sans font-light leading-relaxed">
                      {proc.description}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-slate-100 space-y-1.5 font-sans">
                    <ul className="space-y-1 text-[11px] text-[#0C364A]">
                      {proc.bullets.map((b, i) => (
                        <li key={i} className="flex items-center gap-1.5">
                          <span className="w-1 h-1 rounded-full bg-[#8EC63F]" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                    {proc.requiresDoctorOrder && (
                      <div className="pt-1 text-[10px] font-bold text-slate-500 uppercase tracking-wide">
                        • Doctor Order Required
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
