#!/bin/bash

# Moon Dev AI Agents - Railway Deployment Script
# 哥的 Railway 部署脚本

set -e

echo "🚀 Starting Railway Deployment..."
echo "================================="

# Check if Railway CLI is installed
if ! command -v railway &> /dev/null; then
    echo "❌ Railway CLI not found. Installing..."
    npm install -g @railway/cli
fi

# Login to Railway
echo ""
echo "📝 Logging into Railway..."
railway login

# Initialize project
echo ""
echo "🔧 Initializing Railway project..."
railway init

# Check if .env file exists
if [ ! -f .env ]; then
    echo ""
    echo "⚠️  .env file not found. Copying from .env_example..."
    cp .env_example .env
    echo ""
    echo "🔑 IMPORTANT: Edit .env file with your API keys before continuing!"
    echo "   nano .env"
    echo ""
    read -p "Press enter when you've updated .env file..."
fi

# Set environment variables from .env
echo ""
echo "🔐 Setting environment variables..."
while IFS= read -r line; do
    # Skip empty lines and comments
    if [[ -z "$line" || "$line" =~ ^# ]]; then
        continue
    fi
    
    # Extract key and value
    key=$(echo "$line" | cut -d '=' -f1)
    value=$(echo "$line" | cut -d '=' -f2-)
    
    # Skip if key or value is empty
    if [[ -z "$key" || -z "$value" || "$value" == "your_"* ]]; then
        continue
    fi
    
    echo "   Setting $key..."
    railway variables set "$key=$value" 2>/dev/null || true
done < .env

# Deploy
echo ""
echo "🚀 Deploying to Railway..."
railway up

echo ""
echo "✅ Deployment complete!"
echo ""
echo "📊 View logs: railway logs"
echo "🔄 Restart: railway restart"
echo "📈 Status: railway status"
echo "🔗 Open: railway open"
