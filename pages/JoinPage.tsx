import { FormEvent, useState } from "react";

export default function JoinPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitted(true);
    event.currentTarget.reset();
  };

  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 max-w-3xl mx-auto">
      <p className="text-yellow-600 uppercase tracking-[0.25em] text-xs">Join</p>
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mt-3">Be Part of the Program</h1>

      <form onSubmit={handleSubmit} className="mt-8 sm:mt-10 grid gap-4">
        <input
          type="text"
          required
          name="name"
          placeholder="Your name"
          className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 focus:outline-none focus:border-yellow-400 shadow-sm"
        />
        <input
          type="email"
          required
          name="email"
          placeholder="Your email"
          className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 focus:outline-none focus:border-yellow-400 shadow-sm"
        />
        <select
          required
          name="role"
          defaultValue=""
          className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 focus:outline-none focus:border-yellow-400 shadow-sm"
        >
          <option value="" disabled>
            I want to help as...
          </option>
          <option value="volunteer">Volunteer</option>
          <option value="mentor">Mentor</option>
          <option value="supporter">Community Supporter</option>
        </select>
        <button
          type="submit"
          className="mt-2 px-8 py-4 bg-yellow-400 text-black font-bold rounded-xl hover:bg-yellow-300 transition"
        >
          Join Now
        </button>
      </form>

      {isSubmitted ? (
        <p className="mt-4 text-green-400">Thanks for signing up. We will contact you soon.</p>
      ) : null}
    </section>
  );
}
