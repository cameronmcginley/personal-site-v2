import React from "react";
import { CardCompany } from "@/components/section-ui/card-company";

export type CompanyCardData = {
  company: string;
  position: string;
  dates: string;
  logo: string;
  location?: string;
  bullets?: string[];
};

const schools: CompanyCardData[] = [
  {
    company: "University of California San Diego",
    position: "M.S. Computer Science",
    dates: "Dec. 2023",
    logo: "/media/schools/UCSDLogo.png",
    location: "La Jolla, CA",
    bullets: ["Systems Specialization"],
  },
  {
    company: "Wichita State University",
    position: "B.S. Computer Science",
    dates: "May 2022",
    logo: "/media/schools/WSULogo.png",
    location: "Wichita, KS",
    bullets: ["Minor in Mathematics"],
  },
];

const experience: CompanyCardData[] = [
  {
    company: "Capital One",
    position: "Software Engineer",
    dates: "Feb. 2024 – Present",
    logo: "/media/companies/CapitalOneLogo.jpg",
    location: "San Francisco, CA",
    bullets: [
      "Building Slingshot, a Snowflake/Databricks compute optimization platform.",
    ],
  },
  {
    company: "Capital One",
    position: "Software Engineer Intern",
    dates: "Summer 2023",
    logo: "/media/companies/CapitalOneLogo.jpg",
    location: "McLean, VA",
    bullets: [
      "PySpark on Databricks and serverless data pipelines powering dashboards.",
    ],
  },
  {
    company: "U.S. Government",
    position: "Software Engineer Intern",
    dates: "Summer 2022",
    logo: "/media/companies/USGLogo.jpg",
    location: "Washington, D.C.",
    bullets: [
    ],
  },
  {
    company: "NetApp",
    position: "Software Test Automation Engineer Intern",
    dates: "May 2019 – May 2022",
    logo: "/media/companies/NetAppLogo.svg",
    location: "Wichita, KS",
    bullets: [
      "Automated firmware testing for enterprise data storage systems.",
    ],
  },
  {
    company: "Purdue University",
    position: "Machine Learning Research Intern",
    dates: "Summer 2021",
    logo: "/media/schools/PurdueLogo.svg",
    location: "West Lafayette, IN",
    bullets: [
      "Applied entropy analysis to detect bugs in open-source Java code using ML models.",
    ],
  },
  {
    company: "Wichita State University",
    position: "Machine Learning Research Intern",
    dates: "Summer 2020",
    logo: "/media/schools/WSULogo.png",
    location: "Wichita, KS",
    bullets: [
      "Built a CNN for phishing email classification and finetuned GPT-2 for a scam-baiting system.",
    ],
  },
];

export function ExperienceSection() {
  return (
    <div className="flex flex-col w-full p-4">
      <div className="flex flex-col">
        <p className="text-3xl font-bold ml-2 mb-4">Education</p>
        {schools.map((item, index) => (
          <CardCompany key={index} {...item} />
        ))}
      </div>
      <div className="flex flex-col mt-4">
        <p className="text-3xl font-bold ml-2 mb-4">Experience</p>
        {experience.map((item, index) => (
          <CardCompany key={index} {...item} />
        ))}
      </div>
    </div>
  );
}
