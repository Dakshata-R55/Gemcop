import { useState } from "react";
import { services } from "../data/services.js";
import Button from "./Button.jsx";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  company: "",
  service: "",
  message: "",
};

export default function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [notice, setNotice] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    // UI only — connect to an email/backend service later.
    setNotice(
      "This form is a visual placeholder. Submission is not connected to a backend yet.",
    );
  }

  const fieldClass =
    "w-full border-b border-line bg-transparent py-3 text-sm text-paper outline-none transition-colors placeholder:text-muted/70 focus:border-gold";

  return (
    <form onSubmit={handleSubmit} className="grid gap-6" noValidate>
      <div className="grid gap-6 md:grid-cols-2">
        <label className="block">
          <span className="text-[0.7rem] uppercase tracking-[0.18em] text-muted">
            Name
          </span>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            className={fieldClass}
            placeholder="Your name"
            autoComplete="name"
          />
        </label>
        <label className="block">
          <span className="text-[0.7rem] uppercase tracking-[0.18em] text-muted">
            Email
          </span>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className={fieldClass}
            placeholder="you@example.com"
            autoComplete="email"
          />
        </label>
        <label className="block">
          <span className="text-[0.7rem] uppercase tracking-[0.18em] text-muted">
            Phone
          </span>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            className={fieldClass}
            placeholder="Phone number"
            autoComplete="tel"
          />
        </label>
        <label className="block">
          <span className="text-[0.7rem] uppercase tracking-[0.18em] text-muted">
            Company
          </span>
          <input
            name="company"
            value={form.company}
            onChange={handleChange}
            className={fieldClass}
            placeholder="Company name"
            autoComplete="organization"
          />
        </label>
      </div>

      <label className="block">
        <span className="text-[0.7rem] uppercase tracking-[0.18em] text-muted">
          Service
        </span>
        <select
          name="service"
          value={form.service}
          onChange={handleChange}
          className={`${fieldClass} appearance-none rounded-none`}
        >
          <option value="" className="bg-ink">
            Select a service
          </option>
          {services.map((service) => (
            <option key={service.id} value={service.id} className="bg-ink">
              {service.name}
            </option>
          ))}
        </select>
      </label>

      <label className="block">
        <span className="text-[0.7rem] uppercase tracking-[0.18em] text-muted">
          Message
        </span>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={5}
          className={`${fieldClass} resize-y`}
          placeholder="Tell us about the project"
        />
      </label>

      <div>
        <Button type="submit" variant="gold">
          Submit
        </Button>
        {notice ? (
          <p className="mt-4 text-sm text-muted" role="status">
            {notice}
          </p>
        ) : null}
      </div>
    </form>
  );
}
