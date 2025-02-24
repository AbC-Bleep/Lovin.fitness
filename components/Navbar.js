import Link from "next/link";

export default function Navbar() {
  return (
    <nav style={{ display: "flex", gap: "20px", padding: "10px", background: "#ff4a6e", color: "white", justifyContent: "center" }}>
      <Link href="/" passHref>
        <span style={{ textDecoration: "none", color: "white", cursor: "pointer" }}>Home</span>
      </Link>
      <Link href="/about" passHref>
        <span style={{ textDecoration: "none", color: "white", cursor: "pointer" }}>About</span>
      </Link>
      <Link href="/pricing" passHref>
        <span style={{ textDecoration: "none", color: "white", cursor: "pointer" }}>Pricing</span>
      </Link>
      <Link href="/contact" passHref>
        <span style={{ textDecoration: "none", color: "white", cursor: "pointer" }}>Contact</span>
      </Link>
    </nav>
  );
}
