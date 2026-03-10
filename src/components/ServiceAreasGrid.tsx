import Link from "next/link";

const cities = [
  { name: "Auburn", slug: "auburn-ca" },
  { name: "Rocklin", slug: "rocklin-ca" },
  { name: "Roseville", slug: "roseville-ca" },
  { name: "Lincoln", slug: "lincoln-ca" },
  { name: "Loomis", slug: "loomis-ca" },
  { name: "Granite Bay", slug: "granite-bay-ca" },
  { name: "Folsom", slug: "folsom-ca" },
  { name: "Citrus Heights", slug: "citrus-heights-ca" },
  { name: "Carmichael", slug: "carmichael-ca" },
  { name: "El Dorado Hills", slug: "el-dorado-hills-ca" },
];

export default function ServiceAreasGrid() {
  return (
    <section className="bg-[#F5F7FA] py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-[family-name:var(--font-manrope)] text-3xl md:text-4xl font-bold text-[#0F1720] mb-4">
            Proudly Serving Nearby Communities
          </h2>
          <p className="text-[#5E6B78] text-lg max-w-2xl mx-auto leading-relaxed">
            Professional carpet and tile cleaning throughout Placer County,
            Sacramento County, and nearby areas.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {cities.map((city) => (
            <Link
              key={city.slug}
              href={`/service-areas/${city.slug}`}
              className="bg-white rounded-xl p-5 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200 group"
            >
              <h3 className="font-bold text-[#0F1720] text-lg group-hover:text-[#2F80ED] transition-colors">
                {city.name}
              </h3>
              <p className="text-[#5E6B78] text-sm mt-1">
                Carpet Cleaning in {city.name}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
