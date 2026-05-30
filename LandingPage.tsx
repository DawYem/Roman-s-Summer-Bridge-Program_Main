import { FormEvent, useEffect, useState } from "react";
import hero1 from "./hero1.png";

export default function RomansSummerBridgeLandingPage() {
  
  // Leadership details are currently omitted from the public page.
  
  const [isJoinSubmitted, setIsJoinSubmitted] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const linkedinUrl = "https://linkedin.com/company/roman-s-summer-bridge-program";
  const instagramUrl = "https://www.instagram.com";
  const googleFormAction =
    "https://docs.google.com/forms/d/e/1FAIpQLScZKtNlEGC53t_jwbkuDVUtwixhSIKvPihZ_7v3VL8rAoTb8w/formResponse";

  const handleJoinSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.currentTarget.reset();
    setIsJoinSubmitted(true);
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (!section) {
      return;
    }

    section.scrollIntoView({ behavior: "smooth", block: "start" });
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const htmlElement = document.documentElement;
    const bodyElement = document.body;
    const previousHtmlBackground = htmlElement.style.backgroundColor;
    const previousBodyBackground = bodyElement.style.backgroundColor;

    htmlElement.style.backgroundColor = "#faf8f2";
    bodyElement.style.backgroundColor = "#faf8f2";

    return () => {
      htmlElement.style.backgroundColor = previousHtmlBackground;
      bodyElement.style.backgroundColor = previousBodyBackground;
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#faf8f2] text-slate-900 scroll-smooth">
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

        @keyframes softFloat {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
        }

        .reveal-up {
          animation: fadeUp 0.8s ease-out both;
        }

        .float-slow {
          animation: softFloat 7s ease-in-out infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .reveal-up,
          .float-slow,
          .hero-image {
            animation: none !important;
            transition: none !important;
          }
        }
      `}</style>
      <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(circle_at_top,rgba(250,204,21,0.08),transparent_48%),radial-gradient(circle_at_bottom,rgba(220,38,38,0.06),transparent_48%)]" />
      {/* NAVBAR */}
      <header className="fixed top-0 w-full z-50 backdrop-blur bg-white/75 border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
          <button
            type="button"
            onClick={() => scrollToSection("home")}
            className="font-extrabold text-base md:text-lg tracking-[0.08em] uppercase leading-none"
          >
            <span className="text-yellow-400">Roman's</span>{" "}
            <span className="text-red-500">Summer Bridge</span>
          </button>
          <nav className="hidden md:flex gap-6 text-sm text-slate-600">
            <a href="#about" className="hover:text-yellow-400">
              About
            </a>
            <a href="#programs" className="hover:text-yellow-400">
              Programs
            </a>
            
            <a href="#executives" className="hover:text-yellow-400">
              Executives
            </a>
            <a href="#join" className="hover:text-yellow-400">
              Join
            </a>
          </nav>

          <button
            type="button"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            className="md:hidden inline-flex items-center justify-center rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-700 hover:text-slate-900 hover:border-yellow-400 transition"
            aria-label="Toggle navigation menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? "Close" : "Menu"}
          </button>
        </div>

        {isMobileMenuOpen ? (
          <nav className="md:hidden border-t border-slate-200 bg-white/95 backdrop-blur">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 grid gap-1 text-sm text-slate-600">
              <a href="#about" className="hover:text-yellow-400" onClick={() => scrollToSection("about")}>
                About
              </a>
              <a href="#programs" className="hover:text-yellow-400" onClick={() => scrollToSection("programs")}>
                Programs
              </a>
              
              <a href="#executives" className="hover:text-yellow-400" onClick={() => scrollToSection("executives")}>
                Executives
              </a>
              <a href="#join" className="hover:text-yellow-400" onClick={() => scrollToSection("join")}>
                Join
              </a>
            </div>
          </nav>
        ) : null}
      </header>

      {/* HERO */}
      <section
        id="home"
        className="relative w-full flex items-center justify-center overflow-hidden"
        style={{ minHeight: 'calc(120vh - 64px)', height: 'calc(120vh - 64px)' }}
      >
        {/* Static hero background image */}
        <img
          src={hero1}
          alt="students learning"
          className="absolute inset-0 w-full h-full object-cover block"
          style={{ objectPosition: 'center 45%' }}
        />

        {/* Dark overlay for professional text contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/72 via-slate-900/62 to-slate-900/52 md:bg-gradient-to-br md:from-slate-900/68 md:via-slate-800/55 md:to-slate-900/48" />

        {/* Content - bold text overlay */}
        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 flex items-center justify-center">
          <div className="reveal-up max-w-4xl text-center">
            <p className="text-yellow-400 uppercase tracking-[0.3em] text-xs md:text-sm mb-6 font-semibold">
              Roman's Summer Bridge Program
            </p>

            <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black leading-[1.1] text-white mb-6">
              Supporting
              <br />
              Students.
              <br />
              <span className="text-yellow-400">Growing Together</span>
            </h2>

            <p className="text-base sm:text-lg md:text-xl text-white/95 max-w-xl mx-auto mb-8 leading-relaxed font-light">
              Roman's Summer Bridge Program provides a supportive learning environment where students can strengthen academic foundations, stay connected over the summer, and prepare for success in the next grade level.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12 justify-center">
              <button
                type="button"
                onClick={() => scrollToSection("join")}
                className="px-8 py-4 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition transform hover:-translate-y-0.5 shadow-lg"
              >
                Get Involved
              </button>
              <button
                type="button"
                onClick={() => scrollToSection("about")}
                className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition"
              >
                Learn More
              </button>
            </div>

            
          </div>
        </div>
      </section>

      

      

      {/* EXECUTIVES */}
      <section id="executives" className="py-20 px-4 sm:px-6 max-w-6xl mx-auto">
        <div className="flex flex-col gap-3 sm:gap-4 mb-8">
          <p className="text-yellow-700 uppercase tracking-[0.25em] text-xs">Leadership Team</p>
          <h3 className="text-3xl font-bold">Coming soon</h3>
          <p className="text-slate-600 max-w-2xl">
            Our leadership team is being finalized. Check back soon for updates.
          </p>
        </div>

        <div className="flex items-center justify-center">
          <div className="rounded-3xl border border-slate-200 bg-white p-12 shadow-sm text-center max-w-2xl">
            <p className="text-yellow-700 uppercase tracking-[0.25em] text-xs">Leadership Team</p>
            <h4 className="mt-4 text-2xl font-bold text-slate-900">Coming soon</h4>
            <p className="mt-3 text-slate-600 text-sm leading-6">
              Our leadership team is being finalized. Check back soon for updates.
            </p>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="py-20 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-8"
      >
        <div>
          <h3 className="text-3xl font-bold mb-4">About Our Community</h3>
          <p className="text-slate-600 leading-7">
            Roman’s Summer Bridge Program is a community-driven initiative
            focused on supporting students during the summer with guidance,
            encouragement, and care.
          </p>
          <p className="text-slate-600 mt-4 leading-7">
            We focus on helping students grow academically while also building
            confidence, friendships, and a sense of belonging.
          </p>
        </div>

        <div className="grid gap-4">
          <div className="bg-gradient-to-br from-red-700 to-yellow-500 rounded-3xl p-[2px] shadow-sm">
            <div className="bg-white rounded-3xl p-8">
              <h4 className="text-xl font-bold mb-3 text-slate-900">Our Mission</h4>
              <p className="text-slate-600 text-sm leading-7">
                Empower students through mentorship, education, and community support.
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h4 className="text-xl font-bold mb-5 text-slate-900">Founder spotlight</h4>
            <div className="flex items-center gap-4">
              <div className="relative h-24 w-24 overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br from-amber-100 via-white to-red-100">
                <div className="absolute inset-0 flex items-center justify-center text-2xl font-extrabold text-slate-500">
                  DY
                </div>
                <div className="absolute inset-0 border-2 border-dashed border-slate-300/70 rounded-2xl" />
              </div>
              <div>
                <p className="text-yellow-700 uppercase tracking-[0.25em] text-xs">Founder</p>
                <h5 className="mt-2 text-2xl font-bold text-slate-900">Dawit Yemane</h5>
                <p className="mt-2 text-slate-600 text-sm leading-7 max-w-md">
                  A placeholder portrait will sit here for the founder, giving the page a warmer and more personal feel once the final image is available.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROGRAM CARDS */}
      <section id="programs" className="py-20 bg-amber-50 border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-3xl font-bold mb-10">What We Do</h3>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Academic Support",
                description:
                  "Focused sessions in reading and math that help students close learning gaps and build classroom confidence.",
              },
              {
                title: "Mentorship",
                description:
                  "One-on-one and small-group guidance from mentors who support goal setting, consistency, and personal growth.",
              },
              {
                title: "Community",
                description:
                  "Team projects and family-centered events that strengthen belonging, leadership, and positive peer connections.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="group rounded-3xl p-[1px] bg-gradient-to-br from-red-600 to-yellow-400"
              >
                <div className="bg-white rounded-3xl p-6 h-full group-hover:bg-amber-50 transition">
                  <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
                  <p className="text-slate-600 text-sm">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="join" className="py-20 px-6 text-center">
        <h3 className="text-4xl font-bold">Join Our Community</h3>
        <p className="text-slate-600 mt-4 max-w-xl mx-auto">
          Whether you're a volunteer, parent, or supporter, you can submit your
          information below and we will keep responses organized in Google Forms.
        </p>

        <form
          action={googleFormAction}
          method="post"
          target="hiddenGoogleFormFrame"
          onSubmit={handleJoinSubmit}
          className="mt-8 max-w-xl mx-auto rounded-3xl border border-slate-200 bg-white p-6 text-left grid gap-5 shadow-sm"
        >
          <iframe
            name="hiddenGoogleFormFrame"
            title="Google Form submission frame"
            className="hidden"
          />
          <label className="grid gap-2">
            <span className="text-sm text-slate-700">
              What is your full name, {"{First Name, Last Name}"}?
            </span>
            <input
              type="text"
              name="entry.31652753"
              required
              placeholder="First Name, Last Name"
              className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-yellow-400"
            />
          </label>

          <fieldset className="grid gap-3">
            <legend className="text-sm text-slate-700">
              What grade level are you in? (Choose only one box)
            </legend>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                "9th",
                "10th",
                "11th",
                "12th",
                "College",
                "Professionals",
              ].map((grade) => (
                <label
                  key={grade}
                  className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-3 py-3 text-sm text-slate-700 hover:border-yellow-400 transition"
                >
                  <input
                    type="radio"
                    name="entry.1287802871"
                    value={grade}
                    required
                    className="h-4 w-4 accent-yellow-400"
                  />
                  <span>{grade}</span>
                </label>
              ))}
            </div>
          </fieldset>

          <label className="grid gap-2">
            <span className="text-sm text-slate-700">What is your email?</span>
            <input
              type="email"
              name="entry.320687569"
              required
              placeholder="you@example.com"
              className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-yellow-400"
            />
          </label>

          <label className="grid gap-2">
            <span className="text-sm text-slate-700">What is your phone number?</span>
            <input
              type="tel"
              name="entry.286085398"
              required
              placeholder="(555) 555-5555"
              className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-yellow-400"
            />
          </label>

          <button
            type="submit"
            className="mt-2 px-8 py-4 bg-yellow-400 text-black font-bold rounded-xl hover:bg-yellow-300 transition"
          >
            Join Now
          </button>

          {isJoinSubmitted ? (
            <p className="text-green-400 text-sm text-center">
              Thanks for signing up! Your response was sent to Google Forms.
            </p>
          ) : null}
        </form>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-slate-200 py-6 text-center text-slate-500 text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
          <span>Copyright 2026 Roman's Summer Bridge Program</span>
          <span className="hidden sm:inline text-slate-300">|</span>
          <div className="flex items-center gap-3">
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="LinkedIn"
              className="text-slate-600 hover:text-yellow-500 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path d="M4.98 3.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.8h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.53c0-1.32-.03-3.03-1.85-3.03-1.85 0-2.13 1.44-2.13 2.93V21h-4V9Z" />
              </svg>
            </a>
            <a
              href={instagramUrl}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Instagram"
              className="text-slate-600 hover:text-yellow-500 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.8A3.95 3.95 0 0 0 3.8 7.75v8.5a3.95 3.95 0 0 0 3.95 3.95h8.5a3.95 3.95 0 0 0 3.95-3.95v-8.5a3.95 3.95 0 0 0-3.95-3.95h-8.5Zm8.95 1.35a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.8a3.2 3.2 0 1 0 0 6.4 3.2 3.2 0 0 0 0-6.4Z" />
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
