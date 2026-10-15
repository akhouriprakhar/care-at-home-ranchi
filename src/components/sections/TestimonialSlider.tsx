'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, PanInfo } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight, ShieldCheck } from 'lucide-react';
import { REVIEWS_DATA } from '@/constants/site-data';

export const TestimonialSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % REVIEWS_DATA.length);
    }, 6500);
    return () => clearInterval(timer);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % REVIEWS_DATA.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + REVIEWS_DATA.length) % REVIEWS_DATA.length);
  };

  const handleDragEnd = (_event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    if (info.offset.x < -40) {
      handleNext();
    } else if (info.offset.x > 40) {
      handlePrev();
    }
  };

  const currentReview = REVIEWS_DATA[currentIndex];

  return (
    <section className="bg-slate-50/70 py-12 sm:py-16 border-y border-slate-200/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          {/* Rounded Subheader Pill Badge */}
          <div className="inline-flex items-center gap-2 bg-[#20AD96]/15 border border-[#20AD96]/30 px-3.5 py-1.5 rounded-full text-xs font-semibold text-[#0C364A] mb-2.5">
            <ShieldCheck className="w-4 h-4 text-[#20AD96]" />
            <span>Verified Client Feedback</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-extrabold text-[#0C364A] tracking-tight">
            Patient & Family Experiences
          </h2>
          <p className="text-slate-600 mt-2 text-sm sm:text-base font-sans font-light leading-relaxed">
            Real feedback from local Ranchi families who have trusted Care at Home.
          </p>
        </div>

        {/* Fixed Height Touch-Swipe Motion Review Card */}
        <div className="w-full max-w-4xl mx-auto relative min-h-[300px] sm:min-h-[260px] touch-pan-y space-y-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 25 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -25 }}
              transition={{ duration: 0.35, ease: 'easeInOut' }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={handleDragEnd}
              className="w-full bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-md hover:shadow-xl relative min-h-[300px] sm:min-h-[260px] flex flex-col justify-between cursor-grab active:cursor-grabbing select-none"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="flex items-center space-x-1 flex-shrink-0">
                    {[...Array(currentReview.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#20AD96]/10 rounded-xl border border-[#20AD96]/20 text-left flex-shrink-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#20AD96] flex-shrink-0" />
                    <div className="flex flex-col text-left leading-tight font-sans">
                      <span className="text-[11px] font-semibold text-[#0C364A] whitespace-nowrap">Verified Client Review</span>
                      <span className="text-[10px] text-slate-500 font-normal pt-0.5 flex items-center gap-1">
                        <span className="w-1 h-1 rounded-full bg-slate-400 inline-block flex-shrink-0" />
                        <span>{currentReview.date}</span>
                      </span>
                    </div>
                  </div>
                </div>

                <div className="relative pl-7">
                  <Quote className="w-6 h-6 text-[#20AD96] absolute top-0 left-0 opacity-40" />
                  <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-normal line-clamp-4">
                    &ldquo;{currentReview.text}&rdquo;
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-slate-100 mt-4">
                <div>
                  <h4 className="text-sm font-bold text-[#0C364A]">{currentReview.name}</h4>
                  <p className="text-[11px] text-slate-500">Ranchi, Jharkhand</p>
                </div>

                {/* Navigation Buttons */}
                <div className="flex items-center space-x-2">
                  <button
                    onClick={handlePrev}
                    className="w-9 h-9 rounded-full border border-slate-200 hover:border-[#20AD96] hover:bg-slate-50 flex items-center justify-center text-[#0C364A] transition-colors focus:outline-none focus:ring-2 focus:ring-[#20AD96]"
                    aria-label="Previous review"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>

                  <button
                    onClick={handleNext}
                    className="w-9 h-9 rounded-full border border-slate-200 hover:border-[#20AD96] hover:bg-slate-50 flex items-center justify-center text-[#0C364A] transition-colors focus:outline-none focus:ring-2 focus:ring-[#20AD96]"
                    aria-label="Next review"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
