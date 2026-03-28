import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';

function useCounter(val: number) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const duration = 2000;
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(progress * val);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [val]);

  const isFloat = val % 1 !== 0;
  return isFloat ? count.toFixed(1) : Math.floor(count);
}

function Counter({ value }: { value: number }) {
  const count = useCounter(value);
  return <span>{count}</span>;
}

import logo1 from '../assets/clients/ISAFE INTERNATIONAL.png';
import logo2 from '../assets/clients/ORCHID TREE.png';
import logo3 from '../assets/clients/PES UNIVERSITY.png';
import logo4 from '../assets/clients/SALAD SHAK.png';
import logo5 from '../assets/clients/VIP.png';
import logo6 from '../assets/clients/VOGUE SHADE.png';

type CaseStudy = {
  name: string;
  logo: any;
  heroImage: string; // Keeping this for now, though heroBackground is used in JSX
  tags: string;
  objective: string;
  narrative: string;
  stats: Array<{ value: string; label: string; }>;
  gallery: string[];
  category: string; // New property
  heroBackground?: string; // New optional property
  xFactorQuote?: string; // New optional property
  xFactorDescription?: string; // New optional property
  advancedTitle?: string;
  advancedSubtitle?: string;
  advancedMetrics?: {
    before: string[];
    after: string[];
    growth: Array<{ value: number; suffix: string; label: string; }>;
    closingStatement: string;
  };
};

