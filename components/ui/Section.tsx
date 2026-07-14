import { ReactNode } from "react";

export default function Section({
  id,
  eyebrow,
  title,
  children,
  className = "",
}: {
  id: string;
  eyebrow: string;
  title: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={`scroll-mt-24 mx-auto max-w-content px-6 py-20 md:py-28 ${className}`}
    >
      <p className="eyebrow mb-3">{eyebrow}</p>
      <h2 className="section-heading text-2xl md:text-3xl text-ink mb-10">
        {title}
      </h2>
      {children}
    </section>
  );
}
