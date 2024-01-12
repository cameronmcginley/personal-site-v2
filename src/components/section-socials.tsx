import React from "react";
import { CustomButton } from "./custom-button";
import { CardContainer } from "./card-container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faGoogleScholar } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

const socials = [
  {
    name: "Resume",
    url: "/resume.pdf",
    icon: faFilePdf,
    color: "#e53935",
  },
  {
    name: "GitHub",
    url: "https://github.com/cameronmcginley",
    icon: faGithub,
    color: "#24292e",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/cameronmcginley/",
    icon: faLinkedin,
    color: "#0077b5",
  },
  {
    name: "Scholar",
    url: "https://scholar.google.com/citations?user=3AUzp3MAAAAJ&hl=en&oi=ao",
    icon: faGoogleScholar,
    color: "#4285F4",
  },
];

export function SectionSocials() {
  return (
    <div className="flex justify-center md:h-80">
      <CardContainer bgpattern="wood" patterncolor="blue-300/20">
        <div className="flex md:flex-col flex-row">
          {/* Map all buttons */}
          {socials.map((item, index) => (
            <CustomButton url={item.url} key={index}>
              <div className="p-0 m-0 flex flex-col justify-center items-center w-full h-full">
                <FontAwesomeIcon
                  className="h-8 w-8"
                  icon={item.icon}
                  style={{
                    color: item.color,
                  }}
                />
                <p className="p-0 m-0 h-fit w-fit">{item.name}</p>
              </div>
            </CustomButton>
          ))}
        </div>
      </CardContainer>
    </div>
  );
}
