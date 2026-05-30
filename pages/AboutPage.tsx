import { Link } from "react-router-dom";

export default function AboutPage() {
  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 max-w-6xl mx-auto">
      <p className="text-yellow-600 uppercase tracking-[0.25em] text-xs">About</p>
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mt-3">Our Community Story</h1>

      <div className="mt-8 grid md:grid-cols-2 gap-8">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold">Mission</h2>
          <p className="mt-3 text-slate-600 leading-7">
            Roman's Summer Bridge Program supports students through mentorship, academic guidance, and trusted community connections during the summer season.
          </p>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold">Vision</h2>
          <p className="mt-3 text-slate-600 leading-7">
            We aim to create an encouraging environment where students build confidence, discover their strengths, and enter the school year ready to thrive.
          </p>
        </div>
      </div>

      <div className="mt-10">
        <Link to="/join" className="px-6 py-3 bg-yellow-400 text-black rounded-xl font-bold hover:bg-yellow-300 transition">
          Join Our Community
        </Link>
      </div>
    </section>
  );
}
