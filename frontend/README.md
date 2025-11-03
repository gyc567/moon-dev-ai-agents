# Moon Dev AI Trading Dashboard

A modern web dashboard for visualizing Moon Dev's AI trading system performance.

## Features

- 📊 Strategy Performance Tracking
- 🤖 AI Agent Status Monitoring
- 📈 Backtest Charts Visualization
- ⚡ Strategy Management

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

### Vercel Deployment

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy to Vercel
vercel

# Follow the prompts and your site will be deployed!
```

## Project Structure

```
frontend/
├── app/                    # Next.js app directory
│   ├── page.tsx           # Homepage
│   ├── charts/            # Charts page
│   ├── agents/            # Agents page
│   └── strategies/        # Strategies page
├── components/            # Reusable components
├── public/                # Static assets
└── package.json
```

## Usage

This dashboard is designed to display:

1. **Strategy Performance** - Track returns, win rates, and risk metrics
2. **Agent Status** - Monitor 48+ AI agents in real-time
3. **Charts** - View backtesting results and visualizations
4. **Strategies** - Browse and manage trading strategies

## Technologies Used

- Next.js 14
- React 18
- TypeScript
- Recharts (for data visualization)
- Vercel (for deployment)
