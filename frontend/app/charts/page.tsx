'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

interface ChartItem {
  name: string
  strategy: string
  date: string
  path: string
}

export default function ChartsPage() {
  const [charts, setCharts] = useState<ChartItem[]>([])

  useEffect(() => {
    const mockCharts: ChartItem[] = [
      {
        name: 'ATR Mean Reversion',
        strategy: 'ATRMeanReversion',
        date: '2025-02-04',
        path: '/charts/ATRMeanReversion'
      },
      {
        name: 'RSI Divergence',
        strategy: 'RSIDivergence',
        date: '2025-02-04',
        path: '/charts/RSIDivergence'
      },
      {
        name: 'MACD Crossover',
        strategy: 'MACDCrossover',
        date: '2025-02-04',
        path: '/charts/MACDCrossover'
      },
      {
        name: 'Bollinger Bands',
        strategy: 'BollingerBands',
        date: '2025-02-04',
        path: '/charts/BollingerBands'
      }
    ]
    setCharts(mockCharts)
  }, [])

  return (
    <div style={{ padding: '2rem', fontFamily: 'monospace' }}>
      <div style={{ marginBottom: '2rem' }}>
        <Link href="/" style={{ color: '#00ff88', marginBottom: '1rem', display: 'inline-block' }}>
          ← Back to Dashboard
        </Link>
      </div>

      <h1 style={{ fontSize: '2.5rem', marginBottom: '2rem', color: '#00ff88' }}>
        📈 Backtest Charts
      </h1>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
        {charts.map((chart, idx) => (
          <div key={idx} style={{ 
            padding: '1.5rem', 
            backgroundColor: '#1a1a1a', 
            border: '2px solid #333',
            borderRadius: '8px',
            transition: 'all 0.3s'
          }}>
            <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>📊</div>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>{chart.name}</h3>
            <p style={{ fontSize: '0.9rem', color: '#888', marginBottom: '1rem' }}>
              Strategy: {chart.strategy}
            </p>
            <p style={{ fontSize: '0.9rem', color: '#888', marginBottom: '1rem' }}>
              Date: {chart.date}
            </p>
            <button style={{ 
              width: '100%',
              padding: '0.75rem',
              backgroundColor: '#00ff88',
              color: '#000',
              border: 'none',
              borderRadius: '4px',
              fontWeight: 'bold',
              cursor: 'pointer'
            }}>
              View Chart
            </button>
          </div>
        ))}
      </div>

      <div style={{ marginTop: '3rem', padding: '1.5rem', backgroundColor: '#1a1a1a', borderRadius: '8px' }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>ℹ️ Note</h2>
        <p style={{ color: '#888' }}>
          Charts are generated from backtesting results. To view detailed performance metrics,
          check the strategy stats files in the data directory.
        </p>
      </div>
    </div>
  )
}
