import { useState } from "react";
import Reveal from "@/components/Reveal";

const TEAM = [
  { name: "Shreedevi Roogi", role: "Founder and President", image: "/images/teams/shreedevi.webp" },
  { name: "Veeresh Patil", role: "Director", image: "/images/teams/veeresh.webp" },
  { name: "Suma Nalawadi", role: "Space Tutor", image: "/images/teams/suma.webp" },
  { name: "Meghana", role: "Space Tutor", image: "/images/teams/meghana.webp" },
  { name: "Pramuda P Agnihotri", role: "Space Tutor", image: "/images/teams/pramuda.webp" },
  { name: "Riya Maloo", role: "Marketing Executive", image: "/images/teams/riya.webp" },
  { name: "Sabila Mulla", role: "Volunteer", image: "/images/teams/sabila.webp" },
  { name: "Ruchi Mahajan", role: "Volunteer", image: "/images/teams/ruchi.webp" },
  { name: "Aishwarya Kadam", role: "Volunteer", image: "/images/teams/aishwarya.webp" },
  { name: "Shreya Agarwal", role: "Volunteer", image: "/images/teams/shreya.webp" },
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

      <div className="mt-10 grid grid-cols-2 gap-3 sm:mt-14 sm:gap-6 sm:grid-cols-4">
        {TEAM.map((member, i) => (
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
    </div>
  );
}
