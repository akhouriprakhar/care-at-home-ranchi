import React from 'react';
import { Metadata } from 'next';
import { ServiceDetailLayout, ServiceDetailData } from '@/components/services/ServiceDetailLayout';

export const metadata: Metadata = {
  title: 'In-Home Physiotherapy & Mobility | Care at Home, Ranchi',
  description: 'In-home physical rehabilitation, post-surgical mobility exercises, stroke paralysis rehab, and joint mobilization in Ranchi.',
};

const physiotherapyData: ServiceDetailData = {
  slug: 'physiotherapy',
  badge: 'Physical Rehabilitation & Mobility Care',
  heroTitle: 'In-Home Physiotherapy Services',
  heroDescription: 'Certified home physiotherapists providing customized muscle rehabilitation, joint mobilization, post-operative walking exercise, and brain stroke recovery in Ranchi.',
  iconName: 'stethoscope',
  quickStats: [
    'Certified Physiotherapists',
    'Post-Operative Joint Rehab',
    'Brain Stroke Recovery',
    'In-Home Daily Sessions'
  ],
  overviewTitle: 'Professional In-Home Rehabilitation',
  overviewParagraphs: [
    'Our In-Home Physiotherapy service brings licensed, certified physical therapists directly to your bedside. Specialized in post-surgical joint rehabilitation, stroke paralysis recovery, gait training, and chronic pain management, we design personalized exercise protocols tailored to patient abilities.',
    'We utilize passive and active movement techniques, muscle re-education, and fall prevention training to help patients regain functional independence and confidence without leaving the comfort of their home.'
  ],
  col1Title: 'Clinical Rehabilitation Therapies',
  col1IconName: 'stethoscope',
  col1Items: [
    'Post-Surgical Knee & Hip Joint Replacement Rehabilitation',
    'Brain Stroke Paralysis Neuro-Muscular Re-education',
    'Spinal Mobilization & Chronic Back/Neck Pain Relief',
    'Passive & Active Range of Motion (ROM) Exercises',
    'Chest Physiotherapy, Airway Clearance & Breathing Rehab',
    'Targeted Muscle Strengthening & Flexion Stimulation'
  ],
  col2Title: 'Mobility & Gait Training Duties',
  col2IconName: 'userCheck',
  col2Items: [
    'Gait Training, Walker Support & Balance Recovery',
    'Fall Risk Assessment & Home Ergonomics Guidance',
    'Stair Climbing Assistance & Bed-to-Chair Transfer Drills',
    'Posture Correction & Core Strengthening Protocols',
    'Customized Daily Home Exercise Routine Design',
    'Patient Mobility Progress Tracking & Physician Liaison'
  ]
};

export default function PhysiotherapyPage() {
  return <ServiceDetailLayout data={physiotherapyData} />;
}
