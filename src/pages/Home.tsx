import { motion } from 'motion/react';
import { Truck, ShieldCheck, Zap, ArrowRight, Quote, Award, Building2, Globe2, BadgeCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="bg-dark text-cream">
      {/* Hero Section - Classic Sophistication */}
      <section className="relative min-h-[100vh] flex items-center pt-32 overflow-hidden">
        <div className="absolute inset-0 z-0 bg-dark">
          <motion.img 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 15, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
            src="https://marqnetworks.co/wp-content/uploads/2026/06/home-pg-hero-banner.jpg" 
            className="w-full h-full object-cover brightness-[0.6] opacity-60"
            alt="Industrial background"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark/30 via-dark/70 to-dark" />
          <div className="absolute inset-0 noise-overlay" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-6 mb-12">
              <div className="h-[1px] w-12 bg-accent" />
              <span className="text-accent font-bold tracking-[0.4em] text-[10px] uppercase">Established Excellence</span>
              <div className="h-[1px] w-12 bg-accent" />
            </div>
            
            <h1 className="text-6xl md:text-[7rem] mb-12 leading-tight font-serif text-white italic">
              Field-Proven. <span className="text-accent not-italic">Prime-Ready.</span> <br/>
              <span className="not-italic">Built for What's Next.</span>
            </h1>

            <p className="text-xl md:text-2xl text-white/60 mx-auto mb-16 font-light leading-relaxed">
              Excelous Environmental & Logistics, delivers infrastructure support, disaster response, and environmental services on DOT and FEMA projects where execution is non-negotiable.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
              <Link 
                to="/" 
                className="text-white text-[11px] font-bold uppercase tracking-[0.3em] hover:text-accent transition-colors flex items-center gap-3 border-b border-accent pb-1"
              >
                Capability Statement <ArrowRight size={14} />
              </Link>
              
            </div>
          </motion.div>
        </div>
        
        {/* Ornaments */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1px] h-19 bg-accent/30" />
      </section>

      {/* Credibility Ribbons */}
      <section className="py-20 bg-surface border-y border-accent/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {[
              { icon: <BadgeCheck className="text-accent mx-auto mb-4" size={32} />, label: 'Rapid Response Mobilization' },
              { icon: <BadgeCheck className="text-accent mx-auto mb-4" size={32} />, label: 'Multi-State Operations' },
              { icon: <BadgeCheck className="text-accent mx-auto mb-4" size={32} />, label: 'PRIME-READY CAPACITY' },
              { icon: <BadgeCheck className="text-accent mx-auto mb-4" size={32} />, label: 'COMPLIANCE-FIRST FIELD EXECUTION' },
            ].map((item, i) => (
              <motion.div 
                key={item.label}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: i * 0.2 }}
              >
                {item.icon}
                <div className="text-[15px] font-bold tracking-[0.4em] text-accent uppercase">{item.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services - Flow Layout */}
      <section className="py-40 bg-dark">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-32">
            <h2 className="text-5xl md:text-[5rem] font-serif mb-8 text-white italic">Unparalleled <span className="text-accent not-italic">Capabilities.</span></h2>
            <div className="w-24 h-[1px] bg-accent mx-auto" />
          </div>

          <div className="space-y-40">
            {/* Service 1 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="order-2 lg:order-1"
              >
                <h3 className="text-4xl md:text-6xl font-serif text-white mb-8 italic">Disaster <span className="not-italic text-accent">Recovery.</span></h3>
                <p className="text-lg text-white/60 mb-10 leading-relaxed font-light">
                  When disaster hits, the clock starts immediately. Excelous Environmental & Logistics deploys hauling crews, site cleanup teams, and emergency logistics support within hours of activation — not days. We operate under federal and state disaster frameworks, supporting FEMA-coordinated response efforts and DOT infrastructure restoration with the speed and compliance that critical recovery operations demand.
                </p>
                <Link to="/services/debris-removal" className="inline-flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.3em] text-accent border-b border-accent pb-2 hover:text-white transition-colors">
                  Explore Capability <ArrowRight size={14} />
                </Link>
              </motion.div>
              <div className="order-1 lg:order-2 p-4 border border-accent/20">
                <div className="h-[500px] overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000">
                   <img src="https://marqnetworks.co/wp-content/uploads/2026/06/home-pg-services-DR.jpg" className="w-full h-full object-cover" alt="Heavy equipment" referrerPolicy="no-referrer" />
                </div>
              </div>
            </div>

            {/* Service 2 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                <div className="p-4 border border-accent/20">
                  <div className="h-[500px] overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000">
                     <img src="https://marqnetworks.co/wp-content/uploads/2026/05/1.png" className="w-full h-full object-cover" alt="Industrial service" referrerPolicy="no-referrer" />
                  </div>
                </div>
                <motion.div 
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                >
                  <h3 className="text-4xl md:text-6xl font-serif text-white mb-8 italic">Grease Trap <span className="not-italic text-accent">Cleaning.</span></h3>
                  <p className="text-lg text-white/60 mb-10 leading-relaxed font-light">
                    A failed grease trap inspection doesn't just create a mess — it creates liability. Excelous Environmental & Logistics provides scheduled and emergency grease trap pumping, waste removal, and compliance documentation for commercial, municipal, and industrial facilities. We keep your operations clean, your records inspection-ready, and your facility on the right side of environmental regulations.
                  </p>
                  <Link to="/services/grease-trap" className="inline-flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.3em] text-accent border-b border-accent pb-2 hover:text-white transition-colors">
                    Explore Capability <ArrowRight size={14} />
                  </Link>
                </motion.div>
            </div>

             {/* Service 3 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="order-2 lg:order-1"
              >
                <h3 className="text-4xl md:text-6xl font-serif text-white mb-8 italic">Bulk Materials <span className="not-italic text-accent">Hauling.</span></h3>
                <p className="text-lg text-white/60 mb-10 leading-relaxed font-light">
                  DOT infrastructure and recovery projects move on tight schedules — and material delays stop everything. Excelous Environmental & Logistics hauls dirt, gravel, aggregate, sand, and construction materials across local, regional, and multi-site operations with the fleet capacity and logistical coordination to keep your project on timeline. From single-site support to high-volume multi-state material movement, we scale to the contract.
                </p>
                <Link to="/services/debris-removal" className="inline-flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.3em] text-accent border-b border-accent pb-2 hover:text-white transition-colors">
                  Explore Capability <ArrowRight size={14} />
                </Link>
              </motion.div>
              <div className="order-1 lg:order-2 p-4 border border-accent/20">
                <div className="h-[500px] overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000">
                   <img src="https://marqnetworks.co/wp-content/uploads/2026/05/hauling.jpg" className="w-full h-full object-cover" alt="Heavy equipment" referrerPolicy="no-referrer" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-40 bg-dark border-y border-accent/10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Quote size={48} className="text-accent mx-auto mb-12 opacity-50" />
          <h2 className="text-3xl md:text-5xl font-serif text-white italic leading-tight mb-12">
            "Every project we take on — whether it's restoring access after a disaster or keeping a facility compliant — is a commitment to the people depending on that infrastructure.  Our legacy is built on the trust of every organization that puts its name on a project with ours and the results we deliver in the field."
          </h2>
          <div className="flex flex-col items-center">
            <div className="w-[1px] h-12 bg-accent mb-6" />
            <span className="text-[10px] font-bold tracking-[0.4em] text-accent uppercase">Executive Leadership</span>
            <span className="text-white/70 font-serif italic mt-2">Excelous Environmental & Logistics</span>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-40 bg-primary text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-5xl md:text-[6rem] font-serif mb-12 italic">Initiate a <span className="not-italic text-accent">Project.</span></h2>
          <p className="text-xl text-white/60 mb-16 font-light leading-relaxed">
            Contact our strategic operations team today to discuss your environmental or logistics requirements.
          </p>
          <Link 
            to="/contact" 
            className="group relative inline-flex items-center justify-center border border-accent p-10 py-6 overflow-hidden transition-all hover:bg-accent hover:text-primary"
          >
            <span className="relative text-[11px] font-bold tracking-[0.5em] uppercase">Contact Us</span>
          </Link>
        </div>
      </section>
    </div>
  );
}

