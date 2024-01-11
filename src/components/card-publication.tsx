import * as React from "react";
import Image from "next/image";
// import CapitalOneLogo from "/CapitalOneLogo.svg";

import { Card } from "@/components/ui/card";
import Tilt from "react-parallax-tilt";
import Link from "next/link";
import { CardHoverShine } from "./card-hovershine";
import { CustomLink } from "./custom-link";

// title="Capital One"
// positions={["Software Engineer", "Software Engineer Inter"]}
// dates={["Feb 2024 - Current", "Summer 2023"]}
// logo="/CapitalOneLogo.svg"

export function CardPublication(props) {
  return (
    <CardHoverShine isLink={false}>
      <div className="flex p-4 md:flex-row flex-col justify-center md:items-start items-center">
        {/* Image */}
        <div className="md:w-1/3 w-1/3 md:pr-4 pr-0 md:pb-0 pb-4 flex justify-center">
          <Tilt
            className="tilt"
            tiltReverse={true}
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            transitionSpeed={1000}
            gyroscope={false}
            glareEnable={true} // Optional: if you want a glare effect
            glareMaxOpacity={0.45} // Optional: adjust glare max opacity
            glareColor="white" // Optional: adjust glare color
            glarePosition="bottom" // Optional: adjust glare position
            glareBorderRadius="0.75rem" // match rounded-xl on image
          >
            <Image
              src={props.image}
              width={500}
              height={500}
              alt={props.image}
              className="rounded-md outline outline-1 outline-gray-300 outline-offset-2"
              // className="rounded-xl border-b-2 border-r-2 border-gray-300"
            />
          </Tilt>
        </div>

        <div>
          {/* Title */}
          <div className="w-fit pb-1 text-xl font-bold text-link ">
            <CustomLink url={props.titlelink} text={props.title} />
          </div>
          {/* Authors */}
          <div className="text-md">
            {/* Map authors, seperate by comma */}
            <div>
              {props.authors.map((author, index) => (
                <span key={author}>
                  {author}
                  {index < props.authors.length - 1 ? ", " : ""}
                </span>
              ))}
            </div>
          </div>
          {/* Conference */}
          <div className="text-md">{props.conference}</div>
          {/* Citations */}
          <div className="text-md w-fit text-link">
            <CustomLink
              url={props.citationslink}
              text={"Citations: " + props.citations}
            />
          </div>
        </div>
      </div>
    </CardHoverShine>
  );
}
