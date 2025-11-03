#!/bin/bash

# Moon Dev AI Agents - Vercel Deployment Script
# 哥的 Vercel 部署脚本

set -e

echo "🚀 Starting Vercel Deployment..."
echo "================================="

# Check if Vercel CLI is installed
if ! command -v vercel &> /dev/null; then
    echo "❌ Vercel CLI not found. Installing..."
    npm install -g vercel
fi

# Check if frontend directory exists
if [ ! -d "frontend" ]; then
    echo "❌ Frontend directory not found!"
    exit 1
fi

# Navigate to frontend directory
cd frontend

echo ""
echo "📦 Installing dependencies..."
npm install

# Build the project
echo ""
echo "🔨 Building frontend..."
npm run build

# Deploy to Vercel
echo ""
echo "🚀 Deploying to Vercel..."
vercel --prod

echo ""
echo "✅ Frontend deployment complete!"
echo ""
echo "🔗 Your dashboard is now live!"
echo "   Check the URL printed above."
