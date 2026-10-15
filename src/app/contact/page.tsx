import React from 'react';
import type { Metadata } from 'next';
import { 
  Phone, 
  MapPin, 
  Mail, 
  Clock, 
  ShieldCheck, 
  Building2, 
  CheckCircle2, 
  ExternalLink
} from 'lucide-react';
import { BRAND_DATA } from '@/constants/site-data';

export const metadata: Metadata = {
  title: 'Contact Care at Home Ranchi | 24/7 Helpline & Office Location',
  description:
    'Contact Care at Home Ranchi. Call +91-9430156190 for home nursing, ICU care, patient hygiene, and physiotherapy across Ranchi. Office at Ashok Nagar Gate No. 5.',
};

export default function ContactPage() {

  return (
    <main className="min-h-screen pt-16">
      {/* Hero Header in careathomeranchi.com Colors */}
      <section className="bg-[#072331] text-white py-12 sm:py-16 px-4 sm:px-6 lg:px-8 border-b border-white/10 relative overflow-hidden bg-hero-ambient">
        <div className="absolute inset-0 bg-grain pointer-events-none opacity-30 z-0" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#8EC63F]/12 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-96 h-96 bg-[#20AD96]/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-3">
          <div className="inline-flex items-center gap-2 bg-[#20AD96]/20 border border-[#20AD96]/40 px-3.5 py-1 rounded-full text-xs font-semibold text-[#8EC63F] shadow-xs backdrop-blur-md">
            <Clock className="w-3.5 h-3.5 text-[#8EC63F]" />
            <span>Administrative Office: Mon – Sat • 24/7 Caregiver Response</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Contact &amp; Office Location in{' '}
            <span className="text-[#8EC63F]">
              Ranchi
            </span>
          </h1>

          <p className="text-slate-200 text-sm sm:text-base max-w-2xl font-sans font-light leading-relaxed">
            Reach our clinical care coordination desk for home nursing, ICU setup, elderly patient hygiene, and in-home physiotherapy across all localities of Ranchi.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-10 sm:py-14 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Direct Helpline & Office Coordinates */}
            <div className="lg:col-span-6 space-y-6">
              
              {/* Card 1: 24/7 Helpline Card */}
              <div className="bg-[#0C364A] text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-white/10 space-y-5">
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-1.5 bg-[#8EC63F]/20 border border-[#8EC63F]/40 px-3 py-1 rounded-full text-xs font-bold text-[#8EC63F]">
                    <Phone className="w-3.5 h-3.5 fill-[#8EC63F] text-[#8EC63F]" />
                    <span>24/7 Direct Helpline</span>
                  </div>

                  <h2 className="text-2xl font-heading font-bold text-white">
                    Clinical Care Desk
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-200 font-sans font-light">
                    Immediate clinical dispatch and shift planning. Available 24 hours for emergency home nursing.
                  </p>
                </div>

                <div className="bg-[#072331] p-5 rounded-2xl border border-white/10 space-y-3">
                  <span className="text-[10px] uppercase tracking-wider font-extrabold text-[#8EC63F] block font-sans">
                    Tap to Call Direct Helpline
                  </span>
                  <a
                    href={`tel:${BRAND_DATA.contact.phone}`}
                    className="inline-flex items-center gap-3 text-2xl sm:text-3xl font-heading font-extrabold text-white hover:text-[#8EC63F] transition-colors"
                  >
                    <Phone className="w-6 h-6 text-[#8EC63F] flex-shrink-0 animate-bounce" />
                    <span>{BRAND_DATA.contact.phone}</span>
                  </a>
                  <p className="text-xs text-slate-300 font-sans">
                    Direct coordinator line • No IVR delay
                  </p>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <a
                    href={`tel:${BRAND_DATA.contact.phone}`}
                    className="flex-1 bg-[#8EC63F] hover:bg-[#9ee543] text-[#072331] font-extrabold text-xs uppercase tracking-wider py-3.5 px-5 rounded-xl shadow-lg transition-all text-center flex items-center justify-center gap-2"
                  >
                    <Phone className="w-4 h-4 text-[#072331]" />
                    <span>Call Helpline: {BRAND_DATA.contact.phone}</span>
                  </a>

                  <a
                    href={BRAND_DATA.contact.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-[#20AD96]/20 hover:bg-[#20AD96]/30 text-[#8EC63F] border border-[#20AD96]/40 font-bold text-xs uppercase tracking-wider py-3.5 px-5 rounded-xl shadow transition-all text-center flex items-center justify-center gap-2"
                  >
                    <MapPin className="w-4 h-4 text-[#8EC63F]" />
                    <span>Office Location</span>
                  </a>
                </div>
              </div>

              {/* Card 2: Office & Visiting Hours */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-200 space-y-4">
                <div className="inline-flex items-center gap-1.5 bg-[#20AD96]/10 border border-[#20AD96]/20 px-3 py-1 rounded-full text-xs font-bold text-[#20AD96]">
                  <Building2 className="w-3.5 h-3.5 text-[#20AD96]" />
                  <span>Physical Care Center</span>
                </div>

                <h3 className="text-xl font-heading font-bold text-[#0C364A]">
                  Ashok Nagar Office
                </h3>

                <div className="space-y-3 text-xs sm:text-sm text-slate-700 font-sans">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#20AD96] flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-[#0C364A] block">Full Address</span>
                      <span>{BRAND_DATA.contact.address}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-[#20AD96] flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-[#0C364A] block">Visiting Hours</span>
                      <span>{BRAND_DATA.hours}</span>
                      <span className="text-slate-500 block text-xs">(Staff deployments operate 24/7)</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-[#20AD96] flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-[#0C364A] block">Official Email</span>
                      <a href={`mailto:${BRAND_DATA.contact.email}`} className="text-[#20AD96] hover:underline font-semibold">
                        {BRAND_DATA.contact.email}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href={BRAND_DATA.contact.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-bold text-[#0C364A] hover:text-[#20AD96] transition-colors uppercase tracking-wider"
                  >
                    <span>Get Directions on Google Maps</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Card 3: Scope Policy */}
              <div className="bg-[#072331] text-white rounded-2xl p-5 border border-white/10 flex items-start gap-3 text-xs">
                <ShieldCheck className="w-5 h-5 text-[#8EC63F] flex-shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <span className="font-bold text-[#8EC63F] uppercase block font-heading tracking-wider">
                    Clinical Standards Notice
                  </span>
                  <p className="text-slate-300 font-light leading-relaxed">
                    Care at Home Ranchi provides clinical healthcare only (nursing, patient hygiene, physiotherapy, medical attendant shifts). We do NOT supply domestic maids, cooks, or domestic cleaning staff.
                  </p>
                </div>
              </div>

            </div>

            {/* Right Column: Google Maps Location View */}
            <div className="lg:col-span-6 space-y-6">
              <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-200 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-heading font-bold text-[#0C364A]">
                    Office Map & Directions
                  </h3>
                  <span className="text-xs bg-[#20AD96]/10 text-[#20AD96] font-semibold px-2.5 py-1 rounded-full">
                    Opp. Gate 5
                  </span>
                </div>

                <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden border border-slate-200 relative shadow-inner">
                  <iframe
                    src={BRAND_DATA.contact.googleMapsEmbedUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Care at Home Office Location, Ashok Nagar, Ranchi"
                    className="w-full h-full"
                  />
                </div>

                <div className="flex items-center justify-between pt-2">
                  <p className="text-xs text-slate-500 font-sans">
                    Opposite Gate No. 5, Ashok Nagar, Ranchi, Jharkhand 834002
                  </p>
                  <a
                    href={BRAND_DATA.contact.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 bg-[#0C364A] hover:bg-[#072331] text-white text-xs font-bold py-2 px-3.5 rounded-xl transition-all shadow-sm flex-shrink-0"
                  >
                    <span>Open Maps</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Ranchi Service Localities */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-200 space-y-3">
                <h4 className="text-base font-heading font-bold text-[#0C364A]">
                  Coverage Across Ranchi Municipal Area
                </h4>
                <p className="text-xs text-slate-600 font-sans leading-relaxed">
                  Caregivers are dispatched daily across all residential sectors:
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs font-sans">
                  {[
                    'Ashok Nagar',
                    'Harmu Colony',
                    'Doranda',
                    'Morabadi',
                    'Kanke Road',
                    'Bariatu',
                    'Lalpur',
                    'Ratu Road',
                    'Hinoo',
                    'Namkum',
                    'Dhurwa / HEC',
                    'Tatisilwai',
                  ].map((area) => (
                    <div key={area} className="flex items-center gap-1.5 text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#20AD96] flex-shrink-0" />
                      <span>{area}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>
    </main>
  );
}
