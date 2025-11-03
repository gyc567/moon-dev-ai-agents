#!/bin/bash

# Moon Dev AI Agents - Full Stack Deployment
# 哥的完整部署脚本 (Railway + Vercel)

set -e

echo "🚀 Full Stack Deployment"
echo "========================"
echo ""
echo "This will deploy:"
echo "  1. Python backend to Railway"
echo "  2. Frontend dashboard to Vercel"
echo ""

read -p "Continue? (y/n) " -n 1 -r
echo
if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    echo "Deployment cancelled."
    exit 0
fi

echo ""
echo "========================================="
echo "STEP 1: Deploy Backend to Railway"
echo "========================================="
bash deploy-railway.sh

echo ""
echo "========================================="
echo "STEP 2: Deploy Frontend to Vercel"
echo "========================================="
bash deploy-vercel.sh

echo ""
echo "✅ All deployments complete!"
echo ""
echo "🎉 Your AI trading system is now live!"
echo "   Backend: Check Railway dashboard"
echo "   Frontend: Check Vercel URL above"
echo ""
