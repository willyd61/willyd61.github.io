# 🎯 Complete Setup Guide: willyd61.github.io

Welcome to your new professional portfolio! This guide will walk you through everything from setup to deployment in about 30 minutes.

## 📋 What You're Getting

A cutting-edge portfolio website featuring:
- ⚡ **Lightning-fast performance** (Astro 4.x framework)
- 🎨 **Modern dark theme** optimized for SRE professionals
- 📱 **Mobile-responsive** design
- 🚀 **Auto-deploy** via GitHub Actions
- 🔄 **GitHub integration** showing your repos
- 📊 **SEO optimized** for recruiter discovery

**Tech Stack**: Astro + Tailwind CSS + GitHub Pages

## 🚀 Quick Start (5 minutes)

### Step 1: Prerequisites Check

You need:
- [ ] GitHub account (you have: willyd61)
- [ ] Git installed
- [ ] Node.js 20+ installed
- [ ] Code editor (VS Code recommended)

Check Node version:
```bash
node --version  # Should be 20.x or higher
```

If you need to install Node.js, download from: https://nodejs.org/

### Step 2: Navigate to Portfolio Folder

```bash
cd willyd61-portfolio
```

### Step 3: Install Dependencies

```bash
npm install
```

This will take 1-2 minutes and install Astro, Tailwind, and other dependencies.

### Step 4: Test Locally

```bash
npm run dev
```

- Open browser to: http://localhost:4321
- You should see your portfolio!
- Press `Ctrl+C` to stop the dev server

**✅ Checkpoint**: Does the site load correctly? If yes, continue!

## 📝 Customization (15 minutes)

Before deploying, let's personalize your portfolio.

### Essential Updates

#### 1. Add Your Resume PDF

See: `public/RESUME_README.md` for detailed instructions.

Quick version:
```bash
# Copy your resume to the public folder
cp /path/to/your/resume.pdf public/resume.pdf
```

#### 2. Update Contact Information (if needed)

File: `src/components/Contact.astro`

Current settings:
- Email: spamwilly@gmail.com
- LinkedIn: linkedin.com/in/williamlipford
- GitHub: github.com/willyd61
- Location: Carolina Beach, NC

If any of these changed, update them in the `contactInfo` array.

#### 3. Review Projects

File: `src/components/Projects.astro`

The portfolio includes 3 featured projects:
1. **Five 9s Achievement** (OpenNMS monitoring)
2. **DevOps Transformation** (Ansible/GitLab)
3. **Nautobot Documentation** (RHEL/Security)

To customize:
- Update metrics with your actual numbers
- Add new projects to the `projects` array
- Update GitHub links

#### 4. Review Skills

File: `src/components/Skills.astro`

Skills are organized by category with experience levels.

To customize:
- Update years of experience
- Add new skills
- Adjust proficiency levels (1-12 scale)

#### 5. Verify Hero Stats

File: `src/components/Hero.astro`

Current stats in hero section:
- Years Experience: 20+
- Uptime Achievement: 99.999%
- MTTR Reduction: 85%
- Systems Managed: 500+

Update if your numbers are different.

### Optional Updates

#### Change Color Scheme

File: `tailwind.config.mjs`

Current color scheme is dark with blue/purple accent:
```javascript
primary: '#95A1F9'  // Change this for different accent color
```

Professional alternatives:
- Green (devops): `#4ADE80`
- Blue (tech): `#60A5FA`
- Purple (current): `#95A1F9`

#### Add More Sections

You can add new sections by:
1. Creating new component in `src/components/`
2. Importing in `src/pages/index.astro`
3. Adding after existing sections

## 🚀 Deployment to GitHub Pages (10 minutes)

### Step 1: Create GitHub Repository

1. Go to: https://github.com/new
2. Repository name: **`willyd61.github.io`** (MUST be exact)
3. Description: "Professional SRE Portfolio"
4. Set to **Public**
5. **Do NOT** check "Add README" or ".gitignore"
6. Click "Create repository"

### Step 2: Initialize Git & Push

```bash
# Initialize git (if not already)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: Professional SRE portfolio"

# Rename branch to main
git branch -M main

# Add remote
git remote add origin https://github.com/willyd61/willyd61.github.io.git

# Push to GitHub
git push -u origin main
```

