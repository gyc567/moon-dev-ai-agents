'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

interface Strategy {
  name: string
  type: string
  status: string
  performance: string
  winRate: string
}

export default function StrategiesPage() {
  const [strategies, setStrategies] = useState<Strategy[]>([])

  useEffect(() => {
    const mockStrategies: Strategy[] = [
      {
        name: 'ATR Mean Reversion',
        type: 'Mean Reversion',
        status: 'Active',
        performance: '+127.77%',
        winRate: '68.5%'
      },
      {
        name: 'RSI Divergence',
        type: 'Momentum',
        status: 'Active',
        performance: '+156.43%',
        winRate: '71.2%'
      },
      {
        name: 'MACD Crossover',
        type: 'Trend Following',
        status: 'Active',
        performance: '+89.32%',
        winRate: '62.4%'
      },
      {
        name: 'Bollinger Bands',
        type: 'Mean Reversion',
        status: 'Inactive',
        performance: '+98.65%',
        winRate: '65.8%'
      },
      {
        name: 'Dynamic Validation',
        type: 'Breakout',
        status: 'Active',
        performance: '+143.21%',
        winRate: '69.3%'
      },
      {
        name: 'Hierarchical Breakout',
        type: 'Breakout',
        status: 'Active',
        performance: '+112.54%',
        winRate: '67.1%'
      }
    ]
    setStrategies(mockStrategies)
  }, [])

  return (
    <div style={{ padding: '2rem', fontFamily: 'monospace' }}>
      <div style={{ marginBottom: '2rem' }}>
        <Link href="/" style={{ color: '#00ff88', marginBottom: '1rem', display: 'inline-block' }}>
          ← Back to Dashboard
        </Link>
      </div>

      <h1 style={{ fontSize: '2.5rem', marginBottom: '2rem', color: '#00ff88' }}>
        ⚡ Trading Strategies
      </h1>

      <div style={{ marginBottom: '2rem', padding: '1.5rem', backgroundColor: '#1a1a1a', borderRadius: '8px' }}>
        <h2 style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>Filter & Sort</h2>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <select style={{
            padding: '0.5rem 1rem',
            backgroundColor: '#2a2a2a',
            color: '#fff',
            border: '1px solid #444',
            borderRadius: '4px'
          }}>
            <option>All Types</option>
            <option>Mean Reversion</option>
            <option>Momentum</option>
            <option>Trend Following</option>
            <option>Breakout</option>
          </select>
          <select style={{
            padding: '0.5rem 1rem',
            backgroundColor: '#2a2a2a',
            color: '#fff',
            border: '1px solid #444',
            borderRadius: '4px'
          }}>
            <option>All Status</option>
            <option>Active</option>
            <option>Inactive</option>
          </select>
        </div>
      </div>

      <div style={{ overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ backgroundColor: '#1a1a1a' }}>
              <th style={{ padding: '12px', textAlign: 'left', borderBottom: '2px solid #00ff88' }}>Strategy Name</th>
              <th style={{ padding: '12px', textAlign: 'left', borderBottom: '2px solid #00ff88' }}>Type</th>
              <th style={{ padding: '12px', textAlign: 'center', borderBottom: '2px solid #00ff88' }}>Status</th>
              <th style={{ padding: '12px', textAlign: 'right', borderBottom: '2px solid #00ff88' }}>Performance</th>
              <th style={{ padding: '12px', textAlign: 'right', borderBottom: '2px solid #00ff88' }}>Win Rate</th>
              <th style={{ padding: '12px', textAlign: 'center', borderBottom: '2px solid #00ff88' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {strategies.map((strategy, idx) => (
              <tr key={idx} style={{ borderBottom: '1px solid #333' }}>
                <td style={{ padding: '12px', fontWeight: 'bold' }}>{strategy.name}</td>
                <td style={{ padding: '12px' }}>{strategy.type}</td>
                <td style={{ padding: '12px', textAlign: 'center' }}>
                  <span style={{
                    padding: '0.25rem 0.75rem',
                    backgroundColor: strategy.status === 'Active' ? '#00ff88' : '#666',
                    color: '#000',
                    borderRadius: '4px',
                    fontSize: '0.85rem',
                    fontWeight: 'bold'
                  }}>
                    {strategy.status}
                  </span>
                </td>
                <td style={{ padding: '12px', textAlign: 'right', color: '#00ff88', fontWeight: 'bold' }}>
                  {strategy.performance}
                </td>
                <td style={{ padding: '12px', textAlign: 'right' }}>{strategy.winRate}</td>
                <td style={{ padding: '12px', textAlign: 'center' }}>
                  <button style={{
                    padding: '0.5rem 1rem',
                    backgroundColor: '#2a2a2a',
                    color: '#00ff88',
                    border: '1px solid #00ff88',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    fontSize: '0.85rem'
                  }}>
                    View Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
