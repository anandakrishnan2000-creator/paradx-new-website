import { motion } from 'framer-motion';

export const About = ({ setActivePage }: { setActivePage?: (page: string) => void }) => {
  return (
    <div className="bg-brand-dark min-h-screen text-brand-light relative selection:bg-brand-accent selection:text-brand-dark">
      
      {/* 1. Hero Section */}
      <section className="relative w-full h-screen min-h-[800px] flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-brand-accent/40 to-brand-dark">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2000&auto=format&fit=crop" alt="Team Collaboration" className="w-full h-full object-cover opacity-40 mix-blend-overlay select-none pointer-events-none scale-105" />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/40 via-brand-dark/80 to-brand-dark"></div>
        </div>
        
        <div className="relative z-10 text-center flex flex-col items-center mt-20">
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="font-display font-bold text-6xl md:text-[7rem] lg:text-[9rem] leading-none tracking-tighter uppercase text-white"
          >
            Meet the Team
          </motion.h1>
        </div>


      </section>

      {/* 2. The Intro Section */}
      <section className="py-32 px-6 md:px-12 max-w-[1400px] mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center">
        <div>
          <h2 className="font-display font-black text-5xl md:text-7xl uppercase tracking-tighter leading-[0.85] mb-12">
            The anti-agency <br /> <span className="text-brand-accent italic font-serif opacity-90 normal-case tracking-normal">syndicate.</span>
          </h2>
          <div className="font-sans font-light text-lg md:text-xl leading-[1.8] text-white/70 space-y-8">
            <p>
              Paradx wasn't born in a corporate boardroom; it was forged in the trenches. We are a collective of rogue engineers, founders, and relentless entrepreneurs who spent years mastering radically different verticals in isolation. We didn't learn theory—we built, broke, and scaled real systems across entire industries.
            </p>
            <p>
              After dominating our respective fields as elite independent freelancers, we realized a profound truth: solving fragmented problems yields fragmented results. To create true scale, we united our specialized expertise under a single, uncompromising umbrella. Paradx is the culmination of that raw experience—a multi-disciplinary strike team where code, design, business operations, and human psychology intersect.
            </p>
            <p>
              Because we possess deep, hands-on expertise across the entire architectural system of a business—not just the surface-level marketing layer—we don't just run ads or build websites. We drop directly into your operational ecosystem, identify the lethal gaps, and engineer holistic, end-to-end growth engines. When you partner with us, you aren't hiring an agency. You are deploying an unfair advantage.
            </p>
          </div>
          <button 
            onClick={() => {
              if (setActivePage) {
                setActivePage('Contact Us');
              }
            }}
            className="mt-12 bg-white text-brand-dark px-10 py-5 rounded-full font-sans font-bold text-sm uppercase tracking-widest hover:bg-brand-accent hover:text-white transition-colors" 
            data-cursor="hover"
          >
            Say Hello
          </button>
        </div>
        
        <div className="relative h-[600px] w-full">
          <motion.img 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=800&auto=format&fit=crop" 
            className="absolute top-0 right-0 w-[80%] h-[70%] object-cover rounded-xl shadow-2xl z-10" 
            alt="Office working"
          />
          <motion.img 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.3 }}
            src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=600&auto=format&fit=crop" 
            className="absolute bottom-0 left-0 w-[70%] h-[60%] object-cover rounded-xl shadow-2xl z-20 border-8 border-brand-dark" 
            alt="Creative discussion" 
          />
        </div>
      </section>

      {/* 3. The Collective */}
      <section className="bg-brand-accent py-32 px-6 md:px-12 text-brand-dark relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto text-center relative z-10">
          <h2 className="font-display font-black text-6xl md:text-[7.5rem] uppercase tracking-tighter leading-[0.9]">
            The Unified <br />
            <span className="relative inline-block">
              Parad<span className="relative inline-block text-brand-dark">
                o
                {/* Realistic red ink cross-strike (X) over the 'O' */}
                {/* Actual External Image of the hand-drawn Red Strike X */}
                <img 
                  src="/red-strike-x.png" 
                  alt="Red Strike X" 
                  className="absolute top-1/2 left-1/2 w-[160%] max-w-none h-auto -translate-x-[50%] -translate-y-[45%] z-20 pointer-events-none drop-shadow-[0_4px_4px_rgba(225,29,72,0.2)]" 
                />
              </span>x.
              <svg className="absolute -bottom-4 left-0 w-full" viewBox="0 0 400 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 15Q150 0 395 10" stroke="#0a0a0a" strokeWidth="8" strokeLinecap="round" />
              </svg>
            </span>
          </h2>
          <p className="mt-12 font-sans font-medium text-lg md:text-xl max-w-2xl mx-auto uppercase tracking-wide text-brand-dark/70">
            A beautiful contradiction: fiercely independent experts, weaponized into a single, ruthless machine engineered for absolute dominance.
          </p>

          {/* Unified Team Group Photo */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-24 w-full aspect-[4/3] md:aspect-[16/9] lg:aspect-[21/9] rounded-xl lg:rounded-[2rem] overflow-hidden relative shadow-[0_20px_50px_rgba(0,0,0,0.3)] group bg-brand-dark"
          >
            {/* DEVELOPMENT PLACEHOLDER: Replace this src with your actual group photo (e.g. src="/team-group.jpg") */}
            <img 
              src="https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=2000&auto=format&fit=crop" 
              alt="The Paradx Collective Assembled" 
              className="absolute inset-0 w-full h-full object-cover opacity-80 transition-transform duration-1000 group-hover:scale-105 grayscale mix-blend-luminosity"
            />
            {/* Cinematic dark gradient to blend the photo natively */}
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/10 to-transparent pointer-events-none"></div>
          </motion.div>
        </div>
      </section>

    </div>
  );
};
