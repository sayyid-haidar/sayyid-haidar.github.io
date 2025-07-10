# Deployment Guide

## GitHub Pages Deployment

This project is configured to automatically deploy to GitHub Pages using GitHub Actions.

### Setup Instructions

1. **Enable GitHub Pages**
   - Go to repository Settings > Pages
   - Source: Deploy from a branch > GitHub Actions
   - Save the settings

2. **Push to Main Branch**
   ```bash
   git add .
   git commit -m "Setup GitHub Actions deployment"
   git push origin main
   ```

3. **Monitor Deployment**
   - Go to Actions tab in your repository
   - Watch the "Deploy to GitHub Pages" workflow
   - Once completed, your site will be available at: `https://yourusername.github.io/v2.sayyid.dev/`

### Configuration Files

- **`.github/workflows/deploy.yml`**: GitHub Actions workflow for automatic deployment
- **`vite.config.ts`**: Configured with proper base path for GitHub Pages
- **`public/.nojekyll`**: Prevents Jekyll processing on GitHub Pages

### Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Manual Deployment (Alternative)

If you prefer manual deployment:

```bash
# Install gh-pages
npm install --save-dev gh-pages

# Deploy manually
npm run deploy
```

### Domain Configuration

To use a custom domain:

1. Add a `CNAME` file to the `public` directory with your domain name
2. Configure DNS settings in your domain provider
3. Update the `base` path in `vite.config.ts` if needed

### Troubleshooting

- **404 on page refresh**: This is normal for SPAs on GitHub Pages. The site works with client-side routing.
- **Assets not loading**: Check the base path configuration in `vite.config.ts`
- **Build fails**: Check the Actions tab for detailed error logs

### Environment Variables

For production builds, the following environment variables are automatically set:
- `NODE_ENV=production`
- Base path is automatically configured based on repository name

### Performance Optimizations

The build includes:
- Code splitting for vendor libraries and icons
- Minification with Terser
- Asset optimization
- Preloading of critical resources
