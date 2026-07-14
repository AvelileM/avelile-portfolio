# Avelile Mnyazana — Portfolio

A clean, dark-mode developer portfolio built with Next.js (App Router), TypeScript, Tailwind CSS, and Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

## Build for production (static export)

```bash
npm run build
```

This outputs a fully static site into the `out/` folder (configured via `output: "export"` in `next.config.mjs`), ready for any static host.

## Folder structure

```
avelile-portfolio/
├── app/
│   ├── layout.tsx        # Root layout, fonts, SEO metadata
│   ├── page.tsx          # Assembles all sections
│   └── globals.css       # Design tokens, base styles, focus states
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Skills.tsx
│   ├── Projects.tsx
│   ├── Education.tsx
│   ├── Experience.tsx
│   ├── Contact.tsx
│   ├── Footer.tsx
│   └── ui/
│       ├── Section.tsx        # Reusable section wrapper (eyebrow + heading)
│       ├── Badge.tsx          # Skill badge
│       ├── ProjectCard.tsx    # Project card
│       └── TerminalWindow.tsx # Hero's signature "code editor" visual
├── data/
│   ├── skills.ts        # Edit to add/remove skills
│   ├── projects.ts      # Edit to add/remove/update projects
│   ├── education.ts     # Edit education timeline
│   └── experience.ts    # Edit experience & leadership entries
├── public/
│   └── cv/
│       └── Avelile-Mnyazana-CV.pdf   # ⚠️ placeholder — replace with the real CV
├── next.config.mjs      # Static export configuration
├── tailwind.config.ts   # Design tokens (colors, fonts, animation)
└── vercel.json / render.yaml  # Deployment configs
```

Content lives in `data/*.ts` on purpose — updating a skill, project, or timeline entry never requires touching component code.

## ⚠️ Replace the placeholder CV

`public/cv/Avelile-Mnyazana-CV.pdf` is currently a generated placeholder (it wasn't provided in the brief). Replace it with your real CV, **keeping the same filename**, and the "Download CV" button in `components/Hero.tsx` will keep working automatically. If you rename the file, update the `href` in that component too.

## Contact form

The contact form validates name, email, and message length in the browser. Since this is a static export with no backend, submitting currently opens the visitor's email client pre-filled with their message (see `components/Contact.tsx`). Update the `CONTACT_EMAIL` constant with your real email address. When you're ready for a "real" backend submission, swap that logic for a form service like Formspree/Resend, or a serverless function — at that point you'd drop `output: "export"` from `next.config.mjs` and deploy on a platform that supports Next.js API routes (e.g. Vercel's default Next.js framework preset).

## Deployment

**Vercel** — `vercel.json` sets the build command to `npm run build` and the output directory to `out`, deployed as a static site.

**Render** — `render.yaml` defines a static site service using `npm install && npm run build` as the build command and `./out` as the publish path.

Either way: push this repo to GitHub, then import it in Vercel or Render and it will pick up the config automatically.

## Design notes

- **Palette**: near-black graphite background, teal/cyan accent, warm amber used sparingly — chosen to read like an editor/terminal rather than a generic dark-mode template.
- **Type**: Space Grotesk (headings), Inter (body), JetBrains Mono (labels, code, the `// eyebrow` comments above each section heading).
- **Signature element**: the hero's "code editor" panel, animating in like a snippet being typed, ties the whole design back to the subject — a developer's actual working environment — rather than a generic gradient hero.
- **Motion**: kept deliberately subtle (fade/slide-ins, a blinking cursor) and respects `prefers-reduced-motion`.

## Advice for future improvements as skills grow

- Add real project screenshots/GIFs to `public/images/` and reference them from `data/projects.ts` once cards support an image slot.
- As you complete internships, add a proper "Work Experience" section separate from Leadership placeholders.
- Once you have a live deployed project, add a "Live Demo" link — the `ProjectCard` already supports an optional `demo` field.
- Consider adding light mode when you have a spare afternoon — the color tokens are centralized in `tailwind.config.ts`, so it's mostly a matter of adding a light palette and a toggle.
- Wire the contact form to a real backend (Formspree, Resend, or a small serverless function) once you're ready to move off `mailto:`.
- Keep this README's "quick facts" and copy honest and current — recruiters notice authenticity, and it's easier to keep updating a portfolio that already reflects where you actually are.
