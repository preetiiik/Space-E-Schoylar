import { useState, type FormEvent } from "react";
import { Mail, Phone, CheckCircle2, X } from "lucide-react";
import Reveal from "@/components/Reveal";

function WhatsAppIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.71.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12.002 2.002c-5.514 0-9.998 4.484-9.998 9.998 0 1.763.462 3.489 1.34 5.006L2 22l5.117-1.34a9.96 9.96 0 0 0 4.885 1.34h.001c5.514 0 9.997-4.484 9.997-9.998 0-2.67-1.04-5.18-2.928-7.07a9.93 9.93 0 0 0-7.07-2.93zm0 18.166h-.001a8.16 8.16 0 0 1-4.157-1.14l-.298-.177-3.037.796.811-2.96-.194-.304a8.15 8.15 0 0 1-1.25-4.365c0-4.509 3.669-8.178 8.13-8.178a8.09 8.09 0 0 1 5.75 2.383 8.09 8.09 0 0 1 2.38 5.752c0 4.509-3.67 8.193-8.134 8.193z" />
    </svg>
  );
}

interface FormState {
  name: string;
  email: string;
  location: string;
  phone: string;
  message: string;
}

const INITIAL_STATE: FormState = {
  name: "",
  email: "",
  location: "",
  phone: "",
  message: "",
};

export default function Contact() {
  const [form, setForm] = useState<FormState>(INITIAL_STATE);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [status, setStatus] = useState<"idle" | "success">("idle");
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = (): boolean => {
    const next: Partial<FormState> = {};

    // Name
    if (!form.name.trim()) {
      next.name = "Name is required.";
    } else if (!/^[A-Za-z\s]+$/.test(form.name.trim())) {
      next.name = "Name should contain only letters and spaces.";
    }

    // Email
    if (!form.email.trim()) {
      next.email = "Email is required.";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())
    ) {
      next.email = "Enter a valid email address.";
    }

    // Location
    if (!form.location.trim()) {
      next.location = "Location is required.";
    }

    // Phone
    if (!form.phone.trim()) {
      next.phone = "Phone number is required.";
    } else if (!/^\d{10}$/.test(form.phone.trim())) {
      next.phone = "Phone number must contain exactly 10 digits.";
    }

    // Message
    if (!form.message.trim()) {
      next.message = "Please add a message.";
    }

    setErrors(next);

    return Object.keys(next).length === 0;
  };

  // const handleSubmit = async (e: FormEvent) => {
  //   e.preventDefault();

  //   if (!validate()) {
  //     setStatus("idle");
  //     return;
  //   }

  //   try {
  //     setIsSubmitting(true);
  //     setStatus("idle");

  //     // Send form data to the Express backend
  //     const response = await fetch("/api/contact", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         name: form.name.trim(),
  //         email: form.email.trim(),
  //         location: form.location.trim(),
  //         phone: form.phone.trim(),
  //         message: form.message.trim(),
  //       }),
  //     });

  //     const data = await response.json();

  //     if (!response.ok) {
  //       throw new Error(
  //         data.message || "Failed to send inquiry."
  //       );
  //     }

  //     // SUCCESS
  //     setStatus("success");

  //     // Show success popup
  //     setShowSuccessPopup(true);

  //     // Clear form
  //     setForm(INITIAL_STATE);

  //     // Clear validation errors
  //     setErrors({});
  //   } catch (error) {
  //     console.error("Contact form error:", error);

  //     const message =
  //       error instanceof Error
  //         ? error.message
  //         : "Unable to send your inquiry. Please try again later.";

  //     alert(message);
  //   } finally {
  //     setIsSubmitting(false);
  //   }
  // };

