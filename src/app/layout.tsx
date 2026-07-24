import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, Merriweather } from 'next/font/google';
import '@/styles/globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { EmergencyCallFAB } from '@/components/layout/EmergencyCallFAB';
import { BRAND_DATA } from '@/constants/site-data';

const sansFont = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const serifFont = Merriweather({
  weight: ['300', '400', '700', '900'],
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: "Care at Home Ranchi | Clinical Home Nursing",
    template: "%s | Care at Home Ranchi",
  },
  description:
    "Specialized 24/7 clinical home nursing, post-surgical care, and in-home physiotherapy in Ranchi, Jharkhand.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/images/brand/logo-full.png",
  },
  openGraph: {
    title: "Care at Home Ranchi | Clinical Home Nursing",
    description:
      "Specialized 24/7 clinical home nursing, post-surgical care, and in-home physiotherapy in Ranchi, Jharkhand.",
    url: "https://careathomeranchi.com",
    siteName: "Care at Home Ranchi",
    images: [
      {
        url: "/images/brand/logo-full.png",
        width: 1200,
        height: 630,
        alt: "Care at Home Ranchi Logo",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

const jsonLdSchema = {
  '@context': 'https://schema.org',
  '@type': 'MedicalBusiness',
  name: BRAND_DATA.name,
  image: 'https://careathomeranchi.com/logo.png',
  '@id': 'https://careathomeranchi.com',
  url: 'https://careathomeranchi.com',
  telephone: BRAND_DATA.contact.phone,
  email: BRAND_DATA.contact.email,
  priceRange: 'Custom Clinical Assessment',
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
    latitude: 23.3441,
    longitude: 85.3096,
  },
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
    <html lang="en" className={`${sansFont.variable} ${serifFont.variable} overflow-x-hidden max-w-full`}>
      <head>
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
        <EmergencyCallFAB />
        <Footer />
      </body>
    </html>
  );
}
