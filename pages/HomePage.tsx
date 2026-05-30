import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import hero1 from "../hero1.png";
import hero2 from "../hero2.png";
import hero3 from "../hero3.png";
import hero4 from "../hero 4.png";

export default function HomePage() {
  const heroImages = [hero1, hero2, hero3, hero4];
  const [activeHeroIndex, setActiveHeroIndex] = useState(0);
  const spotlightCards = [
    {
      title: "About",
      description: "Learn what the program stands for and why it exists.",
      to: "/about",
    },
    {
      title: "Programs",
      description: "See the learning, mentorship, and community tracks.",
      to: "/programs",
    },
    {
      title: "Executives",
      description: "Meet the founders and the leadership team.",
      to: "/executives",
    },
    {
      title: "Impact",
      description: "Review the outcomes and community results.",
      to: "/impact",
    },
  ];

  const quickStats = [
    { label: "Students", value: "100+" },
    { label: "Mentors", value: "20+" },
    { label: "Sessions", value: "3" },
  ];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveHeroIndex((prev) => (prev + 1) % heroImages.length);
    }, 4000);

    return () => window.clearInterval(timer);
  }, [heroImages.length]);

  return (
    <>
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

        .hero-image {
          will-change: opacity, transform;
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
      <section className="relative min-h-[78vh] flex items-center justify-center text-center px-4 sm:px-6 overflow-hidden">
        <div className="absolute inset-0">
          {heroImages.map((image, index) => (
            <img
              key={image}
              src={image}
              alt="students learning"
              className={`hero-image absolute inset-0 w-full h-full object-cover scale-105 transition-opacity duration-1000 ${
                index === activeHeroIndex ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-white/18 via-white/30 to-[#faf8f2]/72" />
        <div className="absolute inset-0 opacity-12 bg-[radial-gradient(circle_at_20%_20%,rgba(250,204,21,0.22),transparent_35%),radial-gradient(circle_at_80%_25%,rgba(239,68,68,0.10),transparent_30%),radial-gradient(circle_at_50%_80%,rgba(245,158,11,0.08),transparent_35%)]" />

        <div className="relative z-10 max-w-5xl w-full pt-8 sm:pt-0">
          <div className="reveal-up max-w-3xl mx-auto rounded-[2rem] border border-white/55 bg-white/62 px-6 py-10 sm:px-10 sm:py-12 shadow-[0_16px_50px_rgba(15,23,42,0.10)] backdrop-blur-md text-center">
            <p className="text-yellow-700 uppercase tracking-[0.3em] text-[0.68rem] mb-4">
              Roman's Summer Bridge Program
            </p>
            <h1 className="mx-auto text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[1.1] text-slate-900">
              Supporting
              <br />
              Students.
              <br />
              <span className="text-red-500">Growing Together</span>
            </h1>

            <p className="mt-6 mx-auto max-w-sm sm:max-w-xl text-sm sm:text-base md:text-lg text-slate-700 leading-7 sm:leading-8">
              A supportive community program focused on mentorship, learning, and helping students feel confident and cared for throughout the summer.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
              <Link
                to="/join"
                className="px-6 py-3 bg-red-600 text-white rounded-xl font-semibold shadow-sm shadow-red-200 hover:bg-red-700 hover:-translate-y-0.5 transition"
              >
                Get Involved
              </Link>
              <Link
                to="/executives"
                className="px-6 py-3 border border-slate-300 rounded-xl text-slate-700 bg-white/80 hover:bg-white hover:-translate-y-0.5 transition"
              >
                Meet the Team
              </Link>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-3 sm:gap-4 max-w-xl mx-auto">
              {quickStats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="reveal-up rounded-2xl border border-slate-200 bg-white/72 px-3 py-4 shadow-sm backdrop-blur-sm"
                  style={{ animationDelay: `${index * 110}ms` }}
                >
                  <p className="text-2xl font-extrabold text-slate-900">{stat.value}</p>
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-500 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 border-t border-slate-200 bg-[#fcfbf7]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col gap-3 sm:gap-4 mb-8">
            <p className="text-yellow-700 uppercase tracking-[0.25em] text-xs">Explore</p>
            <h2 className="text-3xl font-bold">A clear path through the program</h2>
            <p className="text-slate-600 max-w-2xl">
              The homepage now acts like a calm overview, with each area spaced out so the page feels lighter and easier to read.
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6">
            {spotlightCards.map((card, index) => (
              <Link
                key={card.title}
                to={card.to}
                className="reveal-up group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-slate-200/70"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-xl font-bold text-slate-900">{card.title}</h3>
                  <span className="float-slow inline-flex h-10 w-10 items-center justify-center rounded-full bg-amber-50 text-yellow-700 transition group-hover:bg-yellow-100" style={{ animationDelay: `${index * 200}ms` }}>↗</span>
                </div>
                <p className="mt-4 text-slate-600 leading-7">{card.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
