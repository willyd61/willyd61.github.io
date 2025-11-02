# William Lipford - Professional Portfolio 🚀

Your cutting-edge SRE portfolio built with modern web technologies, showcasing 25+ years of infrastructure reliability expertise.

## 🌟 What's Built

A high-performance, automated portfolio website featuring:

### Current Highlights
- **Hero Section**: Showcasing your current role at Foresight Tech Sourcing and 25+ years of experience
- **Five 9s Achievement**: Prominently featured NMS Customer Portal project (99.999% uptime)
- **Skills Matrix**: Comprehensive display of your technical competencies with visual progress indicators
- **Featured Projects**: Detailed case studies including:
  - NMS Customer Portal (Five 9s Achievement - Apr 2020 to Oct 2021)
  - Network to Code DevOps SOT Transformation (Jul 2023 to Sep 2025)
  - Event-Driven Password Management with Kafka (Mar 2021 to May 2022)
  - Nautobot Installation Guide on GitHub
- **Professional Experience**: Complete timeline from 1999 to present including:
  - Foresight Tech Sourcing Inc. (Jan 2025 - Present)
  - Transaction Network Services (2000 - 2025)
- **Certifications**: All 8 current and past certifications displayed
- **Contact Section**: Direct links to LinkedIn, GitHub, email, and resume download

### Technical Features
✅ Lightning-fast performance (Astro 4.x framework)
✅ Modern dark-mode design optimized for technical audiences
✅ Fully responsive (mobile, tablet, desktop)
✅ Automated deployment via GitHub Actions
✅ SEO optimized for recruiter discoverability
✅ Zero maintenance required after initial setup

## 🚀 Quick Start

### Option 1: Deploy to GitHub Pages (Recommended)

1. **Create GitHub Repository**
   ```bash
   # Repository MUST be named: willyd61.github.io
   ```

2. **Push Your Code**
   ```bash
   cd willyd61-portfolio
   git init
   git add .
   git commit -m "Initial commit: Professional portfolio"
   git branch -M main
   git remote add origin git@github.com:willyd61/willyd61.github.io.git
   git push -u origin main
   ```

3. **Enable GitHub Pages**
   - Go to repository Settings → Pages
   - Source: GitHub Actions
   - Save

4. **Wait for Deployment**
   - GitHub Actions will automatically build and deploy
   - Your site will be live at: `https://willyd61.github.io`
   - Usually takes 2-5 minutes for first deployment

### Option 2: Test Locally First

```bash
cd willyd61-portfolio

# Install dependencies
npm install

# Run development server
npm run dev

# Open browser to http://localhost:4321
# Make any desired changes

# Build for production
npm run build

# Test production build
npm run preview
```

## 📋 What You Need to Add

### 1. Resume PDF (IMPORTANT)
Place your resume PDF in the `public/` folder:
```bash
cp /path/to/your/resume.pdf public/resume.pdf
```

The site has a "Download Resume" button that expects this file.

### 2. Optional: Profile Photo
If you want to add a photo to the hero section:
1. Add image to `public/` folder (e.g., `public/profile.jpg`)
2. Edit `src/components/Hero.astro` to include it

### 3. Optional: Detailed Case Study Pages
Currently case study links go to `#`. To add full case study pages:
1. Create markdown files in `src/content/projects/`
2. Update links in `src/components/Projects.astro`

## 🎨 Customization Guide

### Update Contact Information
Edit `src/components/Contact.astro`:
```javascript
const contactInfo = [
  {
    label: 'Email',
    value: 'spamwilly@gmail.com',  // Your current email
    // ...
  }
]
```

### Add New Projects
Edit `src/components/Projects.astro` and add to the projects array:
```javascript
{
  title: 'Your Project Title',
  subtitle: 'Date Range',
  description: 'Project description...',
  tech: ['Tech', 'Stack', 'Used'],
  metrics: [
    { label: 'Metric', value: 'Value' }
  ],
  achievements: [
    'Achievement 1',
    'Achievement 2'
  ],
  link: '#' // or GitHub URL
}
```

### Update Experience
Edit `src/components/Experience.astro` to add new roles or update existing ones.

### Modify Colors
Edit `tailwind.config.mjs` to change the color scheme if desired.

## 📊 Performance Metrics

Expected Lighthouse scores:
- **Performance**: 95-100
- **Accessibility**: 95-100
- **Best Practices**: 100
- **SEO**: 100

