'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

interface Agent {
  name: string
  status: 'active' | 'idle' | 'error'
  description: string
  lastRun?: string
}

export default function AgentsPage() {
  const [agents, setAgents] = useState<Agent[]>([])

  useEffect(() => {
    const mockAgents: Agent[] = [
      {
        name: 'Trading Agent',
        status: 'idle',
        description: 'LLM-powered trading decisions',
        lastRun: '2 minutes ago'
      },
      {
        name: 'Risk Agent',
        status: 'active',
        description: 'Risk management and position sizing',
        lastRun: 'Running'
      },
      {
        name: 'Strategy Agent',
        status: 'idle',
        description: 'Strategy-based trading signals',
        lastRun: '15 minutes ago'
      },
      {
        name: 'CopyBot Agent',
        status: 'idle',
        description: 'Copy successful trader portfolios',
        lastRun: '1 hour ago'
      },
      {
        name: 'Sentiment Agent',
        status: 'idle',
        description: 'Market sentiment analysis',
        lastRun: '30 minutes ago'
      },
      {
        name: 'RBI Agent',
        status: 'idle',
        description: 'Research-based inference strategy',
        lastRun: '2 hours ago'
      }
    ]
    setAgents(mockAgents)
  }, [])

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return '#00ff88'
      case 'idle': return '#ffaa00'
      case 'error': return '#ff4444'
      default: return '#888'
    }
  }

  return (
    <div style={{ padding: '2rem', fontFamily: 'monospace' }}>
      <div style={{ marginBottom: '2rem' }}>
        <Link href="/" style={{ color: '#00ff88', marginBottom: '1rem', display: 'inline-block' }}>
          ← Back to Dashboard
        </Link>
      </div>

      <h1 style={{ fontSize: '2.5rem', marginBottom: '2rem', color: '#00ff88' }}>
        🤖 AI Agents
      </h1>

      <div style={{ display: 'grid', gap: '1rem' }}>
        {agents.map((agent, idx) => (
          <div key={idx} style={{ 
            padding: '1.5rem', 
            backgroundColor: '#1a1a1a', 
            border: '2px solid #333',
            borderRadius: '8px'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '1rem' }}>
              <div>
                <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem' }}>{agent.name}</h3>
                <p style={{ color: '#888', fontSize: '0.95rem' }}>{agent.description}</p>
              </div>
              <div style={{ 
                padding: '0.5rem 1rem', 
                backgroundColor: getStatusColor(agent.status),
                color: '#000',
                borderRadius: '4px',
                fontWeight: 'bold',
                fontSize: '0.85rem'
              }}>
                {agent.status.toUpperCase()}
              </div>
            </div>
            {agent.lastRun && (
              <p style={{ fontSize: '0.85rem', color: '#666' }}>
                Last run: {agent.lastRun}
              </p>
            )}
          </div>
        ))}
      </div>

      <div style={{ marginTop: '3rem', padding: '1.5rem', backgroundColor: '#1a1a1a', borderRadius: '8px' }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>⚡ Agent Control</h2>
        <p style={{ color: '#888', marginBottom: '1rem' }}>
          Agents can be controlled via the main Python script or configuration file.
          Each agent runs independently and can be enabled/disabled in config.py.
        </p>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <button style={{
            padding: '0.75rem 1.5rem',
            backgroundColor: '#00ff88',
            color: '#000',
            border: 'none',
            borderRadius: '4px',
            fontWeight: 'bold',
            cursor: 'pointer'
          }}>
            Start All
          </button>
          <button style={{
            padding: '0.75rem 1.5rem',
            backgroundColor: '#ff4444',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            fontWeight: 'bold',
            cursor: 'pointer'
          }}>
            Stop All
          </button>
        </div>
      </div>
    </div>
  )
}
