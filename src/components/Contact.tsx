"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Phone, Mail, Clock, MapPin, AlertTriangle } from "lucide-react";
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

export default function Contact() {
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const forminit = new Forminit({ proxyUrl: "/api/forminit" });

    try {
      const { error } = await forminit.submit(FORM_ID, formData);
      if (error) {
        setStatus("error");
        return;
      }
      setStatus("success");
      form.reset();
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
                  <p className="text-sm font-medium text-slate-500">
                    {item.label}
                  </p>
                  <p className="text-base font-semibold text-black">
                    {item.value}
                  </p>
                </div>
              </a>
            ))}
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
                <h3 className="mb-2 text-2xl font-bold text-black">
                  Thank You!
                </h3>
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
                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="fi-sender-fullName"
                      required
                      placeholder="John Smith"
                      className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-black placeholder:text-slate-400 transition-colors focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="fi-sender-email"
                      required
                      placeholder="john@example.com"
                      className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-black placeholder:text-slate-400 transition-colors focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="fi-sender-phone"
                      placeholder="+1 555 000 0000"
                      className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-black placeholder:text-slate-400 transition-colors focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700">
                      Service Needed *
                    </label>
                    <select
                      name="fi-select-service"
                      required
                      defaultValue=""
                      className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-black transition-colors focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 focus:outline-none"
                    >
                      <option value="" disabled>
                        Select a service
                      </option>
                      <option value="residential">
                        Residential Construction
                      </option>
                      <option value="renovation">
                        Renovation & Remodeling
                      </option>
                      <option value="finishing">
                        Interior & Exterior Finishing
                      </option>
                      <option value="design">Design & Planning</option>
                      <option value="general">General Contracting</option>
                      <option value="lots">Lots Available / Build</option>
                    </select>
                  </div>
                </div>
                <div className="mt-6">
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Project Details
                  </label>
                  <textarea
                    name="fi-text-message"
                    rows={4}
                    placeholder="Tell us about your project, timeline, and budget range..."
                    className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-black placeholder:text-slate-400 transition-colors focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 focus:outline-none resize-none"
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
