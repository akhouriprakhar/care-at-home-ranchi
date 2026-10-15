'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Star } from 'lucide-react';
import { BRAND_DATA } from '@/constants/site-data';

export const MobileMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-white hover:text-[#8EC63F] rounded-lg focus:outline-none"
        aria-label="Toggle Navigation Menu"
      >
        {isOpen ? <X className="w-6 h-6 text-[#8EC63F]" /> : <Menu className="w-6 h-6" />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[65px] max-h-[calc(100vh-125px)] overflow-y-auto bg-[#072331]/98 backdrop-blur-2xl text-white border-b border-white/15 p-6 space-y-6 shadow-2xl z-[60]"
          >
            <div className="flex items-center justify-between text-xs text-amber-400 font-semibold border-b border-white/10 pb-3">
              <div className="flex items-center space-x-1.5">
                <Star className="w-4 h-4 fill-amber-400" />
                <span>{BRAND_DATA.rating.score} / 5 Rating ({BRAND_DATA.rating.count}+ Reviews)</span>
              </div>
              <span className="text-[10px] text-slate-300 bg-white/10 px-2 py-0.5 rounded font-sans">Ashok Nagar HQ</span>
            </div>

            <nav className="flex flex-col space-y-3.5 text-base font-heading font-semibold">
              <Link
                href="/"
                onClick={() => setIsOpen(false)}
                className="hover:text-[#8EC63F] transition-colors py-1"
              >
                Home
              </Link>
              <Link
                href="/services"
                onClick={() => setIsOpen(false)}
                className="hover:text-[#8EC63F] transition-colors py-1"
              >
                Services Directory
              </Link>
              <div className="pl-3 border-l border-white/15 space-y-2 text-xs font-normal font-sans text-slate-300">
                <Link href="/services/critical-care" onClick={() => setIsOpen(false)} className="block hover:text-[#8EC63F]">
                  • Critical Care & ICU Support
                </Link>
                <Link href="/services/elderly-hygiene" onClick={() => setIsOpen(false)} className="block hover:text-[#8EC63F]">
                  • Elderly Care & Patient Hygiene
                </Link>
                <Link href="/services/mother-baby-care" onClick={() => setIsOpen(false)} className="block hover:text-[#8EC63F]">
                  • Mother & Newborn Post-Natal Care
                </Link>
                <Link href="/services/physiotherapy" onClick={() => setIsOpen(false)} className="block hover:text-[#8EC63F]">
                  • In-Home Physiotherapy & Rehab
                </Link>
              </div>
              <Link
                href="/about"
                onClick={() => setIsOpen(false)}
                className="hover:text-[#8EC63F] transition-colors py-1"
              >
                About Us
              </Link>
              <Link
                href="/reviews"
                onClick={() => setIsOpen(false)}
                className="hover:text-[#8EC63F] transition-colors py-1"
              >
                Client Reviews
              </Link>
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="hover:text-[#8EC63F] transition-colors py-1"
              >
                Contact & Directions
              </Link>
            </nav>

            <div className="pt-3 border-t border-white/10 space-y-2.5 font-sans">
              <a
                href={`tel:${BRAND_DATA.contact.phone}`}
                onClick={() => setIsOpen(false)}
                className="w-full bg-[#8EC63F] hover:bg-[#9ee543] text-[#072331] font-extrabold py-3 rounded-xl flex items-center justify-center gap-2 text-xs uppercase tracking-wider shadow-lg shadow-[#8EC63F]/30 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#072331]" />
                <span>Call Helpline: {BRAND_DATA.contact.phone}</span>
              </a>

              <a
                href={BRAND_DATA.contact.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="w-full bg-[#20AD96]/20 hover:bg-[#20AD96]/30 text-[#8EC63F] border border-[#20AD96]/40 font-bold py-3 rounded-xl flex items-center justify-center gap-2 text-xs uppercase tracking-wider shadow transition-colors"
              >
                <span>Ashok Nagar Office Directions</span>
              </a>

              <p className="text-[10px] text-center text-slate-300 font-light">
                Ashok Nagar Gate No. 5 • Direct Telephone Coordination
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
