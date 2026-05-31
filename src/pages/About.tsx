import { motion } from 'motion/react';
import { Award, Briefcase, GraduationCap, Globe, ShieldCheck, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

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
            src="https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&q=80&w=2000" 
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
                " We built Excelous Environmental & Logistics with one purpose — to bring the discipline of federal contracting to field operations work that demands it. Every project we take on is a reflection of that standard. "
              </p>
              <p className="text-2xl font-serif text-dark mb-10 leading-relaxed italic">
                — Karen Swain, Founder & Managing Partner, Excelous Environmental & Logistics
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
                   <div className="absolute inset-0 flex items-center justify-center text-accent/20 font-serif text-3xl uppercase tracking-widest text-center px-10 overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000">
                    <img src="https://marqnetworks.co/wp-content/uploads/2026/05/about.jpg" className="w-full h-full object-cover" alt="Heavy equipment" referrerPolicy="no-referrer" />
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-6">
              <div className="inline-block border-l-4 border-accent pl-8 mb-10">
                <h2 className="text-4xl md:text-6xl font-serif mb-2 italic">About <span className="text-accent">Excelous Environmental & Logistics</span> </h2>
              </div>
              <div className="space-y-8 font-light text-dark/70 leading-relaxed text-lg">
                <p>
                  Excelous Environmental & Logistics was purpose-built to deliver field operations excellence on the contracts that demand it most — disaster recovery, infrastructure support, and environmental services for federal, state, and commercial clients.
                </p>
                <p>
                  Founded by the leadership team behind Excelous LLC — an 8(a) and EDWOSB certified federal contractor with a proven record of performance across HUD, HHS, GSA, NASA, and Department of Interior contracts — Excelous Environmental & Logistics brings institutional credibility to heavy field operations. We understand federal contracting standards, compliance documentation, and what it takes to perform as a reliable partner at every tier of a contract.
                </p>
                <p>
                  Our field teams are trained, equipped, and operationally ready to mobilize across multiple states — supporting DOT infrastructure projects, FEMA-coordinated disaster response, and environmental compliance operations with the speed and accountability that critical work requires.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values - Traditional Flow */}
      <section className="py-40 bg-cream/30">
        <div className="max-w-7xl mx-auto px-6 text-center mb-32">
          <h2 className="text-4xl md:text-6xl font-serif text-dark italic">The Pillars of  <span className="text-accent not-italic"><br/>Excelous Environmental & Logistics.</span></h2>
          <div className="w-24 h-[1px] bg-accent mx-auto mt-8" />
        </div>
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16">
          {[
            { title: 'Customer Commitment', desc: 'Developing long-term relationships defined by deep institutional knowledge and unwavering reliability.', icon: <Heart size={32} /> },
            { title: 'Quality of Performance', desc: 'Excelous Environmental & Logistics is not measured by compliance alone, but by the tangible impact of our field operations.', icon: <ShieldCheck size={32} /> },
            { title: 'Team Expertise', desc: 'Investing in specialized field training so every crew member arrives prepared, certified, and ready to perform under federal and state contract standards..', icon: <Award size={32} /> },
            { title: 'Institutional Trust', desc: 'Bringing the professional standards of federal contracting to local and regional service requests.', icon: <Globe size={32} /> }
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

      {/* Emergency CTA */}
      <section className="py-40 bg-cream text-dark text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <h2 className="text-5xl md:text-[7rem] font-serif italic mb-12 leading-tight text-dark">Ready to <span className="not-italic text-accent">Partner.</span></h2>
          <p className="text-xl text-dark/50 mb-16 font-light leading-relaxed max-w-2xl mx-auto">
            Whether you’re a Tier 1 prime evaluating subcontractors, a state agency planning infrastructure work, or a commercial client with an environmental services need — Excelous Environmental & Logistics brings the field capacity and institutional credibility to get it done.
          </p>
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
            <Link to="/contact" className="bg-dark text-white px-12 py-6 text-[11px] font-bold uppercase tracking-[0.4em] hover:bg-accent transition-all shadow-xl">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
