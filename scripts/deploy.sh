#!/bin/bash

# GitHub Pages Deployment Script
# This script builds and deploys the portfolio to GitHub Pages

set -e  # Exit on any error

echo "🚀 Starting GitHub Pages deployment..."

# Check if we're in a git repository
if [ ! -d ".git" ]; then
    echo "❌ Error: Not in a git repository"
    exit 1
fi

# Check if we're on main branch
CURRENT_BRANCH=$(git branch --show-current)
if [ "$CURRENT_BRANCH" != "main" ]; then
    echo "⚠️  Warning: Not on main branch (current: $CURRENT_BRANCH)"
    read -p "Continue anyway? (y/N): " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        exit 1
    fi
fi

# Clean install dependencies
echo "📦 Installing dependencies..."
npm ci

# Run linting
echo "🔍 Running linter..."
npm run lint

# Build the project
echo "🏗️  Building project..."
npm run build

# Check if build was successful
if [ ! -d "dist" ]; then
    echo "❌ Build failed - dist directory not found"
    exit 1
fi

echo "✅ Build completed successfully!"
echo "📁 Build output in ./dist directory"

# Commit and push if there are changes
if [ -n "$(git status --porcelain)" ]; then
    echo "📝 Committing changes..."
    git add .
    git commit -m "Deploy: $(date '+%Y-%m-%d %H:%M:%S')"
    git push origin main
    
    echo "🚀 Pushed to main branch - GitHub Actions will handle deployment"
else
    echo "ℹ️  No changes to commit"
    echo "🚀 Triggering manual deployment via GitHub Actions..."
fi

echo "✨ Deployment process completed!"
echo "🔗 Your site will be available at: https://sayyid-haidar.github.io/v2.sayyid.dev/"
echo "📊 Monitor deployment: https://github.com/sayyid-haidar/v2.sayyid.dev/actions"
