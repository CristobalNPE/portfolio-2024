import { TypeAnimation } from "react-type-animation";
import CNPELogo from "~/assets/CNPELogo.png";
import { Paper } from "~/components/paper";

export function AboutMe() {
  return (
    <Paper className="flex-1 flex flex-col items-center text-center relative overflow-hidden">
      <h1 className="w-full  text-[clamp(1.5rem,4vw,2.5rem)] font-bold mb-2 break-words hyphens-auto tracking-tighter leading-tight">
        <span className="text-primary/80 animate-pulse mr-1">&lt;</span>
        <img src={CNPELogo} alt="CNPE Logo" className="absolute inset-0 opacity-5 select-none -z-10" />
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

        <TypeAnimation
          sequence={[
            "• Innovación constante",
            1000,
            "• Código limpio y mantenible",
            1000,
            "• Experiencias de usuario únicas",
            1000,
            "• Optimización de rendimiento",
            1000,
            "• Integración de tecnologías modernas",
            1001,
          ]}
          wrapper="p"
          speed={40}
          className="text-muted-foreground text-[clamp(0.9rem,2vw,1.1rem)] mb-8"
          repeat={Infinity}
        />

        <p className="text-foreground ">
          ¡Bienvenido a mi repositorio digital!
        </p>
      </div>
    </Paper>
  );
}
