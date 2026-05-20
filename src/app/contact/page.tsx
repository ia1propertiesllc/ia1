import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Contact IA1 Construction | Building in the Piedmont Triad",
  description:
    "Reach out to IA1 Construction for new builds, custom projects, and renovations across the Piedmont Triad. Free estimates, no high-pressure sales — just honest advice from a licensed builder.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero band */}
        <section className="relative overflow-hidden bg-black pt-32 pb-16 lg:pt-40 lg:pb-20">
          <div className="absolute top-20 right-10 h-72 w-72 rounded-full bg-sky-500/15 blur-3xl" />
          <div className="absolute bottom-0 left-10 h-96 w-96 rounded-full bg-sky-600/10 blur-3xl" />
          <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <span className="mb-5 inline-block rounded-full border border-sky-500/30 bg-sky-500/10 px-4 py-1.5 text-sm font-semibold text-sky-400">
              Get in Touch
            </span>
            <h1 className="mb-5 text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
              Let&apos;s build your{" "}
              <span className="bg-gradient-to-r from-sky-400 to-sky-500 bg-clip-text text-transparent">
                vision
              </span>
              .
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-white/70">
              Tell us about your project — new construction, custom build, or renovation.
              We&apos;ll get back within 24 hours with honest scope, timeline, and budget guidance.
            </p>
          </div>
        </section>

        {/* Contact form */}
        <Contact />
      </main>
      <Footer />
    </>
  );
}
