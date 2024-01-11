"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faGoogleScholar } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";

import React from "react";
import Image from "next/image";
import { TestCard } from "@/components/test-card";
import { ModeToggle } from "@/components/mode-toggle";
import { RadialGradientBG } from "@/components/radial-gradient-bg";
import { NoiseDots } from "@/components/noise-dots";
import { Container } from "@/components/container";
import { Cell } from "@/components/cell";
import { GridContainer } from "@/components/grid-container";
import { CardContainer } from "@/components/card-container";
import { CardContainerImage } from "@/components/card-container-image";
import { CardCompany } from "@/components/card-company";
import { CardDots } from "@/components/card-dots";
import { ExperienceSection } from "@/components/experience-section";
import { ExperienceSectionAlt } from "@/components/experience-section-alt";
// import { MainContainer } from "@/components/main-container";
import { Button } from "@/components/ui/button";
import { CardSocial } from "@/components/card-social";
import Tilt from "react-parallax-tilt";
import My3DTiltComponent from "@/components/3d-component"; // adjust the path as necessary

import { SectionPublications } from "@/components/section-publications";
import { SectionProjects } from "@/components/section-projects";

import { CardGrainy } from "@/components/card-grainy";
import { CustomButton } from "@/components/custom-button";
// import TextAnimate from "@/components/functions/text-animate";

import { SectionSocials } from "@/components/section-socials";

export default function Home() {
  return (
    <>
      <div className="flex flex-col w-full">
        {/* Name Banner */}
        <div className="animate-fade-in delay-0">
          <CardGrainy />
        </div>

        {/* <p className="typewriter w-fit">Cameron</p> */}

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
