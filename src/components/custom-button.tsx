import React from "react";
import Link from "next/link";

interface CustomButtonProps {
  children: React.ReactNode;
  url: string;
}

export function CustomButton({ children, ...props }: CustomButtonProps) {
  return (
    <Link href={props.url} passHref>
      <div
        className="
        h-full

        border

        relative rounded-md px-1 py-1
        overflow-hidden 
        group 
        bg-companyCardBg
        relative 

        hover:bg-gradient-to-r 
        hover:from-companyCardBg 
        hover:to-cardSheenHoverLink 
        hover:ring-2 
        hover:ring-offset-2 
        hover:ring-linkUnderlineStart
        hover:border-linkUnderlineStart

        transition-all 
        ease-out 
        duration-300"
      >
        {/* Highlight */}
        <span
          className="
          absolute right-0 w-8 h-32 -mt-12 
          transition-all 
          duration-0 
          transform 
          translate-x-12 
          bg-link
          opacity-10 
          rotate-12 
          group-hover:-translate-x-40 
          group-hover:duration-1000
          ease"
        />
        <span className="relative block w-full h-full">{children}</span>
      </div>
    </Link>
  );
}
