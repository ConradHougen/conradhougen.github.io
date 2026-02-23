# Setup Guide - Next.js + Material UI Website

Your website has been completely rebuilt using Next.js 14 and Material UI! This guide will help you get it running.

## What Changed

**Before:** Jekyll static site with Minimal Mistakes theme (wasn't rendering properly)
**After:** Modern Next.js + Material UI website with:
- ✅ Professional Material Design styling
- ✅ Fully responsive navigation with mobile drawer
- ✅ Working multi-page site with proper routing
- ✅ Markdown-based blog system
- ✅ Automatic deployment to GitHub Pages
- ✅ TypeScript for type safety
- ✅ Cross-platform rendering

## Quick Start

### 1. Install Dependencies

```bash
npm install
```

This will install all required packages including Next.js, React, Material UI, and TypeScript.

### 2. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your site!

The development server supports hot reloading - changes you make will appear immediately.

### 3. Customize Your Information

Replace placeholder values with your actual information:

**Files to update:**
- `src/app/contact/page.tsx` - Replace `YOUR_EMAIL`, `YOUR_LINKEDIN_URL`, etc.
- `src/components/Footer.tsx` - Same placeholders
- `src/app/about/page.tsx` - Update `YOUR_LOCATION`, `YOUR_EMAIL`
- `src/app/career/page.tsx` - Update `YOUR_UNDERGRADUATE_INSTITUTION`
- `src/app/projects/page.tsx` - Update GitHub URLs for your projects

**Tip:** Use your editor's "Find and Replace" to search for `YOUR_` and replace all placeholders at once.

### 4. Configure for Your GitHub Repository

**If your repo is `username.github.io` (root domain):**
- No changes needed! The site will work as-is.

**If your repo is named `conradhougen.github.io` (root user pages):**

This is a root GitHub Pages site, so `basePath` and `assetPrefix` should remain **commented out** in `next.config.mjs` — no changes needed:

```javascript
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // basePath and assetPrefix are NOT needed for root user pages (username.github.io)
  // basePath: '/your-repo-name',
  // assetPrefix: '/your-repo-name',
};
```

**If your repo is at a subdirectory (e.g., `username.github.io/repo-name`):**

Edit `next.config.mjs` and uncomment these lines, replacing with your repo name:

```javascript
basePath: '/your-repo-name',
assetPrefix: '/your-repo-name',
```

### 5. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** > **Pages**
3. Under "Source", select **GitHub Actions**
4. Save

That's it! Your site will automatically deploy when you push to the main branch.

## Testing the Build

Before deploying, test the production build locally:

```bash
# Build the site
npm run build

# The static files will be in the 'out' directory
```

If the build succeeds, your site is ready to deploy!

## Deployment

### Automatic Deployment (Recommended)

Simply push to the main branch:

```bash
git add .
git commit -m "Deploy Next.js site"
git push origin main
```

GitHub Actions will automatically build and deploy your site. Check the "Actions" tab in your repository to monitor progress.

### Manual Deployment

If you prefer to build locally and deploy manually:

```bash
npm run build
# Upload the 'out' directory to your web server
```

## Site Structure

Your site now has these pages:

- **Home** (`/`) - Hero section with overview and call-to-action
- **About** (`/about`) - Detailed background and skills
- **Career** (`/career`) - Work experience and education timeline
- **Projects** (`/projects`) - Portfolio of 6 projects
- **Blog** (`/blog`) - Blog listing with 2 sample posts
- **Contact** (`/contact`) - Contact information and social links

## Adding Blog Posts

Create new Markdown files in `src/content/posts/` with this format:

**Filename:** `2026-01-15-my-new-post.md`

**Content:**
```markdown
---
title: "My New Post Title"
date: "2026-01-15"
categories: ["machine learning", "research"]
tags: ["bayesian", "graphs", "python"]
excerpt: "A brief description that appears on the blog listing page"
---

Your post content here in Markdown format.

## You can use headings

- Lists
- Code blocks
- Images
- Links

Everything Markdown supports!
```

The blog automatically discovers and displays new posts.

## Customizing the Theme

### Change Colors

Edit `src/theme/theme.ts`:

```typescript
primary: {
  main: '#1976d2',  // ← Change this to your preferred primary color
},
secondary: {
  main: '#dc004e',  // ← Change this to your preferred secondary color
},
```

Material UI will automatically generate lighter and darker shades.

### Change Typography

In the same file, modify the `typography` section:

```typescript
typography: {
  fontFamily: [
    'Your Preferred Font',
    '-apple-system',
    // ...
  ].join(','),
}
```

## Troubleshooting

### "Module not found" errors

```bash
rm -rf node_modules package-lock.json
npm install
```

### Site not updating after changes

```bash
# Stop the dev server (Ctrl+C)
rm -rf .next
npm run dev
```

### GitHub Pages shows 404

1. If using a subdirectory repo, verify `basePath` in `next.config.mjs` matches your repository name. For a root user pages repo (`username.github.io`), `basePath` must remain commented out.
2. Check Settings > Pages is set to "GitHub Actions"
3. Review the workflow logs in the "Actions" tab

### Styles not loading

Make sure these are in `src/app/layout.tsx`:
- `ThemeProvider` wraps the entire app
- `CssBaseline` is included
- `AppRouterCacheProvider` is the outermost wrapper

## Old Jekyll Files

The old Jekyll files are still in your repository:
- `_config.yml`, `Gemfile`, `_posts/`, `_data/`, etc.

You can safely delete these if you're happy with the Next.js version:

```bash
# Remove old Jekyll files (optional)
rm -rf _config.yml Gemfile _data _posts about.md blog.md career.md contact.md index.md projects.md
```

**Important:** Don't delete the old files until you're sure the new site works!

## Next Steps

1. ✅ Install dependencies (`npm install`)
2. ✅ Run dev server (`npm run dev`)
3. ✅ Replace placeholder values with your information
4. ✅ Customize theme colors (optional)
5. ✅ Update `next.config.mjs` basePath if needed
6. ✅ Test production build (`npm run build`)
7. ✅ Enable GitHub Pages (Settings > Pages > GitHub Actions)
8. ✅ Push to main branch to deploy

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Material UI Documentation](https://mui.com/material-ui/getting-started/)
- [Markdown Guide](https://www.markdownguide.org/)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)

## Need Help?

Check `CLAUDE.md` for detailed technical documentation, or `README.md` for a comprehensive overview.

Enjoy your new professional website! 🎉
