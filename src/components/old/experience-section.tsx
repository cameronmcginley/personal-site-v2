import React from "react";
import { CardCompany } from "@/components/card-company";
import { CardDots } from "@/components/old/card-dots";

const companies = [
  {
    company: "Capital One",
    positions: ["Software Engineer", "Software Engineer Intern"],
    dates: ["Feb 2024 - Current", "Summer 2023"],
    logo: "/CapitalOneLogo.svg",
    logoSize: "extrawide",
  },
  {
    company: "Department of Defense",
    positions: ["Software Engineer Intern"],
    dates: ["Summer 2022"],
    logo: "/DODLogo.svg",
    logoSize: "small",
  },
  {
    company: "NetApp",
    positions: ["Software Test Engineer Intern"],
    dates: ["May 2019 - May 2022"],
    logo: "/NetAppLogo.svg",
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

export function ExperienceSection() {
  return (
    <>
      {/* Education and Work */}
      <CardDots>
        {/* <div className="flex flex-row w-full"> */}
        <div className="flex flex-col w-full">
          {/* Education */}
          <div className="p-2 flex grid grid-cols-2 gap-x-4 w-full items-center">
            <p className="text-3xl font-bold text-center col-span-2">
              Education
            </p>
            {/* First half of schools */}
            <div className="flex flex-col h-full w-full content-start">
              {schools.slice(0, schools.length / 2).map((item, index) => (
                <CardCompany
                  key={index}
                  company={item.company}
                  positions={item.positions}
                  dates={item.dates}
                  logo={item.logo}
                />
              ))}
            </div>
            {/* Second half of schools */}
            <div className="flex flex-col h-full w-full content-start">
              {schools.slice(schools.length / 2).map((item, index) => (
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
          {/* Work */}
          <div className="p-2 flex grid grid-cols-2 gap-x-4 w-full items-center">
            <p className="text-3xl font-bold text-center col-span-2">
              Professional
            </p>
            {/* First half of companies */}
            <div className="flex flex-col h-full w-full content-start">
              {companies
                .slice(0, companies.length / 2 + 1)
                .map((item, index) => (
                  <CardCompany
                    key={index}
                    company={item.company}
                    positions={item.positions}
                    dates={item.dates}
                    logo={item.logo}
                  />
                ))}
            </div>
            {/* Second half of companies */}
            <div className="flex flex-col h-full w-full content-start">
              {companies.slice(companies.length / 2 + 1).map((item, index) => (
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
        </div>
      </CardDots>
    </>
  );
}
