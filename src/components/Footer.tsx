import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/projects";

const exploreLinks = [
  { label: "Services", href: "/#services" },
  { label: "About", href: "/#about" },
  { label: "Projects", href: "/#projects" },
  { label: "Testimonials", href: "/#testimonials" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-black pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="mb-4 flex items-center gap-2.5">
              <Image
                src="/ia1-logo-white.svg"
                alt="IA1 Construction"
                width={44}
                height={44}
                className="h-11 w-11"
              />
              <div className="flex flex-col">
                <span className="text-lg font-black tracking-tight text-white leading-tight">
                  IA1 Construction
                </span>
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-sky-400">
                  Building Excellence
                </span>
              </div>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-white/40">
              New construction, quality home builds, custom projects, and renovations across
              the Triad and surrounding areas. Licensed, bonded, and insured — built on quality
              craftsmanship and honest communication.
            </p>
          </div>

          {/* Explore */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Explore
            </h4>
            <ul className="space-y-3">
              {exploreLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/40 transition-colors hover:text-sky-400"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Projects */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Recent Projects
            </h4>
            <ul className="space-y-3">
              {projects.map((p) => (
                <li key={p.slug}>
                  <Link
                    href={`/projects/${p.slug}`}
                    className="text-sm text-white/40 transition-colors hover:text-sky-400"
                  >
                    {p.title} — {p.city}, {p.state}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Get in Touch
            </h4>
            <ul className="space-y-3 text-sm text-white/40">
              <li>
                <a href="tel:+13363655389" className="hover:text-sky-400 transition-colors">
                  336-365-5389
                </a>
              </li>
              <li>
                <a href="mailto:ia1propertiesinc@gmail.com" className="hover:text-sky-400 transition-colors">
                  ia1propertiesinc@gmail.com
                </a>
              </li>
              <li className="pt-2">
                Serving the Triad
                <br />
                &amp; Surrounding Areas, NC
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-sm text-white/30">
            &copy; {new Date().getFullYear()} IA1 Construction LLC. All rights reserved.
          </p>
          <p className="text-sm text-white/30">
            Built by{" "}
            <a
              href="https://psycode.io"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-sky-400/80 transition-colors hover:text-sky-400"
            >
              Psycode
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
