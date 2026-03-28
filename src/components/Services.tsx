import { motion } from 'framer-motion';

const servicesList = [
  {
    image: "/svc_1.png",
    titleLine1: "BRANDING",
    titleLine2: "EXPERTISE",
    description: (
      <>
        Your brand isn't just a logo—it's the heartbeat of your business. We engineer magnetic brand identities from the ground up, starting with intensive strategy workshops that excavate your true purpose and lock in an unmistakable tone of voice.<br/><br/>
        Whether you are launching a bold new venture or breathing life into an established legacy, we craft a cohesive narrative that resonates deeply with your audience and leaves your competitors in the dust.
      </>
    )
  },
  {
    image: "/svc_2.png",
    titleLine1: "CREATIVE",
    titleLine2: "DESIGN",
    description: (
      <>
        In a world of infinite scrolling, generic aesthetics simply don't survive. We design thumb-stopping, premium creative assets that command absolute attention. From striking digital campaigns to immersive brand ecosystems, our team fuses art with behavioral psychology.<br/><br/>
        We don't just make things look pretty; we build visual experiences that provoke emotion, drive instant recognition, and transform passive viewers into fiercely loyal brand advocates.
      </>
    )
  },
  {
    image: "/svc_3.png",
    titleLine1: "WEBSITE",
    titleLine2: "DEVELOPMENT",
    description: (
      <>
        We don't just build websites; we engineer high-performance digital flagship stores. Your digital presence should be a frictionless, immersive journey that converts at the highest possible rate while reflecting your premium positioning.<br/><br/>
        Our development team obsesses over load speeds, seamless interactions, and state-of-the-art UI/UX architecture to ensure your web presence is as intelligent and lightning-fast as it is beautiful.
      </>
    )
  },
  {
    image: "/svc_4.png",
    titleLine1: "PAID",
    titleLine2: "MEDIA",
    description: (
      <>
        Stop guessing and start dominating. We treat your ad spend like an investment portfolio, utilizing brutal data-driven precision to maximize your daily ROI and systematically scale your revenue.<br/><br/>
        Our paid media architects design omni-channel acquisition machines across Meta, Google, and beyond. We relentlessly test creatives and exploit algorithmic advantages to hijack your market share.
      </>
    )
  },
  {
    image: "/svc_5.png",
    titleLine1: "CONTENT",
    titleLine2: "CREATION",
    description: (
      <>
        Content is the currency of the modern internet. Our native content strategies ensure your brand remains top-of-mind, culturally relevant, and endlessly engaging across every touchpoint.<br/><br/>
        From high-end cinematic video production to razor-sharp SEO copywriting, we build an organic ecosystem that educates and entertains, transforming your brand into an authoritative voice that leads the conversation.
      </>
    )
  },
  {
    image: "/svc_6.png",
    titleLine1: "INFLUENCER",
    titleLine2: "MARKETING",
    description: (
      <>
        Trust cannot be bought, but it can be borrowed. We orchestrate highly curated influencer campaigns that weaponize authentic human connection, turning creators into an extension of your sales force.<br/><br/>
        Forget vanity metrics. We identify partners who genuinely align with your ethos, driving raw, unfiltered engagement. We spark viral word-of-mouth growth that traditional advertising simply cannot replicate.
      </>
    )
  }
];

export const Services = () => {
  return (
    <div className="bg-brand-light min-h-screen text-brand-dark relative selection:bg-brand-accent selection:text-brand-dark">
      
      {/* 1. Hero Section */}
      <section className="relative w-full h-[60vh] min-h-[500px] flex flex-col items-center justify-center overflow-hidden bg-brand-dark">
        {/* Deeply integrated premium background image */}
        <div className="absolute inset-0 z-0 overflow-hidden bg-brand-dark">
          <img 
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2000&auto=format&fit=crop" 
            className="w-full h-full object-cover opacity-30 select-none pointer-events-none scale-105 filter grayscale mix-blend-luminosity" 
            alt="Strategic Services Execution" 
          />
          {/* Gradient Overlays for Depth, Glow, and Legibility */}
          <div className="absolute inset-0 bg-brand-accent/5 mix-blend-color-dodge"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/40 via-brand-dark/80 to-brand-light"></div>
        </div>
        
        <div className="relative z-10 text-center flex flex-col items-center mt-20">
          <motion.span 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-brand-accent font-sans font-bold text-sm tracking-[0.3em] mb-4 uppercase"
          >
            What We Do
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="font-display font-black text-6xl md:text-[8rem] tracking-[-0.03em] leading-[0.85] uppercase text-white/95"
          >
            Services
          </motion.h1>
        </div>


      </section>

      {/* 2. Vertical Services List */}
      <section className="py-32 px-6 md:px-12 max-w-[1200px] mx-auto w-full flex flex-col gap-32">
        {servicesList.map((service, i) => (
          <motion.div 
            key={i}
            id={`service-${i}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className={`flex flex-col md:flex-row gap-8 md:gap-16 items-center ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
          >
            {/* Image */}
            <div className="w-full md:w-[45%] h-[400px] md:h-[500px] overflow-hidden rounded-2xl shadow-2xl shrink-0 group">
              <img 
                src={service.image} 
                alt={service.titleLine1} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            {/* Content */}
            <div className="flex-1 mt-4 md:mt-0">
              <h2 className="font-display font-black text-5xl md:text-7xl leading-[0.85] tracking-tighter uppercase mb-8 text-brand-dark">
                {service.titleLine1} <br />
                <span className="relative inline-block mt-2">
                  {service.titleLine2}
                  <div className="absolute -bottom-1 left-0 w-full h-3 md:h-4 bg-brand-accent rounded-full -z-10 mix-blend-multiply opacity-100"></div>
                </span>
              </h2>
              <p className="font-sans font-light text-lg md:text-xl text-brand-dark/70 leading-[1.8] max-w-xl">
                {service.description}
              </p>
            </div>
          </motion.div>
        ))}
      </section>

    </div>
  );
};
