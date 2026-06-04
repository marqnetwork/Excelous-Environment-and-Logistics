import { motion } from 'motion/react';
import { Activity, ShieldCheck, Clock, FileText, Settings, Trash2, CheckCircle2, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  { icon: <Activity />, title: 'Grease Trap Pumping & Cleaning', desc: 'Complete removal of fats, oils, and grease (FOG) accumulation from commercial and institutional grease traps. Scheduled service programs and emergency response available.' },
  { icon: <ShieldCheck />, title: 'Waste Removal & Certified Disposal', desc: 'Compliant transport and disposal of grease trap waste in accordance with local, state, and federal environmental regulations. Full documentation provided.' },
  { icon: <Settings />, title: 'Inspection & Compliance Reporting', desc: 'On-site inspection, condition assessment, and compliance reporting to support FOG ordinance requirements and municipal pretreatment program documentation.' },
  { icon: <Trash2 />, title: 'Preventative Maintenance Programs', desc: 'Customized scheduled maintenance plans to prevent backups, overflows, and inspection failures. Service intervals calibrated to facility usage and regulatory requirements.' },
  { icon: <Activity />, title: 'Repair & Installation Services', desc: 'Repair of damaged or underperforming grease traps and installation of new units for facilities undergoing renovation or capacity expansion.' },
  { icon: <ShieldCheck />, title: 'On-Site Remediation', desc: 'Remediation services for facilities experiencing FOG-related compliance violations, backups, or environmental incidents requiring immediate corrective action.' },
];

