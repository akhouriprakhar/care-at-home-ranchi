import React from 'react';
import { Lock, HeartHandshake, ShieldCheck } from 'lucide-react';
import { SCOPE_DISCLAIMER } from '@/constants/site-data';

export const ScopeDisclaimer: React.FC = () => {
  return (
    <section className="py-6 sm:py-8 bg-[#F8FAFC]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0C364A] text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-white/15 relative overflow-hidden flex flex-col sm:flex-row items-start gap-5">
          <div className="p-3 bg-[#8EC63F]/20 text-[#8EC63F] rounded-2xl border border-[#8EC63F]/30 flex-shrink-0 mt-1">
            <HeartHandshake className="w-6 h-6" />
          </div>

          <div className="space-y-2.5">
            <div className="inline-flex items-center gap-1.5 bg-[#20AD96]/20 border border-[#20AD96]/40 px-3 py-1 rounded-full text-xs font-bold text-[#8EC63F] shadow-xs backdrop-blur-md">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>{SCOPE_DISCLAIMER.medicalOnlyTag}</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-serif font-bold text-white tracking-tight">
              {SCOPE_DISCLAIMER.title}
            </h3>

            <p className="text-slate-200 text-xs sm:text-sm leading-relaxed font-light">
              {SCOPE_DISCLAIMER.content}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
