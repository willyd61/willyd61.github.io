# 🚀 Deployment Guide: willyd61.github.io

Complete step-by-step guide to deploy your portfolio to GitHub Pages.

## Prerequisites Checklist

- [ ] GitHub account (willyd61)
- [ ] Git installed locally
- [ ] Node.js 20.x or higher installed
- [ ] Portfolio files ready to deploy

## Part 1: Local Setup & Testing

### Step 1: Navigate to Project Directory

```bash
cd /path/to/willyd61-portfolio
```

### Step 2: Install Dependencies

```bash
npm install
```

### Step 3: Test Locally

```bash
npm run dev
```

Open browser to `http://localhost:4321` and verify everything looks correct.

### Step 4: Build for Production

```bash
npm run build
```

Should complete without errors and create `dist/` folder.

## Part 2: GitHub Repository Setup

### Step 1: Create Repository on GitHub

1. Go to [github.com/new](https://github.com/new)
2. Repository name: **`willyd61.github.io`** (must be exact)
3. Description: "Professional portfolio - Senior SRE & Infrastructure Architect"
4. Set to **Public**
5. DO NOT initialize with README, .gitignore, or license
6. Click "Create repository"

### Step 2: Initialize Local Git Repository

```bash
# In your portfolio directory
git init
git add .
git commit -m "Initial commit: Portfolio foundation"
git branch -M main
```

### Step 3: Connect to GitHub

```bash
git remote add origin https://github.com/willyd61/willyd61.github.io.git
git push -u origin main
```

## Part 3: Configure GitHub Pages

### Step 1: Enable GitHub Pages

1. Go to repository: `https://github.com/willyd61/willyd61.github.io`
2. Click **Settings** tab
3. Scroll down to **Pages** in left sidebar
4. Click on **Pages**

### Step 2: Configure Source

Under "Build and deployment":
- **Source**: Select "GitHub Actions"
- Save (if prompted)

### Step 3: Set Workflow Permissions

1. In Settings, click **Actions** → **General** (left sidebar)
2. Scroll to "Workflow permissions"
3. Select **"Read and write permissions"**
4. Check **"Allow GitHub Actions to create and approve pull requests"**
5. Click **Save**

## Part 4: Deploy

### Automatic Deployment

The GitHub Action will automatically trigger on push to `main` branch.

1. **Monitor deployment**:
   - Go to repository
   - Click **Actions** tab
   - You should see "Deploy Portfolio to GitHub Pages" workflow running

2. **Wait for completion** (usually 1-2 minutes)
   - Green checkmark = Success ✅
   - Red X = Failed (see troubleshooting below)

3. **Access your site**:
   - `https://willyd61.github.io`
   - May take 1-2 minutes after first deployment

### Manual Deployment (if needed)

```bash
# From your local machine
git add .
git commit -m "Update portfolio"
git push origin main
```

This will trigger the deployment workflow.

## Part 5: Verification Checklist

- [ ] Site loads at `https://willyd61.github.io`
- [ ] All sections render correctly (Hero, Skills, Projects, Contact)
- [ ] Links work (GitHub, LinkedIn, Email)
- [ ] Mobile responsive (test on phone)
- [ ] Download Resume link works (after adding PDF)
- [ ] No console errors (F12 → Console)

## Part 6: Add Resume PDF

1. **Prepare your resume**:
   - Save as `resume.pdf`
   - Optimize file size (<2MB recommended)

2. **Add to repository**:
   ```bash
   # Copy your resume to public folder
   cp /path/to/your/resume.pdf public/resume.pdf
   
   # Commit and push
   git add public/resume.pdf
   git commit -m "Add resume PDF"
   git push origin main
   ```

3. **Test download**:
   - Visit your site
   - Click "Download Resume" button
   - Verify PDF downloads correctly

## Part 7: Ongoing Updates

### Update Content

```bash
# Make changes to components, pages, etc.
# Example: Edit src/components/Projects.astro

git add .
git commit -m "Add new project case study"
git push origin main
```

Site will automatically rebuild and deploy!

### Update GitHub Data

The site fetches GitHub data during build. To update:

```bash
# Manually trigger fetch (optional)
npm run fetch-github

# Commit if you want to save locally
git add src/data/github-repos.json
git commit -m "Update GitHub data"
git push origin main
```

Or just push any change to trigger rebuild which fetches fresh data.

## 🐛 Troubleshooting

### Deployment Failed

**Check workflow logs**:
1. Go to **Actions** tab
2. Click on failed workflow
3. Click on failed job
4. Read error messages

**Common issues**:

1. **Build error**: 
   ```bash
   # Test locally first
   npm run build
   ```
   Fix any errors, commit, and push again.

2. **Permission denied**:
   - Verify workflow permissions in Settings → Actions → General
   - Should be "Read and write permissions"

3. **GitHub Pages not enabled**:
   - Settings → Pages → Source should be "GitHub Actions"

4. **404 on site**:
   - Wait 2-3 minutes after first deploy
   - Check if workflow completed successfully
   - Verify URL is `https://willyd61.github.io` (not with /main)

### Site Shows Old Content

**Clear cache and hard refresh**:
- Chrome: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
- Or open in incognito/private mode

**Verify deployment completed**:
- Check Actions tab for latest successful run
- Click on workflow → Check deployment time

### Links Don't Work

1. **Relative links**: Should start with `/` or `#`
   - Good: `/resume.pdf` or `#contact`
   - Bad: `resume.pdf` or `contact`

2. **External links**: Should be full URLs
   - Good: `https://github.com/willyd61`
   - Bad: `github.com/willyd61`

## 📊 Performance Testing

### Run Lighthouse Audit

1. Open site in Chrome
2. Press F12 (Developer Tools)
3. Click **Lighthouse** tab
4. Select:
   - ✅ Performance
   - ✅ Accessibility  
   - ✅ Best Practices
   - ✅ SEO
   - Device: Desktop
5. Click "Analyze page load"

**Target scores**:
- Performance: 95+
- Accessibility: 100
- Best Practices: 100
- SEO: 100

### Optimize if Needed

**Images**:
```bash
# Compress images before adding
# Use tools like TinyPNG, Squoosh, or ImageOptim
```

**Resume PDF**:
```bash
# Keep under 2MB
# Use online PDF compressor if needed
```

## 🔄 Regular Maintenance

### Weekly
- [ ] Check site loads correctly
- [ ] Monitor GitHub Actions (Settings → Actions)

### Monthly
- [ ] Update project metrics if changed
- [ ] Add new projects/case studies
- [ ] Check all external links work

### Quarterly
- [ ] Update dependencies: `npm update`
- [ ] Review and update resume PDF
- [ ] Add new certifications/skills
- [ ] Update GitHub data

## 🎉 Success Checklist

- [x] Repository created at github.com/willyd61/willyd61.github.io
- [x] GitHub Pages enabled with GitHub Actions
- [x] Workflow permissions configured
- [x] First deployment successful
- [x] Site accessible at https://willyd61.github.io
- [ ] Resume PDF uploaded
- [ ] Content personalized (projects, skills, contact)
- [ ] Tested on mobile devices
- [ ] Lighthouse scores 90+
- [ ] Shared on LinkedIn

## 📝 Next Steps

1. **Customize content**:
   - Add your specific projects
   - Update metrics with your achievements
   - Add case study details

2. **Share your portfolio**:
   - Update LinkedIn with website link
   - Add to resume
   - Share with colleagues for feedback

3. **Keep it updated**:
   - Add new projects as you complete them
   - Update skills as you learn
   - Refresh case studies with latest metrics

## 📧 Get Help

If you run into issues:

1. **Check workflow logs** in Actions tab
2. **Search GitHub Issues** for similar problems
3. **Consult Astro docs**: [docs.astro.build](https://docs.astro.build)
4. **Check GitHub Pages docs**: [docs.github.com/pages](https://docs.github.com/pages)

---

**Deployment completed? Congratulations! 🎉**

Your portfolio is now live at: **https://willyd61.github.io**
