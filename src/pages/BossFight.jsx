import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function BossFight() {
  const navigate = useNavigate()

  const [bossHp, setBossHp] = useState(100)
  const [message, setMessage] = useState("⚠️ J.A.R.V.I.S activated. Waiting for your code attack...")
  const [attacking, setAttacking] = useState(false)
  const [damaged, setDamaged] = useState(false)
  const [intro, setIntro] = useState(true)

  const attackBoss = () => {
    if (bossHp === 0) return

    setAttacking(true)
    setDamaged(true)

    const damage = Math.floor(Math.random() * 18) + 12
    const newHp = Math.max(bossHp - damage, 0)

    setTimeout(() => {
      setBossHp(newHp)

      if (newHp === 0) {
        setMessage("🏆 BOSS DEFEATED! You earned +500 XP and Legendary Badge!")
      } else if (newHp < 35) {
        setMessage(`🚨 Critical hit! J.A.R.V.I.S is unstable. Damage: ${damage}%`)
      } else {
        setMessage(`⚡ Attack successful! You dealt ${damage}% damage.`)
      }
    }, 350)

    setTimeout(() => {
      setAttacking(false)
      setDamaged(false)
    }, 900)
  }

  return (
    <>
      <style>{styles}</style>

      {intro && (
        <div className="intro-screen">
          <div className="intro-robot">🤖</div>
          <h1>J.A.R.V.I.S MODE ACTIVATED</h1>
          <p>Boss Fight System Loading...</p>
          <button onClick={() => setIntro(false)}>Enter Battle</button>
        </div>
      )}

      <div className={`boss-page ${attacking ? "screen-shake" : ""}`}>
        <button onClick={() => navigate("/dashboard")} className="back-btn">
          ← Back
        </button>

        <div className="boss-layout">
          <div className="panel">
            <h2>🧑‍💻 Coder Profile</h2>
            <div className="avatar">AS</div>
            <h3>Ashish</h3>
            <p className="danger-text">Elite Coder</p>
            <h1>Level 23</h1>
            <p>XP: 2450 / 3000</p>
            <p>🔥 Streak: 12 days</p>
            <p>🏅 Rank: Legendary</p>
          </div>

          <div>
            <div className="hero-panel">
              <h4 className="danger-text">BOSS FIGHT</h4>
              <h1 className="title">AI Overlord</h1>
              <h1 className="boss-title">J.A.R.V.I.S</h1>

              <p className="hero-desc">
                An advanced AI has taken control of the system. Defeat J.A.R.V.I.S
                by solving coding challenges and launching clean code attacks.
              </p>

              <div className={`robot-box ${damaged ? "robot-damaged" : ""}`}>
                <div className="eye eye-left"></div>
                <div className="eye eye-right"></div>
                <div className="robot-hand left-hand">🦾</div>
                <div className="robot-hand right-hand">🦾</div>
                <div className="robot-face">🤖</div>
              </div>

              <div className="mission-box">
                <b>🎯 Mission Objective:</b>
                <p>
                  Use OOP concepts to create a system that can bypass the AI
                  security and shut it down.
                </p>
              </div>
            </div>

            <div className="bottom-grid">
              <div className="panel">
                <h2>Challenge</h2>
                <p className="danger-text">Problem</p>
                <p>
                  Design a class <b>Hacker</b> that can attack the AI system using
                  inheritance and methods.
                </p>

                <ul>
                  <li>Create a class Hacker</li>
                  <li>Add attack method</li>
                  <li>Create EliteHacker child class</li>
                  <li>Return final AI health</li>
                </ul>

                <h3 className="danger-text">Difficulty: Legendary</h3>
              </div>

              <div className="panel">
                <h2>Code Editor</h2>

                <pre className="code-box">{`class Hacker:
    def __init__(self, name):
        self.name = name
        self.damage = 20

    def attack(self, ai):
        ai.health -= self.damage
        return ai.health

class EliteHacker(Hacker):
    def special_attack(self, ai):
        ai.health -= self.damage * 2
        return ai.health`}</pre>

                <button onClick={attackBoss} className="attack-btn">
                  ⚡ SUBMIT ATTACK
                </button>
              </div>
            </div>
          </div>

          <div className="panel">
            <h2>Boss Status</h2>

            <div className={`boss-face ${damaged ? "boss-hit" : ""}`}>🤖</div>

            <h3>J.A.R.V.I.S</h3>

            <p>HP: {bossHp}%</p>

            <div className="hp-track">
              <div className="hp-fill" style={{ width: `${bossHp}%` }}></div>
            </div>

            <div className="status-box">
              <h3 className="danger-text">Attack Pattern</h3>
              <p>System overload, time pressure, memory bugs.</p>

              <h3 className="blue-text">Weakness</h3>
              <p>Clean Code + OOP + Optimization</p>
            </div>

            <div className="output-box">
              <h3>Output</h3>
              <p>{message}</p>
            </div>

            <div className="reward-box">
              <h3>Rewards</h3>
              <p>💎 +500 XP</p>
              <p>🏅 Boss Badge</p>
              <p>🔥 Legendary Rank</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

const styles = `
.boss-page {
  min-height: 100vh;
  background: radial-gradient(circle at top, #2b0505, #050008 55%, #020617);
  color: white;
  font-family: sans-serif;
  padding: 28px;
  overflow: hidden;
}

.back-btn {
  background: #111827;
  color: white;
  border: 1px solid #ef4444;
  border-radius: 12px;
  padding: 10px 16px;
  cursor: pointer;
  margin-bottom: 20px;
}

.boss-layout {
  display: grid;
  grid-template-columns: 280px 1fr 320px;
  gap: 22px;
}

.panel {
  background: rgba(15,23,42,0.88);
  border: 1px solid rgba(239,68,68,0.45);
  border-radius: 18px;
  padding: 22px;
  box-shadow: 0 0 30px rgba(239,68,68,0.18);
}

.hero-panel {
  background: rgba(15,23,42,0.88);
  border: 1px solid rgba(239,68,68,0.45);
  border-radius: 18px;
  padding: 22px;
  box-shadow: 0 0 30px rgba(239,68,68,0.18);
  min-height: 420px;
  position: relative;
  overflow: hidden;
}

.avatar {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: linear-gradient(135deg,#ef4444,#f97316);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 28px;
}

.title {
  font-size: 54px;
  margin: 0;
}

.boss-title {
  font-size: 72px;
  margin: 0;
  color: #ef4444;
  text-shadow: 0 0 25px #ef4444;
}

.hero-desc {
  max-width: 520px;
  color: #cbd5e1;
  font-size: 18px;
}

.robot-box {
  position: absolute;
  right: 35px;
  top: 55px;
  width: 240px;
  height: 240px;
  border-radius: 50%;
  background: radial-gradient(circle,#7f1d1d 0%,#450a0a 45%,transparent 72%);
  display: flex;
  align-items: center;
  justify-content: center;
  filter: drop-shadow(0 0 35px #ef4444);
  animation: robotFloat 3s ease-in-out infinite;
}

.robot-face {
  font-size: 145px;
  z-index: 2;
}

.eye {
  position: absolute;
  top: 82px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: red;
  animation: eyeGlow 1.1s infinite;
  z-index: 3;
}

.eye-left {
  left: 88px;
}

.eye-right {
  right: 88px;
}

.robot-hand {
  position: absolute;
  font-size: 54px;
  top: 140px;
  animation: handMove 1.4s ease-in-out infinite;
}

.left-hand {
  left: 5px;
}

.right-hand {
  right: 5px;
  transform: scaleX(-1);
}

.robot-damaged {
  animation: robotHit 0.3s linear 3;
}

.mission-box {
  margin-top: 35px;
  background: rgba(127,29,29,0.5);
  border: 1px solid #ef4444;
  padding: 18px;
  border-radius: 14px;
}

.bottom-grid {
  display: grid;
  grid-template-columns: 1fr 1.4fr;
  gap: 20px;
  margin-top: 20px;
}

.code-box {
  background: #020617;
  padding: 18px;
  border-radius: 14px;
  color: #22c55e;
  min-height: 250px;
  overflow: auto;
}

.attack-btn {
  margin-top: 18px;
  width: 100%;
  padding: 15px;
  border-radius: 14px;
  border: none;
  background: linear-gradient(135deg,#dc2626,#f97316);
  color: white;
  font-weight: bold;
  font-size: 16px;
  cursor: pointer;
}

.boss-face {
  font-size: 110px;
  text-align: center;
  filter: drop-shadow(0 0 25px #ef4444);
}

.boss-hit {
  animation: bossReact 0.4s ease;
}

.hp-track {
  height: 14px;
  background: #1f2937;
  border-radius: 999px;
  overflow: hidden;
}

.hp-fill {
  height: 100%;
  background: linear-gradient(90deg,#ef4444,#f97316);
  transition: 0.4s;
}

.status-box {
  margin-top: 25px;
  color: #cbd5e1;
}

.output-box {
  margin-top: 25px;
  background: #020617;
  padding: 16px;
  border-radius: 14px;
  color: #22c55e;
}

.reward-box {
  margin-top: 20px;
  background: rgba(88,28,135,0.35);
  padding: 16px;
  border-radius: 14px;
}

.danger-text {
  color: #f87171;
}

.blue-text {
  color: #38bdf8;
}

.intro-screen {
  position: fixed;
  inset: 0;
  z-index: 99999;
  background: radial-gradient(circle, #450a0a, #020617 65%);
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  animation: introFade 0.5s ease;
}

.intro-robot {
  font-size: 130px;
  filter: drop-shadow(0 0 35px #ef4444);
  animation: robotFloat 2s ease-in-out infinite;
}

.intro-screen h1 {
  font-size: 44px;
  color: #ef4444;
  text-shadow: 0 0 25px #ef4444;
}

.intro-screen p {
  color: #cbd5e1;
}

.intro-screen button {
  margin-top: 20px;
  padding: 14px 28px;
  border-radius: 14px;
  border: none;
  background: linear-gradient(135deg,#dc2626,#f97316);
  color: white;
  font-weight: bold;
  cursor: pointer;
}

.screen-shake {
  animation: screenShake 0.35s ease;
}

@keyframes robotFloat {
  0% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-12px) rotate(2deg); }
  100% { transform: translateY(0px) rotate(0deg); }
}

@keyframes eyeGlow {
  0% { opacity: 0.45; box-shadow: 0 0 8px red; }
  50% { opacity: 1; box-shadow: 0 0 28px red; }
  100% { opacity: 0.45; box-shadow: 0 0 8px red; }
}

@keyframes handMove {
  0% { transform: rotate(0deg); }
  50% { transform: rotate(-18deg); }
  100% { transform: rotate(0deg); }
}

@keyframes robotHit {
  0% { transform: translateX(0); filter: drop-shadow(0 0 35px #ef4444); }
  50% { transform: translateX(-10px); filter: drop-shadow(0 0 60px #ffffff); }
  100% { transform: translateX(0); filter: drop-shadow(0 0 35px #ef4444); }
}

@keyframes bossReact {
  0% { transform: scale(1); }
  50% { transform: scale(1.15) rotate(-5deg); }
  100% { transform: scale(1); }
}

@keyframes screenShake {
  0% { transform: translateX(0); }
  25% { transform: translateX(-8px); }
  50% { transform: translateX(8px); }
  75% { transform: translateX(-5px); }
  100% { transform: translateX(0); }
}

@keyframes introFade {
  from { opacity: 0; }
  to { opacity: 1; }
}

@media (max-width: 1000px) {
  .boss-layout {
    grid-template-columns: 1fr;
  }

  .bottom-grid {
    grid-template-columns: 1fr;
  }

  .robot-box {
    position: relative;
    right: auto;
    top: auto;
    margin: 20px auto;
  }

  .title {
    font-size: 38px;
  }

  .boss-title {
    font-size: 48px;
  }
}
`
