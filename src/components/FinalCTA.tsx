import Link from "next/link";

export default function FinalCTA() {
  return (
    <section className="bg-[#111C2B] py-24 px-6 md:px-12 lg:px-20">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-[family-name:var(--font-manrope)] text-3xl md:text-4xl lg:text-5xl font-bold text-[#F8FAFC] mb-6">
          Ready for Cleaner Carpet, Tile, and Grout?
        </h2>

        <p className="text-[#D6DEE8] text-lg leading-relaxed mb-10 max-w-xl mx-auto">
          Get fast, honest service from an experienced owner-operator serving
          Auburn and surrounding areas.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/contact"
            className="inline-block bg-[#2F80ED] hover:bg-[#1E66C7] text-white uppercase font-semibold text-sm tracking-wider rounded-xl px-8 py-4 transition-colors"
          >
            Get Free Quote
          </Link>
          <a
            href="tel:+19168893335"
            className="inline-block border border-white text-white uppercase font-semibold text-sm tracking-wider rounded-xl px-8 py-4 hover:bg-white/10 transition-colors"
          >
            Call Now
          </a>
        </div>
      </div>
    </section>
  );
}
