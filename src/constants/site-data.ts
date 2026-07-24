export interface ProcedureItem {
  id: string;
  title: string;
  category: string;
  procedures: string;
  description: string;
  bullets: string[];
  requiresDoctorOrder?: boolean;
}

export interface ServiceDetail {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  features: string[];
  badge?: string;
}

export type ServiceItem = ServiceDetail;

export const BRAND_DATA = {
  name: "Care at Home, Ranchi",
  tagline: "Hospital-Grade Clinical Nursing & Home Healthcare Services",
  est: "2016",
  hours: "Office Hours: Monday – Saturday (Closed Sundays)",
  contact: {
    phone: "+91-9430156190",
    email: "careathome24hr@gmail.com",
    address: "Care At Home, In Front Of Tribes India, Opposite Of Ashok Nagar Gate No. 5, Ranchi",
    city: "Ranchi",
    state: "Jharkhand",
    pincode: "834002",
    googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1200.0!2d85.2835741639137!3d23.350473550777274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f4e129a8f46e77%3A0x47ba744bd4400b89!2sCare%20at%20Home%2C%20Ranchi!5e0!3m2!1sen!2sin!4v1784802826036!5m2!1sen!2sin",
    googleMapsUrl: "https://maps.app.goo.gl/CareAtHomeRanchi",
  },
  rating: { score: 4.7, count: 146, platform: "Verified Client Feedback" }
};

export const CONTACT_INFO = {
  phone: BRAND_DATA.contact.phone,
  email: BRAND_DATA.contact.email,
  address: BRAND_DATA.contact.address,
  city: BRAND_DATA.contact.city,
  state: BRAND_DATA.contact.state,
  pincode: BRAND_DATA.contact.pincode,
  googleMapsEmbedUrl: BRAND_DATA.contact.googleMapsEmbedUrl,
  googleMapsUrl: BRAND_DATA.contact.googleMapsUrl,
};

