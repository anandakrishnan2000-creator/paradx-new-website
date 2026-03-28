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
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-brand-accent font-sans font-bold text-sm tracking-[0.2em] mb-4 uppercase"
          >
            Meet the Team
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="font-display font-bold text-6xl md:text-[9rem] leading-none tracking-tighter uppercase text-white"
          >
            About Us
          </motion.h1>
        </div>


      </section>

      {/* 2. The Intro Section */}
      <section className="py-32 px-6 md:px-12 max-w-[1400px] mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center">
        <div>
          <h2 className="font-display font-black text-5xl md:text-7xl uppercase tracking-tighter leading-[0.85] mb-12">
            Loving the <br /> <span className="text-brand-accent italic font-serif opacity-90 normal-case tracking-normal">digital</span> life.
          </h2>
          <div className="font-sans font-light text-lg md:text-xl leading-[1.8] text-white/70 space-y-8">
            <p>
              We are Paradx. We don't just build websites or run ads; we embed ourselves inside your business to operate like true growth partners. 
            </p>
            <p>
              Our journey started with a simple belief: the best marketing doesn't feel like marketing. It feels like an authentic conversation with your ideal audience. We strip away the noise and focus on what matters most—identifying the gap, engineering the solution, and accelerating your growth exponentially.
            </p>
            <p>
              Whether it's branding, creative, paid media, or influencer campaigns, everything we do is precision-engineered for ROI without sacrificing aesthetics.
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
          <h2 className="font-display font-black text-6xl md:text-[8rem] uppercase tracking-tighter leading-[0.9]">
            Meet The <br />
            <span className="relative inline-block">
              Collective.
              <svg className="absolute -bottom-4 left-0 w-full" viewBox="0 0 400 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 15Q150 0 395 10" stroke="#0a0a0a" strokeWidth="8" strokeLinecap="round" />
              </svg>
            </span>
          </h2>
          <p className="mt-12 font-sans font-medium text-lg md:text-xl max-w-2xl mx-auto uppercase tracking-wide text-brand-dark/70">
            The visionary minds engineering your success.
          </p>

          {/* Simple Team Grid mapping placeholders */}
          <div className="mt-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Anandakrishnan", role: "Creative Director", slug: "anandakrishnan" },
              { name: "Adarsh Nambiar", role: "Head of Strategy", slug: "adarsh" },
              { name: "Abishek Benny", role: "Lead Developer", slug: "abishek" },
              { name: "Sayyed", role: "Design Lead", slug: "sayyed" },
              { name: "Hari Krishnan", role: "Growth Architect", slug: "hari" },
              { name: "Ashish Antony", role: "Digital Specialist", slug: "ashish" }
            ].map((member, i) => {
              const initials = member.name.split(' ').map(n => n[0]).join('');
              return (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="group cursor-pointer" 
                  data-cursor="hover"
                >
                  <div className="w-full aspect-[4/5] overflow-hidden rounded-lg mb-6 bg-brand-dark/50 border border-white/5 flex items-center justify-center relative">
                    {/* Typographic Fallback */}
                    <span className="absolute font-display font-black text-6xl text-white/5 uppercase tracking-tighter z-0">
                      {initials}
                    </span>
                    {/* Actual Image (Hides itself if missing) */}
                    <img 
                      src={`/team/${member.slug}.jpg`} 
                      alt={member.name} 
                      className="absolute inset-0 w-full h-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-105 z-10"
                      onError={(e) => { e.currentTarget.style.display = 'none'; }}
                    />
                  </div>
                  <h3 className="font-display font-bold text-2xl uppercase tracking-tighter">{member.name}</h3>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

    </div>
  );
};
