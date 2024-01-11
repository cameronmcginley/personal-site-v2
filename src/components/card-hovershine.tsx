"use client";

import * as React from "react";
import { Card } from "@/components/ui/card";

interface CardContainerProps {
  children: React.ReactNode;
  isLink: boolean;
  fullHeight?: boolean;
}

export function CardHoverShine({ children, ...props }: CardContainerProps) {
  let className = "";

  if (props.isLink) {
    className = `
    group/linked

    border flex flex-row p-1 max-w-946 w-full 
    bg-gradient-to-br 

    from-companyCardBg 
    from-40% 
    via-cardSheen 
    via-65% 
    to-companyCardBg 
    to-90%

    hover:from-companyCardBg
    hover:via-cardSheenHoverLink
    hover:to-companyCardBg
    hover:border-bgColorSplash
    hover:drop-shadow
    relative
    `;
  } else {
    className = `
    group/unlinked
    border flex flex-row max-w-946 w-full 

    bg-gradient-to-br 

    from-companyCardBg
    from-40% 
    via-cardSheen
    via-65% 
    to-companyCardBg
    to-90%

    hover:from-companyCardBg
    hover:via-cardSheenHover
    hover:to-companyCardBg
    hover:border
    hover:drop-shadow
    `;
  }

  if (props.fullHeight) {
    className += " h-full";
  }

  return (
    <>
      {props.isLink ? (
        // Linked card (blue outlines)
        <Card className={className}>
          <div className="ease absolute left-0 top-0 h-0 w-0 border-t-2 border-cardLinkOutline transition-all duration-200 group-hover/linked:w-full"></div>
          <div className="ease absolute right-0 top-0 h-0 w-0 border-r-2 border-cardLinkOutline transition-all duration-200 group-hover/linked:h-full"></div>
          <div className="ease absolute bottom-0 right-0 h-0 w-0 border-b-2 border-cardLinkOutline transition-all duration-200 group-hover/linked:w-full"></div>
          <div className="ease absolute bottom-0 left-0 h-0 w-0 border-l-2 border-cardLinkOutline transition-all duration-200 group-hover/linked:h-full"></div>
          {children}
        </Card>
      ) : (
        // Non linked card (gray highlights)
        <Card className={className}>{children}</Card>
      )}
    </>
  );
}
