"use client";

import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative py-24 overflow-hidden bg-sky-500">
      {/* Decorative shapes */}
      <div className="absolute inset-0">
        <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-sky-400/40 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-sky-700/30 blur-3xl" />
      </div>
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0V0zm20 20v20H0V20h20zm0 0V0h20v20H20z' fill='%23000' fill-opacity='.1' fill-rule='evenodd'/%3E%3C/svg%3E\")",
        }}
      />

      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-6 text-4xl font-black tracking-tight text-white sm:text-5xl">
            Your Project Starts With a Conversation
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-white/80">
            Whether you&apos;re planning a new build, a renovation, or just exploring ideas,
            we&apos;re here to help. No high-pressure sales. Just honest advice from builders
            who care.
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-xl bg-black px-8 py-4 text-base font-bold text-white shadow-xl transition-all hover:bg-black/80 hover:-translate-y-0.5"
            >
              Schedule a Free Consultation
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="tel:+13363655389"
              className="inline-flex items-center gap-2 rounded-xl border-2 border-white/30 bg-white/10 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20"
            >
              <Phone className="h-5 w-5" />
              336-365-5389
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
