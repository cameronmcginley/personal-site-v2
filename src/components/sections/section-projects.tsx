import React from "react";
import { CardProject } from "../section-ui/card-project";

export type Tool = {
  name: string;
  link: string;
};

const tools = {
  cpp: {
    name: "C++",
    link: "https://isocpp.org/",
  },
  typescript: {
    name: "TypeScript",
    link: "https://www.typescriptlang.org/",
  },
  next: {
    name: "Next.js",
    link: "https://nextjs.org/",
  },
  lambda: {
    name: "AWS Lambda",
    link: "https://aws.amazon.com/lambda/",
  },
  dynamodb: {
    name: "DynamoDB",
    link: "https://aws.amazon.com/dynamodb/",
  },
  redis: {
    name: "Redis",
    link: "https://redis.io/",
  },
  apigw: {
    name: "API Gateway",
    link: "https://aws.amazon.com/api-gateway/",
  },
  digitalocean: {
    name: "DigitalOcean",
    link: "https://www.digitalocean.com/",
  },
  javascript: {
    name: "JavaScript",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  react: {
    name: "React",
    link: "https://reactjs.org/",
  },
  nodejs: {
    name: "Node.js",
    link: "https://nodejs.org/",
  },
  firebase: {
    name: "Firebase",
    link: "https://firebase.google.com/",
  },
  graphql: {
    name: "GraphQL",
    link: "https://graphql.org/",
  },
  postgres: {
    name: "PostgreSQL",
    link: "https://www.postgresql.org/",
  },
  python: {
    name: "Python",
    link: "https://www.python.org/",
  },
  scikitlearn: {
    name: "scikit-learn",
    link: "https://scikit-learn.org/",
  },
  lua: {
    name: "Lua",
    link: "https://www.lua.org/",
  },
  robloxstudio: {
    name: "Roblox Studio",
    link: "https://developer.roblox.com/",
  },
  rojo: {
    name: "Rojo",
    link: "https://rojo.space/",
  },
  brainfuck: {
    name: "Brainf**k",
    link: "https://esolangs.org/wiki/Brainfuck",
  },
};

export type Link = {
  title: string;
  url: string;
};

export type Project = {
  title: string;
  image: string;
  links?: Link[];
  description: string;
  tools: Tool[];
  scaleImg?: boolean;
};

const projects: Project[] = [
  {
    title: "SiteWatch",
    image: "/media/projects/sitewatch.webp",
    links: [
      {
        title: "GitHub",
        url: "https://github.com/cameronmcginley/sitewatch",
      },
      {
        title: "Public Site",
        url: "https://sitewatchapp.com/",
      },
    ],
    description:
      "Automates website monitoring by allowing users to upload URLs and configure pre-made 'check' functions, intervals, and alerts. The system scrapes data on a schedule from these URLs, analyzes it, and sends emails when conditions are met.",
    tools: [
      tools.typescript,
      tools.next,
      tools.lambda,
      tools.dynamodb,
      tools.redis,
      tools.apigw,
      tools.digitalocean,
    ],
  },
  {
    title: "Brainf**k Compiler",
    image: "/media/projects/brainfk.webp",
    links: [
      {
        title: "GitHub",
        url: "https://github.com/cameronmcginley/optimized-brainfk-interpreter",
      },
    ],
    description:
      "Compiler for the Brainf**k language, incorporating instruction folding and pattern recognition optimizations which typically results in a  decrease in instructions executed and runtime by over 99%.",
    tools: [tools.cpp, tools.brainfuck],
    scaleImg: true,
  },
  {
    title: "Projectile Points Database",
    image: "/media/projects/projectile-points.webp",
    links: [
      {
        title: "GitHub",
        url: "https://github.com/cameronmcginley/projectile-points-web-database",
      },
      {
        title: "Public Site",
        url: "http://projectile-points-database.vercel.app/",
      },
    ],
    description:
      "Web app serving as a dynamic database for archaelogical projectile point data. Inspired by projectilepoints.net and designed with greater structure and maintainability.",
    tools: [tools.typescript, tools.next, tools.graphql, tools.postgres],
    scaleImg: true,
  },
  {
    title: "Course Sign-In Dashboard",
    image: "/media/projects/course-signin-dashboard.webp",
    links: [
      {
        title: "GitHub",
        url: "https://github.com/cameronmcginley/CourseDashboard/",
      },
      {
        title: "Public Site",
        url: "https://coursedashboard.web.app/",
      },
    ],
    description:
      "Manage courses and attendees with QR code sign-ins, tracking, and data handling, supporting efficient administration with data export and querying.",
    tools: [tools.javascript, tools.react, tools.nodejs, tools.firebase],
  },
];

const oldProjects: Project[] = [
  {
    title: "Sorting Visualizer",
    image: "/media/projects/sorting-vis.webm",
    links: [
      {
        title: "GitHub",
        url: "https://github.com/cameronmcginley/sorting-visualizer/",
      },
      {
        title: "Public Site",
        url: "https://cameronmcginley.com/sorting-visualizer/",
      },
    ],
    description:
      "Interactive visualizer for sorting algorithms including bubble, merge, radix, and bogo sort, with customizable delay, array size, and sound settings.",
    tools: [tools.javascript, tools.react],
  },
  {
    title: "ML Algorithm Tester",
    image: "/media/projects/ml-test.webp",
    links: [
      {
        title: "GitHub",
        url: "https://github.com/cameronmcginley/ml-algorithm-testing",
      },
    ],
    description:
      "Tool for assessing and visualizing machine learning algorithm performance, featuring easy integration of new models and automatic hyperparameter optimization.",
    tools: [tools.python, tools.scikitlearn],
  },
  {
    title: "Roblox Object Placement",
    image: "/media/projects/rblx-placement.webm",
    links: [
      {
        title: "GitHub",
        url: "https://github.com/cameronmcginley/RBLX-PlacementSystem/",
      },
      {
        title: "Public Site",
        url: "https://www.roblox.com/games/7619626087/Placement-System-Demo",
      },
    ],
    description:
      "Roblox project featuring an object placement system with raycasting, client-server communication, customizable object design, per-account saving, and Rojo Git integration.",
    tools: [tools.lua, tools.robloxstudio, tools.rojo],
    scaleImg: true,
  },
];

export function SectionProjects() {
  return (
    <div className="flex flex-col justify-center w-full p-4">
      <div className="flex flex-col justify-center">
        <p className="text-3xl font-bold pb-2 pl-2">Projects</p>
        <p className="w-full pl-2 pb-6 text-md">
          Here are some of my favorite projects I&apos;ve worked on. Check out
          the GitHub links for more details!
        </p>
      </div>
      <div className="flex justify-center">
        <div className="gap-8 flex flex-row flex-wrap justify-center">
          {projects.map((item, index) => (
            <>
              <CardProject
                key={index}
                title={item.title}
                image={item.image}
                links={item.links}
                description={item.description}
                tools={item.tools}
                scaleImg={item.scaleImg}
              />
            </>
          ))}

          {/* Dropdown for old projects */}
          <div className="flex flex-col justify-center">
            <details>
              <summary className="text-center text-lg font-bold pb-2 cursor-pointer">
                Older Projects
              </summary>
              <div className="gap-8 flex flex-row flex-wrap justify-center">
                {oldProjects.map((item, index) => (
                  <CardProject
                    key={index}
                    title={item.title}
                    image={item.image}
                    links={item.links}
                    description={item.description}
                    tools={item.tools}
                  />
                ))}
              </div>
            </details>
          </div>
        </div>
      </div>
    </div>
  );
}
