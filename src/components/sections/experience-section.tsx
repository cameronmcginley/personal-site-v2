import React from "react";
import { CardCompany } from "@/components/section-ui/card-company";

export type CompanyCardData = {
  company: string;
  position: string;
  dates: string;
  logo: string;
};

const companies: CompanyCardData[] = [
  {
    company: "Capital One",
    position: "Software Engineer",
    dates: "Feb 2024 - Current",
    logo: "/media/companies/square/CapitalOneLogo.jpg",
  },
];

const internships: CompanyCardData[] = [
  {
    company: "Capital One",
    position: "Software Engineer Intern",
    dates: "Summer 2023",
    logo: "/media/companies/square/CapitalOneLogo.jpg",
  },
  {
    company: "Department of Defense",
    position: "Software Engineer Intern",
    dates: "Summer 2022",
    logo: "/DODLogo.svg",
  },
  {
    company: "NetApp",
    position: "Software Test Engineer Intern",
    dates: "May 2019 - May 2022",
    logo: "/NetAppLogo.svg",
  },
  {
    company: "Purdue University",
    position: "Machine Learning Intern",
    dates: "Summer 2021",
    logo: "/PurdueLogo.svg",
  },
  {
    company: "Wichita State University",
    position: "Machine Learning Intern",
    dates: "Summer 2020",
    logo: "/WSULogo.png",
  },
];

const schools: CompanyCardData[] = [
  {
    company: "University of California San Diego",
    position: "M.S. Computer Science",
    dates: "December 2023",
    logo: "/UCSDLogo.png",
  },
  {
    company: "Wichita State University",
    position: "B.S. Computer Science",
    dates: "May 2022",
    logo: "/WSULogo.png",
  },
];

export function ExperienceSection() {
  return (
    <div className="flex md:flex-row flex-col w-full px-32 gap-x-16">
      <div className="gap-1 pr-1 flex flex-col w-full">
        <p className="text-3xl font-bold border-b">Education</p>
        {schools.map((item, index) => (
          <CardCompany
            key={index}
            company={item.company}
            position={item.position}
            dates={item.dates}
            logo={item.logo}
          />
        ))}
      </div>
      <div className="gap-1 pl-1 flex flex-col w-full">
        <p className="pt-2 sm:pt-0 text-3xl font-bold border-b">
          Work Experience
        </p>
        {companies.map((item, index) => (
          <CardCompany
            key={index}
            company={item.company}
            position={item.position}
            dates={item.dates}
            logo={item.logo}
          />
        ))}
        {internships.map((item, index) => (
          <CardCompany
            key={index}
            company={item.company}
            position={item.position}
            dates={item.dates}
            logo={item.logo}
          />
        ))}
      </div>
    </div>
  );
}
