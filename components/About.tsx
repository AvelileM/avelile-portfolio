import Section from "./ui/Section";

export default function About() {
  return (
    <Section id="about" eyebrow="01. about" title="About Me">
      <div className="grid md:grid-cols-3 gap-10">
        <div className="md:col-span-2 space-y-5 text-ink-muted leading-relaxed">
          <p>
            I&apos;m a final-year software engineering student at{" "}
            <span className="text-ink">WeThinkCode_</span>, a project-based
            learning institution where I&apos;ve built my foundations through
            hands-on work and peer-to-peer collaboration rather than
            traditional lectures. Most of what I know, I learned by building
            something, getting stuck, and working through it — often
            alongside a teammate doing the same.
          </p>
          <p>
            I&apos;m interested in backend, frontend, and full-stack
            development, and I enjoy the process of turning a real problem
            into working software: breaking it down, choosing a reasonable
            approach, and iterating until it holds up. I&apos;m still early in
            my career, and I see that as a starting point rather than a
            limitation.
          </p>
          <p>
            Before WeThinkCode_, my time at{" "}
            <span className="text-ink">Life Choices Academy</span> shaped how
            I approach challenges more broadly — discipline, adaptability, and
            showing up consistently, which carries directly into how I work on
            code and in teams today.
          </p>
          <p>
            Teamwork and continuous learning matter to me as much as
            technical skill. Some of my best progress has come from pairing
            with classmates, reviewing each other&apos;s code, and being
            willing to say &quot;I don&apos;t know this yet&quot; and then
            going to figure it out.
          </p>
        </div>

        <div className="rounded-xl border border-border bg-bg-surface p-6 h-fit">
          <p className="eyebrow mb-4">quick facts</p>
          <dl className="space-y-4 text-sm">
            <div>
              <dt className="text-ink-faint">Based in</dt>
              <dd className="text-ink">Cape Town, South Africa</dd>
            </div>
            <div>
              <dt className="text-ink-faint">Studying at</dt>
              <dd className="text-ink">WeThinkCode_</dd>
            </div>
            <div>
              <dt className="text-ink-faint">Looking for</dt>
              <dd className="text-ink">
                Internships & junior developer roles
              </dd>
            </div>
            <div>
              <dt className="text-ink-faint">Interested in</dt>
              <dd className="text-ink">Backend, frontend, full-stack</dd>
            </div>
          </dl>
        </div>
      </div>
    </Section>
  );
}
