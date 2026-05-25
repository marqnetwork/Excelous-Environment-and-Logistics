import { motion, AnimatePresence } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone, ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';

const navItems = [
  { name: 'Home', path: '/' },
  { 
    name: 'Services', 
    path: '#',
    dropdown: [
      { name: 'Disaster Recovery', path: '/services/debris-removal' },
      { name: 'Grease Trap Cleaning', path: '/services/grease-trap' }, 
      { name: 'Bulk Material Hauling', path: '/' },
    ]
  },
  { name: 'Projects', path: '/projects' },
  //{ name: 'Industries', path: '/industries' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const headerActiveColor = scrolled ? 'text-white' : (isHomePage ? 'text-cream' : 'text-dark');
  const logoMainColor = scrolled ? 'text-accent' : (isHomePage ? 'text-white' : 'text-primary');
  const logoSubColor = scrolled ? 'text-white/40' : (isHomePage ? 'text-cream/40' : 'text-dark/40');

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-700 ${
        scrolled ? 'bg-dark/90 backdrop-blur-md text-white shadow-2xl py-4' : `bg-transparent ${isHomePage ? 'text-cream' : 'text-dark'} py-10`
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center pb-4">
        <Link to="/" className="flex flex-col items-center gap-1 group">
          <img src="https://marqnetworks.co/wp-content/uploads/2026/05/White-Logo-bg-removed-2-e1778793613961.png" alt="ECHS Logo" className="w-70 object-contain p-0.5" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-10">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            const itemColor = isActive 
              ? 'text-accent' 
              : scrolled 
                ? 'text-white/70 hover:text-white' 
                : isHomePage 
                  ? 'text-cream/70 hover:text-white' 
                  : 'text-dark/70 hover:text-primary';

            return (
              <div 
                key={item.name} 
                className="relative group"
                onMouseEnter={() => item.dropdown && setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link 
                  to={item.path} 
                  className={`text-xs font-bold uppercase tracking-[0.2em] transition-all relative py-2 block ${itemColor}`}
                >
                  {item.name}
                </Link>
                
                {item.dropdown && (
                  <AnimatePresence>
                    {activeDropdown === item.name && (
                      <motion.div 
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 15 }}
                        className="absolute top-full left-1/2 -translate-x-1/2 bg-primary text-white py-8 min-w-[300px] mt-4 border border-accent/30 shadow-2xl overflow-hidden"
                      >
                        {item.dropdown.map((sub) => (
                          <Link
                            key={sub.name}
                            to={sub.path}
                            className="block px-10 py-3 text-xs font-bold tracking-widest hover:text-accent transition-colors flex items-center justify-between group/item"
                          >
                            {sub.name.toUpperCase()}
                            <ArrowRight size={14} className="opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all" />
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            );
          })}
        </nav>

        {/* Mobile Toggle */}
        <button 
          className={`lg:hidden transition-colors ${scrolled ? 'text-white' : isHomePage ? 'text-cream' : 'text-dark'}`} 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            className="lg:hidden fixed inset-0 bg-primary z-[60] flex flex-col items-center justify-center p-10"
          >
            <button className="absolute top-10 right-10 text-accent" onClick={() => setIsOpen(false)}>
              <X size={32} />
            </button>
            <div className="flex flex-col gap-10 text-center">
              {navItems.map((item) => (
                <div key={item.name}>
                  {item.dropdown ? (
                    <div className="flex flex-col gap-6">
                      <span className="text-3xl font-serif text-accent italic">{item.name}</span>
                      <div className="flex flex-col gap-4">
                        {item.dropdown.map((sub) => (
                          <Link 
                            key={sub.name} 
                            to={sub.path} 
                            className="text-sm font-bold uppercase tracking-widest text-white/70 hover:text-accent transition-colors"
                            onClick={() => setIsOpen(false)}
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link 
                      to={item.path} 
                      className="text-4xl font-serif text-white hover:text-accent transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              <Link 
                to="/contact" 
                className="mt-10 border border-accent text-accent px-12 py-5 text-xs font-bold uppercase tracking-widest hover:bg-accent hover:text-primary transition-all"
                onClick={() => setIsOpen(false)}
              >
                Request Consultation
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-surface text-white pt-32 pb-12 border-t border-accent/20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-20">
        <div className="lg:col-span-5 text-center lg:text-left flex flex-col items-center lg:items-start">
          <Link to="/" className="flex flex-col items-center lg:items-start gap-2 mb-10 group">
            <img src="https://marqnetworks.co/wp-content/uploads/2026/05/White-Logo-bg-removed-2-e1778793613961.png" alt="ECHS Logo" className="w-50 object-contain p-0.5" />
          </Link>
          <p className="font-serif italic text-xl text-white/70 mb-10 max-w-sm">
            "When the environment demands a solution, we deliver excellence."
          </p>
        </div>

        <div className="lg:col-span-3">
          <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-accent mb-10">Solutions</h4>
          <ul className="space-y-6 text-sm font-medium tracking-widest text-white/60">
            <li><Link to="/services/debris-removal" className="hover:text-accent transition-colors">DISASTER RECOVERY</Link></li>
            <li><Link to="/services/grease-trap" className="hover:text-accent transition-colors">GREASE TRAPS</Link></li>
            <li><Link to="/" className="hover:text-accent transition-colors">BULK MATERIAL HAULING</Link></li>
          </ul>
        </div>

        <div className="lg:col-span-3">
          <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-accent mb-10">Company</h4>
          <ul className="space-y-6 text-sm font-medium tracking-widest text-white/60">
            <li><Link to="/projects" className="hover:text-accent transition-colors">PROJECTS</Link></li>
            <li><Link to="/about" className="hover:text-accent transition-colors">ABOUT US</Link></li>
            <li><Link to="/contact" className="hover:text-accent transition-colors">CONTACT</Link></li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 mt-32 pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-10 text-[9px] font-bold tracking-[0.3em] text-white/30 uppercase text-center md:text-left">
        <p>© 2026 Excelous Environmental & Logistics. All rights reserved.</p>
        <p></p>
        <p>Designed by marQnetworks</p>
      </div>
    </footer>
  );
}
