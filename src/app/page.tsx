import React from 'react';
import { ShieldCheck, HeartPulse, Award, Building2 } from 'lucide-react';
import { BRAND_DATA } from '@/constants/site-data';
import { Hero } from '@/components/sections/Hero';
import { TrustStrip } from '@/components/sections/TrustStrip';
import { ServiceCard } from '@/components/ui/ServiceCard';
import { SERVICES_DATA } from '@/constants/site-data';
import { SpecificProcedures } from '@/components/sections/SpecificProcedures';
import { OnboardingProcess } from '@/components/sections/OnboardingProcess';
import { TestimonialSlider } from '@/components/sections/TestimonialSlider';
import { FaqSection } from '@/components/sections/FaqSection';

export default function Home() {
  return (
    <div className="space-y-6 sm:space-y-8">
      {/* Hero Section */}
      <Hero />

      {/* Trust Pillars Strip */}
      <TrustStrip />

      {/* Primary Clinical Services Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8">
          {/* Rounded Pill Header Badge */}
          <div className="inline-flex items-center gap-2 bg-[#20AD96]/10 border border-[#20AD96]/30 px-3.5 py-1.5 rounded-full text-xs font-bold text-[#20AD96] mb-2">
            <HeartPulse className="w-4 h-4 text-[#20AD96]" />
            <span>Clinical Home Care Services</span>
          </div>

          <h2 className="text-2xl md:text-4xl font-serif font-bold text-[#0C364A]">
            Comprehensive Clinical Home Nursing & Patient Care
          </h2>
          <p className="text-slate-600 mt-2 text-sm sm:text-base font-light">
            Doctor-prescribed care plans executed by certified nurses and trained attendants in Ranchi.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES_DATA.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </section>

      {/* Specific Procedures Grid */}
      <SpecificProcedures />

      {/* 4-Step Onboarding Process (Includes Integrated Commitment to Patient Recovery Banner) */}
      <OnboardingProcess />

      {/* Verified Reviews Carousel */}
      <TestimonialSlider />

      {/* FAQ Section */}
      <FaqSection />

      {/* Final Institutional Assurance Card */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-6">
        <div className="bg-[#0C364A] text-white rounded-3xl p-6 sm:p-10 shadow-2xl border border-white/10 relative overflow-hidden text-center space-y-4">
          <div className="inline-flex items-center gap-2 bg-[#8EC63F]/20 border border-[#8EC63F]/40 px-3.5 py-1.5 rounded-full text-xs font-bold text-[#8EC63F] mx-auto">
            <Building2 className="w-4 h-4 text-[#8EC63F]" />
            <span>Care at Home, Ranchi • Established 2016</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-serif font-bold text-white max-w-2xl mx-auto">
            Hospital-Grade Care for Your Family Member at Home
          </h2>

          <p className="text-slate-200 text-sm sm:text-base max-w-xl mx-auto font-light leading-relaxed">
            Serving 100% of Ranchi City with 12h & 24h Shift Nursing Care. Registered clinical agency.
          </p>

          <div className="pt-3 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-300 border-t border-white/10">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#8EC63F]" />
              <span>Aadhaar & Address Checked Attendants</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-[#20AD96]" />
              <span>Registered Clinical Agency</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
