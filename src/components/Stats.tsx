import { useEffect, useState, useRef } from 'react';
import { useInView } from 'framer-motion';

const stats = [
  { value: 196, label: "Clients" },
  { value: 14392, label: "Leads Generated", format: true },
  { value: 117, label: "Awards Won" },
  { value: 613, label: "Projects Completed" }
];

const Counter = ({ value, format }: { value: number, format?: boolean }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      const end = value;
      const duration = 2000;
      const startTime = performance.now();

      const animate = (currentTime: number) => {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1);
        
        // Easing function outExpo
        const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
        
        setCount(Math.floor(easeProgress * end));

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    }
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {format ? count.toLocaleString() : count}+
    </span>
  );
};

export const Stats = () => {
  return (
    <section className="py-24 px-6 md:px-12 bg-brand-dark text-white border-y border-white/10">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center md:items-start space-y-4">
              <h4 className="font-display text-7xl md:text-8xl lg:text-[7rem] font-bold text-brand-accent tracking-tighter">
                <Counter value={stat.value} format={stat.format} />
              </h4>
              <p className="font-sans text-xl md:text-2xl text-brand-gray tracking-wide uppercase">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
