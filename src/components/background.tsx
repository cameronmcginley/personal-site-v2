"use client";

import * as React from "react";
import "@/app/globals.css";

export function Background() {
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
      </div>
    </>
  );
}
