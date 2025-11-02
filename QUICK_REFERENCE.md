# 🚀 Quick Reference Card

Keep this handy while working on your portfolio!

## 📍 Essential Commands

### Development
```bash
npm run dev              # Start dev server (http://localhost:4321)
npm run build            # Build for production
npm run preview          # Preview production build
```

### GitHub Operations
```bash
git status               # Check what changed
git add .                # Stage all changes
git commit -m "message"  # Commit with message
git push origin main     # Deploy to GitHub (triggers auto-build)
```

### Maintenance
```bash
npm update               # Update dependencies
npm run fetch-github     # Fetch GitHub data manually
```

## 📂 Important Files

| File | Purpose | When to Edit |
|------|---------|--------------|
| `src/components/Hero.astro` | Hero section, stats | Update achievements |
| `src/components/Skills.astro` | Skills matrix | Add new skills |
| `src/components/Projects.astro` | Case studies | Add projects |
| `src/components/Contact.astro` | Contact info | Change email/links |
| `src/pages/index.astro` | Homepage | Add new sections |
| `tailwind.config.mjs` | Colors, theme | Change design |
| `public/resume.pdf` | Resume download | Update resume |

## 🎨 Color Customization

Current accent color: `#95A1F9` (purple-blue)

To change, edit `tailwind.config.mjs`:
```javascript
primary: {
  DEFAULT: '#YOUR_COLOR',  // Main accent
  dark: '#DARKER_SHADE',   // Hover state
  light: '#LIGHTER_SHADE'  // Highlights
}
```

Popular alternatives:
- Green (DevOps): `#4ADE80`
- Blue (Tech): `#60A5FA`
- Orange (Energy): `#FB923C`
- Red (Bold): `#EF4444`

## 🔗 Important URLs

### Your Site
- **Live Site**: https://willyd61.github.io
- **Local Dev**: http://localhost:4321

### GitHub
- **Repository**: https://github.com/willyd61/willyd61.github.io
- **Actions**: https://github.com/willyd61/willyd61.github.io/actions
- **Settings**: https://github.com/willyd61/willyd61.github.io/settings

## 📝 Common Workflows

### Update Content
```bash
# 1. Edit files (e.g., Projects.astro)
# 2. Test locally
npm run dev
# 3. Build to check for errors
npm run build
# 4. Commit and push
git add .
git commit -m "Update projects"
git push origin main
# 5. Wait 1-2 minutes, site auto-updates!
```

### Add New Project
1. Open `src/components/Projects.astro`
2. Add to `projects` array:
```javascript
{
  title: 'Project Name',
  description: 'Description...',
  tech: ['Tech1', 'Tech2'],
  metrics: [
    { label: 'Metric', value: 'Value' }
  ],
  link: 'https://...'
}
```
3. Save, commit, push

### Add Resume
```bash
# Copy your resume
cp /path/to/resume.pdf public/resume.pdf

# Commit and push
git add public/resume.pdf
git commit -m "Add resume PDF"
git push origin main
```

## 🐛 Quick Troubleshooting

### Site won't start
```bash
rm -rf node_modules package-lock.json
npm install
npm run dev
```

### Build fails
```bash
npm run build  # Check error message
# Fix the error, then retry
```

### Old content showing
- Hard refresh: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)
- Or open in incognito/private mode

### Deployment failed
1. Check Actions tab for error
2. Verify workflow permissions (Settings → Actions)
3. Ensure GitHub Pages source is "GitHub Actions"

### Changes not showing
```bash
# Clear local cache
rm -rf dist/ node_modules/.astro
npm run build
npm run preview
```

## ✅ Pre-Push Checklist

Before every `git push`:
- [ ] Tested locally (`npm run dev`)
- [ ] Build succeeds (`npm run build`)
- [ ] No console errors (F12 in browser)
- [ ] Commit message is descriptive

## 📊 Performance Check

Quick Lighthouse audit:
1. Open site in Chrome
2. F12 → Lighthouse tab
3. "Analyze page load"
4. Target: All scores 90+

## 🎯 Quick Wins

### Immediate (< 5 min)
- Update a stat in Hero.astro
- Add a new skill to Skills.astro
- Update a project metric

### Short (< 30 min)
- Add new project to Projects.astro
- Write detailed case study
- Update contact information

### Medium (< 2 hours)
- Add new section/component
- Redesign a section
- Add blog functionality

## 📞 Get Help

1. **Setup issues**: Check `SETUP_GUIDE.md`
2. **Deployment problems**: Check `DEPLOYMENT_GUIDE.md`
3. **General questions**: Check `README.md`
4. **Resume PDF**: Check `public/RESUME_README.md`

## 💡 Pro Tips

- 💾 **Commit often**: Small commits are easier to debug
- 🧪 **Test locally**: Always test before pushing
- 📝 **Good messages**: Write clear commit messages
- 🔄 **Update regularly**: Keep content fresh
- 📱 **Check mobile**: Test on phone after updates
- ⚡ **Performance**: Monitor Lighthouse scores

## 🎉 You Got This!

Remember:
- Local dev: `npm run dev`
- Build: `npm run build`
- Deploy: `git push origin main`

Everything else is in the documentation!

---

**Bookmark this page** for quick reference while working on your portfolio.
