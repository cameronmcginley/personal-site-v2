import * as React from "react";
import { featureFlag } from "@/app/utils";

export function PageTitle() {
  const text = "Cameron McGinley";
  const [char, setChar] = React.useState(-1);

  const animate = () => {
    let timer = setInterval(() => {
      setChar((prevChar) => {
        if (prevChar < text.length - 1) {
          return prevChar + 1;
        } else {
          clearInterval(timer);
          return prevChar;
        }
      });
    }, 50);
    // Return the interval so we can clear it later
    return timer;
  };

  // Trigger on mount
  React.useEffect(() => {
    let timer = animate();

    // Clean up the interval on component unmount
    return () => clearInterval(timer);
  }, []);

  return (
    <h1 className="drop-shadow-md text-white font-bold text-5xl tracking-wide text-center">
      {featureFlag.animations ? (
        Array.from(text).map((c, i) => (
          <span
            key={i}
            className={`transition delay-0 ease-in ${
              char >= i ? "opacity-100" : "opacity-0"
            }`}
          >
            {c}
          </span>
        ))
      ) : (
        <div>Cameron McGinley</div>
      )}
    </h1>
  );
}
