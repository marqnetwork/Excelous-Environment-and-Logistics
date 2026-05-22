import { motion } from 'motion/react';
import { Calendar, MapPin, CheckCircle2, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const projects = [
  {
    title: 'Debris Removal and Hauling',
    client: 'Highland Property Pros, LLC',
    locations: 'Beech Mountain Area, NC',
    desc: 'Responded with experienced crews and terrain-appropriate equipment across Beech Mountain Area.',
    results: [
      'Completed safe removal and site cleanup under challenging terrain conditions.',
      'Protected road infrastructure and reduced potential flood risks from obstructed water flow.',
      'Earned commendations for precision and attention to environmental detail.'
    ],
    image: 'https://excelous.net/wp-content/uploads/2025/05/DR-Image-768x580.webp'
  },
  {
    title: 'Debris Removal and Hauling',
    client: 'Highland Property Pros, LLC',
    locations: 'Avery County, NC',
    desc: 'Excelous was contracted to execute comprehensive storm debris removal operations across Avery County.',
    results: [
      'Removed high-risk debris efficiently, preventing blockages and erosion hazards.',
      'Enabled a faster return to public services and travel infrastructure.',
      'Met aggressive recovery deadlines.',
      'Established Excelous as a trusted resource for rural storm response operations.'
    ],
    image: 'https://marqnetworks.co/wp-content/uploads/2026/05/EL-Pic-11.jpg'
  },
  {
    title: 'Disaster Recovery Tree Removal Support',
    client: 'Ceres Environmental',
    locations: 'Multiple',
    desc: 'Excelous provided disaster recovery support by deploying skilled teams to assess, cut, and remove fallen trees in affected areas.',
    results: [
      'Cleared critical roadways and public access points, accelerating recovery efforts.',
      'Safely removed hazardous trees, reducing risks to residents and infrastructure.',
      'Supported FEMA’s disaster recovery mission with efficient and environmentally responsible debris management.'
    ],
    image: 'https://marqnetworks.co/wp-content/uploads/2026/05/EL-Pic-11.jpg'
  }
];

export default function PastPerformance() {
  return (
    <div className="bg-cream min-h-screen text-dark">
      {/* Header */}
      <section className="pt-48 pb-32 relative overflow-hidden min-h-[60vh] flex items-center">
        <div className="absolute inset-0 z-0 bg-cream">
          <motion.img 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 15, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
            src="https://excelous.net/wp-content/uploads/2025/03/disaster-banner-new.png" 
            className="w-full h-full object-cover brightness-[0.7] opacity-60"
            alt="Field operations background"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-cream/20 via-cream/60 to-cream" />
          <div className="absolute inset-0 noise-overlay opacity-5" />
        </div>
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10 w-full">
          <div className="inline-flex items-center gap-6 mb-12">
            <div className="h-[1px] w-12 bg-accent" />
            <span className="text-accent font-bold tracking-[0.4em] text-[10px] uppercase">Record of Execution</span>
            <div className="h-[1px] w-12 bg-accent" />
          </div>
          <h1 className="text-5xl md:text-[6rem] font-serif text-dark italic leading-tight">
            Past <span className="not-italic">Performance.</span>
          </h1>
          <p className="mt-12 text-xl font-light text-dark/60 max-w-2xl mx-auto italic leading-relaxed">
            "A proven track record delivering disaster recovery, debris removal, and environmental support services across commercial, institutional, and public sector environments."
          </p>
        </div>
      </section>

      {/* Project Case Studies */}
      <section className="py-40 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-64">
            {projects.map((project, i) => (
              <motion.div 
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-center"
              >
                <div className={`lg:col-span-6 ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="p-4 border border-accent/20 relative group bg-cream/20">
                    <div className="aspect-[16/10] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-1000">
                      <img src={project.image} className="w-full h-full object-cover brightness-95" alt={project.title} referrerPolicy="no-referrer" />
                    </div>
                  </div>
                </div>
                
                
                <div className={`lg:col-span-6 ${i % 2 === 1 ? 'lg:order-1 text-right' : ''}`}>
                  <h2 className="text-4xl md:text-5xl font-serif text-dark mb-8 italic leading-tight">
                    {project.title.split('—')[0]} <br/>
                    <span className="not-italic text-accent">— {project.title.split('—')[1]}</span>
                  </h2>
                  
                  <div className={`flex flex-wrap gap-8 mb-10 text-[10px] font-bold uppercase tracking-[0.3em] text-accent ${i % 2 === 1 ? 'justify-end' : ''}`}>
                    <span className="flex items-center gap-3"><MapPin size={16} /> {project.locations}</span>
                    <span className="flex items-center gap-3"><ChevronRight size={16} /> {project.client}</span>
                  </div>
                  
                  <p className="text-lg text-dark/60 mb-10 leading-relaxed font-light">
                    {project.desc}
                  </p>
                  
                  <div className={`space-y-6 py-10 border-y border-accent/10 ${i % 2 === 1 ? 'items-end' : ''}`}>
                    <h4 className="text-[10px] font-bold tracking-[0.4em] text-dark uppercase">Mission Outcomes:</h4>
                    <div className={`space-y-4 ${i % 2 === 1 ? 'flex flex-col items-end' : ''}`}>
                    {project.results.map(res => (
                      <div key={res} className="flex gap-4 text-dark/50 font-light italic">
                        <CheckCircle2 className="text-accent shrink-0" size={18} />
                        <span>{res}</span>
                      </div>
                    ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Institutional Engagement CTA */}
      <section className="py-40 bg-cream">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="w-[1px] h-24 bg-accent mx-auto mb-12" />
          <h2 className="text-4xl md:text-6xl font-serif text-dark mb-12 italic leading-tight">
             Engage our <span className="not-italic text-accent">Operational</span> Capacity.
          </h2>
          <p className="text-xl text-dark/60 font-light mb-16 leading-relaxed">
            Excelous Environmental & Logistics is ready for rapid mobilization and systematic execution across municipal, state, and federal environments.
          </p>
        </div>
      </section>
    </div>
  );
}
