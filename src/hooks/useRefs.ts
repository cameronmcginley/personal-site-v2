import { useRef, RefObject } from "react";

export const useRefs = () => {
  const experienceRef: RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);
  const publicationsRef: RefObject<HTMLDivElement> =
    useRef<HTMLDivElement>(null);
  const projectsRef: RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);

  return {
    experienceRef,
    publicationsRef,
    projectsRef,
  };
};
