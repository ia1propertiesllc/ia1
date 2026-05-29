"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Phone, Mail, Clock, MapPin, AlertTriangle } from "lucide-react";

// Brand icons (lucide-react no longer ships these for trademark reasons)
function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.336 3.608 1.311.975.975 1.249 2.242 1.311 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.336 2.633-1.311 3.608-.975.975-2.242 1.249-3.608 1.311-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.336-3.608-1.311-.975-.975-1.249-2.242-1.311-3.608C2.175 15.747 2.163 15.367 2.163 12s.012-3.584.07-4.85c.062-1.366.336-2.633 1.311-3.608.975-.975 2.242-1.249 3.608-1.311C8.416 2.175 8.796 2.163 12 2.163zm0 1.802c-3.141 0-3.504.011-4.738.067-.969.044-1.495.205-1.846.343-.464.18-.795.395-1.144.744-.349.349-.564.68-.744 1.144-.138.351-.299.877-.343 1.846-.056 1.234-.067 1.597-.067 4.738s.011 3.504.067 4.738c.044.969.205 1.495.343 1.846.18.464.395.795.744 1.144.349.349.68.564 1.144.744.351.138.877.299 1.846.343 1.234.056 1.597.067 4.738.067s3.504-.011 4.738-.067c.969-.044 1.495-.205 1.846-.343.464-.18.795-.395 1.144-.744.349-.349.564-.68.744-1.144.138-.351.299-.877.343-1.846.056-1.234.067-1.597.067-4.738s-.011-3.504-.067-4.738c-.044-.969-.205-1.495-.343-1.846-.18-.464-.395-.795-.744-1.144-.349-.349-.68-.564-1.144-.744-.351-.138-.877-.299-1.846-.343-1.234-.056-1.597-.067-4.738-.067zM12 6.865a5.135 5.135 0 100 10.27 5.135 5.135 0 000-10.27zm0 8.468a3.333 3.333 0 110-6.666 3.333 3.333 0 010 6.666zm6.538-8.671a1.2 1.2 0 11-2.4 0 1.2 1.2 0 012.4 0z" />
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.412c0-3.025 1.792-4.696 4.533-4.696 1.312 0 2.686.235 2.686.235v2.97h-1.514c-1.49 0-1.955.93-1.955 1.886v2.265h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z" />
    </svg>
  );
}
import { Forminit } from "forminit";

const FORM_ID = "jemj8f49y9s";

const contactInfo = [
  {
    icon: Phone,
    label: "Call Us",
    value: "336-365-5389",
    href: "tel:+13363655389",
  },
  {
    icon: Mail,
    label: "Email Us",
    value: "ia1propertiesinc@gmail.com",
    href: "mailto:ia1propertiesinc@gmail.com",
  },
  {
    icon: MapPin,
    label: "Service Area",
    value: "North Carolina — Triad & beyond",
    href: "#",
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Mon-Fri 7AM-6PM, Sat 8AM-2PM",
    href: "#",
  },
];

const socialLinks = [
  {
    icon: InstagramIcon,
    label: "Instagram",
    href: "https://www.instagram.com/ia1construction?utm_source=qr",
  },
  {
    icon: FacebookIcon,
    label: "Facebook",
    href: "https://www.facebook.com/share/1cndT7iqPB/?mibextid=wwXIfr",
  },
];

/** Normalize any US phone input to E.164 (+1XXXXXXXXXX).
 *  Returns null if the number can't be resolved to a valid US number. */
function toE164(raw: string): string | null {
  const digits = raw.replace(/\D/g, "");
  if (digits.length === 10) return `+1${digits}`;
  if (digits.length === 11 && digits.startsWith("1")) return `+${digits}`;
  if (digits.length === 0) return ""; // optional field left blank
  return null; // invalid
}

function validateEmail(email: string): string | null {
  if (!email) return "Email is required.";
  const ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  return ok ? null : "Please enter a valid email address.";
}

function validatePhone(raw: string): string | null {
  if (!raw.trim()) return "Phone number is required.";
  const result = toE164(raw);
  if (result === null)
    return "Enter a 10-digit US number, e.g. (336) 365-5389.";
  return null;
}

const inputBase =
  "w-full rounded-lg border bg-white px-4 py-3 text-black placeholder:text-slate-400 transition-colors focus:ring-2 focus:outline-none";
