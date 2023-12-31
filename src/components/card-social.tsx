import * as React from "react";
import Image from "next/image";
// import CapitalOneLogo from "/CapitalOneLogo.svg";
import { Github, GraduationCap, FileText, Linkedin } from "lucide-react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faGoogleScholar } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";

import { Card } from "@/components/ui/card";
import Link from "next/link";
import Tilt from "react-parallax-tilt";

interface CardSocialProps {
  text: string;
  url: string;
}

export function CardSocial(props: CardSocialProps) {
  return (
    <Link href={props.url} className="w-full h-full mb-2 last:mb-0">
      {/* <Tilt
        className="max-w-946 w-full"
        tiltMaxAngleX={0}
        tiltMaxAngleY={0}
        perspective={1000}
        transitionSpeed={1000}
        scale={1.025}
      > */}
      <Card
        className="
        group
        border flex flex-row p-1 max-w-946 w-full h-full
        bg-gradient-to-br from-companycardbg from-40% via-cardsheen via-65% to-companycardbg to-90%
        hover:via-cardsheenhover
        hover:border-bgcolorhighlight
        hover:drop-shadow
        hover:z-10
        "
      >
        <div className="flex flex-col justify-center items-center w-full h-full">
          {/* Icon */}
          {props.text === "GitHub" ? (
            <FontAwesomeIcon
              className="h-full w-8"
              icon={faGithub}
              style={{
                color: "#24292e",
              }}
            />
          ) : props.text === "Resume" ? (
            // <FileText />
            <FontAwesomeIcon
              className="h-full w-8"
              icon={faFilePdf}
              style={{
                color: "#e53935",
              }}
            />
          ) : props.text === "LinkedIn" ? (
            <FontAwesomeIcon
              className="h-full w-8"
              icon={faLinkedin}
              style={{
                color: "#0077b5",
              }}
            />
          ) : props.text === "Scholar" ? (
            <FontAwesomeIcon
              className="h-full w-8"
              icon={faGoogleScholar}
              style={{
                color: "#4285F4",
              }}
            />
          ) : (
            <div>N/A</div>
          )}
          {/* Text */}
          {props.text}
        </div>
      </Card>
      {/* </Tilt> */}
    </Link>
  );
}
