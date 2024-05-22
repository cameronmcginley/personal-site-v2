import * as React from "react";
import Image from "next/image";
import { Card } from "../ui/card";
import { CustomLink } from "../ui/custom-link";
import { featureFlag } from "@/app/utils";

interface CardPublicationProps {
  image: string;
  title: string;
  titlelink: string;
  authors: string[];
  conference: string;
  citations: string;
  citationslink: string;
}

export function CardPublication(props: CardPublicationProps) {
  return (
    <Card>
      <div className="flex p-4 md:flex-row flex-col justify-center md:items-start items-center">
        {/* Image */}
        <div className="md:w-1/3 w-1/3 md:pr-4 pr-0 md:pb-0 pb-4 flex justify-center">
          <Image
            src={props.image}
            width={500}
            height={500}
            alt={props.image}
            className={`border ${
              featureFlag.animations &&
              "transition-transform duration-300 ease-in-out transform hover:scale-105"
            }`}
          />
          {/* </Tilt> */}
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
    </Card>
  );
}
