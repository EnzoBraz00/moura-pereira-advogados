import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
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
      author: "João Carlos Moura",
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
      author: "João Carlos Moura",
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
      author: "João Carlos Moura",
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
    {
      image: "/src/assets/post-image.jpg",
      tags: ["Consumidor", "Proteção", "Direitos"],
      author: "João Carlos Moura",
      title:
        "Empoderamento do Consumidor: Como a Lei Protege Seus Direitos no Mercado",
      smallTitle: "Como a Lei Protege Seus Direitos no Mercado",
      slug: "empoderamento-do-consumidor",
      excerpt:
        "Um guia prático sobre os direitos do consumidor e como a advocacia especializada pode ajudar a resolver conflitos de consumo de forma eficaz.",
      date: "2025-02-23",
      content: [
        "O Código de Defesa do Consumidor é uma das legislações mais importantes do Brasil...",
        "Muitas vezes, o consumidor não conhece seus direitos básicos...",
        "A advocacia especializada em direito do consumidor atua como um verdadeiro parceiro...",
        "Questões como produtos com defeito, serviços mal prestados e cobranças indevidas...",
        "📌 Reflexão final: Conhecer seus direitos é o primeiro passo para ser um consumidor consciente...",
      ],
    },
    {
      image: "/src/assets/post-image.jpg",
      tags: ["Sucessões", "Patrimônio", "Planejamento"],
      author: "João Carlos Moura",
      title:
        "Planejamento Sucessório: Protegendo o Futuro da Sua Família",
      smallTitle: "Protegendo o Futuro da Sua Família",
      slug: "planejamento-sucessorio",
      excerpt:
        "A importância do planejamento sucessório e como a advocacia especializada pode ajudar a organizar a transmissão patrimonial de forma eficiente.",
      date: "2025-02-24",
      content: [
        "O planejamento sucessório é fundamental para proteger o patrimônio familiar...",
        "Muitas famílias enfrentam conflitos desnecessários por falta de planejamento...",
        "A elaboração de testamentos, doações e acordos pré-nupciais...",
        "A advocacia especializada em sucessões oferece soluções personalizadas...",
        "📌 Reflexão final: Planejar o futuro é um ato de amor e responsabilidade com a família...",
      ],
    },
    {
      image: "/src/assets/post-image.jpg",
      tags: ["Trabalhista", "Reforma", "Mercado"],
      author: "João Carlos Moura",
      title:
        "Reforma Trabalhista: Impactos e Oportunidades no Mercado de Trabalho",
      smallTitle: "Impactos e Oportunidades no Mercado de Trabalho",
      slug: "reforma-trabalhista-impactos",
      excerpt:
        "Análise dos principais impactos da reforma trabalhista e como empresas e trabalhadores podem se adaptar às novas regras do mercado.",
      date: "2025-02-25",
      content: [
        "A reforma trabalhista trouxe mudanças significativas no mercado de trabalho...",
        "Empresas precisam se adaptar às novas regras para evitar passivos trabalhistas...",
        "Trabalhadores devem conhecer seus direitos para não serem prejudicados...",
        "A advocacia trabalhista se tornou ainda mais essencial neste cenário...",
        "📌 Reflexão final: Conhecer a legislação é fundamental para navegar no novo mercado de trabalho...",
      ],
    },
    {
      image: "/src/assets/post-image.jpg",
      tags: ["Empresarial", "Startup", "Inovação"],
      author: "João Carlos Moura",
      title:
        "Startups e Direito: Desafios Jurídicos no Mundo da Inovação",
      smallTitle: "Desafios Jurídicos no Mundo da Inovação",
      slug: "startups-e-direito",
      excerpt:
        "Como startups podem navegar pelos desafios jurídicos desde a constituição até o crescimento, evitando armadilhas legais comuns.",
      date: "2025-02-26",
      content: [
        "O ecossistema de startups no Brasil cresce exponencialmente...",
        "Muitas startups enfrentam problemas jurídicos que poderiam ser evitados...",
        "A escolha da estrutura societária adequada é crucial desde o início...",
        "Questões de propriedade intelectual e contratos com investidores...",
        "📌 Reflexão final: Inovação e compliance jurídico devem andar juntos para o sucesso da startup...",
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

  // ==== FORMULÁRIOS DE CONTATO ====
  const contatosData = [
    {
      nome: "João Silva",
      email: "joao.silva@email.com",
      telefone: "(11) 99999-1111",
      tipoNegocio: "Direito Civil",
      mensagem: "Preciso de orientação sobre um processo de divórcio. Gostaria de agendar uma consulta para discutir os detalhes da minha situação.",
    },
    {
      nome: "Maria Santos",
      email: "maria.santos@empresa.com",
      telefone: "(11) 88888-2222",
      tipoNegocio: "Direito Empresarial",
      mensagem: "Nossa empresa está enfrentando questões trabalhistas e precisamos de assessoria jurídica especializada para resolver os conflitos.",
    },
    {
      nome: "Carlos Oliveira",
      email: "carlos.oliveira@email.com",
      telefone: "(11) 77777-3333",
      tipoNegocio: "Direito do Consumidor",
      mensagem: "Comprei um produto com defeito e a empresa não está resolvendo. Gostaria de saber quais são meus direitos e como proceder.",
    },
    {
      nome: "Ana Costa",
      email: "ana.costa@email.com",
      telefone: "(11) 66666-4444",
      tipoNegocio: "Direito de Sucessões",
      mensagem: "Preciso de orientação sobre planejamento sucessório para proteger o patrimônio da minha família. Podemos agendar uma reunião?",
    },
    {
      nome: "Roberto Lima",
      email: "roberto.lima@startup.com",
      telefone: "(11) 55555-5555",
      tipoNegocio: "Direito Empresarial",
      mensagem: "Estou abrindo uma startup e preciso de orientação jurídica desde a constituição da empresa até contratos com investidores.",
    },
  ];

  for (const contato of contatosData) {
    const existsContato = await prisma.contato.findFirst({
      where: { 
        email: contato.email,
        telefone: contato.telefone 
      },
    });

    if (!existsContato) {
      await prisma.contato.create({ data: contato });
      console.log(`✅ Contato criado: ${contato.nome} - ${contato.tipoNegocio}`);
    } else {
      console.log(`ℹ️ Contato já existe: ${contato.nome}`);
    }
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
