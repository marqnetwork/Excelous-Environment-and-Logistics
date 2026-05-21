import { motion } from 'motion/react';
import { Truck, ShieldCheck, Zap, ArrowRight, Quote, Award, Building2, Globe2 } from 'lucide-react';
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
            src="https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&q=80&w=2000" 
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
              Where <span className="text-accent not-italic">Integrity</span> <br/>
              Meets <span className="not-italic">Field</span> Performance.
            </h1>

            <p className="text-xl md:text-2xl text-white/60 max-w-2xl mx-auto mb-16 font-light leading-relaxed">
              Excelous Environmental & Logistics provides elite debris removal, disaster recovery, and industrial grease trap solutions with over 30 years of mission-critical expertise.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
              <Link 
                to="/" 
                className="bg-primary text-white px-12 py-5 text-[11px] font-bold uppercase tracking-[0.3em] hover:bg-accent transition-all duration-500 shadow-2xl"
              >
                Capability Statement
              </Link>
            </div>
          </motion.div>
        </div>
        
        {/* Ornaments */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1px] h-32 bg-accent/30" />
      </section>

      {/* Credibility Ribbons */}
      <section className="py-20 bg-surface border-y border-accent/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {[
              { icon: <Award className="text-accent mx-auto mb-4" size={32} />, label: 'SBA 8(A) CERTIFIED' },
              { icon: <Building2 className="text-accent mx-auto mb-4" size={32} />, label: 'EDWOSB FIRM' },
              { icon: <Globe2 className="text-accent mx-auto mb-4" size={32} />, label: 'GSA MAS HOLDER' },
              { icon: <ShieldCheck className="text-accent mx-auto mb-4" size={32} />, label: 'DUNS REGISTERED' },
            ].map((item, i) => (
              <motion.div 
                key={item.label}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: i * 0.2 }}
              >
                {item.icon}
                <div className="text-[9px] font-bold tracking-[0.4em] text-accent uppercase">{item.label}</div>
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
                <div className="text-accent font-bold tracking-[0.4em] text-[10px] uppercase mb-6 flex items-center gap-4">
                   <div className="w-8 h-[1px] bg-accent" /> SERVICE 01
                </div>
                <h3 className="text-4xl md:text-6xl font-serif text-white mb-8 italic">Debris <span className="not-italic text-accent">Removal</span> & Disaster Recovery.</h3>
                <p className="text-lg text-white/60 mb-10 leading-relaxed font-light">
                  When disaster strikes, community recovery depends on rapid, systematic debris removal. We specialize in FEMA-compliant operations across the Southeast, restoring safety and order following catastrophic events.
                </p>
                <Link to="/services/debris-removal" className="inline-flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.3em] text-accent border-b border-accent pb-2 hover:text-white transition-colors">
                  Explore Capacity <ArrowRight size={14} />
                </Link>
              </motion.div>
              <div className="order-1 lg:order-2 p-4 border border-accent/20">
                <div className="h-[500px] overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000">
                   <img src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover" alt="Heavy equipment" referrerPolicy="no-referrer" />
                </div>
              </div>
            </div>

            {/* Service 2 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
              <div className="p-4 border border-accent/20">
                <div className="h-[500px] overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000">
                   <img src="https://images.unsplash.com/photo-1558403194-611308249627?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover" alt="Industrial service" referrerPolicy="no-referrer" />
                </div>
              </div>
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
              >
                <div className="text-accent font-bold tracking-[0.4em] text-[10px] uppercase mb-6 flex items-center gap-4">
                   <div className="w-8 h-[1px] bg-accent" /> SERVICE 02
                </div>
                <h3 className="text-4xl md:text-6xl font-serif text-white mb-8 italic">Grease Trap <span className="not-italic text-accent">Cleaning</span> & Management.</h3>
                <p className="text-lg text-white/60 mb-10 leading-relaxed font-light">
                  Providing turnkey grease trap solutions for the institutional and commercial sectors. Our scheduled maintenance programs ensure total compliance, odor-free environments, and smooth operational flow.
                </p>
                <Link to="/services/grease-trap" className="inline-flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.3em] text-accent border-b border-accent pb-2 hover:text-white transition-colors">
                  View Solutions <ArrowRight size={14} />
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-40 bg-dark border-y border-accent/10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Quote size={48} className="text-accent mx-auto mb-12 opacity-50" />
          <h2 className="text-3xl md:text-5xl font-serif text-white italic leading-tight mb-12">
            "At Excelous, we don't just clear paths or pump lines. We restore the foundations that allow businesses and communities to thrive. Our legacy is built on the trust of the agencies we serve and the results we deliver in the field."
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
            <span className="relative text-[11px] font-bold tracking-[0.5em] uppercase">Request Consultation</span>
          </Link>
        </div>
      </section>
    </div>
  );
}

