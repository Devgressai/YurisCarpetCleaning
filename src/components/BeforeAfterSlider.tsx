"use client";

import { useState, useRef, useCallback } from "react";
import { motion } from "framer-motion";

export default function BeforeAfterSlider() {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percent = Math.min(Math.max((x / rect.width) * 100, 0), 100);
    setSliderPos(percent);
  }, []);

  const handleMouseDown = useCallback(() => { isDragging.current = true; }, []);
  const handleMouseUp = useCallback(() => { isDragging.current = false; }, []);
  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDragging.current) return;
    updatePosition(e.clientX);
  }, [updatePosition]);
  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    updatePosition(e.touches[0].clientX);
  }, [updatePosition]);

  return (
    <section className="bg-[#0B1420] py-28 md:py-36">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-[#2F80ED] text-xs font-bold uppercase tracking-widest mb-4">
            Real Results
          </p>
          <h2 className="font-[family-name:var(--font-manrope)] text-4xl md:text-5xl font-extrabold text-[#F8FAFC]">
            Results You Can See
          </h2>
          <p className="mt-4 text-[#D6DEE8] text-lg max-w-xl mx-auto">
            From stained carpet to dull grout lines — our process delivers visible improvement every time.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-5xl mx-auto"
        >
          <div
            ref={containerRef}
            className="relative aspect-[16/9] cursor-col-resize select-none overflow-hidden rounded-2xl border border-white/[0.06]"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchMove={handleTouchMove}
          >
            {/* Before */}
            <div className="absolute inset-0">
              <img
                src="/images/before-carpet.png"
                alt="Stained carpet before professional cleaning"
                className="h-full w-full object-cover"
                draggable={false}
              />
            </div>

            {/* After */}
            <div
              className="absolute inset-0"
              style={{ clipPath: `inset(0 0 0 ${sliderPos}%)` }}
            >
              <img
                src="/images/after-carpet.png"
                alt="Clean carpet after professional deep cleaning"
                className="h-full w-full object-cover"
                draggable={false}
              />
            </div>

            {/* Slider */}
            <div
              className="absolute top-0 bottom-0 z-10 w-0.5 bg-white/80"
              style={{ left: `${sliderPos}%`, transform: "translateX(-50%)" }}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-[#2F80ED] border-4 border-white flex items-center justify-center shadow-xl glow-blue">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                </svg>
              </div>
            </div>

            {/* Labels */}
            <div className="absolute bottom-4 left-4 z-10 bg-[#0B1420]/80 backdrop-blur-sm text-white text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-lg">
              Before
            </div>
            <div className="absolute bottom-4 right-4 z-10 bg-[#2F80ED] text-white text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-lg">
              After
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
