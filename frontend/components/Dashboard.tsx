'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

interface Strategy {
  name: string
  return: string
  trades: number
  winRate: string
  drawdown: string
  sharpe: string
}

export default function Dashboard() {
  const [strategies, setStrategies] = useState<Strategy[]>([])

  useEffect(() => {
    const mockData: Strategy[] = [
      {
        name: 'ATR Mean Reversion',
        return: '127.77%',
        trades: 245,
        winRate: '68.5%',
        drawdown: '-12.3%',
        sharpe: '1.85'
      },
      {
        name: 'MACD Crossover',
        return: '89.32%',
        trades: 178,
        winRate: '62.4%',
        drawdown: '-15.7%',
        sharpe: '1.42'
      },
      {
        name: 'RSI Divergence',
        return: '156.43%',
        trades: 312,
        winRate: '71.2%',
        drawdown: '-9.8%',
        sharpe: '2.14'
      },
      {
        name: 'Bollinger Bands',
        return: '98.65%',
        trades: 203,
        winRate: '65.8%',
        drawdown: '-11.2%',
        sharpe: '1.63'
      }
    ]
    setStrategies(mockData)
  }, [])

  return (
    <div style={{ padding: '2rem', fontFamily: 'monospace' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '2rem', color: '#00ff88' }}>
        🌙 Monnaire AI Trading Dashboard
      </h1>

      <div style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>📊 Strategy Performance</h2>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ backgroundColor: '#1a1a1a' }}>
                <th style={{ padding: '12px', textAlign: 'left', borderBottom: '2px solid #00ff88' }}>Strategy</th>
                <th style={{ padding: '12px', textAlign: 'right', borderBottom: '2px solid #00ff88' }}>Return</th>
                <th style={{ padding: '12px', textAlign: 'right', borderBottom: '2px solid #00ff88' }}>Trades</th>
                <th style={{ padding: '12px', textAlign: 'right', borderBottom: '2px solid #00ff88' }}>Win Rate</th>
                <th style={{ padding: '12px', textAlign: 'right', borderBottom: '2px solid #00ff88' }}>Drawdown</th>
                <th style={{ padding: '12px', textAlign: 'right', borderBottom: '2px solid #00ff88' }}>Sharpe</th>
              </tr>
            </thead>
            <tbody>
              {strategies.map((strategy, idx) => (
                <tr key={idx} style={{ borderBottom: '1px solid #333' }}>
                  <td style={{ padding: '12px', fontWeight: 'bold' }}>{strategy.name}</td>
                  <td style={{ padding: '12px', textAlign: 'right', color: '#00ff88' }}>{strategy.return}</td>
                  <td style={{ padding: '12px', textAlign: 'right' }}>{strategy.trades}</td>
                  <td style={{ padding: '12px', textAlign: 'right' }}>{strategy.winRate}</td>
                  <td style={{ padding: '12px', textAlign: 'right', color: '#ff4444' }}>{strategy.drawdown}</td>
                  <td style={{ padding: '12px', textAlign: 'right' }}>{strategy.sharpe}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>🎯 Quick Actions</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
          <Link href="/charts" style={{ 
            padding: '1.5rem', 
            backgroundColor: '#1a1a1a', 
            border: '2px solid #00ff88',
            borderRadius: '8px',
            display: 'block'
          }}>
            <div style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>📈</div>
            <div style={{ fontWeight: 'bold' }}>View Charts</div>
            <div style={{ fontSize: '0.9rem', color: '#888' }}>Browse backtest charts</div>
          </Link>
          
          <Link href="/agents" style={{ 
            padding: '1.5rem', 
            backgroundColor: '#1a1a1a', 
            border: '2px solid #00ff88',
            borderRadius: '8px',
            display: 'block'
          }}>
            <div style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>🤖</div>
            <div style={{ fontWeight: 'bold' }}>AI Agents</div>
            <div style={{ fontSize: '0.9rem', color: '#888' }}>Manage trading agents</div>
          </Link>
          
          <Link href="/strategies" style={{ 
            padding: '1.5rem', 
            backgroundColor: '#1a1a1a', 
            border: '2px solid #00ff88',
            borderRadius: '8px',
            display: 'block'
          }}>
            <div style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>⚡</div>
            <div style={{ fontWeight: 'bold' }}>Strategies</div>
            <div style={{ fontSize: '0.9rem', color: '#888' }}>View all strategies</div>
          </Link>
        </div>
      </div>

      <div>
        <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>📍 System Status</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
          <div style={{ padding: '1.5rem', backgroundColor: '#1a1a1a', borderRadius: '8px' }}>
            <div style={{ fontSize: '0.9rem', color: '#888', marginBottom: '0.5rem' }}>Active Agents</div>
            <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#00ff88' }}>48+</div>
          </div>
          
          <div style={{ padding: '1.5rem', backgroundColor: '#1a1a1a', borderRadius: '8px' }}>
            <div style={{ fontSize: '0.9rem', color: '#888', marginBottom: '0.5rem' }}>Total Strategies</div>
            <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#00ff88' }}>150+</div>
          </div>
          
          <div style={{ padding: '1.5rem', backgroundColor: '#1a1a1a', borderRadius: '8px' }}>
            <div style={{ fontSize: '0.9rem', color: '#888', marginBottom: '0.5rem' }}>Market Pairs</div>
            <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#00ff88' }}>1000+</div>
          </div>
        </div>
      </div>
    </div>
  )
}
