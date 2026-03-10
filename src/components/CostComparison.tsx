const rows = [
  {
    problem: "Loose/Rippled Carpet",
    bigBox: "Replacement ($3,000+)",
    yuri: "Power-Stretching ($250+)",
    savings: "90%",
  },
  {
    problem: "Pet/Burn Damage",
    bigBox: "New Flooring ($2,000+)",
    yuri: "Precision Patching ($150+)",
    savings: "92%",
  },
  {
    problem: "Dull/Dingy Tile",
    bigBox: "Regrouting ($1,500+)",
    yuri: "Deep Extraction & Seal ($300+)",
    savings: "80%",
  },
];

export default function CostComparison() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-12 text-center text-3xl font-bold text-[#052C52] sm:text-4xl">
          Why Replace When You Can Restore?
        </h2>

        <div className="overflow-hidden rounded-2xl bg-white shadow-lg">
          {/* Desktop Table */}
          <div className="hidden sm:block">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-gray-100 bg-[#F8FAFC]">
                  <th className="px-6 py-4 text-sm font-semibold text-[#052C52]">
                    Problem
                  </th>
                  <th className="px-6 py-4 text-sm font-semibold text-[#052C52]">
                    &ldquo;Big Box&rdquo; Solution
                  </th>
                  <th className="px-6 py-4 text-sm font-semibold text-[#0076CE]">
                    The Yuri Restoration
                  </th>
                  <th className="px-6 py-4 text-sm font-semibold text-emerald-600">
                    Your Savings
                  </th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, i) => (
                  <tr
                    key={row.problem}
                    className={
                      i !== rows.length - 1 ? "border-b border-gray-50" : ""
                    }
                  >
                    <td className="px-6 py-5 font-medium text-[#052C52]">
                      {row.problem}
                    </td>
                    <td className="px-6 py-5 text-gray-500 line-through decoration-red-300">
                      {row.bigBox}
                    </td>
                    <td className="px-6 py-5 font-medium text-[#0076CE]">
                      {row.yuri}
                    </td>
                    <td className="px-6 py-5">
                      <span className="inline-block rounded-full bg-emerald-50 px-3 py-1 text-sm font-bold text-emerald-600">
                        {row.savings}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Cards */}
          <div className="divide-y divide-gray-100 sm:hidden">
            {rows.map((row) => (
              <div key={row.problem} className="p-6">
                <h3 className="mb-3 text-base font-bold text-[#052C52]">
                  {row.problem}
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500">
                      &ldquo;Big Box&rdquo;:
                    </span>
                    <span className="text-gray-400 line-through decoration-red-300">
                      {row.bigBox}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[#0076CE] font-medium">
                      Yuri Restoration:
                    </span>
                    <span className="font-medium text-[#0076CE]">
                      {row.yuri}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500">Your Savings:</span>
                    <span className="inline-block rounded-full bg-emerald-50 px-3 py-1 text-sm font-bold text-emerald-600">
                      {row.savings}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
