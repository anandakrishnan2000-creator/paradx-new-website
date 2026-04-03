import { motion } from 'framer-motion';

export const Hero = () => {
  const text = "We work like entrepreneurs inside your business";
  
  const words = text.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.2 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 50,
      transition: {
        type: "spring" as const,
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <section className="relative min-h-[100svh] pt-32 pb-24 px-6 md:px-12 flex flex-col justify-center overflow-hidden bg-transparent">
      
      {/* Interactive 3D Spline Background (Expanded boundaries to hide watermark) */}
      <div className="absolute -top-10 -bottom-24 -right-24 z-0 w-[140%] lg:w-[70%] xl:w-[60%] flex items-center justify-end pointer-events-none opacity-40 lg:opacity-80">
        <iframe 
          src="https://my.spline.design/thebluemarble-QoV88Jg9q0XjXvc5fIneVbxG/" 
          frameBorder="0" 
          width="100%" 
          height="100%" 
          title="Interactive 3D Planet Background"
          className="w-full h-full pointer-events-none scale-[1.15] lg:scale-[1.0] origin-center lg:origin-right transform-gpu mix-blend-screen"
        ></iframe>
      </div>
      
      {/* Foreground Text Wrapper */}
      <motion.div 
        variants={container}
        initial="hidden"
        animate="visible"
        className="max-w-[1400px] w-full mx-auto flex flex-col relative z-10 pointer-events-auto"
      >
        <div className="flex flex-wrap">
          {words.map((word, index) => (
            <motion.span 
              key={index}
              variants={child}
              className="font-display font-bold text-[clamp(2rem,11vw,3.5rem)] md:text-6xl lg:text-8xl xl:text-[7rem] leading-[0.9] md:leading-none mr-[2vw] md:mr-[1.5vw] mb-3 md:mb-6 uppercase tracking-tighter"
            >
              {word === "entrepreneurs" || word === "business" ? (
                <span className="text-brand-accent">{word}</span>
              ) : (
                word
              )}
            </motion.span>
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="mt-8 font-sans font-light text-xl md:text-3xl text-white tracking-wide leading-relaxed"
        >
          Identify the gap. Engineer the solution. Accelerate the growth.
        </motion.div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-0 right-0 px-6 md:px-12 z-10 pointer-events-auto"
      >
        <div className="max-w-[1400px] mx-auto w-full flex justify-between items-center text-white uppercase tracking-widest text-sm font-semibold">
          <span>Be the parad<span className="text-brand-accent [text-shadow:0_0_10px_#00e5ff,0_0_20px_#00e5ff,0_0_30px_#00e5ff]">X</span> factor</span>
          <span className="w-16 h-[1px] bg-white block"></span>
        </div>
      </motion.div>
    </section>
  );
};
