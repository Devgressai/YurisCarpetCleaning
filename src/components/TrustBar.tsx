"use client";

import { useEffect, useState, useRef } from "react";

function AnimatedNumber({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const duration = 2000;
          const steps = 60;
          const increment = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="text-2xl md:text-3xl font-extrabold text-[#F8FAFC] font-[family-name:var(--font-manrope)]">
      {count}{suffix}
    </div>
  );
}

const trustItems = [
  { number: 27, suffix: "+", label: "Years of Experience" },
  { number: 5000, suffix: "+", label: "Homes Cleaned" },
  { number: 5, suffix: "\u2605", label: "Customer Rating" },
  { number: 22, suffix: "+", label: "Cities Served" },
];

export default function TrustBar() {
  return (
    <section className="relative border-y border-white/[0.06] bg-[#111C2B]/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {trustItems.map((item) => (
            <div key={item.label} className="text-center md:text-left">
              <AnimatedNumber target={item.number} suffix={item.suffix} />
              <div className="text-xs uppercase tracking-widest text-[#5E6B78] mt-1">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
