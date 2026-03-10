"use client";

export default function StickyCallButton() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
      <div className="flex gap-0 bg-[#111C2B] shadow-[0_-4px_20px_rgba(0,0,0,0.3)]">
        <a
          href="tel:+19165550127"
          className="flex flex-1 items-center justify-center gap-2 py-4 text-sm font-semibold uppercase tracking-wide text-white bg-[#2F80ED] transition-colors hover:bg-[#1E66C7]"
        >
          <svg
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
          </svg>
          Call Now
        </a>
        <a
          href="#contact"
          className="flex flex-1 items-center justify-center gap-2 border-l border-[rgba(255,255,255,0.08)] py-4 text-sm font-semibold uppercase tracking-wide text-white bg-[#2F80ED] transition-colors hover:bg-[#1E66C7]"
        >
          <svg
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>
          Get Quote
        </a>
      </div>
    </div>
  );
}
