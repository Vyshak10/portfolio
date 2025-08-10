#!/bin/bash

# Vyshak Krishna Portfolio - Quick Setup Script
echo "🚀 Setting up your professional Next.js portfolio..."

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 18+ first."
    echo "Visit: https://nodejs.org/en/download/"
    exit 1
fi

# Check Node.js version
NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
    echo "❌ Node.js version 18 or higher is required. Current version: $(node -v)"
    exit 1
fi

echo "✅ Node.js $(node -v) detected"

# Install dependencies
echo "📦 Installing dependencies..."
if command -v yarn &> /dev/null; then
    yarn install
elif command -v pnpm &> /dev/null; then
    pnpm install
else
    npm install
fi

# Check if installation was successful
if [ $? -eq 0 ]; then
    echo "✅ Dependencies installed successfully!"
else
    echo "❌ Failed to install dependencies"
    exit 1
fi

# Start development server
echo "🔥 Starting development server..."
echo ""
echo "Your portfolio will be available at: http://localhost:3000"
echo ""
echo "📝 Next steps after setup:"
echo "   1. Customize your personal information in components"
echo "   2. Add your projects and update project links"
echo "   3. Update contact information"
echo "   4. Deploy to Vercel with: npm run build"
echo ""
echo "🎉 Happy coding! Your professional portfolio is ready!"
echo ""

# Start the development server
if command -v yarn &> /dev/null; then
    yarn dev
elif command -v pnpm &> /dev/null; then
    pnpm dev
else
    npm run dev
fi