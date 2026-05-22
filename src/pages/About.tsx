import { motion } from 'motion/react';
import { Award, Briefcase, GraduationCap, Globe, ShieldCheck, Heart } from 'lucide-react';

export default function About() {
  return (
    <div className="bg-cream min-h-screen text-dark">
      {/* Editorial Intro */}
      <section className="pt-48 pb-32 relative overflow-hidden min-h-[60vh] flex items-center">
        <div className="absolute inset-0 z-0 bg-cream">
          <motion.img 
            initial={{ scale: 1.15 }}
            animate={{ scale: 1 }}
            transition={{ duration: 20, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
            src="https://images.unsplash.com/photo-1497366858526-0755928d9f83?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover brightness-[0.7] opacity-50"
            alt="Office background"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-cream/20 via-cream/60 to-cream" />
          <div className="absolute inset-0 noise-overlay opacity-5" />
        </div>
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="inline-flex items-center gap-6 mb-12">
              <div className="h-[1px] w-12 bg-accent" />
              <span className="text-accent font-bold tracking-[0.4em] text-[10px] uppercase">A Legacy of Service</span>
              <div className="h-[1px] w-12 bg-accent" />
            </div>
            <h1 className="text-5xl md:text-[6rem] mb-12 font-serif text-dark italic leading-tight">
              Institutional <span className="not-italic">Integrity.</span> <br/>
              Field <span className="not-italic text-accent">Dedication.</span>
            </h1>
            <div className="max-w-3xl mx-auto border-t border-accent/20 pt-16 mt-16">
              <p className="text-2xl font-serif text-dark mb-10 leading-relaxed italic">
                " Excelous Environmental & Logistics delivers executive leadership and field-proven capabilities focused on maintaining institutional infrastructure, supporting environmental operations, and responding to disaster recovery and emergency response efforts. "
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Leadership Portrait */}
      <section className="py-40 bg-white text-dark overflow-hidden shadow-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">
              <div className="lg:col-span-6">
                <div className="p-4 border border-accent/30 bg-cream">
                  <div className="aspect-[4/5] bg-cream relative overflow-hidden grayscale group">
                     <div className="absolute inset-0 flex items-center justify-center text-accent/20 font-serif text-3xl uppercase tracking-widest text-center px-10">
                      Karen Swain<br/>CEO Bio Portrait
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-6">
                  <div className="inline-block border-l-4 border-accent pl-8 mb-10">
                    <h2 className="text-4xl md:text-6xl font-serif mb-2 italic text-accent">Karen Swain</h2>
                    <p className="text-[10px] font-bold tracking-[0.4em] uppercase text-dark/40">Founder & Chief Executive Officer</p>
                  </div>
                  <div className="space-y-8 font-light text-dark/70 leading-relaxed text-lg">
                    <p>
                      Excelous Environmental & Logistics (EEL) was established to support environmental services, disaster recovery, debris removal, hauling, logistics coordination, and infrastructure support operations across commercial, institutional, and public sector environments.
                    </p>
                    <p>
                      Our leadership team brings field-proven experience supporting disaster recovery operations, debris hauling and removal, environmental services, grease trap maintenance support, workforce deployment, and large-scale operational response initiatives through prior contracts, partnerships, and teaming relationships.
                    </p>
                    <p>
                      EEL was created to provide a dedicated focus on environmental operations, recovery services, logistics support, and infrastructure maintenance while continuing to build upon the operational experience, leadership, and project capabilities established through years of project execution and industry support.
                    </p>
                    <p>
                      Today, EEL remains focused on rapid response, scalable operations, safety, compliance, and dependable service delivery for clients requiring responsive environmental and operational support solutions.
                    </p>
                  </div>
              </div>
          </div>
        </div>
      </section>

      {/* Values - Traditional Flow */}
      <section className="py-40 bg-cream/30">
        <div className="max-w-7xl mx-auto px-6 text-center mb-32">
          <h2 className="text-4xl md:text-6xl font-serif text-dark italic">The Pillars of </br> <span className="text-accent not-italic">Excelous Environmental & Logistics.</span></h2>
          <div className="w-24 h-[1px] bg-accent mx-auto mt-8" />
        </div>
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16">
          {[
            { title: 'Customer Commitment', desc: 'Developing long-term relationships defined by deep institutional knowledge and unwavering reliability.', icon: <Heart size={32} /> },
            { title: 'Quality of Performance', desc: 'Excellence is not measured by compliance alone, but by the tangible impact of our field operations.', icon: <ShieldCheck size={32} /> },
            { title: 'Team Expertise', desc: 'Investing in specialized field training to ensure our teams are prepared for any environmental contingency.', icon: <Award size={32} /> },
            { title: 'Institutional Trust', desc: 'Bringing the professional standards of contracting to local and regional service requests.', icon: <Globe size={32} /> }
          ].map((v, i) => (
            <motion.div 
              key={v.title}
              whileHover={{ y: -5 }}
              className="border border-accent/20 p-16 text-center group bg-white shadow-sm"
            >
              <div className="text-accent mb-10 flex justify-center">{v.icon}</div>
              <h4 className="text-2xl font-serif text-dark mb-6">{v.title}</h4>
              <p className="text-dark/60 font-light leading-relaxed max-w-sm mx-auto">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    
  );
}