const facilities = [
  { icon: <Activity />, title: 'Hotels & Hospitality', desc: 'High-volume kitchen operations with strict health code and municipal FOG compliance requirements.' },
  { icon: <ShieldCheck />, title: 'Universities & Institutions', desc: 'Large-scale food service operations across multiple dining facilities requiring coordinated maintenance schedules.' },
  { icon: <Settings />, title: 'Hospitals & Healthcare Facilities', desc: 'Compliance-critical environments where service disruption and inspection failures carry significant regulatory risk.' },
  { icon: <Trash2 />, title: 'Corporate Campuses & Office Parks', desc: 'On-site dining and cafeteria operations requiring scheduled maintenance and documentation for facilities management teams.' },
  { icon: <Activity />, title: 'Municipal & Government Facilities', desc: 'Government-operated facilities requiring FOG compliance documentation that meets public sector reporting standards.' },
  { icon: <ShieldCheck />, title: 'Restaurants & Food Service Chains', desc: 'Single and multi-location commercial food service operations requiring reliable scheduled service and emergency response coverage.' },
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
            src="https://marqnetworks.co/wp-content/uploads/2026/06/gt-hero-bn.jpg" 
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
              <span className="text-accent font-bold tracking-[0.4em] text-[10px] uppercase">ENVIRONMENTAL COMPLIANCE</span>
              <div className="h-[1px] w-12 bg-accent" />
            </div>
            <h1 className="text-6xl md:text-[7rem] mb-12 font-serif italic text-dark leading-tight">
              <span className="not-italic">Stay Compliant. </span><br/>
              Stay <span className="not-italic text-accent">Operational.</span> 
            </h1>
            <p className="text-xl md:text-2xl text-dark/60 max-w-1xl mx-auto font-light leading-relaxed mb-16 italic">
              "A failed grease trap inspection doesn’t just create a mess — it creates liability. We keep your operations clean, your records inspection-ready, and your facility on the right side of environmental regulations."
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1px] h-9 bg-accent/30" />
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
                  "A failed grease trap inspection doesn’t just create a mess — it creates liability. Excelous provides scheduled and emergency grease trap pumping, waste removal, and compliance documentation for commercial, municipal, and industrial facilities. We keep your operations clean, your records inspection-ready, and your facility on the right side of environmental regulations.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-accent/20 border border-accent/20">
               <div className="bg-cream/20 p-12 text-center group">
                  <Clock className="text-accent mx-auto mb-6 group-hover:scale-110 transition-transform" size={40} />
                  <p className="font-serif italic text-lg text-dark">ROUTINE MAINTENANCE</p>
               </div>
               <div className="bg-cream/20 p-12 text-center group">
                  <FileText className="text-accent mx-auto mb-6 group-hover:scale-110 transition-transform" size={40} />
                  <p className="font-serif italic text-lg text-dark">FIELD EXPERTISE</p>
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-accent/10 border border-accent/10 shadow-sm">
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
            <div className="lg:col-span-12 mb-20 text-center">
               <h2 className="text-4xl md:text-6xl font-serif text-dark italic">Facilities We <span className="text-accent not-italic">Serve.</span></h2>
                <p>Any facility that prepares or serves food at scale has a grease trap compliance obligation. We serve the full range</p>
               <div className="w-24 h-[1px] bg-accent mx-auto mt-8" />
            </div>
            <div className="lg:col-span-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {[
                { 
                  label: 'Hotels & Hospitality', 
                  desc: 'High-volume kitchen operations with strict health code and municipal FOG compliance requirements.', 
                  img: 'https://marqnetworks.co/wp-content/uploads/2026/05/hotel.jpg' 
                },
                { 
                  label: 'Universities & Institutions', 
                  desc: 'Large-scale food service operations across multiple dining facilities requiring coordinated maintenance schedules.', 
                  img: 'https://marqnetworks.co/wp-content/uploads/2026/05/univers.jpg' 
                },
                { 
                  label: 'Hospitals & Healthcare Facilities', 
                  desc: 'Compliance-critical environments where service disruption and inspection failures carry significant regulatory risk.', 
                  img: 'https://marqnetworks.co/wp-content/uploads/2026/05/health.jpg' 
                },
                { 
                  label: 'Corporate Campuses & Office Parks', 
                  desc: 'On-site dining and cafeteria operations requiring scheduled maintenance and documentation for facilities management teams.', 
                  img: 'https://marqnetworks.co/wp-content/uploads/2026/05/corp.jpg' 
                },
                { 
                  label: 'Municipal & Government Facilities', 
                  desc: 'Government-operated facilities requiring FOG compliance documentation that meets public sector reporting standards.', 
                  img: 'https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=800' 
                },
                { 
                  label: 'Restaurants & Food Service Chains', 
                  desc: 'Single and multi-location commercial food service operations requiring reliable scheduled service and emergency response coverage.', 
                  img: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&q=80&w=800' 
                },
              ].map((item, idx) => (
                <div 
                  key={item.label} 
                  className="relative overflow-hidden border border-accent/20 group p-10 min-h-[360px] flex flex-col justify-end bg-dark shadow-md"
                  id={`gt-sector-${idx}`}
                >
                  {/* Background image & gradient overlay */}
                  <div className="absolute inset-0 z-0 bg-dark">
                    <img 
                      src={item.img} 
                      className="w-full h-full object-cover transition-all duration-1000 grayscale group-hover:grayscale-0 brightness-[0.3] group-hover:brightness-[0.4] group-hover:scale-105" 
                      alt={item.label} 
                      referrerPolicy="no-referrer" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark/95 via-dark/70 to-transparent" />
                  </div>
                  
                  {/* Content over background */}
                  <div className="relative z-10 text-left">
                    <h3 className="font-serif italic text-2xl text-cream mb-4 group-hover:text-accent transition-colors leading-tight">
                      {item.label}
                    </h3>
                    <p className="text-xs font-light text-cream/80 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
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
            Initiate a <span className="not-italic text-accent">Maintenance Plan.</span>
          </h2>
          <p className="text-xl text-dark/50 font-light mb-16 leading-relaxed">
            Whether you need a scheduled maintenance program, a compliance audit, or emergency service, Excelous delivers the documentation, the certified disposal, and the reliability your facility depends on.
          </p>
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
            <Link 
              to="/contact" 
              className="bg-dark text-white px-12 py-6 text-[11px] font-bold uppercase tracking-[0.4em] hover:bg-accent transition-colors shadow-2xl"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
