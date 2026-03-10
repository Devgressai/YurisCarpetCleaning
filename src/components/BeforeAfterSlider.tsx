"use client";

import { useState, useRef, useCallback } from "react";

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

  const handleMouseDown = useCallback(() => {
    isDragging.current = true;
  }, []);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!isDragging.current) return;
      updatePosition(e.clientX);
    },
    [updatePosition]
  );

  const handleMouseUp = useCallback(() => {
    isDragging.current = false;
  }, []);

  const handleTouchMove = useCallback(
    (e: React.TouchEvent) => {
      updatePosition(e.touches[0].clientX);
    },
    [updatePosition]
  );

  return (
    <section className="bg-[#0B1420] py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold text-[#F8FAFC] sm:text-4xl">
            Results You Can See
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[#D6DEE8]">
            From stained carpet to dull grout lines, our cleaning process is built to produce visible improvement.
          </p>
        </div>

        <div className="mx-auto max-w-4xl">
          <div
            ref={containerRef}
            className="relative aspect-[16/9] cursor-col-resize select-none overflow-hidden rounded-2xl shadow-2xl"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchMove={handleTouchMove}
          >
            {/* Before (full width behind) */}
            <div className="absolute inset-0">
              <img
                src="/images/before-carpet.png"
                alt="Stained and worn carpet before professional cleaning"
                className="h-full w-full object-cover"
              />
            </div>

            {/* After (clipped) */}
            <div
              className="absolute inset-0"
              style={{ clipPath: `inset(0 0 0 ${sliderPos}%)` }}
            >
              <img
                src="/images/after-carpet.png"
                alt="Pristine carpet after professional deep cleaning by Yuri"
                className="h-full w-full object-cover"
              />
            </div>

            {/* Slider Line */}
            <div
              className="absolute top-0 bottom-0 z-10 w-1 bg-white shadow-lg"
              style={{ left: `${sliderPos}%`, transform: "translateX(-50%)" }}
            >
              <div className="absolute top-1/2 left-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-4 border-white bg-[#2F80ED] shadow-lg">
                <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                </svg>
              </div>
            </div>

            {/* Labels */}
            <div className="absolute bottom-4 left-4 z-10 rounded-full bg-[#0B1420]/80 px-4 py-1.5 text-sm font-medium text-[#F8FAFC] backdrop-blur-sm">
              Before
            </div>
            <div className="absolute bottom-4 right-4 z-10 rounded-full bg-[#2F80ED]/90 px-4 py-1.5 text-sm font-medium text-white backdrop-blur-sm">
              After
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
