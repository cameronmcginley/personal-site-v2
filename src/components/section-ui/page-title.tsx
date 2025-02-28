import * as React from "react";

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

  React.useEffect(() => {
    let timer = animate();

    // Clean up the interval on component unmount
    return () => clearInterval(timer);
  }, []);

  return (
    <h1 className="drop-shadow-md text-white font-bold text-5xl tracking-wide text-center">
      <div>Cameron McGinley</div>
    </h1>
  );
}
