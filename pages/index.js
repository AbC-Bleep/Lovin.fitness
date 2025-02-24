import Head from 'next/head';
import WorkoutPlans from '../components/WorkoutPlans';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Lovin Fitness</title>
        <meta name="description" content="Personalized Workout Plans" />
      </Head>
      <h1>Welcome to Lovin Fitness</h1>
      <p>Building Stronger Women - Your personalized workout journey starts here!</p>
      <WorkoutPlans />
    </div>
  );
}
