import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Navbar } from './components/Navbar';
import { Loader } from './components/Loader';
import { Hero } from './components/Hero';
import { Marquee } from './components/Marquee';
import { Services } from './components/Services';
import { HomeServices } from './components/HomeServices';
import { Footer } from './components/Footer';
import { About } from './components/About';
import { CaseStudies } from './components/CaseStudies';
import { CaseStudyDetail } from './components/CaseStudyDetail';
import { ContactUs } from './components/ContactUs';
import { Careers } from './components/Careers';

function App() {
  const [appLoaded, setAppLoaded] = useState(false);
  const [activePage, setActivePage] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = sessionStorage.getItem('paradx_activePage');
      if (saved) return saved;
    }
    return 'Home';
  });
  const [selectedClient, setSelectedClient] = useState<string | null>(() => {
    if (typeof window !== 'undefined') {
      const saved = sessionStorage.getItem('paradx_selectedClient');
      if (saved) return saved;
    }
    return null;
  });
  const [transitionState, setTransitionState] = useState<{ active: boolean, page: string, targetId?: string }>({ active: false, page: '' });

  useEffect(() => {
    // Artificial delay to mimic asset loading and showcase the brutalist splash screen
    const timer = setTimeout(() => {
      setAppLoaded(true);
    }, 2400); // 2.4s gives enough time for the X to pulse before launching
    return () => clearTimeout(timer);
  }, []);

  const handlePageChange = (page: string, targetId?: string, clientId?: string) => {
    if (page === activePage && !targetId && !clientId) return;
    
    // Trigger overlay entrance
    setTransitionState({ active: true, page, targetId });
    if (clientId) {
      setSelectedClient(clientId);
      if (typeof window !== 'undefined') sessionStorage.setItem('paradx_selectedClient', clientId);
    }
    
    // Once expanded: swap the actual view while hidden
    setTimeout(() => {
      setActivePage(page);
      if (typeof window !== 'undefined') sessionStorage.setItem('paradx_activePage', page);
      
      // Delay to allow DOM to render before targeting elements
      setTimeout(() => {
        if (targetId) {
          const el = document.getElementById(targetId);
          if (el) {
            const y = el.getBoundingClientRect().top + window.scrollY - 100;
            window.scrollTo({ top: y, behavior: 'auto' });
          }
        } else {
          window.scrollTo(0, 0);
        }
      }, 50);

      // Dismiss overlay
      setTimeout(() => {
        setTransitionState((prev) => ({ ...prev, active: false }));
      }, 400);

    }, 800); // 0.8s to fully expand from the navbar
  };

  return (
    <div className="bg-brand-dark min-h-screen text-brand-light relative overflow-x-hidden">
      
      {/* Absolute FLIP Splash Screen */}
      <AnimatePresence>
        {!appLoaded && <Loader />}
      </AnimatePresence>

      {/* Main Layout hidden underneath until splash fires its flight sequence */}
      <div className={`transition-opacity duration-[1.2s] ease-[cubic-bezier(0.76,0,0.24,1)] ${appLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <Navbar activePage={activePage} setActivePage={handlePageChange} appLoaded={appLoaded} />
        
        <AnimatePresence mode="wait">
        {transitionState.active && (
          <motion.div 
            key="page-transition-overlay"
            initial={{ 
              clipPath: "inset(24px 5% calc(100vh - 96px) 5% round 999px)",
              backgroundColor: "#0a0a0a"
            }}
            animate={{ 
              clipPath: "inset(0px 0% 0px 0% round 0px)",
              backgroundColor: "#00e5ff"
            }}
            exit={{ 
              clipPath: "inset(24px 5% calc(100vh - 96px) 5% round 999px)",
              backgroundColor: "#0a0a0a"
            }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[150] flex items-center justify-center overflow-hidden"
          >
            <motion.h2 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ delay: 0.3, duration: 0.4 }}
              className="font-display font-black text-6xl md:text-8xl lg:text-[10rem] uppercase tracking-tighter text-brand-dark"
            >
              {transitionState.page}
            </motion.h2>
          </motion.div>
        )}
      </AnimatePresence>

      {activePage === 'Home' && (
        <>
          <Hero />
          <HomeServices setActivePage={handlePageChange} />
          <Marquee />
        </>
      )}

      {activePage === 'About Us' && (
        <About setActivePage={handlePageChange} />
      )}

      {activePage === 'Services' && (
        <Services />
      )}

      {activePage === 'Case Studies' && (
        <CaseStudies setActivePage={handlePageChange} />
      )}

      {activePage === 'Case Study Detail' && selectedClient && (
        <CaseStudyDetail clientId={selectedClient} onBack={() => handlePageChange('Case Studies')} setActivePage={handlePageChange} />
      )}

      {activePage === 'Careers' && (
        <Careers />
      )}

      {activePage === 'Contact Us' && (
        <ContactUs />
      )}

      {activePage !== 'Case Study Detail' && activePage !== 'Contact Us' && <Footer setActivePage={handlePageChange} />}
      </div>
    </div>
  );
}

export default App;
