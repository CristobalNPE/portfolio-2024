import {
  mainTechStack,
  secondaryTechStack,
  Technology,
} from "~/data/technologies";
import { Paper } from "./paper";
import { Icon } from "./ui/icon";

export function TechStack() {


  return (
    <Paper className="flex flex-col gap-8  justify-around">
      <div className="">
        <h1 className="text-2xl font-bold mb-4 text-center">Stack Principal</h1>
        <div className="grid grid-cols-3 gap-8 mx-auto justify-items-center">
          {mainTechStack.map((tech) => (
            <MainTechCard key={tech.name} tech={tech} />
          ))}
        </div>
      </div>
      <div className="">
      <h1 className="text-2xl font-bold mb-4 text-center">Tecnologías complementarias</h1>
        <div className="flex  gap-3 flex-wrap justify-center  w-full mt-4 flex-1">
          {secondaryTechStack.map((tech) => (
            <SecondaryTechCard key={tech.name} tech={tech} />
          ))}
        </div>
      </div>
    </Paper>
  );
}
function MainTechCard({ tech }: { tech: Technology }) {
  return (
    <div className="flex flex-col p-4 rounded-md border border-border items-center gap-4 w-[9rem] h-[10rem] group hover:scale-105 transition-all duration-300">
      <Icon
        className=" h-full w-full shrink-0 flex-1 transition-all duration-300 filter grayscale group-hover:filter-none"
        name={tech.icon}
      />
      <p className="h-[2rem] leading-none text-lg text-center text-balance">{tech.name}</p>
    </div>
  );
}
function SecondaryTechCard({ tech }: { tech: Technology }) {
  return (
    <div className="flex p-2 rounded-md border border-border items-center gap-3 group">
      <Icon
        className="text-3xl shrink-0 transition-all duration-300 filter grayscale group-hover:filter-none"
        name={tech.icon}
      />
      <p className="text-muted-foreground">{tech.name}</p>
    </div>
  );
}
