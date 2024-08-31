import React from "react";

export const featureFlag = {
  animations: false,
  shineOnHover: false,
};

export interface BadgeData {
  key: string;
  url: string;
  imgSrc: string;
}

export interface BadgeComponents {
  [key: string]: JSX.Element;
}

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
  {
    key: "keras",
    url: "https://keras.io/",
    imgSrc:
      "https://img.shields.io/badge/Keras-D00000?style=for-the-badge&logo=keras&logoColor=white",
  },
  {
    key: "tensorflow",
    url: "https://www.tensorflow.org/",
    imgSrc:
      "https://img.shields.io/badge/TensorFlow-FF6F00?style=for-the-badge&logo=tensorflow&logoColor=white",
  },
  {
    key: "databricks",
    url: "https://databricks.com/",
    imgSrc:
      "https://img.shields.io/badge/databricks-FF3621?style=for-the-badge&logo=databricks&logoColor=white",
  },
  {
    key: "snowflake",
    url: "https://www.snowflake.com/",
    imgSrc:
      "https://img.shields.io/badge/snowflake-29B5E8?style=for-the-badge&logo=snowflake&logoColor=white",
  },
  {
    key: "pytest",
    url: "https://docs.pytest.org/",
    imgSrc:
      "https://img.shields.io/badge/pytest-0A9EDC?style=for-the-badge&logo=pytest&logoColor=white",
  },
  {
    key: "aws",
    url: "https://aws.amazon.com/",
    imgSrc:
      "https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white",
  },
  {
    key: "windowsserver",
    url: "https://www.microsoft.com/en-us/windows-server",
    imgSrc:
      "https://img.shields.io/badge/Windows_Server-0078D6?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCIgc3R5bGU9ImZpbGw6bm9uZTsiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTTIyIDIySDZWNkgxNnYxNnpNMjIgNDJINlYyNkgxNnYxNnpNNDIgMjJIMjZWNkg0NnYxNnpNNDIgNDJIMjZWMjZoMTZ2MTZ6Ii8+PC9zdmc+",
  },
  {
    key: "netappontap",
    url: "https://www.netapp.com/data-management/ontap-data-management-software/",
    imgSrc:
      "https://img.shields.io/badge/NetApp_ONTAP-0067C5?style=for-the-badge&logo=netapp&logoColor=white",
  },
  {
    key: "rhel",
    url: "https://www.redhat.com/en/technologies/linux-platforms/enterprise-linux",
    imgSrc:
      "https://img.shields.io/badge/RHEL-EE0000?style=for-the-badge&logo=redhat&logoColor=white",
  },
  {
    key: "suse",
    url: "https://www.suse.com/",
    imgSrc:
      "https://img.shields.io/badge/SUSE-34b676?style=for-the-badge&logo=suse&logoColor=white",
  },
  {
    key: "pyg",
    url: "https://www.pyg.org/",
    imgSrc:
      "https://img.shields.io/badge/PyG-%23EE4C2C.svg?style=for-the-badge&logo=pyg&logoColor=white",
  },
  {
    key: "pytorch",
    url: "https://pytorch.org/",
    imgSrc:
      "https://img.shields.io/badge/PyTorch-EE4C2C?style=for-the-badge&logo=pytorch&logoColor=white",
  },
  {
    key: "lambda",
    url: "https://aws.amazon.com/lambda/",
    imgSrc:
      "https://img.shields.io/badge/AWS_Lambda-FF9900?style=for-the-badge&logo=awslambda&logoColor=white",
  },
  {
    key: "dynamodb",
    url: "https://aws.amazon.com/dynamodb/",
    imgSrc:
      "https://img.shields.io/badge/AWS_DynamoDB-4053D6?style=for-the-badge&logo=amazon-dynamodb&logoColor=white",
  },
  {
    key: "redis",
    url: "https://redis.io/",
    imgSrc:
      "https://img.shields.io/badge/Redis-DC382D?style=for-the-badge&logo=redis&logoColor=white",
  },
  {
    key: "apigw",
    url: "https://aws.amazon.com/api-gateway/",
    imgSrc:
      "https://img.shields.io/badge/AWS_API_Gateway-FF4F00?style=for-the-badge&logo=amazonapigateway&logoColor=white",
  },
  {
    key: "digitalocean",
    url: "https://www.digitalocean.com/",
    imgSrc:
      "https://img.shields.io/badge/DigitalOcean VPS-%230167ff.svg?style=for-the-badge&logo=digitalocean&logoColor=white",
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
