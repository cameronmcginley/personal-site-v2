import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faGoogleScholar } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { CardHoverShine } from "./card-hovershine";

interface CardSocialProps {
  text: string;
  url: string;
}

export function CardSocial(props: CardSocialProps) {
  return (
    <Link
      href={props.url}
      className="w-full h-full md:mb-2 md:mr-0 mb-0 mr-2 last:mb-0"
    >
      <CardHoverShine isLink={true}>
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
      </CardHoverShine>
    </Link>
  );
}
