import { motion } from 'framer-motion';

const services = [
  {
    title: "BRANDING.",
    description: "Engineering magnetic brand identities.",
    image: "/svc_1.png"
  },
  {
    title: "CREATIVE.",
    description: "Thumb-stopping premium creative assets.",
    image: "/svc_2.png"
  },
  {
    title: "WEBSITE.",
    description: "High-performance digital flagship stores.",
    image: "/svc_3.png"
  },
  {
    title: "PAID.",
    description: "Data-driven ROI & exponential acquisition.",
    image: "/svc_4.png"
  },
  {
    title: "CONTENT.",
    description: "Culturally relevant native content strategies.",
    image: "/svc_5.png"
  },
  {
    title: "INFLUENCER.",
    description: "Authentic creator-led viral growth.",
    image: "/svc_6.png"
  }
];

export const HomeServices = ({ setActivePage }: { setActivePage?: (page: string, targetId?: string) => void }) => {
  return (
    <section className="bg-white py-24 md:py-32 px-6 md:px-12 text-brand-dark">
      <div className="max-w-[1400px] mx-auto">
        <h2 className="font-display font-black text-5xl md:text-8xl uppercase tracking-[-0.03em] leading-[0.85] mb-16">
          Our Tools
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
          {services.map((service, i) => (
            <motion.div
              key={i}
              onClick={() => {
                if(setActivePage) {
                  setActivePage('Services', `service-${i}`);
                }
              }}
              className="bg-gray-100 rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden cursor-pointer h-[450px] shadow-sm hover:shadow-2xl transition-shadow duration-500"
              initial="initial"
              whileHover="hover"
              whileInView="hover"
              viewport={{ margin: "-20% 0px -20% 0px", once: false, amount: 0.4 }}
            >
              {/* Image Reveal Overlay */}
              <motion.div
                className="absolute inset-0 z-0 origin-bottom"
                variants={{
                  initial: { scaleY: 0 },
                  hover: { scaleY: 1, transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] } }
                }}
              >
                <img src={service.image} alt={service.title} className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-brand-dark/70"></div>
              </motion.div>
              
              <div className="relative z-10 flex flex-col h-full justify-between pointer-events-none">
                <div>
                  <motion.div 
                    variants={{ initial: { color: "#9ca3af" }, hover: { color: "#ffffff" } }}
                    className="font-sans font-bold text-sm tracking-[0.2em] mb-4 opacity-50 z-20">
                    0{i + 1}
                  </motion.div>
                  <motion.h3 
                    variants={{ initial: { color: "#111827" }, hover: { color: "#ffffff" } }}
                    className="font-display font-black text-4xl md:text-5xl uppercase tracking-tighter leading-none z-20">
                    {service.title}
                  </motion.h3>
                </div>
                
                <motion.p 
                  variants={{
                    initial: { opacity: 0, y: 16 },
                    hover: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.1 } }
                  }}
                  className="font-sans text-base leading-relaxed text-white">
                  {service.description}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
