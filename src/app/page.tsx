"use client";

import React, { RefObject, useRef, useState } from "react";
import Image from "next/image";
import { CardContainer } from "@/components/ui/card-container";
import { ExperienceSection } from "@/components/sections/experience-section";
import Tilt from "react-parallax-tilt";
import { SectionPublications } from "@/components/sections/section-publications";
import { SectionProjects } from "@/components/sections/section-projects";
import { PageBanner } from "@/components/sections/page-banner";
import { SectionSocials } from "@/components/sections/section-socials";
import { CustomLink } from "@/components/ui/custom-link";
import { featureFlag } from "./utils";
import { Navbar } from "@/components/sections/navbar";
import { useRefs } from "@/hooks/useRefs";

export default function Home() {
  const { experienceRef, publicationsRef, projectsRef } = useRefs();

  return (
    <>
      <div className="flex flex-col w-full gap-2">
        {/* Simple Navbar */}
        <Navbar
          experienceRef={experienceRef}
          publicationsRef={publicationsRef}
          projectsRef={projectsRef}
        />

        {/* Name Banner */}
        <PageBanner />

        {/* Section 1 */}
        <div
          className={`gap-2 flex w-full h-full flex-col md:flex-row items-center justify-center ${
            featureFlag.animations &&
            "animate-fade-in-up opacity-0 delay-100 fill-forwards"
          }`}
        >
          {/* Image */}
          <div className="flex-grow min-w-64 max-w-64 md:h-80 ">
            <CardContainer>
              {featureFlag.animations ? (
                <Tilt
                  className="tilt"
                  tiltReverse={true}
                  tiltMaxAngleX={20}
                  tiltMaxAngleY={20}
                  perspective={1000}
                  transitionSpeed={1000}
                  gyroscope={false}
                  glareEnable={true}
                  glareMaxOpacity={0.45}
                  glareColor="white"
                  glarePosition="bottom"
                  glareBorderRadius="0.75rem"
                >
                  <div className="flex h-full items-center">
                    <Image
                      src="/headshot.webp"
                      width={500}
                      height={500}
                      alt="Picture of me"
                      className="w-full outline-border outline outline-1 outline-offset-[-4px]"
                    />
                  </div>
                </Tilt>
              ) : (
                <Image
                  src="/headshot.webp"
                  width={500}
                  height={500}
                  alt="Picture of me"
                  className="w-full outline-border outline outline-1 outline-offset-[-4px]"
                />
              )}
            </CardContainer>
          </div>

          {/* Socials */}
          <div className="flex-grow md:h-80">
            <SectionSocials />
          </div>

          {/* About Me */}
          <div className="flex-grow flex items-start md:h-80">
            <CardContainer>
              <div className="flex flex-col justify-between">
                <div className="flex flex-col gap-2">
                  <div className="text-3xl font-bold">Hi!</div>
                  <div>
                    I am a Software Engineer located in San Francisco with a
                    passion for back-end development. My expertise is in
                    building scalable, efficient systems and managing complex
                    databases.
                  </div>
                  <div>
                    I enjoy creating elegant solutions and exploring new
                    technologies to tackle new problems.
                  </div>
                  <div className="flex flex-row">
                    Reach out to me at
                    <span className="text-link ml-2">camcginley@ucsd.edu</span>
                  </div>
                </div>

                {/* Signature */}
                {featureFlag.animations && (
                  <div className="signature-container delay-1000 mt-4">
                    <svg
                      width="89"
                      height="31"
                      viewBox="0 0 89 31"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M48.3279 2.05302C-11.1721 0.0530217 -15.6721 55.553 48.3279 13.053C39.1279 32.253 47.8279 23.7197 53.3279 17.053C52.1279 30.253 56.5 20.3333 60 14C60.5 20.5 62.5 23.5 67 23C70.5 22.5 77.2279 21.653 86.8279 14.053"
                        stroke="black"
                        stroke-width="3"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="signature-path"
                      />
                    </svg>
                  </div>
                )}
              </div>
            </CardContainer>
          </div>
        </div>

        {/* Section 2 */}
        <div
          ref={experienceRef}
          className={`${
            featureFlag.animations &&
            "animate-fade-in-up opacity-0 delay-200 fill-forwards"
          }`}
        >
          <ExperienceSection />
        </div>

        {/* Section 3 */}
        <div
          ref={publicationsRef}
          className={`${
            featureFlag.animations &&
            "animate-fade-in-up opacity-0 delay-200 fill-forwards"
          }`}
        >
          <SectionPublications />
        </div>

        {/* Section 4 */}
        <div
          ref={projectsRef}
          className={`${
            featureFlag.animations &&
            "animate-fade-in-up opacity-0 delay-200 fill-forwards"
          }`}
        >
          <SectionProjects />
        </div>
      </div>
    </>
  );
}
