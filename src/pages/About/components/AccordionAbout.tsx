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
        Criação de SaaS com tecnologia de ponta
        </AccordionTrigger>
        <AccordionContent className="font-poppins text-md">
          Desenvolvemos softwares como serviço (SaaS) escaláveis e seguros, permitindo que sua empresa ofereça soluções inovadoras na nuvem. Da concepção à implementação, garantimos tecnologia de ponta e experiência otimizada para os usuários.
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