Page load time: <2 seconds
Total transfer size: <200KB

## 🔄 Automated Updates

The site is set up for easy maintenance:
- Push to `main` branch → Automatic deployment
- All changes go live in ~2 minutes
- No manual build/deploy steps needed

## 📝 Content Already Included

### Hero Stats
- 25+ Years Experience
- 99.999% Uptime Achievement
- 82% MTTR Reduction
- 500+ Systems Managed

### Current Experience
- **Foresight Tech Sourcing Inc.** (Jan 2025 - Present)
  - Senior Automation Engineer
  - Technical lead and architect
  - CI/CD pipeline development

- **Transaction Network Services** (2000 - 2025)
  - Technical Lead, Automation DevOps (2022-2025)
  - Sr. NMS Engineer (2015-2021) - Five 9s Achievement
  - Senior Application Architect (2000-2015)

### All Certifications Included
1. Automating Networks with Python II (Apr 2025)
2. Automating Nautobot with Python & Ansible (Dec 2024)
3. Nautobot Config Compliance & Remediation (Dec 2024)
4. Nautobot Extensibility Workshop (Dec 2024)
5. ITIL 4 Foundation (Nov 2024 - Nov 2027)
6. Collaborative Workflows with Git and GitHub (Oct 2023)
7. Network Programming and Automation (Oct 2023)
8. SolarWinds Certified Professional (Oct 2015 - Oct 2020)

## 🛠 Technologies Used

- **Framework**: Astro 4.x (blazing fast static site generator)
- **Styling**: Tailwind CSS 3.4 (utility-first CSS)
- **Deployment**: GitHub Actions + GitHub Pages (free hosting)
- **Performance**: Optimized for 100 Lighthouse score

## 📚 Documentation Files

- `DEPLOYMENT_GUIDE.md` - Detailed step-by-step deployment instructions
- `README.md` - This file (overview and quick start)
- `package.json` - Project dependencies and scripts

## 🆘 Troubleshooting

### Site not deploying?
1. Check GitHub Actions tab for error messages
2. Ensure repository name is exactly `willyd61.github.io`
3. Verify GitHub Pages is enabled in Settings

### Build failing locally?
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Images not showing?
- Ensure images are in `public/` folder
- Use `/image.jpg` paths (leading slash)
- Check file names match exactly (case-sensitive)

## 🎯 Next Steps After Deployment

1. **Add Resume PDF** to `public/resume.pdf`

2. **Share on LinkedIn**
   ```
   Excited to share my new portfolio showcasing 25+ years of SRE expertise!
   Check it out: https://willyd61.github.io
   
   Highlights:
   ✓ Five 9s uptime achievement
   ✓ DevOps transformation leadership
   ✓ Enterprise monitoring at scale
   
   #SRE #DevOps #Infrastructure
   ```

3. **Update Your LinkedIn Profile** - Add portfolio link

4. **Update Job Applications** - Include portfolio link

## 💡 Tips for Maximum Impact

1. **Keep Projects Updated**: Add new achievements quarterly
2. **Quantify Everything**: Use specific metrics and percentages
3. **Tell Stories**: Each project shows context, challenge, and solution
4. **Stay Current**: Update with new certifications as you earn them
5. **Link from LinkedIn**: Make sure your LinkedIn profile links here

## ⚡ Quick Commands Reference

```bash
npm run dev       # Start development server (http://localhost:4321)
npm run build     # Build for production
npm run preview   # Preview production build
```

---

## 🎉 What Makes This Portfolio Stand Out

1. **Five 9s Achievement Prominently Featured** - Rare and impressive metric
2. **Current Role Highlighted** - Shows you're actively employed
3. **25+ Years Experience** - Demonstrates deep expertise
4. **Comprehensive Project Details** - Real metrics and achievements
5. **Modern Tech Stack** - Shows you stay current with technology
6. **Professional Design** - Dark mode optimized for technical audience
7. **Mobile Responsive** - Works perfectly on all devices
8. **Fast Loading** - Sub-2-second load times
9. **SEO Optimized** - Recruiters can find you
10. **Zero Maintenance** - Automated deployment, no upkeep needed

---

**Built specifically for Will Lipford's SRE portfolio. Ready to deploy and impress!** 🚀

For detailed deployment instructions, see `DEPLOYMENT_GUIDE.md`.
