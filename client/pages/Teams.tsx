import { useState } from "react";
import Reveal from "@/components/Reveal";

const TEAM = [
  { name: "Shreedevi Roogi", role: "Founder and President", image: "/images/teams/shreedevi.webp" },
  { name: "Veeresh Patil", role: "Director", image: "/images/teams/veeresh.webp" },
  { name: "Suma Nalawadi", role: "Space Tutor", image: "/images/teams/suma.webp" },
  { name: "Pramuda P Agnihotri", role: "Space Tutor", image: "/images/teams/pramuda.webp" },
];

const VOLUNTEERS = [
  { name: "Ruchi Mahajan", role: "Volunteer", image: "/images/teams/ruchi.webp" },
  // Current WYD roster, sourced from https://writeyourdestiny.in/about-us/
  { name: "Sanghamitra Sur", role: "Lead Talent Acquisition", image: "/images/teams/wyd-sanghamitra.jpg" },
  { name: "Divya Isari", role: "Talent Acquisition Partner", image: "/images/teams/wyd-divya.jpeg" },
  { name: "Pooja Kolkar", role: "Talent Acquisition Partner", image: "/images/teams/wyd-pooja.jpeg" },
  { name: "Akshata Bhandage", role: "Talent Acquisition Partner", image: "/images/teams/wyd-akshata.jpeg" },
  { name: "Bharati Agadi", role: "Talent Acquisition Partner", image: "/images/teams/wyd-bharati.jpg" },
  { name: "Vaishnavi Hiremorab", role: "Business Development Executive", image: "/images/teams/wyd-vaishnavi.jpeg" },
  { name: "Meghana Athani", role: "Volunteer", image: "/images/teams/meghana.webp" },
  { name: "Chetana Chavanagoudar", role: "Volunteer", image: "/images/teams/chetana.webp" },
];

function initials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

function TeamAvatar({ name, image }: { name: string; image: string }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className="flex h-24 w-24 items-center justify-center rounded-full border-2 border-primary/40 bg-primary/10 font-heading text-2xl font-bold text-primary sm:h-36 sm:w-36">
        {initials(name)}
      </div>
    );
  }

  return (
    <div className="h-24 w-24 overflow-hidden rounded-full border-2 border-primary/40 bg-primary/10 sm:h-36 sm:w-36">
      <img
        src={image}
        alt={name}
        className="h-full w-full object-cover"
        onError={() => setFailed(true)}
      />
    </div>
  );
}

function TeamGrid({ members }: { members: typeof TEAM }) {
  return (
    <div className="grid grid-cols-2 gap-3 sm:gap-6 sm:grid-cols-4">
      {members.map((member, i) => (
        <Reveal key={member.name} delay={i * 60}>
          <div className="glass-card flex h-full flex-col items-center gap-4 p-4 text-center sm:gap-5 sm:p-8">
            <TeamAvatar name={member.name} image={member.image} />
            <div>
              <h3 className="font-heading text-sm font-bold text-foreground">
                {member.name}
              </h3>
              <p className="mt-1 text-xs font-medium text-primary/80">
                {member.role}
              </p>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

export default function Teams() {
  return (
    <div className="section-padding mx-auto max-w-6xl">
      <Reveal className="text-center">
        <span className="text-sm font-bold uppercase tracking-widest text-primary">
          The people behind SES
        </span>
        <h1 className="mt-3 font-heading text-4xl font-extrabold text-foreground sm:text-5xl">
          Our <span className="cosmic-text">Team</span>
        </h1>
      </Reveal>

      <div className="mt-10 sm:mt-14">
        <TeamGrid members={TEAM} />
      </div>

      <section className="mt-14 sm:mt-20" aria-labelledby="volunteers-heading">
        <Reveal>
          <h2
            id="volunteers-heading"
            className="font-heading text-2xl font-extrabold text-foreground sm:text-3xl"
          >
            <span className="cosmic-text">Volunteers</span>
          </h2>
        </Reveal>
        <div className="mt-6 sm:mt-8">
          <TeamGrid members={VOLUNTEERS} />
        </div>
      </section>
    </div>
  );
}
