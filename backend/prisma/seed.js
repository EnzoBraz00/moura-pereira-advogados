import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  // ==== ADMIN ====
  const email = process.env.ADMIN_EMAIL;
  const rawPass = process.env.ADMIN_PASSWORD;
  const password = await bcrypt.hash(rawPass, 10);

  const exists = await prisma.user.findUnique({ where: { email } });
  if (!exists) {
    await prisma.user.create({ data: { email, password } });
    console.log("✅ Admin criado:", email);
  } else {
    console.log("ℹ️ Admin já existe.");
  }

  // ==== POSTS ====
  const postsData = [
    {
      image: "/src/assets/post-image.jpg",
      tags: ["Trabalhista", "Humano", "Opinião"],
      title:
        "Entre Leis, Direitos e Pessoas: Olhares Humanos sobre a Advocacia Trabalhista",
      smallTitle: "Olhares Humanos sobre a Advocacia Trabalhista",
      slug: "olhares-humanos-sobre-a-advocacia-trabalhista",
      excerpt:
        "Uma análise sensível e crítica sobre os caminhos da advocacia trabalhista, seus dilemas cotidianos e o papel do advogado diante da dignidade do trabalhador.",
      date: "2025-02-20",
      content: [
        "A advocacia trabalhista, muitas vezes, é enxergada apenas como o campo jurídico que trata de leis...",
        "Por trás de cada processo trabalhista existe uma pessoa...",
        "Um dos maiores dilemas da advocacia trabalhista está em conciliar a frieza das normas jurídicas...",
        "Mais do que um representante em audiências, o advogado trabalhista é também um mediador de conflitos...",
        "A advocacia trabalhista não deve ser vista apenas como um campo de disputa...",
        "📌 Reflexão final: A advocacia trabalhista é feita de leis, mas também de pessoas...",
      ],
    },
    {
      image: "/src/assets/post-image.jpg",
      tags: ["Empresarial", "Mercado", "Estratégia"],
      title:
        "Navegando no Mar Empresarial: Estratégias Jurídicas para o Sucesso no Mundo dos Negócios",
      smallTitle: "Estratégias Jurídicas para o Sucesso no Mundo dos Negócios",
      slug: "navegando-no-mar-empresarial",
      excerpt:
        "Explorando as complexidades do direito empresarial e como estratégias jurídicas eficazes podem impulsionar o crescimento e a sustentabilidade das empresas.",
      date: "2025-02-21",
      content: [
        "O mundo dos negócios é dinâmico, competitivo e repleto de desafios...",
        "Muito além da resolução de conflitos, a advocacia empresarial contribui com planejamento...",
        "Outro ponto essencial está no compliance, cada vez mais presente no cotidiano corporativo...",
        "Para alcançar sustentabilidade no mercado, a estratégia jurídica deve andar lado a lado...",
        "📌 Reflexão final: Navegar no mar empresarial exige mais do que boas ideias...",
      ],
    },
    {
      image: "/src/assets/post-image.jpg",
      tags: ["Civil", "Família", "Direitos"],
      title:
        "Laços e Leis: A Advocacia Civil na Proteção dos Direitos Familiares",
      smallTitle: "A Advocacia Civil na Proteção dos Direitos Familiares",
      slug: "lacos-e-leis",
      excerpt:
        "Uma reflexão sobre o papel do advogado civil na defesa dos direitos familiares, abordando questões como divórcio, guarda de filhos e patrimônio.",
      date: "2025-02-22",
      content: [
        "Os vínculos familiares são a base da sociedade...",
        "Questões como divórcio, guarda de filhos e partilha de bens envolvem também aspectos emocionais...",
        "Na guarda de filhos, por exemplo, o princípio do melhor interesse da criança...",
        "A advocacia civil também desempenha papel preventivo...",
        "📌 Reflexão final: Proteger os direitos familiares é, em última análise, proteger a dignidade humana...",
      ],
    },
  ];

  for (const post of postsData) {
    const existsPost = await prisma.post.findUnique({
      where: { slug: post.slug },
    });

    if (!existsPost) {
      await prisma.post.create({ data: post });
      console.log(`✅ Post criado: ${post.title}`);
    } else {
      console.log(`ℹ️ Post já existe: ${post.title}`);
    }
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
