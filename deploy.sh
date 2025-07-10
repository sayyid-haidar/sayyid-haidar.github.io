#!/bin/bash

# Production deployment script for Sayyid Haidar's Portfolio
# This script builds the project and prepares it for deployment

echo "🚀 Starting production build..."

# Clean previous build
echo "🧹 Cleaning previous build..."
rm -rf dist/

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Run linting
echo "🔍 Running linter..."
npm run lint

# Build for production
echo "🏗️  Building for production..."
npm run build

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    echo "📁 Files ready in dist/ directory"
    echo "📊 Build stats:"
    du -sh dist/
    echo ""
    echo "🚀 Ready for deployment!"
    echo "📋 You can now:"
    echo "   • Upload dist/ folder to your hosting service"
    echo "   • Run 'npm run preview' to test locally"
    echo "   • Deploy to Vercel with 'vercel --prod'"
else
    echo "❌ Build failed!"
    exit 1
fi
