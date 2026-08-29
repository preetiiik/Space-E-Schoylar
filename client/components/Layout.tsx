import { useEffect, useState, type ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, MessageCircle, Share2, Globe } from "lucide-react";
import { cn } from "@/lib/utils";
import SpaceBackground from "./SpaceBackground";

const LOGO_URL =
  "https://cdn.builder.io/api/v1/image/assets%2F081c1dcf75b2424ab0420613fd52512e%2F10f68a3b23b9406f8ac792a8b65ac850?format=webp&width=800&height=1200";

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
                <Share2 size={16} /> @spaceeschoylar
              </a>
            </li>
            <li>
              <a
                href="#"
                className="inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
              >
                <Globe size={16} /> Space E Schoylar
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
                <MessageCircle size={16} /> Chat with us on WhatsApp
              </a>
            </li>
            <li>9606351695, 9731757556</li>
            <li>
              <a
                href="mailto:connect@spaceeschoylar.ngo"
                className="transition-colors hover:text-primary"
              >
                connect@spaceeschoylar.ngo
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
