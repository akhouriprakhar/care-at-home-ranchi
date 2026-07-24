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
    <section className="py-8 sm:py-12 bg-white border-t border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-8">
          {/* Rounded Subheader Pill Badge */}
          <div className="inline-flex items-center gap-2 bg-[#20AD96]/10 border border-[#20AD96]/30 px-3.5 py-1.5 rounded-full text-xs font-bold text-[#20AD96] mb-2">
            <HelpCircle className="w-4 h-4 text-[#20AD96]" />
            <span>Frequently Asked Questions</span>
          </div>

          <h2 className="text-2xl md:text-4xl font-serif font-bold text-[#0C364A]">
            Common Queries About Home Care
          </h2>
          <p className="text-slate-600 mt-2 text-sm sm:text-base font-light">
            Answers to frequent questions regarding nursing shifts, procedures, and scope of care in Ranchi.
          </p>
        </div>

        <div className="space-y-3">
          {FAQ_DATA.map((faq, idx) => (
            <div
              key={idx}
              className="border border-slate-200 rounded-2xl overflow-hidden transition-colors"
            >
              <button
                onClick={() => toggleFAQ(idx)}
                className="w-full p-4 sm:p-5 bg-[#F8FAFC] hover:bg-slate-100 flex items-center justify-between text-left transition-colors focus:outline-none"
              >
                <span className="font-serif font-bold text-[#0C364A] text-sm sm:text-base">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-[#20AD96] transition-transform duration-200 ${
                    openIdx === idx ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {openIdx === idx && (
                <div className="p-4 sm:p-5 bg-white border-t border-slate-200 text-slate-700 text-xs sm:text-sm leading-relaxed font-light">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
