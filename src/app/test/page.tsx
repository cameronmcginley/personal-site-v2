import Image from "next/image";
import { TestCard } from "@/components/test-card";
import { ModeToggle } from "@/components/mode-toggle";
import { RadialGradientBG } from "@/components/radial-gradient-bg";
import { NoiseDots } from "@/components/noise-dots";
import { Container } from "@/components/container";
import { Cell } from "@/components/cell";
import { GridContainer } from "@/components/grid-container";
import { CardContainer } from "@/components/card-container";
import { CardCompany } from "@/components/card-company";
import { CardDots } from "@/components/card-dots";
import { ExperienceSection } from "@/components/experience-section";
import { ExperienceSectionAlt } from "@/components/experience-section-alt";
// import { MainContainer } from "@/components/main-container";

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
        <div className="flex flex-row flex-1 min-w-80">
          <div className="flex flex-col flex-1 w-1/2 h-full">
            <CardContainer>Test</CardContainer>
          </div>
          <div className="w-1/2 flex-col">
            <div>
              <CardContainer>Test</CardContainer>
            </div>
            <div>
              <CardContainer>
                <div>About Me</div>
              </CardContainer>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-7 gap-0">
          <div className="col-span-3">
            <CardContainer>Image</CardContainer>
          </div>
          <div className="col-span-1">
            <CardContainer>Socials</CardContainer>
          </div>
          <div className="col-span-3">
            <CardContainer>
              <div className="text-3xl font-bold">About Me</div>
            </CardContainer>
          </div>
        </div>
        <ExperienceSection />
      </div>
    </>
  );
}
