import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import api from '../api/client'
import useStore from '../store/useStore'

const LANG_TRACKS = [
  { key: 'python', name: 'Python', icon: '🐍', color: '#38bdf8' },
  { key: 'javascript', name: 'JavaScript', icon: '⚡', color: '#f59e0b' },
  { key: 'cpp', name: 'C++', icon: '⚙️', color: '#a78bfa' },
  { key: 'java', name: 'Java', icon: '☕', color: '#fb7185' },
]

export default function Dashboard() {
  const navigate = useNavigate()
  const { user, setUser } = useStore()
  const [stats, setStats] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    api.get('/progress/me')
      .then(({ data }) => {
        setStats(data)
        if (data.user) setUser(data.user)
      })
      .catch(() => {})
      .finally(() => setLoading(false))
  }, [])

  if (!user) return null

  const statCards = [
    { label: 'Challenges Solved', value: loading ? '-' : (stats?.completed ?? 0), sub: 'total completed' },
    { label: 'Accuracy Rate', value: loading ? '-' : `${stats?.accuracy ?? 0}%`, sub: 'correct submissions' },
    { label: 'Total XP Earned', value: user.total_xp || 0, sub: 'all time' },
    { label: 'Current Streak', value: `${user.streak_days || 0}d`, sub: 'Keep going!' },
  ]

  return (
    <>
      <div className="dashboard-bg">
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className="dashboard-page page-enter">
        <div style={{ marginBottom: 28 }}>
          <h1 style={{ marginBottom: 6 }}>
            Welcome back, <span style={{ color: 'var(--purple-light)' }}>{user.username}</span> 👋
          </h1>
          <p style={{ fontSize: 13, color: 'var(--text-3)', fontFamily: 'var(--mono)' }}>
            // {new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}
          </p>
        </div>

        <div className="card" style={{ marginBottom: 26 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 12 }}>
            <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
              <div className="badge">LVL {user.level || 1}</div>
              <span style={{ color: 'var(--text-2)' }}>Beginner</span>
            </div>
            <div style={{ color: 'var(--orange)', fontFamily: 'var(--mono)' }}>
              {user.total_xp || 0} / 300 XP
            </div>
          </div>

          <div className="xpbar">
            <div
              className="xpbar-fill"
              style={{ width: `${Math.min(((user.total_xp || 0) / 300) * 100, 100)}%` }}
            />
          </div>

          <div style={{ marginTop: 10, textAlign: 'right', fontSize: 12, color: 'var(--text-3)', fontFamily: 'var(--mono)' }}>
            300 XP to Level {(user.level || 1) + 1}
          </div>
        </div>

        <div className="grid grid-4" style={{ marginBottom: 28 }}>
          {statCards.map((s) => (
            <div key={s.label} className="card">
              <div className="label">{s.label}</div>
              <div style={{ fontSize: 26, fontWeight: 800, color: 'var(--purple-light)', marginBottom: 6 }}>
                {s.value}
              </div>
              <div style={{ fontSize: 13, color: 'var(--text-3)' }}>{s.sub}</div>
            </div>
          ))}
        </div>

        <div style={{ marginBottom: 28 }}>
          <div className="section-title">Language Tracks</div>

          <div className="grid grid-4">
            {LANG_TRACKS.map((lang) => {
              const data = stats?.lang_stats?.[lang.key]
              const done = data?.completed || 0
              const total = data?.total || 0

              return (
                <div key={lang.key} className="card" style={{ padding: 18, textAlign: 'center', cursor: 'pointer' }}>
                  <div style={{ fontSize: 28, marginBottom: 8 }}>{lang.icon}</div>
                  <div style={{ fontWeight: 700, fontSize: 13, color: lang.color, marginBottom: 4 }}>
                    {lang.name}
                  </div>
                  <div style={{ fontSize: 10, color: 'var(--text-3)', fontFamily: 'var(--mono)', marginBottom: 10 }}>
                    {done} / {total} solved
                  </div>
                  <div className="xpbar">
                    <div
                      className="xpbar-fill"
                      style={{ width: `${total ? (done / total) * 100 : 0}%` }}
                    />
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <div className="grid grid-2">
          <button className="btn btn-primary" onClick={() => navigate('/play')}>
            ▶ Play Now
          </button>

          <button className="btn" onClick={() => navigate('/leaderboard')}>
            🏆 View Rankings
          </button>
        </div>
      </div>
    </>
  )
}
