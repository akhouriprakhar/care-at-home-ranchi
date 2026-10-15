import React from 'react';
import { Metadata } from 'next';
import { ShieldCheck, HeartPulse, Award, Building2 } from 'lucide-react';
import { BRAND_DATA, SERVICES_DATA } from '@/constants/site-data';
import { Hero } from '@/components/sections/Hero';
import { TrustStrip } from '@/components/sections/TrustStrip';
import { ServiceCard } from '@/components/ui/ServiceCard';
import { SpecificProcedures } from '@/components/sections/SpecificProcedures';
import { OnboardingProcess } from '@/components/sections/OnboardingProcess';
import { TestimonialSlider } from '@/components/sections/TestimonialSlider';
import { FaqSection } from '@/components/sections/FaqSection';

export const metadata: Metadata = {
  title: 'Clinical Home Nursing & Healthcare Services in Ranchi | Care at Home',
  description:
    'Specialized 24/7 clinical home nursing, post-surgical care, and in-home physiotherapy in Ranchi, Jharkhand.',
  alternates: {
    canonical: 'https://careathomeranchi.com',
  },
};

export default function Home() {
  return (
    <div className="space-y-8 sm:space-y-12">
      {/* Hero Section */}
      <Hero />

      {/* Trust Pillars Strip */}
      <TrustStrip />

      {/* Primary Clinical Services Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="services">
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          {/* Rounded Pill Header Badge */}
          <div className="inline-flex items-center gap-2 bg-[#20AD96]/15 border border-[#20AD96]/30 px-3.5 py-1.5 rounded-full text-xs font-semibold text-[#0C364A] mb-2.5">
            <HeartPulse className="w-4 h-4 text-[#20AD96]" />
            <span>Clinical Home Care Services</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-extrabold text-[#0C364A] tracking-tight">
            Comprehensive Clinical Home Nursing & Patient Care
          </h2>
          <p className="text-slate-600 mt-2 text-sm sm:text-base font-sans font-light leading-relaxed">
            Doctor-prescribed care plans executed by certified nurses and trained attendants across Ranchi.
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

      {/* 4-Step Onboarding Process */}
      <OnboardingProcess />

      {/* Verified Reviews Carousel */}
      <TestimonialSlider />

      {/* FAQ Section */}
      <FaqSection />

      {/* Final Institutional Assurance Card in careathomeranchi.com Colors */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
        <div className="bg-[#0C364A] text-white rounded-3xl p-8 sm:p-12 shadow-2xl border border-white/10 relative overflow-hidden text-center space-y-5">
          {/* Ambient Lighting & Grain */}
          <div className="absolute inset-0 bg-grain opacity-30 pointer-events-none" />
          <div className="absolute top-0 right-1/4 w-80 h-80 bg-[#8EC63F]/12 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-[#20AD96]/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 space-y-4">
            <div className="inline-flex items-center gap-2 bg-[#20AD96]/20 border border-[#20AD96]/30 px-3.5 py-1.5 rounded-full text-xs font-semibold text-[#8EC63F] mx-auto">
              <Building2 className="w-4 h-4 text-[#8EC63F]" />
              <span>Care at Home, Ranchi • Established 2016</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white max-w-2xl mx-auto tracking-tight">
              Dependable, Compassionate Care for Your Family in Ranchi
            </h2>

            <p className="text-slate-200 text-sm sm:text-base max-w-xl mx-auto font-light leading-relaxed">
              Providing 12h &amp; 24h Shift Home Nursing &amp; Patient Attendants across Ashok Nagar, Harmu, Kanke, Bariatu, and major Ranchi neighborhoods.
            </p>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-300 border-t border-white/10">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#8EC63F]" />
                <span>Aadhaar &amp; Background Verified Caregivers</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-[#20AD96]" />
                <span>Serving Ranchi Families Since {BRAND_DATA.est}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
