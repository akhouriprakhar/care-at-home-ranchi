'use client';

import React, { useState, useEffect } from 'react';

export const Testimonials: React.FC = () => {
  const reviews = [
    {
      name: 'Rajesh Verma',
      relation: 'Son of Post-Surgical Patient',
      location: 'Ashok Nagar, Ranchi',
      comment: 'Care at Home Ranchi provided 24-hour shift nursing after my father’s orthopedic surgery. Nurse Sangeeta was polite, punctual, and maintained aseptic wound dressing every morning. Exceptional clinical dedication.',
      rating: 5,
    },
    {
      name: 'Ananya Sahay',
      relation: 'Daughter of Senior Citizen',
      location: 'Bariatu Road, Ranchi',
      comment: 'Finding trustworthy geriatric care for my mother was stressful until we contacted Vineeta Ji. The caregiver was background verified, handled daily bed baths and mobility assistance with utmost respect.',
      rating: 5,
    },
    {
      name: 'Dr. Alok K. Sinha',
      relation: 'Consultant Physician',
      location: 'Kanke Road, Ranchi',
      comment: 'I frequently recommend Care at Home Ranchi to my post-discharge ICU patients. Their nurses document vital parameters diligently and adhere strictly to doctor orders.',
      rating: 5,
    },
    {
      name: 'Suresh Kumar Pandey',
      relation: 'Family of Stroke Patient',
      location: 'Morabadi, Ranchi',
      comment: 'The 12-hour night shift nurse managed catheter care, regular turning for bedsore prevention, and SpO2 monitoring with complete professional efficiency. Very reliable service.',
      rating: 5,
    },
    {
      name: 'Priya Mukherjee',
      relation: 'Daughter-in-law of Geriatric Patient',
      location: 'Lalpur, Ranchi',
      comment: 'Prompt response and compassionate attendant. Vineeta Prakash Ji personally coordinated the nurse allocation according to our family schedule. Highly recommended in Ranchi.',
      rating: 5,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [reviews.length]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const activeReview = reviews[currentIndex];

  return (
    <section className="bg-[#F8FAFC] py-20 border-y border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#0C364A] text-center mb-3">
          Trusted by Families Across Ranchi
        </h2>
        <p className="text-slate-600 text-center max-w-2xl mx-auto mb-12 text-sm md:text-base">
          Read real feedback from patient families and medical consultants who rely on our home care services.
        </p>

        {/* Rotating Carousel Container */}
        <div className="bg-white rounded-2xl p-8 sm:p-12 border border-slate-200 shadow-md relative min-h-[260px] flex flex-col justify-between transition-all duration-500">
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-1">
                {[...Array(activeReview.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-xs font-semibold px-3 py-1 bg-slate-100 rounded-full text-slate-600">
                Verified Review {currentIndex + 1} of {reviews.length}
              </span>
            </div>

            <blockquote className="text-slate-700 text-base sm:text-lg leading-relaxed font-light italic mb-8">
              &ldquo;{activeReview.comment}&rdquo;
            </blockquote>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between pt-6 border-t border-slate-100 gap-4">
            <div>
              <h4 className="text-base font-bold text-[#0C364A]">{activeReview.name}</h4>
              <p className="text-xs text-slate-500">{activeReview.relation} • <span className="text-[#20AD96] font-medium">📍 {activeReview.location}</span></p>
            </div>

            {/* Controls */}
            <div className="flex items-center space-x-3">
              <button
                onClick={handlePrev}
                className="w-10 h-10 rounded-full border border-slate-300 hover:border-[#20AD96] hover:bg-[#F4F8F9] flex items-center justify-center text-slate-700 transition-colors"
                aria-label="Previous testimonial"
              >
                ←
              </button>
              <div className="flex space-x-1.5">
                {reviews.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`w-2.5 h-2.5 rounded-full transition-all ${
                      currentIndex === idx ? 'bg-[#8EC63F] w-6' : 'bg-slate-300'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={handleNext}
                className="w-10 h-10 rounded-full border border-slate-300 hover:border-[#20AD96] hover:bg-[#F4F8F9] flex items-center justify-center text-slate-700 transition-colors"
                aria-label="Next testimonial"
              >
                →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
