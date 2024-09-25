import { IconName } from "~/components/ui/icon";

export type Social = {
  name: string;
  icon: IconName;
  url: string;
};

export const socials: Social[] = [
  {
    name: "Discord",
    icon: "discord",
    url: "https://discord.com/users/cristobalp3085"
  },
  {
    name: "GitHub",
    icon: "github",
    url: "https://github.com/CristobalNPE"
  },
  {
    name: "X",
    icon: "twitter",
    url: "https://x.com/cnpedev"
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    url: "https://www.linkedin.com/in/cristobalnpe/"
  },
  {
    name: "WhatsApp",
    icon: "whatsapp",
    url: "https://wa.me/56936724002"
  },
  {
    name: "E-mail",
    icon: "mail",
    url: "mailto:cristobal.npe@gmail.com"
  }
];
