import Link from "next/link";

export default function Navbar() {
  return (
    <nav style={{ display: "flex", gap: "20px", padding: "10px", background: "#ff4a6e", color: "white", justifyContent: "center" }}>
      <Link href="/" style={{ textDecoration: "none", color: "white" }}>Home</Link>
      <Link href="/about" style={{ textDecoration: "none", color: "white" }}>About</Link>
      <Link href="/pricing" style={{ textDecoration: "none", color: "white" }}>Pricing</Link>
      <Link href="/contact" style={{ textDecoration: "none", color: "white" }}>Contact</Link>
    </nav>
  );
}
