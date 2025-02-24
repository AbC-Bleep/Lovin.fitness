import Image from "next/image";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      {/* ✅ Display the image */}
      <Image 
        src="/lovin-fitness.jpg"  // The image is inside the /public folder
        alt="Lovin Fitness Logo" 
        width={500} 
        height={200} 
        style={{ maxWidth: "100%", height: "auto" }}
      />

      {/* ✅ Add the Navbar */}
      <Navbar />

      <h1>Welcome to Lovin Fitness 💖</h1>
      <p>Building Stronger Women - Your personalized fitness journey starts here!</p>
    </div>
  );
}