### Step 3: Configure GitHub Pages

1. Go to: https://github.com/willyd61/willyd61.github.io/settings
2. Click **Pages** in left sidebar
3. Under "Source", select **"GitHub Actions"**
4. Save if prompted

### Step 4: Set Workflow Permissions

1. Go to: Settings → Actions → General
2. Scroll to "Workflow permissions"
3. Select **"Read and write permissions"**
4. Check **"Allow GitHub Actions to create and approve pull requests"**
5. Click **Save**

### Step 5: Monitor Deployment

1. Go to: https://github.com/willyd61/willyd61.github.io/actions
2. You should see "Deploy Portfolio to GitHub Pages" running
3. Wait for green checkmark (1-2 minutes)
4. **Your site is live!** → https://willyd61.github.io

## ✅ Verification Checklist

Test your deployed site:

- [ ] Site loads at https://willyd61.github.io
- [ ] Hero section displays correctly
- [ ] All 4 sections load (Hero, Skills, Projects, Contact)
- [ ] Mobile view works (test on phone)
- [ ] Links work:
  - [ ] GitHub link
  - [ ] LinkedIn link  
  - [ ] Email link
  - [ ] Download Resume (after adding PDF)
- [ ] No console errors (F12 → Console)
- [ ] Smooth scrolling works

## 📊 Performance Check

Run Lighthouse audit:

1. Open site in Chrome
2. Press F12
3. Click **Lighthouse** tab
4. Click "Analyze page load"

**Target Scores**:
- Performance: 95+
- Accessibility: 100
- Best Practices: 100
- SEO: 100

## 🎯 Next Steps

### Immediate (Today)

1. [ ] Add resume PDF to `public/resume.pdf`
2. [ ] Share portfolio link on LinkedIn
3. [ ] Update LinkedIn profile with website link
4. [ ] Add to email signature

### This Week

1. [ ] Get feedback from 2-3 colleagues
2. [ ] Take professional photo if needed
3. [ ] Write detailed case study for one project
4. [ ] Tag GitHub repos with `portfolio-project` topic

### This Month

1. [ ] Add blog posts or technical writing
2. [ ] Create architecture diagrams for projects
3. [ ] Add more case studies
4. [ ] Share with target companies

## 🔄 Making Updates

Anytime you want to update content:

```bash
# Make changes to files
# Example: Edit src/components/Projects.astro

# Commit and push
git add .
git commit -m "Add new project"
git push origin main
```

Site automatically rebuilds and deploys! (Takes 1-2 minutes)

## 📚 Resources

### Documentation
- **Astro**: https://docs.astro.build
- **Tailwind CSS**: https://tailwindcss.com/docs
- **GitHub Pages**: https://docs.github.com/pages

### Detailed Guides
- `README.md` - Project overview and commands
- `DEPLOYMENT_GUIDE.md` - Comprehensive deployment instructions
- `public/RESUME_README.md` - Resume PDF setup

### Community
- Astro Discord: https://astro.build/chat
- GitHub Discussions: Repository discussions tab

## 🐛 Troubleshooting

### "npm: command not found"
Install Node.js from https://nodejs.org/

### "Failed to build"
```bash
# Clear and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### "Site shows 404"
- Wait 2-3 minutes after first deployment
- Check Actions tab for successful deployment
- Verify GitHub Pages source is "GitHub Actions"

### "Old content showing"
Hard refresh: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)

### Need Help?
- Check `DEPLOYMENT_GUIDE.md` for detailed troubleshooting
- GitHub Actions logs show detailed error messages
- Astro docs have excellent troubleshooting guides

## 🎉 You're Ready!

Your professional portfolio is now:
- ✅ Built with modern technology
- ✅ Optimized for performance
- ✅ Mobile responsive
- ✅ SEO friendly
- ✅ Auto-deploying
- ✅ Showcasing your SRE expertise

**Next**: Share it with the world! 🚀

---

**Questions?** Review the documentation files or check GitHub Issues.

**Success?** Update your LinkedIn, resume, and start applying to those senior SRE roles! 💪
