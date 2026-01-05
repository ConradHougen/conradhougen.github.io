# Conrad Hougen - Professional Website

A modern, professional website built with Next.js and Material UI, featuring a full blog, project portfolio, and contact information.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **UI Library:** Material UI (MUI) v5
- **Language:** TypeScript
- **Styling:** Emotion (CSS-in-JS)
- **Blog:** Markdown with gray-matter and remark
- **Deployment:** GitHub Pages via GitHub Actions

## Features

- ✨ Modern, responsive Material Design interface
- 📱 Mobile-friendly navigation with drawer
- 📝 Markdown-based blog with syntax highlighting
- 🎨 Customizable Material UI theme
- 🚀 Static site generation for optimal performance
- 📊 SEO-optimized with meta tags
- ♿ Accessible components

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
cd YOUR_REPO_NAME
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Export static site
npm run export

# Lint code
npm run lint
```

## Project Structure

```
├── src/
│   ├── app/                 # Next.js app router pages
│   │   ├── about/          # About page
│   │   ├── blog/           # Blog listing and individual posts
│   │   ├── career/         # Career page
│   │   ├── contact/        # Contact page
│   │   ├── projects/       # Projects page
│   │   ├── layout.tsx      # Root layout with MUI theme
│   │   └── page.tsx        # Home page
│   ├── components/         # Reusable React components
│   │   ├── Navigation.tsx  # Top navigation bar
│   │   └── Footer.tsx      # Footer component
│   ├── content/
│   │   └── posts/          # Markdown blog posts
│   ├── lib/
│   │   └── blog.ts         # Blog utilities
│   └── theme/
│       └── theme.ts        # Material UI theme configuration
├── public/                 # Static assets
├── .github/
│   └── workflows/
│       └── deploy.yml      # GitHub Pages deployment
├── next.config.mjs         # Next.js configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Dependencies
```

## Adding Blog Posts

Create a new Markdown file in `src/content/posts/` with the following format:

```markdown
---
title: "Your Post Title"
date: "2026-01-15"
categories: ["category1", "category2"]
tags: ["tag1", "tag2"]
excerpt: "A brief description of your post"
---

Your post content here...
```

The filename should follow the pattern: `YYYY-MM-DD-post-slug.md`

## Customization

### Update Personal Information

Replace all placeholder values (YOUR_EMAIL, YOUR_LINKEDIN_URL, etc.) in:
- `src/app/contact/page.tsx`
- `src/components/Footer.tsx`
- `next.config.mjs` (uncomment and set basePath if needed)

### Modify Theme Colors

Edit `src/theme/theme.ts` to customize:
- Primary and secondary colors
- Typography
- Component styles

### Configure for GitHub Pages

1. If your repository is not at the root (e.g., `username.github.io/repo-name`), uncomment and update in `next.config.mjs`:
```javascript
basePath: '/your-repo-name',
assetPrefix: '/your-repo-name',
```

2. Enable GitHub Pages in your repository settings:
   - Go to Settings > Pages
   - Source: GitHub Actions

3. Push to main branch - the site will automatically build and deploy

## Deployment

The site automatically deploys to GitHub Pages when you push to the `main` branch via GitHub Actions.

### Manual Deployment

```bash
# Build and export
npm run build

# The static files are in the 'out' directory
```

## License

This project is open source and available under the MIT License.

## Contact

Conrad D. Hougen
- Email: YOUR_EMAIL
- LinkedIn: YOUR_LINKEDIN_URL
- GitHub: YOUR_GITHUB_URL
