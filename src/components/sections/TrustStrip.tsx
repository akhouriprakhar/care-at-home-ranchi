import React from 'react';
import { ShieldCheck, Star, Clock, Award } from 'lucide-react';
import { BRAND_DATA } from '@/constants/site-data';

export const TrustStrip: React.FC = () => {
  const pillars = [
    {
      title: `${new Date().getFullYear() - parseInt(BRAND_DATA.est)}+ Years Experience`,
      subtitle: `Serving Ranchi Since ${BRAND_DATA.est}`,
      icon: <Award className="w-6 h-6 text-[#20AD96]" />,
    },
    {
      title: `${BRAND_DATA.rating.count}+ 5-Star Reviews`,
      subtitle: `${BRAND_DATA.rating.score}/5 on ${BRAND_DATA.rating.platform}`,
      icon: <Star className="w-6 h-6 text-[#8EC63F] fill-[#8EC63F]" />,
    },
    {
      title: "Background Verified Staff",
      subtitle: "Aadhaar & Police Checked",
      icon: <ShieldCheck className="w-6 h-6 text-[#20AD96]" />,
    },
    {
      title: "Flexible Shift Care",
      subtitle: "12h & 24h Shift Models",
      icon: <Clock className="w-6 h-6 text-[#20AD96]" />,
    },
  ];

  return (
    <section className="bg-[#F4F8F9] py-12 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl p-5 border border-slate-200/80 flex items-center space-x-4 shadow-sm hover:border-[#20AD96] transition-all"
            >
              <div className="p-3 bg-[#F4F8F9] rounded-xl border border-slate-200 flex-shrink-0 shadow-sm">
                {pillar.icon}
              </div>
              <div>
                <h4 className="text-base font-bold text-[#0C364A]">{pillar.title}</h4>
                <p className="text-xs text-slate-500 font-medium">{pillar.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
