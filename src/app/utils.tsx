import React from "react";
import Link from "next/link";
import Image from "next/image";

interface BadgeData {
  key: string;
  url: string;
  imgSrc: string;
}

interface BadgeComponents {
  [key: string]: JSX.Element;
}

export const featureFlag = {
  animations: false,
  shineOnHover: false,
};

const badgeData: BadgeData[] = [
  {
    key: "robloxstudio",
    url: "https://www.roblox.com/create",
    imgSrc:
      "https://img.shields.io/badge/roblox_studio---?style=for-the-badge&logo=roblox&color=%23009fff",
  },
  {
    key: "react",
    url: "https://reactjs.org/",
    imgSrc:
      "https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB",
  },
  {
    key: "next",
    url: "https://nextjs.org/",
    imgSrc:
      "https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white",
  },
  {
    key: "javascript",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    imgSrc:
      "https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E",
  },
  {
    key: "nodejs",
    url: "https://nodejs.org/",
    imgSrc:
      "https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white",
  },
  {
    key: "firebase",
    url: "https://firebase.google.com/",
    imgSrc:
      "https://img.shields.io/badge/firebase-%23039BE5.svg?style=for-the-badge&logo=firebase",
  },
  {
    key: "cpp",
    url: "https://isocpp.org/",
    imgSrc:
      "https://img.shields.io/badge/c++-%2300599C.svg?style=for-the-badge&logo=c%2B%2B&logoColor=white",
  },
  {
    key: "typescript",
    url: "https://www.typescriptlang.org/",
    imgSrc:
      "https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white",
  },
  {
    key: "graphql",
    url: "https://graphql.org/",
    imgSrc:
      "https://img.shields.io/badge/-GraphQL-E10098?style=for-the-badge&logo=graphql&logoColor=white",
  },
  {
    key: "postgres",
    url: "https://www.postgresql.org/",
    imgSrc:
      "https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white",
  },
  {
    key: "python",
    url: "https://www.python.org/",
    imgSrc:
      "https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54",
  },
  {
    key: "scikitlearn",
    url: "https://scikit-learn.org/",
    imgSrc:
      "https://img.shields.io/badge/scikit--learn-%23F7931E.svg?style=for-the-badge&logo=scikit-learn&logoColor=white",
  },
  {
    key: "lua",
    url: "https://www.lua.org/",
    imgSrc:
      "https://img.shields.io/badge/lua-%232C2D72.svg?style=for-the-badge&logo=lua&logoColor=white",
  },
  {
    key: "vercel",
    url: "https://vercel.com/",
    imgSrc:
      "https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white",
  },
  {
    key: "rojo",
    url: "https://rojo.space/",
    imgSrc:
      "https://img.shields.io/badge/rojo---?style=for-the-badge&color=%23e13835",
  },
  {
    key: "brainfuck",
    url: "https://esolangs.org/wiki/Brainfuck",
    imgSrc:
      "https://img.shields.io/badge/brainf**k---?style=for-the-badge&color=%236da55f",
  },
];
export const generateBadgeComponents = (): BadgeComponents => {
  return badgeData.reduce<BadgeComponents>((acc, { key, url, imgSrc }) => {
    acc[key] = (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        key={key}
        style={{ display: "block", height: `24px`, width: "auto" }}
      >
        <img
          src={imgSrc}
          alt={`${key} Badge`}
          style={{ height: "100%", width: "auto", maxWidth: "100%" }}
        />
      </a>
    );
    return acc;
  }, {});
};
