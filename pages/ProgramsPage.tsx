const programs = [
  {
    title: "Academic Support",
    description:
      "Structured learning sessions focused on reading, writing, and math confidence.",
  },
  {
    title: "Mentorship",
    description:
      "Trusted mentors provide check-ins, encouragement, and growth-focused coaching.",
  },
  {
    title: "Community Projects",
    description:
      "Students build teamwork and leadership through collaborative neighborhood projects.",
  },
];

export default function ProgramsPage() {
  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 max-w-6xl mx-auto">
      <p className="text-yellow-600 uppercase tracking-[0.25em] text-xs">Programs</p>
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mt-3">What Students Experience</h1>

      <div className="mt-8 sm:mt-10 grid md:grid-cols-3 gap-4 sm:gap-6">
        {programs.map((program) => (
          <article
            key={program.title}
            className="rounded-2xl p-[1px] bg-gradient-to-br from-red-600 to-yellow-400"
          >
            <div className="h-full rounded-2xl bg-white p-6 shadow-sm">
              <h2 className="text-xl font-bold">{program.title}</h2>
              <p className="mt-3 text-slate-600 leading-7">{program.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
