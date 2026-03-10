import Link from "next/link";

interface Neighbor {
  name: string;
  slug: string;
}

interface NearbyAreasProps {
  currentSlug: string;
  neighbors: Neighbor[];
}

export default function NearbyAreas({ currentSlug, neighbors }: NearbyAreasProps) {
  if (!neighbors || neighbors.length === 0) return null;

  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-10 text-center text-2xl font-bold text-[#052C52] sm:text-3xl">
          Also Serving Nearby Homeowners in&hellip;
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-4">
          {neighbors
            .filter((n) => n.slug !== currentSlug)
            .map((neighbor) => (
              <Link
                key={neighbor.slug}
                href={`/service-areas/${neighbor.slug}`}
                className="group rounded-xl border border-gray-200 bg-[#F8FAFC] px-6 py-4 text-sm font-medium text-[#052C52] shadow-sm transition-all hover:border-[#0076CE] hover:shadow-md"
              >
                <span className="transition-colors group-hover:text-[#0076CE]">
                  {neighbor.name}
                </span>
              </Link>
            ))}
        </div>
      </div>
    </section>
  );
}
