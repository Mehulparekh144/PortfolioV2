# Portfolio V2 — Handoff Doc

**Last updated:** 2026-06-14  
**Session:** Initial redesign + SEO + bug fixes  
**Repo:** github.com/Mehulparekh144/PortfolioV2  
**Live:** https://mehulparekh.vercel.app

---

## What Was Built

Full redesign of Mehul's Next.js portfolio from scratch. Previous version was outdated (reflected internship/student era). New version reflects his current role as SWE at Meta on Instagram Interactive Media.

### Design System
- **Font:** JetBrains Mono throughout (via `next/font/google`, CSS var `--font-mono`)
- **Theme:** Dark only (`#1a1a1a` bg), no toggle
- **Aesthetic:** Terminal/code style inspired by sammieyisau.dev — `//section-labels`, `<Name>` angle bracket hero, flat borders
- **Colors:** `terminal.bg`, `terminal.border`, `terminal.muted`, `terminal.comment`, `terminal.accent` (#7c6af7 purple), `terminal.accentBlue` (#4f8ef7)
- **Ambient glow:** `body::before` with two radial gradients (purple top-left, blue bottom-right, ~5% opacity)
- **Inspo images:** stored locally in `claude-inspo/` (gitignored)

### Key Components
| File | Purpose |
|---|---|
| `src/components/TopBar.tsx` | Sticky header — contact row (email/github/location) + nav row (Home/Projects/Blog) |
| `src/components/home/HeroSection.tsx` | Animated `<Mehul Parekh>` char-by-char reveal, `//about` pitch |
| `src/components/home/ExperienceSection.tsx` | Grid layout, `Company //role` boxes, BorderBeam on active Meta role |
| `src/components/home/ProjectsSection.tsx` | 2-col grid, BlurFade stagger |
| `src/components/home/SkillsSection.tsx` | 3-row pill layout |
| `src/components/home/Footer.tsx` | Minimal — name + icon links |
| `src/components/ProjectCard.tsx` | Hover lift (`y: -2`), flat border, `// desc` comment style |
| `src/components/blog/BlogCard.tsx` | Blog post preview card |
| `src/components/AnimatedSection.tsx` | `useInView` scroll-reveal wrapper (client) |
| `src/components/ui/border-beam.tsx` | Custom `requestAnimationFrame` beam traveling around border |
| `src/components/ui/blur-fade.tsx` | MagicUI-style blur+fade entrance animation |

### Data Files
| File | Purpose |
|---|---|
| `src/data/experience.ts` | Typed array of work + education entries |
| `src/data/projects.json` | All projects (existing, unchanged structure) |
| `mehul_portfolio_context.md` | Resume context (gitignored, local only) |

### Blog System
- **File-based MDX** — add `.mdx` files to `src/content/blog/`
- **Frontmatter:** `title`, `date` (YYYY-MM-DD), `description`, `tags[]`, `readTime`
- **Routes:** `/blog` (list), `/blog/[slug]` (post)
- **Auth:** implicit — only git push access = only owner can publish
- **No posts yet** — empty state shows `// no posts yet`

### Animations
- `src/lib/animations.ts` — shared Framer Motion variants (`fadeUp`, `staggerContainer`, `charReveal`)
- Lenis smooth scroll initialized in `src/components/providers/provider.tsx`
- **Critical:** `transpilePackages: ['lenis']` in `next.config.js` — required because Lenis is ESM-only. Without this the page is blank (JS crash, all Framer Motion elements stay at `opacity: 0`)

### SEO
- Full OG + Twitter card metadata in `layout.tsx`
- JSON-LD Person schema (name, employer Meta, education, socials)
- `src/app/sitemap.ts` → `/sitemap.xml`
- `src/app/robots.ts` → `/robots.txt`
- Per-post canonical + article OG in `blog/[slug]/page.tsx`
- OG image: `public/og.png` (1200×630, dark terminal aesthetic)
- **TODO:** Submit sitemap to Google Search Console once live

---

## Known Issues / Decisions

- **NextUI removed** — was injecting `:root { color-scheme: light; --nextui-background: white }` via its Tailwind plugin, overriding the dark background. Removed from both `provider.tsx` and `tailwind.config.ts`. No NextUI components are used.
- **MagicUI CLI broken** (v0.1.6 crashes with PostHog API key error) — `border-beam.tsx` and `blur-fade.tsx` were written manually instead.
- **BorderBeam** uses `requestAnimationFrame` to move a radial-gradient glow around the border element. Not CSS-only (the CSS approach rendered as a solid gradient block).
- **Profile picture removed** by user request.
- **Stat pills removed** from hero (were Meta-specific metrics — user wanted them gone).
- **Domain:** `mehulparekh.vercel.app` — hardcoded in `layout.tsx`, `sitemap.ts`, `robots.ts`, `blog/[slug]/page.tsx`.

---

## What's Left / Nice To Haves

- [ ] Write first real blog post (add `.mdx` to `src/content/blog/`)
- [ ] Submit sitemap to Google Search Console
- [ ] Verify OG image at opengraph.xyz once deployed
- [ ] Consider adding a `og.png` generation route using `next/og` for blog posts (currently blog posts inherit the global OG image)
- [ ] Update `src/data/experience.ts` bullets if role/project details change at Meta
- [ ] Add more projects to `src/data/projects.json` as they ship

---

## How To Run

```bash
npm install
npm run dev       # localhost:3000
npm run build     # production build check
```

## How To Add a Blog Post

1. Create `src/content/blog/my-post-title.mdx`
2. Add frontmatter:
```mdx
---
title: "Post Title"
date: "2026-06-14"
description: "One line summary"
tags: ["tag1", "tag2"]
---

Your content here...
```
3. `git push` → Vercel auto-deploys
