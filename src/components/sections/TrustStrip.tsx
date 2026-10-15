import React from 'react';
import Link from 'next/link';
import { ShieldCheck, Star, Clock, Award } from 'lucide-react';
import { BRAND_DATA } from '@/constants/site-data';

export const TrustStrip: React.FC = () => {
  const pillars = [
    {
      title: `${new Date().getFullYear() - parseInt(BRAND_DATA.est)}+ Years Experience`,
      subtitle: `Serving Ranchi Since ${BRAND_DATA.est}`,
      icon: <Award className="w-5 h-5 text-[#20AD96]" />,
      glowColor: 'bg-[#20AD96]/10 border-[#20AD96]/20',
      href: '/about',
    },
    {
      title: `${BRAND_DATA.rating.count}+ Client Reviews`,
      subtitle: `${BRAND_DATA.rating.score}/5 on ${BRAND_DATA.rating.platform}`,
      icon: <Star className="w-5 h-5 text-amber-500 fill-amber-500" />,
      glowColor: 'bg-amber-500/10 border-amber-500/20',
      href: BRAND_DATA.contact.googleMapsUrl,
      external: true,
    },
    {
      title: "Verified Caregivers",
      subtitle: "Aadhaar & Background Checked",
      icon: <ShieldCheck className="w-5 h-5 text-[#8EC63F]" />,
      glowColor: 'bg-[#8EC63F]/10 border-[#8EC63F]/20',
    },
    {
      title: "Flexible Shift Care",
      subtitle: "12h & 24h Shift Models",
      icon: <Clock className="w-5 h-5 text-[#20AD96]" />,
      glowColor: 'bg-[#20AD96]/10 border-[#20AD96]/20',
    },
  ];

  return (
    <section className="bg-slate-50/80 py-10 border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {pillars.map((pillar, idx) => {
            const Content = (
              <div className="bg-white rounded-2xl p-5 border border-slate-200/80 flex items-center space-x-4 shadow-xs hover:border-[#20AD96]/50 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 group h-full">
                <div className={`p-3 rounded-xl border flex-shrink-0 transition-transform group-hover:scale-105 ${pillar.glowColor}`}>
                  {pillar.icon}
                </div>
                <div>
                  <h4 className="text-sm sm:text-base font-bold text-[#0C364A] tracking-tight group-hover:text-[#20AD96] transition-colors">
                    {pillar.title}
                  </h4>
                  <p className="text-xs text-slate-500 font-normal pt-0.5">
                    {pillar.subtitle}
                  </p>
                </div>
              </div>
            );

            if (pillar.href) {
              return pillar.external ? (
                <a
                  key={idx}
                  href={pillar.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block h-full"
                >
                  {Content}
                </a>
              ) : (
                <Link key={idx} href={pillar.href} className="block h-full">
                  {Content}
                </Link>
              );
            }

            return <div key={idx} className="block h-full">{Content}</div>;
          })}
        </div>
      </div>
    </section>
  );
};
