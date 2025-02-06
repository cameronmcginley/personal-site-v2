import Image from "next/image";
import { Link, Tool } from "../sections/section-projects";

interface CardProjectProps {
  image: string;
  title: string;
  description: string | JSX.Element;
  tools?: Tool[];
  links?: Link[];
  scaleImg?: boolean;
}

export function CardProject({
  image,
  title,
  description,
  tools,
  links,
  scaleImg = false,
}: CardProjectProps) {
  const isWebm = image.endsWith(".webm");
  const gitHubLink = links?.find((link) => link.title === "GitHub");
  const ieeeLink = links?.find((link) => link.title === "IEEE");

  return (
    <div className="border flex flex-col w-full md:flex-row overflow-hidden justify-items-center overflow-visible">
      <div className="flex h-48 md:h-64 md:h-auto w-full md:w-64 lg:w-96 border-b md:border-b-0 md:border-r relative group">
        {isWebm ? (
          <video
            src={image}
            loop
            autoPlay
            muted
            className={`${
              scaleImg && "md:object-cover"
            } object-contain w-full h-full`}
          />
        ) : (
          <div className="relative w-full h-full">
            <Image
              src={image}
              alt={title}
              className={`${
                scaleImg && "md:object-cover"
              } object-contain w-full h-full`}
              layout="fill"
            />
          </div>
        )}
      </div>

      <div className="w-full flex flex-col p-4 md:p-6 justify-between overflow-y-auto">
        <div>
          <div className="flex flex-row gap-4 mb-1 justify-between">
            <h3 className="text-xl md:text-2xl font-bold">
              <a
                href={gitHubLink ? gitHubLink.url : ieeeLink?.url}
                className="hover:underline decoration-link"
              >
                {title}
              </a>
            </h3>
          </div>
          <div className="flex flex-wrap gap-x-1 mb-3">
            {links?.map((link, index) => (
              <>
                <a
                  key={index}
                  href={link.url}
                  className="text-link hover:underline"
                >
                  {link.title}
                </a>
                {index !== links.length - 1 && " | "}
              </>
            ))}
          </div>
          <div className="text-sm text-muted-foreground mb-4">
            {description}
          </div>
        </div>
        {tools && (
          <>
            <hr className="mb-2 opacity-50" />
            <span>
              <span className="text-xs">Built with </span>
              {tools.map((tool, index) => (
                <>
                  <a
                    href={tool.link}
                    className="hover:underline decoration-link text-xs"
                  >
                    {tool.name}
                  </a>
                  {index !== tools.length - 1 && ", "}
                </>
              ))}
            </span>
          </>
        )}
      </div>
    </div>
  );
}
