import React from "react";
import { CardCompany } from "@/components/card-company";
import { CardDots } from "@/components/card-dots";
import { CardContainer } from "./card-container";

const companies = [
  {
    company: "Capital One",
    positions: ["Software Engineer", "Software Engineer Intern"],
    dates: ["Feb 2024 - Current", "Summer 2023"],
    logo: "/CapitalOneLogo.svg",
    logoSize: "extrawide",
  },
  {
    company: "NetApp",
    positions: ["Software Test Engineer Intern"],
    dates: ["May 2019 - May 2022"],
    logo: "/NetAppLogo.svg",
    logoSize: "small",
  },
  {
    company: "Department of Defense",
    positions: ["Software Engineer Intern"],
    dates: ["Summer 2022"],
    logo: "/DODLogo.svg",
    logoSize: "small",
  },
  {
    company: "Purdue University",
    positions: ["Machine Learning Intern"],
    dates: ["Summer 2021"],
    logo: "/PurdueLogo.svg",
    logoSize: "wide",
  },
  {
    company: "Wichita State University",
    positions: ["Machine Learning Intern"],
    dates: ["Summer 2020"],
    logo: "/WSULogo.png",
    logoSize: "wide",
  },
];

const schools = [
  {
    company: "University of California San Diego",
    positions: ["M.S. Computer Science"],
    dates: ["December 2023"],
    logo: "/UCSDLogo.png",
    logoSize: "small",
  },
  {
    company: "Wichita State University",
    positions: ["B.S. Computer Science"],
    dates: ["August 2023"],
    logo: "/WSULogo.png",
    logoSize: "wide",
  },
];

export function ExperienceSectionAlt() {
  return (
    <>
      {/* Education and Work */}
      {/* <CardDots> */}
      <CardContainer bgpattern="wood" patterncolor="blue-300/20">
        <div className="flex md:flex-row flex-col w-full">
          {/* Education */}
          <div className="gap-2 pr-1 flex flex-col w-full items-center">
            <p className="text-3xl font-bold col-span-2">Education</p>
            {schools.map((item, index) => (
              <CardCompany
                key={index}
                company={item.company}
                positions={item.positions}
                dates={item.dates}
                logo={item.logo}
                logoSize={item.logoSize}
              />
            ))}
          </div>
          {/* Work */}
          <div className="gap-2 pl-1 flex flex-col w-full items-center">
            <p className="text-3xl font-bold col-span-2">Professional</p>
            {companies.map((item, index) => (
              <CardCompany
                key={index}
                company={item.company}
                positions={item.positions}
                dates={item.dates}
                logo={item.logo}
                logoSize={item.logoSize}
              />
            ))}
          </div>
        </div>
        {/* </CardDots> */}
      </CardContainer>
    </>
  );
}
