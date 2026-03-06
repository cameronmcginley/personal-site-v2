"use client";

import React from "react";
import Image from "next/image";
import { ExperienceSection } from "@/components/sections/experience-section";
import { SectionPublications } from "@/components/sections/section-publications";
import { SectionProjects } from "@/components/sections/section-projects";

import { Navbar } from "@/components/sections/navbar";
import { useRefs } from "@/hooks/useRefs";

export default function Home() {
  const { experienceRef, publicationsRef, projectsRef } = useRefs();

  return (
    <>
      <div className="p-2 pt-6 flex flex-col w-full gap-4">
        <Navbar
          experienceRef={experienceRef}
          publicationsRef={publicationsRef}
          projectsRef={projectsRef}
        />

        <div
          className={`gap-2 flex w-full h-full flex-col md:flex-row items-center justify-center`}
        >
          <div className="flex-grow p-4 min-w-52 max-w-52 md:h-68 ">
            <Image
              src="/headshot.webp"
              width={500}
              height={500}
              alt="Picture of me"
              className="w-full"
            />
          </div>

          <div className="flex-grow flex items-start md:min-h-68">
            <div className="p-4 flex flex-col gap-3">
              <div>
                <h1 className="text-2xl font-bold">Cameron McGinley</h1>
                <p className="text-muted-foreground mt-1">
                  Software Engineer @ Capital One &nbsp;|&nbsp; San Francisco
                </p>
              </div>
              <p>
                I enjoy working on large-scale, high-performance systems.
                Currently at Capital One building Slingshot, a Snowflake/Databricks
                compute optimization platform. Previously at NetApp and the U.S.
                Government, with ML research experience at Purdue and WSU.
              </p>
              <div className="flex flex-col gap-1">
                <a href="mailto:cameronmcginley2@gmail.com" className="text-link hover:underline">
                  cameronmcginley2@gmail.com
                </a>
                <span>
                  <a href="https://github.com/cameronmcginley" className="text-link hover:underline">GitHub</a>
                  {" | "}
                  <a href="https://www.linkedin.com/in/cameronmcginley/" className="text-link hover:underline">LinkedIn</a>
                  {" | "}
                  <a href="/resume.pdf" className="text-link hover:underline">Resume</a>
                </span>
              </div>
            </div>
          </div>
        </div>

        <hr className="my-4" />

        <div ref={experienceRef} id={"experience"}>
          <ExperienceSection />
        </div>

        <hr className="my-4" />

        <div ref={publicationsRef} id={"publications"}>
          <SectionPublications />
        </div>

        <hr className="my-4" />

        <div ref={projectsRef} id={"projects"}>
          <SectionProjects />
        </div>
      </div>
    </>
  );
}
