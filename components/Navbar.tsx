"use client";

import { useState } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-content items-center justify-between px-6 py-4">
        <a
          href="#top"
          className="font-mono text-sm text-ink hover:text-accent transition-colors"
        >
          avelile<span className="text-accent">.</span>dev
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-ink-muted hover:text-ink transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1.5 p-2"
        >
          <span
            className={`h-px w-6 bg-ink transition-transform ${open ? "translate-y-2 rotate-45" : ""}`}
          />
          <span
            className={`h-px w-6 bg-ink transition-opacity ${open ? "opacity-0" : "opacity-100"}`}
          />
          <span
            className={`h-px w-6 bg-ink transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </nav>

      {open && (
        <ul className="md:hidden border-t border-border bg-bg px-6 py-4 flex flex-col gap-4">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm text-ink-muted hover:text-ink transition-colors block py-1"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