const handleSubmit = async (e: FormEvent) => {
  e.preventDefault();

  if (!validate()) {
    setStatus("idle");
    return;
  }

  try {
    setIsSubmitting(true);
    setStatus("idle");

    const response = await fetch("/api/contact.ts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: form.name.trim(),
        email: form.email.trim(),
        location: form.location.trim(),
        phone: form.phone.trim(),
        message: form.message.trim(),
      }),
    });

    // Read response as text first
    // This prevents "Unexpected end of JSON input"
    const responseText = await response.text();

    let data: {
      success?: boolean;
      message?: string;
    } = {};

    if (responseText) {
      try {
        data = JSON.parse(responseText);
      } catch {
        console.error("Server returned non-JSON response:", responseText);
      }
    }

    if (!response.ok) {
      throw new Error(
        data.message ||
          `Server error (${response.status}). Please try again later.`
      );
    }

    if (data.success !== true) {
      throw new Error(
        data.message || "Unable to send your inquiry."
      );
    }

    // SUCCESS
    setStatus("success");
    setShowSuccessPopup(true);

    // Clear form
    setForm(INITIAL_STATE);

    // Clear validation errors
    setErrors({});
  } catch (error) {
    console.error("Contact form error:", error);

    const message =
      error instanceof Error
        ? error.message
        : "Unable to send your inquiry. Please try again later.";

    alert(message);
  } finally {
    setIsSubmitting(false);
  }
};

  const inputClass =
    "w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none transition-colors focus:border-primary/60 focus:ring-2 focus:ring-primary/30";

  return (
    <>
      <div className="section-padding mx-auto max-w-6xl">

        {/* =========================
            PAGE HEADING
        ========================== */}

        <Reveal className="text-center">
          <span className="text-sm font-bold uppercase tracking-widest text-primary">
            Let's talk
          </span>

          <h1 className="mt-3 font-heading text-4xl font-extrabold text-foreground sm:text-5xl">
            Contact <span className="cosmic-text">Us</span>
          </h1>
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-5">

          {/* =========================
              CONTACT INFORMATION
          ========================== */}

          <Reveal
            className="lg:col-span-2"
            delay={100}
          >
            <div className="glass-panel flex h-full flex-col gap-6 p-5 sm:p-8">

              <h2 className="font-heading text-xl font-bold text-foreground">
                Get in touch
              </h2>

              {/* WhatsApp */}

              <a
                href="https://wa.me/919606351695"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <WhatsAppIcon size={18} />
                </span>

                Chat with us on WhatsApp
              </a>

              {/* Phone */}

              <div className="flex items-center gap-3 text-sm text-muted-foreground">

                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Phone size={18} />
                </span>

                <div className="flex flex-col gap-1">

                  <a
                    href="tel:+919606351695"
                    className="transition-colors hover:text-primary"
                  >
                    +91 9606351695
                  </a>

                  <a
                    href="tel:+919731757556"
                    className="transition-colors hover:text-primary"
                  >
                    +91 9731757556
                  </a>

                </div>
              </div>

              {/* Email */}

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

          {/* =========================
              CONTACT FORM
          ========================== */}

          <Reveal
            className="lg:col-span-3"
            delay={180}
          >
            <form
              onSubmit={handleSubmit}
              noValidate
              className="glass-panel space-y-5 p-5 sm:p-8"
            >

              {/* Name */}

              <div>
                <label className="mb-1.5 block text-sm font-semibold text-foreground">
                  Name
                </label>

                <input
                  className={inputClass}
                  value={form.name}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      name: e.target.value,
                    })
                  }
                  placeholder="Your name"
                />

                {errors.name && (
                  <p className="mt-1.5 text-xs text-destructive">
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Email */}

              <div>
                <label className="mb-1.5 block text-sm font-semibold text-foreground">
                  Email
                </label>

                <input
                  type="email"
                  className={inputClass}
                  value={form.email}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      email: e.target.value,
                    })
                  }
                  placeholder="you@example.com"
                />

                {errors.email && (
                  <p className="mt-1.5 text-xs text-destructive">
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Location */}

              <div>
                <label className="mb-1.5 block text-sm font-semibold text-foreground">
                  Location
                </label>

                <input
                  className={inputClass}
                  value={form.location}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      location: e.target.value,
                    })
                  }
                  placeholder="City, State"
                />

                {errors.location && (
                  <p className="mt-1.5 text-xs text-destructive">
                    {errors.location}
                  </p>
                )}
              </div>

              {/* Phone */}

              <div>
                <label className="mb-1.5 block text-sm font-semibold text-foreground">
                  Phone
                </label>

                <input
                  type="tel"
                  inputMode="numeric"
                  maxLength={10}
                  className={inputClass}
                  value={form.phone}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      phone: e.target.value
                        .replace(/\D/g, "")
                        .slice(0, 10),
                    })
                  }
                  placeholder="Enter 10-digit phone number"
                />

                {errors.phone && (
                  <p className="mt-1.5 text-xs text-destructive">
                    {errors.phone}
                  </p>
                )}
              </div>

              {/* Message */}

              <div>
                <label className="mb-1.5 block text-sm font-semibold text-foreground">
                  Comment/Message
                </label>

                <textarea
                  rows={4}
                  className={inputClass}
                  value={form.message}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      message: e.target.value,
                    })
                  }
                  placeholder="How can we help?"
                />

                {errors.message && (
                  <p className="mt-1.5 text-xs text-destructive">
                    {errors.message}
                  </p>
                )}
              </div>

              {/* Submit */}

              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-3.5 font-bold text-primary-foreground shadow-glow transition-all duration-300 hover:scale-105 hover:shadow-glow-lg disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSubmitting
                  ? "Sending..."
                  : status === "success"
                  ? "Sent"
                  : "Submit"}
              </button>

            </form>
          </Reveal>

        </div>
      </div>

      {/* =========================================
          SUCCESS POPUP
      ========================================== */}

      {showSuccessPopup && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/75 p-5 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="contact-success-title"
        >

          <div className="relative w-full max-w-md rounded-2xl border border-white/15 bg-background p-8 text-center shadow-2xl">

            {/* Close */}

            <button
              type="button"
              onClick={() =>
                setShowSuccessPopup(false)
              }
              className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-white/10 hover:text-foreground"
              aria-label="Close"
            >
              <X size={20} />
            </button>

            {/* Icon */}

            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full border-2 border-primary/60 bg-primary/10 text-primary">
              <CheckCircle2 size={34} />
            </div>

            {/* Heading */}

            <h2
              id="contact-success-title"
              className="font-heading text-2xl font-bold text-foreground"
            >
              Message Sent Successfully
            </h2>

            {/* Message */}

            <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-muted-foreground">
              Thank you for contacting us. Your inquiry
              has been received successfully. Our team
              will get back to you shortly.
            </p>

            {/* OK */}

            <button
              type="button"
              onClick={() =>
                setShowSuccessPopup(false)
              }
              className="mt-6 rounded-full bg-primary px-8 py-3 font-bold text-primary-foreground shadow-glow transition-all duration-300 hover:scale-105"
            >
              OK
            </button>

          </div>

        </div>
      )}
    </>
  );
}