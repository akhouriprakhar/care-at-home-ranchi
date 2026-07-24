import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Phone, Mail, Star } from 'lucide-react';
import { BRAND_DATA } from '@/constants/site-data';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0C364A] text-white pt-16 pb-12 border-t-4 border-[#8EC63F] mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Column 1: Brand & Logo */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-3">
              <Image
                src="/logo.png"
                alt="Care at Home, Ranchi Logo"
                width={160}
                height={44}
                className="h-10 w-auto object-contain"
              />
              <span className="text-lg font-bold font-serif text-white">Care at Home</span>
            </Link>
            <p className="text-slate-300 text-sm leading-relaxed font-light">
              Providing clinical home nursing, 12-hour and 24-hour shift care, ICU support, physiotherapy, and patient attendants across Ranchi since {BRAND_DATA.est}.
            </p>
            <div className="flex items-center space-x-2 text-xs text-amber-400 font-semibold pt-1">
              <Star className="w-4 h-4 fill-amber-400" />
              <span>{BRAND_DATA.rating.score} / 5 Rating on {BRAND_DATA.rating.platform} ({BRAND_DATA.rating.count}+ Reviews)</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-[#8EC63F] font-bold text-sm uppercase tracking-wider mb-4 font-serif">Navigation</h4>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li>
                <Link href="/" className="hover:text-[#8EC63F] transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#8EC63F] transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#8EC63F] transition-colors">Services Directory</Link>
              </li>
              <li>
                <Link href="/reviews" className="hover:text-[#8EC63F] transition-colors">Google Reviews</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#8EC63F] transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Clinical Services */}
          <div>
            <h4 className="text-[#8EC63F] font-bold text-sm uppercase tracking-wider mb-4 font-serif">Services</h4>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li>
                <Link href="/services/critical-care" className="hover:text-[#8EC63F] transition-colors">Critical Care & ICU Support</Link>
              </li>
              <li>
                <Link href="/services/elderly-hygiene" className="hover:text-[#8EC63F] transition-colors">Elderly Care & Hygiene</Link>
              </li>
              <li>
                <Link href="/services/mother-baby-care" className="hover:text-[#8EC63F] transition-colors">Mother & Newborn Care</Link>
              </li>
              <li>
                <Link href="/services/physiotherapy" className="hover:text-[#8EC63F] transition-colors">In-Home Physiotherapy</Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Full Contact NAP */}
          <div>
            <h4 className="text-[#8EC63F] font-bold text-sm uppercase tracking-wider mb-4 font-serif">Office Location</h4>
            <address className="not-italic text-sm text-slate-300 space-y-2.5">
              <p className="font-bold text-white">{BRAND_DATA.name}</p>
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#8EC63F] mt-1 flex-shrink-0" />
                <span className="text-xs leading-relaxed">{BRAND_DATA.contact.address}</span>
              </p>
              <p className="flex items-center gap-2 pt-1">
                <Phone className="w-4 h-4 text-[#8EC63F] flex-shrink-0" />
                <a href={`tel:${BRAND_DATA.contact.phone}`} className="text-[#8EC63F] hover:underline font-bold">
                  {BRAND_DATA.contact.phone}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#8EC63F] flex-shrink-0" />
                <a href={`mailto:${BRAND_DATA.contact.email}`} className="hover:underline text-xs">
                  {BRAND_DATA.contact.email}
                </a>
              </p>
            </address>
          </div>
        </div>

        {/* Golden Boundary Disclaimer Box */}
        <div className="bg-[#072331] rounded-xl p-6 border border-slate-700/80 mb-10 text-xs text-slate-300 leading-relaxed">
          <span className="font-bold text-[#8EC63F] uppercase block mb-1">Clinical Scope Disclaimer</span>
          We strictly provide clinical nursing, patient hygiene, physiotherapy, and medical attendant services. We DO NOT provide domestic maids, housekeeping, cooking, or general labor.
        </div>

        {/* Copyright Bar */}
        <div className="pt-6 border-t border-slate-800 text-center text-xs text-slate-400 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p>© {BRAND_DATA.est} - {new Date().getFullYear()} {BRAND_DATA.name}. All rights reserved.</p>
          <p className="text-slate-400">Ashok Nagar, Harmu Housing Colony, Ranchi, Jharkhand 834002</p>
        </div>
      </div>
    </footer>
  );
};
