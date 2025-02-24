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
      <Link href="/about" legacyBehavior>
        <a style={{ textDecoration: "none", color: "white", fontWeight: "bold" }}>💖 About</a>
      </Link>
      <Link href="/workouts" legacyBehavior>
        <a style={{ textDecoration: "none", color: "white", fontWeight: "bold" }}>🔥 Workouts</a>
      </Link>
      <Link href="/pricing" legacyBehavior>
        <a style={{ textDecoration: "none", color: "white", fontWeight: "bold" }}>💰 Pricing</a>
      </Link>
      <Link href="/contact" legacyBehavior>
        <a style={{ textDecoration: "none", color: "white", fontWeight: "bold" }}>📩 Contact</a>
      </Link>
    </nav>
  );
}
