import React from 'react';
import { ClipboardCheck, UserCheck, ShieldCheck, HeartPulse, CheckCircle2 } from 'lucide-react';

export const OnboardingProcess: React.FC = () => {
  const steps = [
    {
      number: "01",
      title: "Clinical Care Assessment",
      description: "Share patient medical diagnosis, doctor recommendations, and required care parameters with our care coordination desk.",
      icon: <ClipboardCheck className="w-6 h-6 text-[#20AD96]" />,
    },
    {
      number: "02",
      title: "Caregiver Matching",
      description: "We match qualified nurses or experienced bedside healthcare attendants specifically suited for the patient's condition and required shift schedule.",
      icon: <UserCheck className="w-6 h-6 text-[#20AD96]" />,
    },
    {
      number: "03",
      title: "Structured Deployment",
      description: "The assigned caregiver arrives for duty following prescribed treatment protocols under a 12-hour or 24-hour shift schedule.",
      icon: <ShieldCheck className="w-6 h-6 text-[#20AD96]" />,
    },
    {
      number: "04",
      title: "Ongoing Supervisory Oversight",
      description: "Continuous supervisory check-ins ensure high clinical standards, patient safety, hygiene compliance, and family satisfaction.",
      icon: <HeartPulse className="w-6 h-6 text-[#20AD96]" />,
    }
  ];

  return (
    <section className="py-10 sm:py-14 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          {/* Rounded Subheader Pill Badge */}
          <div className="inline-flex items-center gap-2 bg-[#20AD96]/15 border border-[#20AD96]/30 px-3.5 py-1.5 rounded-full text-xs font-semibold text-[#0C364A] mb-2.5">
            <CheckCircle2 className="w-4 h-4 text-[#20AD96]" />
            <span>Simple 4-Step Process</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-extrabold text-[#0C364A] tracking-tight">
            How Home Nursing Deployment Works
          </h2>
          <p className="text-slate-600 mt-2 text-sm sm:text-base font-sans font-light leading-relaxed">
            Fast, structured, and physician-guided deployment for your family member in Ranchi.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm relative flex flex-col justify-between hover:border-[#20AD96]/50 hover:shadow-md transition-all group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#F8FAFC] border border-slate-200 flex items-center justify-center shadow-xs">
                    {step.icon}
                  </div>
                  <span className="text-3xl font-extrabold text-[#20AD96]/30">
                    {step.number}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-[#0C364A] mb-2">
                  {step.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed font-light font-sans">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
