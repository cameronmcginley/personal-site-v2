"use client";

import React, { useEffect, useRef, useState } from "react";
import "@/app/globals.css";
import { useTheme } from "next-themes";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

export function NoiseDots() {
  const canvasRef = useRef(null);
  const [perlinImageLoaded, setPerlinImageLoaded] = useState(false);
  const perlinImageRef = useRef(null);

  const canvas = useRef(null);
  const ctx = useRef(null);

  const perlinCanvas = useRef(null);
  const perlinCtx = useRef(null);

  const perlinData = useRef(null);

  const gridSpacing = 10;
  const dotSize = 1;

  // Load Perlin noise image and process it
  useEffect(() => {
    console.log("hi");
    const perlinImage = perlinImageRef.current;
    console.log(perlinImage);
    // canvas = canvasRef.current;
    // ctx = canvas.getContext("2d");
    // Set canvas
    canvas.current = canvasRef.current;
    ctx.current = canvas.current.getContext("2d");

    // ... rest of your canvas initialization code

    // Off-screen canvas for Perlin noise
    perlinCanvas.current = document.createElement("canvas");
    perlinCtx.current = perlinCanvas.current.getContext("2d");
    let perlinData;

    // perlinImage.onload = () => {
    //   perlinCanvas.current.width = perlinImage.width;
    //   perlinCanvas.current.height = perlinImage.height;
    //   perlinCtx.current.drawImage(perlinImage, 0, 0);
    //   perlinData.current = perlinCtx.getImageData(
    //     0,
    //     0,
    //     perlinCanvas.width,
    //     perlinCanvas.height
    //   ).data;
    //   const dotsArray = createDots();
    //   animate(dotsArray);
    //   setPerlinImageLoaded(true);
    // };

    // Set the Perlin noise image source if it's not loaded
    if (!perlinImage.complete) {
      perlinImage.src = "/perlin-noise.webp";
    } else {
      //   perlinCanvas.current.width = perlinImage.width;
      //   perlinCanvas.current.height = perlinImage.height;
      //   perlinCtx.current.drawImage(perlinImage, 0, 0);
      //   perlinData.current = perlinCtx.current.getImageData(
      //     0,
      //     0,
      //     perlinCanvas.width,
      //     perlinCanvas.height
      //   ).data;
      //   const dotsArray = createDots();
      //   animate(dotsArray);
      //   setPerlinImageLoaded(true);
    }

    // Event listener for window resize
    const handleResize = () => {
      // ... your resize code
    };

    window.addEventListener("resize", handleResize);

    // Clean up
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  let noiseOffsetX = 1;
  let noiseOffsetY = 0;

  let minAlpha = 0;
  let maxAlpha = 1;
  // ... your createDots, getNoiseAlpha, drawDots, animate functions
  function createDots() {
    console.log("createDots");
    let dots = [];
    for (let x = 0; x < canvas.current.width; x += gridSpacing) {
      for (let y = 0; y < canvas.current.height; y += gridSpacing) {
        dots.push({ x, y });
      }
    }
    return dots;
  }
  function getNoiseAlpha(x: any, y: any) {
    let adjustedX = (x + noiseOffsetX) % perlinCanvas.current.width;
    let adjustedY = (y + noiseOffsetY) % perlinCanvas.current.height;
    let pos = (adjustedY * perlinCanvas.current.width + adjustedX) * 4;

    // Normalize the value from the noise data to be between 0 and 1
    let normalizedValue = perlinData.current[pos] / 255;

    // Scale the normalized value to the desired alpha range
    return 255;
    return minAlpha + (maxAlpha - minAlpha) * normalizedValue;
  }
  function drawDots(dotsArray: any[]) {
    console.log("drawDots");
    ctx.current.clearRect(0, 0, canvas.current.width, canvas.current.height);
    dotsArray.forEach((dot) => {
      let alpha = getNoiseAlpha(dot.x, dot.y);
      ctx.current.beginPath();
      ctx.current.arc(dot.x, dot.y, dotSize, 0, Math.PI * 2);
      ctx.current.fillStyle = `rgba(255,255,255, ${alpha})`;
      ctx.current.fill();
    });
  }

  function animate(dotsArray: any[]) {
    drawDots(dotsArray);

    // Update the noise offsets to move the map
    noiseOffsetX += 1;
    noiseOffsetY += 1;

    requestAnimationFrame(animate);
  }

  useEffect(() => {
    console.log("perlinImageLoaded", perlinImageLoaded);
    if (perlinImageLoaded) {
      // Call functions dependent on Perlin image being loaded
      const dotsArray = createDots();
      animate(dotsArray);
    }
  }, [perlinImageLoaded]);

  return (
    <Card className="w-[550px] h-[50px]">
      <CardContent>
        <canvas
          ref={canvasRef}
          id="myCanvas"
          style={{ width: "100%", height: "100px" }}
        ></canvas>
        {/* <img
          ref={perlinImageRef}
          id="perlinNoiseImage"
          src="/perlin-noise.webp"
          style={{ display: "none" }}
        /> */}
        <Image
          ref={perlinImageRef}
          id="perlinNoiseImage"
          src="/perlin-noise.webp"
          style={{ display: "none" }}
          onLoad={() => setPerlinImageLoaded(true)}
          alt="Perlin noise image"
          width={512}
          height={512}
        />
      </CardContent>
    </Card>
  );
  //   const { theme } = useTheme();

  //   return (
  //     // <Card>
  //     //   <div class="absolute inset-0 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
  //     // </Card>

  //     <Card className="w-[550px] h-[50px]">
  //       <CardContent>
  //         {/* <div
  //           className="absolute inset-0 h-full w-full
  //             bg-[radial-gradient(to_right, #e5e7eb_1px, transparent_1px),radial-gradient(to_bottom, #e5e7eb_1px, transparent_1px)]
  //             [background-size:16px_16px]"
  //         ></div> */}
  //       </CardContent>
  //     </Card>
  //   );
}
