import { Link } from "react-router-dom";
import {
  Rocket,
  Sparkles,
  Telescope,
  Users,
  Compass,
  ArrowRight,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import WhatWeDoJourney from "@/components/WhatWeDoJourney";

const PROJECTS = [
  {
    id: "girl-in-space",
    title: "Girls in Space",
    icon: Sparkles,
    desc: "A dedicated program empowering girls to explore space and astronomy careers.",
    image: "/images/girl-in-space.png",
  },
  {
    id: "astronomy-space-lab",
    title: "Astronomy And Space Lab In Government Schools",
    icon: Telescope,
    desc: "Setting up hands-on astronomy labs to bring space science to public schools.",
    image: "/images/astronomy-spacelab.png",
  },
  {
    id: "star-gazing-astronomy",
    title: "Star Gazing And Astronomy",
    icon: Compass,
    desc: "Guided night-sky sessions that turn curiosity into a passion for the cosmos.",
    image: "/images/stargazing-astronomy.png",
  },
  {
    id: "women-astronomy-club",
    title: "Women Astronomy Club",
    icon: Users,
    desc: "A community fostering leadership and learning for women in astronomy.",
    image: "/images/women-astronomy-club.png",
  },
  {
    id: "mobile-space-lab",
    title: "Mobile Space Lab",
    icon: Rocket,
    desc: "A Space Lab on wheels, bringing hands-on space education directly to schools and villages our fixed labs can't reach.",
    image: "/images/mobile-space-lab/1.png",
    status: "Coming Soon",
  },
];

export default function Index() {
  return (
    <div>
      {/* Hero */}
      <section className="relative -mt-20 flex min-h-[92vh] items-center overflow-hidden pt-20">
        {/* Full-bleed background video, scoped to this hero section only (shows behind the transparent navbar since it sits at the top of the page) */}
        <video
          src="/videos/hero-video1.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        {/* Dark overlay for text readability over the video */}
        <div className="absolute inset-0 -z-10 bg-black/60" />

        <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-20 sm:px-6 sm:py-24 lg:grid-cols-2 lg:items-center lg:px-10">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary">
              <Rocket size={14} /> Space E Schoylar
            </span>
            <h1 className="mt-6 font-heading text-3xl font-extrabold leading-tight text-foreground sm:text-5xl lg:text-6xl">
              Mission Space for{" "}
              <span className="cosmic-text">Every Child</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              A registered NGO (RNPO, 2023) inspiring and empowering underprivileged children through space education — and it's boundless career possibilities.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:gap-4">
              <Link
                to="/donation"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 font-bold text-primary-foreground shadow-glow transition-all duration-300 hover:scale-105 hover:shadow-glow-lg sm:w-auto"
              >
                Donate Now
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
              <Link
                to="/our-projects"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-3.5 font-bold text-foreground backdrop-blur-md transition-all duration-300 hover:border-primary/40 hover:bg-white/10 sm:w-auto"
              >
                Explore Our Projects
              </Link>
            </div>
          </div>

          <div className="relative hidden min-h-[420px] items-center justify-center lg:flex" />
        </div>

        {/* Decorative astronaut animation, right side of Hero */}
        <div
          className="pointer-events-none absolute z-20 hidden sm:block"
          style={{
            left: "74%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            width: "clamp(340px, 34vw, 620px)",
          }}
          aria-hidden="true"
        >
          <video
            src="/videos/space-runner.webm"
            autoPlay
            loop
            muted
            playsInline
            className="h-auto w-full"
          />
        </div>
      </section>

      {/* About */}
      <section className="section-padding relative">
        <div className="mx-auto max-w-6xl">
          <Reveal className="text-center">
            <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">
              About <span className="cosmic-text">Us</span>
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:items-start lg:gap-14">
            <div className="lg:sticky lg:top-28">
              <Reveal delay={100}>
                <div className="glass-panel overflow-hidden p-0">
                  <img
                    src="/images/about-us.png"
                    alt="Space and Astronomy classroom set up by Space E Schoylar"
                    className="max-h-[620px] w-full object-cover"
                  />
                </div>
              </Reveal>
            </div>

            <Reveal delay={150}>
              <div className="glass-panel space-y-5 p-5 text-left text-muted-foreground sm:p-10">
                <p className="leading-relaxed">
                  Welcome to Space E Schoylar (SES) — where the cosmos becomes the classroom, and children who've never had access to science education get to reach for the stars.
                </p>
                <p className="leading-relaxed">
                  SES is a registered NGO (RNPO, 2023) working to bring space science and STEM education to underprivileged and rural children across India. We've built 5 Space Labs — spaces equipped with telescopes, hands-on rocket and propulsion models, and space-themed learning environments — with a vision to reach 50.
                </p>
                <p className="leading-relaxed">
                  Through our "Girls in Space" program, nearly 100 girls have completed training across 4 batches, breaking barriers in astronomy and STEM. Our Stargazing Program has reached over 10,500 children across 104 government schools, alongside satellite demonstrations and model rocket workshops.
                </p>
                <p className="leading-relaxed">
                  We partner with Himalayan Space Centre, an ISRO-certified space education partner, to bring real, hands-on space science into classrooms that have never had access to it before.
                </p>
                <p className="leading-relaxed">
                  This isn't just about teaching astronomy — it's about showing children from every background that science, discovery, and the universe itself belong to them too.
                </p>
                <p className="leading-relaxed font-bold">
                  Join us on our mission: Space for Every Child.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Our Projects preview */}
      <section className="section-padding relative">
        <div className="mx-auto max-w-7xl">
          <Reveal className="text-center">
            <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">
              Our <span className="cosmic-text">Projects</span>
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PROJECTS.map((project, i) => (
              <Reveal key={project.title} delay={i * 100}>
                <div className="glass-card relative flex h-full flex-col overflow-hidden p-0">
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                    {project.status && (
                      <span className="absolute right-3 top-3 rounded-full bg-primary px-3 py-1 text-xs font-bold uppercase tracking-wide text-primary-foreground shadow-glow">
                        {project.status}
                      </span>
                    )}
                  </div>
                  <div className="p-6 pb-20">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <project.icon size={24} />
                    </div>
                    <h3 className="mt-5 font-heading text-lg font-bold text-foreground">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {project.desc}
                    </p>
                  </div>
                  <Link
                    to={`/our-projects#${project.id}`}
                    className="group/btn absolute bottom-6 left-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-5 py-2.5 text-sm font-bold text-primary transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
                  >
                    View Project
                    <ArrowRight
                      size={16}
                      className="transition-transform group-hover/btn:translate-x-1"
                    />
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-10 text-center" delay={200}>
            <Link
              to="/our-projects"
              className="inline-flex items-center gap-2 font-bold text-primary transition-transform hover:translate-x-1"
            >
              See All Events <ArrowRight size={18} />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Why space education matters */}
      <section className="section-padding relative">
        <Reveal>
          <div className="glass-panel mx-auto max-w-4xl p-6 text-center sm:p-10">
            <h2 className="font-heading text-3xl font-bold text-foreground">
              Why Space Education matters?
            </h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              Space education opens doors to limitless possibilities. It not
              only sparks curiosity but also fuels innovation and scientific
              progress. By supporting our cause, you contribute to a brighter
              future driven by knowledge and exploration.
            </p>
          </div>
        </Reveal>
      </section>

      {/* Training partner */}
      <section className="section-padding relative">
        <div className="mx-auto max-w-5xl text-center">
          <Reveal>
            <span className="text-sm font-bold uppercase tracking-widest text-primary">
              Our Training Partner
            </span>
            <h2 className="mt-3 font-heading text-3xl font-bold text-foreground sm:text-4xl">
              Himalayan Space Centre
            </h2>
            <p className="mt-2 text-muted-foreground">
              An ISRO Certified Space Tutor
            </p>
          </Reveal>

          <Reveal delay={100}>
            <div className="glass-panel mt-10 p-5 text-left sm:p-10">
              <img
                src="/images/himalayan-space-centre-logo.png"
                alt="Himalayan Space Centre"
                className="mx-auto mb-6 w-full max-w-[10rem] sm:float-right sm:ml-6 sm:mb-4 sm:max-w-[12rem]"
              />
              <h3 className="font-heading text-2xl font-bold text-foreground">
                Bridging the Gap between Earth and Beyond...
              </h3>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                At Space E Schoylar, we go beyond starry lessons, linking
                space with practical uses. We ignite aspirations, encouraging
                youth to envision expansive futures in STEAM careers, paving
                the way for brighter prospects for both themselves and the
                planet.
              </p>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Exploring space opens boundless opportunities, igniting
                curiosity and driving innovation. Your support fuels a
                brighter future built on knowledge and exploration, advancing
                scientific progress for generations to come.
              </p>
              <div className="clear-both" />
              <a
                href="https://himalayanspacecentre.org/"
                target="_blank"
                rel="noreferrer"
                className="group mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-bold text-primary-foreground shadow-glow transition-all duration-300 hover:scale-105 hover:shadow-glow-lg"
              >
                View Site
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <WhatWeDoJourney />

      {/* CTA */}
      <section className="section-padding relative">
        <Reveal>
          <div className="glass-panel mx-auto flex max-w-4xl flex-col items-center gap-6 p-6 text-center sm:p-10">
            <h2 className="font-heading text-2xl font-bold text-foreground sm:text-3xl">
              Ready to help us reach for the stars?
            </h2>
            <p className="max-w-xl text-muted-foreground">
              Your support fuels education, exploration, and a brighter
              future for underprivileged children.
            </p>
            <Link
              to="/donation"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 font-bold text-primary-foreground shadow-glow transition-all duration-300 hover:scale-105 hover:shadow-glow-lg"
            >
              Join The Cause <ArrowRight size={18} />
            </Link>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
