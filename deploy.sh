#!/bin/bash
# TOP DESIGN - Direct Vercel Deployment
# Run this script to deploy immediately

echo ""
echo "╔════════════════════════════════════════════════════════════╗"
echo "║         TOP DESIGN - Vercel Deployment                     ║"
echo "╚════════════════════════════════════════════════════════════╝"
echo ""

# Check Node.js
if ! command -v node &> /dev/null; then
    echo "❌ Node.js not found. Please install Node.js 18+ first."
    echo "   Visit: https://nodejs.org"
    exit 1
fi

# Check Vercel CLI
if ! command -v vercel &> /dev/null; then
    echo "📦 Installing Vercel CLI..."
    npm install -g vercel
fi

# Login check
if ! vercel whoami &> /dev/null; then
    echo ""
    echo "🔐 Please login to Vercel..."
    vercel login
fi

echo ""
echo "🚀 Deploying TOP DESIGN to Vercel..."
echo ""

# Deploy with production flag
vercel --prod

echo ""
echo "✅ Deployment initiated!"
echo ""
echo "📋 Next Steps:"
echo "   1. Visit your Vercel dashboard to see the deployment"
echo "   2. Add custom domain: www.topdesign.co.in"
echo "   3. Configure DNS at your domain registrar"
echo ""
echo "📞 Contact: +91 92660 41927 | info@topdesign.co.in"
echo ""
