import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { CardHoverShine } from "./card-hovershine";
import { CustomLink } from "./custom-link";

export function CardProject(props) {
  const isWebm = props.image.endsWith(".webm");

  return (
    <div className="w-72">
      <CardHoverShine isLink={false} fullHeight={true}>
        {/* Flex container for the whole card */}
        <div className="flex flex-col">
          {/* Image container with Link and hover effect */}
          <Link href={props.github_link}>
            {/* Replace with your link destination */}
            <div className="relative w-full aspect-[16/9] overflow-hidden rounded-t-lg cursor-pointer group">
              {/* Render video if webm file */}
              {isWebm ? (
                // Render video if the media file is a WebM
                <video
                  src={props.image}
                  loop
                  autoPlay
                  muted
                  className="border-b transition-transform duration-300 ease-in-out transform group-hover:scale-105"
                />
              ) : (
                <Image
                  src={props.image}
                  layout="fill"
                  objectFit="cover"
                  alt={props.image}
                  className="border-b transition-transform duration-300 ease-in-out transform group-hover:scale-105"
                />
              )}
              {/* Overlay for fade effect */}
              <div className="absolute bottom-0 left-0 right-0 h-0 bg-gradient-to-t from-companycardbg to-transparent z-10"></div>
            </div>
          </Link>

          {/* Content container with flex-grow to take up all available space */}
          <div className="p-2 flex flex-col flex-grow">
            {/* Container for Title, Links, and Description */}
            <div className="flex-grow">
              {/* Title */}
              <div className="text-lg pb-1 font-bold text-blue-600 dark:text-blue-500 text-center">
                <CustomLink url={props.github_link} text={props.title} />
              </div>
              {/* Links */}
              <div className="flex flex-row w-full justify-center">
                {/* GitHub */}
                <Link
                  href={props.github_link}
                  className="pr-2 pb-1 last:pr-0 last:pb-0"
                >
                  <CardHoverShine isLink={true}>GitHub</CardHoverShine>
                </Link>
                {/* Public App */}
                {props.public_link && (
                  <Link
                    href={props.public_link}
                    className="pr-2 pb-1 last:pr-0 last:pb-0"
                  >
                    <CardHoverShine isLink={true}>Public App</CardHoverShine>
                  </Link>
                )}
              </div>
              {/* Description */}
              <div className="flex text-center pt-1 pb-1 pl-2 pr-2">
                {props.description}
              </div>
            </div>

            {/* Tools - aligned to bottom */}
            <div className="pt-2 flex flex-row w-full flex-wrap justify-center">
              {props.tools.map((item, index) => (
                <div
                  key={index}
                  className="pr-4 pb-1 last:pr-0 last:pb-0 text-xs"
                >
                  <CustomLink url={item.link} text={item.name} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </CardHoverShine>
    </div>
  );
}
