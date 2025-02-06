"use client";

import React from "react";
import Image from "next/image";
import { ExperienceSection } from "@/components/sections/experience-section";
import { SectionPublications } from "@/components/sections/section-publications";
import { SectionProjects } from "@/components/sections/section-projects";
import { PageBanner } from "@/components/sections/page-banner";
import { Navbar } from "@/components/sections/navbar";
import { useRefs } from "@/hooks/useRefs";

export default function Home() {
  const { experienceRef, publicationsRef, projectsRef } = useRefs();

  return (
    <>
      <div className="border bg-white p-2 pt-4 flex flex-col w-full gap-4">
        <Navbar
          experienceRef={experienceRef}
          publicationsRef={publicationsRef}
          projectsRef={projectsRef}
        />

        <PageBanner />

        <div
          className={`gap-2 flex w-full h-full flex-col md:flex-row items-center justify-center`}
        >
          <div className="flex-grow p-4 min-w-64 max-w-64 md:h-80 ">
            <Image
              src="/headshot.webp"
              width={500}
              height={500}
              alt="Picture of me"
              className="w-full"
            />
          </div>

          <div className="flex-grow flex items-start md:min-h-80">
            <div className="p-4 flex flex-col justify-between">
              <div className="flex flex-col gap-2">
                <div className="text-3xl font-bold">Hi!</div>
                <div>
                  I am a Software Engineer located in San Francisco. Currently
                  at Capital One Software helping build Slingshot, a Snowflake
                  optimization platform.
                </div>
                <div>
                  I enjoy creating elegant solutions to complex problems, and I
                  am especially interested in backend development.
                </div>
                <div>
                  Reach out to me at{" "}
                  <span className="text-link">cameronmcginley2@gmail.com</span>
                </div>
                {/* Links */}
                <div className="mt-8 flex flex-row gap-2">
                  <a
                    href="https://github.com/cameronmcginley"
                    className="text-link hover:underline"
                  >
                    GitHub
                  </a>
                  |
                  <a
                    href="https://www.linkedin.com/in/cameronmcginley/"
                    className="text-link hover:underline"
                  >
                    LinkedIn
                  </a>
                  |
                  <a href="/resume.pdf" className="text-link hover:underline">
                    Resume
                  </a>
                </div>
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
