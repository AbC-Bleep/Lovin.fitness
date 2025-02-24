import { useState, useEffect } from "react";

// ✅ Define missing components here directly (or move them to a `components/ui/` folder)
export function Card({ children }) {
  return <div style={{ border: "1px solid #ddd", padding: "16px", borderRadius: "8px", maxWidth: "400px", margin: "auto" }}>{children}</div>;
}

export function CardContent({ children }) {
  return <div style={{ marginTop: "10px" }}>{children}</div>;
}

export function Button({ children, type = "button", onClick }) {
  return (
    <button type={type} onClick={onClick} style={{ padding: "10px", marginTop: "10px", background: "#ff0080", color: "#fff", border: "none", borderRadius: "5px", cursor: "pointer" }}>
      {children}
    </button>
  );
}

export function Input({ name, placeholder, type = "text", onChange, required }) {
  return (
    <input name={name} type={type} placeholder={placeholder} onChange={onChange} required={required} style={{ display: "block", width: "100%", padding: "8px", marginBottom: "10px", border: "1px solid #ccc", borderRadius: "5px" }} />
  );
}

export function Textarea({ name, placeholder, onChange, required }) {
  return (
    <textarea name={name} placeholder={placeholder} onChange={onChange} required={required} style={{ display: "block", width: "100%", padding: "8px", height: "100px", border: "1px solid #ccc", borderRadius: "5px" }} />
  );
}

// ✅ Main WorkoutPlans Component
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
      window.paypal
        .Buttons({
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
        })
        .render("#paypal-button-container");
    }
  }, []);

  return (
    <Card>
      <CardContent>
        <h2 style={{ textAlign: "center", color: "#ff0080" }}>Workout Plans</h2>
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
