const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-content px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="font-mono text-sm text-ink-muted">
          avelile<span className="text-accent">.</span>dev
        </p>

        <ul className="flex flex-wrap justify-center gap-6">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-ink-faint hover:text-ink transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-5 text-sm font-mono">
          <a
            href="https://github.com/AvelileM"
            target="_blank"
            rel="noopener noreferrer"
            className="text-ink-faint hover:text-accent transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/avelilem"
            target="_blank"
            rel="noopener noreferrer"
            className="text-ink-faint hover:text-accent transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>

      <div className="border-t border-border-subtle">
        <p className="mx-auto max-w-content px-6 py-5 text-xs text-ink-faint">
          © {new Date().getFullYear()} Avelile Mnyazana. Built with Next.js,
          TypeScript & Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
