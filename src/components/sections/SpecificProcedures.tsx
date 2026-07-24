import React from 'react';
import { Syringe, Stethoscope, Wind, Bandage, Activity, HeartPulse, ShieldAlert } from 'lucide-react';
import { SPECIFIC_PROCEDURES } from '@/constants/site-data';

export const SpecificProcedures: React.FC = () => {
  const getIcon = (id: string) => {
    switch (id) {
      case 'iv-therapy':
        return <Syringe className="w-6 h-6 text-[#20AD96]" />;
      case 'catheterization':
        return <Stethoscope className="w-6 h-6 text-[#20AD96]" />;
      case 'tracheostomy-care':
        return <Wind className="w-6 h-6 text-[#20AD96]" />;
      case 'surgical-dressing':
        return <Bandage className="w-6 h-6 text-[#20AD96]" />;
      case 'colostomy-care':
        return <Activity className="w-6 h-6 text-[#20AD96]" />;
      case 'enterostomal-therapy':
        return <HeartPulse className="w-6 h-6 text-[#20AD96]" />;
      default:
        return <Stethoscope className="w-6 h-6 text-[#20AD96]" />;
    }
  };

  return (
    <section className="bg-[#F8FAFC] py-8 sm:py-12 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8">
          {/* Rounded Subheader Pill Badge */}
          <div className="inline-flex items-center gap-2 bg-[#20AD96]/10 border border-[#20AD96]/30 px-3.5 py-1.5 rounded-full text-xs font-bold text-[#20AD96] mb-2">
            <Stethoscope className="w-4 h-4 text-[#20AD96]" />
            <span>Healthcare Service Portfolio</span>
          </div>

          <h2 className="text-2xl md:text-4xl font-serif font-bold text-[#0C364A]">
            Specific Medical Procedures We Execute
          </h2>
          <p className="text-slate-600 mt-2 text-sm sm:text-base font-light">
            Our qualified nursing staff executes doctor-prescribed medical procedures with aseptic precision at your home.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SPECIFIC_PROCEDURES.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:border-[#20AD96] hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#F8FAFC] border border-slate-200 flex items-center justify-center">
                    {getIcon(item.id)}
                  </div>
                  {item.requiresDoctorOrder && (
                    <span className="text-[10px] uppercase font-bold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200 flex items-center gap-1">
                      <ShieldAlert className="w-3 h-3 text-emerald-600" />
                      Doctor Order
                    </span>
                  )}
                </div>

                <h3 className="text-lg font-bold text-[#0C364A] mb-1 font-serif">
                  {item.title}
                </h3>
                <p className="text-xs font-bold text-[#20AD96] uppercase tracking-wider mb-2">
                  {item.category}
                </p>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4 font-light">
                  {item.description}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100">
                <ul className="space-y-1.5">
                  {item.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-center text-xs font-semibold text-[#0C364A]">
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
