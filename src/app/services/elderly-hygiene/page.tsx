import React from 'react';
import { Metadata } from 'next';
import { ServiceDetailLayout, ServiceDetailData } from '@/components/services/ServiceDetailLayout';

export const metadata: Metadata = {
  title: 'Elderly Care & Patient Hygiene | Care at Home, Ranchi',
  description: 'Senior citizen assistance, daily sponging/bed baths, diaper changing, and 2-hour bedsore prevention turning in Ranchi.',
};

const elderlyHygieneData: ServiceDetailData = {
  slug: 'elderly-hygiene',
  badge: 'Geriatric Support & Hygiene Care',
  heroTitle: 'Elderly Care & Patient Hygiene Services',
  heroDescription: 'Compassionate senior citizen care, daily sponge baths, diaper hygiene, assisted mobility, and 2-hour posture rotation to prevent bedsores across Ranchi.',
  iconName: 'heart',
  quickStats: [
    'Senior Citizen Assistance',
    'Bedsore Prevention Turning',
    'Diaper & Bath Care',
    '12h & 24h Attendant Shifts'
  ],
  overviewTitle: 'Compassionate Geriatric & Hygiene Care',
  overviewParagraphs: [
    'Our Elderly Care & Patient Hygiene service is designed to preserve patient dignity, prevent skin breakdown, and assist elderly family members with daily living activities. Our trained health attendants provide attentive care focused 100% on patient comfort and health.',
    'We maintain strict personal hygiene standards, regular posture turning schedules, oral hygiene routines, and assisted wheelchair transfers to keep your loved ones safe and well-cared for at home.'
  ],
  col1Title: 'Hygiene & Personal Care',
  col1IconName: 'heart',
  col1Items: [
    'Daily Sponge Bath & Bed Sponging Routine',
    'Diaper Care & Incontinence Hygiene Management',
    '2-Hour Scheduled Posture Rotation for Bedsore Prevention',
    'Oral Cavity Hygiene & Hair Brushing Routine',
    'Skin Moisture Application & Pressure Point Massage',
    'Clean Bed Sheet Changing & Linen Sanitation'
  ],
  col2Title: 'Assisted Living & Feeding Duties',
  col2IconName: 'userCheck',
  col2Items: [
    'Assisted Wheelchair & Bed-to-Chair Transfers',
    'Nutritional Meal & Water Hydration Feeding Assistance',
    'Timely Oral Medication Administration',
    'Walking Support & Fall Prevention Monitoring',
    'Compassionate Companionship & Emotional Support',
    'Daily Vital Parameter Tracking (BP, Sugar, Pulse)'
  ]
};

export default function ElderlyHygienePage() {
  return <ServiceDetailLayout data={elderlyHygieneData} />;
}
