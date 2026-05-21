"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { CheckCircle2 } from "lucide-react";
import AboutGallery from "./AboutGallery";

function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2000;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

const counters = [
  { value: 200, suffix: "+", label: "Projects Completed" },
  { value: 10, suffix: "+", label: "Years of Experience" },
];

const reasons = [
  "Over 10 years of experience building in the Piedmont Triad, with a deep understanding of the local market and construction standards.",
  "Proven track record of nearly 100 homes built and an equal number of renovations and additions completed.",
  "Quality-focused construction that goes beyond typical builder-grade — without the custom-home price tag.",
  "Efficient, well-designed homes ranging from 1,000 to 4,000 square feet to fit a variety of needs and lifestyles.",
  "Hands-on, builder-direct approach — clear communication and accountability from start to finish.",
  "Thoughtful balance of durability, design, and cost to deliver long-term value.",
  "Experience in both new construction and renovations, offering flexibility for any stage of homeownership.",
];

// Rolling gallery — before/after and on-site craftsmanship from recent projects.
const gallerySlides = [
  { src: "/gallery/gallery-4.jpg", alt: "IA1 Construction project" },
  { src: "/gallery/gallery-6.jpg", alt: "IA1 Construction project" },
  { src: "/gallery/gallery-7.jpg", alt: "IA1 Construction project" },
  { src: "/gallery/gallery-8.jpg", alt: "IA1 Construction project" },
  { src: "/gallery/gallery-9.jpg", alt: "IA1 Construction project" },
  { src: "/gallery/gallery-10.jpg", alt: "IA1 Construction project" },
  { src: "/gallery/gallery-11.jpg", alt: "IA1 Construction project" },
  { src: "/gallery/gallery-12.jpg", alt: "IA1 Construction project" },
  { src: "/gallery/gallery-13.jpg", alt: "IA1 Construction project" },
  { src: "/gallery/gallery-14.jpg", alt: "IA1 Construction project" },
  { src: "/gallery/gallery-15.jpg", alt: "IA1 Construction project" },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-slate-50 lg:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 grid grid-cols-1 gap-8 rounded-2xl bg-black p-8 sm:grid-cols-2 sm:p-12"
        >
          {counters.map((c) => (
            <div key={c.label} className="text-center">
              <p className="text-4xl font-black text-sky-400 sm:text-5xl">
                <AnimatedCounter target={c.value} suffix={c.suffix} />
              </p>
              <p className="mt-2 text-sm font-medium text-white/50">{c.label}</p>
            </div>
          ))}
        </motion.div>

        {/* About content */}
        <div className="grid items-start gap-16 lg:grid-cols-2">
          {/* Image side — rolling gallery */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <AboutGallery slides={gallerySlides} />
          </motion.div>

          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="mb-4 inline-block rounded-full bg-sky-100 px-4 py-1.5 text-sm font-semibold text-sky-700">
              About IA1
            </span>
            <h2 className="mb-6 text-4xl font-black tracking-tight text-black">
              Built by IA1,{" "}
              <span className="text-sky-500">Driven by Quality</span>
            </h2>
            <p className="mb-8 text-lg leading-relaxed text-slate-600">
              Issa is the founder of IA1 Construction, serving the Piedmont Triad for over 10
              years. After earning his MBA from UNC Greensboro and spending more than a decade
              in the corporate world, Issa made a unique career shift to construction — a path
              that has become his true passion. As a licensed builder, he&apos;s developed nearly
              100 homes and numerous renovations, bringing a business-minded focus and a personal
              touch to every project — delivering quality design and lasting value.
            </p>

            <h3 className="mb-4 text-xl font-bold text-black">Why IA1 Construction</h3>
            <ul className="space-y-4">
              {reasons.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-sky-500" />
                  <span className="text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
