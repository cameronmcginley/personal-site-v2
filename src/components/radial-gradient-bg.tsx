"use client";

import * as React from "react";
import "@/app/globals.css";
import { useTheme } from "next-themes";

export function RadialGradientBG() {
  const { theme } = useTheme();

  // Get --border from globals.css
  //   const root = document.documentElement;
  //   const getCSSVar = (key) => getComputedStyle(root).getPropertyValue(key);
  //   const border = getCSSVar("--border");
  //   console.log(border);

  //   // Convert --border to hex
  //   const hex = border.replace("#", "");
  //   console.log(hex);

  return (
    // <div className="fixed inset-0 bg-gradient-to-br from-[#f9a8d4] to-[#fbc1cc] dark:from-[#1a202c] dark:to-[#2d3748]"></div>
    // Full size div with multiple radial gradients
    // <div className="fixed inset-0 bg-gradient-to-br from-[#f9a8d4] to-[#fbc1cc] dark:from-[#1a202c] dark:to-[#2d3748] bg-blend-multiply"></div>
    // Full size div empty
    // <div className="fixed inset-0">
    //   {/* <div class="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full opacity-30 mix-blend-multiply filter blur-3xl"></div>
    //   <div class="absolute top-0 left-48 w-96 h-96 bg-purple-300 rounded-full opacity-30 mix-blend-multiply filter blur-3xl"></div>
    //   <div class="absolute -bottom-8 left-28 w-72 h-72 bg-purple-300 rounded-full opacity-30 mix-blend-multiply filter blur-3xl"></div> */}

    //   {/* <div class="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div> */}
    //   {/* <div class="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div> */}
    //   {/* <div class="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div> */}

    //   <div class="absolute top-0 -left-4 w-72 h-72 bg-sky-950 rounded-full mix-blend-none filter blur-xl opacity-70 animate-blob"></div>
    //   <div class="absolute top-0 left-48 w-96 h-96 bg-sky-950 rounded-full mix-blend-none filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
    //   <div class="absolute -bottom-8 left-20 w-72 h-72 bg-sky-950 rounded-full mix-blend-none filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
    // </div>

    // Light mode
    // <div className="fixed inset-0">
    //   {/* https://bg.ibelick.com/ */}
    //   <div class="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
    //     <div class="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,#d5c5ff,transparent)]"></div>
    //   </div>
    // </div>

    // Dark mode
    <>
      {theme === "dark" ? (
        <div className="fixed inset-0">
          {/* https://bg.ibelick.com/ */}
          {/* <div class="absolute inset-0 -z-10 h-full w-full bg-black bg-[linear-gradient(to_right,#1a202c_1px,transparent_1px),linear-gradient(to_bottom,#1a202c_1px,transparent_1px)] bg-[size:6rem_4rem]">
            <div class="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,#1a202c,transparent)]"></div>
          </div> */}
          <div
            className="
                absolute inset-0 -z-10 h-full w-full 
                bg-[var(--background)] 
                bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] 
                bg-[size:6rem_4rem]
                [mask-image:radial-gradient(ellipse_100%_100%_at_50%_0%,#000_70%,transparent_110%)]
                "
          >
            <div
              className="
                absolute bottom-0 left-0 right-0 top-0 
                bg-[radial-gradient(circle_800px_at_100%_200px,#544b6b,transparent)] 
                "
            ></div>
          </div>
        </div>
      ) : (
        <div className="fixed inset-0">
          {/* https://bg.ibelick.com/ */}
          {/* bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)]  */}
          <div
            className="
                absolute inset-0 -z-10 h-full w-full 
                bg-[var(--background)] 
                bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)]
                bg-[size:6rem_4rem]
                [mask-image:radial-gradient(ellipse_100%_100%_at_50%_0%,#000_70%,transparent_110%)]
                "
          >
            <div
              className="
                absolute bottom-0 left-0 right-0 top-0 
                bg-[radial-gradient(circle_800px_at_100%_200px,#d5c5ff,transparent)] 
                "
            ></div>
          </div>
        </div>
      )}
    </>
  );
}
