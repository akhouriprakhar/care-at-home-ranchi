import React from 'react';

export const ClinicalProcedures: React.FC = () => {
  const procedures = [
    {
      title: 'Medication & IV Therapy',
      description: 'Administration of IV fluids, prescription injections, and continuous vital parameter tracking under physician guidance.',
      icon: (
        <svg className="w-6 h-6 text-[#20AD96]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L5.605 15.13a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      bullets: ['IV Infusions & Drip Monitoring', 'Intramuscular & Subcutaneous Injections', 'Vital Parameter Documentation'],
    },
    {
      title: 'Catheter & Ryles Tube Care',
      description: 'Sterile urinary catheterization and enteral Ryles tube insertion, feeding management, and hygiene maintenance.',
      icon: (
        <svg className="w-6 h-6 text-[#20AD96]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      bullets: ['Catheter Flush & Drainage Care', 'Ryles Tube Feed Administration', 'Aseptic Site Disinfection'],
    },
    {
      title: 'Wound & Post-Surgical Care',
      description: 'Aseptic surgical wound dressing, post-C-section recovery care, suture inspection, and infection prevention.',
      icon: (
        <svg className="w-6 h-6 text-[#20AD96]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      bullets: ['Sterile Dressing & Bandaging', 'Post-Op Surgical Wound Monitoring', 'Infection & Drainage Control'],
    },
    {
      title: 'Patient Hygiene & Mobility',
      description: 'Comprehensive bed bath/sponging, diaper changing, posture rotation for bedsore prevention, and assisted feeding.',
      icon: (
        <svg className="w-6 h-6 text-[#20AD96]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.684a4.5 4.5 0 00-1.414-6.364 4.5 4.5 0 00-6.364 0l-.618.618-.618-.618a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      bullets: ['Bed Bath & Sponging Routine', 'Diaper Care & Incontinence', '2-Hour Position Rotation for Bedsores'],
    },
    {
      title: 'Tracheostomy & Oxygen Support',
      description: 'Airway suctioning, tracheostomy tube management, oxygen concentrator assistance, and pulse oximetry monitoring.',
      icon: (
        <svg className="w-6 h-6 text-[#20AD96]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      bullets: ['Tracheostomy Suctioning & Cleaning', 'Oxygen Concentrator Assistance', 'Continuous SpO2 Tracking'],
    },
  ];

  return (
    <section className="bg-[#F4F8F9] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#0C364A] text-center mb-3">
          Specific Medical Procedures We Handle
        </h2>
        <p className="text-slate-600 text-center max-w-2xl mx-auto mb-12 text-sm md:text-base">
          Our qualified nursing attendants execute doctor-prescribed clinical protocols with high precision at your home.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {procedures.map((proc, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm hover:border-[#20AD96] hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#F4F8F9] border border-slate-200 flex items-center justify-center mb-4">
                  {proc.icon}
                </div>
                <h3 className="text-xl font-bold text-[#0C364A] mb-2">{proc.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">{proc.description}</p>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <ul className="space-y-2">
                  {proc.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-center text-xs font-semibold text-[#0C364A]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#8EC63F] mr-2 flex-shrink-0" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
