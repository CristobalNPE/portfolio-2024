import { Technology } from "./technologies";

export type Proyect = {
  name: string;
  description: string;
  liveUrl: string;
  githubUrl: string;
  image: string;
  techStack: Technology[];
};

export const proyects: Proyect[] = [
  {
    name: "Ventesca",
    description:
      "Sistema para registro de ventas y manejo de inventario/logística",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/CristobalNPE/ventesca",
    image: "/images/ventesca.png",
    techStack: [
      {
        name: "Typescript",
        icon: "typescript",
      },
      {
        name: "Remix",
        icon: "remix",
      },
      {
        name: "SQLite",
        icon: "sqlite",
      },
      {
        name: "TailwindCSS",
        icon: "tailwindcss",
      },
    ],
  },
];
