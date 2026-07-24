import React from 'react';
import { Metadata } from 'next';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  ShieldCheck, 
  Building2, 
  CheckCircle2, 
  CalendarX,
  Stethoscope
} from 'lucide-react';
import { BRAND_DATA } from '@/constants/site-data';
import { ContactMap } from '@/components/ui/ContactMap';

export const metadata: Metadata = {
  title: 'Contact Us | Care at Home, Ranchi - Phone & Office Location',
  description: 'Get in touch with Care at Home, Ranchi. Call +91-9430156190. Address: Care At Home, In Front Of Tribes India, Opposite Of Ashok Nagar Gate No. 5, Ranchi. Office open Mon-Sat (Closed Sundays).',
};

export default function ContactPage() {
  const exactAddress = "Care At Home, In Front Of Tribes India, Opposite Of Ashok Nagar Gate No. 5, Ranchi";

  return (
    <div className="overflow-x-hidden bg-[#F8FAFC]">
      {/* Top Hero Banner */}
      <section className="bg-[#0C364A] text-white py-10 sm:py-14 bg-hero-ambient border-b border-slate-700/60 shadow-lg relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-80 h-80 bg-[#20AD96]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-[#8EC63F]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-3">
          <div className="inline-flex items-center gap-2 bg-[#20AD96]/20 border border-[#20AD96]/40 px-3.5 py-1 rounded-full text-xs font-bold text-[#8EC63F] shadow-xs backdrop-blur-md">
            <Clock className="w-3.5 h-3.5 text-[#8EC63F]" />
            <span>Office Hours: Monday – Saturday (Closed Sundays)</span>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold font-serif text-white tracking-tight">
            Contact Us & Office Location
          </h1>

          <p className="text-slate-200 text-sm sm:text-base max-w-2xl font-light leading-relaxed">
            Have questions about home nursing or attendant care? Reach out directly via phone or visit our office in Ranchi.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-8 sm:py-12 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          {/* Simple, Friendly Contact Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Card 1: Call Us Directly */}
            <div className="glass-panel-dark text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-white/15 space-y-5 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-1.5 bg-[#8EC63F]/20 border border-[#8EC63F]/40 px-3 py-1 rounded-full text-xs font-bold text-[#8EC63F]">
                  <Phone className="w-3.5 h-3.5 fill-[#8EC63F]" />
                  <span>Call Us Directly</span>
                </div>

                <h2 className="text-xl sm:text-2xl font-bold font-serif text-white">
                  Phone Helpline
                </h2>

                <p className="text-slate-200 text-xs sm:text-sm font-light leading-relaxed">
                  Call our care coordinator directly to discuss your patient&apos;s requirements and arrange nursing shifts:
                </p>

                {/* Clear Office Hours Box */}
                <div className="bg-white/10 p-4 rounded-2xl border border-white/15 text-xs text-slate-200 space-y-2 backdrop-blur-md">
                  <div className="font-bold text-[#8EC63F] flex items-center gap-1.5 border-b border-white/10 pb-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    <span>Office & Care Timings:</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-300">• Office Open:</span>
                    <span className="font-semibold text-white">Mon – Sat</span>
                  </div>
                  <div className="flex items-center justify-between text-amber-300">
                    <span className="flex items-center gap-1">
                      <CalendarX className="w-3 h-3 text-amber-400" />
                      • Office Desk:
                    </span>
                    <span className="font-bold">Closed Sundays</span>
                  </div>
                  <div className="flex items-center justify-between text-[#8EC63F] pt-1 border-t border-white/10 font-medium">
                    <span>• Attendant Duty:</span>
                    <span>12h & 24h Shifts</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/15 space-y-3">
                <a
                  href={`tel:${BRAND_DATA.contact.phone}`}
                  className="w-full bg-[#8EC63F] text-[#072331] font-extrabold py-3.5 px-6 rounded-xl hover:bg-[#9ee543] transition-all flex items-center justify-center gap-2 text-sm uppercase tracking-wider shadow-lg"
                >
                  <Phone className="w-4 h-4 fill-[#072331]" />
                  <span>Call {BRAND_DATA.contact.phone}</span>
                </a>

                <div className="flex items-center justify-between text-xs text-slate-300">
                  <span className="flex items-center gap-1.5 truncate">
                    <Mail className="w-3.5 h-3.5 text-[#20AD96] flex-shrink-0" />
                    <span className="truncate">{BRAND_DATA.contact.email}</span>
                  </span>
                  <span className="flex items-center gap-1 text-[#8EC63F] font-semibold flex-shrink-0">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Verified</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Card 2: Visit Our Office (With exact address spelling & proper capitalization) */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-lg space-y-5 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 bg-[#20AD96]/10 border border-[#20AD96]/30 px-3 py-1 rounded-full text-xs font-bold text-[#20AD96]">
                  <Building2 className="w-3.5 h-3.5 text-[#20AD96]" />
                  <span>Visit Our Office</span>
                </div>

                <h2 className="text-xl sm:text-2xl font-bold text-[#0C364A] font-serif">
                  Care at Home, Ranchi
                </h2>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-light">
                  Our office is conveniently located near Gate No. 5 in Ashok Nagar for in-person consultation and care planning.
                </p>

                <div className="bg-[#F8FAFC] p-4 rounded-2xl border border-slate-200 text-xs text-[#0C364A] space-y-2">
                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-[#20AD96] mt-0.5 flex-shrink-0" />
                    <span className="font-semibold leading-relaxed">{exactAddress}</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200/80 space-y-3">
                <a
                  href={BRAND_DATA.contact.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#0C364A] text-white font-bold py-3 px-6 rounded-xl hover:bg-[#072331] transition-all flex items-center justify-center gap-2 text-xs uppercase tracking-wider shadow"
                >
                  <MapPin className="w-3.5 h-3.5 text-[#8EC63F]" />
                  <span>Open Directions in Google Maps</span>
                </a>

                <div className="flex items-center justify-between text-xs text-slate-500 font-medium">
                  <span className="flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#20AD96]" />
                    <span>Ashok Nagar Gate No. 5</span>
                  </span>
                  <span className="text-slate-400 font-normal">Est. 2016</span>
                </div>
              </div>
            </div>

            {/* Card 3: Care Services Coverage */}
            <div className="bg-[#F8FAFC] rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-lg space-y-5 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 bg-[#8EC63F]/20 border border-[#8EC63F]/40 px-3 py-1 rounded-full text-xs font-bold text-[#0C364A]">
                  <Stethoscope className="w-3.5 h-3.5 text-[#20AD96]" />
                  <span>Home Nursing Services</span>
                </div>

                <h2 className="text-xl sm:text-2xl font-bold text-[#0C364A] font-serif">
                  Serving Ranchi City
                </h2>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-light">
                  We assign qualified nurses (GNM/B.Sc) and trained attendants for home patient care across Ranchi.
                </p>

                <div className="space-y-2 pt-1">
                  <div className="flex items-center gap-2 text-xs text-[#0C364A] font-medium bg-white p-2.5 rounded-xl border border-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-[#20AD96] flex-shrink-0" />
                    <span>Background Verified Staff</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#0C364A] font-medium bg-white p-2.5 rounded-xl border border-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-[#20AD96] flex-shrink-0" />
                    <span>Doctor-Prescribed Care Protocols</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#0C364A] font-medium bg-white p-2.5 rounded-xl border border-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-[#20AD96] flex-shrink-0" />
                    <span>12-Hour & 24-Hour Attendant Shifts</span>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
                <span className="font-semibold text-[#0C364A]">Registered Agency</span>
                <span className="text-slate-500">Ranchi, Jharkhand</span>
              </div>
            </div>

          </div>

          {/* Interactive Google Map Location */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-extrabold text-[#20AD96] uppercase tracking-wider">
                <MapPin className="w-4 h-4" />
                <span>Office Location Map</span>
              </div>
              <span className="text-xs text-slate-500 font-light">
                {exactAddress}
              </span>
            </div>
            <ContactMap />
          </div>

        </div>
      </section>
    </div>
  );
}
