import { useRef } from "react";
import {
  Award,
  GraduationCap,
  Rocket,
  Sparkles,
  Telescope,
  Wrench,
} from "lucide-react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

const ACTIVITIES = [
  {
    title: "Set-Up Astronomy and Space Laboratory",
    icon: Telescope,
    point: 0.1,
  },
  {
    title: "Educate students on Space and Astronomy and its related avenues",
    icon: GraduationCap,
    point: 0.21,
  },
  {
    title: "Organize various workshops on Celestial Events",
    icon: Sparkles,
    point: 0.32,
  },
  {
    title: "Conduct practical trainings on Model Making and its applications",
    icon: Wrench,
    point: 0.43,
  },
  {
    title: "Generate self-awareness and competitive leadership opportunities",
    icon: Award,
    point: 0.54,
  },
  {
    title: "Assist the students in various space science projects",
    icon: Rocket,
    point: 0.65,
  },
  {
    title: "Arrange visits to related exhibitories",
    icon: Telescope,
    point: 0.76,
  },
  {
    title: "Provision of Scholarships",
    icon: GraduationCap,
    point: 0.87,
  },
];

// Slightly wider fade window than the raw scroll delta between cards so
// each card cross-fades in gently instead of popping in abruptly.
const REVEAL_WINDOW = 0.1;

function JourneyCard({
  activity,
  index,
  progress,
}: {
  activity: (typeof ACTIVITIES)[number];
  index: number;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
}) {
  const start = Math.max(0, activity.point - REVEAL_WINDOW);

  const opacity = useTransform(
    progress,
    [start, activity.point, 1],
    [0, 1, 1],
  );

  const y = useTransform(
    progress,
    [start, activity.point, 1],
    [24, 0, 0],
  );

  const scale = useTransform(
    progress,
    [start, activity.point, 1],
    [0.97, 1, 1],
  );

  const boxShadow = useTransform(
    progress,
    [start, activity.point, activity.point + 0.06, 1],
    [
      "0 10px 35px rgba(0,0,0,0.28)",
      "0 0 34px rgba(34,211,238,0.42)",
      "0 10px 35px rgba(0,0,0,0.28)",
      "0 10px 35px rgba(0,0,0,0.28)",
    ],
  );

  const Icon = activity.icon;

  return (
    <motion.article
      style={{ opacity, y, scale, boxShadow }}
      className={`journey-card journey-card-${index}`}
    >
      <span className="journey-card-number">0{index + 1}</span>

      <span className="journey-card-icon">
        <Icon size={18} aria-hidden="true" />
      </span>

      <p>{activity.title}</p>
    </motion.article>
  );
}

