import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { CustomLink } from "@/components/ui/custom-link";
import { CustomButton } from "@/components/ui/custom-button";

interface CardProjectProps {
  image: string;
  title: string;
  githubLink: string;
  publicLink?: string;
  description: string;
  badges?: JSX.Element[];
}

export function CardProject(props: CardProjectProps) {
  const isWebm = props.image.endsWith(".webm");

  return (
    <div className="w-72">
      <Card fullHeight={true}>
        <div className="flex flex-col">
          <Link href={props.githubLink}>
            <div className="relative w-full aspect-[16/9] overflow-hidden cursor-pointer group">
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
              <div className="absolute bottom-0 left-0 right-0 h-0 bg-gradient-to-t from-cardBg to-transparent z-10"></div>
            </div>
          </Link>

          <div className="p-2 flex flex-col h-full">
            <div className="flex-grow space-y-1">
              <div className="text-lg pb-1 font-bold text-link text-center">
                <CustomLink url={props.githubLink} text={props.title} />
              </div>

              <div className="flex flex-row w-full justify-center gap-2">
                <CustomButton url={props.githubLink}>
                  <p>GitHub</p>
                </CustomButton>

                {props.publicLink && (
                  <CustomButton url={props.publicLink}>
                    <p>Public App</p>
                  </CustomButton>
                )}
              </div>

              <div className="flex text-center pt-2 pb-1 pl-2 pr-2">
                {props.description}
              </div>
            </div>

            {props.badges && (
              <div className="gap-1 pt-4 flex flex-row w-full flex-wrap justify-center">
                {props.badges.map((badge, index) => (
                  <div key={index} className="flex-grow">
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
