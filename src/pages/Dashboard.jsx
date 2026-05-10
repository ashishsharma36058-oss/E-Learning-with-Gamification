import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import useStore from '../store/useStore'
import api from '../api/client'
import XPBar from '../components/XPBar'

const LANG_TRACKS = [
  { key: 'python',     icon: '🐍', name: 'Python',     color: '#3b82f6' },
  { key: 'javascript', icon: '⚡', name: 'JavaScript', color: '#f59e0b' },
  { key: 'cpp',        icon: '⚙️', name: 'C++',        color: '#a78bfa' },
  { key: 'java',       icon: '☕', name: 'Java',       color: '#f97316' },
]

export default function Dashboard() {
  const { user } = useStore()
  const [stats, setStats] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    api.get('/progress/stats')
      .then(r => setStats(r.data))
      .catch(() => {})
      .finally(() => setLoading(false))
  }, [])

  if (!user) return null

  const STAT_CARDS = [
    { label: 'Challenges Solved', value: loading ? '—' : (stats?.completed ?? 0), sub: 'total completed' },
    { label: 'Accuracy Rate',     value: loading ? '—' : `${stats?.accuracy ?? 0}%`, sub: 'correct submissions' },
    { label: 'Total XP Earned',   value: loading ? '—' : (user.total_xp || 0).toLocaleString(), sub: 'all time' },
    { label: 'Current Streak',    value: loading ? '—' : `${user.streak_days}d`, sub: user.streak_days >= 5 ? '🔥 Bonus active' : 'Keep going!' },
  ]

return (
  <>
    <div className="dashboard-bg">
      <span></span>
      <span></span>
      <span></span>
    </div>

    <div className="dashboard-page page-enter">

      {/* Greeting */}
      <div style={{ marginBottom: 28 }}>
        <h1 style={{ marginBottom: 6 }}>
          Welcome back, <span style={{ color: 'var(--purple-light)' }}>{user.username}</span> 👋
        </h1>

        <p style={{
          fontSize: 13,
          color: 'var(--text-3)',
          fontFamily: 'var(--mono)'
        }}>
          // {new Date().toLocaleDateString(undefined, {
            weekday: 'long',
            month: 'short',
            day: 'numeric'
          })}
        </p>
      </div>

      {/* XP Card */}
      <div className="card" style={{ marginBottom: 26 }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: 12
        }}>
          <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
            <div className="badge">
              LVL {user.level}
            </div>
            <span style={{ color: 'var(--text-2)' }}>
              Beginner
            </span>
          </div>

          <div style={{
            color: 'var(--orange)',
            fontFamily: 'var(--mono)'
          }}>
            {user.total_xp} / 300 XP
          </div>
        </div>

        <div className="xpbar">
          <div
            className="xpbar-fill"
            style={{
              width: `${Math.min((user.total_xp / 300) * 100, 100)}%`
            }}
          />
        </div>

        <div style={{
          marginTop: 10,
          textAlign: 'right',
          fontSize: 12,
          color: 'var(--text-3)',
          fontFamily: 'var(--mono)'
        }}>
          300 XP to Level {user.level + 1}
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-4" style={{ marginBottom: 28 }}>
        {statsCards.map((card) => (
          <div key={card.label} className="card">
            <div className="label">{card.label}</div>

            <div style={{
              fontSize: 26,
              fontWeight: 800,
              color: 'var(--purple-light)',
              marginBottom: 6
            }}>
              {card.value}
            </div>

            <div style={{
              fontSize: 13,
              color: 'var(--text-3)'
            }}>
              {card.sub}
            </div>
          </div>
        ))}
      </div>

      {/* Languages */}
      <div style={{ marginBottom: 28 }}>
        <div className="section-title">
          Language Tracks
        </div>

        <div className="grid grid-4">
          {tracks.map((track) => (
            <div key={track.name} className="card">
              <div style={{
                fontSize: 42,
                marginBottom: 10
              }}>
                {track.icon}
              </div>

              <div style={{
                fontWeight: 700,
                marginBottom: 6,
                color: track.color
              }}>
                {track.name}
              </div>

              <div style={{
                color: 'var(--text-3)',
                fontSize: 13
              }}>
                {track.done} / {track.total} solved
              </div>

              <div className="xpbar" style={{ marginTop: 14 }}>
                <div
                  className="xpbar-fill"
                  style={{
                    width: `${track.total ? (track.done / track.total) * 100 : 0}%`
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Buttons */}
      <div className="grid grid-2">
        <button
          className="btn btn-primary"
          onClick={() => navigate('/play')}
        >
          ▶ Play Now
        </button>

        <button
          className="btn"
          onClick={() => navigate('/leaderboard')}
        >
          🏆 View Rankings
        </button>
      </div>

    </div>
  </>
)
}
