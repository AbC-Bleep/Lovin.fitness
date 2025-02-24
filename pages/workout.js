import React from 'react';
import Navbar from "../../components/Navbar";
import Link from "next/link";

const WorkoutProgram = ({ title, description, features, backgroundColor, borderColor }) => {
  return (
    <div style={{ border: `2px solid ${borderColor}`, padding: "20px", borderRadius: "10px", maxWidth: "300px", backgroundColor }}>
      <h2>{title}</h2>
      <p>{description}</p>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
      <Link href="/pricing" passHref>
        <a style={{ display: "block", marginTop: "10px", background: borderColor, color: "white", padding: "10px", borderRadius: "5px", textDecoration: "none" }}>
          Get Started
        </a>
      </Link>
    </div>
  );
};

const Workouts = () => {
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <Navbar />
      <h1>🔥 Workout Programs</h1>
      <p style={{ maxWidth: "600px", margin: "auto", fontSize: "18px", lineHeight: "1.6" }}>
        Find the perfect program to match your fitness goals! Whether you're looking to build muscle, lose weight, or stay active at home, we’ve got you covered. 💪
      </p>

      <div style={{ display: "flex", justifyContent: "center", gap: "20px", marginTop: "30px", flexWrap: "wrap" }}>
        
        {/* 🏋️‍♀️ Strength Training */}
        <WorkoutProgram
          title="🏋️‍♀️ Strength Training"
          description="Build muscle, boost metabolism, and feel stronger than ever."
          features={[
            "✅ Full-Body Strength Workouts",
            "✅ Weight Lifting & Bodyweight Exercises",
            "✅ Progressive Overload Techniques"
          ]}
          backgroundColor="#fff3f8"
          borderColor="#ff4a6e"
        />

        {/* 🔥 Fat Loss & Toning */}
        <WorkoutProgram
          title="🔥 Fat Loss & Toning"
          description="High-energy workouts designed to burn fat and sculpt your body."
          features={[
            "✅ HIIT & Cardio Sessions",
            "✅ Core & Full-Body Toning",
            "✅ Workouts for All Fitness Levels"
          ]}
          backgroundColor="#ffe3ed"
          borderColor="#ff4a6e"
        />

        {/* 🏠 Home Workouts */}
        <WorkoutProgram
          title="🏠 Home Workouts"
          description="Stay fit from the comfort of your home—no gym required!"
          features={[
            "✅ Equipment-Free & Minimal Equipment Options",
            "✅ Short & Effective Workouts",
            "✅ Customizable to Your Space"
          ]}
          backgroundColor="#ffd3e0"
          borderColor="#ff4a6e"
        />

      </div>

      <p style={{ marginTop: "30px", fontSize: "18px", color: "#ff4a6e" }}>
        💖 No matter where you are in your fitness journey, there’s a program for you!
      </p>
    </div>
  );
};

export default Workouts;
