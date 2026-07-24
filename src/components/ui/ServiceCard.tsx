import React from 'react';
import Link from 'next/link';
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
          <div className="p-3 bg-[#20AD96]/20 text-[#20AD96] rounded-2xl border border-[#20AD96]/30">
            <Activity className="w-6 h-6" />
          </div>
        );
      case 'elderly-hygiene':
        return (
          <div className="p-3 bg-[#20AD96]/20 text-[#20AD96] rounded-2xl border border-[#20AD96]/30">
            <Heart className="w-6 h-6" />
          </div>
        );
      case 'mother-baby-care':
        return (
          <div className="p-3 bg-[#20AD96]/20 text-[#20AD96] rounded-2xl border border-[#20AD96]/30">
            <Baby className="w-6 h-6" />
          </div>
        );
      case 'physiotherapy':
        return (
          <div className="p-3 bg-[#20AD96]/20 text-[#20AD96] rounded-2xl border border-[#20AD96]/30">
            <Stethoscope className="w-6 h-6" />
          </div>
        );
      default:
        return (
          <div className="p-3 bg-[#20AD96]/20 text-[#20AD96] rounded-2xl border border-[#20AD96]/30">
            <Activity className="w-6 h-6" />
          </div>
        );
    }
  };

  return (
    <div className="w-full bg-white rounded-3xl border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group">
      <div>
        {/* Header Container */}
        <div className="bg-[#0C364A] p-6 text-white relative">
          <div className="flex items-center justify-between mb-3">
            {getServiceIcon(service.slug)}
            {service.badge && (
              <span className="bg-[#8EC63F] text-[#072331] text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
                {service.badge}
              </span>
            )}
          </div>
          <h3 className="text-xl font-bold font-serif text-white group-hover:text-[#8EC63F] transition-colors leading-snug">
            {service.title}
          </h3>
          <p className="text-slate-200 text-xs sm:text-sm leading-relaxed font-light mt-2">
            {service.shortDescription}
          </p>
        </div>

        {/* Clinical Features List */}
        <div className="p-6">
          <span className="text-[11px] uppercase tracking-wider font-bold text-[#20AD96] block mb-3">
            Clinical Capabilities
          </span>
          <ul className="space-y-2.5">
            {service.features.map((feature, idx) => (
              <li key={idx} className="flex items-start text-xs sm:text-sm text-[#0C364A]">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#20AD96] mt-1.5 mr-2.5 flex-shrink-0" />
                <span className="leading-snug">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* View Details Action Button */}
      <div className="p-6 pt-4 border-t border-slate-100 flex items-center justify-between mt-auto">
        <Link href={servicePath} className="w-full">
          <button className="w-full border-2 border-[#0C364A] text-[#0C364A] font-bold text-xs py-2.5 px-3 rounded-xl hover:bg-[#0C364A] hover:text-white transition-all text-center flex items-center justify-center gap-1">
            <span>View Full Details</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </Link>
      </div>
    </div>
  );
};
