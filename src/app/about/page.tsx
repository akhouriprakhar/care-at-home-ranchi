import React from 'react';
import { Metadata } from 'next';
import { AboutView } from '@/components/about/AboutView';

export const metadata: Metadata = {
  title: 'About Us | Care at Home, Ranchi - Established 2016',
  description: 'Care at Home, Ranchi was established in 2016 in Ashok Nagar, Ranchi. Registered clinical home nursing agency. 4.7/5 rating on Google & Justdial with 146+ verified reviews.',
};

export default function AboutPage() {
  return <AboutView />;
}
