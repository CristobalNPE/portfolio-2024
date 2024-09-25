import { Paper } from "~/components/paper";
import { Button } from "~/components/ui/button";
import { Icon } from "~/components/ui/icon";

export function Contact() {
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
