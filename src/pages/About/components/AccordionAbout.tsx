import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function AccordionAbout() {
  return (
    <Accordion type="single" collapsible className="w-full max-w-5xl">
      <AccordionItem value="item-1">
        <AccordionTrigger className="text-start">Desenvolvimento Web de Alto Nível</AccordionTrigger>
        <AccordionContent className="font-poppins text-md">
          Construímos sites, plataformas e sistemas personalizados com
          tecnologia de ponta. Nossa equipe de desenvolvedores cria experiências
          interativas, responsivas e otimizadas para garantir a melhor
          performance e usabilidade. Do site institucional ao e-commerce
          robusto, entregamos soluções sob medida para cada necessidade.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger className="text-start">
          Marketing Digital para Impulsionar Resultados
        </AccordionTrigger>
        <AccordionContent className="font-poppins text-md">
          Uma presença digital de sucesso vai além de um bom site. Criamos
          estratégias completas de marketing digital, incluindo gestão de
          tráfego pago, SEO, redes sociais e e-mail marketing. Nossa missão é
          conectar marcas ao seu público-alvo e aumentar conversões de forma
          eficiente.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger className="text-start">
          Design Digital que Cativa e Converte
        </AccordionTrigger>
        <AccordionContent className="font-poppins text-md">
          O design é a primeira impressão que seu público terá da sua marca.
          Desenvolvemos identidades visuais, interfaces intuitivas e materiais
          gráficos que fortalecem a presença digital do seu negócio. Do branding
          ao UX/UI, garantimos designs que combinam estética e funcionalidade.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
