import useStore from "../store/useStore"

export default function ProfileModal({ open, onClose }) {
  const { user } = useStore()

  if (!open) return null

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.7)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 9999
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width: "90%",
          maxWidth: "420px",
          background: "#111827",
          borderRadius: "24px",
          padding: "30px",
          border: "1px solid #7c3aed",
          color: "white",
          boxShadow: "0 0 30px rgba(124,58,237,0.5)"
        }}
      >
        <div style={{ textAlign: "center" }}>
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
              margin: "0 auto 20px"
            }}
          >
            {user?.username?.[0]?.toUpperCase() || "U"}
          </div>

          <h2>{user?.username}</h2>
          <p style={{ color: "#9ca3af" }}>
            {user?.email || "No email"}
          </p>
        </div>

        <div
          style={{
            marginTop: 25,
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 15
          }}
        >
          <div
            style={{
              background: "#1f2937",
              padding: 15,
              borderRadius: 14
            }}
          >
            <h3>⚡ XP</h3>
            <p>{user?.xp || 0}</p>
          </div>

          <div
            style={{
              background: "#1f2937",
              padding: 15,
              borderRadius: 14
            }}
          >
            <h3>🏆 Level</h3>
            <p>{user?.level || 1}</p>
          </div>
        </div>

        <button
          onClick={onClose}
          style={{
            marginTop: 25,
            width: "100%",
            padding: "14px",
            borderRadius: 14,
            border: "none",
            background: "#7c3aed",
            color: "white",
            fontWeight: "bold",
            cursor: "pointer"
          }}
        >
          Close
        </button>
      </div>
    </div>
  )
}
