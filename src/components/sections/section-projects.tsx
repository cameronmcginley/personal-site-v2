import React from "react";
import { CardContainer } from "@/components/ui/card-container";
import { CardProject } from "@/components/section-ui/card-project";
import { generateBadgeComponents } from "@/app/utils";

const badges = generateBadgeComponents();

const projects = [
  {
    title: "SiteWatch",
    image: "/media/projects/sitewatch.webp",
    github_link: "https://github.com/cameronmcginley/sitewatch",
    public_link: "https://sitewatchapp.com/",
    description:
      "Automates website monitoring - lets users upload URLs and configure customizable checks and email alerts. Built with TypeScript, Next.js, and a serverless backend using AWS Lambda, DynamoDB, and Redis.",
    badges: [
      badges.typescript,
      badges.next,
      badges.lambda,
      badges.dynamodb,
      badges.redis,
      badges.apigw,
      badges.digitalocean,
    ],
  },
  {
    title: "Brainf**k Interpreter",
    image: "/media/projects/brainfk.webp",
    github_link:
      "https://github.com/cameronmcginley/optimized-brainfk-interpreter",
    description:
      "Interpreter for the brainf**k programming language, enhanced with instruction condensing and peephole optimization for improved execution efficiency.",
    badges: [badges.cpp, badges.brainfuck],
  },
  {
    title: "Projectile Points Database",
    image: "/media/projects/projectile-points.webp",
    github_link:
      "https://github.com/cameronmcginley/projectile-points-web-database",
    public_link: "http://projectile-points-database.vercel.app/",
    description:
      "Web app serving as a dynamic database for archaelogical projectile point data. Inspired by projectilepoints.net and designed with greater structure and maintainability.",
    badges: [badges.typescript, badges.next, badges.graphql, badges.postgres],
  },
  {
    title: "Course Sign-In Dashboard",
    image: "/media/projects/course-signin-dashboard.webp",
    github_link: "https://github.com/cameronmcginley/CourseDashboard/",
    public_link: "https://coursedashboard.web.app/",
    description:
      "Manage courses and attendees with QR code sign-ins, tracking, and data handling, supporting efficient administration with data export and querying.",
    badges: [badges.javascript, badges.react, badges.nodejs, badges.firebase],
  },
  {
    title: "Sorting Visualizer",
    image: "/media/projects/sorting-vis.webm",
    github_link: "https://github.com/cameronmcginley/sorting-visualizer/",
    public_link: "https://cameronmcginley.com/sorting-visualizer/",
    description:
      "Interactive visualizer for sorting algorithms including bubble, merge, radix, and bogo sort, with customizable delay, array size, and sound settings.",
    badges: [badges.react, badges.javascript],
  },
  {
    title: "ML Algorithm Tester",
    image: "/media/projects/ml-test.webp",
    github_link: "https://github.com/cameronmcginley/ml-algorithm-testing",
    description:
      "Tool for assessing and visualizing machine learning algorithm performance, featuring easy integration of new models and automatic hyperparameter optimization.",
    badges: [badges.python, badges.scikitlearn],
  },
  {
    title: "Roblox Object Placement",
    image: "/media/projects/rblx-placement.webm",
    github_link: "https://github.com/cameronmcginley/RBLX-PlacementSystem/",
    public_link:
      "https://www.roblox.com/games/7619626087/Placement-System-Demo",
    description:
      "Roblox project featuring an object placement system with raycasting, client-server communication, customizable object design, per-account saving, and Rojo Git integration.",
    badges: [badges.lua, badges.robloxstudio, badges.rojo],
  },
  // {
  //   title: "Personal Website",
  //   image: "/media/projects/personal-site.webp",
  //   github_link: "https://github.com/cameronmcginley/personal-site-v2",
  //   description:
  //     "This one! Simple portfolio built with Next.js and deployed with Vercel. Lots of playing around to make the design somewhat decent.",
  //   badges: [badges.next, badges.typescript, badges.vercel],
  // },
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
                  badges={item.badges}
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
