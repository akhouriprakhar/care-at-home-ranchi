import React from 'react';
import { Metadata } from 'next';
import { ServicesDirectoryView } from '@/components/services/ServicesDirectoryView';

export const metadata: Metadata = {
  title: 'Clinical Services | Care at Home, Ranchi',
  description: 'Explore our clinical home care services in Ranchi: Critical ICU care, Elderly hygiene, Mother & baby post-natal care, and In-home physiotherapy.',
};

export default function ServicesPage() {
  return <ServicesDirectoryView />;
}
