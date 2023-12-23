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
              <CardContainer>Test</CardContainer>
            </div>
          </div>
        </div>

        {/* Education and Work */}
        <CardDots>
          <div className="flex flex-row w-full">
            {/* Education */}
            <div className="p-2 flex flex-col w-full items-center">
              <CardCompany
                company="University of California San Diego"
                positions={["M.S. Computer Science"]}
                dates={["December 2023"]}
                logo="/UCSDLogo.png"
                logoSize="small"
              />
              <CardCompany
                company="Wichita State University"
                positions={["B.S. Computer Science"]}
                dates={["August 2023"]}
                logo="/WSULogo.png"
                logoSize="wide"
              />
            </div>
            {/* Work */}
            <div className="p-2 flex flex-col w-full items-center">
              <CardCompany
                company="Capital One"
                positions={["Software Engineer", "Software Engineer Intern"]}
                dates={["Feb 2024 - Current", "Summer 2023"]}
                logo="/CapitalOneLogo.svg"
                logoSize="extrawide"
              />

              <CardCompany
                company="NetApp"
                positions={["Software Test Engineer Intern"]}
                dates={["May 2019 - May 2022"]}
                logo="/NetAppLogo.svg"
                logoSize="small"
              />

              <CardCompany
                company="Department of Defense"
                positions={["Software Engineer Intern"]}
                dates={["Summer 2022"]}
                logo="/DODLogo.svg"
                logoSize="small"
              />

              <CardCompany
                company="Purdue University"
                positions={["Machine Learning Intern"]}
                dates={["Summer 2021"]}
                logo="/PurdueLogo.svg"
                logoSize="wide"
              />

              <CardCompany
                company="Wichita State University"
                positions={["Machine Learning Intern"]}
                dates={["Summer 2020"]}
                logo="/WSULogo.png"
                logoSize="wide"
              />
            </div>
          </div>
        </CardDots>
      </div>
    </>
  );
}
