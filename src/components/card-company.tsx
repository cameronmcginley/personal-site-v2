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
    <Card
      className="
        group
        border flex flex-row p-4 m-2 max-w-946 w-full 
        bg-gradient-to-br from-companycardbg from-40% via-cardsheen via-65% to-companycardbg to-90%
        hover:via-cardsheenhover
        hover:border
        "
    >
      <div>
        <div className="pb-1 text-3xl font-bold">{props.company}</div>
        <div className="text-lg">
          {props.positions.map((position, index) => (
            <div key={position} className="pb-2 last:pb-0">
              {position}
              <div className="text-sm pl-2">{props.dates[index]}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="">
        <Image
          src={props.logo}
          alt={props.company + " Logo"}
          width={logoWidth}
          height={logoHeight}
          //   style={{ filter: "grayscale(100%)" }}
          className="-rotate-3 -z-10 absolute -bottom-1 -right-3 opacity-30 dark:opacity-30 group-hover:opacity-70"
        />
      </div>
    </Card>
  );
}
