import { BrowserRouter, Routes, Route, Navigate, Link } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Play from "./pages/Play";
import GamePlay from "./pages/GamePlay";
import Leaderboard from "./pages/Leaderboard";
import BossFight from "./pages/BossFight";

function Welcome() {
  return (
    <div className="welcome-screen">
      <style>{`
        .welcome-screen {
          min-height: 100vh;
          background:
            radial-gradient(circle at 50% 85%, rgba(139, 92, 246, 0.45), transparent 28%),
            radial-gradient(circle at top, rgba(59, 130, 246, 0.25), transparent 35%),
            linear-gradient(135deg, #030712, #07091a 55%, #10051f);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          overflow: hidden;
          position: relative;
          font-family: Inter, system-ui, sans-serif;
        }

        .welcome-screen::before {
          content: "";
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(139,92,246,0.12) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59,130,246,0.10) 1px, transparent 1px);
          background-size: 70px 70px;
          opacity: 0.25;
        }

        .welcome-card {
          position: relative;
          z-index: 2;
          padding: 40px;
        }

        .game-icon {
          font-size: 70px;
          margin-bottom: 20px;
          filter: drop-shadow(0 0 25px #8b5cf6);
          animation: floatIcon 3s ease-in-out infinite;
        }

        .welcome-title {
          font-size: clamp(54px, 9vw, 110px);
          margin: 0;
          letter-spacing: 8px;
          font-weight: 900;
          background: linear-gradient(90deg, #ffffff, #a78bfa, #60a5fa);
          -webkit-background-clip: text;
          color: transparent;
          text-shadow: 0 0 40px rgba(139,92,246,0.35);
        }

        .welcome-sub {
          margin-top: 12px;
          letter-spacing: 8px;
          color: #c4b5fd;
          font-size: 18px;
        }

        .welcome-line {
          width: 240px;
          height: 3px;
          margin: 36px auto;
          background: linear-gradient(90deg, transparent, #a855f7, #3b82f6, transparent);
          box-shadow: 0 0 25px #8b5cf6;
        }

        .welcome-text {
          font-size: 25px;
          color: #f8fafc;
          margin-bottom: 32px;
        }

        .enter-btn {
          display: inline-flex;
          align-items: center;
          gap: 18px;
          padding: 18px 52px;
          border-radius: 18px;
          color: white;
          text-decoration: none;
          font-size: 24px;
          font-weight: 900;
          background: linear-gradient(135deg, #7c3aed, #2563eb);
          border: 1px solid rgba(255,255,255,0.35);
          box-shadow: 0 0 35px rgba(99,102,241,0.65);
          transition: 0.3s ease;
        }

        .enter-btn:hover {
          transform: translateY(-4px) scale(1.03);
          box-shadow: 0 0 55px rgba(99,102,241,0.95);
        }

        .platform-ring {
          position: absolute;
          bottom: 35px;
          width: 520px;
          height: 120px;
          border-radius: 50%;
          border: 3px solid rgba(139,92,246,0.65);
          box-shadow: 0 0 45px rgba(139,92,246,0.8);
          animation: pulseRing 2.5s ease-in-out infinite;
        }

        @keyframes floatIcon {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }

        @keyframes pulseRing {
          0%, 100% { transform: scale(1); opacity: 0.75; }
          50% { transform: scale(1.08); opacity: 1; }
        }

        @media (max-width: 700px) {
          .welcome-sub {
            letter-spacing: 4px;
            font-size: 13px;
          }

          .welcome-text {
            font-size: 20px;
          }

          .enter-btn {
            font-size: 18px;
            padding: 15px 32px;
          }

          .platform-ring {
            width: 330px;
          }
        }
      `}</style>

      <div className="welcome-card">
        <div className="game-icon">🎮</div>
        <h1 className="welcome-title">GAMIFY</h1>
        <p className="welcome-sub">E-LEARNING WITH GAMIFICATION</p>
        <div className="welcome-line"></div>
        <p className="welcome-text">Welcome to Gamify E-Learning</p>

        <Link className="enter-btn" to="/dashboard">
          Enter Dashboard →
        </Link>
      </div>

      <div className="platform-ring"></div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/play" element={<Play />} />
        <Route path="/game" element={<GamePlay />} />
        <Route path="/rankings" element={<Leaderboard />} />
        <Route path="/boss-fight" element={<BossFight />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
