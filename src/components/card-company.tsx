import * as React from "react";
import Image from "next/image";
// import CapitalOneLogo from "/CapitalOneLogo.svg";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Tilt from "react-parallax-tilt";
import { CardHoverShine } from "./card-hovershine";

// title="Capital One"
// positions={["Software Engineer", "Software Engineer Inter"]}
// dates={["Feb 2024 - Current", "Summer 2023"]}
// logo="/CapitalOneLogo.svg"

export function CardCompany(props) {
  let logoWidth = 10;
  let logoHeight = 10;

  if (props.logoSize === "wide") {
    logoWidth = 156;
    logoHeight = 156;
  } else if (props.logoSize === "small") {
    logoWidth = 110;
    logoHeight = 110;
  } else if (props.logoSize === "extrawide") {
    logoWidth = 180;
    logoHeight = 180;
  }

  return (
    <CardHoverShine isLink={false}>
      <div className="flex flex-row h-full items-center">
        {/* Image */}
        <div className="min-w-20 max-w-20 h-20 p-1 flex items-center">
          <Image
            src={props.logo}
            alt={props.company + " Logo"}
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
            className="transition-transform duration-300 ease-in-out transform hover:scale-105"
          />
        </div>
        {/* Text */}
        <div className="p-1">
          {/* Company Name */}
          <div className="text-xl font-bold drop-shadow-[0_1px_1px_#ffffff]">
            {props.company}
          </div>
          {/* Position and Dates */}
          <div className="text-md">
            {props.positions.map((position, index) => (
              <div key={position} className="pb-2 last:pb-0">
                {position}
                <div className="text-sm pl-2">{props.dates[index]}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </CardHoverShine>
  );

  return (
    <CardHoverShine isLink={false}>
      {/* Text */}
      <div className="p-2">
        {/* Company Name */}
        <div className="pb-1 text-xl font-bold drop-shadow-[0_1px_1px_#ffffff]">
          {props.company}
        </div>
        {/* Position and Dates */}
        <div className="text-md">
          {props.positions.map((position, index) => (
            <div key={position} className="pb-2 last:pb-0">
              {position}
              <div className="text-sm pl-2">{props.dates[index]}</div>
            </div>
          ))}
        </div>
      </div>
      {/* Image */}
      <div className="">
        <Image
          src={props.logo}
          alt={props.company + " Logo"}
          width={logoWidth}
          height={logoHeight}
          //   style={{ filter: "grayscale(100%)" }}
          className="-rotate-3 -z-10 absolute -bottom-1 -right-3 opacity-30 dark:opacity-30 group-hover/unlinked:opacity-70"
        />
      </div>
    </CardHoverShine>
  );
}
