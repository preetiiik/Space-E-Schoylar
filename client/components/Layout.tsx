import { useEffect, useState, type ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail } from "lucide-react";
import { cn } from "@/lib/utils";
import SpaceBackground from "./SpaceBackground";

const LOGO_URL =
  "https://cdn.builder.io/api/v1/image/assets%2F081c1dcf75b2424ab0420613fd52512e%2F10f68a3b23b9406f8ac792a8b65ac850?format=webp&width=800&height=1200";

function WhatsAppIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.71.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12.002 2.002c-5.514 0-9.998 4.484-9.998 9.998 0 1.763.462 3.489 1.34 5.006L2 22l5.117-1.34a9.96 9.96 0 0 0 4.885 1.34h.001c5.514 0 9.997-4.484 9.997-9.998 0-2.67-1.04-5.18-2.928-7.07a9.93 9.93 0 0 0-7.07-2.93zm0 18.166h-.001a8.16 8.16 0 0 1-4.157-1.14l-.298-.177-3.037.796.811-2.96-.194-.304a8.15 8.15 0 0 1-1.25-4.365c0-4.509 3.669-8.178 8.13-8.178a8.09 8.09 0 0 1 5.75 2.383 8.09 8.09 0 0 1 2.38 5.752c0 4.509-3.67 8.193-8.134 8.193z" />
    </svg>
  );
}

function InstagramIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function FacebookIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M13.5 21v-8.02h2.69l.4-3.13h-3.09V7.9c0-.9.25-1.52 1.55-1.52h1.66V3.6c-.29-.04-1.27-.12-2.42-.12-2.4 0-4.04 1.46-4.04 4.15v2.32H7.55v3.13h2.7V21h3.25z" />
    </svg>
  );
}

const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "Our Projects", to: "/our-projects" },
  { label: "Our Initiatives", to: "/our-initiatives" },
  { label: "Donation", to: "/donation" },
  { label: "Gallery", to: "/gallery" },
  { label: "Teams", to: "/teams" },
  { label: "Contact Us", to: "/contact" },
];

function Navbar() {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-white/10 bg-background/70 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-10">
        <Link to="/" className="min-w-0 flex items-center gap-2 sm:gap-3">
          <img
            src={LOGO_URL}
            alt="Space E Schoylar logo"
            className="h-11 w-11 rounded-full object-cover"
          />
          <span className="truncate font-heading text-base font-bold tracking-tight text-foreground sm:text-lg">
            Space E Schoylar
          </span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => {
            const active = location.pathname === link.to;
            return (
              <Link
                key={link.to}
                to={link.to}
                className={cn(
                  "relative px-4 py-2 text-sm font-semibold transition-colors duration-300",
                  active
                    ? "text-primary"
                    : "text-foreground/80 hover:text-primary",
                )}
              >
                {link.label}
                <span
                  className={cn(
                    "absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-primary transition-transform duration-300",
                    active
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100",
                  )}
                />
              </Link>
            );
          })}
        </div>

        <div className="hidden lg:block">
          <Link
            to="/donation"
            className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground shadow-glow transition-all duration-300 hover:scale-105 hover:shadow-glow-lg"
          >
            Donate Now
          </Link>
        </div>

        <button
          className="rounded-lg border border-white/10 bg-white/5 p-2 text-foreground lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <div
        className={cn(
          "overflow-hidden border-t border-white/10 bg-background/95 backdrop-blur-xl transition-all duration-300 lg:hidden",
          open ? "max-h-[28rem] opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <div className="flex flex-col gap-1 px-4 py-4 sm:px-6">
          {NAV_LINKS.map((link) => {
            const active = location.pathname === link.to;
            return (
              <Link
                key={link.to}
                to={link.to}
                className={cn(
                  "rounded-lg px-3 py-2.5 text-sm font-semibold transition-colors",
                  active
                    ? "bg-primary/10 text-primary"
                    : "text-foreground/80 hover:bg-white/5 hover:text-primary",
                )}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            to="/donation"
            className="mt-2 inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground shadow-glow"
          >
            Donate Now
          </Link>
        </div>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 bg-background/60 backdrop-blur-xl">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:grid-cols-2 sm:px-6 sm:py-16 lg:grid-cols-4 lg:px-10">
        <div className="sm:col-span-2 lg:col-span-1">
          <Link to="/" className="flex items-center gap-3">
            <img
              src={LOGO_URL}
              alt="Space E Schoylar logo"
              className="h-12 w-12 rounded-full object-cover"
            />
            <span className="font-heading text-lg font-bold text-foreground">
              Space E Schoylar
            </span>
          </Link>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            An NGO to inspire and empower underprivileged children with the
            magic of space education and its boundless career possibilities.
          </p>
          <Link
            to="/privacy-policy"
            className="mt-4 inline-block text-sm font-semibold text-primary hover:underline"
          >
            Privacy Policy
          </Link>
        </div>

        <div>
          <h4 className="font-heading text-sm font-bold uppercase tracking-wider text-foreground">
            Links
          </h4>
          <ul className="mt-4 space-y-2.5 text-sm">
            {NAV_LINKS.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-heading text-sm font-bold uppercase tracking-wider text-foreground">
            Socials
          </h4>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li>
              <a
                href="https://instagram.com/spaceeschoylar"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
              >
                <InstagramIcon size={16} /> @spaceeschoylar
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/profile.php?id=100063665186225"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
              >
                <FacebookIcon size={16} /> Space E Schoylar
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-heading text-sm font-bold uppercase tracking-wider text-foreground">
            Contact Us
          </h4>
          <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
            <li>
              <a
                href="https://wa.me/919606351695"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 transition-colors hover:text-primary"
              >
                <WhatsAppIcon size={16} /> Chat with us on WhatsApp
              </a>
            </li>
            <li className="inline-flex items-center gap-2">
              <Phone size={16} />
              <span className="flex flex-wrap items-center gap-x-1">
                <a href="tel:+919606351695" className="transition-colors hover:text-primary">
                  +91 9606351695
                </a>
                <span>,</span>
                <a href="tel:+919731757556" className="transition-colors hover:text-primary">
                  +91 9731757556
                </a>
              </span>
            </li>
            <li>
              <a
                href="mailto:connect@spaceeschoylar.ngo"
                className="inline-flex items-center gap-2 transition-colors hover:text-primary"
              >
                <Mail size={16} /> connect@spaceeschoylar.ngo
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 px-4 py-6 text-center text-xs text-muted-foreground sm:px-6">
  © {new Date().getFullYear()} Space E Schoylar. All Rights Reserved.{" "}
  <span>Powered by </span>
  <a
    href="https://spitel.com"
    target="_blank"
    rel="noopener noreferrer"
    className="font-semibold transition-colors hover:text-primary"
  >
    Spitel Pvt. Ltd.
  </a>
</div>
    </footer>
  );
}

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="relative flex min-h-screen flex-col">
      <SpaceBackground />
      <Navbar />
      <main className="relative z-10 flex-1 pt-20">{children}</main>
      <Footer />
    </div>
  );
}