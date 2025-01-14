import React from "react";
import Link from "next/link";

interface CustomLinkProps {
  text?: string; // shouldnt be a prop.....
  url?: string;
  onClick?: () => void; // Optional onClick for scrolling
  children?: React.ReactNode;
  underlineAlwaysVisible?: boolean;
  gradient?: boolean;
}

export function CustomLink({
  text,
  url,
  onClick,
  children,
  underlineAlwaysVisible,
  gradient = true,
}: CustomLinkProps) {
  const className = `
    bg-gradient-to-r from-linkUnderlineStart to-linkUnderlineEnd
    bg-[length:0px_3px]
    bg-left-bottom
    bg-no-repeat
    transition-[background-size]
    duration-300
    hover:bg-[length:100%_3px]
  `;

  // If url is provided, use Next.js Link for navigation
  if (url) {
    return (
      <Link href={url} className={`${className}`}>
        {text}
        {children}
      </Link>
    );
  }

  // If onClick is provided, use a regular anchor tag for in-page navigation
  return (
    <a
      href="#"
      onClick={(e) => {
        e.preventDefault();
        if (onClick) {
          onClick();
        }
      }}
      className={className}
    >
      {text}
    </a>
  );
}
