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
    ieeeLink: "https://ieeexplore.ieee.org/abstract/document/9671531",
    scholarLink:
      "https://scholar.google.com/scholar?cluster=12860478389443421757&hl=en&as_sdt=2005&sciodt=0,5",
    description: (
      <>
        <p>
          <strong>Authors:</strong>{" "}
          <CustomLink url="https://scholar.google.com/citations?user=3AUzp3MAAAAJ&hl=en&oi=sra">
            Cameron McGinley
          </CustomLink>
          ,{" "}
          <CustomLink url="https://scholar.google.com/citations?user=2Gh-ZdAAAAAJ&hl=en&oi=sra">
            Sergio A. Salinas Monroy
          </CustomLink>
        </p>
        <p>
          <strong>Conference:</strong>{" "}
          <CustomLink url="https://bigdataieee.org/">
            2021 IEEE Interational Conference on Big Data
          </CustomLink>
        </p>

        <p>
          <strong>Citations:</strong>{" "}
          <CustomLink url="https://scholar.google.com/scholar?oi=bibs&hl=en&cites=12860478389443421757">
            11
          </CustomLink>
        </p>
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
                scholarLink={item.scholarLink}
                ieeeLink={item.ieeeLink}
              />
            ))}
          </div>
        </div>
      </CardContainer>
    </>
  );
}
