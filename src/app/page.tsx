"use client";

import React, { RefObject, useRef } from "react";
import Image from "next/image";
import { CardContainer } from "@/components/card-container";
import { ExperienceSectionAlt } from "@/components/experience-section-alt";
import Tilt from "react-parallax-tilt";
import { SectionPublications } from "@/components/section-publications";
import { SectionProjects } from "@/components/section-projects";
import { CardTitle } from "@/components/card-title";
import { SectionSocials } from "@/components/section-socials";
import { CustomLink } from "@/components/custom-link";
import CMSignature from "/CMSignature.svg";

export default function Home() {
  const experienceRef = useRef(null);
  const publicationsRef = useRef(null);
  const projectsRef = useRef(null);

  const scrollToSection = (ref: RefObject<HTMLElement>) => {
    if (ref.current) {
      window.scrollTo({
        top: ref.current.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <div className="flex flex-col w-full gap-2">
        {/* Simple Navbar */}
        <div className="flex gap-8 justify-center">
          <CustomLink
            onClick={() => scrollToSection(experienceRef)}
            text="Experience"
          />
          <CustomLink
            onClick={() => scrollToSection(publicationsRef)}
            text="Publications"
          />
          <CustomLink
            onClick={() => scrollToSection(projectsRef)}
            text="Projects"
          />
        </div>

        {/* Name Banner */}
        <div className="">
          <CardTitle />
        </div>

        {/* Section 1 */}
        <div className="gap-2 animate-fade-in-up flex w-full h-full flex-col md:flex-row items-center justify-center delay-100 opacity-0 fill-forwards">
          {/* Image */}
          <div className="flex-grow min-w-64 max-w-64 md:h-80 ">
            <CardContainer>
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
                    className="w-full rounded-xl outline-border outline outline-1 outline-offset-[-4px]"
                  />
                </div>
              </Tilt>
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
                    {/* I am a Software Engineer located in San Francisco with an
                    interest in back-end development. */}
                    I am a Software Engineer located in San Francisco with a
                    passion for back-end development. My expertise is in
                    building scalable, efficient systems and managing complex
                    databases.
                  </div>
                  <div>
                    {/* I'm all about creating efficient and elegant solutions,
                    along with exploring new technologies to tackle new */}
                    {/* problems. */}I enjoy creating elegant solutions and
                    exploring new technologies to tackle new problems.
                  </div>
                  <div className="flex flex-row">
                    Reach out to me at
                    <div className="text-link ml-2">camcginley@ucsd.edu</div>
                  </div>
                </div>

                {/* Signature */}
                {/* <CMSignature className="signature-animation" /> */}
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
              </div>
            </CardContainer>
          </div>
        </div>

        {/* Section 2 */}
        <div
          ref={experienceRef}
          className="delay-200 opacity-0 fill-forwards animate-fade-in-up"
        >
          <ExperienceSectionAlt />
        </div>

        {/* Section 3 */}
        <div
          ref={publicationsRef}
          className="delay-200 opacity-0 fill-forwards animate-fade-in-up"
        >
          <SectionPublications />
        </div>

        {/* Section 4 */}
        <div
          ref={projectsRef}
          className="delay-200 opacity-0 fill-forwards animate-fade-in-up"
        >
          <SectionProjects />
        </div>
      </div>
    </>
  );
}
