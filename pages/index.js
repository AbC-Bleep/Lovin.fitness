import Navbar from "../components/Navbar"; 
import WorkoutPlans from "../components/WorkoutPlans"; 

export default function Home() {
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <Navbar />
      <h1>Welcome to Lovin Fitness</h1>
      <p>Building Stronger Women - Your personalized workout journey starts here!</p>
      <WorkoutPlans />
    </div>
  );
}
