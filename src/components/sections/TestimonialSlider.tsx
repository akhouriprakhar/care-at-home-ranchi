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
    <section className="bg-[#F8FAFC] py-12 sm:py-16 border-y border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          {/* Rounded Subheader Pill Badge */}
          <div className="inline-flex items-center gap-2 bg-[#20AD96]/10 border border-[#20AD96]/30 px-3.5 py-1 rounded-full text-xs font-bold text-[#20AD96] mb-2">
            <ShieldCheck className="w-4 h-4 text-[#20AD96]" />
            <span>Verified Client Feedback</span>
          </div>

          <h2 className="text-2xl md:text-4xl font-serif font-bold text-[#0C364A]">
            Patient & Family Experiences
          </h2>
          <p className="text-slate-600 mt-2 text-sm sm:text-base font-light">
            Real feedback from local Ranchi families who have trusted Care at Home.
          </p>
        </div>

        {/* Fixed Height Touch-Swipe Motion Review Card */}
        <div className="w-full max-w-4xl mx-auto relative min-h-[300px] sm:min-h-[260px] touch-pan-y">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.35 }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={handleDragEnd}
              className="w-full bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-lg hover:shadow-xl relative min-h-[300px] sm:min-h-[260px] flex flex-col justify-between cursor-grab active:cursor-grabbing select-none"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-1">
                    {[...Array(currentReview.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] font-semibold px-3 py-1 bg-slate-50 text-slate-600 rounded-full border border-slate-200">
                    {currentReview.source} • {currentReview.date}
                  </span>
                </div>

                <div className="relative pl-7">
                  <Quote className="w-6 h-6 text-[#20AD96] absolute top-0 left-0 opacity-50" />
                  <p className="text-slate-700 text-sm sm:text-base leading-relaxed italic font-light line-clamp-4">
                    &ldquo;{currentReview.text}&rdquo;
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-slate-100 mt-4">
                <div>
                  <h4 className="text-sm font-bold text-[#0C364A] font-serif">{currentReview.name}</h4>
                  <p className="text-[11px] text-slate-500">Ranchi, Jharkhand</p>
                </div>

                {/* Navigation Buttons */}
                <div className="flex items-center space-x-2">
                  <button
                    onClick={handlePrev}
                    className="w-9 h-9 rounded-full border border-slate-200 hover:border-[#20AD96] hover:bg-slate-50 flex items-center justify-center text-[#0C364A] transition-colors"
                    aria-label="Previous review"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>

                  <button
                    onClick={handleNext}
                    className="w-9 h-9 rounded-full border border-slate-200 hover:border-[#20AD96] hover:bg-slate-50 flex items-center justify-center text-[#0C364A] transition-colors"
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
