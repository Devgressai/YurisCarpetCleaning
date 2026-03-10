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
    <section className="bg-[#0B1420] py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-12 text-center text-3xl font-bold text-[#F8FAFC] sm:text-4xl">
          Why Replace When You Can Restore?
        </h2>

        <div className="overflow-hidden rounded-2xl border border-white/[0.08] bg-[#111C2B] shadow-lg">
          {/* Desktop Table */}
          <div className="hidden sm:block">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-white/[0.08]">
                  <th className="px-6 py-4 text-sm font-semibold text-[#F8FAFC]">
                    Problem
                  </th>
                  <th className="px-6 py-4 text-sm font-semibold text-[#F8FAFC]">
                    &ldquo;Big Box&rdquo; Solution
                  </th>
                  <th className="px-6 py-4 text-sm font-semibold text-[#2F80ED]">
                    The Yuri Restoration
                  </th>
                  <th className="px-6 py-4 text-sm font-semibold text-emerald-400">
                    Your Savings
                  </th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, i) => (
                  <tr
                    key={row.problem}
                    className={
                      i !== rows.length - 1 ? "border-b border-white/[0.08]" : ""
                    }
                  >
                    <td className="px-6 py-5 font-medium text-[#F8FAFC]">
                      {row.problem}
                    </td>
                    <td className="px-6 py-5 text-[#5E6B78] line-through decoration-red-400/60">
                      {row.bigBox}
                    </td>
                    <td className="px-6 py-5 font-medium text-[#2F80ED]">
                      {row.yuri}
                    </td>
                    <td className="px-6 py-5">
                      <span className="inline-block rounded-full bg-emerald-500/10 px-3 py-1 text-sm font-bold text-emerald-400">
                        {row.savings}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Cards */}
          <div className="divide-y divide-white/[0.08] sm:hidden">
            {rows.map((row) => (
              <div key={row.problem} className="p-6">
                <h3 className="mb-3 text-base font-bold text-[#F8FAFC]">
                  {row.problem}
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-[#5E6B78]">
                      &ldquo;Big Box&rdquo;:
                    </span>
                    <span className="text-[#5E6B78] line-through decoration-red-400/60">
                      {row.bigBox}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[#2F80ED] font-medium">
                      Yuri Restoration:
                    </span>
                    <span className="font-medium text-[#2F80ED]">
                      {row.yuri}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[#5E6B78]">Your Savings:</span>
                    <span className="inline-block rounded-full bg-emerald-500/10 px-3 py-1 text-sm font-bold text-emerald-400">
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
