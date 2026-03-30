import { motion } from 'framer-motion';

export const Careers = () => {
  const perks = [
    { title: "Creative Freedom", desc: "No micromanagement. We hire elite operators and give them the autonomy to innovate and dominate." },
    { title: "Next-Gen Tech", desc: "Access to enterprise-grade AI tools, unparalleled hardware budgets, and bleeding-edge frameworks." },
    { title: "Exponential Growth", desc: "We scale relentlessly. As Paradx grows, your responsibilities, equity, and compensation scale identically." }
  ];

  return (
    <div className="bg-brand-dark min-h-screen text-white relative selection:bg-brand-accent selection:text-brand-dark pb-32">
      
      {/* 1. Hero Section */}
      <section className="relative w-full min-h-[60vh] flex flex-col items-center justify-center overflow-hidden px-6 pt-32 pb-20 text-center">
        {/* Cinematic Recruitment Background */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2000&auto=format&fit=crop" alt="Command Center" className="w-full h-full object-cover opacity-[0.15] select-none pointer-events-none scale-105 filter grayscale" />
          <div className="absolute inset-0 bg-brand-accent/5 mix-blend-color-dodge"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/20 via-brand-dark/80 to-brand-dark"></div>
        </div>
        
        <div className="relative z-10 w-full max-w-[1200px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="font-sans font-bold text-brand-accent tracking-[0.3em] text-sm md:text-md uppercase block mb-6">
              Careers At Paradx
            </span>
            <h1 className="font-display font-black text-6xl md:text-[clamp(5rem,10vw,12rem)] leading-[0.85] tracking-tighter uppercase text-white shadow-brand text-glow">
              JOIN THE<br/>COLLECTIVE
            </h1>
            <p className="mt-8 max-w-2xl mx-auto font-sans text-brand-gray text-lg md:text-xl">
              We aren't looking for employees. We are aggressively scouting for visionary architects, growth hackers, and elite creators to build the future of absolute digital dominance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. Perks / Culture Section */}
      <section className="w-full bg-black/40 py-24 px-6 border-y border-white/5">
        <div className="max-w-[1400px] mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="font-display font-black text-4xl md:text-6xl uppercase tracking-tighter text-white">THE PARADX STANDARD</h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {perks.map((perk, idx) => (
              <motion.div 
                key={perk.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-brand-dark/50 border border-white/10 p-8 rounded-2xl hover:border-brand-accent/50 transition-colors group cursor-default"
              >
                <div className="w-12 h-12 mb-6 rounded-full bg-brand-accent/10 flex items-center justify-center text-brand-accent group-hover:bg-brand-accent group-hover:text-brand-dark transition-colors font-display font-bold">
                  0{idx + 1}
                </div>
                <h3 className="font-display font-bold text-2xl uppercase tracking-tight text-white mb-4">{perk.title}</h3>
                <p className="font-sans text-brand-gray leading-relaxed text-sm">{perk.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. The Pitch Section */}
      <section className="w-full px-6 py-24 md:py-32">
        <div className="max-w-[1200px] mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 40 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="bg-[#0f0f13] border border-white/5 p-12 md:p-24 rounded-[3rem] shadow-2xl relative overflow-hidden group"
          >
            {/* Ambient Interaction Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-brand-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            
            <h2 className="font-display font-black text-5xl md:text-8xl uppercase tracking-tighter text-white leading-none mb-8 relative z-10">
              WHERE ARE THE <br className="md:hidden"/> <span className="text-brand-accent">OPEN ROLES?</span>
            </h2>
            
            <p className="font-sans text-brand-gray text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed mb-12 relative z-10">
              There aren't any. We don't hire "employees" to fill mundane seats. We are aggressively scouting for visionaries, prodigies, and elite operators who architect the future. If you possess a unique vision that can scale Paradx, do not look for an application button.
              <br/><br/>
              <strong className="text-white font-black tracking-wide">PITCH US WHAT YOU HAVE.</strong>
            </p>

            <a 
              href="mailto:hello@paradxdigital.com?subject=My%20Vision%20For%20Paradx"
              className="inline-block bg-brand-accent text-brand-dark px-12 py-6 rounded-full font-sans font-black text-lg tracking-widest uppercase hover:bg-white hover:scale-105 transition-all duration-300 relative z-10 shadow-[0_0_40px_rgba(0,229,255,0.2)]"
            >
              Send Your Pitch
            </a>
          </motion.div>
        </div>
      </section>

    </div>
  );
};
