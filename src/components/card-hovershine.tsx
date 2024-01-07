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
    from-companycardbg 
    from-40% 
    via-cardsheen 
    via-65% 
    to-companycardbg 
    to-90%
    hover:from-companycardbg
    hover:via-cardsheenhover
    hover:border-bgcolorhighlight
    hover:to-companycardbg
    hover:drop-shadow
    relative
    `;
  } else {
    className = `
    group/unlinked
    border flex flex-row max-w-946 w-full 
    bg-gradient-to-br 
    from-companycardbg
    from-40% via-cardsheen 
    via-65% 
    to-companycardbg
    to-90%
    hover:from-companycardbg
    hover:via-gray-100/60
    hover:border-gray-200/20
    hover:to-companycardbg
    hover:drop-shadow
    `;
  }

  if (props.fullHeight) {
    className += " h-full";
  }

  return (
    <>
      {props.isLink ? (
        // Linked card (blue highlights)
        <Card className={className}>
          <div className="rounded-tl-lg ease absolute left-0 top-0 h-0 w-0 border-t-2 border-blue-300 transition-all duration-200 group-hover/linked:w-full"></div>
          <div className="rounded-tr-lg ease absolute right-0 top-0 h-0 w-0 border-r-2 border-blue-300 transition-all duration-200 group-hover/linked:h-full"></div>
          <div className="rounded-br-lg ease absolute bottom-0 right-0 h-0 w-0 border-b-2 border-blue-300 transition-all duration-200 group-hover/linked:w-full"></div>
          <div className="rounded-bl-lg ease absolute bottom-0 left-0 h-0 w-0 border-l-2 border-blue-300 transition-all duration-200 group-hover/linked:h-full"></div>
          {children}
        </Card>
      ) : (
        // Non linked card (gray highlights)
        <Card className={className}>{children}</Card>
      )}
    </>
  );
}
