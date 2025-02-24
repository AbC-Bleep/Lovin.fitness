import Link from "next/link";

export default function Navbar() {
  return (
    <nav style={{ 
      display: "flex", 
      gap: "20px", 
      padding: "15px", 
      background: "#ff4a6e", 
      color: "white", 
      justifyContent: "center", 
      flexWrap: "wrap"
    }}>
      <Link href="/" style={{ textDecoration: "none", color: "white", fontWeight: "bold" }}>🏠 Home</Link>
      <Link href="/about" style={{ textDecoration: "none", color: "white", fontWeight: "bold" }}>💖 About</Link>
      <Link href="/workouts" style={{ textDecoration: "none", color: "white", fontWeight: "bold" }}>🔥 Workouts</Link>
      <Link href="/pricing" style={{ textDecoration: "none", color: "white", fontWeight: "bold" }}>💰 Pricing</Link>
      <Link href="/community" style={{ textDecoration: "none", color: "white", fontWeight: "bold" }}>👥 Community</Link>
      <Link href="/contact" style={{ textDecoration: "none", color: "white", fontWeight: "bold" }}>📩 Contact</Link>
    </nav>
  );
}
