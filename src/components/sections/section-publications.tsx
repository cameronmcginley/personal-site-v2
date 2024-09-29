import React from "react";
import { CardContainer } from "@/components/ui/card-container";
import { CardProject } from "../section-ui/card-project";
import { CustomLink } from "../ui/custom-link";

const publications = [
  {
    image: "/layers.webp",
    title:
      "Convolutional Neural Network Optimization for Phishing Email Classification",
    titleLink: "https://ieeexplore.ieee.org/abstract/document/9671531",
    description: (
      <>
        <p>
          <strong>Authors:</strong> Cameron McGinley, Sergio A. Salinas Monroy
        </p>
        <p>
          <strong>Conference:</strong> 2021 IEEE Interational Conference on Big
          Data
        </p>
        <CustomLink url="https://scholar.google.com/scholar?oi=bibs&hl=en&cites=12860478389443421757">
          <p>
            <strong>Citations:</strong> 8
          </p>
        </CustomLink>
      </>
    ),
  },
];

export function SectionPublications() {
  return (
    <>
      <CardContainer>
        <div className="flex flex-row w-full">
          <div className="pr-1 flex flex-col w-full items-center">
            <p className="text-3xl font-bold col-span-2">Publications</p>
            {publications.map((item, index) => (
              <CardProject
                key={index}
                image={item.image}
                title={item.title}
                titleLink={item.titleLink}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </CardContainer>
    </>
  );
}
