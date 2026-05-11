import useStore from "../store/useStore"

export default function ProfileModal({ open, onClose }) {
  const { user } = useStore()

  return (
    <>
      <div
        onClick={onClose}
        style={{
          position: "fixed",
          inset: 0,
          background: open ? "rgba(0,0,0,0.55)" : "rgba(0,0,0,0)",
          opacity: open ? 1 : 0,
          pointerEvents: open ? "auto" : "none",
          transition: "0.3s ease",
          zIndex: 9998,
        }}
      />

      <div
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          height: "100vh",
          width: "360px",
          maxWidth: "90vw",
          background: "#111827",
          color: "white",
          zIndex: 9999,
          padding: "28px",
          borderLeft: "1px solid #7c3aed",
          boxShadow: "-10px 0 40px rgba(124,58,237,0.35)",
          transform: open ? "translateX(0)" : "translateX(110%)",
          transition: "transform 0.35s ease",
          overflowY: "auto",
        }}
      >
        <button
          onClick={onClose}
          style={{
            float: "right",
            background: "transparent",
            border: "none",
            color: "white",
            fontSize: 24,
            cursor: "pointer",
          }}
        >
          ×
        </button>

        <div style={{ textAlign: "center", marginTop: 35 }}>
          <div
            style={{
              width: 90,
              height: 90,
              borderRadius: "50%",
              background: "linear-gradient(135deg,#8b5cf6,#ec4899)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 36,
              fontWeight: "bold",
              margin: "0 auto 18px",
            }}
          >
            {user?.username?.[0]?.toUpperCase() || "U"}
          </div>

          <h2>{user?.username || "User"}</h2>
          <p style={{ color: "#9ca3af" }}>{user?.email || "No email"}</p>
        </div>

        <div style={{ marginTop: 28, display: "grid", gap: 14 }}>
          <div style={boxStyle}>
            <h3>⚡ XP</h3>
            <p>{user?.xp || user?.total_xp || 0}</p>
          </div>

          <div style={boxStyle}>
            <h3>🏆 Level</h3>
            <p>{user?.level || 1}</p>
          </div>

          <div style={boxStyle}>
            <h3>🎯 Rank</h3>
            <p>Beginner Coder</p>
          </div>
        </div>

        <button
          onClick={onClose}
          style={{
            marginTop: 28,
            width: "100%",
            padding: "14px",
            borderRadius: 14,
            border: "none",
            background: "#7c3aed",
            color: "white",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          Close
        </button>
      </div>
    </>
  )
}

const boxStyle = {
  background: "#1f2937",
  padding: 16,
  borderRadius: 14,
  border: "1px solid rgba(124,58,237,0.25)",
}
