"use client";

import { motion } from "framer-motion";
import {
  Home,
  Hammer,
  PaintBucket,
  Ruler,
  HardHat,
} from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Residential Construction",
    description:
      "Quality homes built from the ground up. We handle everything from foundation to finishing touches, creating the home of your dreams with premium materials and expert craftsmanship.",
    features: [],
  },
  {
    icon: Hammer,
    title: "Renovations & Remodeling",
    description:
      "Transform your existing space with modern upgrades. Kitchen and bathroom remodels, whole-home renovations, and structural improvements that add value.",
    features: ["Kitchen Remodels", "Bathroom Renovations", "Whole-Home Updates"],
  },
  {
    icon: PaintBucket,
    title: "Interior & Exterior Finishing",
    description:
      "Professional painting, trim work, flooring installation, and exterior finishes. We bring the polish that makes your space shine.",
    features: ["Painting & Staining", "Flooring & Tile", "Siding & Stucco"],
  },
  {
    icon: Ruler,
    title: "Design & Planning",
    description:
      "Architectural planning and design services to bring your vision to life. We work with top architects and engineers to create detailed blueprints.",
    features: ["Architectural Plans", "Permits & Compliance", "3D Renderings"],
  },
  {
    icon: HardHat,
    title: "General Contracting",
    description:
      "Full-service general contracting for projects of any size. We coordinate all trades, manage timelines, and ensure quality at every stage.",
    features: ["Project Management", "Subcontractor Coordination", "Quality Assurance"],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Services() {
  return (
    <section id="services" className="relative py-24 bg-white lg:py-32">
      <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="mb-4 inline-block rounded-full bg-sky-100 px-4 py-1.5 text-sm font-semibold text-sky-700">
              Our Services
            </span>
            <h2 className="mb-4 text-4xl font-black tracking-tight text-black sm:text-5xl">
              Everything You Need to{" "}
              <span className="text-sky-500">Build</span>
            </h2>
            <p className="text-lg text-slate-600">
              From concept to completion, we offer comprehensive residential construction
              services across the Triad and surrounding areas.
            </p>
          </motion.div>
        </div>

        {/* Services grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              className="group relative rounded-2xl border border-slate-200 bg-white p-8 transition-all duration-300 hover:border-sky-200 hover:shadow-xl hover:shadow-sky-500/5 hover:-translate-y-1"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-sky-50 transition-colors group-hover:bg-sky-500">
                <service.icon className="h-7 w-7 text-sky-600 transition-colors group-hover:text-white" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-black">
                {service.title}
              </h3>
              <p className="mb-5 text-sm leading-relaxed text-slate-500">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2 text-sm text-slate-600"
                  >
                    <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-sky-400" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
