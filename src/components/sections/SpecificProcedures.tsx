import React from 'react';
import { Syringe, Stethoscope, Wind, Bandage, Activity, HeartPulse } from 'lucide-react';
import { SPECIFIC_PROCEDURES } from '@/constants/site-data';

export const SpecificProcedures: React.FC = () => {
  const getIcon = (id: string) => {
    switch (id) {
      case 'iv-therapy':
        return <Syringe className="w-5 h-5 text-[#20AD96]" />;
      case 'catheterization':
        return <Stethoscope className="w-5 h-5 text-[#20AD96]" />;
      case 'tracheostomy-care':
        return <Wind className="w-5 h-5 text-[#20AD96]" />;
      case 'surgical-dressing':
        return <Bandage className="w-5 h-5 text-[#20AD96]" />;
      case 'colostomy-care':
        return <Activity className="w-5 h-5 text-[#20AD96]" />;
      case 'enterostomal-therapy':
        return <HeartPulse className="w-5 h-5 text-[#20AD96]" />;
      default:
        return <Stethoscope className="w-5 h-5 text-[#20AD96]" />;
    }
  };

  return (
    <section className="bg-slate-50/70 py-10 sm:py-14 border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          {/* Rounded Subheader Pill Badge */}
          <div className="inline-flex items-center gap-2 bg-[#20AD96]/15 border border-[#20AD96]/30 px-3.5 py-1.5 rounded-full text-xs font-semibold text-[#0C364A] mb-2.5">
            <Stethoscope className="w-4 h-4 text-[#20AD96]" />
            <span>Healthcare Service Portfolio</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-extrabold text-[#0C364A] tracking-tight">
            Specific Medical Procedures We Execute
          </h2>
          <p className="text-slate-600 mt-2 text-sm sm:text-base font-sans font-light leading-relaxed">
            All specialized procedures are executed strictly under verified physician prescriptions in Ranchi.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {SPECIFIC_PROCEDURES.map((item) => (
            <div
              key={item.id}
              className="group bg-white rounded-2xl p-6 border border-slate-200/90 shadow-xs hover:border-[#20AD96]/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="mb-4">
                  <div className="w-11 h-11 rounded-2xl bg-[#F8FAFC] border border-slate-200 flex items-center justify-center group-hover:scale-105 transition-transform duration-200 shadow-xs">
                    {getIcon(item.id)}
                  </div>
                </div>

                <h3 className="text-base font-heading font-bold text-[#0C364A] mb-1 group-hover:text-[#20AD96] transition-colors">
                  {item.title}
                </h3>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <p className="text-[11px] font-bold text-[#20AD96] uppercase tracking-wider">
                    {item.category}
                  </p>
                  {item.requiresDoctorOrder && (
                    <span className="text-[9px] font-semibold text-amber-700 bg-amber-50 border border-amber-200/80 px-2 py-0.5 rounded-full flex-shrink-0">
                      Doctor Order Req.
                    </span>
                  )}
                </div>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4 font-light">
                  {item.description}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 font-sans">
                <ul className="space-y-1.5">
                  {item.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-center text-xs font-medium text-[#0C364A]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#8EC63F] mr-2 flex-shrink-0" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
