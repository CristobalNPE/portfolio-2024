import { Paper } from "~/components/paper";
import { Button } from "~/components/ui/button";
import { Icon } from "~/components/ui/icon";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "./ui/alert-dialog";
import { Textarea } from "./ui/textarea";

export function Contact() {
  return (
    <Paper className="h-fit flex gap-4 justify-center flex-col md:flex-row">
      <ContactModal />
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

function ContactModal() {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
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
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Formulario de contacto</AlertDialogTitle>
          <AlertDialogDescription>
            Enviame un mensaje y te responderé lo más rápido posible.
          </AlertDialogDescription>
          <Textarea className="mt-8" rows={7} placeholder="Escribe tu mensaje aquí"></Textarea>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancelar</AlertDialogCancel>
          <AlertDialogAction>Enviar</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
