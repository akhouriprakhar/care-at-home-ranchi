import type { Metadata } from 'next';
import '@/styles/globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { PreFooterCTA } from '@/components/layout/PreFooterCTA';
import { StickyMobileCTA } from '@/components/layout/StickyMobileCTA';
import { BRAND_DATA } from '@/constants/site-data';

export const metadata: Metadata = {
  metadataBase: new URL('https://careathomeranchi.com'),
  title: {
    default: 'Care at Home Ranchi | Clinical Home Nursing',
    template: '%s | Care at Home Ranchi',
  },
  description:
    'Specialized 24/7 clinical home nursing, post-surgical care, and in-home physiotherapy in Ranchi, Jharkhand.',
  icons: {
    icon: '/images/brand/logo-full.png',
    shortcut: '/images/brand/logo-full.png',
    apple: '/images/brand/logo-full.png',
  },
  openGraph: {
    title: 'Care at Home Ranchi | Clinical Home Nursing',
    description:
      'Specialized 24/7 clinical home nursing, post-surgical care, and in-home physiotherapy in Ranchi, Jharkhand.',
    url: 'https://careathomeranchi.com',
    siteName: 'Care at Home Ranchi',
    images: [
      {
        url: 'https://careathomeranchi.com/images/brand/logo-full.png',
        width: 1200,
        height: 630,
        alt: 'Care at Home Ranchi Logo',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
};

const jsonLdSchema = {
  '@context': 'https://schema.org',
  '@type': 'MedicalBusiness',
  name: BRAND_DATA.name,
  image: 'https://careathomeranchi.com/images/brand/logo-full.png',
  '@id': 'https://careathomeranchi.com',
  url: 'https://careathomeranchi.com',
  telephone: BRAND_DATA.contact.phone,
  email: BRAND_DATA.contact.email,
  priceRange: '₹₹',
  address: {
    '@type': 'PostalAddress',
    streetAddress: BRAND_DATA.contact.address,
    addressLocality: BRAND_DATA.contact.city,
    addressRegion: BRAND_DATA.contact.state,
    postalCode: BRAND_DATA.contact.pincode,
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 23.35047,
    longitude: 85.28357,
  },
  areaServed: [
    'Ashok Nagar',
    'Harmu',
    'Kanke',
    'Bariatu',
    'Morabadi',
    'Doranda',
    'Lalpur',
    'Ranchi',
  ],
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday',
    ],
    opens: '00:00',
    closes: '23:59',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: BRAND_DATA.rating.score,
    reviewCount: BRAND_DATA.rating.count,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className="overflow-x-hidden max-w-full">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
        />
      </head>
      <body className="bg-[#F8FAFC] text-[#0C364A] flex flex-col min-h-screen font-sans antialiased relative overflow-x-hidden max-w-full">
        <Navbar />
        <main className="flex-grow w-full max-w-full overflow-x-hidden pb-16 sm:pb-0">
          {children}
        </main>
        <PreFooterCTA />
        <Footer />
        <StickyMobileCTA />
      </body>
    </html>
  );
}