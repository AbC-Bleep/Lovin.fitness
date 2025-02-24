import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

export default function WorkoutPlans() {
  return (
    <Card>
      <CardContent>
        <form action="https://formsubmit.co/dlovinfitness@gmail.com" method="POST">
          <Input name="name" placeholder="Your Name" required />
          <Textarea name="goals" placeholder="Your Fitness Goals" required />
          <Input type="email" name="email" placeholder="Your Email" required />

          {/* Hidden Inputs to Avoid Spam & Customize Responses */}
          <input type="hidden" name="_subject" value="New Workout Plan Request!" />
          <input type="hidden" name="_autoresponse" value="Thank you for reaching out! I'll get back to you soon. 💖" />
          <input type="hidden" name="_captcha" value="false" />

          <Button type="submit">Submit</Button>
        </form>

        <div id="paypal-button-container"></div>
      </CardContent>
    </Card>
  );
}
