"use client";

import * as React from "react";
import "@/app/globals.css";
import { useTheme } from "next-themes";
// import { theme } from "tailwindcss/defaultTheme";

// const bgColorSplash = theme("colors.bgColorSplash", "defaultColor");

// Based on https://twitter.com/Suupercharged/status/1667785486382006272/photo/1

export function BackgroundTwo() {
  const { theme } = useTheme();
  const testcolor = "#000000";

  return (
    <>
      <div className="fixed inset-0">
        {/* https://bg.ibelick.com/ */}
        {/* <div
          // mask image: %width, %height, %x, %y
          // className="
          //   absolute inset-0 -z-10 h-full w-full
          //   bg-[var(--bg-primary)]
          //   bg-[linear-gradient(to_right,var(--bg-linecolor)_1px,transparent_1px),linear-gradient(to_bottom,var(--bg-linecolor)_1px,transparent_1px)]
          //   bg-[size:var(--bg-tilewidth)_var(--bg-tileheight)]
          //   [mask-image:radial-gradient(ellipse_200%_9%_at_50%_100%,var(--bg-fadeto)_100%,transparent_1000%)]
          // "
          className="
          absolute inset-0 -z-10 h-full w-full 
          bg-bgPrimary 
          bg-[
            linear-gradient(to_right,_var(--tw-gradient-stops)_1px,transparent_1px),
            linear-gradient(to_bottom,_var(--tw-gradient-stops)_1px,transparent_1px)
          ]
          bg-[length:200px_100px]
          [mask-image:radial-gradient(ellipse_200%_9%_at_50%_100%,var(--bg-fadeto)_100%,transparent_1000%)]
        "
        /> */}
        {/* Main color */}
        <div
          className="
          absolute inset-0 -z-10 h-full w-full
          bg-bgPrimary"
        />
        {/* Grid vertical*/}
        <div
          className="
          absolute inset-0 -z-10 h-full w-full
          bg-[linear-gradient(to_right,_var(--tw-gradient-stops)_1px)]
          from-bgLineColor
          to-transparent
          bg-[length:200px_100px]
          bg-[size:4rem_4rem]
          "
        />
        {/* Grid horizontal */}
        <div
          className="
          absolute inset-0 -z-10 h-full w-full
          bg-[linear-gradient(to_bottom,_var(--tw-gradient-stops)_1px)]
          from-bgLineColor
          to-transparent
          bg-[size:2rem_2rem]
          "
        />
        {/* Fade out */}
        {/* Light blue */}
        {/* <div
          className="
          absolute inset-0 -z-10 h-full w-full
          // Percentages: %width, %height, %x, %y
          bg-[radial-gradient(ellipse_30%_5%_at_50%_0%,rgba(255,255,255,1)_100%,transparent_1000%)]
          "
        /> */}
        {/* Light orange */}
        <div
          className="
          absolute inset-0 -z-10 h-full w-full
          // Percentages: %width, %height, %x, %y
          bg-[radial-gradient(ellipse_30%_5%_at_50%_0%,rgba(212,212,212,1)_100%,transparent_1000%)]
          "
        />
        {/* Color splash */}
        <div
          className="
          absolute bottom-0 left-0 right-0 top-0 
          bg-[radial-gradient(circle_800px_at_100%_100%,_var(--tw-gradient-stops))]
          from-bgColorSplash
          to-transparent
          "
        />
      </div>
    </>
  );
}
