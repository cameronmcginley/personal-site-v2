import * as React from "react";
import Image from "next/image";
import { Card } from "@/components/ui/card";

interface CardCompanyProps {
  logo: string;
  company: string;
  positions: string[];
  dates: string[];
}

export function CardCompany(props: CardCompanyProps) {
  return (
    <Card>
      <div className="flex flex-row h-full items-center">
        {/* Image */}
        <div className="min-w-14 max-w-14 h-full pt-2 pl-2 pr-1 flex items-start">
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
          <div className="text-xl font-bold">{props.company}</div>
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
    </Card>
  );
}
