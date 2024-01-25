import React from "react";
import { CardContainer } from "./card-container";
import { CardProject } from "./card-project";

const projects = [
  {
    title: "Course Sign-In Dashboard",
    image: "/media/projects/course-signin-dashboard.webp",
    github_link: "https://github.com/cameronmcginley/CourseDashboard/",
    public_link: "https://coursedashboard.web.app/",
    description:
      "Manage courses and attendees with QR code sign-ins, tracking, and data handling, supporting efficient administration with data export and querying.",
    tools: [
      {
        name: "JavaScript",
        link: "https://www.javascript.com/",
      },
      {
        name: "React",
        link: "https://reactjs.org/",
      },
      {
        name: "Node.js",
        link: "https://nodejs.org/en/",
      },
      {
        name: "Firebase",
        link: "https://firebase.google.com/",
      },
    ],
  },
  {
    title: "Brainf**k Interpreter",
    image: "/media/projects/brainfk.webp",
    github_link:
      "https://github.com/cameronmcginley/optimized-brainfk-interpreter",
    description:
      "Interpreter for the brainf**k programming language, enhanced with instruction condensing and peephole optimization for improved execution efficiency.",
    tools: [
      {
        name: "C++",
        link: "https://www.cplusplus.com/",
      },
      {
        name: "Brainf**k",
        link: "https://esolangs.org/wiki/Brainfuck",
      },
    ],
  },
  {
    title: "Projectile Points Database",
    image: "/media/projects/projectile-points.webp",
    github_link:
      "https://github.com/cameronmcginley/projectile-points-web-database",
    public_link: "http://projectile-points-database.vercel.app/",
    description:
      "Web app serving as a dynamic database for archaelogical projectile point data. Inspired by projectilepoints.net and designed with greater structure and maintainability.",
    tools: [
      {
        name: "TypeScript",
        link: "https://www.typescriptlang.org/",
      },
      {
        name: "Next.js",
        link: "https://nextjs.org/",
      },
      {
        name: "GraphQL",
        link: "https://graphql.org/",
      },
      {
        name: "PostgreSQL",
        link: "https://www.postgresql.org/",
      },
    ],
  },
  {
    title: "Sorting Visualizer",
    image: "/media/projects/sorting-vis.webm",
    github_link: "https://github.com/cameronmcginley/sorting-visualizer/",
    public_link: "https://cameronmcginley.com/sorting-visualizer/",
    description:
      "Interactive visualizer for sorting algorithms including bubble, merge, radix, and bogo sort, with customizable delay, array size, and sound settings.",
    tools: [
      {
        name: "JavaScript",
        link: "https://www.javascript.com/",
      },
      {
        name: "React",
        link: "https://reactjs.org/",
      },
    ],
  },
  {
    title: "ML Algorithm Tester",
    image: "/media/projects/ml-test.webp",
    github_link: "https://github.com/cameronmcginley/ml-algorithm-testing",
    description:
      "Tool for assessing and visualizing machine learning algorithm performance, featuring easy integration of new models and automatic hyperparameter optimization.",
    tools: [
      {
        name: "Python",
        link: "https://www.python.org/",
      },
      {
        name: "scikit-learn",
        link: "https://scikit-learn.org/",
      },
    ],
  },
  {
    title: "Roblox Object Placement",
    image: "/media/projects/rblx-placement.webm",
    github_link: "https://github.com/cameronmcginley/RBLX-PlacementSystem/",
    public_link:
      "https://www.roblox.com/games/7619626087/Placement-System-Demo",
    description:
      "Roblox project featuring an object placement system with raycasting, client-server communication, customizable object design, per-account saving, and Rojo Git integration.",
    tools: [
      {
        name: "Lua",
        link: "https://www.lua.org/",
      },
      {
        name: "Roblox",
        link: "https://www.roblox.com/",
      },
      {
        name: "Rojo",
        link: "https://rojo.space/",
      },
    ],
  },
  {
    title: "Personal Website",
    image: "/media/projects/personal-site.webp",
    github_link: "https://github.com/cameronmcginley/personal-site-v2",
    description:
      "This one! Simple portfolio built with Next.js and deployed with Vercel. Lots of playing around to make the design somewhat decent.",
    tools: [
      {
        name: "Next.js",
        link: "https://nextjs.org/",
      },
      {
        name: "TypeScript",
        link: "https://www.typescriptlang.org/",
      },
      {
        name: "Vercel",
        link: "https://vercel.com/",
      },
      {
        name: "shadcn/ui",
        link: "https://ui.shadcn.com/",
      },
    ],
  },
];

export function SectionProjects() {
  return (
    <>
      <CardContainer>
        <div className="flex flex-col justify-center w-full">
          <div className="flex flex-col justify-center">
            <p className="text-center text-3xl font-bold pb-2">Projects</p>
            <p className="text-center pb-2">
              Here are some of my favorite projects I&apos;ve worked on. Read
              more via the GitHub links!
            </p>
          </div>
          <div className="flex justify-center">
            {/* <div className="pr-1 flex flex-col w-full items-center"> */}
            <div className="gap-8 flex flex-row flex-wrap justify-center">
              {projects.map((item, index) => (
                <CardProject
                  key={index}
                  title={item.title}
                  image={item.image}
                  github_link={item.github_link}
                  public_link={item.public_link}
                  description={item.description}
                  tools={item.tools}
                />
              ))}
              {/* Empty spacers to left align bottom */}
              <div className="w-72"></div>
              <div className="w-72"></div>
            </div>
          </div>
        </div>
      </CardContainer>
    </>
  );
}
