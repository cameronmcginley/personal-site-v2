import * as React from "react";
import Image from "next/image";
import { CompanyCardData } from "../sections/experience-section";

export function CardCompany(props: CompanyCardData) {
  return (
    <div className="flex flex-row items-start w-full mb-2">
      <div className="min-w-14 max-w-14 h-full pt-2 pl-2 pr-1 flex items-start">
        <Image
          src={props.logo}
          alt={props.company + " Logo"}
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
        />
      </div>

      <div className="p-1 flex-grow gap-y-1 flex flex-col">
        <div className="text-md font-bold">{props.position}</div>
        <div className="text-sm font-semibold">{props.company}</div>
        <div className="text-sm font-light">{props.dates}</div>
      </div>
    </div>
  );
}
