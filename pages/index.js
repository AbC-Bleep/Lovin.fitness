import Navbar from "../components/Navbar";
import WorkoutPlans from "../components/WorkoutPlans";

export default function Home() {
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      {/* Add the Image Here */}
      <img src="/lovin-fitness.jpg" alt="Lovin Fitness Logo" 
           style={{ width: "100%", maxWidth: "600px", margin: "20px auto", display: "block" }} />

      <Navbar />
      <h1>Welcome to Lovin Fitness</h1>
      <p>Building Stronger Women - Your personalized workout journey starts here!</p>
      <WorkoutPlans />
    </div>
  );
}
