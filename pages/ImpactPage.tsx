const stats = [
  { label: "Students Supported", value: "100+" },
  { label: "Volunteer Mentors", value: "20+" },
  { label: "Summer Sessions", value: "3" },
  { label: "Community Partners", value: "5+" },
];

export default function ImpactPage() {
  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 max-w-6xl mx-auto">
      <p className="text-yellow-600 uppercase tracking-[0.25em] text-xs">Impact</p>
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mt-3">Our Measurable Outcomes</h1>

      <div className="mt-8 sm:mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
        {stats.map((stat) => (
          <article key={stat.label} className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm">
            <p className="text-4xl font-extrabold text-yellow-600">{stat.value}</p>
            <p className="mt-2 text-slate-600">{stat.label}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