export const caseStudyData: Record<string, CaseStudy> = {
  "vip": {
    name: "VIP",
    logo: logo5,
    heroImage: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=2000",
    category: "Brand Strategy & Design",
    heroBackground: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=2000&auto=format&fit=crop",
    xFactorQuote: "Legacy brands require modern architecture.",
    xFactorDescription: "For VIP, the X-Factor was translating decades of iconic brand history into a high-fidelity, highly functional digital product catalog. We engineered a sleek, architectural design system that resonates with modern wholesale distributors while fiercely protecting their premium consumer positioning.",
    tags: "BRANDING • CATALOG DESIGN",
    objective: "Molding a premium product catalog for an industry-leading conglomerate.",
    narrative: "VIP, an iconic Indian bag and suitcase company managing multiple sister brands, required a visual overhaul of their massive product catalog. We engineered a premium, high-fidelity catalog that perfectly encapsulated their luxury positioning while maintaining the functional clarity expected by their massive wholesale distribution network. By emphasizing high-end product photography and sleek, architectural grid layouts, we elevated the entire brand ecosystem.",
    stats: [
      { value: "40+", label: "PRODUCT LINES" },
      { value: "100%", label: "BRAND CONSISTENCY" },
      { value: "B2B", label: "WHOLESALE INTEGRATION" }
    ],
    gallery: ["/svc_1.png", "/svc_2.png"]
  },
  "isafe": {
    name: "ISAFE INTERNATIONAL",
    logo: logo1,
    heroImage: "https://images.unsplash.com/photo-1541888085935-4cb2d699479b?auto=format&fit=crop&q=80&w=2000",
    category: "Safety Education & Scaling",
    heroBackground: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2000&auto=format&fit=crop",
    xFactorQuote: "Global dominance requires targeted precision.",
    xFactorDescription: "For ISAFE, the X-Factor wasn't just generating leads—it was engineering a relentless omni-channel acquisition machine capturing high-intent engineering students across multiple international borders simultaneously. The following exhibits document that global deployment.",
    tags: "PAID MEDIA • OMNI-CHANNEL",
    objective: "Orchestrating complete online and offline paid advertising for a premier safety engineering institute.",
    narrative: "ISAFE International, a highly respected NEBOSH and safety engineering institute, partnered with Paradx to hyper-scale their global enrollment. We didn't just run ads; we executed a relentless omni-channel acquisition strategy. From highly targeted digital campaigns capturing high-intent engineering students to localized offline marketing pushes, we built a conversion engine that absolutely dominated the safety education sector.",
    advancedTitle: "We Don’t Run Campaigns. We Build Revenue Systems.",
    advancedSubtitle: "Scaling ISAFE International in 90 Days",
    advancedMetrics: {
      before: [
        "Unoptimized Revenue Baseline",
        "5 Students / Month",
        "No structured system"
      ],
      after: [
        "4.6X MRR Expansion",
        "23 Students / Month",
        "Scalable acquisition system"
      ],
      growth: [
        { value: 360, suffix: "%", label: "Revenue Growth" },
        { value: 10, suffix: "X", label: "ROI" },
        { value: 4.6, suffix: "X", label: "Student Growth" }
      ],
      closingStatement: "Built for Scale, Not Just Short-Term Wins. We implemented a multi-channel growth system combining partnerships, targeted outreach, branding, and conversion-focused campaigns — all working together as one engine."
    },
    stats: [
      { value: "3X", label: "LEAD VOLUME" },
      { value: "OMNI", label: "CHANNEL APPROACH" },
      { value: "TIER-1", label: "INSTITUTIONAL GROWTH" }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
    ]
  },
  "vogue-shade": {
    name: "VOGUE SHADE",
    logo: logo6,
    heroImage: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=2000",
    category: "Performance Marketing & Shoot",
    heroBackground: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=2000&auto=format&fit=crop",
    xFactorQuote: "Speed and scale define the modern market.",
    xFactorDescription: "The X-Factor for Vogue Shade was constructing a robust, lightning-fast digital infrastructure capable of handling intense D2C growth while simultaneously supporting a brand-new B2B wholesale portal. The resulting interfaces are optimized for absolute conversion.",
    tags: "E-COMMERCE • B2B PORTAL",
    objective: "Engineering a state-of-the-art website to scale D2C sales and streamline wholesale chains.",
    narrative: "Vogue Shade, a fast-growing t-shirt apparel company, needed a digital infrastructure capable of supporting rapid growth. We built a lightning-fast, highly optimized e-commerce website designed to aggressively increase direct-to-consumer sales while simultaneously launching a dedicated wholesale channel. This dual-pronged strategy allowed them to seamlessly connect with bulk buyers, drastically reducing operational spend and heavily increasing gross margins.",
    stats: [
      { value: "D2C", label: "REVENUE SPIKE" },
      { value: "B2B", label: "CHANNEL LAUNCHED" },
      { value: "ROI", label: "MAXIMIZED" }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1527719327859-c6ce80353573?q=80&w=800&auto=format&fit=crop",
    ]
  },
  "salad-shak": {
    name: "SALAD SHAK",
    logo: logo4,
    heroImage: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=2000",
    category: "Brand Consulting & Awareness",
    heroBackground: "https://images.unsplash.com/photo-1512621843614-b4ebcb28cb3e?q=80&w=2000&auto=format&fit=crop",
    xFactorQuote: "Digital momentum must drive physical action.",
    xFactorDescription: "For Salad Shak, the X-Factor was bridging the gap between digital awareness and immediate offline footfall. We engineered a localized, experiential branding strategy that transformed a standard health cafe into a daily, high-volume community destination.",
    tags: "LOCAL STRATEGY • BRANDING",
    objective: "Architecting a high-converting offline sales strategy for a vibrant local health cafe.",
    narrative: "Salad Shak, an energetic local cafe specializing in healthy shakes and snacks, required a strategy that translated digital energy into sheer offline foot traffic. We engineered a comprehensive point-of-sale and localized marketing strategy that captured the community's immediate attention. Through experiential marketing and pristine geo-targeting, we transformed a local cafe into a daily, high-volume lifestyle destination.",
    stats: [
      { value: "LOCAL", label: "MARKET DOMINANCE" },
      { value: "POS", label: "OPTIMIZED FOOTFALL" },
      { value: "100%", label: "COMMUNITY BUY-IN" }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1493770348161-369560ae357d?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?q=80&w=800&auto=format&fit=crop",
    ]
  },
  "orchid-tree": {
    name: "ORCHID TREE",
    logo: logo2,
    heroImage: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=2000",
    category: "E-Commerce & Digital Commerce",
    heroBackground: "https://images.unsplash.com/photo-1497215842964-222b330ce0fa?q=80&w=2000&auto=format&fit=crop",
    xFactorQuote: "True luxury cannot be advertised; it must be felt.",
    xFactorDescription: "The X-Factor for Orchid Tree was stripping away generic hospitality marketing and replacing it with cinematic, affluent storytelling. Every digital asset showcased here was meticulously crafted to position them as the definitive, undeniable luxury escape for the modern traveler.",
    tags: "SOCIAL MEDIA • CONTENT CREATION",
    objective: "Overhauling social media presence with stunning, premium hospitality content creation.",
    narrative: "Orchid Tree, a network of premium luxury resorts, needed a digital footprint that reflected the absolute exclusivity of their physical locations. Paradx stripped away the generic hospitality marketing playbook and produced high-end, immersive social content. By managing their daily social channels with cinematic visuals and affluent storytelling, we positioned Orchid Tree as the definitive luxury escape for the modern traveler.",
    stats: [
      { value: "10X", label: "SOCIAL ENGAGEMENT" },
      { value: "AURA", label: "PREMIUM POSITIONING" },
      { value: "D2C", label: "DIRECT BOOKINGS" }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop",
    ]
  },
  "pes": {
    name: "PES UNIVERSITY",
    logo: logo3,
    heroImage: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=2000",
    category: "Lead Generation & Performance",
    heroBackground: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?q=80&w=2000&auto=format&fit=crop",
    xFactorQuote: "Prestige must be engineered at scale.",
    xFactorDescription: "PES University required more than standard lead generation. The X-Factor was commanding massive visibility among elite candidate pools while actively elevating the institution's historical prestige. The campaigns below reflect that uncompromising standard of excellence.",
    tags: "PAID MEDIA • LEAD GEN",
    objective: "Capturing massive visibility among high-potential candidate pools through premium ad campaigns.",
    narrative: "PES University, a massive and highly prestigious group of educational institutions, partnered with Paradx to slice through the highly competitive academic advertising space. We conceptualized and deployed a breathtaking, premium ad campaign meticulously designed to elevate the institution's prestige while acting as a hyper-efficient lead generation tool. The campaign successfully positioned PES directly in front of an uprising wave of elite potential candidates.",
    stats: [
      { value: "ELITE", label: "CANDIDATE TARGETING" },
      { value: "SCALE", label: "AD VISIBILITY" },
      { value: "APEX", label: "BRAND EQUITY" }
    ],
    gallery: [
      "https://res.cloudinary.com/dqcml6pbi/video/upload/v1774663877/IMG_2408_jszun2.mp4",
      "https://res.cloudinary.com/dqcml6pbi/video/upload/v1774663846/-5013837415203791951_sznnhe.mov",
      "https://res.cloudinary.com/dqcml6pbi/video/upload/v1774663841/-7791242008770701953_yyr1ht.mov"
    ]
  }
};

