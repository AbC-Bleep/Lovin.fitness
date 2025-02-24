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
      <Link href="/about">
        <span style={{ textDecoration: "none", color: "white", fontWeight: "bold", cursor: "pointer" }}>💖 About</span>
      </Link>
      <Link href="/workouts">
        <span style={{ textDecoration: "none", color: "white", fontWeight: "bold", cursor: "pointer" }}>🔥 Workouts</span>
      </Link>
      <Link href="/pricing">
        <span style={{ textDecoration: "none", color: "white", fontWeight: "bold", cursor: "pointer" }}>💰 Pricing</span>
      </Link>
      <Link href="/contact">
        <span style={{ textDecoration: "none", color: "white", fontWeight: "bold", cursor: "pointer" }}>📩 Contact</span>
      </Link>
    </nav>
  );
}
