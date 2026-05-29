import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/projects";

// Brand icons (lucide-react no longer ships these for trademark reasons)
function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.336 3.608 1.311.975.975 1.249 2.242 1.311 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.336 2.633-1.311 3.608-.975.975-2.242 1.249-3.608 1.311-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.336-3.608-1.311-.975-.975-1.249-2.242-1.311-3.608C2.175 15.747 2.163 15.367 2.163 12s.012-3.584.07-4.85c.062-1.366.336-2.633 1.311-3.608.975-.975 2.242-1.249 3.608-1.311C8.416 2.175 8.796 2.163 12 2.163zm0 1.802c-3.141 0-3.504.011-4.738.067-.969.044-1.495.205-1.846.343-.464.18-.795.395-1.144.744-.349.349-.564.68-.744 1.144-.138.351-.299.877-.343 1.846-.056 1.234-.067 1.597-.067 4.738s.011 3.504.067 4.738c.044.969.205 1.495.343 1.846.18.464.395.795.744 1.144.349.349.68.564 1.144.744.351.138.877.299 1.846.343 1.234.056 1.597.067 4.738.067s3.504-.011 4.738-.067c.969-.044 1.495-.205 1.846-.343.464-.18.795-.395 1.144-.744.349-.349.564-.68.744-1.144.138-.351.299-.877.343-1.846.056-1.234.067-1.597.067-4.738s-.011-3.504-.067-4.738c-.044-.969-.205-1.495-.343-1.846-.18-.464-.395-.795-.744-1.144-.349-.349-.68-.564-1.144-.744-.351-.138-.877-.299-1.846-.343-1.234-.056-1.597-.067-4.738-.067zM12 6.865a5.135 5.135 0 100 10.27 5.135 5.135 0 000-10.27zm0 8.468a3.333 3.333 0 110-6.666 3.333 3.333 0 010 6.666zm6.538-8.671a1.2 1.2 0 11-2.4 0 1.2 1.2 0 012.4 0z" />
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.412c0-3.025 1.792-4.696 4.533-4.696 1.312 0 2.686.235 2.686.235v2.97h-1.514c-1.49 0-1.955.93-1.955 1.886v2.265h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z" />
    </svg>
  );
}

const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/ia1construction?utm_source=qr",
    icon: InstagramIcon,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/share/1cndT7iqPB/?mibextid=wwXIfr",
    icon: FacebookIcon,
  },
];

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
                src="/ia1-logo-new.png"
                alt="IA1 Construction"
                width={44}
                height={44}
                className="h-11 w-11 rounded-lg"
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
            <div className="mt-6 flex items-center gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-white/60 transition-all hover:border-sky-400 hover:bg-sky-500/10 hover:text-sky-400"
                >
                  <s.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
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
