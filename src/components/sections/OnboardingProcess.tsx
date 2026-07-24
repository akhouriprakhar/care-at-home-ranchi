import React from 'react';
import { ClipboardCheck, UserCheck, ShieldCheck, HeartPulse, CheckCircle2, HeartHandshake } from 'lucide-react';
import { SCOPE_DISCLAIMER } from '@/constants/site-data';

export const OnboardingProcess: React.FC = () => {
  const steps = [
    {
      number: "01",
      title: "Clinical Care Assessment",
      description: "Share patient medical diagnosis, doctor recommendations, and required care parameters with our care coordination desk.",
      icon: <ClipboardCheck className="w-6 h-6 text-[#20AD96]" />
    },
    {
      number: "02",
      title: "Caregiver Matching",
      description: "We match certified nurses (GNM/B.Sc) or experienced healthcare attendants specifically trained for the patient's condition.",
      icon: <UserCheck className="w-6 h-6 text-[#20AD96]" />
    },
    {
      number: "03",
      title: "Structured Deployment",
      description: "The assigned caregiver arrives for duty following prescribed treatment protocols under a 12-hour or 24-hour shift schedule.",
      icon: <ShieldCheck className="w-6 h-6 text-[#20AD96]" />
    },
    {
      number: "04",
      title: "Ongoing Supervisory Oversight",
      description: "Continuous supervisory check-ins ensure high clinical standards, patient safety, hygiene compliance, and family satisfaction.",
      icon: <HeartPulse className="w-6 h-6 text-[#20AD96]" />
    }
  ];

  return (
    <section className="py-8 sm:py-12 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8">
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8">
          {/* Rounded Subheader Pill Badge */}
          <div className="inline-flex items-center gap-2 bg-[#20AD96]/10 border border-[#20AD96]/30 px-3.5 py-1.5 rounded-full text-xs font-bold text-[#20AD96] mb-2">
            <CheckCircle2 className="w-4 h-4 text-[#20AD96]" />
            <span>Simple 4-Step Process</span>
          </div>

          <h2 className="text-2xl md:text-4xl font-serif font-bold text-[#0C364A]">
            How Home Nursing Deployment Works
          </h2>
          <p className="text-slate-600 mt-2 text-sm sm:text-base font-light">
            Fast, structured, and physician-guided deployment for your family member in Ranchi.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm relative flex flex-col justify-between hover:shadow-md transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#F8FAFC] border border-slate-200 flex items-center justify-center">
                    {step.icon}
                  </div>
                  <span className="text-3xl font-serif font-bold text-[#20AD96]/30">
                    {step.number}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-[#0C364A] font-serif mb-2">
                  {step.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed font-light">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Integrated Commitment to Patient Recovery & Dignity Banner (Not a separate section) */}
        <div className="bg-[#0C364A] text-white rounded-2xl p-5 sm:p-7 shadow-lg border border-white/15 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="p-2.5 bg-[#8EC63F]/20 text-[#8EC63F] rounded-xl border border-[#8EC63F]/30 flex-shrink-0">
              <HeartHandshake className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="font-serif font-bold text-white text-base sm:text-lg">
                  {SCOPE_DISCLAIMER.title}
                </span>
                <span className="bg-[#20AD96]/20 border border-[#20AD96]/40 text-[#8EC63F] text-[10px] font-extrabold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                  {SCOPE_DISCLAIMER.medicalOnlyTag}
                </span>
              </div>
              <p className="text-slate-200 text-xs sm:text-sm font-light leading-relaxed max-w-4xl">
                {SCOPE_DISCLAIMER.content}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
