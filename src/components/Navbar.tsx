import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export const Navbar = ({ activePage = 'Home', setActivePage, appLoaded = true }: { activePage?: string, setActivePage?: (page: string, targetId?: string) => void, appLoaded?: boolean }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check window.scrollY or the scrolling element's scrollTop
      const scrollPosition = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
      setIsScrolled(scrollPosition > 50);
    };
    window.addEventListener('scroll', handleScroll, { capture: true, passive: true });
    return () => window.removeEventListener('scroll', handleScroll, { capture: true } as any);
  }, []);

  const menuVariants = {
    closed: {
      opacity: 0,
      clipPath: "inset(24px 5% calc(100% - 96px) 5% round 99px)",
      transition: {
        duration: 0.5,
        ease: [0.76, 0, 0.24, 1] as any
      }
    },
    open: {
      opacity: 1,
      clipPath: "inset(0% 0% 0% 0% round 0px)",
      transition: {
        duration: 0.8,
        ease: [0.76, 0, 0.24, 1] as any
      }
    }
  };

  const navLinks = ["Home", "About Us", "Services", "Case Studies", "Careers", "Contact Us"];

  return (
    <>
      <nav className={`fixed left-1/2 -translate-x-1/2 w-[90%] max-w-[1400px] z-[60] flex justify-between items-center px-6 md:px-8 py-4 rounded-full transition-all duration-500 ${isOpen ? 'top-6 bg-transparent border border-transparent delay-0' : (isScrolled || activePage === 'Contact Us') ? 'top-6 bg-brand-dark/90 backdrop-blur-md shadow-2xl border border-white/10 delay-300' : 'top-6 bg-transparent border border-transparent delay-300'}`}>
        <div 
          className="z-[60] cursor-pointer flex items-center h-10 min-w-[120px]" 
          data-cursor="hover" 
          onClick={() => { if(setActivePage) { setActivePage('Home'); window.scrollTo(0,0); setIsOpen(false); } }}
        >
          {appLoaded ? (
             <motion.img 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }} 
               src="/logo.png" 
               alt="Company Logo" 
               className="h-full object-contain origin-left relative z-[100]" 
             />
          ) : (
             <div className="h-full w-[120px]"></div>
          )}
        </div>
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="z-[60] p-2 hover:opacity-75 transition-opacity text-white"
          data-cursor="hover"
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed inset-0 bg-brand-accent z-40 flex flex-col items-center justify-center"
          >
            <ul className="text-center space-y-6 md:space-y-8">
              {navLinks.map((link, i) => (
                <motion.li 
                  key={link}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + (i * 0.1), duration: 0.5 }}
                >
                  <a 
                    href="#" 
                    onClick={(e) => {
                      e.preventDefault();
                      if(setActivePage) {
                        setActivePage(link);
                        setIsOpen(false);
                        window.scrollTo(0, 0);
                      }
                    }}
                    className={`font-display text-3xl md:text-5xl lg:text-6xl font-black tracking-tight uppercase transition-colors ${activePage === link ? 'text-brand-dark' : 'text-white hover:text-brand-dark'}`} 
                    data-cursor="hover"
                  >
                    {link}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
