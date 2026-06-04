import { motion } from 'motion/react';
import { Truck, AlertTriangle, ShieldCheck, Waves, Trees, Drill, Building2, Anchor, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const capabilities = [
  { icon: <AlertTriangle />, title: 'Dirt, Gravel & Aggregate Hauling', desc: 'High-volume transport of dirt, gravel, crushed stone, and aggregate materials for DOT road construction, site grading, and infrastructure restoration projects.' },
  { icon: <Truck />, title: 'Sand & Fill Material Transport', desc: 'Coordinated hauling of sand and fill materials for foundation work, drainage projects, and post-disaster site stabilization operations.' },
  { icon: <Trees />, title: 'Construction Debris Removal', desc: 'Scheduled and on-demand removal of construction waste, demolished materials, and site debris to keep active project sites clear and compliant.' },
  { icon: <Drill />, title: 'Disaster Recovery Material Hauling', desc: 'Rapid mobilization of hauling capacity for debris removal, recovery material transport, and infrastructure restoration following FEMA-declared disaster events.' },
  { icon: <Building2 />, title: 'Multi-Site Logistics Coordination', desc: 'Coordinated material movement across multiple project sites and jurisdictions. Scheduling, routing, and documentation managed to meet federal and state contract requirements.' },
  { icon: <Anchor />, title: 'Asphalt & Road Material Hauling', desc: 'Transport of asphalt, base course materials, and road construction supplies for DOT paving, resurfacing, and infrastructure repair projects.' },
];

const serve = [
  { icon: <AlertTriangle />, title: 'State & Federal DOT', desc: 'Road construction, resurfacing, and infrastructure restoration projects requiring reliable high-volume material transport and DOT-compliant documentation.' },
  { icon: <Truck />, title: 'FEMA Disaster Recovery Operations', desc: 'Rapid-mobilization hauling support for debris removal and infrastructure restoration following federally declared disaster events.' },
  { icon: <Trees />, title: 'Tier 1 Prime Contractors', desc: 'Scalable subcontract hauling capacity that meets the documentation, compliance, and scheduling standards of large federal and state prime contracts.' },
  { icon: <Drill />, title: 'General Contractors', desc: 'On-call and scheduled hauling for commercial and industrial construction projects requiring flexible capacity and reliable delivery coordination.' },
  { icon: <Building2 />, title: 'Environmental & Remediation Firms', desc: 'Material transport support for environmental cleanup, soil remediation, and site restoration projects operating under federal and state oversight.' },
  { icon: <Anchor />, title: 'Municipal Public Works', desc: 'Hauling support for municipal infrastructure maintenance, road repair, and public works projects at the local and regional level.' },
];

export default function BulkMaterialHauling() {
  return (
    <div className="bg-cream min-h-screen text-dark">
      {/* Editorial Hero */}
      <section className="relative min-h-[80vh] flex items-center pt-32 overflow-hidden bg-cream text-dark">
        <div className="absolute inset-0 z-0 bg-cream">
          <motion.img 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 15, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
            src="https://marqnetworks.co/wp-content/uploads/2026/06/bulk-materia-hero-banner.jpg" 
            className="w-full h-full object-cover brightness-[0.7] opacity-60"
            alt="Bulk Material Hauling"
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
              <span className="text-accent font-bold tracking-[0.4em] text-[10px] uppercase">INFRASTRUCTURE LOGISTICS</span>
              <div className="h-[1px] w-12 bg-accent" />
            </div>
            <h1 className="text-6xl md:text-[7rem] mb-12 font-serif italic text-dark leading-tight">
              Moving <span className="not-italic">Materials.</span><br/>
              Delivering <span className="not-italic text-accent">Results.</span>
            </h1>
            <p className="text-xl md:text-2xl text-dark/60 max-w-1xl mx-auto font-light leading-relaxed mb-6 italic">
              "DOT infrastructure and recovery projects move on tight schedules — and material delays stop everything. We provide the fleet capacity and logistical coordination to keep your project on timeline."
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1px] h-9 bg-accent/30" />
      </section>

      {/* Intro Narrative */}
      <section className="py-40 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-2xl md:text-3xl font-serif text-dark italic leading-relaxed mb-12">
              DOT infrastructure and recovery projects move on tight schedules — and material delays stop everything. Excelous hauls dirt, gravel, aggregate, sand, and construction materials across local, regional, and multi-site operations with the fleet capacity and logistical coordination to keep your project on timeline. From single-site support to high-volume multi-state material movement, we scale to the contract.
            </p>
            <div className="flex flex-wrap justify-center gap-12 font-bold tracking-[0.3em] uppercase text-[10px] text-accent pt-12 border-t border-accent/10">
              {['North Carolina Response', 'Virginia Recovery', 'Florida Mobilization'].map(state => (
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
            <h2 className="text-4xl md:text-6xl font-serif text-dark italic">Operational <span className="text-accent not-italic">Capabilities.</span></h2>
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

      {/* Serve Grid - Classic Flow */}
      <section className="py-40 bg-cream/30 border-y border-accent/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-32">
            <h2 className="text-4xl md:text-6xl font-serif text-dark italic">Who We <span className="text-accent not-italic">Serve.</span></h2>
            <p>From federal infrastructure contracts to commercial construction sites, we move the materials that keep projects moving.</p>
            <div className="w-24 h-[1px] bg-accent mx-auto mt-8" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-accent/10 border border-accent/10 shadow-sm">
            {serve.map((cap, i) => (
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
               <h2 className="text-4xl md:text-[4rem] font-serif text-dark italic leading-tight">Field-Proven Hauling<br/>operations.</h2>
            </div>
            <div className="lg:col-span-7">
               <div className="p-4 border border-accent/20 mb-8 lg:mb-0 bg-cream/20">
                 <img src="https://marqnetworks.co/wp-content/uploads/2026/05/past-performance.jpg" className="w-full h-full object-cover brightness-95" alt="Storm cleanup site" referrerPolicy="no-referrer" />
               </div>
            </div>
            <div className="lg:col-span-5">
              <div className="space-y-12">
                <div className="border-l-4 border-accent pl-10 py-4">
                  <h4 className="text-xl font-serif text-dark italic mb-2">Past Performance Highlights</h4>
                  <p className="text-sm font-bold uppercase tracking-widest text-accent mb-4">RELIABLE. SCALABLE. ON SCHEDULE.</p>
                  <p className="text-dark/60 font-light leading-relaxed">
                    Our hauling operations span DOT infrastructure projects, post-disaster debris removal, and commercial construction support across multiple states. Every engagement is executed with the fleet capacity, scheduling discipline, and compliance documentation that federal and state contracts require.
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
          <h2 className="text-5xl md:text-[7rem] font-serif italic mb-12 leading-tight text-dark">Ready to <span className="not-italic text-accent">Move.</span></h2>
          <p className="text-xl text-dark/50 mb-16 font-light leading-relaxed max-w-2xl mx-auto">
            Whether you’re managing a multi-state DOT contract, responding to a disaster activation, or running a commercial construction project on a tight timeline — Excelous provides the fleet capacity, the coordination, and the documentation to keep materials moving and projects on schedule.
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
