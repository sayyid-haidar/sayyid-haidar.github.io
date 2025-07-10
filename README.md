# Sayyid Haidar - Portfolio

[![Deploy to GitHub Pages](https://github.com/sayyid-haidar/v2.sayyid.dev/actions/workflows/deploy.yml/badge.svg)](https://github.com/sayyid-haidar/v2.sayyid.dev/actions/workflows/deploy.yml)

Modern, responsive portfolio website for Sayyid Haidar - Backend Engineer specializing in AI Vision Computing.

🔗 **Live Site**: [https://sayyid-haidar.github.io/v2.sayyid.dev/](https://sayyid-haidar.github.io/v2.sayyid.dev/)

## 🚀 Features

- 🎨 Modern, clean design with professional layout
- 📱 Fully responsive across all devices
- ⚡ Fast loading with optimized assets
- 🔍 SEO optimized with structured data
- �️ **JSON-driven content** - Easy to maintain and update
- �🚀 Automatic deployment via GitHub Actions
- ♿ Accessible design following best practices

## 🛠️ Tech Stack

- **Frontend**: React 19, TypeScript
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **Deployment**: GitHub Pages via GitHub Actions
- **Icons**: Lucide React
- **Content Management**: JSON-based data structure

## 📁 Project Structure

```
src/
├── components/           # React components
├── data/                # JSON content files
│   ├── hero.json        # Hero section data
│   ├── profile.json     # Profile data (stats, contact, nav)
│   ├── what-i-do.json   # Skills & services data
│   ├── experiences.json # Work experience data
│   └── employment-config.json # Employment types & styling
├── App.tsx              # Main application component
└── main.tsx             # Application entry point
```

## 📊 Data Structure

This project uses **JSON-driven content management** for easy maintenance:

### Core Data Files

| File | Purpose | Contains |
|------|---------|----------|
| `hero.json` | Hero section | Name, title, description, current position, profile image |
| `profile.json` | Profile data | Stats, social links, contact info, navigation menu |
| `what-i-do.json` | Skills/Services | Technical expertise with descriptions and technologies |
| `experiences.json` | Work history | Professional experience timeline |
| `employment-config.json` | Styling config | Employment types with colors and border styles |

### Key Benefits

- ✅ **Easy Updates**: Modify content without touching React code
- ✅ **Maintainable**: Centralized data management
- ✅ **Scalable**: Easy to add new sections or modify existing ones
- ✅ **Type-safe**: JSON structure validated by TypeScript

## 📝 Content Management

### Quick Updates

1. **Personal Info**: Edit `hero.json` and `profile.json`
2. **Skills/Services**: Edit `what-i-do.json` 
3. **Work History**: Edit `experiences.json`
4. **Contact Details**: Edit `profile.json` → `contact` section
5. **Statistics**: Edit `profile.json` → `stats` array
6. **Social Links**: Edit `profile.json` → `socialLinks` array

### Example: Adding New Experience

```json
{
  "id": "new-job",
  "title": "New Position Title",
  "company": "Company Name",
  "location": "City, Country",
  "startDate": "Jan 2025",
  "endDate": "Present",
  "type": "Full-time",
  "description": "Your role description here...",
  "borderStyle": "current"
}
```

### Example: Adding New Skill

```json
{
  "id": "new-skill",
  "icon": "NS",
  "title": "New Skill Area",
  "description": "Description of your expertise...",
  "technologies": ["Tech1", "Tech2", "Tech3"]
}
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**:
```bash
git clone https://github.com/sayyidhaidar/v2.sayyid.dev.git
cd v2.sayyid.dev
```

2. **Install dependencies**:
```bash
npm install
```

3. **Start development server**:
```bash
npm run dev
```

4. **Open in browser**: Visit `http://localhost:3001`

### Build & Deployment

```bash
# Build for production
npm run build

# Preview production build
npm run preview

# Deploy (automatic via GitHub Actions)
git push origin main
```

## 🎨 Customization

### Styling

- **Colors**: Modify Tailwind classes in components
- **Typography**: Update font classes and sizes
- **Layout**: Adjust container widths in `src/index.css`

### Employment Types & Colors

Edit `employment-config.json` to customize:

```json
{
  "employmentTypes": {
    "Custom-Type": {
      "label": "Custom Type",
      "color": "text-custom-color"
    }
  },
  "borderColors": {
    "priority": "border-custom-color"
  }
}
```

## 📱 Sections Overview

1. **Hero Section** - Professional introduction with stats and CTA
2. **What I Do** - Three main expertise areas with technologies
3. **Experience** - Professional timeline with employment types
4. **Contact** - Multiple contact methods and social links

## 🔧 Configuration

### Environment Setup

No environment variables required for basic functionality.

### Asset Management

- **Resume**: Place in `/public/assets/` and update `profile.json`
- **Images**: Store in `/public/assets/` and reference in JSON files
- **Icons**: Using Lucide React icon library

## 📈 Performance

- ⚡ Vite for fast builds and HMR
- 🗜️ Optimized asset bundling
- 📱 Responsive images with lazy loading
- 🎯 Minimal bundle size with tree shaking

## 🚢 Deployment

Automatic deployment via GitHub Actions to GitHub Pages:

1. Push to `main` branch
2. GitHub Actions builds the project
3. Deploys to GitHub Pages automatically
4. Available at your GitHub Pages URL

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Contact

**Sayyid Haidar**
- 📧 Email: sayyid.abdul.aziz.haidar@gmail.com
- 💼 LinkedIn: [sayyid-abdul-aziz-haidar](https://www.linkedin.com/in/sayyid-abdul-aziz-haidar-3a9230146/)
- 🐙 GitHub: [sayyid-haidar](https://github.com/sayyid-haidar)

---

*Built with ❤️ using React, TypeScript, and Tailwind CSS*
```bash
npm install
```

3. **Start development server**:
```bash
npm run dev
```

4. **Open in browser**: Navigate to [http://localhost:3000](http://localhost:3000)

## 📦 Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build optimized production bundle
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality
- `./deploy.sh` - Automated build and deployment preparation

## 🏗️ Project Structure

```
src/
├── components/           # Reusable React components
│   ├── ExperienceSection.tsx    # Professional experience
│   ├── ProjectsSection.tsx      # Featured projects
│   ├── SkillsSection.tsx        # Technical skills
│   ├── ScrollToTop.tsx          # Scroll to top functionality
│   └── ScrollUtils.ts           # Scroll utilities
├── App.tsx              # Main application component
├── main.tsx             # Application entry point
└── index.css            # Global styles and Tailwind imports

public/
├── assets/              # Static assets
│   ├── cv.pdf          # Resume/CV file
│   └── *.jpg           # Profile photos
└── index.html           # HTML template with SEO meta tags
```

## 🎨 Customization

### Personal Information

Update content in relevant components:
- **Contact details**: Update email and social links in `App.tsx`
- **Experience**: Modify `ExperienceSection.tsx` with your background
- **Projects**: Update `ProjectsSection.tsx` with your work
- **Skills**: Customize `SkillsSection.tsx` with your expertise

### Styling

- **Colors**: Modify `tailwind.config.js` for custom color palette
- **Typography**: Update Google Fonts import in `index.css`
- **Layout**: Adjust component styles using Tailwind classes
- **Animations**: Customize keyframes in `index.css`

### Assets

Replace files in `public/assets/`:
- **CV/Resume**: Replace `cv.pdf` with your resume
- **Photos**: Update profile images (optimized for web)
- **Favicon**: Update with your preferred icon

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel --prod
```

### Netlify
1. Build: `npm run build`
2. Upload `dist/` folder or connect via Git

### GitHub Pages
Use GitHub Actions workflow for automated deployment

### Traditional Hosting
```bash
./deploy.sh
# Upload dist/ folder to your hosting provider
```

## ⚡ Performance

- **Bundle Size**: ~60KB gzipped for optimal loading
- **Lighthouse Score**: 100/100 across all metrics
- **Core Web Vitals**: Optimized for excellent user experience
- **Code Splitting**: Automatic vendor and icon chunking

## 🧪 Development

### Code Quality
- ESLint configured for TypeScript and React
- Prettier recommended for consistent formatting
- Strict TypeScript configuration for type safety

### Hot Reload
All changes automatically refresh in development mode

### Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📞 Contact

- **Email**: [contact@sayyid.dev](mailto:contact@sayyid.dev)
- **LinkedIn**: [linkedin.com/in/sayyid-haidar](https://www.linkedin.com/in/sayyid-haidar/)
- **GitHub**: [github.com/sayyidhaidar](https://github.com/sayyidhaidar)
- **Website**: [sayyid.dev](https://sayyid.dev)

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

**Built with ❤️ by Sayyid Haidar** | Senior Full Stack Developer
