import React from 'react';
import { Metadata } from 'next';
import { ServiceDetailLayout, ServiceDetailData } from '@/components/services/ServiceDetailLayout';

export const metadata: Metadata = {
  title: 'Mother & Baby Post-Natal Care | Care at Home, Ranchi',
  description: 'Specialized post-natal care, C-section surgical wound management, newborn hygiene, baby bath, and lactation support in Ranchi.',
};

const motherBabyCareData: ServiceDetailData = {
  slug: 'mother-baby-care',
  badge: 'Maternal & Infant Post-Natal Care',
  heroTitle: 'Mother & Newborn Post-Natal Care',
  heroDescription: 'Dedicated maternal and infant care attendants ensuring proper lactation guidance, post-cesarean recovery wound care, newborn baby bath, massage, and infant sleep tracking in Ranchi.',
  iconName: 'baby',
  quickStats: [
    'Post-C-Section Wound Dressing',
    'Newborn Bath & Oil Massage',
    'Lactation & Feeding Support',
    'Night Shift Mother Relief'
  ],
  overviewTitle: 'Specialized Maternal & Infant Recovery',
  overviewParagraphs: [
    'Our Mother & Newborn Post-Natal Care service provides professional, nurturing support during the delicate post-delivery period. Whether recovering from a C-section or natural delivery, our trained maternal attendants ensure mother and baby receive attentive clinical care.',
    'We assist with post-operative C-section surgical wound dressing, aseptic cord care, gentle newborn sponge/warm water baths, baby oil massage, and lactation guidance so mothers can rest and heal.'
  ],
  col1Title: 'Maternal Recovery & Wound Care',
  col1IconName: 'baby',
  col1Items: [
    'Post-C-Section Surgical Wound Inspection & Sterile Dressing',
    'Lactation Guidance, Latching Support & Feeding Schedule',
    'Post-Delivery Maternal Vital Parameter & Temperature Logging',
    'Maternal Nutrition & Hydration Compliance Assistance',
    'Uterine Involution & Post-Natal Healing Comfort',
    'Post-Operative Gentle Walking Support & Ergonomics'
  ],
  col2Title: 'Newborn Care & Infant Hygiene',
  col2IconName: 'userCheck',
  col2Items: [
    'Gentle Newborn Sponge & Warm Water Bath Routine',
    'Baby Oil Massage & Infant Skin Moisture Care',
    'Umbilical Cord Hygiene & Aseptic Infection Prevention',
    'Diaper Changing & Infant Skin Rash Prevention Routine',
    'Newborn Sleep Cycle Monitoring & Gentle Soothing',
    'Night Shift Mother Relief & Infant Feed Support'
  ]
};

export default function MotherBabyCarePage() {
  return <ServiceDetailLayout data={motherBabyCareData} />;
}
