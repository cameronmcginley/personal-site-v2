"use client";

import * as React from "react";
import "@/app/globals.css";
import { useTheme } from "next-themes";

export function Background() {
  const { theme } = useTheme();
  const testcolor = "#000000";

  return (
    <>
      <div className="fixed inset-0">
        {/* Background */}
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

        {/* Fade out on top */}
        {/* Percentages: %width, %height, %x, %y */}
        <div
          className="
            absolute inset-0 -z-10 h-full w-full
          "
          style={{
            background:
              "radial-gradient(ellipse 30% 5% at 50% 0%, var(--color-bg-primary) 100%, transparent 1000%)",
          }}
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
