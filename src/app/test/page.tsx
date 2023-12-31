"use client";

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

export default function Home() {
  return (
    <>
      {/* <Container>
        <Container>Hi</Container>

        <Container>
          <ModeToggle />
          <div className="h-10" />

          <TestCard />
          <div className="h-10" />

          <NoiseDots />
        </Container>
      </Container> */}

      {/* <Container>
        <div className="flex min-w-80">
          <div className="w-1/4">Hi</div>
          <div>
            <div>Test</div>
            <div>Test</div>
          </div>
        </div>
      </Container> */}

      {/* <div className="grid grid-flow-row-dense grid-cols-3 grid-rows-3 gap-0 bg-red-50 w-full max-w-7xl mx-auto">
        <Cell content="Cell 1" widthMultiplier={1} heightMultiplier={1} />
        <Cell content="Cell 1" widthMultiplier={1} heightMultiplier={1} />
        <Cell content="Cell 2" widthMultiplier={2} heightMultiplier={1} />
        <Cell content="Cell 3" widthMultiplier={1} heightMultiplier={2} />
      </div> */}

      <div className="flex flex-col w-full">
        {/* Div that contains two divs, split into left and right half */}
        {/* <div className="flex flex-row flex-1 min-w-80">
          <div className="flex flex-col flex-1 w-1/2 h-full">
            <CardContainer>Test</CardContainer>
          </div>
          <div className="w-1/2 flex-col">
            <div>
              <CardContainer>Test</CardContainer>
            </div>
            <div>
              <CardContainer>
                <div className="flex flex-col">
                  <div>About Me</div>
                  <div>
                    I am a Computer Science MS student at UC San Diego set to
                    graduate in December 2023. Before coming to San Diego, I
                    spent my time working on automating C++ vulnerability
                    detection for the U.S. Department of Defense, buggy Java
                    code detection at Purdue University, phishing email
                    detection and generating natural language responses at
                    Wichita State University, and working in software test
                    automation on data storage system firmware at NetApp.
                  </div>
                </div>
              </CardContainer>
            </div>
          </div>
        </div> */}

        {/* Section 1 */}
        {/* Three parts: image has defined width, socials has width fit to buttons, about me takes rest */}
        {/* <div className="grid grid-cols-7 gap-0"> */}
        <div className="flex flex-row w-full">
          {/* Image */}
          <div className="w-1/2">
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
          <div className="w-fit">
            {/* <CardContainer>Socials</CardContainer> */}
            <CardContainer bgpattern="topography" patterncolor="blue-300/20">
              <div className="flex flex-col">
                <CardSocial text="Resume" url="/resume.pdf" />
                <CardSocial
                  text="LinkedIn"
                  url="https://linkedin.com/in/cameronmcginley/"
                />
                <CardSocial
                  text="GitHub"
                  url="https://github.com/cameronmcginley"
                />
                <CardSocial
                  text="Scholar"
                  url="https://scholar.google.com/citations?user=3AUzp3MAAAAJ&hl=en"
                />
              </div>
            </CardContainer>
          </div>

          {/* About Me */}
          <div className="w-fit">
            <CardContainer>
              <div className="flex flex-col">
                <p className="text-3xl font-bold pb-2">About Me</p>
                <p className="pb-2">
                  I am a Computer Science MS student at UC San Diego set to
                  graduate in December 2023.{" "}
                </p>
                <p>
                  Before coming to San Diego, I spent my time working on
                  automating C++ vulnerability detection for the U.S. Department
                  of Defense, buggy Java code detection at Purdue University,
                  phishing email detection and generating natural language
                  responses at Wichita State University, and working in software
                  test automation on data storage system firmware at NetApp.
                </p>
              </div>
            </CardContainer>
          </div>
        </div>

        {/* Section 2 */}
        <ExperienceSectionAlt />
      </div>
    </>
  );
}
