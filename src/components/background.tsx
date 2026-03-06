"use client";

import * as React from "react";
import "@/app/globals.css";

export function Background() {
  return (
    <>
      <div className="fixed inset-0">
        <div
          className="
          absolute inset-0 -z-10 h-full w-full
          bg-bgPrimary"
        />
        <div
          className="absolute inset-0 -z-10 h-full w-full opacity-60"
          style={{
            backgroundImage:
              "linear-gradient(to right, var(--color-bg-line) 1px, transparent 1px), linear-gradient(to bottom, var(--color-bg-line) 1px, transparent 1px)",
            backgroundSize: "4rem 4rem",
          }}
        />
      </div>
    </>
  );
}
