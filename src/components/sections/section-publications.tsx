import React from "react";
import { CardContainer } from "@/components/ui/card-container";
import { CardPublication } from "@/components/section-ui/card-publication";

const publications = [
  {
    title:
      "Convolutional Neural Network Optimization for Phishing Email Classification",
    authors: ["Cameron McGinley", "Sergio A. Salinas Monroy"],
    conference: "2021 IEEE Interational Conference on Big Data",
    citations: "8",
    image: "/layers.webp",
    titlelink: "https://ieeexplore.ieee.org/abstract/document/9671531",
    citationslink:
      "https://scholar.google.com/scholar?oi=bibs&hl=en&cites=12860478389443421757",
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
              <CardPublication
                key={index}
                title={item.title}
                authors={item.authors}
                conference={item.conference}
                citations={item.citations}
                image={item.image}
                titlelink={item.titlelink}
                citationslink={item.citationslink}
              />
            ))}
          </div>
        </div>
      </CardContainer>
    </>
  );
}
