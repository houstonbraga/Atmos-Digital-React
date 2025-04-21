import imageAbout from "@/assets/images/logo-about.png";

export default function AboutUs() {
  return (
    <>
      <div className="flex items-center justify-center mb-32 gap-10">
        <p className="font-poppins text-lg max-w-[550px]">
          A <span className="text-amber-400">Atmos Digital</span> é uma
          agência digital especializada em desenvolvimento web, design digital e vendas de sistemas web (SaaS)
          digital. Criamos soluções inovadoras para
          empresas que desejam fortalecer sua presença online, combinando
          tecnologia, estratégia e criatividade. Nosso objetivo é
          transformar ideias em experiências digitais impactantes, ajudando
          marcas a crescer e se destacar no mercado.
        </p>
      
        <img src={imageAbout} alt="site-hero-about" />
        </div>
          <p className="font-poppins text-md max-w-[900px] text-center">
            No mundo digital de hoje, ter uma presença forte na internet não é
            mais uma opção, é uma necessidade. A{" "}
            <span className="text-amber-400">Atmos Digital</span> é uma agência
            digital especializada em criar soluções inovadoras para empresas que
            desejam se destacar no ambiente online.
          </p>
    </>
  )
}