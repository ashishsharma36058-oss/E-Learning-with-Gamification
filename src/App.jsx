import { BrowserRouter, Routes, Route, Navigate, Link } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Play from "./pages/Play";
import GamePlay from "./pages/GamePlay";
import Leaderboard from "./pages/Leaderboard";
import BossFight from "./pages/BossFight";

function Welcome() {
  return (
    <div style={{ minHeight: "100vh", display: "grid", placeItems: "center", background: "#050510", color: "white" }}>
      <div style={{ textAlign: "center" }}>
        <h1 style={{ fontSize: 70 }}>GAMIFY</h1>
        <p>Welcome to Gamify E-Learning</p>
        <Link to="/dashboard" style={{ color: "white", background: "#7c3aed", padding: "14px 28px", borderRadius: 12, textDecoration: "none" }}>
          Enter Dashboard
        </Link>
      </div>
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
