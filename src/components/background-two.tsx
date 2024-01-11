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
        <div
          // mask image: %width, %height, %x, %y
          className="
            absolute inset-0 -z-10 h-full w-full 
            bg-[var(--bg-primary)] 
            bg-[linear-gradient(to_right,var(--bg-linecolor)_1px,transparent_1px),linear-gradient(to_bottom,var(--bg-linecolor)_1px,transparent_1px)]
            bg-[size:var(--bg-tilewidth)_var(--bg-tileheight)]
            [mask-image:radial-gradient(ellipse_200%_9%_at_50%_100%,var(--bg-fadeto)_100%,transparent_1000%)]
          "
        >
          {/* <div
            className="
          absolute bottom-0 left-0 right-0 top-0 
          bg-[radial-gradient(circle_800px_at_100%_200px,var(--bgColorSplash),transparent)]
          "
          ></div> */}
          {/* <div
            className="
              absolute bottom-0 left-0 right-0 top-0 
              bg-[radial-gradient(circle_800px_at_100%_100%,var(--bgColorSplash),transparent)]
            "
          /> */}

          <div
            className="
              absolute bottom-0 left-0 right-0 top-0 
              bg-[radial-gradient(circle_800px_at_100%_100%,_var(--tw-gradient-stops))]
              from-blue-200 
              to-transparent
            "
          />

          {/* <div className="rounded-full h-48 w-48 bg-gradient-radial from-purple-500 via-pink-500 to-red-500"></div>

          <div className="absolute bottom-0 left-0 right-0 top-0 bg-radial-splash-br from-bgColorSplash to-transparent"></div> */}

          {/* <div
            style={{
              background: `radial-gradient(circle 800px at 100% 100%,var(--bgColorSplash),transparent)`,
            }}
            className="absolute bottom-0 left-0 right-0 top-0"
          /> */}
        </div>
      </div>
    </>
  );
}
