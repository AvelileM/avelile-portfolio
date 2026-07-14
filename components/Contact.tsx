"use client";

import { useState, FormEvent } from "react";
import Section from "./ui/Section";

type Errors = { name?: string; email?: string; message?: string };

const CONTACT_EMAIL = "aveliled@gmail.com"; 

export default function Contact() {
  const [values, setValues] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function validate(): Errors {
    const next: Errors = {};
    if (!values.name.trim()) next.name = "Please enter your name.";
    if (!values.email.trim()) {
      next.email = "Please enter your email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      next.email = "Please enter a valid email address.";
    }
    if (!values.message.trim() || values.message.trim().length < 10) {
      next.message = "Message should be at least 10 characters.";
    }
    return next;
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const foundErrors = validate();
    setErrors(foundErrors);
    if (Object.keys(foundErrors).length > 0) return;

    // Static-site friendly submission: opens the user's email client
    // pre-filled with the message. Swap this for a form backend
    // (e.g. Formspree, Resend, or an API route) once one is available.
    const subject = encodeURIComponent(`Portfolio contact from ${values.name}`);
    const body = encodeURIComponent(
      `${values.message}\n\n— ${values.name} (${values.email})`
    );
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    setStatus("sent");
  }

  return (
    <Section id="contact" eyebrow="06. contact" title="Get In Touch">
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <p className="text-ink-muted leading-relaxed mb-8 max-w-sm">
            I&apos;m actively looking for internships, graduate programmes,
            and junior software engineering roles. Feel free to reach out —
            I&apos;d love to hear from you.
          </p>

          <dl className="space-y-4 text-sm">
            <div className="flex items-center gap-3">
              <dt className="text-ink-faint w-20 shrink-0">Email</dt>
              <dd>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="text-ink hover:text-accent transition-colors"
                >
                  {CONTACT_EMAIL}
                </a>
              </dd>
            </div>
            <div className="flex items-center gap-3">
              <dt className="text-ink-faint w-20 shrink-0">GitHub</dt>
              <dd>
                <a
                  href="https://github.com/AvelileM"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ink hover:text-accent transition-colors"
                >
                  github.com/AvelileM
                </a>
              </dd>
            </div>
            <div className="flex items-center gap-3">
              <dt className="text-ink-faint w-20 shrink-0">LinkedIn</dt>
              <dd>
                <a
                  href="https://linkedin.com/in/avelilem"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ink hover:text-accent transition-colors"
                >
                  linkedin.com/in/avelilem
                </a>
              </dd>
            </div>
            <div className="flex items-center gap-3">
              <dt className="text-ink-faint w-20 shrink-0">Location</dt>
              <dd className="text-ink">Cape Town, South Africa</dd>
            </div>
          </dl>
        </div>

        <form onSubmit={handleSubmit} noValidate className="space-y-5">
          <div>
            <label htmlFor="name" className="block text-sm text-ink-muted mb-2">
              Name
            </label>
            <input
              id="name"
              type="text"
              value={values.name}
              onChange={(e) => setValues({ ...values, name: e.target.value })}
              className="w-full rounded-md border border-border bg-bg-surface px-4 py-2.5 text-sm text-ink placeholder:text-ink-faint focus:border-accent-dim outline-none transition-colors"
              placeholder="Your name"
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? "name-error" : undefined}
            />
            {errors.name && (
              <p id="name-error" className="mt-1.5 text-xs text-red-400">
                {errors.name}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm text-ink-muted mb-2">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={values.email}
              onChange={(e) => setValues({ ...values, email: e.target.value })}
              className="w-full rounded-md border border-border bg-bg-surface px-4 py-2.5 text-sm text-ink placeholder:text-ink-faint focus:border-accent-dim outline-none transition-colors"
              placeholder="you@example.com"
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? "email-error" : undefined}
            />
            {errors.email && (
              <p id="email-error" className="mt-1.5 text-xs text-red-400">
                {errors.email}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm text-ink-muted mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              rows={5}
              value={values.message}
              onChange={(e) =>
                setValues({ ...values, message: e.target.value })
              }
              className="w-full rounded-md border border-border bg-bg-surface px-4 py-2.5 text-sm text-ink placeholder:text-ink-faint focus:border-accent-dim outline-none transition-colors resize-none"
              placeholder="Tell me a bit about the opportunity or role..."
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? "message-error" : undefined}
            />
            {errors.message && (
              <p id="message-error" className="mt-1.5 text-xs text-red-400">
                {errors.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-bg hover:bg-accent-dim transition-colors"
          >
            Send Message
          </button>

          {status === "sent" && (
            <p className="text-sm text-accent-dim">
              Your email client should now open with the message ready to
              send.
            </p>
          )}
        </form>
      </div>
    </Section>
  );
}
