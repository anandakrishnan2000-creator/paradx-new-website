import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

import logo1 from '../assets/clients/ISAFE INTERNATIONAL.png';
import logo2 from '../assets/clients/ORCHID TREE.png';
import logo3 from '../assets/clients/PES UNIVERSITY.png';
import logo4 from '../assets/clients/SALAD SHAK.png';
import logo5 from '../assets/clients/VIP.png';
import logo6 from '../assets/clients/VOGUE SHADE.png';

const caseStudies = [
  {
    id: "isafe",
    title: "ISAFE INTERNATIONAL",
    logo: logo1,
  },
  {
    id: "orchid-tree",
    title: "ORCHID TREE",
    logo: logo2,
  },
  {
    id: "vip",
    title: "VIP",
    logo: logo5,
  },
  {
    id: "pes",
    title: "PES UNIVERSITY",
    logo: logo3,
  },
  {
    id: "vogue-shade",
    title: "VOGUE SHADE",
    logo: logo6,
  },
  {
    id: "salad-shak",
    title: "SALAD SHAK",
    logo: logo4,
  }
];

export const CaseStudies = ({ setActivePage }: { setActivePage?: (page: string, targetId?: string, clientId?: string) => void }) => {
  return (
    <div className="bg-brand-dark min-h-screen text-brand-light relative z-10">
      {/* Hero Section */}
      <section className="relative w-full min-h-[70vh] pt-24 flex flex-col items-center justify-center overflow-hidden px-6">
        {/* Team Collaboration Background (Mirrored from About Us) */}
        <div className="absolute inset-0 z-0 overflow-hidden bg-brand-dark">
          <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2000&auto=format&fit=crop" alt="Team Collaboration" className="w-full h-full object-cover opacity-30 select-none pointer-events-none scale-105 filter grayscale mix-blend-luminosity" />
          <div className="absolute inset-0 bg-brand-accent/5 mix-blend-overlay"></div>
          {/* Main darkening gradient to protect white text while revealing the top image */}
          <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/20 via-brand-dark/80 to-brand-dark z-10 pointer-events-none"></div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="relative z-10 text-center w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12"
        >
          {/* Left Side: Mockup Collage */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-start relative h-[400px]">
             {/* Simulating a floating phone mockup / collateral */}
             <motion.div 
               animate={{ y: [0, -15, 0] }}
               transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
               className="w-48 md:w-64 h-80 md:h-[400px] bg-brand-light rounded-[3rem] p-3 shadow-2xl shadow-brand-accent/20 border-4 border-brand-dark/50 overflow-hidden relative z-20"
             >
               <img src="/svc_6.png" className="w-full h-full object-cover rounded-[2.5rem]" alt="Phone mockup" />
             </motion.div>


          </div>

          {/* Right Side: Massive Title */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h1 className="font-display font-black text-5xl md:text-8xl lg:text-[10rem] uppercase tracking-[-0.04em] leading-[0.85] text-white/95">
              OUR <br/>
              <span className="text-brand-accent">WORK</span>
            </h1>
            <p className="font-sans font-light text-white/70 leading-relaxed mt-8 max-w-md mx-auto lg:mx-0 text-lg md:text-xl">
              Engineering explosive growth and defining modern culture for the world's most ambitious brands.
            </p>
          </div>
        </motion.div>


      </section>

      {/* Seamless Transition Block (Mathematical interpolation from brand-dark to white) */}
      <div className="w-full h-24 md:h-40 bg-gradient-to-b from-brand-dark to-white relative z-20"></div>

      {/* Grid Section */}
      <section className="bg-white text-brand-dark py-24 md:py-32 px-6 md:px-12 relative z-20">
        <div className="max-w-[1400px] mx-auto">
          {/* Asymmetric Masonry Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
            {caseStudies.map((study, idx) => (
              <motion.div
                key={idx}
                onClick={() => { if(setActivePage) setActivePage('Case Study Detail', undefined, study.id); }}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative overflow-hidden rounded-[2.5rem] bg-gray-50 cursor-pointer h-[280px] md:h-[320px] flex items-center justify-center border border-gray-200 shadow-sm hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] transition-all duration-700 hover:-translate-y-2"
              >
                {/* Cyan Glow Hover Effect Border */}
                <div className="absolute inset-0 border-[3px] border-transparent group-hover:border-brand-accent transition-colors duration-500 z-30 pointer-events-none rounded-[2.5rem]"></div>

                {/* Pure White Hover Background */}
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0 rounded-[2.5rem]"></div>

                {/* Initial State: Plain Text Name */}
                <div className="absolute inset-0 flex items-center justify-center p-8 z-10 transition-all duration-700 transform group-hover:scale-110 group-hover:-translate-y-12 group-hover:opacity-0 group-hover:blur-md">
                  <h3 className="font-display font-black text-3xl md:text-4xl uppercase tracking-tighter text-brand-dark text-center leading-none">
                    {study.title}
                  </h3>
                </div>

                {/* Hover State: Sliding Logo */}
                <div className="absolute inset-0 flex items-center justify-center p-12 z-20 opacity-0 transform translate-y-16 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)]">
                  <img src={study.logo} alt={`${study.title} logo`} className="max-w-full max-h-full object-contain filter drop-shadow-xl" />
                </div>
              </motion.div>
            ))}

            {/* Cyan Brand CTA Tile included in the Grid */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-[2rem] bg-brand-accent cursor-pointer h-[250px] md:h-[300px] p-8 md:p-12 flex flex-col justify-between shadow-2xl"
              >
                <div className="text-brand-dark">
                  <h3 className="font-display font-black text-4xl md:text-5xl uppercase tracking-tighter leading-none mb-4">
                    GOT A <br/>SIMILAR <br/>PROJECT?
                  </h3>
                  <p className="font-sans font-medium text-brand-dark/70">
                    Let's engineer your growth.
                  </p>
                </div>
                <div className="self-end bg-brand-dark text-brand-accent w-16 h-16 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <ArrowDown className="-rotate-45" size={24} />
                </div>
              </motion.div>
          </div>
        </div>
      </section>

    </div>
  );
};
