import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, AlertCircle, Clock } from 'lucide-react';
import { useState, FormEvent } from 'react';

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Debris Removal',
    message: ''
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert('Thank you for your inquiry. Our operations team will contact you shortly.');
  };

  return (
    <div className="bg-cream min-h-screen text-dark">
      {/* Header */}
      <section className="pt-48 pb-24 relative overflow-hidden min-h-[60vh] flex items-center">
        <div className="absolute inset-0 z-0 bg-cream">
          <motion.img 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 30, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
            src="https://images.unsplash.com/photo-1523966211575-eb4a01e7dd51?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover brightness-[0.7] opacity-60"
            alt="Contact background"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-cream/20 via-cream/60 to-cream" />
          <div className="absolute inset-0 noise-overlay opacity-5" />
        </div>
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10 w-full">
          <div className="inline-flex items-center gap-6 mb-12">
            <div className="h-[1px] w-12 bg-accent" />
            <span className="text-accent font-bold tracking-[0.4em] text-[10px] uppercase">Direct Engagement</span>
            <div className="h-[1px] w-12 bg-accent" />
          </div>
          <h1 className="text-5xl md:text-[6rem] font-serif text-dark italic leading-tight">
            Consult <span className="not-italic text-accent">Excelous Environmental & Logistics.</span>
          </h1>
          <p className="mt-12 text-xl font-light text-dark/50 max-w-2xl mx-auto italic">
            "Strategic infrastructure support is only a conversation away. Connect with our experts today."
          </p>
        </div>
      </section>

      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-start">
            {/* Contact Details */}
            <div className="lg:col-span-4 space-y-12">
              <div className="p-12 border border-accent/30 bg-cream/20 text-dark shadow-sm">
                <h3 className="text-2xl font-serif mb-12 border-b border-accent/20 pb-4">Operational Contacts</h3>
                <div className="space-y-12">
                  <div className="flex gap-6 items-start">
                    <Mail className="text-accent shrink-0 mt-1" size={24} />
                    <div>
                      <h4 className="text-[10px] font-bold tracking-[0.3em] uppercase text-accent mb-2">Correspondence</h4>
                      <p className="font-serif text-lg text-dark/90">mking@excelousenviro.net</p>
                    </div>
                  </div>
                  <div className="flex gap-6 items-start">
                    <Phone className="text-accent shrink-0 mt-1" size={24} />
                    <div>
                      <h4 className="text-[10px] font-bold tracking-[0.3em] uppercase text-accent mb-2">Voice</h4>
                      <p className="font-serif text-lg text-dark/90">(678) 898 2678</p>
                    </div>
                  </div>
                  <div className="flex gap-6 items-start">
                    <MapPin className="text-accent shrink-0 mt-1" size={24} />
                    <div>
                      <h4 className="text-[10px] font-bold tracking-[0.3em] uppercase text-accent mb-2">Regional Hub</h4>
                      <p className="font-serif text-lg text-dark/90">Georgia</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-8">
              <div className="bg-white p-12 md:p-20 border border-accent/20 shadow-xl relative">
                {/* Decorative Pattern */}
                

                <h2 className="text-4xl font-serif text-dark mb-12 italic leading-tight">Initiate an <span className="not-italic text-accent">Inquiry.</span></h2>
                
                <form onSubmit={handleSubmit} className="space-y-12">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
                    <div className="space-y-4 border-b border-accent/20 pb-4">
                      <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-dark/40">Full Name *</label>
                      <input 
                        required
                        className="w-full bg-transparent border-0 font-serif italic text-xl text-dark p-0 placeholder:text-dark/20 outline-none focus:text-accent transition-colors"
                        placeholder="Ex: Alexander Graham"
                        value={formState.name}
                        onChange={e => setFormState({...formState, name: e.target.value})}
                      />
                    </div>
                    <div className="space-y-4 border-b border-accent/20 pb-4">
                      <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-dark/40">Corporate Entity</label>
                      <input 
                        className="w-full bg-transparent border-0 font-serif italic text-xl text-dark p-0 placeholder:text-dark/20 outline-none focus:text-accent transition-colors"
                        placeholder="Ex: ABC Company"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
                    <div className="space-y-4 border-b border-accent/20 pb-4">
                      <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-dark/40">Email Address *</label>
                      <input 
                        required
                        type="email"
                        className="w-full bg-transparent border-0 font-serif italic text-xl text-dark p-0 placeholder:text-dark/20 outline-none focus:text-accent transition-colors"
                        placeholder="Ex: professional@domain.com"
                        value={formState.email}
                        onChange={e => setFormState({...formState, email: e.target.value})}
                      />
                    </div>
                    <div className="space-y-4 border-b border-accent/20 pb-4">
                      <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-dark/40">Voice Line *</label>
                      <input 
                        required
                        className="w-full bg-transparent border-0 font-serif italic text-xl text-dark p-0 placeholder:text-dark/20 outline-none focus:text-accent transition-colors"
                        placeholder="Ex: +1 (555) 000 0000"
                        value={formState.phone}
                        onChange={e => setFormState({...formState, phone: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="space-y-4 border-b border-accent/20 pb-4 text-left group">
                    <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-dark/40">Area of Interest</label>
                    <select 
                      className="w-full bg-transparent border-0 font-serif italic text-xl text-dark p-0 appearance-none outline-none focus:text-accent transition-colors cursor-pointer"
                      value={formState.service}
                      onChange={e => setFormState({...formState, service: e.target.value})}
                    >
                      <option className="bg-white text-dark">Debris Removal & Recovery</option>
                      <option className="bg-white text-dark">Disaster Response</option>
                      <option className="bg-white text-dark">Grease Trap Maintenance</option>
                      <option className="bg-white text-dark">Consultation & Logistics</option>
                      <option className="bg-white text-dark">Emergency Service</option>
                    </select>
                  </div>

                  <div className="space-y-4 border-b border-accent/20 pb-4 text-left">
                    <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-dark/40">Description of Requirements</label>
                    <textarea 
                      className="w-full bg-transparent border-0 font-serif italic text-xl text-dark p-0 placeholder:text-dark/20 outline-none h-32 resize-none focus:text-accent transition-colors"
                      placeholder="Please delineate your project specifics..."
                      value={formState.message}
                      onChange={e => setFormState({...formState, message: e.target.value})}
                    />
                  </div>

                  <button className="w-full bg-dark text-white py-8 text-[11px] font-bold uppercase tracking-[0.5em] flex items-center justify-center gap-4 hover:bg-accent transition-all duration-500 group">
                    Submit Inquiry <Send size={16} className="group-hover:translate-x-4 transition-transform duration-500" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
