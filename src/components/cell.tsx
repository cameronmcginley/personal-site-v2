// components/Cell.jsx
export function Cell({ content, widthMultiplier = 1, heightMultiplier = 1 }) {
  // Define your base width and height in terms of Tailwind's spacing scale
  const baseWidth = 24; // Tailwind's width, e.g., w-24 (6rem)
  const baseHeight = 16; // Tailwind's height, e.g., h-16 (4rem)

  //   const widthClass = `w-[${baseWidth * widthMultiplier}px]`;
  //   const heightClass = `h-[${baseHeight * heightMultiplier}px]`;
  const widthClass = `w-${baseWidth * widthMultiplier}`;
  const heightClass = `h-${baseHeight * heightMultiplier}`;

  return (
    <div
      className={`${widthClass} ${heightClass} border border-gray-300 flex justify-center items-center`}
      //   className={`w-24 h-16 border border-gray-300 flex justify-center items-center`}
    >
      {content}
    </div>
  );
}
