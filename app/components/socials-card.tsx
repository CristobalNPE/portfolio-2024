import { Icon, IconName } from "~/components/ui/icon";

export function SocialsCard({
  icon,
  name,
  url,
}: {
  icon: IconName;
  name: string;
  url: string;
}) {
  return (
    <a
      target="_blank"
      href={url}
      className="flex flex-col gap-4 aspect-square justify-center items-center rounded-md p-5  hexagon cursor-pointer hover:bg-accent hover:shadow-sm transition-colors group"
    >
      <Icon
        className="text-4xl text-foreground  transition-all group-hover:scale-150   group-hover:text-primary"
        name={icon}
      />
      <p className="text-center scale-0 group-hover:scale-100 transition-all">
        {name}
      </p>
    </a>
  );
}
