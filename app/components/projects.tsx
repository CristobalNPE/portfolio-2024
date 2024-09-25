import { Proyect, proyects } from "~/data/projects";
import { Technology } from "~/data/technologies";
import { Paper } from "./paper";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Icon } from "./ui/icon";

export function Projects() {
  return (
    <Paper className=" h-fit grid flex-1">
      <h1 className="text-xl font-bold mb-4 ">Proyectos recientes</h1>
      {proyects.map((proyect) => (
        <ProyectCard key={proyect.name} proyect={proyect} />
      ))}
    </Paper>
  );
}

function ProyectCard({ proyect }: { proyect: Proyect }) {
  return (
    <div className=" flex flex-col gap-2 p-2 group">
      <h2 className=" text-center font-light">
        <span className="text-lg">{proyect.name}:</span>{" "}
        <span className="text-muted-foreground "> {proyect.description}</span>{" "}
      </h2>

      <div className="flex flex-col gap-2 items-center flex-1">
        <div className="w-fit h-[10rem]  overflow-hidden bg-secondary border rounded-md p-2 filter grayscale group-hover:filter-none transition-all duration-300">
          <img
            src={proyect.image}
            alt={proyect.name}
            className="w-full h-full object-contain"
          />
        </div>
        <div className="flex flex-wrap gap-2">
          {proyect.techStack.map((tech: Technology) => (
            <Badge variant={"outline"} key={tech.name}>
              {tech.name}
            </Badge>
          ))}
        </div>
      </div>
      <div className="flex gap-2 py-4 w-full flex-col ">
        <Button variant={"outline"} asChild>
          <a target="_blank" href={proyect.githubUrl}>
            <Icon name="github">Ver en Github</Icon>
          </a>
        </Button>
        <Button className="w-full" asChild>
          <a target="_blank" href={proyect.liveUrl}>
            <Icon name="square-arrow-out-up-right">Visitar</Icon>
          </a>
        </Button>
      </div>
    </div>
  );
}
