"use client";

import { motion } from "framer-motion";

const lines = [
  { indent: 0, text: "const developer = {" },
  { indent: 1, text: "name: 'Avelile Mnyazana'," },
  { indent: 1, text: "role: 'Final-Year SE Student'," },
  { indent: 1, text: "school: 'WeThinkCode_'," },
  { indent: 1, text: "focus: ['backend', 'frontend', 'full-stack']," },
  { indent: 1, text: "mindset: 'always learning'," },
  { indent: 0, text: "};" },
];

export default function TerminalWindow() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="w-full max-w-md rounded-xl border border-border bg-bg-surface shadow-2xl shadow-black/40 overflow-hidden"
    >
      <div className="flex items-center gap-2 border-b border-border bg-bg-raised px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F56]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#FFBD2E]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#27C93F]" />
        <span className="ml-3 text-xs font-mono text-ink-faint">
          about-me.ts
        </span>
      </div>
      <div className="px-5 py-5 font-mono text-sm leading-relaxed">
        {lines.map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.5 + i * 0.12 }}
            style={{ paddingLeft: `${line.indent * 1.25}rem` }}
            className="text-ink-muted whitespace-pre"
          >
            {line.text}
          </motion.div>
        ))}
        <span className="inline-block h-4 w-2 translate-y-1 bg-accent animate-blink" />
      </div>
    </motion.div>
  );
}