const inputNormal = `${inputBase} border-slate-300 focus:border-sky-500 focus:ring-sky-500/20`;
const inputError = `${inputBase} border-red-400 focus:border-red-500 focus:ring-red-500/20`;

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errors, setErrors] = useState<{ email?: string; phone?: string }>({});

  function validate(form: HTMLFormElement): boolean {
    const email = (form.elements.namedItem("fi-sender-email") as HTMLInputElement).value;
    const phone = (form.elements.namedItem("fi-sender-phone") as HTMLInputElement).value;
    const newErrors: { email?: string; phone?: string } = {};

    const emailErr = validateEmail(email);
    if (emailErr) newErrors.email = emailErr;

    const phoneErr = validatePhone(phone);
    if (phoneErr) newErrors.phone = phoneErr;

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;

    if (!validate(form)) return;

    setStatus("loading");

    // Normalize phone to E.164 before handing off to Forminit
    const formData = new FormData(form);
    const rawPhone = formData.get("fi-sender-phone") as string;
    const e164 = toE164(rawPhone);
    if (e164) formData.set("fi-sender-phone", e164);

    const forminit = new Forminit({ proxyUrl: "/api/forminit" });

    try {
      const { error } = await forminit.submit(FORM_ID, formData);
      if (error) {
        setStatus("error");
        return;
      }
      setStatus("success");
      form.reset();
      setErrors({});
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="py-24 bg-slate-50 lg:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="mb-4 inline-block rounded-full bg-sky-100 px-4 py-1.5 text-sm font-semibold text-sky-700">
              Get Started
            </span>
            <h2 className="mb-4 text-4xl font-black tracking-tight text-black sm:text-5xl">
              Ready to <span className="text-sky-500">Build?</span>
            </h2>
            <p className="text-lg text-slate-600">
              We also have prime parcels available across the Triad—reach out to
              inquire about lots and we&apos;ll handle the build. Get a
              no-obligation estimate, and we&apos;ll respond within 24 hours.
            </p>
          </motion.div>
        </div>

        <div className="grid gap-12 lg:grid-cols-5">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6 lg:col-span-2"
          >
            {contactInfo.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="flex items-start gap-4 rounded-xl border border-slate-200 bg-white p-5 transition-all hover:border-sky-200 hover:shadow-lg hover:shadow-sky-500/5"
              >
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-sky-50">
                  <item.icon className="h-6 w-6 text-sky-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-500">{item.label}</p>
                  <p className="text-base font-semibold text-black">{item.value}</p>
                </div>
              </a>
            ))}

            {/* Social */}
            <div className="rounded-xl border border-slate-200 bg-white p-5">
              <p className="mb-3 text-sm font-medium text-slate-500">Follow Us</p>
              <div className="flex gap-3">
                {socialLinks.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="flex h-11 w-11 items-center justify-center rounded-lg bg-sky-50 text-sky-600 transition-all hover:bg-sky-500 hover:text-white"
                  >
                    <s.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            {status === "success" ? (
              <div className="flex h-full flex-col items-center justify-center rounded-2xl border border-slate-200 bg-white p-12 text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-sky-100">
                  <Send className="h-8 w-8 text-sky-600" />
                </div>
                <h3 className="mb-2 text-2xl font-bold text-black">Thank You!</h3>
                <p className="text-slate-600">
                  We&apos;ve received your request. Our team will contact you
                  within 24 hours with a detailed estimate.
                </p>
              </div>
            ) : status === "error" ? (
              <div className="flex h-full flex-col items-center justify-center rounded-2xl border border-slate-200 bg-white p-12 text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-red-100">
                  <AlertTriangle className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="mb-2 text-2xl font-bold text-black">
                  Something went wrong
                </h3>
                <p className="mb-6 text-slate-600">
                  We couldn&apos;t send your message right now. Please try again
                  later, or reach us directly at{" "}
                  <a
                    href="tel:+13363655389"
                    className="font-semibold text-sky-600 hover:underline"
                  >
                    336-365-5389
                  </a>
                  .
                </p>
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="rounded-xl bg-sky-500 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-sky-500/25 transition-all hover:bg-sky-600 hover:-translate-y-0.5"
                >
                  Try Again
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10"
              >
                <div className="grid gap-6 sm:grid-cols-2">
                  {/* Full Name */}
                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="fi-sender-fullName"
                      required
                      placeholder="John Smith"
                      className={inputNormal}
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="fi-sender-email"
                      required
                      placeholder="john@example.com"
                      onChange={() => errors.email && setErrors((e) => ({ ...e, email: undefined }))}
                      className={errors.email ? inputError : inputNormal}
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-red-600">{errors.email}</p>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="fi-sender-phone"
                      required
                      placeholder="(336) 365-5389"
                      onChange={() => errors.phone && setErrors((e) => ({ ...e, phone: undefined }))}
                      className={errors.phone ? inputError : inputNormal}
                    />
                    {errors.phone && (
                      <p className="mt-1 text-xs text-red-600">{errors.phone}</p>
                    )}
                  </div>

                  {/* Service */}
                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700">
                      Service Needed *
                    </label>
                    <select
                      name="fi-select-service"
                      required
                      defaultValue=""
                      className={inputNormal}
                    >
                      <option value="" disabled>Select a service</option>
                      <option value="residential">Residential Construction</option>
                      <option value="renovation">Renovation & Remodeling</option>
                      <option value="finishing">Interior & Exterior Finishing</option>
                      <option value="design">Design & Planning</option>
                      <option value="general">General Contracting</option>
                      <option value="lots">Lots Available / Build</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div className="mt-6">
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Project Details
                  </label>
                  <textarea
                    name="fi-text-message"
                    rows={4}
                    placeholder="Tell us about your project, timeline, and budget range..."
                    className={`${inputNormal} resize-none`}
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-sky-500 px-8 py-4 text-base font-bold text-white shadow-lg shadow-sky-500/25 transition-all hover:bg-sky-600 hover:shadow-sky-600/30 hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0"
                >
                  <Send className="h-5 w-5" />
                  {status === "loading" ? "Sending..." : "Contact Us"}
                </button>
                <p className="mt-4 text-center text-xs text-slate-500">
                  No spam, no pressure. Just a straight-forward estimate.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
