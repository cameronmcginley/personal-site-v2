import React from "react";
import { CardContainer } from "@/components/ui/card-container";
import { CardProject } from "../section-ui/card-project";
import { generateBadgeComponents } from "@/app/utils";

const badges = generateBadgeComponents();

const projects = [
  {
    title: "SiteWatch",
    image: "/media/projects/sitewatch.webp",
    githubLink: "https://github.com/cameronmcginley/sitewatch",
    publicLink: "https://sitewatchapp.com/",
    description:
      'Automates website monitoring - users upload URLs and configure "check" functions, run intervals, and alerts. Built with TypeScript, Next.js, and a serverless backend using AWS Lambda, DynamoDB, and Redis, hosted on a VPS.',
    badges: [
      badges.typescript,
      badges.next,
      badges.lambda,
      badges.dynamodb,
      badges.redis,
      badges.apigw,
    ],
  },
  {
    title: "Brainf**k Compiler",
    image: "/media/projects/brainfk.webp",
    githubLink:
      "https://github.com/cameronmcginley/optimized-brainfk-interpreter",
    description:
      "Compiler for the Brainf**k language, incorporating instruction folding and pattern recognition optimizations which typically results in a  decrease in instructions executed and runtime by over 99%.",
    badges: [badges.cpp, badges.brainfuck],
  },
  {
    title: "Projectile Points Database",
    image: "/media/projects/projectile-points.webp",
    githubLink:
      "https://github.com/cameronmcginley/projectile-points-web-database",
    publicLink: "http://projectile-points-database.vercel.app/",
    description:
      "Web app serving as a dynamic database for archaelogical projectile point data. Inspired by projectilepoints.net and designed with greater structure and maintainability.",
    badges: [badges.typescript, badges.next, badges.graphql, badges.postgres],
  },
  {
    title: "Course Sign-In Dashboard",
    image: "/media/projects/course-signin-dashboard.webp",
    githubLink: "https://github.com/cameronmcginley/CourseDashboard/",
    publicLink: "https://coursedashboard.web.app/",
    description:
      "Manage courses and attendees with QR code sign-ins, tracking, and data handling, supporting efficient administration with data export and querying.",
    badges: [badges.javascript, badges.react, badges.nodejs, badges.firebase],
  },
];

const oldProjects = [
  {
    title: "Sorting Visualizer",
    image: "/media/projects/sorting-vis.webm",
    githubLink: "https://github.com/cameronmcginley/sorting-visualizer/",
    publicLink: "https://cameronmcginley.com/sorting-visualizer/",
    description:
      "Interactive visualizer for sorting algorithms including bubble, merge, radix, and bogo sort, with customizable delay, array size, and sound settings.",
    badges: [badges.react, badges.javascript],
  },
  {
    title: "ML Algorithm Tester",
    image: "/media/projects/ml-test.webp",
    githubLink: "https://github.com/cameronmcginley/ml-algorithm-testing",
    description:
      "Tool for assessing and visualizing machine learning algorithm performance, featuring easy integration of new models and automatic hyperparameter optimization.",
    badges: [badges.python, badges.scikitlearn],
  },
  {
    title: "Roblox Object Placement",
    image: "/media/projects/rblx-placement.webm",
    githubLink: "https://github.com/cameronmcginley/RBLX-PlacementSystem/",
    publicLink: "https://www.roblox.com/games/7619626087/Placement-System-Demo",
    description:
      "Roblox project featuring an object placement system with raycasting, client-server communication, customizable object design, per-account saving, and Rojo Git integration.",
    badges: [badges.lua, badges.robloxstudio, badges.rojo],
  },
];

export function SectionProjects() {
  return (
    <>
      <CardContainer>
        <div className="flex flex-col justify-center w-full">
          <div className="flex flex-col justify-center">
            <p className="text-center text-3xl font-bold pb-2">Projects</p>
            <p className="text-center pb-2 text-md font-semibold">
              Here are some of my favorite projects I&apos;ve worked on. Read
              more via the GitHub links!
            </p>
          </div>
          <div className="flex justify-center">
            <div className="gap-8 flex flex-row flex-wrap justify-center">
              {projects.map((item, index) => (
                <CardProject
                  key={index}
                  title={item.title}
                  image={item.image}
                  githubLink={item.githubLink}
                  publicLink={item.publicLink}
                  description={item.description}
                  badges={item.badges}
                />
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
                        githubLink={item.githubLink}
                        publicLink={item.publicLink}
                        description={item.description}
                        badges={item.badges}
                      />
                    ))}
                  </div>
                </details>
              </div>
            </div>
          </div>
        </div>
      </CardContainer>
    </>
  );
}
