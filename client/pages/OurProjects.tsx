import { Link } from "react-router-dom";
import Reveal from "@/components/Reveal";
import { PROJECTS } from "@/lib/projects";

export default function OurProjects() {
  return (
    <div className="section-padding mx-auto max-w-6xl">
      <Reveal className="text-center">
        <span className="text-sm font-bold uppercase tracking-widest text-primary">
          What we're building
        </span>
        <h1 className="mt-3 font-heading text-4xl font-extrabold text-foreground sm:text-5xl">
          Our <span className="cosmic-text">Projects</span>
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">
          From classrooms to the night sky, every project we run is designed
          to bring space education within reach of every child.
        </p>
      </Reveal>

      <div className="mt-16 space-y-8">
        {PROJECTS.map((project, i) => (
          <Reveal key={project.title} delay={i * 100}>
            <Link
              to={`/our-projects/${project.id}`}
              className={`glass-card flex flex-col gap-6 p-8 sm:p-10 lg:flex-row lg:items-center ${
                i % 2 === 1 ? "lg:flex-row-reverse" : ""
              } group cursor-pointer`}
            >
              <div className="relative h-48 w-full flex-shrink-0 overflow-hidden rounded-2xl sm:h-56 lg:h-40 lg:w-56">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {"status" in project && (
                  <span className="absolute right-3 top-3 rounded-full bg-primary px-3 py-1 text-xs font-bold uppercase tracking-wide text-primary-foreground shadow-glow">
                    {project.status}
                  </span>
                )}
              </div>
              <div>
                <h2 className="font-heading text-2xl font-bold text-foreground">
                  {project.title}
                </h2>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  {project.desc}
                </p>
                <span className="mt-5 inline-block text-sm font-bold text-primary">View project gallery →</span>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </div>
  );
}