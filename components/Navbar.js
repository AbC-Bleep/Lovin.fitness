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
      <Link href="/" passHref>
        <a style={{ textDecoration: "none", color: "white", fontWeight: "bold" }}>🏠 Home</a>
      </Link>
      <Link href="/about" passHref>
        <a style={{ textDecoration: "none", color: "white", fontWeight: "bold" }}>💖 About</a>
      </Link>
      <Link href="/workouts" passHref>
        <a style={{ textDecoration: "none", color: "white", fontWeight: "bold" }}>🔥 Workouts</a>
      </Link>
      <Link href="/pricing" passHref>
        <a style={{ textDecoration: "none", color: "white", fontWeight: "bold" }}>💰 Pricing</a>
      </Link>
      <Link href="/community" passHref>
        <a style={{ textDecoration: "none", color: "white", fontWeight: "bold" }}>👥 Community</a>
      </Link>
      <Link href="/contact" passHref>
        <a style={{ textDecoration: "none", color: "white", fontWeight: "bold" }}>📩 Contact</a>
      </Link>
    </nav>
  );
}
