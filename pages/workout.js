import Navbar from "../components/Navbar";

export default function Workouts() {
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <Navbar />
      <h1>🔥 Workout Programs</h1>
      <p style={{ maxWidth: "600px", margin: "auto", fontSize: "18px", lineHeight: "1.6" }}>
        Find the perfect program to match your fitness goals! Whether you're looking to build muscle, lose weight, or stay active at home, we’ve got you covered. 💪
      </p>

      <div style={{ display: "flex", justifyContent: "center", gap: "20px", marginTop: "30px", flexWrap: "wrap" }}>
        
        {/* 🏋️‍♀️ Strength Training */}
        <div style={{ border: "2px solid #ff4a6e", padding: "20px", borderRadius: "10px", maxWidth: "300px", backgroundColor: "#fff3f8" }}>
          <h2>🏋️‍♀️ Strength Training</h2>
          <p>Build muscle, boost metabolism, and feel stronger than ever.</p>
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li>✅ Full-Body Strength Workouts</li>
            <li>✅ Weight Lifting & Bodyweight Exercises</li>
            <li>✅ Progressive Overload Techniques</li>
          </ul>
          <a href="/pricing" style={{ display: "block", marginTop: "10px", background: "#ff4a6e", color: "white", padding: "10px", borderRadius: "5px", textDecoration: "none" }}>
            Get Started
          </a>
        </div>

        {/* 🔥 Fat Loss & Toning */}
        <div style={{ border: "2px solid #ff4a6e", padding: "20px", borderRadius: "10px", maxWidth: "300px", backgroundColor: "#ffe3ed" }}>
          <h2>🔥 Fat Loss & Toning</h2>
          <p>High-energy workouts designed to burn fat and sculpt your body.</p>
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li>✅ HIIT & Cardio Sessions</li>
            <li>✅ Core & Full-Body Toning</li>
            <li>✅ Workouts for All Fitness Levels</li>
          </ul>
          <a href="/pricing" style={{ display: "block", marginTop: "10px", background: "#ff4a6e", color: "white", padding: "10px", borderRadius: "5px", textDecoration: "none" }}>
            Get Started
          </a>
        </div>

        {/* 🏠 Home Workouts */}
        <div style={{ border: "2px solid #ff4a6e", padding: "20px", borderRadius: "10px", maxWidth: "300px", backgroundColor: "#ffd3e0" }}>
          <h2>🏠 Home Workouts</h2>
          <p>Stay fit from the comfort of your home—no gym required!</p>
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li>✅ Equipment-Free & Minimal Equipment Options</li>
            <li>✅ Short & Effective Workouts</li>
            <li>✅ Customizable to Your Space</li>
          </ul>
          <a href="/pricing" style={{ display: "block", marginTop: "10px", background: "#ff4a6e", color: "white", padding: "10px", borderRadius: "5px", textDecoration: "none" }}>
            Get Started
          </a>
        </div>

      </div>

      <p style={{ marginTop: "30px", fontSize: "18px", color: "#ff4a6e" }}>
        💖 No matter where you are in your fitness journey, there’s a program for you!
      </p>
    </div>
  );
}