// Dynamically fetch all images/videos from the portfolio folders across the entire src/assets/portfolio directory
// Using Vite's import.meta.glob to automatically bundle anything dropped into these folders. (HMR trigger swapped)
const allMediaFiles = import.meta.glob('../assets/portfolio/**/*.{png,PNG,jpg,JPG,jpeg,JPEG,webp,WEBP,gif,GIF,mp4,MP4,webm,WEBM,pdf,PDF}', { eager: true, as: 'url' });

const RenderMediaItem = ({ url, className = "" }: { url: any, className?: string }) => {
  // Bulletproof object extraction in case Vite's import.meta.glob returns a module object instead of a direct string
  const resolvedUrl = typeof url === 'string' ? url : (url?.default || "");
  
  if (!resolvedUrl) return null;

  const lowerUrl = resolvedUrl.toLowerCase();
  const isVideo = lowerUrl.endsWith('.mp4') || lowerUrl.endsWith('.webm') || lowerUrl.endsWith('.mov');
  const isPdf = lowerUrl.endsWith('.pdf');

  if (isPdf) {
    return (
      <div className={`relative bg-brand-dark group overflow-hidden ${className}`}>
        <iframe src={`${resolvedUrl}#toolbar=0&navpanes=0&scrollbar=0`} className="w-full h-full object-cover scale-[1.02] border-none outline-none" title="Portfolio Document" />
        <div className="absolute inset-0 bg-brand-dark/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none flex items-center justify-center z-10">
          <a href={resolvedUrl} target="_blank" rel="noopener noreferrer" className="bg-brand-accent text-brand-dark px-8 py-4 rounded-full font-sans font-bold text-sm tracking-widest uppercase shadow-2xl pointer-events-auto transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 hover:scale-105">
            Read Full Doc
          </a>
        </div>
      </div>
    );
  }

  if (isVideo) {
    return (
      <video src={resolvedUrl} className={`w-full h-auto object-cover transition-transform duration-[1.5s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03] block origin-center ${className}`} autoPlay loop muted playsInline />
    );
  }

  return (
    <img src={resolvedUrl} className={`w-full h-auto object-cover transition-transform duration-[1.5s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03] block origin-center ${className}`} alt="Portfolio Showcase" />
  );
};

