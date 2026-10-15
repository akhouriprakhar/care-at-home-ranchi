import React from 'react';
import { Metadata } from 'next';
import { ServiceDetailLayout, ServiceDetailData } from '@/components/services/ServiceDetailLayout';

export const metadata: Metadata = {
  title: 'Critical Care & ICU Support | Care at Home, Ranchi',
  description: 'Tracheostomy care, Ryles tube enteral feeding, IV infusion, brain stroke recovery, and 24/7 ICU patient monitoring in Ranchi.',
};

const criticalCareData: ServiceDetailData = {
  slug: 'critical-care',
  badge: '24/7 ICU & Critical Nursing',
  heroTitle: 'Critical Care & ICU Support at Home',
  heroDescription: 'Specialized home nursing for tracheostomy management, enteral Ryles tube feeding, IV drip infusions, brain stroke recovery, and continuous 24/7 ICU patient parameter monitoring in Ranchi.',
  iconName: 'activity',
  quickStats: [
    '24/7 Round-the-Clock Duty',
    'Experienced Nurses & Caregivers',
    'Tracheostomy & IV Care',
    'Direct Desk Office Call'
  ],
  overviewTitle: 'Comprehensive Clinical Scope & Overview',
  overviewParagraphs: [
    'Our Critical Care & ICU Support service brings hospital-grade intensive care into your home. Designed specifically for post-ICU discharge patients, brain stroke paralysis, tracheostomy dependence, or complex surgical recovery, our qualified nurses, caregivers, and bedside assistants execute physician orders with clinical precision.',
    'We maintain strict hospital hygiene protocols, sterile dressing procedures, and continuous vital parameter tracking to prevent secondary hospital-acquired infections and support rapid patient recovery.'
  ],
  col1Title: 'Prescribed Medical Procedures',
  col1IconName: 'activity',
  col1Items: [
    'Sterile Tracheostomy Inner Cannula Cleaning & Airway Suctioning',
    'Enteral Ryles Tube Nutritional Feed & Medication Flushing',
    'Intravenous (IV) Fluid Drip & Antibiotic Infusions',
    'Foley Urinary Catheter Insertion, Flushing & Bag Drainage',
    'Continuous SpO2 Pulse Oximetry & Blood Pressure Logging',
    'Aseptic Surgical Wound & Bed Sore Dressing'
  ],
  col2Title: 'Daily Patient Care Duties',
  col2IconName: 'userCheck',
  col2Items: [
    '2-Hour Scheduled Posture Rotation to Prevent Pressure Bedsores',
    'Daily Sponge Bath & Incontinence Diaper Hygiene Care',
    'Oral Cavity Care & Tracheostomy Tie Inspection',
    'Passive Range of Motion Joint Mobility Exercises',
    'Prescription Medication Schedule Compliance Tracking',
    'Emergency Escalation & Doctor Communication Log'
  ]
};

export default function CriticalCarePage() {
  return <ServiceDetailLayout data={criticalCareData} />;
}
