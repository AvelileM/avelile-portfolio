"use client";

import { motion } from "framer-motion";
import TerminalWindow from "./ui/TerminalWindow";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-border"
    >
      {/* Subtle ambient gradient background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(600px circle at 15% 20%, rgba(94,234,212,0.08), transparent 60%), radial-gradient(500px circle at 85% 60%, rgba(245,166,35,0.06), transparent 60%)",
        }}
      />

      <div className="mx-auto max-w-content px-6 py-20 md:py-28 grid md:grid-cols-2 gap-14 items-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="eyebrow mb-4">final-year software engineer</p>
          <h1 className="section-heading text-4xl md:text-5xl text-ink mb-5 leading-[1.1]">
            Avelile Mnyazana
          </h1>
          <p className="text-lg text-ink-muted mb-6">
            Final-Year Software Engineering Student at{" "}
            <span className="text-ink">WeThinkCode_</span>
          </p>
          <p className="text-ink-muted leading-relaxed mb-9 max-w-md">
            Aspiring software developer passionate about building practical
            applications, solving problems, and growing through collaborative
            learning and real-world projects.
          </p>

          <div className="flex flex-wrap gap-4 mb-8">
            <a
              href="#projects"
              className="rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-bg hover:bg-accent-dim transition-colors"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="rounded-md border border-border px-5 py-2.5 text-sm font-medium text-ink hover:border-accent-dim hover:text-accent transition-colors"
            >
              Contact Me
            </a>
            <a
              href="/cv/Avelile-Mnyazana-CV.pdf"
              download
              className="rounded-md border border-border px-5 py-2.5 text-sm font-medium text-ink-muted hover:border-accent-dim hover:text-ink transition-colors"
            >
              Download CV
            </a>
          </div>

          <div className="flex items-center gap-5 text-sm font-mono">
            <a
              href="https://github.com/AvelileM"
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink-muted hover:text-accent transition-colors"
            >
              GitHub
            </a>
            <span className="text-border">/</span>
            <a
              href="https://linkedin.com/in/avelilem"
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink-muted hover:text-accent transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </motion.div>

        <div className="flex justify-center md:justify-end">
          <TerminalWindow />
        </div>
      </div>
    </section>
  );
}
