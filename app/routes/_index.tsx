import type { MetaFunction } from "@remix-run/node";
import { AboutMe } from "~/components/about-me";
import { Contact } from "~/components/contact";
import { PageOptions } from "~/components/page-options";
import { Projects } from "~/components/projects";
import { Socials } from "~/components/socials";
import { TechStack } from "~/components/tech-stack";
export const meta: MetaFunction = () => {
  return [
    { title: "Cristóbal Pulgar Estay | Porfolio" },
    { name: "description", content: "Developer Portfolio" },
  ];
};

export default function Index() {
  return (
    <main className="grid md:grid-cols-2 xl:grid-cols-7 p-2 sm:p-4 gap-6 h-full  ">
      <section className="xl:col-span-2 md:col-span-1 gap-4 h-full flex justify-stretch flex-col">
        <AboutMe />
        <PageOptions />
        <Contact />
      </section>
      <section className="hidden  xl:col-span-3 gap-4 xl:grid ">
        <TechStack />
      </section>
      <section className=" xl:col-span-2 md:col-span-1 gap-4 flex flex-col ">
        <Socials />
        <Projects />
      </section>
    </main>
  );
}
