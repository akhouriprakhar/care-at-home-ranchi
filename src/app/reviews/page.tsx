import React from 'react';
import { Metadata } from 'next';
import { Star, ShieldCheck, Quote, Phone } from 'lucide-react';
import { REVIEWS_DATA, BRAND_DATA } from '@/constants/site-data';

export const metadata: Metadata = {
  title: 'Patient Reviews | Care at Home, Ranchi - 4.7/5 Rating',
  description: 'Read 146+ verified patient reviews and family testimonials for Care at Home, Ranchi. 4.7/5 stars rating on Google and Justdial.',
};

export default function ReviewsPage() {
  return (
    <div className="overflow-x-hidden bg-[#F8FAFC]">
      {/* Header Banner in careathomeranchi.com Colors */}
      <section className="bg-[#072331] text-white pt-24 sm:pt-28 pb-10 sm:pb-14 bg-hero-ambient border-b border-white/10 shadow-lg relative overflow-hidden">
        {/* Subtle Grain Overlay */}
        <div className="absolute inset-0 bg-grain opacity-30 pointer-events-none" />

        <div className="absolute top-0 right-1/4 w-80 h-80 bg-[#8EC63F]/12 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-[#20AD96]/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-3">
          <div className="inline-flex items-center gap-2 bg-[#20AD96]/20 border border-[#20AD96]/40 px-3.5 py-1 rounded-full text-xs font-semibold text-[#8EC63F] shadow-xs backdrop-blur-md font-sans">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            <span>{BRAND_DATA.rating.score} / 5 Stars Rating on {BRAND_DATA.rating.platform} ({BRAND_DATA.rating.count}+ Verified Reviews)</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Patient Family Reviews &amp;{' '}
            <span className="text-[#8EC63F]">
              Verified Feedback
            </span>
          </h1>

          <p className="text-slate-200 text-sm sm:text-base max-w-3xl font-sans font-light leading-relaxed">
            Real feedback from local Ranchi families who have trusted Care at Home for post-surgical care, critical ICU monitoring, and senior assistance.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8 sm:py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {/* Rating Summary Card */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#0C364A] to-[#072331] text-[#8EC63F] font-heading font-extrabold text-3xl flex items-center justify-center shadow-md border border-white/10">
                {BRAND_DATA.rating.score}
              </div>
              <div>
                <div className="flex items-center space-x-1 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <h3 className="text-lg font-heading font-bold text-[#0C364A]">{BRAND_DATA.rating.count}+ Verified Local Reviews</h3>
                <p className="text-xs text-slate-500 font-sans font-light">Top-rated Home Healthcare Provider on {BRAND_DATA.rating.platform} in Ranchi</p>
              </div>
            </div>

            <a
              href={`tel:${BRAND_DATA.contact.phone}`}
              className="bg-[#8EC63F] hover:bg-[#9ee543] text-[#072331] font-heading font-extrabold px-6 py-3.5 rounded-xl shadow transition-all inline-flex items-center gap-2 text-xs uppercase tracking-wider"
            >
              <Phone className="w-4 h-4 fill-[#072331]" />
              <span>Call Helpline ({BRAND_DATA.contact.phone})</span>
            </a>
          </div>

          {/* Reviews Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {REVIEWS_DATA.map((rev, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-xs hover:shadow-md hover:border-[#20AD96]/40 transition-all flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center space-x-1 flex-shrink-0">
                      {[...Array(Math.floor(rev.rating))].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-[#20AD96]/10 rounded-xl border border-[#20AD96]/20 text-left flex-shrink-1 font-sans">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#20AD96] flex-shrink-0" />
                      <div className="flex flex-col text-left leading-tight">
                        <span className="text-[11px] font-semibold text-[#0C364A] whitespace-nowrap">Verified Client Review</span>
                        <span className="text-[10px] text-slate-500 font-normal pt-0.5 flex items-center gap-1">
                          <span className="w-1 h-1 rounded-full bg-[#8EC63F] inline-block flex-shrink-0" />
                          <span>{rev.date}</span>
                        </span>
                      </div>
                    </div>
                  </div>

                  <blockquote className="text-slate-700 text-sm leading-relaxed font-normal relative pl-6">
                    <Quote className="w-5 h-5 text-[#20AD96] absolute top-0 left-0 opacity-40" />
                    &ldquo;{rev.text}&rdquo;
                  </blockquote>
                </div>

                <div className="pt-4 border-t border-slate-100 flex justify-between items-center text-xs font-sans">
                  <div>
                    <h4 className="font-heading font-bold text-[#0C364A] text-sm">{rev.name}</h4>
                    <span className="text-slate-500 font-light">Verified Patient Family</span>
                  </div>
                  <span className="text-[11px] text-[#20AD96] font-semibold">Ranchi, JH</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
