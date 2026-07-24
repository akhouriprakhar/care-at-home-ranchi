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
  ShieldCheck, 
  AlertCircle,
  Sparkles
} from 'lucide-react';
import { SERVICES_DATA, SPECIFIC_PROCEDURES, BRAND_DATA } from '@/constants/site-data';

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
      {/* Hero Banner - Flushes 100% seamlessly flush with Navbar (Zero White Gap Line) */}
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
            <Sparkles className="w-3.5 h-3.5 text-[#8EC63F]" />
            <span>Specialized Clinical Home Healthcare</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.1 }}
            className="text-2xl sm:text-4xl lg:text-5xl font-extrabold font-serif text-white tracking-tight"
          >
            Clinical Services Directory
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.15 }}
            className="text-slate-200 text-sm sm:text-base max-w-3xl font-light leading-relaxed"
          >
            Doctor-prescribed home nursing, specialized clinical patient hygiene, post-natal recovery, and in-home physical rehabilitation across Ranchi.
          </motion.p>
        </div>
      </section>

      {/* Main Content Area with Controlled Vertical Padding */}
      <section className="py-6 sm:py-8 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8">
          {/* Section 1: Main 4 Services Grid */}
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div>
                <span className="text-[11px] uppercase font-extrabold tracking-widest text-[#20AD96]">
                  Core Offerings
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-[#0C364A] font-serif">
                  Four Specialized Clinical Services
                </h2>
              </div>
              <span className="text-xs font-semibold text-slate-600 bg-slate-100 px-3 py-1 rounded-full self-start sm:self-auto">
                12h / 24h Shift Availability
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
                  className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden space-y-4"
                >
                  <div className="absolute top-0 left-0 right-0 h-1 bg-[#20AD96] opacity-0 group-hover:opacity-100 transition-opacity" />

                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="p-2.5 bg-[#20AD96]/10 rounded-xl border border-[#20AD96]/30 group-hover:bg-[#20AD96]/20 transition-colors">
                        {getServiceIcon(service.slug)}
                      </div>
                      {service.badge && (
                        <span className="bg-[#8EC63F] text-[#072331] text-[10px] font-extrabold px-2.5 py-0.5 rounded-full uppercase tracking-wider shadow-xs">
                          {service.badge}
                        </span>
                      )}
                    </div>

                    <h3 className="text-xl font-bold font-serif text-[#0C364A] group-hover:text-[#20AD96] transition-colors mb-2">
                      {service.title}
                    </h3>

                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4 font-light">
                      {service.fullDescription}
                    </p>

                    <div className="border-t border-slate-100 pt-3 mb-4">
                      <span className="text-[11px] uppercase font-extrabold text-[#20AD96] block mb-2">
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
                    <Link href={`/services/${service.slug}`} className="w-full">
                      <button className="w-full border-2 border-[#0C364A] text-[#0C364A] font-bold text-xs py-2.5 px-4 rounded-xl hover:bg-[#0C364A] hover:text-white transition-all text-center flex items-center justify-center gap-1.5 group-hover:shadow-xs">
                        <span>View Full Service Details</span>
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Section 2: Specific Medical Procedures Catalog */}
          <div className="space-y-4 pt-2">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div>
                <span className="text-[11px] uppercase font-extrabold tracking-widest text-[#20AD96]">
                  Clinical Procedures
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-[#0C364A] font-serif">
                  Specific Prescribed Medical Care
                </h2>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-amber-700 bg-amber-50 border border-amber-200 px-3 py-1 rounded-full">
                <AlertCircle className="w-3.5 h-3.5 text-amber-600" />
                <span>Requires Doctor Orders for Invasive Care</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {SPECIFIC_PROCEDURES.map((proc) => (
                <motion.div
                  key={proc.id}
                  whileHover={{ y: -3 }}
                  className="bg-white rounded-xl p-5 border border-slate-200 shadow-xs hover:shadow-md transition-all flex flex-col justify-between space-y-3"
                >
                  <div className="space-y-1.5">
                    <span className="text-[10px] font-extrabold text-[#20AD96] uppercase tracking-wider block">
                      {proc.category}
                    </span>
                    <h3 className="font-bold text-sm sm:text-base text-[#0C364A] font-serif">
                      {proc.title}
                    </h3>
                    <p className="text-slate-600 text-xs font-light leading-relaxed">
                      {proc.description}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-slate-100 space-y-1.5">
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
