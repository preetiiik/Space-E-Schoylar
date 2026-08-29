import { Compass, Rocket, Sparkles, Telescope, Users } from "lucide-react";

export const PROJECTS = [
{
  id: "girl-in-space",
  title: "Girls in Space",
  icon: Sparkles,
  image: "/images/girl-in-space.png",

  desc: [
    `In many of the communities we work in, girls are rarely encouraged to pursue science — let alone dream of space. Our "Girls in Space" initiative was created to change that.`,

    `Through hands-on astronomy sessions, telescope observations, and STEM workshops, we help girls from underserved schools discover that science, discovery, and the universe belong to them too. Since launching this program, nearly 100 girls have completed training across 4 batches, gaining not just technical exposure but the confidence to see themselves as future scientists, engineers, and astronomers.`,

    `Every batch is a step closer to a simple belief: representation starts early.`
  ],

  gallery: [
    "/images/girl-in-space.png",
    "/images/women-astronomy-club.png",
    "/images/stargazing-astronomy.png"
  ],
  gallerySections: [
    {
      title: "1st Batch",
      images: [
        "/images/girls-in-space/batch1/1.webp",
        "/images/girls-in-space/batch1/2.webp",
        "/images/girls-in-space/batch1/3.webp",
        "/images/girls-in-space/batch1/4.webp",
        "/images/girls-in-space/batch1/5.webp",
        "/images/girls-in-space/batch1/6.webp",
        "/images/girls-in-space/batch1/7.webp",
        "/images/girls-in-space/batch1/8.webp",
        "/images/girls-in-space/batch1/9.webp",
        "/images/girls-in-space/batch1/10.webp",
        "/images/girls-in-space/batch1/11.webp",
        "/images/girls-in-space/batch1/12.webp",
        "/images/girls-in-space/batch1/13.webp",
        "/images/girls-in-space/batch1/14.webp",
      ],
    },
    {
      title: "2nd Batch",
      images: [
        "/images/girls-in-space/batch2/1.webp",
        "/images/girls-in-space/batch2/2.webp",
        "/images/girls-in-space/batch2/3.webp",
        "/images/girls-in-space/batch2/4.webp",
        "/images/girls-in-space/batch2/5.webp",
        "/images/girls-in-space/batch2/6.webp",
        "/images/girls-in-space/batch2/7.webp",
        "/images/girls-in-space/batch2/8.webp",
        "/images/girls-in-space/batch2/9.webp",
        "/images/girls-in-space/batch2/10.webp",
        "/images/girls-in-space/batch2/11.webp",
        "/images/girls-in-space/batch2/12.webp",
        "/images/girls-in-space/batch2/13.webp",
        "/images/girls-in-space/batch2/14.webp",
        "/images/girls-in-space/batch2/15.webp",
        "/images/girls-in-space/batch2/16.webp",
        "/images/girls-in-space/batch2/17.webp",
        "/images/girls-in-space/batch2/18.webp",
      ],
    },
    {
      title: "3rd Batch",
      images: [
        "/images/girls-in-space/batch3/1.jpeg",
        "/images/girls-in-space/batch3/2.jpeg",
        "/images/girls-in-space/batch3/3.jpeg",
        "/images/girls-in-space/batch3/4.jpeg",
        "/images/girls-in-space/batch3/5.jpeg",
      ],
    },
  ],
},
  {
    id: "astronomy-space-lab",
    title: "Astronomy And Space Lab In Government Schools",
    icon: Telescope,
    image: "/images/astronomy-spacelab.png",
    desc: "We set up dedicated astronomy and space laboratories inside government schools, giving underprivileged students direct, hands-on access to telescopes, models, and space-science learning tools.",
    gallery: ["/images/astronomy-spacelab.png", "/images/about-us.png", "/images/stargazing-astronomy.png"],
    gallerySections: [
      {
        title: "Overview",
        images: [
          "/images/astronomy-space-lab/overview/1.webp",
          "/images/astronomy-space-lab/overview/2.webp",
          "/images/astronomy-space-lab/overview/3.webp",
        ],
      },
      {
        title: "Lab 1",
        images: [
          "/images/astronomy-space-lab/lab1/1.webp",
          "/images/astronomy-space-lab/lab1/2.webp",
          "/images/astronomy-space-lab/lab1/3.webp",
        ],
      },
      {
        title: "Lab 2",
        images: [
          "/images/astronomy-space-lab/lab2/1.webp",
          "/images/astronomy-space-lab/lab2/2.webp",
          "/images/astronomy-space-lab/lab2/3.webp",
        ],
      },
      {
        title: "Lab 3",
        images: [
          "/images/astronomy-space-lab/lab3/1.webp",
          "/images/astronomy-space-lab/lab3/2.webp",
        ],
      },
    ],
  },
{
  id: "star-gazing-astronomy",
  title: "Star Gazing And Astronomy",
  icon: Compass,
  image: "/images/stargazing-astronomy.png",

  desc: [
    `For most children in the communities we work with, the night sky is something they've only seen — never truly explored. Our Star Gazing and Astronomy sessions bring that experience to life.`,

    `Using professional telescopes, our team travels to schools, community centers, and residential homes to give children a first-hand look at the Moon's craters, planets like Jupiter and Mars, distant constellations, and even artificial satellites moving across the sky. Each session is guided by our team along with astronomy experts and partner organizations, turning a simple night under the stars into a child's first real encounter with space science.`,

    `We've conducted these sessions across 104 government schools, reaching over 10,500 children — with many more sessions ongoing.`
  ],

  gallery: [
    "/images/stargazing/1.webp",
    "/images/stargazing/2.webp",
    "/images/stargazing/3.webp",
  ],
}, 
  {
    id: "women-astronomy-club",
    title: "Women Astronomy Club",
    icon: Users,
    image: "/images/women-astronomy-club.png",
    desc: "A dedicated club that creates leadership and learning opportunities for women in astronomy, building a supportive community for the next generation of space scientists.",
    gallery: [
      "/images/women-club/1.webp",
      "/images/women-club/2.webp",
      "/images/women-club/3.webp",
    ],
  },
  {
    id: "mobile-space-lab",
    title: "Mobile Space Lab — Space Lab on Wheels",
    icon: Rocket,
    image: "/images/mobile-space-lab/1.png",
    status: "Coming Soon",
    desc: [
      "Not every child can travel to a Space Lab — so we're bringing the lab to them.",
      "We're developing a Mobile Space Lab: a 40-seater bus fully converted into a moving cosmic classroom, designed to reach schools and villages our fixed labs cannot. Every surface inside will be built to teach — the ceiling mapping moon phases, constellations, and satellites, while the walls illustrate eclipses, rocket stages, and orbital paths. Seat-back panels will bring learning to every student with flip charts, QR codes, mini models, and VR space activities. At the rear, a holographic demo zone will let children interact with solar system displays and hands-on experiments — turning every journey into an immersive science experience.",
      "This project is currently in the development and fundraising stage. With your support, we can bring space education directly to the doorstep of children who've never had access to it.",
    ],
    gallery: [
      "/images/mobile-space-lab/1.png",
      "/images/mobile-space-lab/2.jpeg",
      "/images/mobile-space-lab/3.jpeg",
    ],
    cta: {
      label: "Contact Us to Partner",
      to: "/contact",
    },
  },
] as const;