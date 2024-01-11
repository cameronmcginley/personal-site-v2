import React from "react";
import Link from "next/link";

interface CardContainerProps {
  children: React.ReactNode;
  url: string;
  text: string;
}

export function CustomLink({ children, ...props }: CardContainerProps) {
  return (
    // Define font size in parent div of CustomLink
    <Link
      href={props.url}
      className="
        bg-gradient-to-r from-linkUnderlineStart to-linkUnderlineEnd
        bg-[length:0px_3px]
        bg-left-bottom
        bg-no-repeat
        transition-[background-size]
        duration-300
        hover:bg-[length:100%_3px]
      "
    >
      {props.text}
    </Link>
  );
}
