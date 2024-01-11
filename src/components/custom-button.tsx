import React from "react";
import Link from "next/link";

interface CardContainerProps {
  children: React.ReactNode;
  url: string;
  text: string;
}

export function CustomButton({ children, ...props }: CardContainerProps) {
  return (
    <Link
      href={props.url}
      className="
      w-full h-full md:mb-2 md:mr-0 mb-0 mr-2 last:mb-0

      border
      
      relative rounded px-1 py-1
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
      <span className="relative">{children}</span>
    </Link>
  );
}
