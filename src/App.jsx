import { BrowserRouter, Routes, Route, Navigate, useNavigate } from "react-router-dom";

import * as AuthModule from "./pages/Auth";
import Dashboard from "./pages/Dashboard";
import GamePlay from "./pages/GamePlay";
import Leaderboard from "./pages/Leaderboard";
import Play from "./pages/Play";

const Auth = AuthModule.default || AuthModule.Auth || AuthModule.Login || LoginFallback;

function Welcome() {
  const navigate = useNavigate();

  return (
    <div style={{
      minHeight: "100vh",
      background: "radial-gradient(circle at top, #5b21b6, #050510 55%)",
      color: "white",
      display: "grid",
      placeItems: "center",
      textAlign: "center",
      padding: "30px"
    }}>
      <div>
        <h1 style={{ fontSize: "58px", marginBottom: "10px" }}>GAMIFY</h1>
        <p style={{ fontSize: "20px", color: "#cbd5e1" }}>
          Welcome to Gamify E-Learning
        </p>
        <button
          onClick={() => navigate("/login")}
          style={{
            marginTop: "28px",
            padding: "14px 28px",
            borderRadius: "14px",
            border: "none",
            background: "linear-gradient(135deg, #ef4444, #8b5cf6)",
            color: "white",
            fontWeight: "800",
            cursor: "pointer"
          }}
        >
          Get Started
        </button>
      </div>
    </div>
  );
}

function LoginFallback() {
  const navigate = useNavigate();

  return (
    <div style={{
      minHeight: "100vh",
      background: "#050510",
      color: "white",
      display: "grid",
      placeItems: "center"
    }}>
      <div style={{
        width: "360px",
        padding: "30px",
        borderRadius: "22px",
        background: "rgba(255,255,255,0.06)",
        border: "1px solid rgba(255,255,255,0.1)"
      }}>
        <h2>Login</h2>
        <input placeholder="Email" style={inputStyle} />
        <input placeholder="Password" type="password" style={inputStyle} />
        <button
          onClick={() => navigate("/dashboard")}
          style={buttonStyle}
        >
          Login
        </button>
      </div>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  marginBottom: "14px",
  padding: "13px",
  borderRadius: "12px",
  border: "1px solid #333",
  background: "#0b0b18",
  color: "white"
};

const buttonStyle = {
  width: "100%",
  padding: "13px",
  borderRadius: "12px",
  border: "none",
  background: "linear-gradient(135deg, #ef4444, #8b5cf6)",
  color: "white",
  fontWeight: "800",
  cursor: "pointer"
};

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />

        <Route path="/login" element={<Auth />} />
        <Route path="/register" element={<Auth />} />

        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/play" element={<Play />} />
        <Route path="/game" element={<GamePlay />} />
        <Route path="/rankings" element={<Leaderboard />} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
