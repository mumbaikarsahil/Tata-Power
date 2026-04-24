import { useEffect, useState, useRef } from "react";

const stats = [
  { value: 34, suffix: "+", label: "Years of Experience" },
  { value: 10, suffix: " GW", label: "Total Capacity Installed" },
  { value: 4.3, suffix: " GW", label: "Manufacturing Capacity" },
  { value: 100, suffix: "+", label: "Countries Served" },
];

const useCountUp = (end: number, duration: number, trigger: boolean) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!trigger) return;
    let start = 0;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start * 10) / 10);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [end, duration, trigger]);
  return count;
};

const StatItem = ({ value, suffix, label, trigger }: { value: number; suffix: string; label: string; trigger: boolean }) => {
  const count = useCountUp(value, 2000, trigger);
  return (
    <div className="text-center">
      <div className="font-heading font-black text-4xl lg:text-6xl text-accent mb-2">
        {Number.isInteger(value) ? Math.floor(count) : count.toFixed(1)}
        <span className="text-3xl lg:text-5xl">{suffix}</span>
      </div>
      <p className="font-heading text-sm text-primary-foreground/70 tracking-wide uppercase">{label}</p>
    </div>
  );
};

const StatsSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="bg-gradient-navy py-20 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6">
          {stats.map((stat) => (
            <StatItem key={stat.label} {...stat} trigger={visible} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
