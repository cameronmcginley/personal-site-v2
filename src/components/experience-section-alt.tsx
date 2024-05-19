import React from "react";
import { CardCompany } from "@/components/card-company";
import { CardContainer } from "./card-container";

const companies = [
  {
    company: "Capital One",
    positions: ["Software Engineer", "Software Engineer Intern"],
    dates: ["Feb 2024 - Current", "Summer 2023"],
    logo: "/media/companies/square/CapitalOneLogo.jpg",
    // logo: "/CapitalOneLogo.svg",
    // logo: "/CapitalOneLogoAlt.jpg",
  },
  {
    company: "Department of Defense",
    positions: ["Software Engineer Intern"],
    dates: ["Summer 2022"],
    logo: "/DODLogo.svg",
  },
  {
    company: "NetApp",
    positions: ["Software Test Engineer Intern"],
    dates: ["May 2019 - May 2022"],
    logo: "/NetAppLogo.svg",
  },
  {
    company: "Purdue University",
    positions: ["Machine Learning Intern"],
    dates: ["Summer 2021"],
    logo: "/PurdueLogo.svg",
  },
  {
    company: "Wichita State University",
    positions: ["Machine Learning Intern"],
    dates: ["Summer 2020"],
    logo: "/WSULogo.png",
  },
];

const schools = [
  {
    company: "University of California San Diego",
    positions: ["M.S. Computer Science"],
    dates: ["December 2023"],
    logo: "/UCSDLogo.png",
  },
  {
    company: "Wichita State University",
    positions: ["B.S. Computer Science"],
    dates: ["May 2022"],
    logo: "/WSULogo.png",
  },
];

export function ExperienceSectionAlt() {
  return (
    <>
      {/* Education and Work */}
      <CardContainer>
        <div className="flex md:flex-row flex-col w-full">
          {/* Education */}
          <div className="gap-1 pr-1 flex flex-col w-full items-center">
            <p className="text-3xl font-bold col-span-2">Education</p>
            {schools.map((item, index) => (
              <CardCompany
                key={index}
                company={item.company}
                positions={item.positions}
                dates={item.dates}
                logo={item.logo}
              />
            ))}
          </div>
          {/* Work */}
          <div className="gap-1 pl-1 flex flex-col w-full items-center">
            <p className="pt-2 sm:pt-0 text-3xl font-bold col-span-2">
              Professional
            </p>
            {companies.map((item, index) => (
              <CardCompany
                key={index}
                company={item.company}
                positions={item.positions}
                dates={item.dates}
                logo={item.logo}
              />
            ))}
          </div>
        </div>
      </CardContainer>
    </>
  );
}