// Sorted Most Recent to Older
export const REVIEWS_DATA = [
  {
    name: "Aditi",
    date: "Jan 2025",
    rating: 5,
    source: "Verified Client Review",
    text: "Exceptional empathy and skillful service provided by the nursing attendant Sandhya. Professionalism, prompt action, and reliability of the staff at Care at Home were outstanding. Nurse Daya was highly appreciated for her clinical dedication."
  },
  {
    name: "Naghma Iram",
    date: "A month ago",
    rating: 5,
    source: "Verified Client Review",
    text: "Caring for a loved one with dementia is never easy, but the team at Care at Home brought comfort, patience, and compassion into our lives during some of the most challenging times."
  },
  {
    name: "Tushar V",
    date: "6 months ago",
    rating: 5,
    source: "Verified Client Review",
    text: "Great service, good mannered staff, and very professional management."
  },
  {
    name: "Vidit Singh",
    date: "A year ago",
    rating: 5,
    source: "Verified Client Review",
    text: "Should be without a doubt the to go choice for anyone with care at home services. Experienced and outstanding management. Nurses are allocated according to their experience."
  },
  {
    name: "Lalit Ranjan Pathak",
    date: "A year ago",
    rating: 5,
    source: "Verified Client Review",
    text: "Very prompt, regular and well behaved nursing staff who attend & take care of bedridden elderly patients at home. Great help and services provided!"
  },
  {
    name: "Prem Prakash Singh",
    date: "A year ago",
    rating: 5,
    source: "Verified Client Review",
    text: "Very skilled staff. Best agency at Ranchi for the home care services especially related to elderly or needy family members."
  },
  {
    name: "Anubha Sinha",
    date: "A year ago",
    rating: 5,
    source: "Verified Client Review",
    text: "The service was prompt and the Nursing staff provided was very empathetic and professional. Thank you for your wonderful services."
  },
  {
    name: "Chandrashekhar Kumar",
    date: "A year ago",
    rating: 5,
    source: "Verified Client Review",
    text: "Nurses are very caring, prompt and professional. Company's executives are very good and professional."
  },
  {
    name: "Amrita Pandey",
    date: "A year ago",
    rating: 5,
    source: "Verified Client Review",
    text: "Very good service provided by nursing staff."
  },
  {
    name: "Ranjit Kumar",
    date: "A year ago",
    rating: 5,
    source: "Verified Client Review",
    text: "Good service and satisfied services."
  },
  {
    name: "Ishteyaque Ahmed",
    date: "2 years ago",
    rating: 5,
    source: "Verified Client Review",
    text: "Excellent service! Care at Home is the best service provider in Ranchi and I believe in the entire Jharkhand state. The nursing staff was very attentive, cooperative and friendly."
  },
  {
    name: "Ashwini Tirkey",
    date: "2 years ago",
    rating: 5,
    source: "Verified Client Review",
    text: "Care at Home has been a big relief for some people like us who unfortunately are separated states apart from their beloved elders due to work."
  },
  {
    name: "SK Verma",
    date: "2 years ago",
    rating: 5,
    source: "Verified Client Review",
    text: "I am extremely thankful to Care at Home for providing continuous care for my 90+ mother. At no point of time my mother was left uncared. Staff were courteous and hardworking."
  },
  {
    name: "Rani Dwivedi",
    date: "2 years ago",
    rating: 5,
    source: "Verified Client Review",
    text: "Had a good experience hiring full time nursing staff from the center. Professional in planning and patient care."
  },
  {
    name: "Vidya Jha",
    date: "2 years ago",
    rating: 5,
    source: "Verified Client Review",
    text: "Excellent Service. Highly recommended."
  },
  {
    name: "Afnan Ahmed",
    date: "2 years ago",
    rating: 5,
    source: "Verified Client Review",
    text: "It was very supportive service with full dedication."
  },
  {
    name: "Nidhi Kumar",
    date: "2 years ago",
    rating: 5,
    source: "Verified Client Review",
    text: "Excellent service highly recommend."
  },
  {
    name: "Binod Kumar Singh",
    date: "2 years ago",
    rating: 5,
    source: "Verified Client Review",
    text: "Very good service."
  },
  {
    name: "Shubham Raj",
    date: "Feb 2021",
    rating: 5,
    source: "Verified Client Review",
    text: "Genuine, to the point, real care-at-home services. The organization makes life easier for families. They prioritize patient recovery above everything else."
  },
  {
    name: "Rashid Anwar",
    date: "3 years ago",
    rating: 5,
    source: "Verified Client Review",
    text: "Due to an unfortunate accident we had to look for home care service and after searching on the net we settled with Care at Home. In 3 months of service, the assigned caretaker never gave a chance to complain."
  },
  {
    name: "Abhishek Kumar",
    date: "3 years ago",
    rating: 5,
    source: "Verified Client Review",
    text: "We have taken their service for my mother for approx one year and found it very much satisfactory."
  },
  {
    name: "Naveen Jaiswal",
    date: "3 years ago",
    rating: 5,
    source: "Verified Client Review",
    text: "Excellent service! The office staff are very cooperative. Response and action to a request or an issue is very fast. Care givers are well trained."
  },
  {
    name: "Awadhesh Prasad",
    date: "3 years ago",
    rating: 5,
    source: "Verified Client Review",
    text: "Nice nursing services given by Care at Home to my ailing wife. Nurse Sandhya, Jyoti and Sangeeta were very caring. Care at Home is highly recommended."
  },
  {
    name: "Prasidh Jha",
    date: "3 years ago",
    rating: 5,
    source: "Verified Client Review",
    text: "We had a great experience during our engagement with Care at Home. They are most reliable and honest service providers."
  },
  {
    name: "Praveen Gupta",
    date: "3 years ago",
    rating: 5,
    source: "Verified Client Review",
    text: "Very genuine home care providers. Highly recommended."
  },
  {
    name: "Gyandeep Banerjee",
    date: "3 years ago",
    rating: 5,
    source: "Verified Client Review",
    text: "Thanks a lot for your help and support during the toughest time when I needed someone to take care of my ailing mother."
  },
  {
    name: "Kajal Kashyap",
    date: "3 years ago",
    rating: 5,
    source: "Verified Client Review",
    text: "Wonderful service! Thank you for providing an experienced nurse with a professional approach. It is a blessing in disguise."
  },
  {
    name: "Siddhartha Kumar",
    date: "3 years ago",
    rating: 5,
    source: "Verified Client Review",
    text: "The nurse Binita was very good."
  },
  {
    name: "Rakesh Prasad",
    date: "3 years ago",
    rating: 5,
    source: "Verified Client Review",
    text: "Care and support services is excellent."
  },
  {
    name: "Pratik Gaurav",
    date: "3 years ago",
    rating: 5,
    source: "Verified Client Review",
    text: "Excellent service."
  },
  {
    name: "Karmveer Minz",
    date: "3 years ago",
    rating: 5,
    source: "Verified Client Review",
    text: "Living up to its name, Care at Home truly provides excellent service. Organizations like yours are a boon for people who live in other cities."
  },
  {
    name: "Dr. A. K. Sinha",
    date: "May 2020",
    rating: 5,
    source: "Verified Client Review",
    text: "Punctual, well-behaved staff for post-surgical nursing care. Care at Home coordinated everything seamlessly for my family member's recovery."
  },
  {
    name: "Nitesh Shah Deo",
    date: "Nov 2020",
    rating: 5,
    source: "Verified Client Review",
    text: "The care provided by the clinical team was deeply personal and professional. The nurses were well versed in their craft and gave undivided attention towards the well-being of my father."
  },
  {
    name: "Vinita Narayan",
    date: "4 years ago",
    rating: 5,
    source: "Verified Client Review",
    text: "I appreciate the service provided by Care at Home when we needed them for my mother who was recovering from age related illness. Attendants are very sincere, polite, homely & patient."
  },
  {
    name: "Sidhartha Chakravarty",
    date: "4 years ago",
    rating: 5,
    source: "Verified Client Review",
    text: "The palliative home care provided to my wife who had been suffering from terminal stage of carcinoma had been exceptionally good. Service rendered was utmost empathy."
  },
  {
    name: "Avantika Anand",
    date: "4 years ago",
    rating: 5,
    source: "Verified Client Review",
    text: "Excellent services provided by Care at Home. Nurses were very punctual and caring. I would highly recommend Care at Home."
  },
  {
    name: "Raj Verma",
    date: "4 years ago",
    rating: 5,
    source: "Verified Client Review",
    text: "Highly recommend to anyone needing skilled home nursing care. Nurse Daya was extremely good at her job and really polite and kind natured."
  },
  {
    name: "Saumya Roy",
    date: "4 years ago",
    rating: 5,
    source: "Verified Client Review",
    text: "If you're looking for a home care agency that takes pride in caring for your family member, then Care at Home, Ranchi is the one for you."
  },
  {
    name: "Anwita Sahay",
    date: "4 years ago",
    rating: 5,
    source: "Verified Client Review",
    text: "Care at Home is a very professional organisation. They provide good and on time service. I am fully satisfied."
  },
  {
    name: "Shailesh Prakash",
    date: "4 years ago",
    rating: 5,
    source: "Verified Client Review",
    text: "The palliative care provided to my mother (75 yrs old) who was suffering from terminal stage of carcinoma had been exceptionally good. Service rendered by Miss Lily Tigga was remarkably excellent."
  },
  {
    name: "Santosh Kumar Choudhary",
    date: "4 years ago",
    rating: 5,
    source: "Verified Client Review",
    text: "Excellent care and service provided by Care at Home... More than expectations."
  },
  {
    name: "Shishir Choudhary",
    date: "4 years ago",
    rating: 5,
    source: "Verified Client Review",
    text: "I really appreciate the exemplary service provided by Care at Home. Nurses Shanti and Draupadi were wonderful."
  },
  {
    name: "Saikat Sarkar",
    date: "4 years ago",
    rating: 5,
    source: "Verified Client Review",
    text: "Good experience. Very well behaved and professional. Staffs are also polite and punctual."
  },
  {
    name: "Jai Mishra",
    date: "4 years ago",
    rating: 5,
    source: "Verified Client Review",
    text: "Thank you for taking care of my elderly mother. Your service was exceptional."
  },
  {
    name: "Bukun Chatterjee",
    date: "4 years ago",
    rating: 5,
    source: "Verified Client Review",
    text: "One of the best in Ranchi... excellent service and very cooperative and resourceful."
  },
  {
    name: "Bikram Nayak",
    date: "5 years ago",
    rating: 5,
    source: "Verified Client Review",
    text: "One of the best nursing agency in Ranchi. I am fully satisfied with their service. Management team is very cooperative, nurses are trained for every specific patient."
  },
  {
    name: "Dr. Niranjan Prasad",
    date: "5 years ago",
    rating: 5,
    source: "Verified Client Review",
    text: "Services rendered by Care at Home, Ranchi Centre needs worth appreciations as I am very much satisfied with their Excellence caretaking services for my aged mother with paralysis."
  },
  {
    name: "Sonal Tete",
    date: "5 years ago",
    rating: 5,
    source: "Verified Client Review",
    text: "It came handy when it was required. With God grace my mother is well now. And it wouldn't have been possible without taking services of Care at Home."
  },
  {
    name: "Umesh Sinha",
    date: "5 years ago",
    rating: 5,
    source: "Verified Client Review",
    text: "My mother was in hospital in unconscious state. We needed some help for nursing care. Care at Home people provided a lady Subhadra. She was very sincere."
  },
  {
    name: "Arun Kumar",
    date: "5 years ago",
    rating: 5,
    source: "Verified Client Review",
    text: "Care at Home is a very nice organisation. I like its prompt action and professional behavior."
  },
  {
    name: "Biplab Ghosh",
    date: "5 years ago",
    rating: 5,
    source: "Verified Client Review",
    text: "Very caring and fantastic service. The help provided by them was so good. I strongly recommend their service."
  },
  {
    name: "Prem Bhushan",
    date: "5 years ago",
    rating: 5,
    source: "Verified Client Review",
    text: "Good service and prompt response."
  },
  {
    name: "Ankush Sahay",
    date: "6 years ago",
    rating: 5,
    source: "Verified Client Review",
    text: "I sincerely thank you and would like to place on records the excellent service provided by your organisation towards providing nursing care at home. My father has recovered post surgery."
  },
  {
    name: "Ashesh Ranjan",
    date: "6 years ago",
    rating: 5,
    source: "Verified Client Review",
    text: "Provided a true professional responsiveness and services to our best of satisfaction. This has greatly supported in recovery of my Octogenarian mother."
  },
  {
    name: "Dr. Saket Verma",
    date: "6 years ago",
    rating: 5,
    source: "Verified Client Review",
    text: "Approachable and proper service given, I took service for almost 3 and half months the nursing care was proper. Would recommend its services."
  },
  {
    name: "Chandan Singh",
    date: "May 2019",
    rating: 5,
    source: "Verified Client Review",
    text: "Quality service with best well qualified team members. Would like to thank Care at Home for the service they provided to my mother for more than 5 months."
  }
];

