import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import Image from "next/image";
import Script from "next/script";
import logo from "./public/logo.png";

export default function WorkoutPlans() {
  const [form, setForm] = useState({ name: "", goals: "", email: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your submission! We'll be in touch soon.");
  };

  useEffect(() => {
    if (window.paypal) {
      window.paypal.Buttons({
        createOrder: (data, actions) => {
          return actions.order.create({
            purchase_units: [{ amount: { value: "29.99" } }]
          });
        },
        onApprove: (data, actions) => {
          return actions.order.capture().then(details => {
            alert(`Transaction completed by ${details.payer.name.given_name}`);
          });
        }
      }).render("#paypal-button-container");
    }
  }, []);

  return (
    <div className="min-h-screen bg-pink-100 p-6 flex flex-col items-center">
      <Image src={logo} alt="Lovin Fitness Logo" width={150} height={150} className="mb-4" />
      <motion.h1 className="text-3xl font-bold mb-6 text-pink-700" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        Lovin Fitness - Building Stronger Women
      </motion.h1>
      <Card className="w-full max-w-md p-6 bg-pink-200 shadow-lg rounded-2xl">
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input type="text" name="name" placeholder="Your Name" value={form.name} onChange={handleChange} required className="bg-pink-50" />
            <Textarea name="goals" placeholder="Your Fitness Goals" value={form.goals} onChange={handleChange} required className="bg-pink-50" />
            <Input type="email" name="email" placeholder="Your Email" value={form.email} onChange={handleChange} required className="bg-pink-50" />
            <Button type="submit" className="w-full bg-pink-500 hover:bg-pink-600 text-white">Get Your Plan</Button>
          </form>
        </CardContent>
      </Card>
      <div className="mt-8 text-center">
        <h2 className="text-xl font-semibold text-pink-700">Why Choose Lovin Fitness?</h2>
        <p className="text-pink-600">Customized workouts tailored to your fitness goals and lifestyle.</p>
        <p className="text-pink-600">Expert guidance from certified trainer Denisa Lovin.</p>
        <p className="text-pink-600">Flexible and easy-to-follow plans.</p>
      </div>
      <div className="mt-8 text-center">
        <h2 className="text-xl font-semibold text-pink-700">Purchase Your Workout Plan</h2>
        <p className="text-pink-600">Get access to premium workout plans and coaching.</p>
        <div id="paypal-button-container" className="mt-4"></div>
      </div>
      <Script src="https://www.paypal.com/sdk/js?client-id=YOUR_PAYPAL_CLIENT_ID" onLoad={() => {
        if (window.paypal) {
          window.paypal.Buttons({
            createOrder: (data, actions) => {
              return actions.order.create({
                purchase_units: [{ amount: { value: "29.99" } }]
              });
            },
            onApprove: (data, actions) => {
              return actions.order.capture().then(details => {
                alert(`Transaction completed by ${details.payer.name.given_name}`);
              });
            }
          }).render("#paypal-button-container");
        }
      }} />
    </div>
  );
}
