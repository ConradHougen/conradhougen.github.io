# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a professional personal website and blog built with Next.js 14 (App Router) and Material UI v5. The site features a multi-page layout with Home, About, Career, Projects, Blog, and Contact pages. It's designed to be deployed to GitHub Pages as a static site.

## Architecture

### Tech Stack

- **Framework:** Next.js 14 with App Router and TypeScript
- **UI Library:** Material UI (MUI) v5 with Emotion for styling
- **Blog System:** Markdown files processed with gray-matter and remark
- **Deployment:** Static site generation (SSG) for GitHub Pages
- **CI/CD:** GitHub Actions for automatic deployment

### Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout with MUI ThemeProvider
│   ├── page.tsx           # Home page
│   ├── about/page.tsx     # About page
│   ├── career/page.tsx    # Career page (Work + Education)
│   ├── projects/page.tsx  # Projects portfolio
│   ├── blog/
│   │   ├── page.tsx       # Blog listing page
│   │   └── [slug]/page.tsx # Individual blog post (dynamic route)
│   └── contact/page.tsx   # Contact page
├── components/
│   ├── Navigation.tsx     # Responsive navigation bar with mobile drawer
│   └── Footer.tsx         # Footer with social links
├── content/
│   └── posts/             # Markdown blog posts (YYYY-MM-DD-slug.md)
├── lib/
│   └── blog.ts            # Blog utilities (read/parse markdown)
└── theme/
    └── theme.ts           # Material UI theme configuration
```

### Key Architectural Decisions

1. **Static Site Generation (SSG):** All pages are pre-rendered at build time for optimal performance and GitHub Pages compatibility
2. **Material UI Theme:** Centralized theme configuration in `src/theme/theme.ts` with custom colors, typography, and component overrides
3. **Markdown Blog:** Blog posts are plain Markdown files in `src/content/posts/` with frontmatter metadata
4. **Responsive Design:** Mobile-first approach with MUI's responsive utilities and breakpoints
5. **TypeScript:** Strict typing throughout for better DX and fewer runtime errors

## Development Commands

### Local Development

```bash
# Install dependencies (first time only)
npm install

# Run development server (with hot reload)
npm run dev
# Opens at http://localhost:3000

# Build for production
npm run build

# Test production build locally
npm start

# Lint code
npm run lint
```

### Adding Blog Posts

Create new Markdown files in `src/content/posts/` following this pattern:

**Filename:** `YYYY-MM-DD-post-slug.md`

**Format:**
```markdown
---
title: "Post Title"
date: "2026-01-15"
categories: ["category1"]
tags: ["tag1", "tag2"]
excerpt: "Brief description for listing pages"
---

Post content in Markdown...
```

Blog posts are automatically discovered and rendered by the blog system.

## GitHub Pages Deployment

### Automatic Deployment

The site deploys automatically to GitHub Pages when you push to the `main` branch via GitHub Actions (`.github/workflows/deploy.yml`).

**Required GitHub Settings:**
1. Go to repository Settings > Pages
2. Set Source to "GitHub Actions"
3. The workflow will handle the rest

### Configuration for GitHub Pages

This repo is named `conradhougen.github.io` (a root user pages site), so `basePath` and `assetPrefix` in `next.config.mjs` must remain **commented out**. The site is served at `https://conradhougen.github.io` with no path prefix.

If you ever move to a subdirectory repo (`username.github.io/repo-name`), uncomment and set in `next.config.mjs`:

```javascript
basePath: '/your-repo-name',
assetPrefix: '/your-repo-name',
```

The `output: 'export'` setting in `next.config.mjs` enables static HTML export for GitHub Pages.

## Important Notes

### Placeholder Values to Replace

The codebase contains several placeholder values that need to be replaced with actual information:

- `YOUR_EMAIL` - Personal email address
- `YOUR_LINKEDIN_URL` - LinkedIn profile URL
- `YOUR_GITHUB_URL` - GitHub profile URL
- `YOUR_ORCID_URL` - ORCID profile URL
- `YOUR_GOOGLE_SCHOLAR_URL` - Google Scholar profile URL
- `YOUR_DEEPBLUE_DISSERTATION_URL` - Dissertation repository URL
- `YOUR_LOCATION` - Physical location
- `YOUR_UNDERGRADUATE_INSTITUTION` - Undergraduate university name

These appear in:
- `src/app/contact/page.tsx`
- `src/components/Footer.tsx`
- `src/app/about/page.tsx`
- `src/app/career/page.tsx`

### Material UI Theme Customization

The theme is defined in `src/theme/theme.ts`. To customize:

- **Colors:** Modify `palette.primary` and `palette.secondary`
- **Typography:** Update `typography.fontFamily` and size definitions
- **Component defaults:** Add/modify entries in `components` object

Changes automatically apply across the entire site.

### Navigation Structure

The main navigation is defined in `src/components/Navigation.tsx` in the `navItems` array. To add/remove pages, update this array and create corresponding page components.

### Static Assets

Place images and other static files in the `public/` directory. They can be referenced in code as `/filename.ext`.

## Common Tasks

### Add a New Page

1. Create `src/app/newpage/page.tsx`
2. Add entry to `navItems` in `src/components/Navigation.tsx`
3. The page will automatically be included in the build

### Modify Theme Colors

Edit `src/theme/theme.ts` and change the `palette.primary.main` and `palette.secondary.main` values.

### Update Footer Links

Edit `src/components/Footer.tsx` to modify social links and contact information.

## Dependencies

Key dependencies:
- `next` - React framework with SSG capabilities
- `react` & `react-dom` - React library
- `@mui/material` - Material UI components
- `@emotion/react` & `@emotion/styled` - CSS-in-JS for MUI
- `@mui/icons-material` - Material Design icons
- `gray-matter` - Parse frontmatter from Markdown
- `remark` & `remark-html` - Convert Markdown to HTML
- `typescript` - Type safety

## Troubleshooting

**Build fails with module not found:**
- Run `npm install` to ensure all dependencies are installed
- Check that import paths use `@/` alias (maps to `src/`)

**Pages don't update after changes:**
- Restart dev server (`npm run dev`)
- Clear `.next` directory and rebuild

**GitHub Pages shows 404:**
- Confirm `basePath` in `next.config.mjs` is commented out (required for root user pages `conradhougen.github.io`)
- Check that GitHub Pages source is set to "GitHub Actions"
- Review workflow run logs in GitHub Actions tab

**Styling doesn't match Material UI:**
- Ensure MUI ThemeProvider wraps the app in `src/app/layout.tsx`
- Verify `CssBaseline` component is included
