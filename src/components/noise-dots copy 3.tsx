"use client";

import React, { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";

// A simple Perlin noise generator (placeholder for actual implementation)
// function generatePerlinNoise(width, height, scale = 1) {
//   //   Implement the Perlin noise generation logic here.
//   //   This function should return an array representing the noise values.
//   //   For now, it returns an array of random values.
//   const noise = new Array(width * height);
//   for (let i = 0; i < noise.length; i++) {
//     noise[i] = Math.random();
//   }

//   console.log(noise);
//   return noise;
// }

// function generatePerlinNoise(width, height, scale = 1) {
//   const noise = new Array(width * height);
//   for (let y = 0; y < height; y++) {
//     for (let x = 0; x < width; x++) {
//       // Generate a scaled random value
//       let n = Math.random(); // Placeholder for Noise2D(x * scale, y * scale)

//       // Transform the range to [0.0, 1.0]
//       n += 1.0;
//       n /= 2.0;

//       // Store the value in the array
//       noise[y * width + x] = n;
//     }
//   }
//   return noise;
// }

// function generatePerlinNoise(width, height, scale = 1) {
//   // Create array of sequential numbers from 0 to width * height
//   const indices = new Array(width * height).fill(0).map((_, i) => i);

//   //   Normalize the indices to be between 0.0 and 1.0, save in place
//   indices.forEach((_, i, arr) => {
//     arr[i] /= arr.length;
//   });

//   console.log(indices);
//   return indices;
// }

function generatePerlinNoise(width, height, scale = 1, callback) {
  // Create an off-screen canvas
  const offscreenCanvas = document.createElement("canvas");
  offscreenCanvas.width = width;
  offscreenCanvas.height = height;
  const offscreenCtx = offscreenCanvas.getContext("2d");

  // Load the Perlin noise image
  const perlinImage = new Image();
  perlinImage.src = "/perlin-noise.webp";

  perlinImage.onload = () => {
    // Draw the image onto the canvas
    offscreenCtx.drawImage(perlinImage, 0, 0, width, height);

    // Get the image data
    const imageData = offscreenCtx.getImageData(0, 0, width, height).data;

    // Convert the image data to grayscale values representing noise
    const noise = new Array(width * height);
    for (let i = 0; i < imageData.length; i += 4) {
      // Assuming the image is grayscale, we can just take one color component
      noise[i / 4] = imageData[i] / 255; // Normalizing the value to be between 0 and 1
    }

    // Pass the noise data back via a callback
    callback(noise);
  };

  perlinImage.onerror = () => {
    console.error("Failed to load Perlin noise image.");
  };
}

export function NoiseDots({ children }) {
  const canvasRef = useRef(null);
  const [noiseData, setNoiseData] = useState(null);
  const [animStarted, setAnimStarted] = useState(false);

  const gridSpacing = 24;
  const dotSize = 4;
  let noiseOffsetX = 0;
  let noiseOffsetY = 0;
  let minAlpha = 0;
  let maxAlpha = 0.6;

  //   let offsetXadd = true;
  //   let offsetYadd = true;

  const width = 512; // Set your desired width
  const height = 512; // Set your desired height
  const scale = 1; // Set your desired scale

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Ensure to pass a function as the callback
    generatePerlinNoise(width, height, scale, (noise) => {
      setNoiseData(noise);
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
      const dotsArray = createDots(canvas);
    });

    const handleResize = () => {
      // Handle resize logic
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function getNoiseAlpha(x, y, width) {
    if (!noiseData) {
      return 0;
    }

    // Offset position to get new value from Perlin noise
    let adjustedX = (x + noiseOffsetX) % width;
    let adjustedY = (y + noiseOffsetY) % width;
    let pos = adjustedY * width + adjustedX;

    let normalizedValue = noiseData[pos];
    return minAlpha + (maxAlpha - minAlpha) * normalizedValue;
  }

  function createDots(canvas) {
    console.log("createDots");
    let dots = [];
    for (let x = 0; x < canvas.width; x += gridSpacing) {
      for (let y = 0; y < canvas.height; y += gridSpacing) {
        dots.push({ x, y });
      }
    }
    return dots;
  }

  function drawDots(dotsArray, canvas, ctx) {
    console.log("drawDots");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    dotsArray.forEach((dot) => {
      let alpha = getNoiseAlpha(dot.x, dot.y, canvas.width);
      ctx.beginPath();
      //   ctx.arc(dot.x, dot.y, dotSize, 0, Math.PI * 2);
      ctx.rect(dot.x, dot.y, dotSize, dotSize);
      ctx.fillStyle = `rgba(0,0,0,${alpha})`;
      ctx.fill();
    });
  }

  function animate(dotsArray, canvas, ctx) {
    drawDots(dotsArray, canvas, ctx);

    noiseOffsetX += 1;
    noiseOffsetY += 1;

    requestAnimationFrame(() => animate(dotsArray, canvas, ctx));
  }

  useEffect(() => {
    console.log("Kick off");
    if (noiseData && !animStarted) {
      console.log("Anim started");
      setAnimStarted(true);
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
      const dotsArray = createDots(canvas);
      animate(dotsArray, canvas, ctx);
    }
  }, [noiseData]);

  return (
    <Card className="p-[1%] w-full h-full flex justify-center overflow-hidden">
      <div>
        <canvas
          ref={canvasRef}
          id="myCanvas"
          width="512"
          height="512"
          style={{ width: "100%" }}
        ></canvas>
        <div className="absolute top-0 left-0 w-full">{children}</div>
      </div>
    </Card>
  );
}
