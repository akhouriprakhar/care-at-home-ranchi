'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, ChevronDown, Activity, Heart, Baby, Stethoscope, Sparkles } from 'lucide-react';
import { BRAND_DATA } from '@/constants/site-data';
import { MobileMenu } from './MobileMenu';

export const Navbar: React.FC = () => {
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full bg-[#0C364A]/95 backdrop-blur-md border-b border-slate-700/60 shadow-xl transition-all">
      {/* Ambient Gradient Glow Line */}
      <div className="h-1 w-full bg-gradient-to-r from-[#20AD96] via-[#8EC63F] to-[#20AD96]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between">
        {/* Brand Logo & Title */}
        <Link href="/" className="flex items-center space-x-3 group">
          <motion.div 
            whileHover={{ scale: 1.04 }}
            transition={{ type: 'spring', stiffness: 400, damping: 25 }}
            className="flex items-center gap-3"
          >
            <Image
              src="/logo.png"
              alt="Care at Home, Ranchi Logo"
              width={150}
              height={40}
              className="h-9 w-auto object-contain"
              priority
            />
            <div className="flex flex-col border-l border-white/20 pl-3">
              <span className="text-base font-bold font-serif text-white leading-tight tracking-wide group-hover:text-[#8EC63F] transition-colors">
                Care at Home
              </span>
              <span className="text-[11px] text-slate-300 font-medium tracking-wider uppercase flex items-center gap-1">
                <span>Ranchi, Jharkhand</span>
              </span>
            </div>
          </motion.div>
        </Link>

        {/* Desktop Navigation Links with Active Indicators & Dropdown Animations */}
        <nav className="hidden lg:flex items-center space-x-8 text-xs uppercase tracking-widest font-extrabold">
          {/* Home Link */}
          <Link
            href="/"
            className={`py-2 transition-colors relative ${
              isActive('/') ? 'text-[#8EC63F]' : 'text-white hover:text-[#8EC63F]'
            }`}
          >
            <span>Home</span>
            {isActive('/') && (
              <motion.span
                layoutId="activeNavIndicator"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#8EC63F] rounded-full shadow-[0_0_10px_#8EC63F]"
                transition={{ type: 'spring', stiffness: 380, damping: 30 }}
              />
            )}
          </Link>

          {/* Services Menu Dropdown */}
          <div
            className="relative py-2"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              className={`flex items-center gap-1.5 transition-colors focus:outline-none uppercase tracking-widest ${
                pathname.startsWith('/services') ? 'text-[#8EC63F]' : 'text-white hover:text-[#8EC63F]'
              }`}
              onClick={() => setServicesOpen(!servicesOpen)}
            >
              <span>Services</span>
              <ChevronDown className={`w-3.5 h-3.5 text-[#20AD96] transition-transform duration-300 ${servicesOpen ? 'rotate-180 text-[#8EC63F]' : ''}`} />
            </button>

            {pathname.startsWith('/services') && (
              <motion.span
                layoutId="activeNavIndicator"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#8EC63F] rounded-full shadow-[0_0_10px_#8EC63F]"
                transition={{ type: 'spring', stiffness: 380, damping: 30 }}
              />
            )}

            {/* Dropdown Menu Content with Motion */}
            <AnimatePresence>
              {servicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 12, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 12, scale: 0.96 }}
                  transition={{ duration: 0.2, ease: 'easeOut' }}
                  className="absolute top-full left-0 w-80 sm:w-88 max-w-[90vw] bg-[#072331]/95 backdrop-blur-xl text-white rounded-2xl p-3 grid grid-cols-1 gap-1.5 z-50 border border-white/20 shadow-2xl overflow-hidden"
                >
                  <div className="px-3 py-2 text-[10px] uppercase font-extrabold text-[#8EC63F] tracking-wider border-b border-white/10 flex items-center justify-between">
                    <span className="flex items-center gap-1.5">
                      <Sparkles className="w-3 h-3 text-[#8EC63F]" />
                      <span>Clinical Care Directory</span>
                    </span>
                    <span className="bg-[#20AD96]/20 border border-[#20AD96]/40 px-2 py-0.5 rounded-md text-[#20AD96]">
                      12h / 24h
                    </span>
                  </div>

                  {/* 4 Service Links */}
                  <Link
                    href="/services/critical-care"
                    className="p-2.5 rounded-xl hover:bg-white/10 flex items-start gap-3 transition-all group/item"
                  >
                    <div className="p-2 bg-[#20AD96]/20 rounded-xl text-[#20AD96] group-hover/item:text-[#8EC63F] group-hover/item:bg-[#8EC63F]/20 transition-colors mt-0.5">
                      <Activity className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-bold text-sm text-white group-hover/item:text-[#8EC63F] normal-case tracking-normal transition-colors">
                        Critical Care & ICU Support
                      </div>
                      <div className="text-xs text-slate-300 font-light normal-case tracking-normal">
                        Tracheostomy, Ryles tube & IV drips
                      </div>
                    </div>
                  </Link>

                  <Link
                    href="/services/elderly-hygiene"
                    className="p-2.5 rounded-xl hover:bg-white/10 flex items-start gap-3 transition-all group/item"
                  >
                    <div className="p-2 bg-[#20AD96]/20 rounded-xl text-[#20AD96] group-hover/item:text-[#8EC63F] group-hover/item:bg-[#8EC63F]/20 transition-colors mt-0.5">
                      <Heart className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-bold text-sm text-white group-hover/item:text-[#8EC63F] normal-case tracking-normal transition-colors">
                        Elderly Care & Patient Hygiene
                      </div>
                      <div className="text-xs text-slate-300 font-light normal-case tracking-normal">
                        Bed baths, diaper care & bedsore turning
                      </div>
                    </div>
                  </Link>

                  <Link
                    href="/services/mother-baby-care"
                    className="p-2.5 rounded-xl hover:bg-white/10 flex items-start gap-3 transition-all group/item"
                  >
                    <div className="p-2 bg-[#20AD96]/20 rounded-xl text-[#20AD96] group-hover/item:text-[#8EC63F] group-hover/item:bg-[#8EC63F]/20 transition-colors mt-0.5">
                      <Baby className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-bold text-sm text-white group-hover/item:text-[#8EC63F] normal-case tracking-normal transition-colors">
                        Mother & Newborn Post-Natal Care
                      </div>
                      <div className="text-xs text-slate-300 font-light normal-case tracking-normal">
                        C-section wound care & baby bath
                      </div>
                    </div>
                  </Link>

                  <Link
                    href="/services/physiotherapy"
                    className="p-2.5 rounded-xl hover:bg-white/10 flex items-start gap-3 transition-all group/item"
                  >
                    <div className="p-2 bg-[#20AD96]/20 rounded-xl text-[#20AD96] group-hover/item:text-[#8EC63F] group-hover/item:bg-[#8EC63F]/20 transition-colors mt-0.5">
                      <Stethoscope className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-bold text-sm text-white group-hover/item:text-[#8EC63F] normal-case tracking-normal transition-colors">
                        In-Home Physiotherapy & Rehabilitation
                      </div>
                      <div className="text-xs text-slate-300 font-light normal-case tracking-normal">
                        Post-op walking & stroke recovery
                      </div>
                    </div>
                  </Link>

                  <div className="pt-1.5 border-t border-white/10">
                    <Link 
                      href="/services" 
                      className="block text-center py-2 text-xs text-[#8EC63F] font-bold hover:underline tracking-normal normal-case"
                    >
                      View Full Clinical Services Directory →
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* About Us */}
          <Link
            href="/about"
            className={`py-2 transition-colors relative ${
              isActive('/about') ? 'text-[#8EC63F]' : 'text-white hover:text-[#8EC63F]'
            }`}
          >
            <span>About Us</span>
            {isActive('/about') && (
              <motion.span
                layoutId="activeNavIndicator"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#8EC63F] rounded-full shadow-[0_0_10px_#8EC63F]"
                transition={{ type: 'spring', stiffness: 380, damping: 30 }}
              />
            )}
          </Link>

          {/* Reviews */}
          <Link
            href="/reviews"
            className={`py-2 transition-colors relative ${
              isActive('/reviews') ? 'text-[#8EC63F]' : 'text-white hover:text-[#8EC63F]'
            }`}
          >
            <span>Reviews</span>
            {isActive('/reviews') && (
              <motion.span
                layoutId="activeNavIndicator"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#8EC63F] rounded-full shadow-[0_0_10px_#8EC63F]"
                transition={{ type: 'spring', stiffness: 380, damping: 30 }}
              />
            )}
          </Link>

          {/* Contact */}
          <Link
            href="/contact"
            className={`py-2 transition-colors relative ${
              isActive('/contact') ? 'text-[#8EC63F]' : 'text-white hover:text-[#8EC63F]'
            }`}
          >
            <span>Contact</span>
            {isActive('/contact') && (
              <motion.span
                layoutId="activeNavIndicator"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#8EC63F] rounded-full shadow-[0_0_10px_#8EC63F]"
                transition={{ type: 'spring', stiffness: 380, damping: 30 }}
              />
            )}
          </Link>
        </nav>

        {/* Sole "Call Us" Action Button with Animated Ringing Micro-Interaction */}
        <div className="hidden lg:flex items-center space-x-3">
          <motion.a
            href={`tel:${BRAND_DATA.contact.phone}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="bg-[#8EC63F] text-[#072331] font-extrabold px-5 py-2.5 rounded-xl shadow-lg hover:bg-[#9de442] hover:shadow-[#8EC63F]/30 transition-all text-xs flex items-center gap-2 uppercase tracking-wider group"
          >
            <motion.span
              animate={{ rotate: [0, -12, 12, -12, 0] }}
              transition={{ repeat: Infinity, repeatDelay: 3.5, duration: 0.6 }}
            >
              <Phone className="w-3.5 h-3.5 fill-[#072331]" />
            </motion.span>
            <span>Call Us</span>
          </motion.a>
        </div>

        {/* Mobile Menu Drawer */}
        <MobileMenu />
      </div>
    </header>
  );
};
