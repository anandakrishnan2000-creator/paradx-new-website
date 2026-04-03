import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const services = [
  {
    title: "STRATEGY & PLANNING.",
    points: [
      "Predictive Market Research & Campaign Strategy",
      "Brand Positioning & Narrative Architecture",
      "Competitive Analysis & Audience Modeling",
      "Full-Funnel Growth Strategy Formulation",
      "Marketing Revenue Operations (RevOps)"
    ],
    image: "/svc_strategy_1.png"
  },
  {
    title: "CREATIVE PRODUCTION.",
    points: [
      "High-Fidelity Design & 3D Interactive Assets",
      "Omnichannel Video & Cinematic Production",
      "Dynamic Content Storytelling Ecosystems",
      "Copywriting & Brand Voice Formulation",
      "Generative AI & Rapid Prototyping"
    ],
    image: "/svc_creative_1.png"
  },
  {
    title: "WEBSITE & INFRASTRUCTURE.",
    points: [
      "Custom High-Performance Web Development",
      "UX/UI & Conversion-Optimized Web Experiences",
      "E-Commerce & Custom App Development",
      "Advanced API & Platform Integrations",
      "Technical SEO & Site Architecture"
    ],
    image: "/svc_web_1.png"
  },
  {
    title: "MEDIA & ACQUISITION.",
    points: [
      "Algorithmic Paid Media & Direct Ad Placements",
      "Programmatic Media Buying & Retargeting",
      "Elite Influencer & KOL Strategic Partnerships",
      "Viral Organic Outreach & Community Incubation",
      "Social Commerce & Native Platform Selling"
    ],
    image: "/svc_media_1.png"
  },
  {
    title: "AUTOMATION ENGINEERING.",
    points: [
      "Advanced Email & WhatsApp Automation",
      "Conversational AI & NLP Chatbots",
      "Cross-Platform SMS Retargeting Funnels",
      "Customer Data Platform (CDP) Integrations",
      "Machine Learning Derived Loyalty Pipelines"
    ],
    image: "/svc_auto_1.png"
  },
  {
    title: "DATA & MANAGEMENT.",
    points: [
      "Real-Time Dashboards & Campaign Monitoring",
      "White-Glove Dedicated Account Management",
      "Enterprise Tool, Software & API Licenses",
      "Predictive Performance Analytics & Reporting",
      "A/B Testing & Continuous Conversion Optimization"
    ],
    image: "/svc_data_1.png"
  }
];

export const HomeServices = ({ setActivePage }: { setActivePage?: (page: string, targetId?: string) => void }) => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section className="bg-white py-24 md:py-32 px-6 md:px-12 text-brand-dark">
      <div className="max-w-[1400px] mx-auto">
        <h2 className="font-display font-black text-5xl md:text-8xl uppercase tracking-[-0.03em] leading-[0.85] mb-16">
          Our Tools
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              className="bg-gray-100 rounded-[2.5rem] p-6 sm:p-8 2xl:p-10 relative overflow-hidden flex flex-col min-h-[400px] sm:min-h-[450px] h-full shadow-sm hover:shadow-2xl transition-shadow duration-500"
              initial="initial"
              whileHover="hover"
              whileInView={isMobile ? "hover" : undefined}
              viewport={{ margin: "-20% 0px -20% 0px", once: false, amount: 0.4 }}
            >
              {/* Bulletproof Native Click Overlay */}
              <a 
                href={`#service-${i}`}
                className="absolute inset-0 z-50 cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                  if(setActivePage) {
                    setActivePage('Services', `service-${i}`);
                  }
                }}
              >
                <span className="sr-only">View {service.title} details</span>
              </a>
              {/* Image Reveal Overlay */}
              <motion.div
                className="absolute inset-0 z-0 origin-bottom"
                variants={{
                  initial: { scaleY: 0 },
                  hover: { scaleY: 1, transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] } }
                }}
              >
                <img src={service.image} alt={service.title} className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-brand-dark/70 z-20"></div>
              </motion.div>
              
              <div className="relative z-10 flex flex-col h-full justify-start pointer-events-none">
                <div>
                  <motion.div 
                    variants={{ initial: { color: "#9ca3af" }, hover: { color: "#ffffff" } }}
                    className="font-sans font-bold text-xs md:text-sm tracking-[0.2em] mb-2 opacity-50 z-20">
                    0{i + 1}
                  </motion.div>
                  <motion.h3 
                    variants={{ initial: { color: "#111827" }, hover: { color: "#ffffff" } }}
                    className="font-display font-black text-3xl xl:text-4xl uppercase tracking-tighter leading-none z-20 break-words mb-8">
                    {service.title}
                  </motion.h3>
                </div>
                
                <motion.div 
                  variants={{
                    initial: { opacity: 0, y: 16 },
                    hover: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.1 } }
                  }}
                  className="font-sans text-sm md:text-[15px] xl:text-base leading-snug xl:leading-relaxed text-white space-y-2 xl:space-y-3">
                  {service.points.map((point, idx) => (
                    <div key={idx} className="flex items-start gap-2.5">
                      <div className="w-1 h-1 bg-brand-accent shrink-0 mt-2 rounded-sm opacity-90"></div>
                      <span className="font-medium tracking-wide">{point}</span>
                    </div>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
