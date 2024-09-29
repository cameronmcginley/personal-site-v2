import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { CustomLink } from "../ui/custom-link";
import { Button } from "../ui/button";
import { Github, ExternalLink } from "lucide-react";
import { CustomButton } from "../ui/custom-button";

interface CardProjectProps {
  image: string;
  title: string;
  githubLink?: string;
  publicLink?: string;
  titleLink?: string;
  description: string | JSX.Element;
  badges?: JSX.Element[];
}

export function CardProject({
  image,
  title,
  githubLink,
  publicLink,
  titleLink,
  description,
  badges,
}: CardProjectProps) {
  const isWebm = image.endsWith(".webm");

  return (
    <Card>
      <div className="h-[260px] flex flex-col md:flex-row">
        <div className="md:w-1/3 relative max-h-[260px] overflow-hidden border-r">
          {isWebm ? (
            <video
              src={image}
              loop
              autoPlay
              muted
              className=" transition-transform duration-300 ease-in-out transform group-hover:scale-105 w-full h-full object-cover"
            />
          ) : (
            <Image
              src={image}
              alt={image}
              className="transition-transform duration-300 ease-in-out transform group-hover:scale-105"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          )}
        </div>

        <div className="flex flex-col md:w-2/3 p-6 justify-between h-full">
          <div>
            <div className="flex flex-row gap-8 items-center mb-4 ">
              <h3 className="text-2xl font-bold items-center">
                <CustomLink url={titleLink ?? githubLink} text={title} />
              </h3>
              <div className="flex flex-wrap gap-4 mt-auto">
                {githubLink && (
                  <CustomButton url={githubLink}>
                    <div className="flex flex-row gap-2 items-center justify-center h-full">
                      <Github className="w-4 h-4 mr-2" />
                      <p>GitHub</p>
                    </div>
                  </CustomButton>
                )}
                {publicLink && (
                  <CustomButton url={publicLink}>
                    <div className="flex flex-row gap-2 items-center justify-center h-full">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      <p>Public App</p>
                    </div>
                  </CustomButton>
                )}
              </div>
            </div>
            <div className="text-muted-foreground mb-4">{description}</div>
          </div>

          {badges && (
            <div className="flex flex-wrap gap-2">
              <div className="gap-1 pt-4 flex flex-row flex-wrap justify-start">
                {badges.map((badge, index) => (
                  <div key={index}>{badge}</div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </Card>
  );
}
