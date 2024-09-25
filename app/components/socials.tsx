import { Paper } from "~/components/paper";
import { socials } from "~/data/socials";
import { SocialsCard } from "./socials-card";

export function Socials() {
  return (
    <Paper className="grid grid-cols-3 gap-6 place-content-center h-fit ">
      {socials.map((social) => (
        <SocialsCard key={social.name} icon={social.icon} name={social.name} url={social.url} />
      ))}
    </Paper>
  );
}