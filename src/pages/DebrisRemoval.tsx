import { motion } from 'motion/react';
import { Truck, AlertTriangle, ShieldCheck, Waves, Trees, Drill, Building2, Anchor, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const capabilities = [
  { icon: <AlertTriangle />, title: 'Storm & Hurricane Response', desc: 'FEMA-compliant collection and removal of vegetative and construction debris following severe weather events. Crews deploy rapidly with the equipment and capacity to handle large-scale post-storm operations.' },
  { icon: <Truck />, title: 'Full-Cycle Disaster Recovery', desc: 'Site assessment, debris categorization, haul-off, and certified disposal across federal, state, and local project environments. We manage the full recovery process from initial assessment through final documentation.' },
  { icon: <Trees />, title: 'Emergency Tree Management', desc: 'Certified crews equipped with heavy-duty machinery for systematic assessment and removal of hazardous trees. FEMA-eligible work type with full documentation support.' },
  { icon: <Drill />, title: 'Bulk Material Hauling', desc: 'High-volume haul-off of disaster debris, construction materials, and recovery-related materials across single and multi-site operations. Fleet capacity scaled to contract requirements.' },
  { icon: <Building2 />, title: 'Right-of-Way Operations', desc: 'DOT-coordinated clearing of roadways and public infrastructure pathways to restore access for emergency response teams, utility crews, and the public.' },
  { icon: <Anchor />, title: 'Marine Salvage & Survey', desc: 'Advanced marine surveying and large-scale salvage operations for waterway debris and submerged infrastructure. A differentiated capability supporting coastal and flood-affected disaster response.' },
];

export default function DebrisRemoval() {
  return (
    <div className="bg-cream min-h-screen text-dark">
      {/* Editorial Hero */}
      <section className="relative min-h-[80vh] flex items-center pt-32 overflow-hidden bg-cream text-dark">
        <div className="absolute inset-0 z-0 bg-cream">
          <motion.img 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 15, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
            src="https://marqnetworks.co/wp-content/uploads/2026/05/Debris-removal.webp" 
            className="w-full h-full object-cover brightness-[0.7] opacity-60"
            alt="Recovery background"
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
              <span className="text-accent font-bold tracking-[0.4em] text-[10px] uppercase">Strategic Response</span>
              <div className="h-[1px] w-12 bg-accent" />
            </div>
            <h1 className="text-5xl md:text-[5rem] mb-12 font-serif italic text-dark leading-tight">
              Disaster <span className="not-italic">&</span> Response. <br/>
              At <span className="not-italic text-accent">Scale.</span>
            </h1>
            <p className="text-xl text-dark/60 max-w-2xl mx-auto font-light leading-relaxed mb-16 italic">
              When disaster strikes, recovery doesn’t happen by chance — it happens through systematic deployment, coordinated logistics, and field teams that know how to execute under pressure. We provide the operational scale that federal, state, and local recovery efforts demand.”
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1px] h-24 bg-accent/30" />
      </section>

      {/* Intro Narrative */}
      <section className="py-40 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-2xl md:text-3xl font-serif text-dark italic leading-relaxed mb-12">
              When disaster hits, the clock starts immediately. Excelous deploys hauling crews, site cleanup teams, and emergency logistics support within hours of activation — not days. We operate under federal and state disaster frameworks, supporting FEMA-coordinated response efforts and DOT infrastructure restoration with the speed and compliance that critical recovery operations demand.
            </p>
            <div className="flex flex-wrap justify-center gap-12 font-bold tracking-[0.3em] uppercase text-[10px] text-accent pt-12 border-t border-accent/10">
              {['North Carolina Response - Hurricane debris removal and road clearance', 'Virginia Recovery - Multi-site workforce deployment', 'Florida Mobilization - Rapid response activation within 48 hours'].map(state => (
                <span key={state} className="flex items-center gap-3">
                  <ShieldCheck size={16} /> {state}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Grid - Classic Flow */}
      <section className="py-40 bg-cream/30 border-y border-accent/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-32">
            <h2 className="text-4xl md:text-6xl font-serif text-dark italic">Service <span className="text-accent not-italic">Capabilities.</span></h2>
            <div className="w-24 h-[1px] bg-accent mx-auto mt-8" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-accent/10 border border-accent/10 shadow-sm">
            {capabilities.map((cap, i) => (
              <motion.div 
                key={cap.title}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-12 hover:bg-cream/50 transition-colors group"
              >
                <div className="text-accent mb-10 group-hover:scale-110 transition-transform duration-500">
                  {cap.icon}
                </div>
                <h3 className="text-2xl font-serif text-dark mb-6">{cap.title}</h3>
                <p className="text-dark/50 font-light leading-relaxed">{cap.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Performance */}
      <section className="py-40 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">
            <div className="lg:col-span-12 mb-12">
               <div className="text-accent font-bold tracking-[0.4em] text-[10px] uppercase mb-4">Past Performance Highlights</div>
               <h2 className="text-4xl md:text-[4rem] font-serif text-dark italic leading-tight">Field proven recovery<br/>operations.</h2>
            </div>
            <div className="lg:col-span-7">
               <div className="p-4 border border-accent/20 mb-8 lg:mb-0 bg-cream/20">
                 <img src="https://marqnetworks.co/wp-content/uploads/2026/06/services-DR.jpg" className="w-full h-full object-cover brightness-95" alt="Storm cleanup site" referrerPolicy="no-referrer" />
               </div>
            </div>
            <div className="lg:col-span-5">
              <div className="space-y-12">
                <div className="border-l-4 border-accent pl-10 py-4">
                  <h4 className="text-xl font-serif text-dark italic mb-2">Past Performance Highlights</h4>
                  <p className="text-sm font-bold uppercase tracking-widest text-accent mb-4">Proven. Coordinated. Trusted.</p>
                  <p className="text-dark/60 font-light leading-relaxed">
                    Our past performance spans hurricane response, infrastructure debris removal, and emergency logistics across multiple states. Every project in our portfolio was executed under federal or state contract frameworks — on time, documented, and delivered.
                  </p>
                </div>
                <Link to="/projects" className="inline-flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.4em] text-dark border-b border-accent pb-2 hover:text-accent transition-colors">
                  Full Performance History <ChevronRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency CTA */}
      <section className="py-40 bg-cream text-dark text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <h2 className="text-5xl md:text-[7rem] font-serif italic mb-12 leading-tight text-dark">Ready to <span className="not-italic text-accent">Mobilize.</span></h2>
          <p className="text-xl text-dark/50 mb-16 font-light leading-relaxed max-w-2xl mx-auto">
            Whether executing a long-term recovery plan or responding to an active emergency, Excelous provides the field capacity, compliance documentation, and operational scale your project demands.
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
