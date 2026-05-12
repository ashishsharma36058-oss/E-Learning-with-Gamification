import { useEffect, useState } from "react";
import "./Dashboard.css";

export default function Dashboard() {
  const [user, setUser] = useState({
    name: "Ashish Sharma",
    level: 1,
    xp: 0,
    nextXp: 300,
    completed: 0,
    total: 50,
  });

  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem("gamifyUser"));

    if (savedUser) {
      setUser({
        name: savedUser.name || "Ashish Sharma",
        level: savedUser.level || 1,
        xp: savedUser.xp || 0,
        nextXp: savedUser.nextXp || 300,
        completed: savedUser.completed || 0,
        total: savedUser.total || 50,
      });
    }
  }, []);

  const xpPercent = Math.min((user.xp / user.nextXp) * 100, 100);
  const challengePercent = Math.min((user.completed / user.total) * 100, 100);

  return (
    <div className="dash-page">
      <aside className="dash-sidebar">
        <div className="brand-box">
          <div className="brand-icon">G</div>
          <div>
            <h2>GAMIFY</h2>
            <p>Code. Level Up. Win.</p>
          </div>
        </div>

        <nav>
          <button className="active">🏠 Dashboard</button>
          <button>⚔️ Challenges</button>
          <button>📚 Courses</button>
          <button>🏆 Leaderboard</button>
          <button>🤖 AI Mentor</button>
          <button>👤 Profile</button>
        </nav>
      </aside>

      <main className="dash-main">
        <header className="dash-header">
          <div>
            <p className="small-title">WELCOME BACK</p>
            <h1>Future Coder Command Center</h1>
            <p className="subtitle">
              Track your real coding progress, complete challenges, and level up.
            </p>
          </div>

          <div className="profile-card">
            <div className="avatar">AS</div>
            <div>
              <strong>{user.name}</strong>
              <span>Level {user.level}</span>
            </div>
          </div>
        </header>

        <section className="hero-card">
          <div className="hero-left">
            <span className="badge">LIVE LEARNING MODE</span>
            <h2>Today’s Mission</h2>
            <p>
              Complete one challenge and increase your XP. Your dashboard shows
              only real progress from your learning activity.
            </p>

            <div className="hero-actions">
              <button className="primary-btn">Continue Learning</button>
              <button className="ghost-btn">Open Challenges</button>
            </div>
          </div>

          <div className="mentor-orb">
            <div className="ring ring1"></div>
            <div className="ring ring2"></div>
            <div className="core">AI</div>
          </div>
        </section>

        <section className="stats-grid">
          <div className="stat-card">
            <p>XP Progress</p>
            <h2>{user.xp} / {user.nextXp}</h2>
            <div className="bar">
              <span style={{ width: `${xpPercent}%` }}></span>
            </div>
          </div>

          <div className="stat-card">
            <p>Current Level</p>
            <h2>{user.level}</h2>
            <small>Keep solving challenges</small>
          </div>

          <div className="stat-card">
            <p>Challenges Done</p>
            <h2>{user.completed} / {user.total}</h2>
            <div className="bar">
              <span style={{ width: `${challengePercent}%` }}></span>
            </div>
          </div>

          <div className="stat-card">
            <p>Rank Status</p>
            <h2>{user.completed > 0 ? "Active" : "Beginner"}</h2>
            <small>Based on real progress</small>
          </div>
        </section>

        <section className="content-grid">
          <div className="panel">
            <h3>Continue Learning</h3>
            <p>Resume your last coding topic and finish the next task.</p>
            <button className="panel-btn">Resume Now</button>
          </div>

          <div className="panel">
            <h3>Daily Challenge</h3>
            <p>Solve today’s coding problem to increase XP.</p>
            <button className="panel-btn">Start Challenge</button>
          </div>

          <div className="panel">
            <h3>AI Mentor</h3>
            <p>Ask for hints, explanations, and code improvement tips.</p>
            <button className="panel-btn">Ask Mentor</button>
          </div>
        </section>
      </main>
    </div>
  );
}
