"use client";

import { motion } from "framer-motion";
import { ArrowRight, Shield, Clock, Award } from "lucide-react";

const stats = [
  { icon: Shield, label: "Licensed & Insured", value: "Fully" },
  { icon: Clock, label: "Years Experience", value: "10+" },
  { icon: Award, label: "Projects Completed", value: "200+" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-black">
      {/* Background image overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/hero-bg.jpg')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-black/60" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

      {/* Decorative elements */}
      <div className="absolute top-20 right-10 h-72 w-72 rounded-full bg-sky-500/15 blur-3xl" />
      <div className="absolute bottom-20 left-10 h-96 w-96 rounded-full bg-sky-600/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 pt-32 pb-20 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-sky-500/30 bg-sky-500/10 px-4 py-2"
          >
            <span className="h-2 w-2 rounded-full bg-sky-400 animate-pulse" />
            <span className="text-sm font-medium text-sky-300">
              Serving the Triad &amp; Surrounding Areas
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-6 text-5xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl"
          >
            We Build What{" "}
            <span className="relative">
              <span className="bg-gradient-to-r from-sky-400 to-sky-500 bg-clip-text text-transparent">
                Lasts
              </span>
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="absolute -bottom-2 left-0 right-0 h-1 origin-left rounded-full bg-sky-500"
              />
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-10 max-w-xl text-lg leading-relaxed text-white/70 sm:text-xl"
          >
            IA1 Construction has been serving the Piedmont Triad for over 10 years. As a
            licensed builder, I have developed nearly 100 homes and an equal number of
            renovations and additions. From 1,000 to 3,000 square feet, I deliver elevated
            design and lasting value — without compromising on cost. Let&apos;s build your vision
            with integrity and excellence.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col gap-4 sm:flex-row"
          >
            <a
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-sky-500 px-8 py-4 text-base font-bold text-white shadow-xl shadow-sky-500/25 transition-all hover:bg-sky-600 hover:shadow-sky-600/30 hover:-translate-y-0.5"
            >
              Contact Us
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white/20 px-8 py-4 text-base font-semibold text-white transition-all hover:border-white/40 hover:bg-white/5"
            >
              View Our Work
            </a>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-16 flex flex-wrap gap-8"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white/10 backdrop-blur-sm">
                  <stat.icon className="h-6 w-6 text-sky-400" />
                </div>
                <div>
                  <p className="text-xl font-bold text-white">{stat.value}</p>
                  <p className="text-sm text-white/50">{stat.label}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
