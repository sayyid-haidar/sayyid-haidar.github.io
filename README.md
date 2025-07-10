# Sayyid Haidar - Personal Portfolio

A modern, minimalist personal portfolio website showcasing my journey as a Senior Full Stack Developer. Built with React, TypeScript, and Tailwind CSS for optimal performance and maintainability.

## 🚀 Features

- **Minimalist Design**: Clean and professional layout focusing on content and user experience
- **Fully Responsive**: Optimized for all devices from mobile to desktop
- **Lightning Fast**: Built with Vite for sub-second loading times
- **Static Generation**: Deployable as static files anywhere
- **SEO Optimized**: Complete meta tags and social media optimization
- **Accessibility First**: Built with WCAG guidelines in mind
- **Modern Architecture**: Component-based structure for easy maintenance

## 🛠️ Tech Stack

- **Frontend**: React 18 with TypeScript for type safety
- **Styling**: Tailwind CSS 3.4 with custom components
- **Build Tool**: Vite for fast development and optimized builds
- **Icons**: Lucide React for consistent iconography
- **Fonts**: Inter from Google Fonts for beautiful typography

## � Sections

1. **Hero Section** - Introduction with professional photo and key information
2. **About Section** - Personal background and core technologies
3. **Experience Section** - Professional journey and achievements
4. **Skills Section** - Technical expertise organized by categories
5. **Projects Section** - Featured work with live demos and source code
6. **Contact Section** - Multiple ways to get in touch

## �🚀 Getting Started

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
