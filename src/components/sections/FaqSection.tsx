'use client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQ_DATA } from '@/constants/site-data';

export const FaqSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIdx(openIdx === index ? null : index);
  };

  return (
    <section className="py-10 sm:py-14 bg-white border-t border-slate-200/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          {/* Rounded Subheader Pill Badge */}
          <div className="inline-flex items-center gap-2 bg-[#20AD96]/15 border border-[#20AD96]/30 px-3.5 py-1.5 rounded-full text-xs font-semibold text-[#0C364A] mb-2.5">
            <HelpCircle className="w-4 h-4 text-[#20AD96]" />
            <span>Frequently Asked Questions</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-extrabold text-[#0C364A] tracking-tight">
            Common Queries About Home Care
          </h2>
          <p className="text-slate-600 mt-2 text-sm sm:text-base font-sans font-light leading-relaxed">
            Answers to frequent questions regarding nursing shifts, procedures, and scope of care in Ranchi.
          </p>
        </div>

        <div className="space-y-3 font-sans">
          {FAQ_DATA.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className={`border rounded-2xl overflow-hidden transition-all duration-200 ${
                  isOpen ? 'border-[#20AD96]/40 shadow-xs' : 'border-slate-200/90'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(idx)}
                  className={`w-full p-4 sm:p-5 flex items-center justify-between text-left transition-colors focus:outline-none focus:ring-2 focus:ring-[#20AD96]/40 ${
                    isOpen ? 'bg-[#20AD96]/10 text-[#0C364A]' : 'bg-slate-50/70 hover:bg-slate-100 text-[#0C364A]'
                  }`}
                >
                  <span className="font-heading font-bold text-sm sm:text-base">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 transition-transform duration-200 flex-shrink-0 ml-3 ${
                      isOpen ? 'rotate-180 text-[#20AD96]' : 'text-slate-400'
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="p-4 sm:p-5 bg-white border-t border-slate-100 text-slate-700 text-xs sm:text-sm leading-relaxed font-light">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
