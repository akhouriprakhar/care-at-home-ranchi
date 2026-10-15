'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MapPin } from 'lucide-react';
import { BRAND_DATA } from '@/constants/site-data';

export const StickyMobileCTA: React.FC = () => {
  return (
    <aside 
      aria-label="Quick Mobile Actions" 
      className="fixed bottom-5 right-4 z-50 flex flex-col items-center gap-3 md:hidden"
    >

      {/* Directions Action FAB */}
      <motion.a
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        href={BRAND_DATA.contact.googleMapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Directions to Ashok Nagar Office"
        className="group relative flex items-center justify-center w-11 h-11 rounded-full bg-[#0C364A]/95 backdrop-blur-xl border border-white/20 text-[#8EC63F] shadow-[0_4px_20px_rgba(7,35,49,0.6)] transition-all duration-200"
      >
        <MapPin className="w-5 h-5 text-[#8EC63F] group-hover:scale-110 transition-transform" />
      </motion.a>

      {/* Call Helpline Action FAB */}
      <motion.a
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        href={`tel:${BRAND_DATA.contact.phone}`}
        aria-label={`Call Helpline ${BRAND_DATA.contact.phone}`}
        className="group relative flex items-center justify-center w-12 h-12 rounded-full bg-[#8EC63F] text-[#072331] shadow-[0_6px_25px_rgba(142,198,63,0.55)] border border-white/40 transition-all duration-200"
      >
        <motion.span
          animate={{ rotate: [0, -10, 10, -10, 0] }}
          transition={{ repeat: Infinity, repeatDelay: 3, duration: 0.6 }}
          className="flex items-center justify-center leading-none"
        >
          <Phone className="w-6 h-6 fill-[#072331] text-[#072331]" />
        </motion.span>
      </motion.a>
    </aside>
  );
};
