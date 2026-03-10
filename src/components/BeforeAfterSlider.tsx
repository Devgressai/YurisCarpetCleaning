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
    <section className="bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#0076CE]">
            Results You Can See
          </p>
          <h2 className="mt-3 text-3xl font-bold text-[#052C52] sm:text-4xl">
            Before &amp; After
          </h2>
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
            <div className="absolute inset-0 bg-gradient-to-br from-gray-400 via-gray-500 to-gray-600">
              <div className="flex h-full items-center justify-center">
                <div className="text-center">
                  <div className="mx-auto mb-3 h-16 w-16 rounded-full bg-gray-700/30" />
                  <p className="text-lg font-medium text-gray-700/60">
                    Stained &amp; Worn Carpet
                  </p>
                </div>
              </div>
            </div>

            {/* After (clipped) */}
            <div
              className="absolute inset-0 bg-gradient-to-br from-[#e8f4fd] via-[#cce7f8] to-[#b0d9f2]"
              style={{ clipPath: `inset(0 0 0 ${sliderPos}%)` }}
            >
              <div className="flex h-full items-center justify-center">
                <div className="text-center">
                  <div className="mx-auto mb-3 h-16 w-16 rounded-full bg-[#0076CE]/20" />
                  <p className="text-lg font-medium text-[#052C52]/60">
                    Fresh &amp; Restored
                  </p>
                </div>
              </div>
            </div>

            {/* Slider Line */}
            <div
              className="absolute top-0 bottom-0 z-10 w-1 bg-white shadow-lg"
              style={{ left: `${sliderPos}%`, transform: "translateX(-50%)" }}
            >
              <div className="absolute top-1/2 left-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-4 border-white bg-[#0076CE] shadow-lg">
                <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                </svg>
              </div>
            </div>

            {/* Labels */}
            <div className="absolute bottom-4 left-4 z-10 rounded-full bg-black/60 px-4 py-1.5 text-sm font-medium text-white backdrop-blur-sm">
              Before
            </div>
            <div className="absolute bottom-4 right-4 z-10 rounded-full bg-white/80 px-4 py-1.5 text-sm font-medium text-[#052C52] backdrop-blur-sm">
              After
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
