import { Link } from "react-router-dom";
import { HeartHandshake, GraduationCap, Rocket, ArrowRight } from "lucide-react";
import Reveal from "@/components/Reveal";

export default function OurInitiatives() {
  return (
    <div className="section-padding mx-auto max-w-5xl">
      <Reveal className="text-center">
        <span className="text-sm font-bold uppercase tracking-widest text-primary">
          Making it possible
        </span>
        <h1 className="mt-3 font-heading text-4xl font-extrabold text-foreground sm:text-5xl">
          Our <span className="cosmic-text">Initiatives</span>
        </h1>
      </Reveal>

      <Reveal delay={100}>
        <div className="glass-panel mt-14 p-8 sm:p-10">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
            <HeartHandshake size={28} />
          </div>
          <h2 className="mt-6 font-heading text-2xl font-bold text-foreground sm:text-3xl">
            Adopt To Educate
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Make a lasting impact by donating ₹7,000 to sponsor a girl's
            education in space and astronomy for an entire year. Your
            generosity will empower her to embark on a transformative journey
            of learning, exploration, and discovery in these exciting fields.
          </p>
          <Link
            to="/donation"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-bold text-primary-foreground shadow-glow transition-all duration-300 hover:scale-105 hover:shadow-glow-lg"
          >
            Sponsor Now <ArrowRight size={18} />
          </Link>
        </div>
      </Reveal>

      <Reveal delay={150}>
        <div className="glass-panel mt-8 p-8 sm:p-10">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
            <Rocket size={28} />
          </div>
          <h2 className="mt-6 font-heading text-2xl font-bold text-foreground sm:text-3xl">
            Fund the Mobile Space Lab
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Help us bring space education on wheels to children who&apos;ve never
            had the chance to look through a telescope or dream about the
            stars. Your support will help build India&apos;s first Mobile Space Lab
            — reaching schools and villages our fixed labs cannot.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground italic">
            This project is currently in its fundraising stage. Every
            contribution brings us closer to launch.
          </p>
          <Link
            to="/donation"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-bold text-primary-foreground shadow-glow transition-all duration-300 hover:scale-105 hover:shadow-glow-lg"
          >
            Donate Now <ArrowRight size={18} />
          </Link>
        </div>
      </Reveal>

      <div className="mt-8 grid gap-8 lg:grid-cols-2">
        <Reveal delay={220}>
          <div className="glass-card h-full p-8 sm:p-10">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <GraduationCap size={28} />
            </div>
            <h2 className="mt-6 font-heading text-2xl font-bold text-foreground">
              Scholarship Offered
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Space E Schoylar presents the SHANTAR SABHA Scholarship for
              first-year professional course students. This scholarship
              offers SES students financial aid, covering up to 100% of their
              tuition fees (capped at INR 25,000 annually) for space and
              astronomy-related courses.
            </p>
          </div>
        </Reveal>

        <Reveal delay={290}>
          <div className="glass-card h-full p-8 sm:p-10">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <Rocket size={28} />
            </div>
            <h2 className="mt-6 font-heading text-2xl font-bold text-foreground">
              Fellowship Offered
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              The Space E Schoylar Fellowship offers an opportunity for
              individuals to contribute to positive change by collaborating
              with the foundation. This fellowship aims to provide hands-on
              experience in developing platforms within the space and
              educational sectors. It's open to science and related
              background professionals with 0 to 2 years of experience. The
              two-year program is designed to empower fellows to realize
              their potential impact with the support of the space education
              community.
            </p>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
