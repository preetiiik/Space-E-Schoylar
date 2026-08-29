import { useState, type FormEvent } from "react";
import { MessageCircle, Mail, Phone, CheckCircle2 } from "lucide-react";
import Reveal from "@/components/Reveal";

interface FormState {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const INITIAL_STATE: FormState = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

export default function Contact() {
  const [form, setForm] = useState<FormState>(INITIAL_STATE);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [status, setStatus] = useState<"idle" | "success">("idle");

  const validate = (): boolean => {
    const next: Partial<FormState> = {};
    if (!form.name.trim()) next.name = "Name is required.";
    if (!form.email.trim()) next.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      next.email = "Enter a valid email address.";
    if (!form.phone.trim()) next.phone = "Phone number is required.";
    else if (!/^[0-9+\-\s]{7,15}$/.test(form.phone))
      next.phone = "Enter a valid phone number.";
    if (!form.message.trim()) next.message = "Please add a message.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      setStatus("idle");
      return;
    }
    setStatus("success");
    setForm(INITIAL_STATE);
  };

  const inputClass =
    "w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none transition-colors focus:border-primary/60 focus:ring-2 focus:ring-primary/30";

  return (
    <div className="section-padding mx-auto max-w-6xl">
      <Reveal className="text-center">
        <span className="text-sm font-bold uppercase tracking-widest text-primary">
          Let's talk
        </span>
        <h1 className="mt-3 font-heading text-4xl font-extrabold text-foreground sm:text-5xl">
          Contact <span className="cosmic-text">Us</span>
        </h1>
      </Reveal>

      <div className="mt-14 grid gap-8 lg:grid-cols-5">
        <Reveal className="lg:col-span-2" delay={100}>
          <div className="glass-panel flex h-full flex-col gap-6 p-5 sm:p-8">
            <h2 className="font-heading text-xl font-bold text-foreground">
              Get in touch
            </h2>
            <a
              href="https://wa.me/919606351695"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                <MessageCircle size={18} />
              </span>
              Chat with us on WhatsApp
            </a>
            <div className="flex items-center gap-3 text-sm text-muted-foreground">
  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
    <Phone size={18} />
  </span>

  <div className="flex flex-col gap-1">
    <a
      href="tel:+919606351695"
      className="transition-colors hover:text-primary"
    >
      9606351695
    </a>

    <a
      href="tel:+919731757556"
      className="transition-colors hover:text-primary"
    >
      9731757556
    </a>
  </div>
</div>
            <a
              href="mailto:connect@spaceeschoylar.ngo"
              className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Mail size={18} />
              </span>
              connect@spaceeschoylar.ngo
            </a>
          </div>
        </Reveal>

        <Reveal className="lg:col-span-3" delay={180}>
          <form
            onSubmit={handleSubmit}
            noValidate
            className="glass-panel space-y-5 p-5 sm:p-8"
          >
            {status === "success" && (
              <div className="flex items-center gap-2 rounded-xl border border-primary/30 bg-primary/10 px-4 py-3 text-sm font-semibold text-primary">
                <CheckCircle2 size={18} />
                Thank you! Your message has been sent successfully.
              </div>
            )}

            <div>
              <label className="mb-1.5 block text-sm font-semibold text-foreground">
                Name
              </label>
              <input
                className={inputClass}
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Your name"
              />
              {errors.name && (
                <p className="mt-1.5 text-xs text-destructive">
                  {errors.name}
                </p>
              )}
            </div>

            <div>
              <label className="mb-1.5 block text-sm font-semibold text-foreground">
                Email
              </label>
              <input
                type="email"
                className={inputClass}
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="you@example.com"
              />
              {errors.email && (
                <p className="mt-1.5 text-xs text-destructive">
                  {errors.email}
                </p>
              )}
            </div>

            <div>
              <label className="mb-1.5 block text-sm font-semibold text-foreground">
                Phone
              </label>
              <input
                type="tel"
                className={inputClass}
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                placeholder="+91 00000 00000"
              />
              {errors.phone && (
                <p className="mt-1.5 text-xs text-destructive">
                  {errors.phone}
                </p>
              )}
            </div>

            <div>
              <label className="mb-1.5 block text-sm font-semibold text-foreground">
                Comment/Message
              </label>
              <textarea
                rows={4}
                className={inputClass}
                value={form.message}
                onChange={(e) =>
                  setForm({ ...form, message: e.target.value })
                }
                placeholder="How can we help?"
              />
              {errors.message && (
                <p className="mt-1.5 text-xs text-destructive">
                  {errors.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-3.5 font-bold text-primary-foreground shadow-glow transition-all duration-300 hover:scale-105 hover:shadow-glow-lg"
            >
              Submit
            </button>
          </form>
        </Reveal>
      </div>
    </div>
  );
}
