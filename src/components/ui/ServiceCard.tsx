'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ChevronRight, Activity, Heart, Baby, Stethoscope } from 'lucide-react';
import { ServiceDetail } from '@/constants/site-data';

interface ServiceCardProps {
  service: ServiceDetail;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const servicePath = service.slug ? `/services/${service.slug}` : '/services';

  const getServiceIcon = (slug: string) => {
    switch (slug) {
      case 'critical-care':
        return (
          <div className="p-3 bg-[#20AD96]/20 text-[#8EC63F] rounded-2xl border border-[#20AD96]/30">
            <Activity className="w-5 h-5" />
          </div>
        );
      case 'elderly-hygiene':
        return (
          <div className="p-3 bg-[#20AD96]/20 text-[#8EC63F] rounded-2xl border border-[#20AD96]/30">
            <Heart className="w-5 h-5" />
          </div>
        );
      case 'mother-baby-care':
        return (
          <div className="p-3 bg-[#20AD96]/20 text-[#8EC63F] rounded-2xl border border-[#20AD96]/30">
            <Baby className="w-5 h-5" />
          </div>
        );
      case 'physiotherapy':
        return (
          <div className="p-3 bg-[#20AD96]/20 text-[#8EC63F] rounded-2xl border border-[#20AD96]/30">
            <Stethoscope className="w-5 h-5" />
          </div>
        );
      default:
        return (
          <div className="p-3 bg-[#20AD96]/20 text-[#8EC63F] rounded-2xl border border-[#20AD96]/30">
            <Activity className="w-5 h-5" />
          </div>
        );
    }
  };

  return (
    <motion.div 
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.98 }}
      className="w-full bg-white rounded-3xl border border-slate-200/90 shadow-xs hover:shadow-xl hover:border-[#20AD96]/50 transition-all duration-300 flex flex-col justify-between overflow-hidden group cursor-pointer"
    >
      <div>
        {/* Header Container in careathomeranchi.com Deep Navy */}
        <div className="bg-gradient-to-b from-[#0C364A] to-[#072331] p-6 text-white relative border-b border-white/10">
          <div className="flex items-center justify-between mb-3.5">
            {getServiceIcon(service.slug)}
            {service.badge && (
              <span className="bg-[#20AD96]/20 text-[#8EC63F] border border-[#20AD96]/30 text-[10px] font-semibold px-3 py-1 rounded-full uppercase tracking-wider font-sans">
                {service.badge}
              </span>
            )}
          </div>
          <h3 className="text-xl font-heading font-bold text-white group-hover:text-[#8EC63F] transition-colors leading-snug">
            {service.title}
          </h3>
          <p className="text-slate-200 text-xs sm:text-sm leading-relaxed font-light mt-2 font-sans">
            {service.shortDescription}
          </p>
        </div>

        {/* Clinical Features List */}
        <div className="p-6">
          <span className="text-[10px] uppercase tracking-wider font-bold text-[#20AD96] block mb-3 font-heading">
            Clinical Capabilities
          </span>
          <ul className="space-y-2.5 font-sans">
            {service.features.map((feature, idx) => (
              <li key={idx} className="flex items-start text-xs sm:text-sm text-[#0C364A]">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#8EC63F] mt-1.5 mr-2.5 flex-shrink-0" />
                <span className="leading-snug text-slate-700">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* View Details Action Button */}
      <div className="p-6 pt-4 border-t border-slate-100 flex items-center justify-between mt-auto">
        <Link
          href={servicePath}
          className="w-full border border-slate-300 group-hover:border-[#0C364A] group-hover:bg-[#0C364A] group-hover:text-white text-[#0C364A] font-heading font-bold text-xs py-2.5 px-3 rounded-xl transition-all duration-200 text-center flex items-center justify-center gap-1.5 shadow-xs"
        >
          <span>View Full Service Details</span>
          <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200" />
        </Link>
      </div>
    </motion.div>
  );
};
