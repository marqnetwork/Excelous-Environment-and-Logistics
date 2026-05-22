import { motion } from 'motion/react';
import { Activity, ShieldCheck, Clock, FileText, Settings, Trash2, CheckCircle2, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  { icon: <Activity />, title: 'Pumping & Cleaning', desc: 'Precise extraction of fats, oils, and grease (FOG) followed by thorough wall and pipe sanitation.' },
  { icon: <ShieldCheck />, title: 'Inspection & Compliance', desc: 'Verified reports formatted to meet specific regional pretreatment requirements after every field visit.' },
  { icon: <Settings />, title: 'Operational Repair', desc: 'On-site remediation or replacement of damaged interceptor components to ensure continuous flow.' },
  { icon: <Trash2 />, title: 'Installation Services', desc: 'Total coordination for new or upgraded indoor and outdoor grease interceptors for institutional kitchens.' },
];

export default function GreaseTrap() {
  return (
    <div className="bg-cream min-h-screen text-dark">
      {/* Editorial Hero */}
      <section className="relative min-h-[80vh] flex items-center pt-32 overflow-hidden bg-cream text-dark">
        <div className="absolute inset-0 z-0 bg-cream">
          <motion.img 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 15, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
            src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover brightness-[0.7] opacity-60"
            alt="Industrial kitchen background"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-cream/20 via-cream/60 to-cream" />
          <div className="absolute inset-0 noise-overlay opacity-5" />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
          >
            <div className="inline-flex items-center gap-6 mb-12">
              <div className="h-[1px] w-12 bg-accent" />
              <span className="text-accent font-bold tracking-[0.4em] text-[10px] uppercase">Infrastructure Integrity</span>
              <div className="h-[1px] w-12 bg-accent" />
            </div>
            <h1 className="text-5xl md:text-[6rem] mb-12 font-serif italic text-dark leading-tight">
              <span className="not-italic text-accent">Grease Trap Solutions</span><br/>
              Built for Operational <span className="not-italic">Reliability.</span> 
            </h1>
            <p className="text-xl text-dark/60 max-w-2xl mx-auto font-light leading-relaxed mb-16 italic">
              "Comprehensive maintenance and compliance solutions that keep your culinary operations odor-free and systematically compliant."
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1px] h-24 bg-accent/30" />
      </section>

      {/* Narrative Section */}
      <section className="py-40 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div>
              <div className="inline-block border-l-4 border-accent pl-8 mb-10">
                <h2 className="text-4xl md:text-5xl font-serif text-dark italic">Systematic. Licensed. <span className="not-italic text-accent">Clean.</span></h2>
              </div>
              <div className="space-y-8 text-xl font-light text-dark/60 leading-relaxed italic">
                <p>
                  "Grease traps are a critical foundation of any institutional kitchen. When neglected, they risk foul odors, health code violations, and costly operational delays."
                </p>
                <p>
                  Excelous Environmental & Logistics delivers the executive rigor of federal contracting to your scheduled maintenance program, ensuring absolute compliance through licensed field expertise.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-accent/20 border border-accent/20">
               <div className="bg-cream/20 p-12 text-center group">
                  <Clock className="text-accent mx-auto mb-6 group-hover:scale-110 transition-transform" size={40} />
                  <h4 className="text-[10px] font-bold tracking-[0.4em] text-dark uppercase mb-2">Availability</h4>
                  <p className="font-serif italic text-lg text-dark">24/7 Response</p>
               </div>
               <div className="bg-cream/20 p-12 text-center group">
                  <FileText className="text-accent mx-auto mb-6 group-hover:scale-110 transition-transform" size={40} />
                  <h4 className="text-[10px] font-bold tracking-[0.4em] text-dark uppercase mb-2">Documentation</h4>
                  <p className="font-serif italic text-lg text-dark">Total Compliance</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capacities Grid */}
      <section className="py-40 bg-cream/30 border-y border-accent/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-32">
            <h2 className="text-4xl md:text-6xl font-serif text-dark italic">Operational <span className="text-accent not-italic">Capabilities.</span></h2>
            <div className="w-24 h-[1px] bg-accent mx-auto mt-8" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-accent/10 border border-accent/10 shadow-sm">
            {services.map((service, i) => (
              <motion.div 
                key={service.title}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-12 hover:bg-cream/50 transition-colors group"
              >
                <div className="text-accent mb-10 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-serif text-dark mb-6">{service.title}</h3>
                <p className="text-dark/60 font-light leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-40 bg-white text-dark">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">
            <div className="lg:col-span-12 mb-12 text-center">
               <h2 className="text-4xl md:text-[4rem] font-serif italic leading-tight text-dark">Institutional <span className="not-italic text-accent">Sectors</span> We Protect.</h2>
               <div className="w-24 h-[1px] bg-accent mx-auto mt-8" />
            </div>
            <div className="lg:col-span-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 text-center">
              {[
                { label: 'Hotels & Hospitality', img: 'https://marqnetworks.co/wp-content/uploads/2026/05/hotel.jpg' },
                { label: 'Universities & Schools', img: 'https://marqnetworks.co/wp-content/uploads/2026/05/univers.jpg' },
                { label: 'Healthcare & Hospitals', img: 'https://marqnetworks.co/wp-content/uploads/2026/05/health.jpg' },
                { label: 'Corporate Hubs', img: 'https://marqnetworks.co/wp-content/uploads/2026/05/corp.jpg' },
              ].map(item => (
                <div key={item.label} className="group">
                  <div className="aspect-square border border-accent/20 p-2 mb-6 grayscale group-hover:grayscale-0 transition-all duration-1000">
                     <img src={item.img} className="w-full h-full object-cover brightness-95" alt={item.label} referrerPolicy="no-referrer" />
                  </div>
                  <h4 className="text-accent font-serif italic text-lg">{item.label}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-40 bg-cream text-center">
        <div className="max-w-4xl mx-auto px-6">
          <div className="w-[1px] h-24 bg-accent mx-auto mb-12" />
          <h2 className="text-4xl md:text-6xl font-serif text-dark mb-12 italic leading-tight">
            Initiate a <span className="not-italic text-accent">Maintenance</span> Plan.
          </h2>
          <p className="text-xl text-dark/50 font-light mb-16 leading-relaxed">
            Protect your institutional operations from the risks of neglected environmental infrastructure.
          </p>
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
            <Link 
              to="/contact" 
              className="bg-dark text-white px-12 py-6 text-[11px] font-bold uppercase tracking-[0.4em] hover:bg-accent transition-colors shadow-2xl"
            >
              Request Consultation
            </Link>
            <Link 
              to="/industries" 
              className="text-dark text-[11px] font-bold uppercase tracking-[0.4em] border-b border-accent pb-2 hover:text-accent transition-colors"
            >
              Sector Expertise <ChevronRight size={14} className="inline ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
