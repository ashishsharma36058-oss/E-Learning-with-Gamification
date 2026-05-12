import { useEffect, useState } from "react";
import "./Dashboard.css";

const API = import.meta.env.VITE_API_URL || "http://localhost:8000";

export default function Dashboard() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const token = localStorage.getItem("token");

  useEffect(() => {
    async function loadDashboard() {
      try {
        const res = await fetch(`${API}/api/v1/dashboard/me`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const result = await res.json();
        setData(result);
      } catch (err) {
        console.error("Dashboard load error:", err);
      } finally {
        setLoading(false);
      }
    }

    loadDashboard();
  }, [token]);

  if (loading) {
    return <div className="dash-loading">Loading real dashboard...</div>;
  }

  if (!data) {
    return <div className="dash-loading">Dashboard data not found</div>;
  }

  return (
    <div className="dashboard-page">
      <aside className="sidebar">
        <h1 className="brand">GAMIFY</h1>
        <p>E-LEARNING</p>

        <nav>
          <span className="active">🏠 Dashboard</span>
          <span>📚 Courses</span>
          <span>⚔️ Challenges</span>
          <span>🏆 Leaderboard</span>
          <span>🤖 AI Mentor</span>
          <span>👤 Profile</span>
        </nav>
      </aside>

      <main className="dashboard-main">
        <header className="topbar">
          <div>
            <p>WELCOME BACK,</p>
            <h2>FUTURE CODER</h2>
          </div>

          <div className="user-pill">
            <img src={data.user.avatar || "/avatar.png"} alt="avatar" />
            <div>
              <b>{data.user.name}</b>
              <small>Level {data.user.level}</small>
            </div>
          </div>
        </header>

        <section className="hero-section">
          <div className="hero-text">
            <h1>{data.boss?.title || "AI Mentor Challenge"}</h1>
            <p>{data.boss?.description || "Complete real challenges to level up."}</p>
          </div>

          <div className="cyborg">
            <div className="halo"></div>
            <img src="/mentor-cyborg.png" alt="AI Mentor" />
          </div>
        </section>

        <section className="stats-grid">
          <Card title="XP Progress" value={`${data.stats.xp} / ${data.stats.nextLevelXp}`} />
          <Card title="Level" value={data.user.level} />
          <Card title="Challenges Completed" value={`${data.stats.completedChallenges} / ${data.stats.totalChallenges}`} />
          <Card title="Rank" value={data.stats.rank || "Not ranked"} />
        </section>

        <section className="bottom-grid">
          <div className="panel">
            <h3>Continue Learning</h3>
            <p>{data.currentCourse?.title || "No course started"}</p>
            <div className="progress">
              <span style={{ width: `${data.currentCourse?.progress || 0}%` }}></span>
            </div>
            <button>Resume Now</button>
          </div>

          <div className="panel">
            <h3>Daily Challenge</h3>
            <p>{data.dailyChallenge?.title || "No daily challenge"}</p>
            <button>Start Challenge</button>
          </div>

          <div className="panel">
            <h3>Leaderboard</h3>
            {data.leaderboard?.slice(0, 3).map((u, i) => (
              <p key={u.id}>
                {i + 1}. {u.name} — {u.xp} XP
              </p>
            ))}
          </div>

          <div className="panel">
            <h3>Your Activity</h3>
            <div className="activity-circle">{data.stats.activityPercent}%</div>
          </div>
        </section>
      </main>
    </div>
  );
}

function Card({ title, value }) {
  return (
    <div className="stat-card">
      <p>{title}</p>
      <h2>{value}</h2>
    </div>
  );
}