const PortfolioGallery = ({ items, clientName, xQuote, xDesc }: { items: string[], clientName: string, xQuote?: string, xDesc?: string }) => {
  if (items.length === 0) return null;

  return (
    <section className="bg-brand-dark py-32 px-6 md:px-12 relative z-30 overflow-hidden border-t border-white/5">
      {/* Geometric Background Accents */}
      <div className="absolute top-20 right-[-10vw] w-[40vw] h-[40vw] border-[2px] border-brand-accent rounded-full opacity-10 pointer-events-none"></div>
      <div className="absolute bottom-10 left-[-5vw] w-[20vw] h-[20vw] border-[2px] border-brand-accent rounded-full opacity-10 pointer-events-none"></div>

      {/* Diagonal Hatch Pattern */}
      <div className="absolute top-40 left-12 w-32 h-32 opacity-10 pointer-events-none hidden md:block" style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, #00E5FF 10px, #00E5FF 12px)' }}></div>
      <div className="absolute bottom-40 right-12 w-48 h-48 opacity-10 pointer-events-none hidden md:block" style={{ backgroundImage: 'repeating-linear-gradient(-45deg, transparent, transparent 10px, #00E5FF 10px, #00E5FF 12px)' }}></div>

      <div className="max-w-[1400px] mx-auto relative z-10">

        {/* Section Header interacting physically with the layout - Watermark */}
        <div className="absolute top-0 right-full mr-8 origin-top-right -rotate-90 hidden xl:block pointer-events-none z-0">
          <h2 className="font-display font-black text-[8rem] text-white/5 uppercase tracking-tighter whitespace-nowrap select-none">
            THE PARAD<span className="text-brand-accent/20">X</span> FACTOR.
          </h2>
        </div>

        {/* Central Graphic Title for Mobile/Tablet */}
        <div className="block xl:hidden mb-20 text-center md:text-left pointer-events-none z-0">
          <h2 className="font-display font-black text-6xl text-white/10 uppercase tracking-tighter leading-none mb-4">
            THE PARAD<span className="text-brand-accent/30">X</span><br />FACTOR.
          </h2>
          <div className="w-24 h-1 bg-brand-accent/20 mx-auto md:mx-0"></div>
        </div>

        {/* NATIVE RESPONSIVE JAVASCRIPT MASONRY ENGINE */}
        <div className="w-full relative z-20">

          {/* Reusable Strategy Block */}
          {(() => {
            const strategyBlock = (
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="w-full max-w-[450px] mx-auto break-inside-avoid relative group bg-[#0F0F0F] p-10 md:p-14 border border-brand-accent/20 shadow-[0_30px_60px_rgba(0,0,0,0.8)] mb-12"
              >
                <div className="w-12 h-[2px] bg-brand-accent mb-6"></div>
                <h3 className="font-display font-black text-4xl md:text-5xl text-white uppercase tracking-tighter leading-none mb-6">
                  THE <span className="text-brand-accent">X</span><br />FACTOR.
                </h3>
                <p className="font-serif italic text-white/80 text-xl leading-relaxed mb-6">
                  "{xQuote || "Execution without strategy is just noise."}"
                </p>
                <p className="font-sans text-white/50 text-sm leading-loose mb-10">
                  {xDesc || `The following exhibits document our uncompromised tactical deployment for ${clientName}. Every asset, interface, and campaign captured here is a direct reflection of the visionary standard Paradx demands.`}
                </p>
                <div className="w-full h-[1px] bg-gradient-to-r from-brand-accent/40 to-transparent"></div>
              </motion.div>
            );

            const renderItem = (mediaUrl: string, globalIdx: number) => (
              <motion.div
                key={globalIdx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="w-full max-w-[450px] mx-auto break-inside-avoid relative group mb-12 md:mb-20 lg:mb-32"
              >
                {/* Decorative offset border matching the magazine style */}
                <div className="absolute -inset-4 md:-inset-6 border-[2px] border-brand-accent/30 rounded-none z-0 translate-x-4 translate-y-4 md:translate-x-6 md:translate-y-6 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500"></div>

                {/* Mobile Vibrant / Desktop Grayscale block with warm overlay */}
                <div className="relative z-10 w-full overflow-hidden shadow-2xl bg-brand-dark filter md:grayscale group-hover:grayscale-0 transition-all duration-700">
                  <div className="absolute inset-0 bg-brand-accent/10 mix-blend-overlay z-20 group-hover:opacity-0 transition-opacity duration-700 pointer-events-none"></div>
                  <RenderMediaItem url={mediaUrl} className={(typeof mediaUrl === 'string' ? mediaUrl : (mediaUrl as any)?.default || '').toLowerCase().endsWith('.pdf') ? "aspect-[3/4]" : "h-auto max-h-[80vh] object-contain"} />
                </div>

                {/* Minimalist Editorial Caption */}
                <div className="mt-12 md:mt-16 flex flex-col items-start relative z-10 pl-2">
                  <div className="w-12 h-[2px] bg-brand-accent mb-4"></div>
                  <p className="font-serif italic text-white/50 text-sm md:text-base">Paradx Digital</p>
                  <p className="font-sans text-brand-accent text-xs md:text-sm font-bold uppercase tracking-[0.3em] mt-1">Exhibit {String(globalIdx + 1).padStart(2, '0')}</p>
                </div>
              </motion.div>
            );

            return (
              <>
                {/* Desktop Layout (3 Columns) */}
                <div className="hidden lg:grid grid-cols-3 gap-20 items-start">
                  <div className="flex flex-col">
                    {strategyBlock}
                    {items.filter((_, i) => i % 3 === 0).map((url) => renderItem(url, items.indexOf(url)))}
                  </div>
                  <div className="flex flex-col mt-32">
                    {items.filter((_, i) => i % 3 === 1).map((url) => renderItem(url, items.indexOf(url)))}
                  </div>
                  <div className="flex flex-col mt-16">
                    {items.filter((_, i) => i % 3 === 2).map((url) => renderItem(url, items.indexOf(url)))}
                  </div>
                </div>

                {/* Tablet Layout (2 Columns) */}
                <div className="hidden md:grid lg:hidden grid-cols-2 gap-12 items-start">
                  <div className="flex flex-col">
                    {strategyBlock}
                    {items.filter((_, i) => i % 2 === 0).map((url) => renderItem(url, items.indexOf(url)))}
                  </div>
                  <div className="flex flex-col mt-20">
                    {items.filter((_, i) => i % 2 === 1).map((url) => renderItem(url, items.indexOf(url)))}
                  </div>
                </div>

                {/* Mobile Layout (1 Column) */}
                <div className="grid md:hidden grid-cols-1 gap-12 items-start">
                  {strategyBlock}
                  {items.map((url) => renderItem(url, items.indexOf(url)))}
                </div>
              </>
            );
          })()}
        </div>
      </div>
    </section>
  );
};

export const CaseStudyDetail = ({ clientId, onBack, setActivePage }: { clientId: string, onBack: () => void, setActivePage: (page: string) => void }) => {
  const data = caseStudyData[clientId];

  if (!data) return <div className="min-h-screen flex items-center justify-center text-white">Case Study Not Found</div>;

  // Extract and sort gallery globally for the case study
  const clientMediaKeys = Object.keys(allMediaFiles).filter(path => path.includes(`/${clientId}/`));
  clientMediaKeys.sort((a, b) => {
    const fileA = a.split('/').pop() || '';
    const fileB = b.split('/').pop() || '';

    // Regex extract safe leading numbers for bulletproof sorting (e.g. "01_img" parses 1)
    const numA = parseInt(fileA.match(/\d+/) ? fileA.match(/\d+/)?.[0] || '99999' : '99999');
    const numB = parseInt(fileB.match(/\d+/) ? fileB.match(/\d+/)?.[0] || '99999' : '99999');

    // Strict numeric evaluation
    if (numA !== numB) return numA - numB;

    return fileA.localeCompare(fileB, undefined, { numeric: true, sensitivity: 'base' });
  });

  const clientMediaUrls = clientMediaKeys.map(key => allMediaFiles[key] as unknown as string);
  const activeGallery = clientMediaUrls.length > 0 ? clientMediaUrls : data.gallery;

  return (
    <div className="bg-brand-light min-h-screen text-brand-dark relative z-50 selection:bg-brand-accent selection:text-brand-dark">

      {/* Floating Back Button */}
      <button
        onClick={onBack}
        className="fixed top-28 left-6 md:left-12 z-[100] flex items-center gap-3 bg-brand-dark/90 backdrop-blur-md text-white px-6 py-3 rounded-full hover:bg-brand-accent hover:text-brand-dark transition-colors shadow-2xl group"
      >
        <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
        <span className="font-sans font-bold text-sm tracking-widest uppercase">Back to Work</span>
      </button>

      {/* Dynamic Hero Section */}
      <section className="relative w-full min-h-[80vh] py-24 md:py-32 flex flex-col items-center justify-center overflow-hidden">

        {/* Cinematic Dynamic Background */}
        <div className="absolute inset-0 z-0 overflow-hidden bg-brand-dark">
          <img
            src={data.heroBackground || "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2000"}
            alt={`${data.name} Background`}
            className="w-full h-full object-cover opacity-[0.25] select-none pointer-events-none scale-105 filter grayscale mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-brand-accent/5 mix-blend-overlay"></div>
          {/* Main darkening gradient to protect white text */}
          <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/40 via-brand-dark/80 to-brand-dark"></div>
        </div>

        {/* Content Layer */}
        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 flex flex-col items-center text-center mt-20">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="w-full"
          >
            <span className="font-sans font-bold text-brand-accent tracking-[0.3em] text-sm uppercase block mb-8">
              {data.tags}
            </span>

            {/* Break-Proof Responsive Title */}
            <h1 className="font-display font-black text-6xl md:text-[clamp(5rem,9vw,12rem)] leading-[0.9] tracking-tight uppercase text-white drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)] relative z-0 mx-auto max-w-5xl">
              {data.name}
            </h1>
          </motion.div>

          {/* Floating Pristine White Device / Logo Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 100 }}
            animate={{ opacity: 1, scale: 1, y: -40 }}
            transition={{ duration: 1, delay: 0.4, type: "spring", stiffness: 50 }}
            className="w-full max-w-2xl mx-auto h-[400px] relative z-20 mt-12 md:mt-0 flex items-center justify-center"
          >
            {/* Dynamic Light Logo Presentation Frame */}
            <div className="w-80 md:w-[400px] aspect-square bg-white rounded-[3rem] p-16 shadow-[0_40px_100px_rgba(0,0,0,0.3)] border border-gray-100 flex items-center justify-center -rotate-3 hover:rotate-0 transition-transform duration-700 hover:-translate-y-4 hover:shadow-[0_40px_100px_rgba(0,229,255,0.2)]">
              <img src={data.logo} alt="Client Logo" className="w-full h-full object-contain filter drop-shadow-xl" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Story / Objective Section */}
      <section className="bg-white py-32 px-6 md:px-12 relative z-30 -mt-32 rounded-t-[3rem] shadow-[0_-20px_50px_rgba(0,0,0,0.1)]">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24">

          {/* Objective Box */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-brand-light rounded-[2rem] p-10 md:p-14 border border-brand-dark/5"
          >
            <div className="font-display font-black text-3xl md:text-4xl text-brand-dark uppercase tracking-tighter mb-4">
              THE OBJECTIVE
            </div>
            <div className="w-12 h-1 bg-brand-accent mb-8"></div>
            <p className="font-serif italic text-2xl md:text-3xl text-brand-dark leading-relaxed">
              "{data.objective}"
            </p>
          </motion.div>

          {/* Delivery Box */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <div className="font-display font-black text-3xl md:text-4xl text-brand-dark uppercase tracking-tighter mb-4">
              WHAT PARADX DELIVERED
            </div>
            <div className="w-12 h-1 bg-brand-dark mb-8"></div>
            <p className="font-sans text-xl md:text-xl text-brand-gray/90 leading-relaxed font-normal">
              {data.narrative}
            </p>
          </motion.div>

        </div>
      </section>

      {/* Results Section Routing */}
      {data.advancedMetrics ? (
        <section className="bg-brand-dark py-32 px-6 md:px-12 relative z-30 text-white border-t border-white/5">
          <div className="max-w-[1400px] mx-auto">

            {/* Title */}
            <div className="text-center mb-24 max-w-4xl mx-auto">
              <span className="text-brand-accent font-bold tracking-widest text-sm uppercase mb-6 block">Case Study Execution</span>
              <h2 className="text-4xl md:text-6xl font-display font-black leading-[0.9] tracking-tighter uppercase mb-6">
                {data.advancedTitle}
              </h2>
              <p className="text-white/60 font-sans text-lg md:text-xl">{data.advancedSubtitle}</p>
            </div>

            {/* Before / After Impact */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-32 max-w-6xl mx-auto">
              <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-[#111] p-10 md:p-14 rounded-[2rem] md:rounded-[3rem] border border-white/5 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 blur-[80px]"></div>
                <h3 className="font-display font-black text-3xl md:text-4xl text-white/40 uppercase tracking-tight mb-10">Before Paradx</h3>
                <ul className="space-y-6 text-white/50 font-sans text-lg md:text-xl">
                  {data.advancedMetrics.before.map((metric: string, i: number) => (
                    <li key={i} className="flex items-center gap-6"><div className="w-2 h-2 shrink-0 rounded-full bg-white/20"></div>{metric}</li>
                  ))}
                </ul>
              </motion.div>

              <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-[#050505] p-10 md:p-14 rounded-[2rem] md:rounded-[3rem] border border-brand-accent shadow-[0_0_50px_rgba(0,229,255,0.05)] relative overflow-hidden group">
                <div className="absolute inset-0 bg-brand-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="absolute top-0 right-0 w-64 h-64 bg-brand-accent/20 blur-[100px]"></div>
                <h3 className="font-display font-black text-3xl md:text-4xl text-brand-accent uppercase tracking-tight mb-10">After (90 Days)</h3>
                <ul className="space-y-6 text-white font-sans text-lg md:text-xl relative z-10">
                  {data.advancedMetrics.after.map((metric: string, i: number) => (
                    <li key={i} className="flex items-center gap-6"><div className="w-2 h-2 shrink-0 rounded-full bg-brand-accent shadow-[0_0_15px_rgba(0,229,255,1)] animate-pulse"></div>{metric}</li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Interactive Visualizations */}
            <div className="mb-24 relative max-w-6xl mx-auto">
              <div className="flex flex-col items-center mb-16">
                <div className="w-12 h-1 bg-brand-accent mb-6"></div>
                <h3 className="font-display font-black text-4xl md:text-5xl uppercase tracking-tighter">Growth Visualization</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                {data.advancedMetrics.growth.map((metric: any, i: number) => (
                  <div key={i} className="bg-[#111] p-10 rounded-[2rem] border border-white/5 relative overflow-hidden group hover:border-brand-accent/30 transition-colors duration-500 shadow-2xl">
                    <h3 className="text-6xl md:text-[5rem] font-display font-black text-brand-accent mb-2 drop-shadow-[0_0_30px_rgba(0,229,255,0.3)]">
                      <Counter value={metric.value} />{metric.suffix}
                    </h3>
                    <p className="text-white/60 font-sans font-bold tracking-[0.2em] text-sm uppercase">{metric.label}</p>
                    <div className="mt-8 h-2 bg-white/5 rounded-full overflow-hidden w-full relative">
                      <motion.div initial={{ width: 0 }} whileInView={{ width: "100%" }} viewport={{ once: true }} transition={{ duration: 1.5, delay: i * 0.3, ease: "easeOut" }} className="absolute top-0 left-0 bottom-0 bg-brand-accent rounded-full shadow-[0_0_15px_rgba(0,229,255,0.8)]" />
                    </div>
                  </div>
                ))}
              </div>

              {/* Cinematic SVG 90-Day Progression Graph */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-[#050505] border border-white/5 rounded-[2.5rem] p-10 md:p-16 relative overflow-visible shadow-2xl w-full"
              >
                <div className="absolute top-0 right-[-10vw] w-[400px] h-[400px] bg-brand-accent/5 blur-[100px] rounded-full pointer-events-none"></div>

                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 relative z-20">
                  <div>
                    <h4 className="font-display font-black text-3xl md:text-5xl text-white uppercase tracking-tighter mb-2">Revenue Scaling Trajectory</h4>
                    <p className="font-sans text-brand-accent font-bold text-xs tracking-[0.3em] uppercase block">90-Day Active Execution</p>
                  </div>
                  <div className="mt-6 md:mt-0 text-left md:text-right hidden sm:block">
                    <span className="font-display font-black text-4xl text-brand-accent">4.6X</span>
                    <p className="font-sans text-white/50 text-[10px] tracking-[0.2em] uppercase">Peak Revenue Multiplier</p>
                  </div>
                </div>

                {/* The SVG Chart Canvas */}
                <div className="relative w-full h-[250px] md:h-[350px] border-l-[2px] border-b-[2px] border-white/20 z-10 flex">

                  {/* Y-Axis Guidelines */}
                  <div className="absolute inset-x-0 inset-y-0 flex flex-col justify-between hidden md:flex opacity-20 pointer-events-none">
                    <div className="w-full h-px bg-white/40 border-t border-dashed border-white/40"></div>
                    <div className="w-full h-px bg-white/40 border-t border-dashed border-white/40"></div>
                    <div className="w-full h-px bg-white/40 border-t border-dashed border-white/40"></div>
                    <div className="w-full h-px bg-white/40 border-t border-dashed border-white/40"></div>
                    <div></div>
                  </div>
                  <div className="absolute -left-16 top-0 bottom-0 py-1 flex flex-col justify-between font-sans font-bold text-[10px] uppercase text-white/30 tracking-widest text-right w-12 hidden md:flex">
                    <span>5X</span>
                    <span>4X</span>
                    <span>3X</span>
                    <span>2X</span>
                    <span>1X</span>
                  </div>

                  {/* SVG Line Graph */}
                  <svg
                    className="absolute inset-0 w-full h-full overflow-visible"
                    preserveAspectRatio="none"
                    viewBox="0 0 1000 400"
                  >
                    <defs>
                      <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#00E5FF" stopOpacity="0.4" />
                        <stop offset="60%" stopColor="#00E5FF" stopOpacity="0.1" />
                        <stop offset="100%" stopColor="#00E5FF" stopOpacity="0" />
                      </linearGradient>
                      <filter id="neonGlow">
                        <feGaussianBlur stdDeviation="6" result="coloredBlur" />
                        <feMerge>
                          <feMergeNode in="coloredBlur" />
                          <feMergeNode in="SourceGraphic" />
                        </feMerge>
                      </filter>
                    </defs>

                    {/* Soft Area Fill */}
                    <motion.path
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: 0.8 }}
                      d="M 0,380 C 250,370 450,280 650,150 C 800,50 900,20 1000,20 L 1000,400 L 0,400 Z"
                      fill="url(#chartGradient)"
                    />

                    {/* The Glowing Cyan Trace Line */}
                    <motion.path
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 2, ease: "easeInOut" }}
                      d="M 0,380 C 250,370 450,280 650,150 C 800,50 900,20 1000,20"
                      fill="none"
                      stroke="#00E5FF"
                      strokeWidth="6"
                      strokeLinecap="round"
                      filter="url(#neonGlow)"
                    />

                    {/* End Cap Pulse */}
                    <motion.circle
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 1.8, type: "spring" }}
                      cx="1000" cy="20" r="12" fill="#00E5FF" stroke="#000" strokeWidth="4"
                      className="drop-shadow-[0_0_30px_rgba(0,229,255,1)]"
                    />
                    <motion.circle
                      initial={{ scale: 0, opacity: 1 }}
                      whileInView={{ scale: 3, opacity: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 2, duration: 2, repeat: Infinity }}
                      cx="1000" cy="20" r="10" fill="none" stroke="#00E5FF" strokeWidth="2"
                    />
                  </svg>

                  {/* X-Axis Anchor Points */}
                  <div className="absolute -bottom-10 left-0 right-0 flex justify-between font-sans font-bold text-[10px] md:text-xs text-brand-accent/50 tracking-[0.2em] uppercase">
                    <span>Day 1</span>
                    <span className="ml-[10%]">Day 30</span>
                    <span className="ml-[25%] hidden md:block">Day 60</span>
                    <span>Day 90</span>
                  </div>

                  {/* Absolute Hover Tooltip */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 2.2, type: "spring" }}
                    className="absolute top-[-35px] right-[-15px] bg-brand-accent text-[#000] px-4 py-2 font-display font-black text-sm uppercase shadow-[0_15px_30px_rgba(0,229,255,0.4)] md:rounded-tl-2xl rounded-sm"
                  >
                    System Scaled
                  </motion.div>
                </div>
              </motion.div>
            </div>

            {/* Deep Dive Elite Copy & Advanced Hook */}
            <div className="max-w-5xl mx-auto relative z-20 space-y-32 mb-16 mt-32">

              {/* Section 1: Positioning */}
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center">
                <h3 className="font-display font-black text-4xl md:text-[4rem] leading-[0.9] text-white uppercase tracking-tighter mb-8">
                  This Wasn’t Marketing.<br />
                  <span className="text-brand-accent drop-shadow-[0_0_30px_rgba(0,229,255,0.5)]">This Was Engineering Growth.</span>
                </h3>
                <p className="font-sans text-xl md:text-2xl text-white/50 leading-relaxed font-light">
                  <strong className="text-white block mb-2">Most agencies focus on ads.</strong>
                  We focus on building systems that generate revenue consistently.
                </p>
              </motion.div>

              {/* Section 2: The Multi-Channel Output Grid */}
              <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="bg-[#050505] border border-brand-accent/20 rounded-[3rem] p-10 md:p-16 relative overflow-hidden shadow-[0_30px_100px_rgba(0,0,0,0.8)]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,229,255,0.1)_0%,transparent_60%)] pointer-events-none"></div>
                <h4 className="font-sans font-bold text-brand-accent tracking-[0.3em] uppercase text-xs md:text-sm mb-6 text-center md:text-left">The Ecosystem</h4>
                <p className="font-serif italic text-2xl md:text-3xl text-white/90 leading-relaxed mb-16 text-center md:text-left max-w-2xl">
                  We implemented a multi-channel growth system combining:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-16 relative z-10 w-full max-w-4xl mx-auto">
                  <div className="flex items-center gap-6 group"><div className="w-12 h-[2px] bg-brand-accent group-hover:w-16 transition-all duration-300"></div><span className="font-sans font-bold text-lg md:text-xl text-white/90 uppercase tracking-wide group-hover:text-brand-accent transition-colors">Strategic Partnerships</span></div>
                  <div className="flex items-center gap-6 group"><div className="w-12 h-[2px] bg-brand-accent group-hover:w-16 transition-all duration-300"></div><span className="font-sans font-bold text-lg md:text-xl text-white/90 uppercase tracking-wide group-hover:text-brand-accent transition-colors">Hyper-Targeted Outreach</span></div>
                  <div className="flex items-center gap-6 group"><div className="w-12 h-[2px] bg-brand-accent group-hover:w-16 transition-all duration-300"></div><span className="font-sans font-bold text-lg md:text-xl text-white/90 uppercase tracking-wide group-hover:text-brand-accent transition-colors">High-Visibility Branding</span></div>
                  <div className="flex items-center gap-6 group"><div className="w-12 h-[2px] bg-brand-accent group-hover:w-16 transition-all duration-300"></div><span className="font-sans font-bold text-lg md:text-xl text-white/90 uppercase tracking-wide group-hover:text-brand-accent transition-colors">Conversion-Focused Campaigns</span></div>
                </div>
                <div className="w-full flex justify-center md:justify-start relative z-10">
                  <p className="inline-block bg-[#111] border border-brand-accent/40 px-6 py-4 rounded-full font-sans text-brand-accent font-bold tracking-[0.2em] text-xs md:text-sm uppercase shadow-[0_0_20px_rgba(0,229,255,0.15)]">
                    All designed to work together — not in silos.
                  </p>
                </div>
              </motion.div>

            </div>

          </div>
        </section>
      ) : (
        <section className="bg-brand-dark py-32 px-6 md:px-12 relative z-30 text-white border-t border-white/5">
          <div className="max-w-[1400px] mx-auto">
            <div className="flex flex-col items-center mb-24">
              <span className="font-sans text-brand-accent font-bold tracking-[0.3em] uppercase text-sm mb-4">The Impact</span>
              <h2 className="font-display font-black text-6xl md:text-[7rem] tracking-tighter uppercase leading-none">
                RESULTS
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 divide-y md:divide-y-0 md:divide-x divide-white/10 text-center">
              {data.stats.map((stat: any, i: number) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2, duration: 0.6 }}
                  className="flex flex-col items-center justify-center pt-16 md:pt-0"
                >
                  <div className="font-display font-black text-7xl lg:text-[8rem] text-brand-accent leading-none tracking-tighter mb-4 drop-shadow-[0_0_30px_rgba(0,229,255,0.3)]">
                    {stat.value}
                  </div>
                  <div className="font-sans font-bold text-white/50 tracking-[0.2em] text-sm lg:text-base">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Auto-Populating Visual Portfolio Showcase */}
      <PortfolioGallery items={activeGallery} clientName={data.name} xQuote={data.xFactorQuote} xDesc={data.xFactorDescription} />

      {/* Global Page-End Hard CTA */}
      <section className="bg-[#050505] py-32 px-6 md:px-12 relative z-40 border-t border-brand-accent/20">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center flex flex-col items-center max-w-5xl mx-auto">
          <div className="absolute top-0 right-1/2 translate-x-1/2 w-[600px] h-[400px] bg-brand-accent/5 blur-[120px] rounded-full pointer-events-none"></div>
          <h3 className="font-display font-black text-5xl md:text-[5rem] leading-[0.9] text-white uppercase tracking-tighter mb-6 relative z-10">
            Got A Similar Idea?<br /><span className="text-white/40">Launch Before Your Competitor Does.</span>
          </h3>
          <p className="font-serif italic text-brand-accent/80 text-2xl md:text-3xl mb-12 relative z-10">
            Reach out to us to own your market.
          </p>
          <button
            onClick={() => setActivePage('Contact Us')}
            className="inline-flex items-center gap-4 bg-brand-accent text-[#000] px-12 py-6 rounded-full font-sans font-black tracking-[0.2em] text-sm md:text-base uppercase shadow-[0_0_40px_rgba(0,229,255,0.4)] hover:shadow-[0_0_80px_rgba(0,229,255,0.8)] transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02] relative z-10"
          >
            Book a Strategy Call <ArrowRight size={24} />
          </button>
        </motion.div>
      </section>

    </div>
  );
};
