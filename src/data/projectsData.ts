interface Testimonials {
  id: number
  avatar?: string
  description?: string
  name?: string
  profession?: string
}

export const testimonials: Testimonials[] = [
  {
    id: 1,
    avatar: './avatar-testemunha1.svg',
    description: "A Atmos digital me fez crescer digitalmente em minha profissão, recebi muitos seguidores e clientes, hoje muita gente me acompanha e reconhece meu trabalho.",
    name: "Igor Mendes",
    profession: "Dentista",
  },
  {
    id: 2,
    avatar: "./avatar-testemunha2.svg",
    description: "A Atmos digital me fez crescer digitalmente em minha profissão, recebi muitos seguidores e clientes, hoje muita gente me acompanha e reconhece meu trabalho.",
    name: "Carollayne Barbosa",
    profession: "Designer",
  },
  {
    id: 3,
    avatar: "./avatar-testemunha1.svg",
    description: "A Atmos digital me fez crescer digitalmente em minha profissão, recebi muitos seguidores e clientes, hoje muita gente me acompanha e reconhece meu trabalho.",
    name: "Maria Eduarda",
    profession: "Designer",
  },
  {
    id: 4,
    avatar: "./avatar-testemunha2.svg",
    description: "A Atmos digital me fez crescer digitalmente em minha profissão, recebi muitos seguidores e clientes, hoje muita gente me acompanha e reconhece meu trabalho.",
    name: "Fernanda Oliveira",
    profession: "Designer",
  }
]