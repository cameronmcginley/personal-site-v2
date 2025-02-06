"use client";

import { Button } from "@/components/ui/button";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";

import { faBars } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { RefObject, useState } from "react";

interface NavbarProps {
  experienceRef: RefObject<HTMLElement>;
  publicationsRef: RefObject<HTMLElement>;
  projectsRef: RefObject<HTMLElement>;
}

export const Navbar = ({
  experienceRef,
  publicationsRef,
  projectsRef,
}: NavbarProps) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const scrollToSection = (ref: RefObject<HTMLElement>) => {
    setIsDrawerOpen(false);

    setTimeout(
      () => {
        if (ref.current) {
          window.scrollTo({
            top: ref.current.offsetTop,
          });
        }
      },
      isDrawerOpen ? 350 : 0
    );
  };

  return (
    <>
      <div className="max-sm:hidden">
        <div className="relative flex flex-col items-center h-8">
          <div className="absolute top-8 sm:top-0 flex gap-8">
            <a
              href="#experience"
              className="text-primary hover:underline decoration-link"
            >
              Experience
            </a>
            <a
              href="#publications"
              className="text-primary hover:underline decoration-link"
            >
              Publications
            </a>
            <a
              href="#projects"
              className="text-primary hover:underline decoration-link"
            >
              Projects
            </a>
          </div>
        </div>
      </div>

      <div className="flex flex-row sm:hidden h-8 px-8 justify-between">
        <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
          <DrawerTrigger>
            <Button
              variant="ghost"
              size="icon"
              asChild
              className="text-primary"
            >
              <FontAwesomeIcon icon={faBars} className="h-5 w-5" />
            </Button>
          </DrawerTrigger>
          <DrawerContent className="fixed top-0 h-auto bg-cardBg p-4">
            <div className="flex flex-col gap-4">
              <a
                href="#experience"
                className="text-primary hover:underline decoration-link"
                onClick={() => scrollToSection(experienceRef)}
              >
                Experience
              </a>
              <a
                href="#publications"
                className="text-primary hover:underline decoration-link"
                onClick={() => scrollToSection(publicationsRef)}
              >
                Publications
              </a>
              <a
                href="#projects"
                className="text-primary hover:underline decoration-link"
                onClick={() => scrollToSection(projectsRef)}
              >
                Projects
              </a>
            </div>
          </DrawerContent>
        </Drawer>
      </div>
    </>
  );
};
