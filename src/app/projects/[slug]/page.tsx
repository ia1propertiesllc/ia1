import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import {
  ArrowLeft,
  MapPin,
  Bed,
  Bath,
  Ruler,
  Calendar,
  Trees,
  Building,
  Thermometer,
  CheckCircle2,
  ArrowRight,
  Phone,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { projects, getProject } from "@/lib/projects";
import ProjectGallery from "@/components/ProjectGallery";
import BeforeAfter from "@/components/BeforeAfter";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Project not found | IA1 Construction" };
  return {
    title: `${project.title} — ${project.city}, ${project.state} | IA1 Construction`,
    description: project.shortDescription,
    openGraph: {
      title: `${project.title} | IA1 Construction`,
      description: project.shortDescription,
      images: [project.heroImage],
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const otherProjects = projects.filter((p) => p.slug !== project.slug).slice(0, 3);

  const isRenovation = !!project.beforeAfter;

  const stats: { icon: typeof Bed; label: string; value: string | number }[] = [];
  if (project.beds !== undefined) stats.push({ icon: Bed, label: "Bedrooms", value: project.beds });
  if (project.baths !== undefined) stats.push({ icon: Bath, label: "Bathrooms", value: project.baths });
  if (project.sqft !== undefined) stats.push({ icon: Ruler, label: "Square Feet", value: project.sqft.toLocaleString() });
  if (project.lotSize) stats.push({ icon: Trees, label: "Lot Size", value: project.lotSize });
  stats.push({ icon: Calendar, label: isRenovation ? "Completed" : "Built", value: project.year });
  if (project.stories) stats.push({ icon: Building, label: "Stories", value: project.stories });
  if (project.heating) {
    stats.push({
      icon: Thermometer,
      label: "HVAC",
      value: `${project.heating.split(",")[0]} / ${project.cooling?.split(",")[0] ?? "—"}`,
    });
  }

  const hasSpecs = !!(
    project.foundation ||
    project.exterior ||
    project.stories ||
    project.heating ||
    project.cooling ||
    project.lotSize
  );

  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative min-h-[75vh] flex items-end overflow-hidden bg-black pt-24">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('${project.heroImage}')` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/30" />

          <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
            <Link
              href="/#projects"
              className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-sky-400 hover:text-sky-300"
            >
              <ArrowLeft className="h-4 w-4" />
              All Projects
            </Link>
            <div className="mb-4 flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-sky-500 px-4 py-1.5 text-sm font-bold text-white">
                {project.category}
              </span>
              <span className="rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-semibold text-white backdrop-blur-sm">
                Completed {project.year}
              </span>
            </div>
            <h1 className="mb-4 text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
              {project.title}
            </h1>
            <p className="flex items-center gap-2 text-lg text-white/70">
              <MapPin className="h-5 w-5 text-sky-400" />
              {project.city}, {project.state}
            </p>
          </div>
        </section>

        {/* Stats bar */}
        <section className="border-b border-slate-200 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 gap-4 py-8 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-7 lg:gap-8">
              {stats.map((s) => (
                <div key={s.label} className="flex items-center gap-3">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-sky-50">
                    <s.icon className="h-5 w-5 text-sky-600" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-slate-500">{s.label}</p>
                    <p className="text-sm font-bold text-black">{s.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery + Details */}
        <section className="bg-slate-50 py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-3">
              {/* Main content */}
              <div className="lg:col-span-2">
                {project.beforeAfter ? (
                  <BeforeAfter
                    before={project.beforeAfter.before}
                    after={project.beforeAfter.after}
                  />
                ) : (
                  <ProjectGallery images={project.gallery} />
                )}

                <div className="mt-16">
                  <h2 className="mb-6 text-3xl font-black tracking-tight text-black">
                    About This Project
                  </h2>
                  <div className="prose prose-slate max-w-none space-y-4 text-lg leading-relaxed text-slate-700">
                    {project.description.map((para, i) => (
                      <p key={i}>{para}</p>
                    ))}
                  </div>
                </div>

                <div className="mt-12 grid gap-8 sm:grid-cols-2">
                  <div className="rounded-2xl border border-slate-200 bg-white p-6">
                    <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-sky-600">
                      Highlights
                    </h3>
                    <ul className="space-y-3">
                      {project.highlights.map((f) => (
                        <li key={f} className="flex items-start gap-2 text-sm text-slate-700">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-sky-500" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="rounded-2xl border border-slate-200 bg-white p-6">
                    <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-sky-600">
                      IA1 Scope of Work
                    </h3>
                    <ul className="space-y-3">
                      {project.scope.map((s) => (
                        <li key={s} className="flex items-start gap-2 text-sm text-slate-700">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-sky-500" />
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Property spec sheet — only for projects with specs */}
                {hasSpecs && (
                  <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
                    <h3 className="mb-5 text-sm font-bold uppercase tracking-wider text-sky-600">
                      Construction Specs
                    </h3>
                    <dl className="grid grid-cols-2 gap-x-6 gap-y-3 text-sm sm:grid-cols-3">
                      {project.foundation && (
                        <div>
                          <dt className="text-slate-500">Foundation</dt>
                          <dd className="font-semibold text-black">{project.foundation}</dd>
                        </div>
                      )}
                      {project.exterior && (
                        <div>
                          <dt className="text-slate-500">Exterior</dt>
                          <dd className="font-semibold text-black">{project.exterior}</dd>
                        </div>
                      )}
                      {project.stories && (
                        <div>
                          <dt className="text-slate-500">Stories</dt>
                          <dd className="font-semibold text-black">{project.stories}</dd>
                        </div>
                      )}
                      {project.heating && (
                        <div>
                          <dt className="text-slate-500">Heating</dt>
                          <dd className="font-semibold text-black">{project.heating}</dd>
                        </div>
                      )}
                      {project.cooling && (
                        <div>
                          <dt className="text-slate-500">Cooling</dt>
                          <dd className="font-semibold text-black">{project.cooling}</dd>
                        </div>
                      )}
                      {project.lotSize && (
                        <div>
                          <dt className="text-slate-500">Lot Size</dt>
                          <dd className="font-semibold text-black">{project.lotSize}</dd>
                        </div>
                      )}
                    </dl>
                  </div>
                )}
              </div>

              {/* Sidebar CTA */}
              <aside>
                <div className="sticky top-28 rounded-2xl bg-black p-8 text-white">
                  <p className="mb-1 text-xs font-bold uppercase tracking-wider text-sky-400">
                    {isRenovation ? "Got a space to transform?" : "Want something like this?"}
                  </p>
                  <h3 className="mb-3 text-2xl font-black">
                    {isRenovation
                      ? "Let\u2019s renovate yours."
                      : "Let\u2019s build your home."}
                  </h3>
                  <p className="mb-6 text-sm leading-relaxed text-white/70">
                    {isRenovation
                      ? "IA1 specializes in turning tired spaces into homes people love. From one room to whole-home transformations — consultations are always free."
                      : "IA1 designs and builds quality home builds and new construction across the Triad. Tell us what you want — consultations are always free."}
                  </p>
                  <Link
                    href="/contact"
                    className="group mb-3 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-sky-500 px-6 py-3.5 text-sm font-bold text-white transition-all hover:bg-sky-600"
                  >
                    Contact Us
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                  <a
                    href="tel:+13363655389"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/20 px-6 py-3.5 text-sm font-semibold text-white transition-all hover:bg-white/10"
                  >
                    <Phone className="h-4 w-4" />
                    336-365-5389
                  </a>
                  <div className="mt-6 space-y-2 border-t border-white/10 pt-6 text-xs text-white/60">
                    <p>Licensed, bonded &amp; insured</p>
                    <p>Serving the Triad &amp; beyond</p>
                    <p>1-year workmanship warranty</p>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* Related projects */}
        <section className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10 flex items-end justify-between">
              <div>
                <h2 className="text-3xl font-black tracking-tight text-black sm:text-4xl">
                  More from IA1
                </h2>
                <p className="mt-2 text-slate-600">
                  Recent builds across North Carolina.
                </p>
              </div>
              <Link
                href="/#projects"
                className="hidden text-sm font-bold text-sky-600 hover:text-sky-700 sm:inline-flex"
              >
                View All →
              </Link>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {otherProjects.map((p) => (
                <Link
                  key={p.slug}
                  href={`/projects/${p.slug}`}
                  className="group overflow-hidden rounded-2xl bg-slate-50"
                >
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={p.heroImage}
                      alt={p.gallery[0].alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="rounded-full bg-sky-500 px-3 py-1 text-xs font-bold text-white shadow-sm">
                        {p.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="mb-1 text-base font-bold text-black group-hover:text-sky-600 transition-colors">
                      {p.title}
                    </h3>
                    <p className="text-xs text-slate-500">
                      {p.city}, {p.state} · Built {p.year}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
