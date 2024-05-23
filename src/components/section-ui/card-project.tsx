import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { CustomLink } from "@/components/ui/custom-link";
import { CustomButton } from "@/components/ui/custom-button";

interface CardProjectProps {
  image: string;
  title: string;
  github_link: string;
  public_link?: string;
  description: string;
  badges?: JSX.Element[];
}

export function CardProject(props: CardProjectProps) {
  const isWebm = props.image.endsWith(".webm");

  return (
    <div className="w-72">
      <Card fullHeight={true}>
        {/* Flex container for the whole card */}
        <div className="flex flex-col">
          {/* Image container with Link and hover effect */}
          <Link href={props.github_link}>
            {/* Replace with your link destination */}
            <div className="relative w-full aspect-[16/9] overflow-hidden cursor-pointer group">
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
                  alt={props.image}
                  className="border-b transition-transform duration-300 ease-in-out transform group-hover:scale-105"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "100%", height: "auto" }}
                />
              )}
              {/* Overlay for fade effect */}
              <div className="absolute bottom-0 left-0 right-0 h-0 bg-gradient-to-t from-cardBg to-transparent z-10"></div>
            </div>
          </Link>

          {/* Content container with flex-grow to take up all available space */}
          <div className="p-2 flex flex-col h-full">
            {/* Container for Title, Links, and Description */}
            <div className="flex-grow">
              {/* Title */}
              <div className="text-lg pb-1 font-bold text-link text-center">
                <CustomLink url={props.github_link} text={props.title} />
              </div>

              {/* Links */}
              <div className="flex flex-row w-full justify-center gap-2">
                {/* GitHub */}
                <CustomButton url={props.github_link}>
                  <p>GitHub</p>
                </CustomButton>

                {/* Public App */}
                {props.public_link && (
                  <CustomButton url={props.public_link}>
                    <p>Public App</p>
                  </CustomButton>
                )}
              </div>

              {/* Description */}
              <div className="flex text-center pt-1 pb-1 pl-2 pr-2">
                {props.description}
              </div>
            </div>

            {/* Badges - aligned to bottom */}
            {props.badges && (
              <div className="gap-2 pt-2 flex flex-row w-full flex-wrap justify-center">
                {props.badges.map((badge, index) => (
                  <div key={index} className="">
                    {badge}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </Card>
    </div>
  );
}
