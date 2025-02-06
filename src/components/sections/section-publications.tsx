import React from "react";
import { CardProject } from "../section-ui/card-project";

const publications = [
  {
    image: "/layers.webp",
    title:
      "Convolutional Neural Network Optimization for Phishing Email Classification",
    links: [
      {
        title: "IEEE",
        url: "https://ieeexplore.ieee.org/abstract/document/9671531",
      },
      {
        title: "Google Scholar",
        url: "https://scholar.google.com/scholar?cluster=12860478389443421757&hl=en&as_sdt=2005&sciodt=0,5",
      },
    ],
    description: (
      <>
        <p>
          <strong>Authors:</strong>{" "}
          <a
            href="https://scholar.google.com/citations?user=3AUzp3MAAAAJ&hl=en&oi=sra"
            className="hover:underline decoration-link"
          >
            Cameron McGinley
          </a>
          ,{" "}
          <a
            href="https://scholar.google.com/citations?user=2Gh-ZdAAAAAJ&hl=en&oi=sra"
            className="hover:underline decoration-link"
          >
            Sergio A. Salinas Monroy
          </a>
        </p>
        <p>
          <strong>Conference:</strong>{" "}
          <a
            href={"https://bigdataieee.org/"}
            className="hover:underline decoration-link"
          >
            2021 IEEE Interational Conference on Big Data
          </a>
        </p>

        <p>
          <strong>Citations:</strong>{" "}
          <a
            href="https://scholar.google.com/scholar?oi=bibs&hl=en&cites=12860478389443421757"
            className="hover:underline decoration-link"
          >
            11
          </a>
        </p>
      </>
    ),
  },
];

export function SectionPublications() {
  return (
    <div className="flex flex-row w-full p-4">
      <div className="pr-1 flex flex-col w-full">
        <p className="text-3xl font-bold ml-2 mb-6">Publications</p>
        {publications.map((item, index) => (
          <CardProject
            key={index}
            image={item.image}
            title={item.title}
            links={item.links}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
}
