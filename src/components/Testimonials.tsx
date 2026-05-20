"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Jessica R.",
    role: "Garage Conversion to Living Space",
    text: "Working with IA1 Construction was a dream. They transformed my garage into a beautiful, fully-equipped living space, with a full bathroom. Not only was the work impeccable, but their punctuality stood out — Issa was the first contractor to reach out 20 minutes before each meeting. I couldn't be happier with the result!",
    rating: 5,
  },
  {
    name: "Ernie S.",
    role: "Investment Property Builds",
    text: "Partnering with IA1 Construction was a smart investment decision. Issa has built two homes for me, and we're now on the third, all designed as lucrative investment properties. Their affordability and transparency made the process seamless, and their meticulous follow-through on the punch list ensured every detail was perfect. I couldn't be more confident in these homes as strong, profitable assets.",
    rating: 5,
  },
  {
    name: "Donald S. & Jennifer S.",
    role: "Custom Forever Home",
    text: "Working with IA1 Construction on my forever home was an incredible experience. The quality of the build went beyond typical builder-grade standards, and every detail was elevated. IA1's affordability made it possible, and their communication kept me informed at every stage. I always felt secure, knowing I was working with a team that valued transparency and high standards at every step.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-black lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="mb-4 inline-block rounded-full border border-sky-500/30 bg-sky-500/10 px-4 py-1.5 text-sm font-semibold text-sky-400">
              Testimonials
            </span>
            <h2 className="mb-4 text-4xl font-black tracking-tight text-white sm:text-5xl">
              What Our Clients{" "}
              <span className="text-sky-400">Say</span>
            </h2>
            <p className="text-lg text-white/50">
              Don&apos;t just take our word for it. Here&apos;s what homeowners across the
              Triad have to say about working with IA1 Construction.
            </p>
          </motion.div>
        </div>

        {/* Testimonial cards */}
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm"
            >
              <Quote className="absolute top-6 right-6 h-8 w-8 text-sky-500/20" />
              {/* Stars */}
              <div className="mb-4 flex gap-1">
                {Array.from({ length: t.rating }).map((_, s) => (
                  <Star
                    key={s}
                    className="h-5 w-5 fill-sky-400 text-sky-400"
                  />
                ))}
              </div>
              <p className="mb-6 text-base leading-relaxed text-white/70">
                &ldquo;{t.text}&rdquo;
              </p>
              <div>
                <p className="font-bold text-white">{t.name}</p>
                <p className="text-sm text-sky-400/80">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 flex flex-wrap items-center justify-center gap-8 border-t border-white/10 pt-12"
        >
          {["BBB A+ Rated", "Licensed & Bonded", "EPA Lead-Safe Certified", "OSHA Compliant"].map(
            (badge) => (
              <div
                key={badge}
                className="flex items-center gap-2 rounded-full border border-white/10 px-5 py-2.5 text-sm font-medium text-white/50"
              >
                <span className="h-2 w-2 rounded-full bg-sky-500" />
                {badge}
              </div>
            )
          )}
        </motion.div>
      </div>
    </section>
  );
}
