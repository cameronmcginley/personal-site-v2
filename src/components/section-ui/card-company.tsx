import * as React from "react";
import Image from "next/image";
import { CompanyCardData } from "../sections/experience-section";

export function CardCompany(props: CompanyCardData) {
  return (
    <div className={`flex flex-row items-start w-full ${props.bullets && props.bullets.length > 0 ? "mb-4" : "mb-2"}`}>
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

      <div className="p-1 flex-grow flex flex-col gap-1">
        <div className="flex flex-row justify-between items-baseline flex-wrap gap-x-4">
          <div>
            <span className="font-bold">{props.position}</span>
            <span className="text-muted-foreground">{" | "}{props.company}</span>
            {props.location && (
              <span className="text-muted-foreground">{" | "}{props.location}</span>
            )}
          </div>
          <span className="text-sm text-muted-foreground">{props.dates}</span>
        </div>
        {props.bullets && props.bullets.length > 0 && (
          <ul className="list-disc list-outside ml-4 text-sm text-muted-foreground flex flex-col gap-1">
            {props.bullets.map((bullet, index) => (
              <li key={index}>{bullet}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
