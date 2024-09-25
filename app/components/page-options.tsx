import { Languages } from "lucide-react";
import { ModeToggle } from "~/components/mode-toggle";
import { Paper } from "~/components/paper";
import { Button } from "~/components/ui/button";

export function PageOptions() {
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
