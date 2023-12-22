import Image from "next/image";
import { TestCard } from "@/components/test-card";
import { ModeToggle } from "@/components/mode-toggle";
import { RadialGradientBG } from "@/components/radial-gradient-bg";
import { NoiseDots } from "@/components/noise-dots";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <RadialGradientBG />

      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <ModeToggle />

        {/* Empty div of 10 px height */}
        <div className="h-10" />

        {/* Import test-card component */}
        <TestCard />

        {/* Div with backdrop blur */}
        {/* <div className="backdrop-filter backdrop-blur-sm bg-white bg-opacity-20 rounded-md p-4">
          <div className="text-white">Hello world</div>
        </div> */}

        <div className="h-10" />
        <NoiseDots />
      </div>
    </main>
  );
}
