"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, MapPin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { projects } from "@/lib/projects";

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-white lg:py-32">
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
              Our Portfolio
            </span>
            <h2 className="mb-4 text-4xl font-black tracking-tight text-black sm:text-5xl">
              Projects That{" "}
              <span className="text-sky-500">Speak for Themselves</span>
            </h2>
            <p className="text-lg text-slate-600">
              Recent new construction, quality home builds, custom projects, and renovations delivered across the Triad.
            </p>
          </motion.div>
        </div>

        {/* Projects grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <Link
                href={`/projects/${project.slug}`}
                className="group block overflow-hidden rounded-2xl bg-slate-50 h-full transition-shadow hover:shadow-xl"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={project.heroImage}
                    alt={project.gallery[0].alt}
                    className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    width={800}
                    height={256}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    priority={i < 3}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-sky-500 text-white opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:-translate-y-1">
                    <ArrowUpRight className="h-5 w-5" />
                  </div>
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="rounded-full bg-sky-500 px-3 py-1 text-xs font-bold text-white shadow-sm">
                      {project.category}
                    </span>
                    {project.beforeAfter && (
                      <span className="rounded-full bg-black px-3 py-1 text-xs font-bold text-white shadow-sm">
                        Before / After
                      </span>
                    )}
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="rounded-full bg-white/95 px-3 py-1 text-xs font-bold text-slate-700 shadow-sm backdrop-blur-sm">
                      {project.beforeAfter ? `Completed ${project.year}` : `Built ${project.year}`}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="mb-1 text-lg font-bold text-black group-hover:text-sky-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="mb-3 flex items-center gap-1.5 text-xs font-medium text-slate-500">
                    <MapPin className="h-3.5 w-3.5" />
                    {project.city}, {project.state}
                  </p>
                  <p className="mb-4 text-sm leading-relaxed text-slate-600 line-clamp-3">
                    {project.shortDescription}
                  </p>
                  <div className="flex gap-4 border-t border-slate-200 pt-4 text-xs font-medium text-slate-500">
                    {project.beforeAfter ? (
                      <>
                        <span>
                          <strong className="text-black">{project.beforeAfter.before.length}</strong> before
                        </span>
                        <span>
                          <strong className="text-black">{project.beforeAfter.after.length}</strong> after
                        </span>
                        <span className="ml-auto text-sky-600 font-bold">See the transformation →</span>
                      </>
                    ) : (
                      <>
                        <span>
                          <strong className="text-black">{project.beds}</strong> beds
                        </span>
                        <span>
                          <strong className="text-black">{project.baths}</strong> baths
                        </span>
                        <span>
                          <strong className="text-black">
                            {project.sqft?.toLocaleString()}
                          </strong>{" "}
                          sqft
                        </span>
                        {project.lotSize && <span className="ml-auto">{project.lotSize}</span>}
                      </>
                    )}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
