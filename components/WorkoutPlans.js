import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";

export default function WorkoutPlans() {
  const [form, setForm] = useState({ name: "", goals: "", email: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your submission! We’ll be in touch soon.");
  };

  useEffect(() => {
    if (window.paypal) {
      window.paypal.Buttons({
        createOrder: (data, actions) => {
          return actions.order.create({
            purchase_units: [{ amount: { value: "29.99" } }],
          });
        },
        onApprove: (data, actions) => {
          return actions.order.capture().then((details) => {
            alert("Transaction completed by " + details.payer.name.given_name);
          });
        },
      }).render("#paypal-button-container");
    }
  }, []);

  return (
    <Card>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <Input name="name" placeholder="Your Name" onChange={handleChange} required />
          <Textarea name="goals" placeholder="Your Fitness Goals" onChange={handleChange} required />
          <Input type="email" name="email" placeholder="Your Email" onChange={handleChange} required />
          <Button type="submit">Submit</Button>
        </form>
        <div id="paypal-button-container"></div>
      </CardContent>
    </Card>
  );
}
