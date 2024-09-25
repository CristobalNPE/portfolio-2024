import type { MetaFunction } from "@remix-run/node";
import { Languages } from "lucide-react";
import { ModeToggle } from "~/components/mode-toggle";
import { Paper } from "~/components/paper";
import { Button } from "~/components/ui/button";
import { Icon, IconName } from "~/components/ui/icon";

export const meta: MetaFunction = () => {
  return [
    { title: "Cristóbal Pulgar Estay | Porfolio" },
    { name: "description", content: "Welcome to my developer portfolio!" },
  ];
};

export default function Index() {
  return (
    <main className="grid md:grid-cols-2 xl:grid-cols-7 p-2 sm:p-4 gap-6 h-full ">
      <section className="xl:col-span-2 md:col-span-1 gap-4 h-full flex justify-stretch flex-col">
        <AboutMe />
        <PageOptions />
        <Contact />
      </section>
      <section className="hidden  xl:col-span-3 gap-4 xl:grid">
        <TechStack />
      </section>
      <section className=" xl:col-span-2 md:col-span-1 gap-4 flex flex-col ">
        <Socials />
        <Projects />
      </section>
    </main>
  );
}
function AboutMe() {
  return (
    <Paper className="flex-1 flex flex-col items-center text-center ">
      <h1 className="w-full  text-[clamp(1.5rem,4vw,2.5rem)] font-bold mb-2 break-words hyphens-auto tracking-tighter leading-tight">
        <span className="text-primary/80 animate-pulse mr-1">&lt;</span>
        Cristóbal&nbsp;
        <span className="inline-block">
          Pulgar
          <span className="text-primary/80 animate-pulse ml-1">/&gt;</span>
        </span>
      </h1>
      <h2 className="text-[clamp(1.2rem,3vw,1.8rem)] font-bold mb-4">
        Desarrollador Web
      </h2>
      <div className="text-[clamp(0.9rem,2vw,1.1rem)] max-w-prose h-full flex flex-col gap-4 ">
        <p className="text-muted-foreground text-[clamp(0.9rem,2vw,1.1rem)] max-w-prose leading-9 flex-1 flex items-center">
          Especializado en crear soluciones web eficientes y atractivas.
          Transformo conceptos en aplicaciones funcionales que aportan valor
          real.
        </p>

        <p className="text-foreground ">¡Bienvenido a mi repositorio digital!</p>
      </div>
    </Paper>
  );
}

function PageOptions() {
  return (
    <Paper className="flex gap-4 items-center justify-center">
      <ModeToggle />
      <Button variant="secondary" className="" size="lg">
        <Languages className="h-[1.2rem] w-[1.2rem] " />
        <span className="sr-only">Toggle theme</span>
      </Button>
    </Paper>
  );
}

function Contact() {
  return (
    <Paper className="h-fit flex gap-4 justify-center flex-col md:flex-row">
      <Button
        size={"lg"}
        className="font-bold h-16 text-xl w-full relative group "
      >
        <span className="group-hover:-translate-x-2 transition-all">
          Contacto
        </span>
        <Icon
          size="md"
          name="message-2"
          className="absolute right-24  opacity-0 group-hover:opacity-100 group-hover:translate-x-4 transition-all"
        />
      </Button>
      <Button
        size={"lg"}
        className="font-bold h-16 text-xl"
        variant={"outline"}
      >
        CV
      </Button>
    </Paper>
  );
}

function TechStack() {
  return <Paper>Tech Stack</Paper>;
}

function Socials() {
  return (
    <Paper className="grid grid-cols-3 gap-6 place-content-center h-fit ">
      <SocialsCard name="Discord" icon="discord" />
      <SocialsCard name="GitHub" icon="github" />
      <SocialsCard name="X" icon="x" />
      <SocialsCard name="LinkedIn" icon="linkedin" />
      <SocialsCard name="WhatsApp" icon="whatsapp" />
      <SocialsCard name="E-mail" icon="mail" />
    </Paper>
  );
}
function Projects() {
  return <Paper className="flex-1">Mis Proyectos</Paper>;
}

function SocialsCard({ icon, name }: { icon: IconName; name: string }) {
  return (
    <div className="flex flex-col gap-4 aspect-square justify-center items-center rounded-md p-5  hexagon cursor-pointer hover:bg-accent hover:shadow-sm transition-colors group">
      <Icon
        className="text-4xl text-foreground  transition-all group-hover:scale-150   group-hover:text-primary"
        name={icon}
      />
      <p className="text-center scale-0 group-hover:scale-100 transition-all">
        {name}
      </p>
    </div>
  );
}
