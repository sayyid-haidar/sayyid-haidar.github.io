# Sayyid Haidar - Portfolio Website

[![Deploy to GitHub Pages](https://github.com/sayyid-haidar/sayyid.github.io/actions/workflows/deploy.yml/badge.svg)](https://github.com/sayyid-haidar/sayyid.github.io/actions/workflows/deploy.yml)

Modern, responsive portfolio website showcasing backend engineering expertise, DevOps capabilities, system design skills, and AI vision computing projects.

🔗 **Live Site**: [https://sayyid.github.io/](https://sayyid.github.io/)

## 👨‍💻 About This Portfolio

This is the personal portfolio of **Sayyid Haidar**, a backend engineer specializing in:

- **Backend Development** with Java Spring, Node.js, and microservices architecture
- **DevOps & Infrastructure** with containerization and CI/CD pipelines  
- **System Design** for scalable applications
- **AI Vision Computing** with YOLO models and computer vision projects

## ✨ Key Features

- 🎨 **Clean, Professional Design** - Minimalist layout focused on content
- 📱 **Fully Responsive** - Optimized for desktop, tablet, and mobile
- ⚡ **High Performance** - Fast loading with optimized bundle (~60KB gzipped)
- 🔍 **SEO Optimized** - Structured data and meta tags for search engines
- 📊 **JSON-Driven Content** - Easy maintenance without touching React code
- 🚀 **Auto Deployment** - GitHub Actions for seamless updates
- ♿ **Accessible Design** - Following WCAG guidelines

## 🛠️ Technology Stack

### Frontend
- **React 18** with TypeScript for type-safe development
- **Vite** as the build tool for fast development and optimized builds
- **Tailwind CSS** for utility-first styling and responsive design
- **Lucide React** for consistent iconography

### Content Management
- **JSON-based data structure** for easy content updates
- **TypeScript interfaces** for data validation
- **Centralized configuration** for employment types and styling

### Deployment & DevOps
- **GitHub Pages** hosting with custom domain support
- **GitHub Actions** for automated CI/CD pipeline
- **Automated deployment** on every push to main branch
- **Build optimization** with asset compression and tree-shaking

### Performance & SEO
- **Bundle size optimization** (~19KB CSS, ~185KB JS gzipped)
- **Code splitting** with vendor and icon chunks
- **SEO meta tags** with structured data
- **Responsive images** and lazy loading

## 📁 Project Structure

```bash
src/
├── components/           # React components
├── data/                # JSON content files
│   ├── hero.json        # Hero section data
│   ├── profile.json     # Profile data (stats, contact, nav)
│   ├── what-i-do.json   # Skills & services data
│   └── experiences.json # Work experience & employment config
├── App.tsx              # Main application component
└── main.tsx             # Application entry point

public/
├── assets/              # Static assets
│   ├── sayyid-haidar-profile.jpg    # Profile photo
│   └── Sayyid-Haidar-Resume.pdf     # Resume/CV file
└── index.html           # HTML template with SEO meta tags
```

## 📊 JSON-Driven Content Management

This portfolio uses a **data-driven architecture** where all content is stored in JSON files, making it easy to maintain without touching React code.

### Core Data Files

| File | Purpose | Contains |
|------|---------|----------|
| `hero.json` | Hero section | Name, title, description, current status |
| `profile.json` | Profile data | Stats, social links, contact info, navigation |
| `what-i-do.json` | Skills/Services | Technical expertise with descriptions and technologies |
| `experiences.json` | Work history | Professional timeline + employment type configuration |

### Key Benefits

- ✅ **Easy Updates**: Modify content without touching React code
- ✅ **Maintainable**: Centralized data management
- ✅ **Scalable**: Easy to add new sections or modify existing ones
- ✅ **Type-safe**: JSON structure validated by TypeScript

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**:

```bash
git clone https://github.com/sayyid-haidar/sayyid.github.io.git
cd sayyid.github.io
```

2. **Install dependencies**:

```bash
npm install
```

3. **Start development server**:

```bash
npm run dev
```

4. **Open in browser**: Visit `http://localhost:5173`

### Build & Deployment

```bash
# Build for production
npm run build

# Preview production build
npm run preview

# Deploy (automatic via GitHub Actions)
git push origin main
```

## 🚀 Deployment & Hosting

This portfolio is hosted on **GitHub Pages** using the repository name `sayyid.github.io` for automatic custom domain setup.

### GitHub Pages Configuration

- **Repository**: `sayyid-haidar/sayyid.github.io`
- **Live URL**: [https://sayyid.github.io/](https://sayyid.github.io/)
- **Auto-deploy**: Triggered on every push to `main` branch
- **Build**: GitHub Actions handles build and deployment automatically

### Deployment Process

1. **Push to main branch**: Any commit triggers deployment
2. **GitHub Actions**: Runs build process with Vite
3. **Deploy**: Built files published to GitHub Pages
4. **Live**: Changes appear on the live site within minutes

### Manual Deployment

```bash
# Build for production
npm run build

# Preview build locally
npm run preview

# Deploy via scripts
./deploy.sh
```

## 📞 Contact

- **Email**: [sayyid.abdul.aziz.haidar@gmail.com](mailto:sayyid.abdul.aziz.haidar@gmail.com)
- **LinkedIn**: [sayyid-abdul-aziz-haidar](https://www.linkedin.com/in/sayyid-abdul-aziz-haidar-3a9230146/)
- **GitHub**: [sayyid-haidar](https://github.com/sayyid-haidar)

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

**Built with ❤️ by Sayyid Haidar** | Backend Engineer specializing in AI Vision Computing
