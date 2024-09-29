import * as React from "react";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface CardCompanyProps {
  logo: string;
  company: string;
  positions: string[];
  dates: string[];
  badges?: JSX.Element[];
}

export function CardCompany(props: CardCompanyProps) {
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);

  return (
    <Card>
      <div className="w-full">
        <Collapsible>
          <div className="flex flex-row h-full items-start w-full">
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

            <div className="p-1 flex-grow">
              <div className="text-xl font-bold">{props.company}</div>
              <div className="text-md">
                {props.positions.map((position, index) => (
                  <div key={position} className="pb-2 last:pb-0">
                    {position}
                    <div className="text-sm pl-2">{props.dates[index]}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col justify-end self-end ml-auto pr-2 h-full">
              {props.badges && (
                <CollapsibleTrigger asChild>
                  <button onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                    <FontAwesomeIcon
                      icon={isDropdownOpen ? faChevronUp : faChevronDown}
                      className="h-3 w-3"
                    />
                  </button>
                </CollapsibleTrigger>
              )}
            </div>
          </div>
          <CollapsibleContent>
            <div className="p-2 pt-0">
              <div className="border-b border-border mb-2 mx-8" />
              {props.badges && (
                <div className="pl-12 gap-1 flex flex-row w-full flex-wrap justify-start">
                  {props.badges.map((badge, index) => (
                    <div key={index} className="">
                      {badge}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </CollapsibleContent>
        </Collapsible>
      </div>
    </Card>
  );
}
