import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import { PROJECTS } from "@/lib/projects";

export default function ProjectDetail() {
  const { projectId } = useParams();
  const project = PROJECTS.find((item) => item.id === projectId);

  if (!project) {
    return <div className="section-padding mx-auto max-w-5xl text-center text-muted-foreground">Project not found.</div>;
  }

  return (
    <div className="section-padding mx-auto max-w-6xl">
      <Link to="/our-projects" className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:underline">
        <ArrowLeft size={17} /> All projects
      </Link>
      <Reveal className="mt-8 max-w-3xl">
        <span className="text-sm font-bold uppercase tracking-widest text-primary">Project gallery</span>
        <h1 className="mt-3 font-heading text-4xl font-extrabold text-foreground sm:text-5xl">{project.title}</h1>
        <div className="mt-5 space-y-4 leading-relaxed text-muted-foreground">
          {Array.isArray(project.desc) ? (
            project.desc.map((paragraph) => <p key={paragraph}>{paragraph}</p>)
          ) : (
            <p>{project.desc}</p>
          )}
        </div>
        {"cta" in project && (
          <Link
            to={project.cta.to}
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-bold text-primary-foreground shadow-glow transition-all duration-300 hover:scale-105 hover:shadow-glow-lg"
          >
            {project.cta.label} <ArrowRight size={18} />
          </Link>
        )}
      </Reveal>
      {"gallerySections" in project ? (
        <div className="mt-12 space-y-12">
          {project.gallerySections.map((section, sectionIndex) => (
            <section key={section.title}>
              <h2 className="font-heading text-2xl font-bold text-foreground">
                {section.title}
              </h2>
              {section.images.length > 0 ? (
                <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {section.images.map((image, index) => (
                    <Reveal key={`${image}-${index}`} delay={sectionIndex * 100 + index * 75}>
                      <div className="glass-card overflow-hidden p-0">
                        <img src={image} alt={`${project.title} ${section.title} gallery ${index + 1}`} className="aspect-[4/3] w-full object-cover transition-transform duration-700 hover:scale-105" />
                      </div>
                    </Reveal>
                  ))}
                </div>
              ) : (
                <p className="mt-3 text-muted-foreground">Photos from this batch will be added soon.</p>
              )}
            </section>
          ))}
        </div>
      ) : project.gallery.length > 0 ? (
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {project.gallery.map((image, index) => (
            <Reveal key={`${image}-${index}`} delay={index * 100}>
              <div className="glass-card overflow-hidden p-0">
                <img src={image} alt={`${project.title} gallery ${index + 1}`} className="aspect-[4/3] w-full object-cover transition-transform duration-700 hover:scale-105" />
              </div>
            </Reveal>
          ))}
        </div>
      ) : null}
    </div>
  );
}
