import { motion, AnimatePresence } from 'framer-motion';

export const Loader = () => {
  return (
    <motion.div 
      key="global-loader"
      initial={{ backgroundColor: "rgba(5,5,5,1)" }}
      exit={{ 
        backgroundColor: "rgba(5,5,5,0)", 
        transition: { duration: 1.2, ease: [0.76, 0, 0.24, 1] } // Locks the DOM node alive for exactly the flight duration!
      }}
      className="fixed inset-0 z-[2000] flex items-center justify-center pointer-events-none"
    >
      <motion.img
        src="/loader-x.png"
        alt="Loading Paradx"
        initial={{ scale: 1, top: "50%", left: "50%", x: "-50%", y: "-50%", opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 1 } }}
        exit={{ 
          scale: 0.15, // Rigid scale command explicitly locks aspect ratio vs layoutId
          top: "40px", 
          left: "calc(50vw - min(45vw, 700px) + 64px)", // Nudged slightly right to perfectly overlay the 'X' region in 'PARADX'
          x: "-50%", 
          y: "0%",
          opacity: [1, 1, 1, 0], // Stay solid then crossfade
          transition: { 
            duration: 1.2, 
            ease: [0.76, 0, 0.24, 1], 
            opacity: { times: [0, 0.4, 0.8, 1], duration: 1.2 }
          } 
        }}
        className="fixed w-48 md:w-[400px] h-auto object-contain drop-shadow-[0_0_80px_rgba(0,229,255,0.2)] origin-center"
      />
    </motion.div>
  );
};
