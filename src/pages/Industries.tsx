import { motion } from 'motion/react';
import { Landmark, Warehouse, UtensilsCrossed, Hospital, Construction, Zap, ShieldCheck } from 'lucide-react';

const industries = [
  {
    title: 'Municipal & Government',
    icon: <Landmark />,
    desc: 'Supporting storm cleanup and disaster recovery with FEMA-compliant documentation urgency.'
  },
  {
    title: 'Federal Agencies',
    icon: <Zap />,
    desc: 'Bringing institutional credibility from NASA and GSA to mission-critical recovery environments.'
  },
  {
    title: 'Commercial Real Estate',
    icon: <Warehouse />,
    desc: 'Premium grease trap maintenance for high-end retail centers and commercial properties.'
  },
  {
    title: 'Restaurant & Food Service',
    icon: <UtensilsCrossed />,
    desc: 'Ensuring absolute compliance and odor-free environments for luxury hospitality.'
  },
  {
    title: 'Healthcare & Institutional',
    icon: <Hospital />,
    desc: 'Precision maintenance with minimal disruption for hospital and university infrastructure.'
  },
  {
    title: 'Construction & Development',
    icon: <Construction />,
    desc: 'Systematic site cleanup and debris coordination for the region\'s premier developers.'
  }
];

export default function Industries() {
  return (
    <div className="bg-cream min-h-screen text-dark">
      {/* Header */}
      <section className="pt-48 pb-32 relative overflow-hidden min-h-[60vh] flex items-center">
        <div className="absolute inset-0 z-0 bg-cream">
          <motion.img 
            initial={{ scale: 1.15 }}
            animate={{ scale: 1 }}
            transition={{ duration: 25, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover brightness-[0.7] opacity-60"
            alt="Infrastructure background"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-cream/20 via-cream/60 to-cream" />
          <div className="absolute inset-0 noise-overlay opacity-5" />
        </div>
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10 w-full">
          <div className="inline-flex items-center gap-6 mb-12">
            <div className="h-[1px] w-12 bg-accent" />
            <span className="text-accent font-bold tracking-[0.4em] text-[10px] uppercase">Market Sectors</span>
            <div className="h-[1px] w-12 bg-accent" />
          </div>
          <h1 className="text-5xl md:text-[6rem] font-serif text-dark italic leading-tight">
            Industries We <span className="not-italic">Serve.</span>
          </h1>
          <p className="mt-12 text-xl font-light text-dark/60 max-w-2xl mx-auto italic">
            "Providing specialized environmental and logistics solutions for agencies and enterprises that demand the highest standards of field performance."
          </p>
        </div>
      </section>

      {/* Industry Grid */}
      <section className="py-40 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-accent/20 border border-accent/20 overflow-hidden shadow-sm">
            {industries.map((ind, i) => (
              <motion.div 
                key={ind.title}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-cream/10 p-20 text-center hover:bg-cream group transition-all duration-700"
              >
                <div className="text-accent mb-10 flex justify-center group-hover:scale-110 transition-transform">
                  {ind.icon}
                </div>
                <h3 className="text-3xl font-serif text-dark mb-6 group-hover:text-accent transition-colors">{ind.title}</h3>
                <p className="text-dark/60 font-light leading-relaxed group-hover:text-dark transition-colors">
                  {ind.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Infrastructure CTA Section */}
      <section className="py-40 bg-cream">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">
            <div className="lg:col-span-5">
              <div className="p-4 border border-accent/20 h-full bg-white shadow-sm">
                <img 
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=1200" 
                  className="w-full h-full object-cover brightness-95"
                  alt="Infrastructure" 
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            <div className="lg:col-span-7">
              <div className="inline-block border-l-4 border-accent pl-8 mb-10">
                <h2 className="text-4xl font-serif text-dark italic">Infrastructure & <span className="not-italic text-accent">Utilities.</span></h2>
              </div>
              <p className="text-xl text-dark/50 font-light leading-relaxed mb-12">
                Our support for utility companies and infrastructure contractors extends beyond basic logistics. We bring the professional rigor of federal contracting to right-of-way clearing, environmental cleanup, and post-storm recovery.
              </p>
              <div className="flex items-center gap-6 p-10 border border-accent/20 bg-white/50">
                <ShieldCheck size={40} className="text-accent shrink-0" />
                <p className="font-serif italic text-lg text-dark">
                  "Every project is executed according to rigorous regulatory standards and field-tested safety protocols."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
