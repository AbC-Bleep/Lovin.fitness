export function Button({ children, type = "button", onClick }) {
  return (
    <button type={type} onClick={onClick} style={{ padding: "10px", background: "#ff4a6e", color: "#fff", border: "none", cursor: "pointer" }}>
      {children}
    </button>
  );
}
5️⃣ components/ui/card.js
