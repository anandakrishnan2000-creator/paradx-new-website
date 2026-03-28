import { motion } from 'framer-motion';

import logo1 from '../assets/clients/ISAFE INTERNATIONAL.png';
import logo2 from '../assets/clients/ORCHID TREE.png';
import logo3 from '../assets/clients/PES UNIVERSITY.png';
import logo4 from '../assets/clients/SALAD SHAK.png';
import logo5 from '../assets/clients/VIP.png';
import logo6 from '../assets/clients/VOGUE SHADE.png';

const displayLogos = [
  { src: logo1, className: "scale-[1.4]" },     // ISAFE
  { src: logo2, className: "scale-[1.4]" },     // ORCHID
  { src: logo3, className: "scale-100" },       // PES
  { src: logo4, className: "scale-100" },       // SALAD SHAK
  { src: logo5, className: "scale-100" },       // VIP
  { src: logo6, className: "scale-[1.5]" },     // VOGUE SHADE
];

export const Marquee = () => {
  return (
    <div className="py-12 bg-white overflow-hidden whitespace-nowrap flex items-center relative">
      {/* Subtle fade effect on the left and right edges */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

      <motion.div
        className="flex whitespace-nowrap items-center"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ ease: "linear", duration: 40, repeat: Infinity }}
      >
        {/* Map 4 times to ensure seamless infinite looping */}
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex items-center gap-16 md:gap-32 px-8 md:px-16 shrink-0">
            {displayLogos.map((logo, idx) => (
              <img 
                key={idx}
                src={logo.src} 
                alt="Client Logo" 
                className={`h-8 md:h-12 w-auto object-contain max-w-none shrink-0 opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-pointer ${logo.className}`}
              />
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
};
