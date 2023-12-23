"use client";

import React, { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";

// Images must be 512x512
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
  const [dotsArray, setDotsArray] = useState(null);
  const [noiseWidth, setNoiseWidth] = useState(512);
  const [noiseHeight, setNoiseHeight] = useState(512);
  const scale = 1; // Set your desired scale

  const gridSpacing = 16;
  const dotSize = 16;
  let noiseOffsetX = 0;
  let noiseOffsetY = 0;
  let minAlpha = 0;
  let maxAlpha = 0.6;

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    setDotsArray(createDots(canvas));

    // Must resize here, otherwise the canvas will be stretched to fit the container
    canvas.style.width = "100%";
    canvas.style.height = "100%";
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    // Ensure to pass a function as the callback
    generatePerlinNoise(noiseWidth, noiseHeight, scale, (noise) => {
      setNoiseData(noise);
    });
  }, []);

  useEffect(() => {
    // Build initial grid
    if (!dotsArray) {
      return;
    }
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    drawDots(dotsArray, canvas, ctx);
  }, [dotsArray]);

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
    let dots = [];
    for (let x = 0; x < canvas.width; x += gridSpacing) {
      for (let y = 0; y < canvas.height; y += gridSpacing) {
        dots.push({ x, y });
      }
    }
    return dots;
  }

  function drawDots(dotsArray, canvas, ctx) {
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

    // Reset offset to prevent eventual overflow
    if (noiseOffsetX >= noiseWidth) {
      noiseOffsetX = 0;
    }
    if (noiseOffsetY >= noiseHeight) {
      noiseOffsetY = 0;
    }

    requestAnimationFrame(() => animate(dotsArray, canvas, ctx));
  }

  useEffect(() => {
    if (noiseData && !animStarted) {
      setAnimStarted(true);
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
      // const dotsArray = createDots(canvas);
      animate(dotsArray, canvas, ctx);
    }
  }, [noiseData]);

  return (
    <Card className="p-[1%] w-full h-full flex justify-center overflow-hidden">
      <div className="w-full h-full">
        <canvas
          ref={canvasRef}
          id="myCanvas"
          width="512"
          height="512"
          // style={{ width: "100%", height: "100%" }}
          className="absolute top-0 left-0 object-none"
        ></canvas>
        <div className="top-0 left-0 h-full w-full">{children}</div>
      </div>
    </Card>
  );
}
