import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  const email = process.env.ADMIN_EMAIL;
  const rawPass = process.env.ADMIN_PASSWORD;
  const password = await bcrypt.hash(rawPass, 10);

  await prisma.user.upsert({
    where: { email },
    update: { password },
    create: { email, password },
  });
  console.log("✅ Admin atualizado/criado:", email);

  // ==== POSTS ====
  const postsData = [
    {
      image: "/uploads/post-image.jpg",
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
        "A advocacia trabalhista é frequentemente reduzida a uma mera disputa por verbas rescisórias ou cálculos de horas extras. No entanto, ao mergulharmos na prática diária, percebemos que este ramo do Direito é o principal guardião da dignidade da pessoa humana no ambiente corporativo. Ele lida com o tempo de vida que o indivíduo vende em troca de subsistência, o que torna cada cláusula contratual um elemento de justiça social.",
        "Por trás de cada processo que tramita na Justiça do Trabalho, existe um trabalhador que viu sua rotina ser alterada, ou um empreendedor que tenta equilibrar a viabilidade do seu negócio com o respeito às normas. Ignorar o fator humano nessas relações é o primeiro passo para uma advocacia fria e ineficaz. O Direito do Trabalho deve ser lido como um instrumento de pacificação, onde o reconhecimento do esforço alheio é a base para a prosperidade mútua.",
        "O maior dilema do advogado moderno nesta área é encontrar o equilíbrio entre a aplicação rigorosa da CLT e a realidade econômica do país. Muitas vezes, a norma jurídica parece distante do cotidiano das pequenas empresas ou das novas modalidades de serviço. Por isso, a advocacia deve ser consultiva e estratégica, buscando prevenir o litígio através de uma gestão ética que minimize o risco de passivos trabalhistas sem desamparar o colaborador.",
        "O papel do advogado vai muito além da redação de petições iniciais ou defesas. Atuamos como verdadeiros mediadores em um cenário de alta carga emocional. Em audiências de conciliação, o objetivo deve ser o restabelecimento do equilíbrio que foi rompido, garantindo que as verbas alimentares cheguem a quem de direito, enquanto se preserva a segurança jurídica necessária para que o empregador continue gerando empregos.",
        "Defender o Direito do Trabalho é, em última instância, defender a sustentabilidade da economia nacional. Sem um mercado de trabalho regulado, onde os direitos mínimos sejam respeitados, o consumo cai e a desigualdade social se aprofunda. Portanto, o olhar humano sobre a advocacia trabalhista não é apenas uma questão de empatia, mas um compromisso técnico com a justiça e com o desenvolvimento do país.",
        "📌 Reflexão final: A advocacia trabalhista é feita de leis que regem o capital, mas seu coração bate através das pessoas. O sucesso de uma causa não se mede apenas pelo valor da condenação, mas pelo respeito devolvido a quem dedica seus dias ao trabalho.",
      ],
    },
    {
      image: "/uploads/post-image.jpg",
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
        "No cenário corporativo contemporâneo, a velocidade das mudanças exige que o empresário esteja focado na inovação e na operação. Contudo, essa agilidade não pode negligenciar a base jurídica que sustenta a organização. O Direito Empresarial moderno atua como uma bússola estratégica, permitindo que a tomada de decisão seja fundamentada em segurança jurídica, evitando que imprevistos legais drenem o fluxo de caixa da companhia.",
        "O planejamento preventivo é o grande diferencial das empresas que sobrevivem ao 'vale da morte' dos primeiros anos. Isso envolve desde a escolha correta do tipo societário até a elaboração de contratos de prestação de serviços que prevejam cláusulas de rescisão, multas e responsabilidades bem definidas. Uma estrutura jurídica bem desenhada é um ativo que aumenta o valor de mercado da empresa (valuation) e atrai investidores sérios.",
        "A implementação de programas de Compliance e Governança Corporativa deixou de ser exclusividade de grandes multinacionais. Hoje, pequenas e médias empresas que buscam contratos com o setor público ou parcerias internacionais precisam demonstrar integridade e transparência. Estar em conformidade com as leis anticorrupção e a LGPD (Lei Geral de Proteção de Dados) é um pré-requisito básico para a sobrevivência e reputação da marca.",
        "A sustentabilidade de um negócio no longo prazo depende de como ele gere seus riscos tributários e trabalhistas. Uma assessoria jurídica empresarial eficiente trabalha de forma interdisciplinar com a contabilidade, identificando oportunidades de recuperação de créditos tributários e reduzindo a exposição a multas administrativas. O foco é transformar a área jurídica, muitas vezes vista como centro de custos, em um centro de inteligência e lucro.",
        "📌 Reflexão final: Navegar no mercado empresarial brasileiro é desafiador, mas o sucesso não depende da sorte, e sim da preparação. Ter um suporte jurídico estratégico é o que garante que a empresa não apenas sobreviva às tempestades regulatórias, mas saiba aproveitar as ondas de oportunidade para crescer de forma ordenada e segura.",
      ],
    },
    {
      image: "/uploads/post-image.jpg",
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
        "O Direito de Família é, possivelmente, a área mais delicada da prática jurídica, pois nela o advogado lida diretamente com a intimidade e as fragilidades emocionais dos clientes. Quando um ciclo familiar se encerra, as leis civis servem como um roteiro para que essa transição ocorra com o menor impacto psicológico possível, priorizando sempre a proteção dos vulneráveis e a equidade na divisão do patrimônio construído.",
        "Em processos de divórcio, o maior desafio não é a partilha de bens materiais, mas a gestão dos sentimentos envolvidos. O advogado deve atuar com uma postura mediadora, buscando o diálogo para que as decisões sejam tomadas de forma consensual. O acordo extrajudicial em cartório tem se mostrado uma ferramenta valiosa, sendo mais rápido e menos desgastante do que as longas batalhas nas varas de família tradicionais.",
        "Quando falamos em guarda de filhos, o foco jurídico desloca-se inteiramente para o princípio do Melhor Interesse da Criança. A guarda compartilhada tornou-se a regra, visando garantir que ambos os pais participem ativamente da formação do menor, dividindo responsabilidades e tempo. O Direito deve agir para impedir que os filhos sejam utilizados como instrumentos de barganha ou vingança emocional em meio à separação dos pais.",
        "Além das questões de ruptura, o Direito Civil moderno oferece ferramentas de proteção preventiva, como o pacto antenupcial e a constituição de uniões estáveis com regimes de bens bem definidos. Essas medidas trazem clareza e segurança para o casal, evitando surpresas e conflitos em situações futuras. Planejar a estrutura jurídica da família é um exercício de transparência que fortalece a relação e protege o futuro de todos.",
        "📌 Reflexão final: Proteger os direitos familiares exige técnica jurídica apurada, mas também uma dose generosa de humanidade. O objetivo final deve ser sempre a preservação da dignidade dos envolvidos, garantindo que a justiça seja feita sem destruir os laços afetivos remanescentes ou comprometer o futuro das novas gerações.",
      ],
    },
    {
      image: "/uploads/post-image.jpg",
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
        "O Código de Defesa do Consumidor (CDC) representou uma revolução nas relações comerciais no Brasil, estabelecendo direitos básicos que visam equilibrar a balança entre o cidadão e as grandes corporações. Em um mercado cada vez mais digital e impessoal, conhecer os mecanismos de proteção é essencial para evitar que práticas abusivas, como a venda casada ou a publicidade enganosa, se tornem o padrão nas relações de consumo.",
        "Muitos consumidores desconhecem direitos fundamentais, como o Direito de Arrependimento, que permite a devolução de produtos comprados fora do estabelecimento comercial em até 7 dias, ou o direito à informação clara e precisa sobre o que está sendo adquirido. A advocacia especializada atua para educar o cliente e pressionar as empresas a cumprirem a legislação, garantindo a reparação por danos morais e materiais quando o serviço falha.",
        "A responsabilidade objetiva dos fornecedores é um dos pilares do CDC. Isso significa que, independentemente de culpa, a empresa deve responder pelos danos causados por defeitos em seus produtos ou vícios na prestação de seus serviços. O papel do advogado é documentar essas falhas e buscar a via judicial ou administrativa para que o consumidor seja compensado integralmente, desestimulando a repetição de condutas lesivas pela empresa.",
        "Questões complexas como atrasos em voos, problemas com operadoras de telefonia e cobranças bancárias indevidas são o cotidiano da defesa do consumidor. O empoderamento jurídico permite que o cidadão não aceite passivamente o 'não' do SAC das empresas. Com o suporte adequado, é possível reverter situações de injustiça e garantir que o mercado respeite o tempo e o dinheiro de quem move a economia.",
        "📌 Reflexão final: O consumo consciente e o conhecimento dos direitos transformam o cidadão de um simples comprador em um agente fiscalizador do mercado. A advocacia do consumidor não busca apenas indenizações, mas a melhoria contínua da qualidade dos serviços e produtos oferecidos à sociedade.",
      ],
    },
    {
      image: "/uploads/post-image.jpg",
      tags: ["Sucessões", "Patrimônio", "Planejamento"],
      author: "João Carlos Moura",
      title: "Planejamento Sucessório: Protegendo o Futuro da Sua Família",
      smallTitle: "Protegendo o Futuro da Sua Família",
      slug: "planejamento-sucessorio",
      excerpt:
        "A importância do planejamento sucessório e como a advocacia especializada pode ajudar a organizar a transmissão patrimonial de forma eficiente.",
      date: "2025-02-24",
      content: [
        "Falar sobre sucessão patrimonial ainda é um tabu para muitas famílias, mas a falta de planejamento é a principal causa da destruição de patrimônios construídos ao longo de décadas. O planejamento sucessório consiste em organizar, ainda em vida, como os bens serão transmitidos aos herdeiros, visando a eficiência tributária e, principalmente, a manutenção da harmonia familiar após a partida do patriarca ou da matriarca.",
        "Sem um planejamento adequado, os herdeiros são obrigados a enfrentar o processo de inventário, que pode consumir até 20% do valor total do patrimônio em impostos (ITCMD), taxas judiciais e honorários advocatícios. Além do custo financeiro, o inventário judicial é lento e muitas vezes acirra disputas entre irmãos e parentes, podendo levar anos para ser concluído, período em que os bens ficam bloqueados e podem se deteriorar.",
        "Ferramentas como a Holding Familiar têm ganhado destaque como uma solução moderna para a gestão de bens. Ao transferir o patrimônio para uma empresa, a sucessão ocorre através da doação de cotas, o que facilita a administração e evita a fragmentação dos imóveis ou empresas da família. Outras opções incluem o seguro de vida para liquidez imediata e o testamento, que permite dispor de até 50% do patrimônio para beneficiar pessoas específicas.",
        "O papel da advocacia de sucessões é atuar como um arquiteto patrimonial, desenhando estratégias personalizadas que respeitem a legítima dos herdeiros necessários enquanto otimizam a carga fiscal. Cada família tem uma dinâmica única, e o planejamento deve refletir os valores e desejos dos fundadores, garantindo que o legado seja uma fonte de prosperidade e não de brigas judiciais intermináveis.",
        "📌 Reflexão final: Planejar a sucessão não é sobre a morte, mas sobre o amor e a responsabilidade com quem fica. É a garantia de que o seu esforço de uma vida inteira servirá para amparar as próximas gerações de forma ordenada, justa e financeiramente inteligente.",
      ],
    },
    {
      image: "/uploads/post-image.jpg",
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
        "Desde a sua implementação, a Reforma Trabalhista (Lei 13.467/17) alterou profundamente a dinâmica entre patrões e empregados no Brasil. A premissa central de que 'o acordado prevalece sobre o legislado' trouxe uma flexibilidade inédita, permitindo que as particularidades de cada setor sejam respeitadas em acordos coletivos, mas também exigindo um cuidado redobrado para que direitos fundamentais não sejam violados em negociações desiguais.",
        "Uma das mudanças mais impactantes foi a regulamentação do teletrabalho e do trabalho intermitente, modalidades que ganharam força total após a pandemia. Para as empresas, isso abriu portas para a redução de custos operacionais e acesso a talentos em qualquer lugar do mundo. Para o trabalhador, trouxe o desafio de separar a vida profissional da pessoal e a necessidade de dominar as novas ferramentas de produtividade e controle de jornada remota.",
        "No campo do contencioso, a reforma introduziu a responsabilidade pelo pagamento de honorários de sucumbência, o que diminuiu drasticamente o número de aventuras judiciais infundadas. Hoje, para entrar com uma ação trabalhista, é preciso ter provas robustas e um pedido muito bem fundamentado, tornando o processo mais sério e técnico. Isso valoriza a advocacia trabalhista consultiva, que foca na prevenção de conflitos antes que eles cheguem ao juiz.",
        "A adaptação ao novo mercado de trabalho exige que tanto o RH das empresas quanto os sindicatos e os próprios trabalhadores estejam em constante atualização. A interpretação dos tribunais sobre pontos polêmicos da reforma ainda está em evolução, e o que era certo ontem pode mudar com uma nova decisão do STF. Ter uma assessoria jurídica que acompanhe essas mutações é o que diferencia o sucesso da falência em um ambiente de constantes incertezas legislativas.",
        "📌 Reflexão final: A Reforma Trabalhista não é um fim, mas o início de uma nova era de negociações. O equilíbrio entre a modernização das relações de trabalho e a proteção do trabalhador é o único caminho para um crescimento econômico sustentável que beneficie toda a sociedade brasileira.",
      ],
    },
    {
      image: "/uploads/post-image.jpg",
      tags: ["Empresarial", "Startup", "Inovação"],
      author: "João Carlos Moura",
      title: "Startups e Direito: Desafios Jurídicos no Mundo da Inovação",
      smallTitle: "Desafios Jurídicos no Mundo da Inovação",
      slug: "startups-e-direito",
      excerpt:
        "Como startups podem navegar pelos desafios jurídicos desde a constituição até o crescimento, evitando armadilhas legais comuns.",
      date: "2025-02-26",
      content: [
        "Startups operam sob o mantra do 'crescimento rápido ou morte súbita', mas ignorar o Direito no início da jornada é como construir um foguete sem parafusos. O ecossistema de inovação exige contratos dinâmicos e estruturas societárias que permitam a entrada de capital de risco sem travar a operação dos fundadores. O Marco Legal das Startups trouxe avanços, mas a complexidade tributária e trabalhista brasileira ainda exige vigilância constante.",
        "O erro mais comum dos fundadores é adiar a formalização do Acordo de Sócios (Founders Agreement). Definir as regras de entrada e saída, o percentual de cada um e o que acontece se um sócio decidir abandonar o barco é vital para evitar que a empresa morra por desentendimentos internos. Cláusulas de 'Vesting' e 'Cliff' são essenciais para garantir que todos os envolvidos entreguem o valor prometido antes de se tornarem donos definitivos de suas fatias.",
        "A proteção da Propriedade Intelectual (PI) é o que garante o valor real de uma startup de tecnologia. Sem o registro adequado de marcas, patentes ou o registro de software, a empresa fica vulnerável a cópias e perde atratividade para investidores. Em rodadas de investimento (Seed ou Série A), a due diligence jurídica vai verificar minuciosamente se todos os ativos criados por programadores e designers foram legalmente transferidos para a empresa através de contratos específicos.",
        "Outro desafio crítico é a conformidade com a LGPD. Startups lidam com grandes volumes de dados de usuários e qualquer vazamento pode resultar em multas milionárias e, pior, na destruição da confiança do mercado. O 'Privacy by Design' deve ser a regra: a proteção de dados deve estar no código do produto desde o primeiro dia, e não ser um anexo jurídico feito de última hora apenas para constar no site.",
        "📌 Reflexão final: Inovação e Direito não são forças opostas; pelo contrário, um Direito ágil e especializado é o que permite que a inovação escale com segurança. Para uma startup, o departamento jurídico não deve ser o setor do 'não', mas sim o setor que viabiliza o 'como' dentro da lei.",
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
      mensagem:
        "Preciso de orientação sobre um processo de divórcio. Gostaria de agendar uma consulta para discutir os detalhes da minha situação.",
    },
    {
      nome: "Maria Santos",
      email: "maria.santos@empresa.com",
      telefone: "(11) 88888-2222",
      tipoNegocio: "Direito Empresarial",
      mensagem:
        "Nossa empresa está enfrentando questões trabalhistas e precisamos de assessoria jurídica especializada para resolver os conflitos.",
    },
    {
      nome: "Carlos Oliveira",
      email: "carlos.oliveira@email.com",
      telefone: "(11) 77777-3333",
      tipoNegocio: "Direito do Consumidor",
      mensagem:
        "Comprei um produto com defeito e a empresa não está resolvendo. Gostaria de saber quais são meus direitos e como proceder.",
    },
    {
      nome: "Ana Costa",
      email: "ana.costa@email.com",
      telefone: "(11) 66666-4444",
      tipoNegocio: "Direito de Sucessões",
      mensagem:
        "Preciso de orientação sobre planejamento sucessório para proteger o patrimônio da minha família. Podemos agendar uma reunião?",
    },
    {
      nome: "Roberto Lima",
      email: "roberto.lima@startup.com",
      telefone: "(11) 55555-5555",
      tipoNegocio: "Direito Empresarial",
      mensagem:
        "Estou abrindo uma startup e preciso de orientação jurídica desde a constituição da empresa até contratos com investidores.",
    },
  ];

  for (const contato of contatosData) {
    const existsContato = await prisma.contato.findFirst({
      where: {
        email: contato.email,
        telefone: contato.telefone,
      },
    });

    if (!existsContato) {
      await prisma.contato.create({ data: contato });
      console.log(
        `✅ Contato criado: ${contato.nome} - ${contato.tipoNegocio}`,
      );
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