export const FAQ_DATA = [
  {
    question: "What is home nursing care?",
    answer: "Home nursing involves deploying certified GNM/B.Sc nurses and trained healthcare attendants to care for patients in their own homes under doctor recommendations. It is a cost-effective alternative to extended hospital stays."
  },
  {
    question: "What services does Care at Home provide?",
    answer: "Our core clinical services include Critical ICU Care, Tracheostomy Suctioning, Urinary Catheterization, Ryles Tube Enteral Feeding, Post-Surgical Wound Dressing, Elderly Hygiene, Post-Natal Care, and In-Home Physiotherapy."
  },
  {
    question: "Do you offer both 12-hour and 24-hour shift options?",
    answer: "Yes. We offer 12-Hour Day/Night shifts as well as 24-Hour full-time continuous nurse deployment depending on patient needs."
  },
  {
    question: "Does Care at Home provide domestic maids or house cleaning?",
    answer: "No. Care at Home operates strictly as a medical healthcare provider. Our personnel focus 100% of their time on patient clinical monitoring, vitals, hygiene, and feeding. We do not provide domestic maids or housekeeping."
  }
];

export const SPECIFIC_PROCEDURES: ProcedureItem[] = [
  {
    id: "iv-therapy",
    title: "IV Therapy & Injections",
    category: "Medication Administration",
    procedures: "Intravenous fluid drips, IV antibiotics, and prescription injections.",
    description: "Sterile administration of doctor-prescribed IV fluids, intramuscular/subcutaneous injections, and continuous vital parameter tracking.",
    bullets: ["IV Drip & Antibiotic Infusions", "Prescription Injection Care", "Continuous Vital Parameter Logging"],
    requiresDoctorOrder: true
  },
  {
    id: "catheterization",
    title: "Catheter & Ryles Tube Care",
    category: "Catheter & Enteral Care",
    procedures: "Foley catheter insertion, flushing, and Ryles tube feeding.",
    description: "Sterile urinary catheter maintenance, flushing, bag replacement, and Ryles tube enteral nutrition administration.",
    bullets: ["Foley Catheter Maintenance & Flush", "Enteral Ryles Tube Feed Administration", "Sterile Urinary Drainage Care"],
    requiresDoctorOrder: true
  },
  {
    id: "tracheostomy-care",
    title: "Tracheostomy Care & Suctioning",
    category: "Airway & Respiratory Support",
    procedures: "Sterile airway suctioning, tracheostomy tube cleaning, and O2 monitoring.",
    description: "Dedicated airway suctioning, tracheostomy inner cannula hygiene, tie change, oxygen concentrator setup, and continuous SpO2 pulse oximetry monitoring.",
    bullets: ["Sterile Airway Suctioning Routine", "Tracheostomy Tube Hygiene & Dressing", "Continuous SpO2 & Respiratory Tracking"],
    requiresDoctorOrder: true
  },
  {
    id: "surgical-dressing",
    title: "Surgical Dressing & Wound Care",
    category: "Post-Operative Wound Care",
    procedures: "Aseptic post-op dressing, suture inspection, and wound care.",
    description: "Aseptic surgical wound cleaning, sterile dressing change, post-C-section recovery monitoring, suture inspection, and wound infection prevention.",
    bullets: ["Aseptic Post-Op Wound Dressing", "C-Section & Complex Wound Care", "Suture Inspection & Infection Control"],
    requiresDoctorOrder: true
  },
  {
    id: "colostomy-care",
    title: "Colostomy & Stoma Hygiene",
    category: "Ostomy Management",
    procedures: "Stoma cleaning, appliance flange fitting, and pouch replacement.",
    description: "Specialized stoma cleaning, pouch replacement, skin barrier paste application around ostomy sites, and patient hygiene maintenance.",
    bullets: ["Stoma Appliance Fitting & Change", "Peristomal Skin Barrier Protection", "Drainage & Leakage Control"],
    requiresDoctorOrder: false
  },
  {
    id: "enterostomal-therapy",
    title: "Enterostomal & PEG Tube Care",
    category: "Enteral Nutrition Support",
    procedures: "PEG tube flushing, enteral nutrition, and stoma site care.",
    description: "Enteral nutrition management, G-tube/PEG tube flushing, oral hygiene, and specialized hydration assistance.",
    bullets: ["PEG & Gastrostomy Tube Care", "Nutritional Hydration Administration", "Oral & Gastrointestinal Care"],
    requiresDoctorOrder: true
  },
  {
    id: "stroke-paralysis-care",
    title: "Stroke & Paralysis Rehabilitation",
    category: "Neurological Patient Support",
    procedures: "Passive joint movement, pressure sore prevention, mobility assistance.",
    description: "Comprehensive home nursing care for post-brain stroke and bedridden paralysis patients, focused on bed bath, position rotation, and passive rehabilitation.",
    bullets: ["2-Hour Position Rotation Routine", "Passive Joint & Range of Motion Exercises", "Incontinence & Diaper Hygiene"],
    requiresDoctorOrder: false
  },
  {
    id: "oxygen-nebulization",
    title: "Oxygen & Nebulization Therapy",
    category: "Respiratory Care",
    procedures: "Oxygen concentrator operation, nebulization, SpO2 monitoring.",
    description: "Administration of doctor-prescribed nebulization therapy, oxygen flow adjustment, and continuous pulse oximetry recording.",
    bullets: ["Oxygen Flow & Concentrator Management", "Prescription Nebulization Therapy", "SpO2 & Pulse Logging"],
    requiresDoctorOrder: true
  }
];

