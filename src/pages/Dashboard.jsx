import ProfileModal from "../components/ProfileModal"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function Dashboard() {
  const navigate = useNavigate()
  const [openProfile, setOpenProfile] = useState(false)

  const user = JSON.parse(localStorage.getItem("user") || "null")
  const solvedChallenges = JSON.parse(localStorage.getItem("solvedChallenges") || "[]")
  const xp = Number(localStorage.getItem("xp")) || 0

  const cards = [
    {
      title: "Challenges Solved",
      value: solvedChallenges.length,
      emoji: "🏆",
      color: "#8b5cf6",
    },
    {
      title: "Accuracy",
      value: solvedChallenges.length > 0 ? "100%" : "0%",
      emoji: "🎯",
      color: "#06b6d4",
    },
    {
      title: "Total XP",
      value: xp,
      emoji: "⚡",
      color: "#f59e0b",
    },
  ]

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to right, #0f172a, #111827, #1e293b)",
        color: "white",
        padding: "40px",
        fontFamily: "sans-serif",
      }}
    >
      <h1 style={{ fontSize: "42px", marginBottom: "10px", fontWeight: "bold" }}>
        🚀 Gamify Dashboard
      </h1>

      <p style={{ color: "#94a3b8", marginBottom: "40px" }}>
        Welcome back {user?.username || "Coder"} 👋

        <button
          onClick={() => setOpenProfile(true)}
          style={{
            marginLeft: "15px",
            padding: "10px 16px",
            borderRadius: 12,
            border: "none",
            background: "#7c3aed",
            color: "white",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          👤 Profile
        </button>
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
          gap: "25px",
        }}
      >
        {cards.map((card, index) => (
          <div
            key={index}
            style={{
              background: "#1e293b",
              borderRadius: "20px",
              padding: "30px",
              border: `2px solid ${card.color}`,
              boxShadow: `0 0 20px ${card.color}33`,
            }}
          >
            <div style={{ fontSize: "45px", marginBottom: "15px" }}>
              {card.emoji}
            </div>

            <h2 style={{ fontSize: "18px", color: "#cbd5e1" }}>
              {card.title}
            </h2>

            <h1 style={{ fontSize: "38px", marginTop: "10px" }}>
              {card.value}
            </h1>
          </div>
        ))}
      </div>

      <div
        style={{
          marginTop: "50px",
          background: "#111827",
          padding: "30px",
          borderRadius: "20px",
        }}
      >
        <h2 style={{ marginBottom: "20px", fontSize: "28px" }}>
          🎮 Quick Actions
        </h2>

        <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
          <button onClick={() => navigate("/play")} style={buttonStyle}>
            Play Game
          </button>

          <button onClick={() => navigate("/leaderboard")} style={buttonStyle}>
            Leaderboard
          </button>
        </div>
      </div>

      <ProfileModal open={openProfile} onClose={() => setOpenProfile(false)} />
    </div>
  )
}

const buttonStyle = {
  padding: "15px 25px",
  border: "none",
  borderRadius: "12px",
  background: "#8b5cf6",
  color: "white",
  fontSize: "16px",
  cursor: "pointer",
}
