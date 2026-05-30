const founders = [
  {
    name: "Roman",
    role: "Founder",
    focus: "Vision, community relationships, and long-term direction.",
  },
  {
    name: "Executive Team",
    role: "Leadership Group",
    focus: "Program planning, student support, and event coordination.",
  },
];

const roles = [
  {
    title: "Program Director",
    description: "Keeps the schedule organized, supports the team, and oversees daily delivery.",
  },
  {
    title: "Mentorship Lead",
    description: "Supports student check-ins, coaching, and the mentor experience.",
  },
  {
    title: "Family Outreach",
    description: "Maintains communication with families and helps with registration and updates.",
  },
  {
    title: "Student Success Lead",
    description: "Tracks growth, encourages attendance, and helps students stay engaged.",
  },
];

export default function ExecutivesPage() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20 px-4 sm:px-6 max-w-7xl mx-auto">
      <style>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(18px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .reveal-up {
          animation: fadeUp 0.8s ease-out both;
        }

        @media (prefers-reduced-motion: reduce) {
          .reveal-up {
            animation: none !important;
          }
        }
      `}</style>

      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(250,204,21,0.16),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(239,68,68,0.10),transparent_30%)]" />

      <div className="max-w-4xl">
        <p className="text-yellow-700 uppercase tracking-[0.28em] text-xs">Executives</p>
        <h1 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900">
          Founders and roles behind the program
        </h1>
        <p className="mt-5 text-slate-600 leading-7 max-w-3xl">
          This page introduces the leadership structure so families, partners, and volunteers can see who guides the program and how responsibilities are organized.
        </p>
      </div>

      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {founders.map((person, index) => (
          <article
            key={person.name}
            className="reveal-up rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            style={{ animationDelay: `${index * 120}ms` }}
          >
            <p className="text-yellow-700 uppercase tracking-[0.25em] text-xs">{person.role}</p>
            <h2 className="mt-3 text-2xl font-bold text-slate-900">{person.name}</h2>
            <p className="mt-3 text-slate-600 leading-7">{person.focus}</p>
          </article>
        ))}
      </div>

      <div className="mt-12">
        <div className="flex flex-col gap-3 sm:gap-4 mb-6">
          <p className="text-yellow-700 uppercase tracking-[0.25em] text-xs">Roles</p>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Executive responsibilities</h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {roles.map((role, index) => (
            <article
              key={role.title}
              className="reveal-up rounded-3xl border border-slate-200 bg-[#fcfbf7] p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-yellow-300 hover:shadow-lg"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="h-10 w-10 rounded-full bg-yellow-100 text-yellow-700 flex items-center justify-center font-bold">
                {index + 1}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{role.title}</h3>
              <p className="mt-3 text-slate-600 leading-7">{role.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}