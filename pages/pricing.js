import Navbar from "../components/Navbar";

export default function Pricing() {
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <Navbar />
      <h1>💖 Pricing Plans</h1>
      <p style={{ maxWidth: "600px", margin: "auto", fontSize: "18px", lineHeight: "1.6" }}>
        Explore our affordable and flexible pricing plans tailored to your fitness needs.
      </p>

      <div style={{ display: "flex", justifyContent: "center", gap: "20px", marginTop: "30px", flexWrap: "wrap" }}>
        
        {/* 💪 Basic Plan (Previously Pro) */}
        <div style={{ border: "1px solid #ff4a6e", padding: "20px", borderRadius: "10px", maxWidth: "300px", backgroundColor: "#fff3f8" }}>
          <h2>💪 Basic Plan</h2>
          <p><strong>$10.99 CAD/month</strong></p>
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li>✅ Personalized Weekly Workouts</li>
            <li>✅ Home & Gym Plans</li>
            <li>✅ Email Support</li>
            <li>✅ Direct Messaging Support</li>
          </ul>
        </div>

        {/* 👑 Pro Plan (Previously VIP) */}
        <div style={{ border: "1px solid #ff4a6e", padding: "20px", borderRadius: "10px", maxWidth: "300px", backgroundColor: "#ffd3e0" }}>
          <h2>👑 Pro Plan</h2>
          <p><strong>$20.00 CAD/month</strong></p>
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li>✅ Everything in Basic Plan</li>
            <li>✅ 1-on-1 Virtual Coaching</li>
            <li>✅ Exclusive Workouts</li>
          </ul>
        </div>
        
      </div>

      <p style={{ marginTop: "30px", fontSize: "18px", color: "#ff4a6e" }}>
        💖 Start your journey today! Choose the plan that fits YOU.
      </p>
    </div>
  );
}
