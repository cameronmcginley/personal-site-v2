"use client";

import React from "react";
import Image from "next/image";
import { CardContainer } from "@/components/card-container";
import { ExperienceSectionAlt } from "@/components/experience-section-alt";
import Tilt from "react-parallax-tilt";
import { SectionPublications } from "@/components/section-publications";
import { SectionProjects } from "@/components/section-projects";
import { CardTitle } from "@/components/card-title";
import { SectionSocials } from "@/components/section-socials";

export default function Home() {
  return (
    <>
      <div className="flex flex-col w-full">
        {/* Name Banner */}
        <div className="">
          <CardTitle />
        </div>

        {/* Section 1 */}
        {/* Three parts: image has defined width, socials has width fit to buttons, about me takes rest */}
        {/* <div className="grid grid-cols-7 gap-0"> */}
        <div
          className="
          delay-100 opacity-0 fill-forwards animate-fade-in-up 
          flex w-full flex-col md:flex-row justify-center items-center
        "
        >
          {/* Image */}
          <div className="sm:w-1/2 w-1/2 h-fit">
            <CardContainer>
              <Tilt
                className="tilt"
                tiltReverse={true}
                tiltMaxAngleX={20}
                tiltMaxAngleY={20}
                perspective={1000}
                transitionSpeed={1000}
                gyroscope={false}
                glareEnable={true} // Optional: if you want a glare effect
                glareMaxOpacity={0.45} // Optional: adjust glare max opacity
                glareColor="white" // Optional: adjust glare color
                glarePosition="bottom" // Optional: adjust glare position
                glareBorderRadius="0.75rem" // match rounded-xl on image
              >
                {/* <My3DTiltComponent /> */}
                <Image
                  src="/headshot.webp"
                  width={500}
                  height={500}
                  alt="Picture of me"
                  className="rounded-xl outline-border outline outline-1 outline-offset-[-4px]"
                />
              </Tilt>
            </CardContainer>
          </div>

          {/* Socials */}
          <SectionSocials />

          {/* About Me */}
          <div className="w-fit">
            <CardContainer>
              <div className="flex flex-col gap-2">
                <p className="text-3xl font-bold">Hi!</p>
                <p>
                  I am a software engineer located in San Francisco with an
                  interest in all things backend and systems.
                </p>
                <p>
                  I'm all about creating efficient and elegant solutions, along
                  with exploring new technologies to tackle new problems.
                </p>
              </div>
            </CardContainer>
          </div>
        </div>

        {/* Section 2 */}
        <div className="delay-200 opacity-0 fill-forwards animate-fade-in-up">
          <ExperienceSectionAlt />
        </div>

        {/* Section 3 */}
        <div className="delay-200 opacity-0 fill-forwards animate-fade-in-up">
          <SectionPublications />
        </div>

        {/* Section 4 */}
        <div className="delay-200 opacity-0 fill-forwards animate-fade-in-up">
          <SectionProjects />
        </div>
      </div>
    </>
  );
}