export default function WhatWeDoJourney() {
  const sectionRef = useRef<HTMLElement>(null);

  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // A spring-smoothed copy of scroll progress drives every visual so the
  // rocket and cards glide with the scroll instead of snapping to it.
  // When the user prefers reduced motion we fall back to the raw value so
  // there's no extra spring settle animation.
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 30,
    mass: 0.6,
  });

  const progress = reduceMotion ? scrollYProgress : smoothProgress;

  // Vertical travel: rocket climbs from low in the section up toward the
  // cards, but stops well short of the heading/tagline block.
  //
  // This is expressed as a "top" percentage of the .journey-stage
  // container (not a vh-based transform). vh is relative to the browser
  // viewport, which can be taller or shorter than the stage itself —
  // that mismatch is what was pushing the rocket up into the heading.
  // Percentage "top" is relative to the stage's own height, so the range
  // below stays correctly clamped between the tagline and the scroll cue
  // no matter the viewport size.
  const rocketTop = useTransform(progress, [0, 1], ["84%", "33%"]);

  // Horizontal drift kept intentionally tiny (a few px either side) so the
  // rocket reads as "mostly vertical" motion and stays inside the gap
  // between the two card columns. The -50% keeps it centered regardless
  // of any transform the surrounding CSS may also try to apply.
  const rocketDrift = useTransform(
    progress,
    [0, 0.24, 0.5, 0.76, 1],
    [0, -4, 4, -3, 0],
  );
  const rocketX = useTransform(rocketDrift, (drift) => `calc(-50% + ${drift}px)`);

  const flameScale = useTransform(progress, [0, 1], [0.85, 1.15]);

  return (
    <section
      ref={sectionRef}
      className="journey-section"
      aria-labelledby="what-we-do-heading"
    >
      <div className="journey-stage">

        {/* Background Aurora */}
        <div
          className="journey-aurora"
          aria-hidden="true"
        />

        {/* Heading */}
        <div className="journey-heading">
          <span>OUR MISSION IN MOTION</span>

          <h2 id="what-we-do-heading">
            What We <em>Do?</em>
          </h2>

          <p>
            Scroll to follow our journey through space education.
          </p>
        </div>

        {/* Activity Cards */}
        <div
          className="journey-cards"
          aria-live="polite"
        >
          {ACTIVITIES.map((activity, index) => (
            <JourneyCard
              key={activity.title}
              activity={activity}
              index={index}
              progress={progress}
            />
          ))}
        </div>

        {/* ORIGINAL SVG ROCKET, now with the flame merged into the same SVG
            so it can never drift away from the rocket body. */}
        <motion.div
          className="journey-rocket"
          style={
            reduceMotion
              ? {
                  position: "absolute",
                  top: "55%",
                  left: "50%",
                  x: "-50%",
                  width: "68px",
                }
              : {
                  position: "absolute",
                  top: rocketTop,
                  left: "50%",
                  x: rocketX,
                  width: "68px",
                }
          }
          aria-hidden="true"
        >
          {/* Rocket Smoke */}
          <span className="journey-smoke journey-smoke-one" />

          <span className="journey-smoke journey-smoke-two" />

          {/* Rocket Body + Flame, one SVG so they always move as a unit */}
          <div className="journey-rocket-body">
            <svg
              viewBox="0 0 92 150"
              role="presentation"
              focusable="false"
              style={{ width: "100%", height: "auto", overflow: "visible" }}
            >
              <defs>

                {/* Rocket Body Gradient */}
                <linearGradient
                  id="rocket-body"
                  x1="0"
                  x2="1"
                >
                  <stop stopColor="#8fa4b5" />

                  <stop
                    offset="0.48"
                    stopColor="#f5fbff"
                  />

                  <stop
                    offset="1"
                    stopColor="#7b91a3"
                  />
                </linearGradient>

                {/* Rocket Nose Gradient */}
                <linearGradient
                  id="rocket-nose"
                  x1="0"
                  x2="1"
                >
                  <stop stopColor="#d9e8f1" />

                  <stop
                    offset="1"
                    stopColor="#638196"
                  />
                </linearGradient>

                {/* Rocket Window */}
                <radialGradient id="rocket-window">
                  <stop stopColor="#b9f5ff" />

                  <stop
                    offset="0.65"
                    stopColor="#177ea4"
                  />

                  <stop
                    offset="1"
                    stopColor="#083951"
                  />
                </radialGradient>

                {/* Flame Gradient */}
                <linearGradient
                  id="rocket-flame"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop stopColor="#fff3d6" />
                  <stop offset="0.5" stopColor="#ffb45a" />
                  <stop offset="1" stopColor="#ff7a3d" />
                </linearGradient>
              </defs>

              {/* Main Rocket Body */}
              <path
                d="M46 5C23 26 18 57 18 101h56C74 57 69 26 46 5Z"
                fill="url(#rocket-body)"
                stroke="#d8f3ff"
                strokeWidth="1.5"
              />

              {/* Rocket Nose */}
              <path
                d="M46 5C35 15 29 27 25 41h42C63 27 57 15 46 5Z"
                fill="url(#rocket-nose)"
                opacity=".96"
              />

              {/* Rocket Window */}
              <ellipse
                cx="46"
                cy="55"
                rx="12"
                ry="12"
                fill="url(#rocket-window)"
                stroke="#e2faff"
                strokeWidth="2"
              />

              {/* Left Fin */}
              <path
                d="M19 89 4 114v20l20-13 8-21Z"
                fill="#4e6d82"
                stroke="#b6d7e7"
                strokeWidth="1.2"
              />

              {/* Right Fin */}
              <path
                d="M73 89 88 114v20l-20-13-8-21Z"
                fill="#4e6d82"
                stroke="#b6d7e7"
                strokeWidth="1.2"
              />

              {/* Bottom Engine */}
              <path
                d="M29 100h34l-5 29H34Z"
                fill="#304f64"
                stroke="#d5effc"
                strokeWidth="1"
              />

              {/* Flame — lives inside the rocket SVG so it is always
                  glued directly under the engine and scales from the
                  engine's base rather than drifting sideways. */}
              <motion.path
                d="M37 130h18l-9 14Z"
                fill="url(#rocket-flame)"
                opacity=".92"
                style={{
                  scaleY: flameScale,
                  transformOrigin: "46px 130px",
                }}
              />
            </svg>
          </div>
        </motion.div>

        {/* Scroll Progress */}
        <div
          className="journey-progress"
          aria-hidden="true"
        >
          <motion.span
            style={{
              scaleY: progress,
            }}
          />
        </div>

        {/* Scroll Cue */}
        <p className="journey-scroll-cue">
          Scroll to launch
        </p>

      </div>
    </section>
  );
}