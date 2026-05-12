import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function BossFight() {
  const navigate = useNavigate()
  const [bossHp, setBossHp] = useState(100)
  const [message, setMessage] = useState("J.A.R.V.I.S is waiting for your attack...")

  const attackBoss = () => {
    const damage = Math.floor(Math.random() * 18) + 12
    const newHp = Math.max(bossHp - damage, 0)
    setBossHp(newHp)

    if (newHp === 0) {
      setMessage("🏆 Boss defeated! You earned +500 XP")
    } else {
      setMessage(`⚡ Attack successful! You dealt ${damage}% damage`)
    }
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "radial-gradient(circle at top, #2b0505, #050008 55%, #020617)",
        color: "white",
        fontFamily: "sans-serif",
        padding: 28,
        overflow: "hidden",
      }}
    >
      <button
        onClick={() => navigate("/dashboard")}
        style={{
          background: "#111827",
          color: "white",
          border: "1px solid #ef4444",
          borderRadius: 12,
          padding: "10px 16px",
          cursor: "pointer",
          marginBottom: 20,
        }}
      >
        ← Back
      </button>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "280px 1fr 320px",
          gap: 22,
        }}
      >
        <div style={panel}>
          <h2>🧑‍💻 Coder Profile</h2>
          <div style={avatar}>AS</div>
          <h3>Ashish</h3>
          <p style={{ color: "#f87171" }}>Elite Coder</p>
          <h1>Level 23</h1>
          <p>XP: 2450 / 3000</p>
          <p>🔥 Streak: 12 days</p>
          <p>🏅 Rank: Legendary</p>
        </div>

        <div>
          <div style={heroPanel}>
            <h4 style={{ color: "#f87171" }}>BOSS FIGHT</h4>
            <h1 style={{ fontSize: 54, margin: 0 }}>AI Overlord</h1>
            <h1 style={{ fontSize: 72, margin: 0, color: "#ef4444" }}>
              J.A.R.V.I.S
            </h1>

            <p style={{ maxWidth: 520, color: "#cbd5e1", fontSize: 18 }}>
              An advanced AI has taken control of the system. Defeat J.A.R.V.I.S
              by solving coding challenges and launching clean code attacks.
            </p>

            <div style={robotBox}>
              🤖
            </div>

            <div style={missionBox}>
              <b>🎯 Mission Objective:</b>
              <p>
                Use OOP concepts to create a system that can bypass the AI
                security and shut it down.
              </p>
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 20, marginTop: 20 }}>
            <div style={panel}>
              <h2>Challenge</h2>
              <p style={{ color: "#f87171" }}>Problem</p>
              <p>
                Design a class <b>Hacker</b> that can attack the AI system using
                inheritance and methods.
              </p>
              <ul style={{ color: "#cbd5e1" }}>
                <li>Create a class Hacker</li>
                <li>Add attack method</li>
                <li>Create EliteHacker child class</li>
                <li>Return final AI health</li>
              </ul>
              <h3 style={{ color: "#ef4444" }}>Difficulty: Legendary</h3>
            </div>

            <div style={panel}>
              <h2>Code Editor</h2>
              <pre
                style={{
                  background: "#020617",
                  padding: 18,
                  borderRadius: 14,
                  color: "#22c55e",
                  minHeight: 250,
                  overflow: "auto",
                }}
              >
{`class Hacker:
    def __init__(self, name):
        self.name = name
        self.damage = 20

    def attack(self, ai):
        ai.health -= self.damage
        return ai.health

class EliteHacker(Hacker):
    def special_attack(self, ai):
        ai.health -= self.damage * 2
        return ai.health`}
              </pre>

              <button onClick={attackBoss} style={attackButton}>
                ⚡ SUBMIT ATTACK
              </button>
            </div>
          </div>
        </div>

        <div style={panel}>
          <h2>Boss Status</h2>
          <div style={bossFace}>🤖</div>
          <h3>J.A.R.V.I.S</h3>

          <p>HP: {bossHp}%</p>
          <div style={hpTrack}>
            <div style={{ ...hpFill, width: `${bossHp}%` }} />
          </div>

          <div style={{ marginTop: 25 }}>
            <h3 style={{ color: "#ef4444" }}>Attack Pattern</h3>
            <p style={{ color: "#cbd5e1" }}>System overload, time pressure, memory bugs.</p>

            <h3 style={{ color: "#38bdf8" }}>Weakness</h3>
            <p style={{ color: "#cbd5e1" }}>Clean Code + OOP + Optimization</p>
          </div>

          <div style={outputBox}>
            <h3>Output</h3>
            <p>{message}</p>
          </div>

          <div style={rewardBox}>
            <h3>Rewards</h3>
            <p>💎 +500 XP</p>
            <p>🏅 Boss Badge</p>
            <p>🔥 Legendary Rank</p>
          </div>
        </div>
      </div>
    </div>
  )
}

const panel = {
  background: "rgba(15,23,42,0.88)",
  border: "1px solid rgba(239,68,68,0.45)",
  borderRadius: 18,
  padding: 22,
  boxShadow: "0 0 30px rgba(239,68,68,0.18)",
}

const heroPanel = {
  ...panel,
  minHeight: 420,
  position: "relative",
  overflow: "hidden",
}

const avatar = {
  width: 80,
  height: 80,
  borderRadius: "50%",
  background: "linear-gradient(135deg,#ef4444,#f97316)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontWeight: "bold",
  fontSize: 28,
}

const robotBox = {
  position: "absolute",
  right: 40,
  top: 80,
  fontSize: 160,
  filter: "drop-shadow(0 0 25px #ef4444)",
}

const missionBox = {
  marginTop: 35,
  background: "rgba(127,29,29,0.5)",
  border: "1px solid #ef4444",
  padding: 18,
  borderRadius: 14,
}

const bossFace = {
  fontSize: 110,
  textAlign: "center",
  filter: "drop-shadow(0 0 25px #ef4444)",
}

const hpTrack = {
  height: 14,
  background: "#1f2937",
  borderRadius: 999,
  overflow: "hidden",
}

const hpFill = {
  height: "100%",
  background: "linear-gradient(90deg,#ef4444,#f97316)",
  transition: "0.4s",
}

const outputBox = {
  marginTop: 25,
  background: "#020617",
  padding: 16,
  borderRadius: 14,
  color: "#22c55e",
}

const rewardBox = {
  marginTop: 20,
  background: "rgba(88,28,135,0.35)",
  padding: 16,
  borderRadius: 14,
}

const attackButton = {
  marginTop: 18,
  width: "100%",
  padding: "15px",
  borderRadius: 14,
  border: "none",
  background: "linear-gradient(135deg,#dc2626,#f97316)",
  color: "white",
  fontWeight: "bold",
  fontSize: 16,
  cursor: "pointer",
}
