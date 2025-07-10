# Development Guide

## 🛠️ Development Setup

### Prerequisites
- Node.js (v20 or higher)
- npm or yarn package manager
- Git for version control

### Quick Start
```bash
# Clone the repository
git clone https://github.com/sayyidhaidar/v2.sayyid.dev.git
cd v2.sayyid.dev

# Install dependencies
npm install

# Start development server
npm run dev
```

### Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality
- `./deploy.sh` - Automated production build and deployment prep

## 📁 Project Structure

```
├── public/                 # Static assets
│   ├── assets/            # Images, CV, documents
│   └── index.html         # HTML template
├── src/
│   ├── components/        # React components
│   │   ├── ScrollToTop.tsx
│   │   ├── ScrollUtils.ts
│   │   └── SkillsSection.tsx
│   ├── App.tsx           # Main application
│   ├── main.tsx          # Entry point
│   └── index.css         # Global styles
├── .env.example          # Environment variables template
├── deploy.sh             # Deployment script
├── tailwind.config.js    # Tailwind CSS configuration
├── postcss.config.js     # PostCSS configuration
├── vite.config.ts        # Vite configuration
└── package.json          # Dependencies and scripts
```

## 🎨 Customization

### Personal Information
Update the following in `src/App.tsx`:
- Name and title
- Profile description
- Contact information
- Social media links
- Profile images
- Skills and technologies

### Styling
- **Colors**: Modify `tailwind.config.js` for custom color palette
- **Fonts**: Update Google Fonts import in `src/index.css`
- **Layout**: Adjust spacing and sizing in Tailwind classes
- **Components**: Create new components in `src/components/`

### Assets
Replace files in `public/assets/`:
- `0007.jpg` - Main profile image
- `0006.jpg`, `0008.jpg` - Additional photos
- `cv.pdf` - Your resume/CV

### Environment Variables
Copy `.env.example` to `.env` and update:
```bash
cp .env.example .env
```

## 📱 Responsive Design

The design is fully responsive with breakpoints:
- **Mobile**: < 640px
- **Tablet**: 640px - 768px
- **Desktop**: > 768px

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel --prod
```

### Netlify
1. Build: `npm run build`
2. Upload `dist/` folder to Netlify

### Manual Deployment
```bash
./deploy.sh
# Upload dist/ folder to your hosting service
```

## 🔧 Development Tips

### VS Code Extensions
Recommended extensions:
- ES7+ React/Redux/React-Native snippets
- Tailwind CSS IntelliSense
- TypeScript Importer
- Prettier - Code formatter
- ESLint

### Hot Reload
Changes to files will automatically reload the browser in development mode.

### Code Quality
- ESLint is configured for TypeScript and React
- Prettier formatting is recommended
- Use TypeScript for type safety

## 🐛 Troubleshooting

### Common Issues

1. **Port already in use**
   ```bash
   # Kill processes on port 3000
   lsof -ti:3000 | xargs kill -9
   ```

2. **Node version mismatch**
   ```bash
   # Use Node Version Manager (nvm)
   nvm use 20
   ```

3. **Dependencies issues**
   ```bash
   # Clear cache and reinstall
   rm -rf node_modules package-lock.json
   npm install
   ```

4. **Build fails**
   ```bash
   # Check TypeScript errors
   npx tsc --noEmit
   ```

### Performance Optimization

- Images are optimized and properly sized
- Code splitting is handled by Vite
- CSS is purged in production
- Bundle analysis: `npm run build -- --analyze`

## 📞 Support

If you encounter issues:
1. Check this documentation
2. Search existing GitHub issues
3. Create a new issue with detailed description
4. Contact: contact@sayyid.dev

## 📝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

---

Happy coding! 🚀
