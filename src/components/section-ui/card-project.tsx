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
    <Card className="flex flex-col w-full md:flex-row overflow-hidden">
      <div className="md:w-72 h-64 relative justify-center">
        {isWebm ? (
          <video
            src={image}
            loop
            autoPlay
            muted
            className="object-contain w-full h-full"
          />
        ) : (
          <Image
            src={image}
            alt={title}
            fill
            className="object-contain w-full h-full"
          />
        )}
      </div>

      <div className="w-full flex flex-col p-4 md:p-6 justify-between overflow-y-auto">
        <div>
          <div className="flex flex-row gap-4 mb-4 justify-between">
            <h3 className="text-xl md:text-2xl font-bold">
              <CustomLink url={titleLink ?? githubLink} text={title} />
            </h3>
            <div className="flex flex-wrap gap-2 h-full justify-end">
              {githubLink && (
                <CustomButton url={githubLink}>
                  <div className="flex flex-row gap-2 items-center justify-center w-full">
                    <Github className="w-4 h-4" />
                    <p>GitHub</p>
                  </div>
                </CustomButton>
              )}
              {publicLink && (
                <CustomButton url={publicLink}>
                  <div className="flex flex-row gap-2 items-center justify-center w-full">
                    <ExternalLink className="w-4 h-4" />
                    <p>Public App</p>
                  </div>
                </CustomButton>
              )}
            </div>
          </div>
          <div className="text-sm text-muted-foreground mb-4">
            {description}
          </div>
        </div>

        {badges && (
          <div className="flex flex-wrap gap-2 mt-auto">
            {badges.map((badge, index) => (
              <div key={index}>{badge}</div>
            ))}
          </div>
        )}
      </div>
    </Card>
  );
}
