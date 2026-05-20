"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import type { GalleryImage } from "@/lib/projects";

type Props = {
  before: GalleryImage[];
  after: GalleryImage[];
};

export default function BeforeAfter({ before, after }: Props) {
  const [view, setView] = useState<"before" | "after" | "split">("split");
  const [lightbox, setLightbox] = useState<GalleryImage | null>(null);

  const activeSet = view === "before" ? before : view === "after" ? after : null;

  return (
    <section className="rounded-3xl bg-black p-6 sm:p-8 lg:p-10">
      <div className="mb-6 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <p className="mb-1 text-xs font-bold uppercase tracking-[0.2em] text-sky-400">
            The Transformation
          </p>
          <h3 className="text-2xl font-black text-white sm:text-3xl">
            Before &amp; After
          </h3>
        </div>

        {/* Toggle */}
        <div className="inline-flex rounded-xl border border-white/10 bg-white/5 p-1">
          {(["before", "split", "after"] as const).map((opt) => (
            <button
              key={opt}
              onClick={() => setView(opt)}
              className={`rounded-lg px-4 py-1.5 text-xs font-bold uppercase tracking-wider transition-all ${
                view === opt
                  ? "bg-sky-500 text-white shadow-lg shadow-sky-500/20"
                  : "text-white/60 hover:text-white"
              }`}
            >
              {opt === "split" ? "Both" : opt}
            </button>
          ))}
        </div>
      </div>

      {/* Split view */}
      {view === "split" && (
        <div className="grid gap-4 md:grid-cols-2">
          <Column label="Before" images={before} tone="before" onClick={setLightbox} />
          <Column label="After" images={after} tone="after" onClick={setLightbox} />
        </div>
      )}

      {/* Single view */}
      {activeSet && (
        <div className="relative">
          <div className="absolute top-4 left-4 z-10">
            <span
              className={`rounded-full px-4 py-1.5 text-xs font-black uppercase tracking-widest shadow-lg ${
                view === "before"
                  ? "bg-white text-black"
                  : "bg-sky-500 text-white"
              }`}
            >
              {view}
            </span>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {activeSet.map((img, i) => (
              <motion.button
                key={img.src}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: i * 0.05 }}
                onClick={() => setLightbox(img)}
                className="group relative aspect-[4/3] overflow-hidden rounded-xl bg-white/5"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </motion.button>
            ))}
          </div>
        </div>
      )}

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4"
            onClick={() => setLightbox(null)}
          >
            <motion.img
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              src={lightbox.src}
              alt={lightbox.alt}
              onClick={(e) => e.stopPropagation()}
              className="max-h-[90vh] max-w-[90vw] rounded-lg object-contain"
            />
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-4 right-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
              aria-label="Close"
            >
              ✕
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function Column({
  label,
  images,
  tone,
  onClick,
}: {
  label: string;
  images: GalleryImage[];
  tone: "before" | "after";
  onClick: (img: GalleryImage) => void;
}) {
  return (
    <div>
      <div className="mb-3 flex items-center gap-2">
        <span
          className={`inline-flex items-center rounded-full px-4 py-1 text-xs font-black uppercase tracking-widest ${
            tone === "before"
              ? "bg-white text-black"
              : "bg-sky-500 text-white"
          }`}
        >
          {label}
        </span>
        <span className="text-xs text-white/40">
          {images.length} {images.length === 1 ? "photo" : "photos"}
        </span>
      </div>
      <div className="grid gap-3">
        {images.map((img, i) => (
          <motion.button
            key={img.src}
            initial={{ opacity: 0, x: tone === "before" ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            onClick={() => onClick(img)}
            className="group relative aspect-[4/3] overflow-hidden rounded-xl bg-white/5"
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div
              className={`absolute inset-0 transition-opacity ${
                tone === "before"
                  ? "bg-gradient-to-t from-black/40 to-transparent"
                  : "bg-gradient-to-t from-sky-950/20 to-transparent"
              }`}
            />
          </motion.button>
        ))}
      </div>
    </div>
  );
}
