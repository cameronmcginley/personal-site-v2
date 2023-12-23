"use client";

import * as React from "react";
import "@/app/globals.css";
import { useTheme } from "next-themes";

export function RadialGradientBG() {
  const { theme } = useTheme();

  return (
    <>
      <div className="fixed inset-0">
        {/* https://bg.ibelick.com/ */}
        <div
          className="
        absolute inset-0 -z-10 h-full w-full 
        bg-[var(--background)] 
        bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)]
        bg-[size:var(--tile-width)_var(--tile-height)]
        [mask-image:radial-gradient(ellipse_100%_100%_at_50%_0%,#000_70%,transparent_110%)]
        "
        >
          <div
            className="
          absolute bottom-0 left-0 right-0 top-0 
          bg-[radial-gradient(circle_800px_at_100%_200px,#d5c5ff,transparent)]
          dark:bg-[radial-gradient(circle_800px_at_100%_200px,#120929,transparent)] 
          "
          ></div>
        </div>
      </div>
    </>
  );
}
