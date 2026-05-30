import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

function navClass({ isActive }: { isActive: boolean }) {
  return isActive ? "text-yellow-600" : "text-slate-600 hover:text-yellow-600";
}

export default function SiteLayout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const linkedinUrl = "https://www.linkedin.com";
  const instagramUrl = "https://www.instagram.com";

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#faf8f2] text-slate-900">
      <header className="fixed top-0 w-full z-50 backdrop-blur bg-white/75 border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
          <NavLink
            to="/"
            className="font-extrabold text-base md:text-lg tracking-[0.08em] uppercase leading-none"
            onClick={closeMobileMenu}
          >
            <span className="text-yellow-600">Roman's</span>{" "}
            <span className="text-red-500">Summer Bridge</span>
          </NavLink>

          <nav className="hidden md:flex gap-6 text-sm">
            <NavLink to="/about" className={navClass}>
              About
            </NavLink>
            <NavLink to="/programs" className={navClass}>
              Programs
            </NavLink>
            <NavLink to="/impact" className={navClass}>
              Impact
            </NavLink>
            <NavLink to="/executives" className={navClass}>
              Executives
            </NavLink>
            <NavLink to="/join" className={navClass}>
              Join
            </NavLink>
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
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 grid gap-1 text-sm">
              <NavLink to="/about" className={navClass} onClick={closeMobileMenu}>
                About
              </NavLink>
              <NavLink to="/programs" className={navClass} onClick={closeMobileMenu}>
                Programs
              </NavLink>
              <NavLink to="/impact" className={navClass} onClick={closeMobileMenu}>
                Impact
              </NavLink>
              <NavLink to="/executives" className={navClass} onClick={closeMobileMenu}>
                Executives
              </NavLink>
              <NavLink to="/join" className={navClass} onClick={closeMobileMenu}>
                Join
              </NavLink>
            </div>
          </nav>
        ) : null}
      </header>

      <main className="pt-16">
        <Outlet />
      </main>

      <footer className="border-t border-slate-200 py-6 text-center text-slate-500 text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
          <span>Copyright 2026 Roman's Summer Bridge Program</span>
          <span className="hidden sm:inline text-slate-300">|</span>
          <a
            href={linkedinUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="text-slate-600 hover:text-yellow-600 transition"
          >
            LinkedIn
          </a>
          <a
            href={instagramUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="text-slate-600 hover:text-yellow-600 transition"
          >
            Instagram
          </a>
        </div>
      </footer>
    </div>
  );
}
