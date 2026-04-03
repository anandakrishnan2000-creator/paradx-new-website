import { motion } from 'framer-motion';

const servicesList = [
  {
    images: [
      "/svc_strategy_1.png",
      "/svc_strategy_2.png"
    ],
    titleLine1: "STRATEGY",
    titleLine2: "& PLANNING",
    description: (
      <ul className="space-y-6 list-none mt-4">
        <li className="flex items-start gap-4">
          <div className="w-1.5 h-1.5 bg-brand-accent shrink-0 mt-2.5 rounded-sm shadow-[0_0_8px_rgba(0,240,255,0.4)]"></div>
          <div>
            <strong className="text-brand-dark font-display block text-xl mb-1 uppercase tracking-tight">Predictive Market Research & Campaign Strategy</strong>
            <span className="font-sans text-brand-dark/70 text-lg leading-relaxed">We deploy advanced behavioral analytics and data modeling to pinpoint exactly where your target audience lives, creating bulletproof go-to-market strategies that eliminate guesswork.</span>
          </div>
        </li>
        <li className="flex items-start gap-4">
          <div className="w-1.5 h-1.5 bg-brand-accent shrink-0 mt-2.5 rounded-sm shadow-[0_0_8px_rgba(0,240,255,0.4)]"></div>
          <div>
            <strong className="text-brand-dark font-display block text-xl mb-1 uppercase tracking-tight">Brand Positioning & Narrative Architecture</strong>
            <span className="font-sans text-brand-dark/70 text-lg leading-relaxed">We engineer a commanding brand voice and an unshakeable market position. Your brand will not just participate in the market; it will dictate the conversation.</span>
          </div>
        </li>
        <li className="flex items-start gap-4">
          <div className="w-1.5 h-1.5 bg-brand-accent shrink-0 mt-2.5 rounded-sm shadow-[0_0_8px_rgba(0,240,255,0.4)]"></div>
          <div>
            <strong className="text-brand-dark font-display block text-xl mb-1 uppercase tracking-tight">Competitive Analysis & Audience Modeling</strong>
            <span className="font-sans text-brand-dark/70 text-lg leading-relaxed">Deep-dive reconnaissance into competitor blind spots allows us to isolate underserved demographics and architect precise psychographic models of your most profitable customers.</span>
          </div>
        </li>
        <li className="flex items-start gap-4">
          <div className="w-1.5 h-1.5 bg-brand-accent shrink-0 mt-2.5 rounded-sm shadow-[0_0_8px_rgba(0,240,255,0.4)]"></div>
          <div>
            <strong className="text-brand-dark font-display block text-xl mb-1 uppercase tracking-tight">Full-Funnel Growth Strategy Formulation</strong>
            <span className="font-sans text-brand-dark/70 text-lg leading-relaxed">From first-touch awareness to long-term retention, we design holistic, multi-channel growth structures that mathematically guarantee compounding ROI at every step of the funnel.</span>
          </div>
        </li>
        <li className="flex items-start gap-4">
          <div className="w-1.5 h-1.5 bg-brand-accent shrink-0 mt-2.5 rounded-sm shadow-[0_0_8px_rgba(0,240,255,0.4)]"></div>
          <div>
            <strong className="text-brand-dark font-display block text-xl mb-1 uppercase tracking-tight">Marketing Revenue Operations (RevOps)</strong>
            <span className="font-sans text-brand-dark/70 text-lg leading-relaxed">We align your entire marketing, sales, and service infrastructure to eliminate friction, drastically accelerating the velocity at which prospects convert into high-ticket clients.</span>
          </div>
        </li>
      </ul>
    )
  },
  {
    images: [
      "/svc_creative_1.png",
      "/svc_creative_2.png"
    ],
    titleLine1: "CREATIVE",
    titleLine2: "PRODUCTION",
    description: (
      <ul className="space-y-6 list-none mt-4">
        <li className="flex items-start gap-4">
          <div className="w-1.5 h-1.5 bg-brand-accent shrink-0 mt-2.5 rounded-sm shadow-[0_0_8px_rgba(0,240,255,0.4)]"></div>
          <div>
            <strong className="text-brand-dark font-display block text-xl mb-1 uppercase tracking-tight">High-Fidelity Design & 3D Interactive Assets</strong>
            <span className="font-sans text-brand-dark/70 text-lg leading-relaxed">Thumb-stopping, ultra-premium graphical assets and immersive 3D experiences engineered specifically to command absolute attention in an oversaturated digital landscape.</span>
          </div>
        </li>
        <li className="flex items-start gap-4">
          <div className="w-1.5 h-1.5 bg-brand-accent shrink-0 mt-2.5 rounded-sm shadow-[0_0_8px_rgba(0,240,255,0.4)]"></div>
          <div>
            <strong className="text-brand-dark font-display block text-xl mb-1 uppercase tracking-tight">Omnichannel Video & Cinematic Production</strong>
            <span className="font-sans text-brand-dark/70 text-lg leading-relaxed">We produce elite, cinematic-grade video content natively optimized to exploit the unique algorithmic constraints of every major social platform and broadcast standard.</span>
          </div>
        </li>
        <li className="flex items-start gap-4">
          <div className="w-1.5 h-1.5 bg-brand-accent shrink-0 mt-2.5 rounded-sm shadow-[0_0_8px_rgba(0,240,255,0.4)]"></div>
          <div>
            <strong className="text-brand-dark font-display block text-xl mb-1 uppercase tracking-tight">Dynamic Content Storytelling Ecosystems</strong>
            <span className="font-sans text-brand-dark/70 text-lg leading-relaxed">We don't just post content; we build psychological narrative loops that nurture your audience over time, converting passive scrollers into rabid, loyal brand advocates.</span>
          </div>
        </li>
        <li className="flex items-start gap-4">
          <div className="w-1.5 h-1.5 bg-brand-accent shrink-0 mt-2.5 rounded-sm shadow-[0_0_8px_rgba(0,240,255,0.4)]"></div>
          <div>
            <strong className="text-brand-dark font-display block text-xl mb-1 uppercase tracking-tight">Copywriting & Brand Voice Formulation</strong>
            <span className="font-sans text-brand-dark/70 text-lg leading-relaxed">Ruthless, razor-sharp sales copy and brand messaging forged from behavioral psychology principles designed exclusively to maximize your conversion rates on the spot.</span>
          </div>
        </li>
        <li className="flex items-start gap-4">
          <div className="w-1.5 h-1.5 bg-brand-accent shrink-0 mt-2.5 rounded-sm shadow-[0_0_8px_rgba(0,240,255,0.4)]"></div>
          <div>
            <strong className="text-brand-dark font-display block text-xl mb-1 uppercase tracking-tight">Generative AI & Rapid Prototyping</strong>
            <span className="font-sans text-brand-dark/70 text-lg leading-relaxed">Leveraging cutting-edge AI models, we rapidly iterate through thousands of creative variations to find the absolute highest-converting visual angles faster than humanly possible.</span>
          </div>
        </li>
      </ul>
    )
  },
  {
    images: [
      "/svc_web_1.png",
      "/svc_web_2.png"
    ],
    titleLine1: "WEBSITE",
    titleLine2: "& INFRASTRUCTURE",
    description: (
      <ul className="space-y-6 list-none mt-4">
        <li className="flex items-start gap-4">
          <div className="w-1.5 h-1.5 bg-brand-accent shrink-0 mt-2.5 rounded-sm shadow-[0_0_8px_rgba(0,240,255,0.4)]"></div>
          <div>
            <strong className="text-brand-dark font-display block text-xl mb-1 uppercase tracking-tight">Custom High-Performance Web Development</strong>
            <span className="font-sans text-brand-dark/70 text-lg leading-relaxed">Lightning-fast, bespoke digital storefronts and robust web applications coded from absolute scratch using enterprise-grade architectures that never crash under pressure.</span>
          </div>
        </li>
        <li className="flex items-start gap-4">
          <div className="w-1.5 h-1.5 bg-brand-accent shrink-0 mt-2.5 rounded-sm shadow-[0_0_8px_rgba(0,240,255,0.4)]"></div>
          <div>
            <strong className="text-brand-dark font-display block text-xl mb-1 uppercase tracking-tight">UX/UI & Conversion-Optimized Web Experiences</strong>
            <span className="font-sans text-brand-dark/70 text-lg leading-relaxed">Frictionless, beautifully intuitive user journeys designed explicitly using cognitive psychology to funnel visitors seamlessly toward the checkout or lead capture phase.</span>
          </div>
        </li>
        <li className="flex items-start gap-4">
          <div className="w-1.5 h-1.5 bg-brand-accent shrink-0 mt-2.5 rounded-sm shadow-[0_0_8px_rgba(0,240,255,0.4)]"></div>
          <div>
            <strong className="text-brand-dark font-display block text-xl mb-1 uppercase tracking-tight">E-Commerce & Custom App Development</strong>
            <span className="font-sans text-brand-dark/70 text-lg leading-relaxed">End-to-end commerce platforms engineered to handle massive product catalogs and severe traffic spikes, ensuring your digital storefront remains highly profitable 24/7.</span>
          </div>
        </li>
        <li className="flex items-start gap-4">
          <div className="w-1.5 h-1.5 bg-brand-accent shrink-0 mt-2.5 rounded-sm shadow-[0_0_8px_rgba(0,240,255,0.4)]"></div>
          <div>
            <strong className="text-brand-dark font-display block text-xl mb-1 uppercase tracking-tight">Advanced API & Platform Integrations</strong>
            <span className="font-sans text-brand-dark/70 text-lg leading-relaxed">We seamlessly connect your website to essential third-party CRMs, payment gateways, and fulfillment tools, creating an automated, unified operational ecosystem.</span>
          </div>
        </li>
        <li className="flex items-start gap-4">
          <div className="w-1.5 h-1.5 bg-brand-accent shrink-0 mt-2.5 rounded-sm shadow-[0_0_8px_rgba(0,240,255,0.4)]"></div>
          <div>
            <strong className="text-brand-dark font-display block text-xl mb-1 uppercase tracking-tight">Technical SEO & Site Architecture</strong>
            <span className="font-sans text-brand-dark/70 text-lg leading-relaxed">We restructure your site code, schema markup, and loading taxonomy to secure aggressive organic dominance and immediate visibility at the top of search engine algorithms.</span>
          </div>
        </li>
      </ul>
    )
  },
  {
    images: [
      "/svc_media_1.png",
      "/svc_media_2.png"
    ],
    titleLine1: "MEDIA",
    titleLine2: "& ACQUISITION",
    description: (
      <ul className="space-y-6 list-none mt-4">
        <li className="flex items-start gap-4">
          <div className="w-1.5 h-1.5 bg-brand-accent shrink-0 mt-2.5 rounded-sm shadow-[0_0_8px_rgba(0,240,255,0.4)]"></div>
          <div>
            <strong className="text-brand-dark font-display block text-xl mb-1 uppercase tracking-tight">Algorithmic Paid Media & Direct Ad Placements</strong>
            <span className="font-sans text-brand-dark/70 text-lg leading-relaxed">Highly targeted, aggressive media buying strategies across Meta, Google, and TikTok designed to exploit bidding algorithms and scale your daily revenue exponentially.</span>
          </div>
        </li>
        <li className="flex items-start gap-4">
          <div className="w-1.5 h-1.5 bg-brand-accent shrink-0 mt-2.5 rounded-sm shadow-[0_0_8px_rgba(0,240,255,0.4)]"></div>
          <div>
            <strong className="text-brand-dark font-display block text-xl mb-1 uppercase tracking-tight">Programmatic Media Buying & Retargeting</strong>
            <span className="font-sans text-brand-dark/70 text-lg leading-relaxed">Automated, real-time bidding infrastructure that relentlessly pursues high-intent prospects across the web, ensuring maximum brand recall and immediate recapture of lost sales.</span>
          </div>
        </li>
        <li className="flex items-start gap-4">
          <div className="w-1.5 h-1.5 bg-brand-accent shrink-0 mt-2.5 rounded-sm shadow-[0_0_8px_rgba(0,240,255,0.4)]"></div>
          <div>
            <strong className="text-brand-dark font-display block text-xl mb-1 uppercase tracking-tight">Elite Influencer & KOL Strategic Partnerships</strong>
            <span className="font-sans text-brand-dark/70 text-lg leading-relaxed">We orchestrate massive brand exposure by aligning you with top-tier Key Opinion Leaders whose audiences perfectly map to your ideal, high-spending demographic.</span>
          </div>
        </li>
        <li className="flex items-start gap-4">
          <div className="w-1.5 h-1.5 bg-brand-accent shrink-0 mt-2.5 rounded-sm shadow-[0_0_8px_rgba(0,240,255,0.4)]"></div>
          <div>
            <strong className="text-brand-dark font-display block text-xl mb-1 uppercase tracking-tight">Viral Organic Outreach & Community Incubation</strong>
            <span className="font-sans text-brand-dark/70 text-lg leading-relaxed">We engineer systemic organic growth mechanisms that manufacture viral moments and harvest deeply loyal, self-sustaining digital communities around your brand.</span>
          </div>
        </li>
        <li className="flex items-start gap-4">
          <div className="w-1.5 h-1.5 bg-brand-accent shrink-0 mt-2.5 rounded-sm shadow-[0_0_8px_rgba(0,240,255,0.4)]"></div>
          <div>
            <strong className="text-brand-dark font-display block text-xl mb-1 uppercase tracking-tight">Social Commerce & Native Platform Selling</strong>
            <span className="font-sans text-brand-dark/70 text-lg leading-relaxed">We transform your social feeds directly into frictionless marketplaces, allowing users to discover, desire, and purchase your products without ever leaving the app.</span>
          </div>
        </li>
      </ul>
    )
  },
  {
    images: [
      "/svc_auto_1.png",
      "/svc_auto_2.png"
    ],
    titleLine1: "AUTOMATION",
    titleLine2: "ENGINEERING",
    description: (
      <ul className="space-y-6 list-none mt-4">
        <li className="flex items-start gap-4">
          <div className="w-1.5 h-1.5 bg-brand-accent shrink-0 mt-2.5 rounded-sm shadow-[0_0_8px_rgba(0,240,255,0.4)]"></div>
          <div>
            <strong className="text-brand-dark font-display block text-xl mb-1 uppercase tracking-tight">Advanced Email & WhatsApp Automation</strong>
            <span className="font-sans text-brand-dark/70 text-lg leading-relaxed">Multi-tiered automated sequences designed to capture every dropped lead, systematically recover abandoned shopping carts, and push promotional broadcasts instantly.</span>
          </div>
        </li>
        <li className="flex items-start gap-4">
          <div className="w-1.5 h-1.5 bg-brand-accent shrink-0 mt-2.5 rounded-sm shadow-[0_0_8px_rgba(0,240,255,0.4)]"></div>
          <div>
            <strong className="text-brand-dark font-display block text-xl mb-1 uppercase tracking-tight">Conversational AI & NLP Chatbots</strong>
            <span className="font-sans text-brand-dark/70 text-lg leading-relaxed">We deploy highly intelligent machine-learning chatbots across your web and social assets to deliver the exact right sales pitch precisely when a customer asks a question.</span>
          </div>
        </li>
        <li className="flex items-start gap-4">
          <div className="w-1.5 h-1.5 bg-brand-accent shrink-0 mt-2.5 rounded-sm shadow-[0_0_8px_rgba(0,240,255,0.4)]"></div>
          <div>
            <strong className="text-brand-dark font-display block text-xl mb-1 uppercase tracking-tight">Cross-Platform SMS Retargeting Funnels</strong>
            <span className="font-sans text-brand-dark/70 text-lg leading-relaxed">Hyper-direct, high-conversion mobile text messaging funnels that slice strictly through the noise and land your most critical offers directly into the palm of the buyer's hand.</span>
          </div>
        </li>
        <li className="flex items-start gap-4">
          <div className="w-1.5 h-1.5 bg-brand-accent shrink-0 mt-2.5 rounded-sm shadow-[0_0_8px_rgba(0,240,255,0.4)]"></div>
          <div>
            <strong className="text-brand-dark font-display block text-xl mb-1 uppercase tracking-tight">Customer Data Platform (CDP) Integrations</strong>
            <span className="font-sans text-brand-dark/70 text-lg leading-relaxed">We aggregate highly siloed user touchpoints into a centralized master brain, giving you an omniscient view of every single customer's buying habits and lifetime value.</span>
          </div>
        </li>
        <li className="flex items-start gap-4">
          <div className="w-1.5 h-1.5 bg-brand-accent shrink-0 mt-2.5 rounded-sm shadow-[0_0_8px_rgba(0,240,255,0.4)]"></div>
          <div>
            <strong className="text-brand-dark font-display block text-xl mb-1 uppercase tracking-tight">Machine Learning Derived Loyalty Pipelines</strong>
            <span className="font-sans text-brand-dark/70 text-lg leading-relaxed">Predictive retention models that automatically trigger tailored rewards and outreach exactly when an algorithm detects a high-value customer is at risk of churning.</span>
          </div>
        </li>
      </ul>
    )
  },
  {
    images: [
      "/svc_data_1.png",
      "/svc_data_2.png"
    ],
    titleLine1: "DATA",
    titleLine2: "& MANAGEMENT",
    description: (
      <ul className="space-y-6 list-none mt-4">
        <li className="flex items-start gap-4">
          <div className="w-1.5 h-1.5 bg-brand-accent shrink-0 mt-2.5 rounded-sm shadow-[0_0_8px_rgba(0,240,255,0.4)]"></div>
          <div>
            <strong className="text-brand-dark font-display block text-xl mb-1 uppercase tracking-tight">Real-Time Dashboards & Campaign Monitoring</strong>
            <span className="font-sans text-brand-dark/70 text-lg leading-relaxed">Custom-built, live telemetry dashboards that provide you with absolute, crystal-clear transparency regarding ad-spend, client acquisition cost, and total ROI instantaneously.</span>
          </div>
        </li>
        <li className="flex items-start gap-4">
          <div className="w-1.5 h-1.5 bg-brand-accent shrink-0 mt-2.5 rounded-sm shadow-[0_0_8px_rgba(0,240,255,0.4)]"></div>
          <div>
            <strong className="text-brand-dark font-display block text-xl mb-1 uppercase tracking-tight">White-Glove Dedicated Account Management</strong>
            <span className="font-sans text-brand-dark/70 text-lg leading-relaxed">Direct, unlimited access to elite growth partners who act as an extension of your internal team, guiding daily execution and strategic pivots with proactive communication.</span>
          </div>
        </li>
        <li className="flex items-start gap-4">
          <div className="w-1.5 h-1.5 bg-brand-accent shrink-0 mt-2.5 rounded-sm shadow-[0_0_8px_rgba(0,240,255,0.4)]"></div>
          <div>
            <strong className="text-brand-dark font-display block text-xl mb-1 uppercase tracking-tight">Enterprise Tool, Software & API Licenses</strong>
            <span className="font-sans text-brand-dark/70 text-lg leading-relaxed">We equip your operational backend with access to the industry's most powerful, prohibitively expensive marketing software suites and commercial licensing integrations.</span>
          </div>
        </li>
        <li className="flex items-start gap-4">
          <div className="w-1.5 h-1.5 bg-brand-accent shrink-0 mt-2.5 rounded-sm shadow-[0_0_8px_rgba(0,240,255,0.4)]"></div>
          <div>
            <strong className="text-brand-dark font-display block text-xl mb-1 uppercase tracking-tight">Predictive Performance Analytics & Reporting</strong>
            <span className="font-sans text-brand-dark/70 text-lg leading-relaxed">Deep-dive statistical analyses that don't just summarize past performance, but mathematically forecast future revenue trends so you can allocate capital exactly where it belongs.</span>
          </div>
        </li>
        <li className="flex items-start gap-4">
          <div className="w-1.5 h-1.5 bg-brand-accent shrink-0 mt-2.5 rounded-sm shadow-[0_0_8px_rgba(0,240,255,0.4)]"></div>
          <div>
            <strong className="text-brand-dark font-display block text-xl mb-1 uppercase tracking-tight">A/B Testing & Continuous Conversion Optimization</strong>
            <span className="font-sans text-brand-dark/70 text-lg leading-relaxed">A relentless, scientific methodology of testing hundreds of variables—from button colors to headline copy—to incrementally squeeze every possible dollar from your traffic.</span>
          </div>
        </li>
      </ul>
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
            {/* Images */}
            <div className="w-full md:w-[45%] flex flex-col gap-6 md:gap-8 shrink-0">
              {service.images.map((img, idx) => (
                <div key={idx} className="w-full h-[350px] md:h-[450px] overflow-hidden rounded-[2rem] shadow-2xl group bg-brand-dark">
                  <img 
                    src={img} 
                    alt={`${service.titleLine1} detail ${idx + 1}`} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-85 group-hover:opacity-100"
                  />
                </div>
              ))}
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