export const SERVICES_LIST: ServiceDetail[] = [
  {
    id: "critical-care",
    slug: "critical-care",
    title: "Critical Care & ICU Support",
    shortDescription: "Tracheostomy care, Ryles tube enteral feeding, IV infusions, stroke recovery, and continuous ICU patient monitoring.",
    fullDescription: "Our specialized ICU-trained nursing staff provides dedicated 12-hour and 24-hour shift clinical care for critically ill patients at home. Skilled in tracheostomy suctioning, catheterization, IV drips, brain stroke recovery, and paralysis management.",
    features: [
      "Tracheostomy Care & Airway Suctioning",
      "Ryles Tube Enteral Feeding & Flush",
      "IV Infusion & Injections Administration",
      "Brain Stroke & Paralysis Care",
      "Doctor-Guided Vital Monitoring"
    ],
    badge: "ICU & Critical Nursing"
  },
  {
    id: "elderly-hygiene",
    slug: "elderly-hygiene",
    title: "Elderly Care & Patient Hygiene",
    shortDescription: "Senior citizen assistance, daily sponging/bed baths, diaper changing, and 2-hour bedsore prevention turning.",
    fullDescription: "Compassionate, trained health attendants dedicated to senior citizens and bedridden patients. Focused on personal hygiene, regular sponging, diaper changing, posture rotation for bedsore prevention, and assisted feeding.",
    features: [
      "Bed Bath & Sponging Routine",
      "Diaper Care & Incontinence Hygiene",
      "2-Hour Position Turning for Bedsore Prevention",
      "Mobility & Transfer Assistance",
      "Assisted Feeding & Hydration Care"
    ],
    badge: "Geriatric Support"
  },
  {
    id: "mother-baby-care",
    slug: "mother-baby-care",
    title: "Mother & Newborn Post-Natal Care",
    shortDescription: "Specialized post-natal care, post-C-section surgical wound care, newborn baby bath, massage, and lactation support.",
    fullDescription: "Dedicated maternal and infant care attendants ensuring proper lactation guidance, post-cesarean recovery wound care, newborn baby bath, massage, and infant sleep cycle monitoring.",
    features: [
      "Newborn Hygiene & Baby Bath",
      "Post-C-Section Wound Care & Dressing",
      "Lactation & Feeding Guidance",
      "Infant Sleep & Vital Tracking",
      "Night Shift Mother Relief Care"
    ],
    badge: "Post-Natal Care"
  },
  {
    id: "physiotherapy",
    slug: "physiotherapy",
    title: "In-Home Physiotherapy & Rehabilitation",
    shortDescription: "In-home rehabilitation, post-surgical mobility exercises, stroke recovery rehab, and joint movement therapy.",
    fullDescription: "Certified home physiotherapists providing customized muscle rehabilitation, joint mobilization, post-operative walking exercise, and stroke paralysis recovery therapy in Ranchi.",
    features: [
      "Post-Surgical Mobility Rehab",
      "Brain Stroke & Paralysis Exercise Therapy",
      "Joint & Spine Mobilization",
      "Gait Training & Fall Prevention",
      "Custom Pain Management Protocols"
    ],
    badge: "Rehabilitation"
  }
];

export const SERVICES_DATA = SERVICES_LIST;
export const REVIEWS = REVIEWS_DATA;

export const SCOPE_DISCLAIMER = {
  title: "Commitment to Patient Recovery & Dignity",
  content: "Care at Home operates strictly as a specialized clinical healthcare agency. 100% of our staff's duty hours are dedicated exclusively to clinical monitoring, patient vitals, hygiene, and feeding under medical supervision. We do not provide domestic maids, house cleaning, or family cooking.",
  medicalOnlyTag: "Clinical Nursing & Attendants Only"
};
